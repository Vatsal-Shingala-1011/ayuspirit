
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-ayu-beige text-foreground pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          <div>
            <h3 className="text-2xl font-serif font-semibold mb-4 text-ayu-green">AyuSpirit</h3>
            <p className="mb-4 text-gray-600">
              Natural wellness products inspired by Ayurvedic traditions, crafted for the modern lifestyle.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-ayu-brown hover:text-ayu-green transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-ayu-brown hover:text-ayu-green transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-ayu-brown hover:text-ayu-green transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-serif font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-ayu-green transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-600 hover:text-ayu-green transition-colors">Products</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-ayu-green transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-ayu-green transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-serif font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 text-ayu-green shrink-0 mt-0.5" />
                <span className="text-gray-600">123 Wellness Avenue, Harmony City, 12345</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-ayu-green shrink-0" />
                <a href="mailto:info@ayuspirit.com" className="text-gray-600 hover:text-ayu-green">info@ayuspirit.com</a>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-ayu-green shrink-0" />
                <a href="tel:+1234567890" className="text-gray-600 hover:text-ayu-green">+1 (234) 567-890</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-serif font-semibold mb-4">Newsletter</h4>
            <p className="mb-4 text-gray-600">Subscribe to receive updates on new products and special offers.</p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="Your Email" 
                className="px-4 py-2 rounded-md border border-ayu-sage focus:outline-none focus:border-ayu-green"
                required
              />
              <button 
                type="submit" 
                className="bg-ayu-green text-white px-4 py-2 rounded-md hover:bg-ayu-green/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <hr className="border-ayu-sage/30 mb-8" />
        
        <div className="text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} AyuSpirit. All Rights Reserved.</p>
          <div className="flex justify-center space-x-6 mt-2">
            <Link to="/privacy" className="hover:text-ayu-green transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-ayu-green transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
