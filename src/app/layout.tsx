import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FullStackJoshua",
  description: "FullStackJoshua's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-background backdrop-blur-3xl min-h-screen relative`}
        style={{ color: "#0E0E0C" }}
      >
        <div className="fixed top-0 left-0 w-full h-full bg-noise opacity-10 pointer-events-none"></div>
        {children}
      </body>
    </html>
  );
}
