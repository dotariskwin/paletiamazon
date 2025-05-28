import React, { useEffect } from 'react';
import { Package, Check, Info } from 'lucide-react';
import { products } from '../utils/data';
import ProductCard from '../components/ProductCard';

const Products: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Paleți Disponibili | PaletShop - Electrocasnice Returnate';
  }, []);

  return (
    <div>
      {/* Header Banner */}
      <div className="relative bg-navy-900 py-16">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url('https://images.pexels.com/photos/6969831/pexels-photo-6969831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
          }}
        >
          <div className="absolute inset-0 bg-navy-900 bg-opacity-75"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Paleți cu Electrocasnice</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Descoperă gama noastră de paleți cu electrocasnice returnate din magazinele europene
          </p>
        </div>
      </div>

      {/* Info Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-white rounded-lg shadow-md p-6 mb-12">
            <div className="flex items-start space-x-4">
              <Info className="h-6 w-6 text-teal-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-bold text-navy-800 mb-3">Despre Paleții Noștri</h2>
                <p className="text-gray-600 mb-4">
                  Oferim paleți cu electrocasnice returnate din diverse magazine europene. Fiecare palet este 
                  verificat și documentat, oferindu-vă o descriere detaliată a conținutului și stării produselor.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                  <div className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-teal-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-medium text-navy-800">Produse Verificate</h3>
                      <p className="text-sm text-gray-600">Toate paleții sunt inspectați înainte de livrare</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-teal-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-medium text-navy-800">Documentație Completă</h3>
                      <p className="text-sm text-gray-600">Liste detaliate cu conținutul fiecărui palet</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-teal-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-medium text-navy-800">Transport Asigurat</h3>
                      <p className="text-sm text-gray-600">Livrare în siguranță la destinație</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Example Pallets */}
          <h2 className="text-2xl font-bold text-navy-800 mb-6">Example de Paleți Disponibili</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-navy-800 mb-6">Ce Puteți Găsi în Paleții Noștri</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-navy-800 mb-3">Tipuri de Produse</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <Package className="h-5 w-5 text-teal-600 mr-2" />
                    Frigidere și combine frigorifice
                  </li>
                  <li className="flex items-center">
                    <Package className="h-5 w-5 text-teal-600 mr-2" />
                    Mașini de spălat rufe
                  </li>
                  <li className="flex items-center">
                    <Package className="h-5 w-5 text-teal-600 mr-2" />
                    Uscătoare de rufe
                  </li>
                  <li className="flex items-center">
                    <Package className="h-5 w-5 text-teal-600 mr-2" />
                    Aragazuri și plite
                  </li>
                  <li className="flex items-center">
                    <Package className="h-5 w-5 text-teal-600 mr-2" />
                    Cuptoare încorporabile
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-navy-800 mb-3">Mărci Disponibile</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <Package className="h-5 w-5 text-teal-600 mr-2" />
                    Bosch, Siemens, Miele
                  </li>
                  <li className="flex items-center">
                    <Package className="h-5 w-5 text-teal-600 mr-2" />
                    Samsung, LG
                  </li>
                  <li className="flex items-center">
                    <Package className="h-5 w-5 text-teal-600 mr-2" />
                    Electrolux, AEG
                  </li>
                  <li className="flex items-center">
                    <Package className="h-5 w-5 text-teal-600 mr-2" />
                    Whirlpool, Zanussi
                  </li>
                  <li className="flex items-center">
                    <Package className="h-5 w-5 text-teal-600 mr-2" />
                    Beko, Grundig
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;