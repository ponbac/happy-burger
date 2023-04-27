import { TailwindIndicator } from "@/components";
import "./globals.css";
import localFont from "next/font/local";

// TODO: Investigate a little more about how to use this!
const flame = localFont({
  src: [
    {
      path: "../assets/fonts/Flame-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/Flame-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-flame",
});

const flameSans = localFont({
  src: "../assets/fonts/FlameSans-Regular.woff2",
  display: "swap",
  variable: "--font-flame-sans",
});

export const metadata = {
  title: "Burger King Sverige",
  description: "Crafted by @ponbac's bony hands!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`bg-king-white ${flame.variable} ${flameSans.variable}`}
    >
      <body className="min-h-screen">{children}</body>
      <TailwindIndicator />
    </html>
  );
}
