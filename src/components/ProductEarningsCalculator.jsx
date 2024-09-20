import React, { useState } from 'react';

const ProductEarningsCalculator = () => {
  const [selectedProduct, setSelectedProduct] = useState('Tshirt');
  const [price, setPrice] = useState(20);
  const [dailySales, setDailySales] = useState(1);
  const fulfillmentCost = 8.26;

  const productImages = {
    Tshirt: 'https://printify.com/pfh/assets/profit-calculator/t-shirt-desktop.webp',
    Socks: 'https://printify.com/pfh/assets/profit-calculator/socks-desktop.webp',
    'Phone case': 'https://printify.com/pfh/assets/profit-calculator/phone-case-desktop.webp',
    Notebook: 'https://printify.com/pfh/assets/profit-calculator/notebook-desktop.webp'
  };

  const calculateEarnings = () => {
    return ((price - fulfillmentCost) * dailySales * 30).toFixed(2);
  };

  return (
    <div className="bg-[#31300a] text-white p-8">
      <h1 className="text-4xl font-bold text-center mb-8">See how much you can make:</h1>
      <div className="bg-[#f8f9ec] text-[#31300a] p-8 rounded-lg shadow-lg flex flex-col md:flex-row">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <img src={productImages[selectedProduct]} alt={selectedProduct} className="w-full h-auto rounded" />
        </div>
        <div className="md:w-1/2 md:pl-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Choose a product</h2>
            <span>Fulfilment Cost*: ${fulfillmentCost.toFixed(2)}</span>
          </div>
          <div className="flex space-x-2 mb-6">
            {Object.keys(productImages).map((product) => (
              <button
                key={product}
                className={`md:px-3 py-1 text-xs md:text-lg rounded ${selectedProduct === product ? 'bg-[#31300a] text-white' : 'bg-gray-200 text-[#31300a]'}`}
                onClick={() => setSelectedProduct(product)}
              >
                {product}
              </button>
            ))}
          </div>
          <h2 className="text-xl font-bold mb-4">Quantity and Price</h2>
          <div className="mb-4">
            <label className="block mb-2">Sell it for:</label>
            <input
              type="range"
              min="10"
              max="50"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              className="w-full"
            />
            <span className="float-right">${price}</span>
          </div>
          <div className="mb-6">
            <label className="block mb-2">Daily sales:</label>
            <input
              type="range"
              min="1"
              max="100"
              value={dailySales}
              onChange={(e) => setDailySales(Number(e.target.value))}
              className="w-full"
            />
            <span className="float-right">{dailySales}</span>
          </div>
          <div className="bg-[#90ee90] p-4 rounded-lg mb-6">
            <p className="text-[#31300a] mb-2">Your monthly earnings:</p>
            <p className="text-[#31300a] text-2xl md:text-4xl font-bold">${calculateEarnings()}</p>
          </div>
          <button className="w-full bg-[#31300a] text-white px-6 py-3 rounded font-bold">Start designing</button>
        </div>
      </div>
    </div>
  );
};

export default ProductEarningsCalculator;