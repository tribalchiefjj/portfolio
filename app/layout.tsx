'use client';

import './globals.css'; // Ensure global styles are imported
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos'; // Import AOS library
import { useEffect } from 'react';
import Navbar from './components/Navbar'; // Import your Navbar component
import Footer from './components/Footer';
export default function RootLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    AOS.init(); // Initialize AOS animations
  }, []);

  return (
    <html lang="en">
      <head />
      <body className="bg-gray-50">
        <Navbar /> {/* Add the Navbar here */}
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
