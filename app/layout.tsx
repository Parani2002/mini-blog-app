import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";



export const metadata: Metadata = {
  title: "mini-blog-page",
  description: "mini blog page using nextjs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        
      >
        <Header />
        <main className="min-h-screen bg-gray-100">
   {children}
        </main>
     
        <Footer />
      </body>
    </html>
  );
}
