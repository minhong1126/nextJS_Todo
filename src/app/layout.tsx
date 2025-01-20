import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/layout/Header";

// layout.tsx
// 전체적인 레이아웃 틀.
// 폰트와 웹 title이 선언되어 있습니다. 로고가 담긴 헤더도 이곳에서 불러와 사용했습니다.

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
