"use client";
import { useState, useEffect } from "react";
import { Navigation, Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show navbar when at top of page
      if (currentScrollY < 10) {
        setIsVisible(true);
      }
      // Hide when scrolling down, show when scrolling up
      else if (currentScrollY > lastScrollY) {
        setIsVisible(false);
        setMobileMenuOpen(false); // Close mobile menu when hiding
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
      style={{backgroundColor: 'rgba(217, 196, 176, 0.5)'}}
    >
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
         <a href="/"> <div className="flex items-center gap-4">
            <div className="p-3 rounded-2xl" style={{backgroundColor: '#CFAB8D'}}>
              <Navigation className="h-8 w-8 text-white" />
            </div>
            <span className="text-2xl font-bold text-gray-800">Bus-It</span>
          </div>
          </a>
          <div className="hidden md:flex items-center gap-8">
            <a href="/"> <button className="font-medium text-gray-800 hover:opacity-70 transition-opacity cursor-pointer">Home</button></a>
            <a href="/buses"> <button className="font-medium text-gray-800 hover:opacity-70 transition-opacity cursor-pointer">Buses</button></a>
            <a href="/support">  <button className="font-medium text-gray-800 hover:opacity-70 transition-opacity cursor-pointer">Support</button></a>
            <button className="px-8 py-3 text-white font-medium rounded-2xl hover:opacity-90 transition-opacity" style={{backgroundColor: '#CFAB8D'}}>
              Get Started
            </button>
          </div>

          <button 
            className="md:hidden p-2 text-gray-800"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden mt-6 py-6 border-t border-gray-300">
            <div className="flex flex-col gap-4">
             <a href="/"> <button className="text-left text-gray-800 hover:opacity-70 transition-opacity">Home</button></a>
             <a href="/buses"> <button className="text-left text-gray-800 hover:opacity-70 transition-opacity">Buses</button></a>
             <a href="/support"> <button className="text-left text-gray-800 hover:opacity-70 transition-opacity">Support</button></a>
              <button className="px-6 py-3 text-white font-medium rounded-xl" style={{backgroundColor: '#CFAB8D'}}>Get Started</button>
            </div>
          </div>
        )}
      </div>

    </nav>
  );
}