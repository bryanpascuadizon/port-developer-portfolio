import { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "bryanpascuadizon",
  description: "My Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex h-screen flex-col">
      <main className="flex-1 wrapper">
        <Header />
        {children}
        <Footer />
      </main>
    </div>
  );
}
