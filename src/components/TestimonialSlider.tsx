import React, { useState, useEffect } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials } from '../utils/data';

const TestimonialSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Auto-advance the slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000);
    
    return () => clearInterval(interval);
  }, []);
  
  const handlePrev = () => {
    setCurrentIndex(prevIndex => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };
  
  const handleNext = () => {
    setCurrentIndex(prevIndex => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  return (
    <section className="py-16 bg-teal-700">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-white mb-2">Ce Spun Clienții Noștri</h2>
          <p className="text-teal-100 max-w-2xl mx-auto">
            Testimoniale de la clienții care au ales electrocasnicele recondiționate de la noi
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-xl p-8 md:p-10 relative">
            <Quote className="absolute text-teal-100 h-24 w-24 top-6 left-6 opacity-20" />
            
            <div className="relative z-10">
              <div className="mb-6 flex items-center">
                <img 
                  src={testimonials[currentIndex].avatar} 
                  alt={testimonials[currentIndex].name}
                  className="h-16 w-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-lg text-navy-800">{testimonials[currentIndex].name}</h4>
                  <p className="text-gray-600">{testimonials[currentIndex].location}</p>
                </div>
              </div>
              
              <p className="text-gray-700 text-lg italic leading-relaxed">
                "{testimonials[currentIndex].comment}"
              </p>
              
              <div className="flex mt-6">
                {[...Array(5)].map((_, i) => (
                  <svg 
                    key={i} 
                    className={`h-5 w-5 ${i < testimonials[currentIndex].rating ? 'text-yellow-400' : 'text-gray-300'}`} 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-6 space-x-3">
            <button 
              onClick={handlePrev}
              className="bg-white text-navy-800 hover:bg-teal-100 p-2 rounded-full shadow-md transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, i) => (
                <button 
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-3 w-3 rounded-full transition-colors ${
                    i === currentIndex ? 'bg-white' : 'bg-teal-300 hover:bg-teal-200'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={handleNext}
              className="bg-white text-navy-800 hover:bg-teal-100 p-2 rounded-full shadow-md transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;