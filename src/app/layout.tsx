import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientProvider from "@/components/ClientProvider";
import Navbar from "@/components/Navbar";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SITASONI - Modern Clothing Store",
  description: "Discover the latest fashion trends at SITASONI. Quality clothing for men, women, and kids.",
  keywords: "clothing, fashion, SITASONI, online store, apparel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientProvider>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </ClientProvider>
      </body>
    </html>
  );
}
