import Script from "next/script";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bus Charter | New Zealand",
  description: "Looking for affordable bus charter services for your group or event? Post your trip once and receive the best quotes from verified operators across the country",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://cdn.platform.openai.com/deployments/chatkit/chatkit.js"
          strategy="beforeInteractive"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
