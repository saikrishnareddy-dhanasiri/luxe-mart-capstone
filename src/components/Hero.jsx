import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=2000",
      title: "Summer Collection",
      subtitle: "New Arrivals"
    },
    {
      image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=2000",
      title: "Modern Essentials",
      subtitle: "Limited Edition"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[600px] w-full overflow-hidden bg-black">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Image */}
          <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
          
          {/* Legibility check */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
            <p className="text-xs tracking-[0.5em] uppercase mb-6 font-bold">{slide.subtitle}</p>
            <h1 className="text-4xl md:text-6xl font-light tracking-[0.2em] uppercase mb-10 max-w-4xl leading-tight">
              {slide.title}
            </h1>
            <button className="border border-white px-12 py-4 text-[11px] font-bold tracking-[0.3em] uppercase hover:bg-white hover:text-black transition-all duration-500">
              Explore Collection
            </button>
          </div>
        </div>
      ))}
      
      {/* Slide Indicators */}
      <div className="absolute bottom-10 w-full flex justify-center gap-6">
        {slides.map((_, i) => (
          <button 
            key={i} 
            onClick={() => setCurrentSlide(i)}
            className={`h-[2px] w-16 transition-all duration-500 ${i === currentSlide ? "bg-white" : "bg-white/20"}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;