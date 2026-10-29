import type { Metadata } from "next";
import { Gowun_Dodum, Ephesis } from "next/font/google";
import "./globals.css";
const gowunDodum = Gowun_Dodum({
  variable: "--font-gowun-dodum",
  subsets: ["latin"],
  weight: "400"
});

const geistMono = Ephesis({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: "400"
});

// <body className={`${inter.variable} ${playfair.variable} font-sans`}>
export const metadata: Metadata = {
  title: "Ritika Shrestha | Software Engineer",
  description: "Personal Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${gowunDodum.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

