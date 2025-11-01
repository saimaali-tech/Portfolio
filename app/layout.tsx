// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/src/components/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Saima's Portfolio",
  description: "DevOps Engineer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        {children}
        <footer className="bg-gray-800 text-white text-center mt-8 py-4 px-4 sm:px-6">
          © {new Date().getFullYear()} Saima. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
