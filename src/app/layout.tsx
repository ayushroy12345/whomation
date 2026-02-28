import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WHOMATION - AI WhatsApp Agent That Never Sleeps",
  description: "Automate replies, generate leads, and never miss a client. Set it up in minutes, let it work 24x7 on the cloud.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
