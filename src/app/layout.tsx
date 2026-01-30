import type { Metadata } from 'next';
import { JetBrains_Mono, Inter } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MominAI | High-Performance Agent Runtime",
  description: "Next-generation AI orchestration and sandboxing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased">
      <body
        className={`${jetbrainsMono.variable} ${inter.variable} font-sans selection:bg-momin-blue selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
