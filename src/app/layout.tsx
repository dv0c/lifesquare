import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import Providers from "@/components/Providers";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LifeSquare",
  description: "Blog of LifeSquare.gr",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn("xl:px-20 2xl:px-[inherit]", inter.className)}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
