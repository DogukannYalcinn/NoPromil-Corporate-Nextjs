import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
    title: {
        default: "NoPromil | Kişisel Alkol Analizörü",
        template: "%s | NoPromil",
    },
    description:
        "NoPromil kişisel alkol analizörü ile saniyeler içinde ölçüm yapın, bilinçli karar verin ve güvende kalın.",
    applicationName: "NoPromil",
    metadataBase: new URL("https://www.nopromil.com"),
    icons: {
        icon: [{ url: "/icon.png" }],
        apple: [{ url: "/apple-icon.png" }],
    },
    openGraph: {
        type: "website",
        title: "NoPromil | Kişisel Alkol Analizörü",
        description:
            "NoPromil kişisel alkol analizörü ile saniyeler içinde ölçüm yapın, bilinçli karar verin ve güvende kalın.",
        siteName: "NoPromil",
        images: [{ url: "/og.png", width: 1200, height: 630, alt: "NoPromil" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "NoPromil | Kişisel Alkol Analizörü",
        description:
            "NoPromil kişisel alkol analizörü ile saniyeler içinde ölçüm yapın, bilinçli karar verin ve güvende kalın.",
        images: ["/og.png"],
    },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
