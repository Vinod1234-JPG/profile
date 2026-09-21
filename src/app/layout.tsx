import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { ScrollEffects } from "@/components/ui/ScrollEffects";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
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
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} h-full antialiased`}
      style={{ colorScheme: "light", scrollBehavior: "smooth" }}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-black/10 selection:text-black cursor-none md:cursor-auto relative">
        <CustomCursor />
        <ScrollEffects />
        <div className="relative z-10 flex flex-col flex-grow">
          {children}
        </div>
      </body>
    </html>
  );
}
