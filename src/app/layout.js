import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Vishal Kundu | Senior Software Developer",
  description:
    "Portfolio of Vishal Kundu, a Senior Software Developer specializing in Next.js, React, TypeScript, and Django, building performant, AI-powered web applications.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
