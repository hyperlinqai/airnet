import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import "./globals.css";
import ClientLayout from '@/components/layout/ClientLayout';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Airnet360',
  description: 'High Speed Internet Service Provider',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
