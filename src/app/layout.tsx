import { Providers } from "@/lib/providers";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReactNode } from "react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cars Rent",
  description: "Welcome to Famous Shop to Rent Cars",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <h4>Navbar</h4>
          <div className="min-h-screen">{children}</div>
          <h4>Footer</h4>
        </Providers>
      </body>
    </html>
  );
}
