'use client';

import { useState, useEffect } from 'react';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-md border-b border-border' : 'bg-transparent'
      }`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <a
            href="#"
            className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
          >
            EO
          </a>

          <div className="hidden sm:flex gap-8 text-sm">
            <a href="#bio" className="text-foreground/70 hover:text-accent transition-colors">
              Bio
            </a>
            <a href="#projects" className="text-foreground/70 hover:text-accent transition-colors">
              Projects
            </a>
            <a href="#stack" className="text-foreground/70 hover:text-accent transition-colors">
              Stack
            </a>
            <a href="#contact" className="text-foreground/70 hover:text-accent transition-colors">
              Contact
            </a>
          </div>

          <a
            href="#contact"
            className="px-4 py-2 text-sm font-medium bg-accent text-accent-foreground rounded hover:opacity-90 transition-opacity"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </nav>
  );
}
