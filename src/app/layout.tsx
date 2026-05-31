import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pruitt's Home Improvements | Springfield MO — Decks, Plumbing, Pressure Washing & More",
  description: "Springfield MO's trusted home improvement team. Free quotes on deck building, power washing, plumbing, demolition, gutter cleaning, moving, and more. Call 417-818-2104.",
  keywords: "home improvement, springfield mo, deck building, power washing, plumbing, demolition, gutter cleaning, yard cleanup, free quotes",
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Georgia:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-charcoal text-white antialiased">
        {children}
      </body>
    </html>
  );
}