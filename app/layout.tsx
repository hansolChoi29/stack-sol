import type { Metadata } from "next";
import "./styles/globals.css";

import {
  Geist,
  Geist_Mono,
  DynaPuff,
  Domine,
  Luckiest_Guy,
} from "next/font/google";
import SideNav from "./_components/SideNav";

const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

const dynaPuff = DynaPuff({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-dynapuff",
});
const domine = Domine({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-domine",
});
const luckiest = Luckiest_Guy({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-luckiest",
});

export const metadata: Metadata = {
  title: "portfolio",
  description: "최한솔의 ThroblShooting",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={[
        geistSans.variable,
        geistMono.variable,
        dynaPuff.variable,
        domine.variable,
        luckiest.variable,
      ].join(" ")}
    >
      <body className="app-shell">
        <div className="bg-layer" aria-hidden="true" />
        <main className="app-main">{children}</main>
      </body>
    </html>
  );
}
