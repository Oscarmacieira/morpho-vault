import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { siteConfig } from "@/lib/site-config";
import { AppProviders } from "@/providers/AppProviders.";
import "@rainbow-me/rainbowkit/styles.css";
import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
