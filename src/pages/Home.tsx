import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Truck, ShieldCheck, TagIcon, PhoneCall, ArrowRight } from 'lucide-react';
import Hero from '../components/Hero';
import FeaturedProducts from '../components/FeaturedProducts';
import TestimonialSlider from '../components/TestimonialSlider';

const Home: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'PaletShop - Electrocasnice Recondiționate Premium';
  }, []);

  return (
    <div>
      <Hero />
      
      {/* Benefits Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-start space-x-4 p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-orange-100 p-3 rounded-full">
                <Truck className="h-6 w-6 text-orange-600" />
              </div>
              <div>
                <h3 className="font-semibold text-navy-800 mb-1">Livrare Gratuită</h3>
                <p className="text-gray-600 text-sm">Pentru comenzi peste 300 lei în toată țara</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-teal-100 p-3 rounded-full">
                <ShieldCheck className="h-6 w-6 text-teal-600" />
              </div>
              <div>
                <h3 className="font-semibold text-navy-800 mb-1">Garanție 6 Luni</h3>
                <p className="text-gray-600 text-sm">Toate produsele beneficiază de garanție</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-purple-100 p-3 rounded-full">
                <TagIcon className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold text-navy-800 mb-1">Prețuri Accesibile</h3>
                <p className="text-gray-600 text-sm">Economisiți până la 60% față de produsele noi</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-blue-100 p-3 rounded-full">
                <PhoneCall className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-navy-800 mb-1">Suport 24/7</h3>
                <p className="text-gray-600 text-sm">Echipa noastră vă stă la dispoziție oricând</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <FeaturedProducts />
      
      {/* About Preview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div 
              className="rounded-lg overflow-hidden shadow-lg h-96 lg:h-[500px] relative"
            >
              <img 
                src="https://img001.prntscr.com/file/img001/c8tQxxGfQ_2ixxQ3MgMvkA.jpg" 
                alt="Despre PaletShop" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-navy-800 mb-4">De Ce Să Alegi Electrocasnice Recondiționate?</h2>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                La PaletShop, nu vindem doar electrocasnice - oferim o alternativă sustenabilă și economică 
                pentru gospodăria dumneavoastră. Fiecare produs este verificat, reparat și recondiționat 
                de către tehnicienii noștri specializați, pentru a asigura funcționalitatea și durabilitatea.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="bg-orange-100 p-2 rounded-full">
                    <svg className="h-5 w-5 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-navy-800">Economisiți bani</h4>
                    <p className="text-gray-600 text-sm">Prețuri cu până la 60% mai mici față de produsele noi</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="bg-orange-100 p-2 rounded-full">
                    <svg className="h-5 w-5 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-navy-800">Protejați mediul</h4>
                    <p className="text-gray-600 text-sm">Reduceți deșeurile electronice și amprenta de carbon</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="bg-orange-100 p-2 rounded-full">
                    <svg className="h-5 w-5 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-navy-800">Calitate garantată</h4>
                    <p className="text-gray-600 text-sm">Toate produsele sunt testate și verificate în detaliu</p>
                  </div>
                </div>
              </div>
              
              <Link 
                to="/about" 
                className="inline-flex items-center font-medium text-teal-600 hover:text-teal-700 transition-colors"
              >
                Află mai multe despre noi
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <TestimonialSlider />
      
      {/* CTA Section */}
      <section className="py-16 bg-navy-800 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Gata să descoperiți calitatea produselor recondiționate?</h2>
          <p className="text-navy-100 max-w-2xl mx-auto mb-8">
            Explorați gama noastră variată de electrocasnice recondiționate premium și bucurați-vă de 
            economii semnificative fără a compromite calitatea.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link 
              to="/products" 
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-md transition-colors duration-300"
            >
              Cumpără Acum
            </Link>
            
            <Link 
              to="/contact" 
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-navy-800 font-semibold px-8 py-3 rounded-md transition-all duration-300"
            >
              Contactează-ne
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;