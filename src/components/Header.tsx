import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart, Globe } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="flex items-center space-x-2 text-2xl font-bold text-navy-700"
          >
            <ShoppingCart className="h-8 w-8" />
            <span className={`transition-colors duration-300 ${scrolled ? 'text-navy-700' : 'text-white'}`}>
              PaletShop
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`text-lg font-medium hover:text-orange-500 transition-colors ${
                isActive('/') 
                  ? 'text-orange-500' 
                  : scrolled ? 'text-navy-700' : 'text-white'
              }`}
            >
              Acasă
            </Link>
            <Link 
              to="/about" 
              className={`text-lg font-medium hover:text-orange-500 transition-colors ${
                isActive('/about') 
                  ? 'text-orange-500' 
                  : scrolled ? 'text-navy-700' : 'text-white'
              }`}
            >
              Despre Noi
            </Link>
            <Link 
              to="/products" 
              className={`text-lg font-medium hover:text-orange-500 transition-colors ${
                isActive('/products') 
                  ? 'text-orange-500' 
                  : scrolled ? 'text-navy-700' : 'text-white'
              }`}
            >
              Produse
            </Link>
            <Link 
              to="/contact" 
              className={`text-lg font-medium hover:text-orange-500 transition-colors ${
                isActive('/contact') 
                  ? 'text-orange-500' 
                  : scrolled ? 'text-navy-700' : 'text-white'
              }`}
            >
              Contact
            </Link>
            <button className="flex items-center space-x-1 text-sm">
              <Globe className={`h-5 w-5 ${scrolled ? 'text-navy-700' : 'text-white'}`} />
              <span className={`${scrolled ? 'text-navy-700' : 'text-white'}`}>RO / EN</span>
            </button>
          </nav>
          
          {/* Mobile Navigation Toggle */}
          <button 
            onClick={toggleMenu} 
            className="md:hidden"
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <X className={`h-8 w-8 ${scrolled ? 'text-navy-700' : 'text-white'}`} />
            ) : (
              <Menu className={`h-8 w-8 ${scrolled ? 'text-navy-700' : 'text-white'}`} />
            )}
          </button>
        </div>
        
        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 px-4 transition-all duration-300 ease-in-out">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className={`text-lg font-medium transition-colors ${isActive('/') ? 'text-orange-500' : 'text-navy-700'}`}
                onClick={() => setIsOpen(false)}
              >
                Acasă
              </Link>
              <Link 
                to="/about" 
                className={`text-lg font-medium transition-colors ${isActive('/about') ? 'text-orange-500' : 'text-navy-700'}`}
                onClick={() => setIsOpen(false)}
              >
                Despre Noi
              </Link>
              <Link 
                to="/products" 
                className={`text-lg font-medium transition-colors ${isActive('/products') ? 'text-orange-500' : 'text-navy-700'}`}
                onClick={() => setIsOpen(false)}
              >
                Produse
              </Link>
              <Link 
                to="/contact" 
                className={`text-lg font-medium transition-colors ${isActive('/contact') ? 'text-orange-500' : 'text-navy-700'}`}
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <button className="flex items-center space-x-1 text-sm text-navy-700">
                <Globe className="h-5 w-5" />
                <span>RO / EN</span>
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;