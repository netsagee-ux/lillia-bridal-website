import type { Metadata } from "next";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteMotion } from "@/components/site/SiteMotion";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Lillia Bridal | Private Bridal House in Aberdeenshire",
    template: "%s | Lillia Bridal",
  },
  description:
    "An intimate private bridal house near Kemnay, Aberdeenshire, with personal one-to-one appointments and a considered collection of designer gowns.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;1,400;1,500&amp;family=Italiana&amp;family=Manrope:wght@300;400;500;600&amp;display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <SiteMotion />
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
