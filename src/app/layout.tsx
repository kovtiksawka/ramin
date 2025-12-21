import type { Metadata } from "next";
import { Montserrat } from 'next/font/google';
import "./globals.css";

const montserrat = Montserrat({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '700'],
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: "Рамин Гасанов — персональный тренер",
  description: "Мастер спорта по боевому самбо. Более 20 лет опыта. Индивидуальные и групповые тренировки.",
  openGraph: {
    title: "Рамин Гасанов — персональный тренер",
    description: "Более 20 лет опыта. Запишись на бесплатную тренировку сегодня!",
    url: "https://ramin-gasanov.vercel.app/",
    siteName: "Рамин Гасанов",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/icons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/icons/apple-touch-icon.png", sizes: "180x180" },
    ],
    shortcut: "/icons/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={montserrat.variable}>
        {children}
      </body>
    </html>
  );
}
