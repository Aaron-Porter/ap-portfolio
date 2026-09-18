import type { Metadata } from "next";
import { FloatingNav } from "@/components/SiteChrome";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://aaronporter.io"),
  title: {
    default: "Aaron Porter - Designer & Technologist",
    template: "%s - Aaron Porter",
  },
  description: "Aaron Porter designs products & systems to empower human agency.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "Aaron Porter - Designer & Technologist",
    description: "Aaron Porter designs products & systems to empower human agency.",
    images: ["/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aaron Porter - Designer & Technologist",
    description: "Aaron Porter designs products & systems to empower human agency.",
    images: ["/og.png"],
  },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
        <FloatingNav />
      </body>
    </html>
  );
}
