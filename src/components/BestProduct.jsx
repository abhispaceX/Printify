import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react'

const products = [
  { name: 'T-shirts', image: 'https://printify.com/pfh/assets/products-display/t-shirt.webp' },
  { name: 'Sweatshirt', image: 'https://printify.com/pfh/assets/products-display/sweatshirt.webp' },
  { name: 'Mugs', image: 'https://printify.com/pfh/assets/products-display/mug.webp' },
  { name: 'Hoodie', image: 'https://printify.com/pfh/assets/products-display/hoodie.webp' },
  { name: 'Kids clothing', image: 'https://printify.com/pfh/assets/products-display/kids-clothing.webp' },
  { name: 'Phone cases', image: 'https://printify.com/pfh/assets/products-display/phone-cases.webp'},
  { name: 'Stickers',image:'https://printify.com/pfh/assets/products-display/stickers.webp'},
  {name:'Posters',image:'https://printify.com/pfh/assets/products-display/posters.webp'},
  {name:'Candles',images:'https://printify.com/pfh/assets/products-display/candles.webp'}


  // Add more products as needed
];

const ProductCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    if (currentIndex < products.length - 5) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-4xl md:text-5xl font-black text-[#31300a] text-center mb-8">
        Your next bestseller awaits
      </h2>
      <div className="relative">
        <button
          onClick={prevSlide}
          className={`absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#31300a] text-white p-2 rounded-full ${
            currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          disabled={currentIndex === 0}
        >
          <ChevronLeft size={24} />
        </button>
        <div className="flex justify-between overflow-hidden">
          {products.slice(currentIndex, currentIndex + 5).map((product, index) => (
            <div key={index} className="w-1/5 px-2">
              <div className="bg-white p-4 rounded-lg shadow-lg">
                <img src={product.image} alt={product.name} className="w-full h-32 object-cover mb-4" />
                <p className={`text-center ${product.name === 'T-shirts' ? 'text-purple-600 font-semibold' : 'text-[#31300a]'}`}>
                  {product.name}
                </p>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={nextSlide}
          className={`absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#31300a] text-white p-2 rounded-full ${
            currentIndex >= products.length - 5 ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          disabled={currentIndex >= products.length - 5}
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default ProductCarousel;