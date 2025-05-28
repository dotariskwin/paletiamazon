import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import { products } from '../utils/data';

const FeaturedProducts: React.FC = () => {
  // Get 4 featured products
  const featuredProducts = products.filter(product => product.featured).slice(0, 4);
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-10">
          <div>
            <h2 className="text-3xl font-bold text-navy-800 mb-2">Produse Recomandate</h2>
            <p className="text-gray-600 max-w-2xl">
              Descoperă selecția noastră de electrocasnice recondiționate premium, testate și garantate.
            </p>
          </div>
          
          <Link 
            to="/products" 
            className="mt-4 md:mt-0 text-teal-600 hover:text-teal-700 font-medium flex items-center group transition-colors"
          >
            Vezi toate produsele 
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;