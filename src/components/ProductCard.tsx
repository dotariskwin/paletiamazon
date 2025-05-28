import React from 'react';
import { Package, Ruler, CircleDot } from 'lucide-react';
import { Product } from '../utils/types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { name, description, palletSize, itemCount, condition, image, category } = product;

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
      <div className="relative">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-60 object-cover object-center"
        />
      </div>
      
      <div className="p-4 flex-grow flex flex-col">
        <span className="text-sm text-gray-500 mb-1">{category}</span>
        <h3 className="text-lg font-semibold text-navy-800 mb-2">{name}</h3>
        
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        
        <div className="mt-auto space-y-3">
          <div className="flex items-center text-gray-700">
            <Package className="h-5 w-5 mr-2 text-teal-600" />
            <span className="text-sm">{itemCount} produse pe palet</span>
          </div>
          
          <div className="flex items-center text-gray-700">
            <Ruler className="h-5 w-5 mr-2 text-teal-600" />
            <span className="text-sm">Dimensiuni: {palletSize}</span>
          </div>
          
          <div className="flex items-center text-gray-700">
            <CircleDot className="h-5 w-5 mr-2 text-teal-600" />
            <span className="text-sm">{condition}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;