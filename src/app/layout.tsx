import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import Providers from "@/components/Providers";
import { cn } from "@/lib/utils";
import { Suspense } from "react";
import Image from "next/image";
import { Loader2 } from "lucide-react";

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
        <Suspense fallback={<Loader />}>
          <Providers>{children}</Providers>
        </Suspense>
      </body>
    </html>
  );
}

const Loader = () => {
  return (
    <div className="w-screen h-screen justify-center flex-col gap-5 flex items-center">
      <Image
        src={"/logo_without_name.png"}
        alt="logo"
        width={150}
        height={34}
      />
      <Loader2 className="animate-spin" />
    </div>
  );
};
