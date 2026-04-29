import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Volt Digital — Built to Grow Your Business",
  description: "From marketing to systems, built to grow your business.",
};

import SmoothScroll from "@/components/ui/SmoothScroll";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
