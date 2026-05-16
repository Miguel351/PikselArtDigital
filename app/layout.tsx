import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const geistSans = Inter({
variable: "--font-geist-sans",
subsets: ["latin"],
});

const geistMono = JetBrains_Mono({
variable: "--font-geist-mono",
subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Piksel Art Digital | Eğitim Platformu",
    template: "%s | Piksel Art Digital",
  },
  description: "Online eğitim platformu — yazılı ve videolu dersler, testler ve kişisel raporlar.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}