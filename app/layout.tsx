import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import StarsCanvas from '@/components/main/StarBackground';
import Navbar from '@/components/main/Navbar';
import Footer from '@/components/main/Footer';
import { Toaster } from 'react-hot-toast';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Arman Ihsan Official',
  description: 'This is my latest portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/name-logo-black.svg" sizes="any" />
      </head>
      <body
        className={`${inter.className} bg-[#030014]  overflow-y-scroll min-h-screen overflow-x-hidden`}
      >
        <StarsCanvas />
        <Navbar />
        {children}
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
