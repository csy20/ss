import 'next-auth';

declare module 'next-auth' {
  interface User {
    role: string;
    profileCompleted: boolean;
  }

  interface Session {
    user: {
      id: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
      role: string;
      profileCompleted: boolean;
    };
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    role: string;
    profileCompleted: boolean;
  }
}
