import type { Metadata } from "next";
import { Share_Tech_Mono } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { Analytics } from '@vercel/analytics/next';
import AudioPlayer from "./components/AudioPlayer/AudioPlayer";

const shareTechMono = Share_Tech_Mono({
  weight: ['400'],
  subsets: ["latin"],
  variable: "--font-share-tech-mono",
});

export const metadata: Metadata = {
  title: "Umay ŞAMLI // Cyber Security Engineer",
  description: "Computer Scientist // Cyber Security Engineer // NATO Operative",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${shareTechMono.variable}`}
      >
        <AudioPlayer />
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
