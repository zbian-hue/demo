import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Roblox Pass demo",
  description:
    "Interactive demo of the proposed Roblox Pass: FAE unlock, feats, Plus trial, and celebration moments.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  );
}
