import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/layout/Header";

const font = localFont({
  src: "../../public/fonts/NanumSquare_acB.ttf",
  display: "swap",
  variable: "--font-pretendard",
});

export const metadata: Metadata = {
  title: "Doit",
  description: "Next todo app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <div className="flex flex-col justify-center items-center">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
