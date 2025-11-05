import type { Metadata } from "next";
import { Nunito_Sans, Inter } from "next/font/google";
import "modern-normalize/modern-normalize.css";
import "./globals.css";


const nunito = Nunito_Sans({
  subsets: ['cyrillic'], // обери потрібні підмножини
  weight: ['400'], // обери потрібні ваги
  display: 'swap',
});
const inter = Inter({
  subsets: ['cyrillic'], // обери потрібні підмножини
  weight: ['400', '500', '600'], // обери потрібні ваги
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Clothica Team Work',
  description: 'A platform for team collaboration and project management.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk">
      <body className={`${nunito.className} ${inter.className}`}>
        {children}
      </body>
    </html>
  );
}