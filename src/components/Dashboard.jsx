import React from 'react';
import Sidebar from './SideBar';

import { Gift, Play } from 'lucide-react';
import Bestsellers from './BestSeller'

const Dashboard = () => {
  return (
    <div className="flex h-auto bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 p-8">
        <h2 className="text-2xl font-semibold mb-6">Welcome! Let's get down to business</h2>

        {/* Create Your First Store Section */}
        <section className="bg-white rounded-lg shadow-sm mb-6">
          <div className="flex justify-between items-center p-6 border-b border-gray-200">
            <h3 className="text-xl font-semibold">Create your first store and get a free gift!</h3>
            <button className="text-gray-400 hover:text-gray-600">×</button>
          </div>
          <div className="flex p-6">
            <div className="mr-6">
              <Gift size={64} className="text-gray-400" />
            </div>
            <div>
              <h4 className="font-semibold mb-2">Store setup checklist</h4>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center text-green-600">
                  <span className="w-4 h-4 mr-2 border border-green-600 rounded-full flex items-center justify-center">
                    <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                  </span>
                  Sign up for Printify
                </li>
                {['Create your first product', 'Connect to Etsy, Shopify, etc', 'Order & track a sample'].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <span className="w-4 h-4 mr-2 border border-gray-300 rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-sm text-gray-600 mb-4">
                Complete the steps above and earn a $5.00 discount on your next order!
              </p>
              <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition duration-300">
                + Create first product
              </button>
            </div>
          </div>
        </section>

        {/* Double Your Chances Section */}
        <section className="bg-white rounded-lg shadow-sm p-16">
          <div className="flex justify-between">
            <div>
              <h3 className="text-xl font-semibold mb-2">Double your chances of making that first sale!</h3>
              <p className="text-gray-600 mb-4">
                Stand out from competition and build a customer base with the help of our AI powered Niche Generator in less than a minute
              </p>
              <div className="space-x-4">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300">
                  Try it now
                </button>
                <button className="flex items-center text-blue-600 hover:underline">
                  <Play size={16} className="mr-1" />
                  What's a niche?
                </button>
              </div>
            </div>
            <div className="w-2/3">
              <img src="https://printify.com/assets/img/niche/niche-preview-lg.png" alt="Product Example" className="w-full  h-auto rounded-lg" />
            </div>
          </div>
        </section>
        <Bestsellers />
      </main>
    </div>
  );
};

export default Dashboard;