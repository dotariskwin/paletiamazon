import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <ShoppingCart className="h-8 w-8 text-orange-500" />
              <span className="text-2xl font-bold">PaletShop</span>
            </div>
            <p className="text-gray-300 mb-4">
              Oferim electrocasnice reconditionate de calitate superioară la prețuri accesibile.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Link-uri Rapide</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-orange-500 transition-colors">
                  Acasă
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-orange-500 transition-colors">
                  Despre Noi
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-orange-500 transition-colors">
                  Produse
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Categories */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Categorii</h3>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="text-gray-300 hover:text-orange-500 transition-colors">
                  Termeni și Condiții
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-300 hover:text-orange-500 transition-colors">
                  Politica de Confidențialitate
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-orange-500 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/products?category=tv" className="text-gray-300 hover:text-orange-500 transition-colors">
                  Televizoare
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-6 w-6 text-orange-500 flex-shrink-0" />
                <span className="text-gray-300">Str. Principală nr. 123, București, România</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-6 w-6 text-orange-500 flex-shrink-0" />
                <span className="text-gray-300">+40 722 123 456</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-6 w-6 text-orange-500 flex-shrink-0" />
                <span className="text-gray-300">contact@paletshop.ro</span>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="border-gray-700 my-6" />
        
        <div className="text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} PaletShop. Toate drepturile rezervate.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;