import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';
import connectDB from '@/lib/mongodb';
import User from '@/models/User';

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        try {
          await connectDB();
          
          // Check if this is the admin email with admin password
          if (credentials.email === process.env.ADMIN_EMAIL && 
              credentials.password === process.env.ADMIN_PASSWORD) {
            
            // Find or create admin user
            let adminUser = await User.findOne({ email: credentials.email });
            
            if (!adminUser) {
              const hashedPassword = await bcrypt.hash(credentials.password, 12);
              adminUser = await User.create({
                name: 'Admin',
                email: credentials.email,
                password: hashedPassword,
                role: 'admin',
                profileCompleted: true,
              });
            } else if (adminUser.role !== 'admin') {
              // Update existing user to admin role
              adminUser.role = 'admin';
              await adminUser.save();
            }

            return {
              id: adminUser._id.toString(),
              name: adminUser.name,
              email: adminUser.email,
              role: adminUser.role,
              profileCompleted: adminUser.profileCompleted,
            };
          }

          // Regular user authentication
          const user = await User.findOne({ email: credentials.email });
          
          if (!user) {
            return null;
          }

          const isPasswordValid = await bcrypt.compare(credentials.password, user.password);
          
          if (!isPasswordValid) {
            return null;
          }

          return {
            id: user._id.toString(),
            name: user.name,
            email: user.email,
            role: user.role,
            profileCompleted: user.profileCompleted,
          };
        } catch (error) {
          console.error('Auth error:', error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
        token.profileCompleted = user.profileCompleted;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.sub!;
        session.user.role = token.role as string;
        session.user.profileCompleted = token.profileCompleted as boolean;
      }
      return session;
    },
  },
  pages: {
    signIn: '/auth/signin',
  },
  session: {
    strategy: 'jwt',
  },
};
