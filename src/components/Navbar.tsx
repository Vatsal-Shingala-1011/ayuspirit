
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-white/95 backdrop-blur-sm shadow-sm py-2" 
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-2xl md:text-3xl font-serif font-bold text-ayu-green">
          AyuSpirit
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/products" className="nav-link">Products</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
          <Button variant="default" className="bg-ayu-green hover:bg-ayu-green/90 text-white">
            Get Started
          </Button>
        </nav>
        
        <button onClick={toggleMenu} className="md:hidden text-ayu-green">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg animate-fadeIn">
          <div className="flex flex-col py-4">
            <Link 
              to="/" 
              className="px-4 py-3 hover:bg-ayu-beige"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/products" 
              className="px-4 py-3 hover:bg-ayu-beige"
              onClick={() => setIsOpen(false)}
            >
              Products
            </Link>
            <Link 
              to="/about" 
              className="px-4 py-3 hover:bg-ayu-beige"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="px-4 py-3 hover:bg-ayu-beige"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <div className="px-4 py-3">
              <Button 
                variant="default" 
                className="w-full bg-ayu-green hover:bg-ayu-green/90 text-white"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
