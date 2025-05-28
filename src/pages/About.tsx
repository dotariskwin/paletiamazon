import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Users, Recycle, TrendingUp, Factory, Truck, Package } from 'lucide-react';

const About: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Despre Noi | PaletShop - Electrocasnice Recondiționate';
  }, []);

  return (
    <div>
      {/* Header Banner */}
      <div className="relative bg-navy-900 py-24">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url('https://images.pexels.com/photos/5662862/pexels-photo-5662862.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
          }}
        >
          <div className="absolute inset-0 bg-navy-900 bg-opacity-75"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Despre Noi</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Aflați povestea noastră și cum am devenit liderul pieței de electrocasnice recondiționate din România.
          </p>
        </div>
      </div>
      
      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-navy-800 mb-4">Povestea Noastră</h2>
            <p className="text-gray-600 leading-relaxed">
              PaletShop a luat naștere în 2018 din pasiunea pentru tehnologie și dorința de a oferi o alternativă 
              accesibilă și ecologică la electrocasnicele noi. Am început ca o mică afacere de familie, 
              recondiționând câteva aparate lunar, și am crescut treptat până am devenit unul dintre cei mai mari 
              furnizori de electrocasnice recondiționate din România.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-navy-800 mb-4">Misiunea Noastră</h3>
              <p className="text-gray-700 mb-6">
                Misiunea noastră este de a oferi clienților produse de calitate la prețuri accesibile, 
                reducând în același timp impactul asupra mediului. Credem că electronicele bine întreținute 
                merită o a doua șansă și că recondiționarea profesională poate extinde viața produselor cu mulți ani.
              </p>
              <p className="text-gray-700">
                Ne angajăm să oferim un serviciu excepțional, cu transparență totală despre starea produselor 
                și cu garanție pentru fiecare articol vândut. Satisfacția clienților noștri este prioritatea 
                noastră numărul unu.
              </p>
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Echipa PaletShop" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="order-2 md:order-1 rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Recondiționare Electrocanice" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="order-1 md:order-2">
              <h3 className="text-2xl font-bold text-navy-800 mb-4">Valorile Noastre</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="bg-orange-100 p-2 rounded-full flex-shrink-0 mt-1">
                    <svg className="h-5 w-5 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-navy-800">Calitate</h4>
                    <p className="text-gray-600">
                      Nu compromitem niciodată calitatea. Fiecare produs este verificat și testat riguros 
                      înainte de a ajunge la clienții noștri.
                    </p>
                  </div>
                </li>
                
                <li className="flex items-start space-x-3">
                  <div className="bg-orange-100 p-2 rounded-full flex-shrink-0 mt-1">
                    <svg className="h-5 w-5 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-navy-800">Transparență</h4>
                    <p className="text-gray-600">
                      Suntem întotdeauna transparenți cu privire la starea produselor noastre și 
                      la procesul de recondiționare.
                    </p>
                  </div>
                </li>
                
                <li className="flex items-start space-x-3">
                  <div className="bg-orange-100 p-2 rounded-full flex-shrink-0 mt-1">
                    <svg className="h-5 w-5 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-navy-800">Sustenabilitate</h4>
                    <p className="text-gray-600">
                      Ne angajăm să reducem deșeurile electronice și să promovăm o economie circulară 
                      prin recondiționarea produselor.
                    </p>
                  </div>
                </li>
                
                <li className="flex items-start space-x-3">
                  <div className="bg-orange-100 p-2 rounded-full flex-shrink-0 mt-1">
                    <svg className="h-5 w-5 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-navy-800">Satisfacția Clientului</h4>
                    <p className="text-gray-600">
                      Punem clienții pe primul loc și ne străduim să depășim așteptările lor la fiecare interacțiune.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-navy-800 mb-4">Procesul Nostru de Recondiționare</h2>
            <p className="text-gray-600">
              Fiecare produs trece printr-un proces riguros de verificare, curățare, reparare și testare 
              înainte de a fi pus în vânzare. Iată cum funcționează:
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-orange-100 p-4 rounded-full inline-flex mb-4">
                <Package className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-navy-800 mb-3">1. Inspecție Inițială</h3>
              <p className="text-gray-600">
                Fiecare aparat este evaluat în detaliu pentru a identifica problemele și a determina 
                dacă poate fi recondiționat. Verificăm componentele mecanice, electrice și aspectul general.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-teal-100 p-4 rounded-full inline-flex mb-4">
                <Factory className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-navy-800 mb-3">2. Recondiționare</h3>
              <p className="text-gray-600">
                Tehnicenii noștri specializați repară sau înlocuiesc componentele defecte, 
                curăță în profunzime aparatul și restaurează aspectul exterior la standardele noastre înalte.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-purple-100 p-4 rounded-full inline-flex mb-4">
                <Truck className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-navy-800 mb-3">3. Testare și Garantare</h3>
              <p className="text-gray-600">
                Înainte de a ajunge la clienți, fiecare produs este testat riguros în condiții reale 
                de utilizare și primește garanția noastră de 12 luni pentru funcționare impecabilă.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16 bg-navy-800 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Users className="h-12 w-12 text-orange-500" />
              </div>
              <div className="text-4xl font-bold mb-2">10,000+</div>
              <p className="text-navy-200">Clienți Mulțumiți</p>
            </div>
            
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Package className="h-12 w-12 text-teal-500" />
              </div>
              <div className="text-4xl font-bold mb-2">25,000+</div>
              <p className="text-navy-200">Produse Recondiționate</p>
            </div>
            
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Recycle className="h-12 w-12 text-green-500" />
              </div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <p className="text-navy-200">Tone de Deșeuri Evitate</p>
            </div>
            
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <TrendingUp className="h-12 w-12 text-purple-500" />
              </div>
              <div className="text-4xl font-bold mb-2">5</div>
              <p className="text-navy-200">Ani de Experiență</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-navy-800 mb-4">Echipa Noastră</h2>
            <p className="text-gray-600">
              Suntem o echipă dedicată de profesioniști cu experiență în domeniul electrocasnicelor 
              și pasionați de tehnologie, sustenabilitate și servicii de calitate.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105">
              <img 
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Alexandru Ionescu" 
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-navy-800 mb-1">Alexandru Ionescu</h3>
                <p className="text-orange-600 font-medium mb-3">Fondator & Director General</p>
                <p className="text-gray-600">
                  Cu peste 15 ani de experiență în reparații electronice, Alexandru a fondat PaletShop 
                  din pasiunea pentru tehnologie și sustenabilitate.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105">
              <img 
                src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Maria Popescu" 
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-navy-800 mb-1">Maria Popescu</h3>
                <p className="text-orange-600 font-medium mb-3">Director Tehnic</p>
                <p className="text-gray-600">
                  Maria coordonează echipa tehnică și procesele de recondiționare, 
                  asigurându-se că fiecare produs respectă standardele noastre înalte.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105">
              <img 
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Andrei Dumitrescu" 
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-navy-800 mb-1">Andrei Dumitrescu</h3>
                <p className="text-orange-600 font-medium mb-3">Director Relații Clienți</p>
                <p className="text-gray-600">
                  Andrei se ocupă de relațiile cu clienții și de asigurarea unei experiențe 
                  de cumpărare excelente pentru fiecare client.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-navy-800 to-navy-900 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Gata să experimentați calitatea produselor noastre?</h2>
          <p className="text-navy-100 max-w-2xl mx-auto mb-8">
            Economisiți bani și protejați mediul alegând electrocasnice recondiționate de calitate.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link 
              to="/products" 
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-md transition-colors duration-300"
            >
              Vezi Produsele
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

export default About;