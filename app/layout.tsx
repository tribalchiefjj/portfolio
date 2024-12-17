'use client';

import './globals.css';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { ThemeProvider } from 'next-themes';
import AOS from 'aos';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <html lang="en" suppressHydrationWarning>
      <body className="transition-colors duration-300 bg-white dark:bg-gray-900">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
