import React from 'react';
import { Heart } from 'lucide-react'

// ProductCard Component
const ProductCard = ({ image, name, brand, price, premiumPrice, details }) => (
  <div className= "bg-white rounded-lg shadow-sm overflow-hidden">
    <div className="relative">
      <img src={image} alt={name} className="w-full h-56  object-contain" />
      <span className="absolute top-2 left-2 bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-1 rounded">
        Bestseller
      </span>
      <button className="absolute top-2 right-2 bg-white rounded-full p-1">
        <Heart className="w-5 h-5 text-gray-400" />
      </button>
    </div>
    <div className="p-4">
      <h3 className="font-semibold text-lg mb-1">{name}</h3>
      <p className="text-sm text-gray-600 mb-2">By {brand}</p>
      <div className="mb-2">
        <span className="font-bold">From INR {price}</span>
        <p className="text-sm text-green-600">From INR {premiumPrice} with Printify Premium</p>
      </div>
      <p className="text-xs text-gray-500">{details}</p>
    </div>
  </div>
);

// Bestsellers Component without map
const Bestsellers = () => {
  const product1 = {
    image: "https://www.lavanyathelabel.com/cdn/shop/files/1_ae0df068-f8a7-4998-a448-d134a5934ea4_1300x.jpg?v=1708159386",
    name: "Unisex Heavy Cotton Tee",
    brand: "Gildan · 5000",
    price: "864",
    premiumPrice: "636",
    details: "8 sizes · 70 colors · 20 print providers"
  };

  const product2 = {
    image: "https://blog.g3fashion.com/wp-content/uploads/2016/05/quilted-velvet-nehru-jacket-in-dark-teal-blue-v1-mtx701_3.jpg",
    name: "Kiss-Cut Stickers",
    brand: "Generic brand",
    price: "145",
    premiumPrice: "107",
    details: "4 sizes · SPOKE Custom Products"
  };

  const product3 = {
    image: "https://www.beyoung.in/blog/wp-content/uploads/2018/11/Suits-Formal-Cocktail-Party-Dress-for-Men-853x1024.jpg",
    name: "Unisex Jersey Short Sleeve Tee",
    brand: "Bella+Canvas · 3001",
    price: "1087",
    premiumPrice: "869",
    details: "9 sizes · 126 colors · 20 print providers"
  };

  const product4 = {
    image: "https://blog.g3fashion.com/wp-content/uploads/2016/05/044ed5e2-3e5e-4b6e-bf84-4d7deaa1b0d81527938830095-Hangup-Men-Cream-multicoloured-Printed-Nehru-Jacket-With-Pocket-Square-2891527938829884-1-768x1024.webp",
    name: "Tough Phone Cases",
    brand: "Generic brand",
    price: "1094",
    premiumPrice: "829",
    details: "33 sizes · SPOKE Custom Products"
  };

  return (
    <section className=" bg-white p-5 mt-8 mb-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Our Bestsellers</h2>
        < button className="text-green-600 hover:underline">See more</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <ProductCard {...product1} />
        <ProductCard {...product2} />
        <ProductCard {...product3} />
        <ProductCard {...product4} />
      </div>
    </section>
  );
};

export default Bestsellers;