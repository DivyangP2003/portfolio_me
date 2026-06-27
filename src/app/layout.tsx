import type { Metadata } from "next";
import { Bebas_Neue, Inter, Great_Vibes, Geist_Mono } from "next/font/google";
import ScrollProgress from "@/components/ui/ScrollProgress";
import "./globals.css";

const bebas = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: ["400"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  subsets: ["latin"],
  weight: ["400"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Divyang Palshetkar | Portfolio",
  description:
    "Environmental Engineer & Full-Stack Developer — IIT Jodhpur. WRF-Chem-Fire thesis, GIS, and production AI applications.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${bebas.variable} ${inter.variable} ${greatVibes.variable} ${geistMono.variable} min-h-screen bg-black antialiased`}
      >
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
