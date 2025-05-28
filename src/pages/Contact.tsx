import React, { useEffect } from 'react';
import { Mail, Phone, MapPin, Clock, ArrowRight } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const Contact: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Contact | PaletShop - Electrocasnice Recondiționate';
  }, []);

  return (
    <div>
      {/* Header Banner */}
      <div className="relative bg-navy-900 py-16">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url('https://images.pexels.com/photos/1416530/pexels-photo-1416530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
          }}
        >
          <div className="absolute inset-0 bg-navy-900 bg-opacity-75"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Contactează-ne</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Suntem aici pentru a răspunde întrebărilor tale și a te ajuta să găsești produsul perfect
          </p>
        </div>
      </div>
      
      {/* Contact Info Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h2 className="text-3xl font-bold text-navy-800 mb-6">Hai să Vorbim</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Ai întrebări despre produsele noastre sau procesul de recondiționare? 
                Dorești să programezi o vizită la showroom-ul nostru? Sau poate vrei să ne trimiți 
                un aparat pentru evaluare? Suntem aici pentru tine și abia așteptăm să te ajutăm.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 p-3 rounded-full flex-shrink-0">
                    <MapPin className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-800 mb-1">Adresă</h3>
                    <p className="text-gray-600">Str. Principală nr. 123, Sector 1, București, România</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-teal-100 p-3 rounded-full flex-shrink-0">
                    <Mail className="h-6 w-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-800 mb-1">Email</h3>
                    <a href="mailto:contact@paletshop.ro" className="text-teal-600 hover:text-teal-700 transition-colors">
                      contact@paletshop.ro
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-800 mb-1">Telefon</h3>
                    <a href="tel:+40722123456" className="text-teal-600 hover:text-teal-700 transition-colors">
                      +40 722 123 456
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-3 rounded-full flex-shrink-0">
                    <Clock className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-800 mb-1">Program</h3>
                    <p className="text-gray-600">Luni - Vineri: 09:00 - 18:00</p>
                    <p className="text-gray-600">Sâmbătă: 10:00 - 15:00</p>
                    <p className="text-gray-600">Duminică: Închis</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold text-navy-800 mb-3">Urmărește-ne</h3>
                <div className="flex space-x-4">
                  <a 
                    href="#" 
                    className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition-colors"
                    aria-label="Facebook"
                  >
                    <svg className="h-5 w-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z" />
                    </svg>
                  </a>
                  
                  <a 
                    href="#" 
                    className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition-colors"
                    aria-label="Instagram"
                  >
                    <svg className="h-5 w-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </a>
                  
                  <a 
                    href="#" 
                    className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition-colors"
                    aria-label="LinkedIn"
                  >
                    <svg className="h-5 w-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-navy-800 mb-6">Trimite-ne un Mesaj</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-navy-800 mb-4">Vizitează Showroom-ul Nostru</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Vino să vezi și să testezi produsele noastre înainte de a cumpăra. 
              Echipa noastră te va ghida și îți va răspunde la toate întrebările.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-96 w-full">
              {/* Replace with an actual iframe map in production */}
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-10 w-10 text-gray-400 mx-auto mb-3" />
                  <p className="text-gray-600">Hartă interactivă indisponibilă în modul demo</p>
                  <p className="text-gray-500 text-sm">Str. Principală nr. 123, Sector 1, București</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-navy-800 mb-4">Întrebări Frecvente</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Aici sunt răspunsurile la cele mai comune întrebări pe care le primim. 
              Dacă nu găsești răspunsul căutat, nu ezita să ne contactezi.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-navy-800 mb-3">Ce înseamnă "recondiționat"?</h3>
                <p className="text-gray-600">
                  Un produs recondiționat este un aparat care a fost folosit anterior, 
                  dar care a trecut printr-un proces profesional de verificare, curățare, 
                  reparare și testare pentru a asigura că funcționează conform specificațiilor producătorului.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-navy-800 mb-3">Oferiți garanție pentru produsele recondiționate?</h3>
                <p className="text-gray-600">
                  Da, toate produsele noastre vin cu o garanție de 12 luni care acoperă defecțiunile de 
                  funcționare. Aceasta nu acoperă daunele cauzate de utilizarea necorespunzătoare.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-navy-800 mb-3">Cum se face livrarea produselor?</h3>
                <p className="text-gray-600">
                  Livrăm în toată România prin firme de curierat partenere. Pentru comenzi peste 500 lei, 
                  livrarea este gratuită. Timpul de livrare este de 2-5 zile lucrătoare, în funcție de locație.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-navy-800 mb-3">Pot returna un produs dacă nu sunt mulțumit?</h3>
                <p className="text-gray-600">
                  Da, ai dreptul la 14 zile pentru a returna produsul dacă nu ești mulțumit, conform legislației în vigoare. 
                  Produsul trebuie să fie în aceeași stare în care l-ai primit, cu toate accesoriile și documentația originală.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-navy-800 mb-3">Cum pot plăti pentru produsele comandate?</h3>
                <p className="text-gray-600">
                  Acceptăm plata cu cardul online, prin transfer bancar sau ramburs la livrare. 
                  Pentru plățile online, folosim un sistem securizat pentru protecția datelor tale.
                </p>
              </div>
            </div>
            
            <div className="text-center mt-10">
              <p className="text-gray-600 mb-4">Nu ai găsit răspunsul la întrebarea ta?</p>
              <a 
                href="mailto:contact@paletshop.ro" 
                className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium transition-colors"
              >
                Contactează-ne direct
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;