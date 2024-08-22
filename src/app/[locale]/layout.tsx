import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Nav from "../../components/nav/nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Das Forum",
  description: "Das Forum helps you with menatl health",
};

interface RootLayoutProps {
  children: React.ReactNode;
  locale: never;
}

export default function RootLayout({ children, locale }: RootLayoutProps) {
  return (
    <html lang={locale}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
