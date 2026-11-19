import "./globals.css";
import { Plus_Jakarta_Sans, Fira_Code } from "next/font/google";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500"],
});

export const metadata = {
  title: "Vishal Kundu | Senior Software Developer",
  description:
    "Portfolio of Vishal Kundu, a Senior Software Developer specializing in Next.js, React, TypeScript, and Django, building performant, AI-powered web applications.",
  openGraph: {
      title: "Vishal Kundu | Senior Software Developer",
      description: "Portfolio of Vishal Kundu, a Senior Software Developer specializing in Next.js, React, TypeScript, and Django, building performant, AI-powered web applications.",
      images: ["https://portfolio-two-umber-23.vercel.app/_next/image?url=%2Fimages%2Fabout-image.png&w=1080&q=75"],
    },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${plusJakarta.variable} ${firaCode.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
