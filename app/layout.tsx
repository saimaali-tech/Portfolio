// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
        <nav className="bg-gray-800 p-4 text-white">
          <div className="container mx-auto flex justify-between">
            <a href="/" className="text-xl font-bold">My Portfolio</a>
            <ul className="flex space-x-4">
              <li><a href="#about">About</a></li>
              <li><a href="#education">Education</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#skills">Skills</a></li>
            </ul>
          </div>
        </nav>
        {children}
        <footer className="bg-gray-800 p-4 text-white text-center mt-8">
          © {new Date().getFullYear()} Saima. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
