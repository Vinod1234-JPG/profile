import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { ParticleNetwork } from "@/components/ui/ParticleNetwork";
import { ScrollEffects } from "@/components/ui/ScrollEffects";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vinod Patel | Portfolio",
  description: "Designer • Developer • Founder",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
      style={{ colorScheme: "dark", scrollBehavior: "smooth" }}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-accent/30 selection:text-accent cursor-none md:cursor-auto">
        <CustomCursor />
        <ScrollEffects />
        <ParticleNetwork />
        {children}
      </body>
    </html>
  );
}
