"use client"

import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      <nav className="absolute w-full top-0 z-50 bg-transparent">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="font-bold text-2xl bg-gradient-to-tr from-white via-yellow-700 to-white text-transparent bg-clip-text">
              <Link href="/">Humayon kabir</Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link 
                href="/" 
                className="text-white hover:text-white/80 px-3 py-2  font-bold"
              >
                HOME
              </Link>
              <Link
                href="/configure/services" 
                className="text-white hover:text-white/80 px-3 py-2 font-bold"
              >
                SERVICES
              </Link>
              <Link
                href="/configure/about" 
                className="text-white hover:text-white/80 px-3 py-2 font-bold"
              >
                ABOUT
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white/80"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Backdrop */}
        <div 
          className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ease-in-out md:hidden ${
            isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          onClick={() => setIsOpen(false)}
        />

        {/* Mobile Menu - Slide from right */}
        <div 
          className={`fixed top-0 right-0 h-full w-64 bg-black/50 shadow-lg transform transition-transform duration-300 ease-in-out md:hidden ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="p-4">
            <div className="flex justify-end">
              <button
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-yellow-400 focus:outline-none"
              >
                <X size={24} />
              </button>
            </div>

            <div className="mt-8 flex flex-col items-center justify-center space-y-4">
              <Link
                href="/"
                className="block px-5 py-2  font-bold text-white hover:text-white hover:bg-yellow-900 rounded-[5px]"
              >
                HOME
              </Link>
              <Link
                href="/configure/services"
                className="block px-5 py-2  font-bold text-white hover:text-white hover:bg-yellow-900 rounded-[5px]"
              >
                SERVICES
              </Link>
              <Link
                href="/configure/about"
                className="block px-5 py-2  font-bold text-white hover:text-white hover:bg-yellow-900 rounded-[5px]"
              >
                ABOUT
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;