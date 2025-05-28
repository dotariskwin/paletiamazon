import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Package } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-navy-900 h-[600px] flex items-center">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/6969801/pexels-photo-6969801.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
          backgroundPosition: "center 30%"
        }}
      >
        <div className="absolute inset-0 bg-navy-900 bg-opacity-70"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 z-10 relative">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            Paleți cu Electrocasnice<br />
            <span className="text-orange-500">Returnate din Europa</span>
          </h1>
          
          <p className="text-xl text-gray-200 mb-8">
            Oferim paleți cu electrocasnice returnate din magazinele europene. 
            Produse de calitate la prețuri avantajoase pentru revânzare.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Link 
              to="/products" 
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-md transition-colors duration-300 flex items-center"
            >
              <Package className="mr-2 h-5 w-5" />
              Vezi Paleții Disponibili
            </Link>
            
            <Link 
              to="/about" 
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-navy-900 font-semibold px-6 py-3 rounded-md transition-all duration-300"
            >
              Despre Noi
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;