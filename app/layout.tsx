import { Inter } from "next/font/google";
import "@/assets/styles/global.css";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "bryanpascuadizon",
  description: "My Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body className={`${inter.className} antialiased bg-[#171717]`}>
        {children}
      </body>
    </html>
  );
}
