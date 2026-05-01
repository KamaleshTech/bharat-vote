"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Menu, X, CheckSquare, Layers, HelpCircle, Map, MessageSquare } from 'lucide-react';
import { useState } from 'react';

const navLinks = [
  { name: 'Home', href: '/', icon: <CheckSquare size={18} /> },
  { name: 'Journey', href: '/journey', icon: <Map size={18} /> },
  { name: 'Flashcards', href: '/flashcards', icon: <Layers size={18} /> },
  { name: 'Quiz', href: '/quiz', icon: <HelpCircle size={18} /> },
  { name: 'AI Assistant', href: '/assistant', icon: <MessageSquare size={18} /> },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 glass-panel border-b border-white/20 dark:border-gray-800/50 backdrop-blur-md bg-white/70 dark:bg-gray-900/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 flex items-center gap-3">
            <Link href="/" className="flex items-center gap-3">
              <img src="/eci-logo.png" alt="ECI Logo" className="w-10 h-10 object-contain drop-shadow-md" />
              <span className="font-extrabold text-2xl tracking-tight text-gray-900 dark:text-white cursor-pointer hidden sm:block">
                Bharat<span className="gradient-text">Vote</span>
              </span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    aria-current={isActive ? 'page' : undefined}
                    className="relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 group"
                  >
                    <span className={`flex items-center gap-2 z-10 relative ${isActive ? 'text-white' : 'text-gray-700 dark:text-gray-300 group-hover:text-saffron'}`}>
                      {link.icon}
                      {link.name}
                    </span>
                    {isActive && (
                      <motion.div
                        layoutId="nav-pill"
                        className="absolute inset-0 bg-gradient-to-r from-saffron to-india-green rounded-xl shadow-md z-0"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              {isOpen ? <X className="block h-6 w-6" aria-hidden="true" /> : <Menu className="block h-6 w-6" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden glass-panel absolute w-full border-t border-gray-200 dark:border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-4 rounded-md text-base font-medium flex items-center gap-3 ${
                    isActive
                      ? 'bg-gradient-to-r from-saffron to-india-green text-white shadow-md'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  {link.icon}
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
