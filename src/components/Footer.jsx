import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-900 text-white py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-between mb-8">
            <div className="w-full md:w-auto mb-4 md:mb-0">
              <img src="https://printify.com/pfh/media/logo-WQH7INSW.svbutton" alt="Printify Logo" className="h-8 mb-4" />
              <div className="flex space-x-4">
                <button href="#" className="text-gray-400 hover:text-white"><FacebookIcon /></button >
                <button href="#" className="text-gray-400 hover:text-white"><TwitterIcon /></button >
                <button href="#" className="text-gray-400 hover:text-white"><InstagramIcon /></button>
                <button href="#" className="text-gray-400 hover:text-white"><LinkedInIcon /></button >
                <button href="#" className="text-gray-400 hover:text-white"><YouTubeIcon /></button >
                
              </div>
            </div>
            <div className="w-full md:w-auto">
              <h3 className="font-bold mb-4">Integrations</h3>
              <ul className="space-y-2">
                <li><button  className="hover:underline">Shopify</button ></li>
                <li><button  className="hover:underline">Etsy</button ></li>
                <li><button  className="hover:underline">WooCommerce</button ></li>
                <li><button  className="hover:underline">eBay</button></li>
                <li><button  className="hover:underline">Wix</button ></li>
                <li><button  className="hover:underline">BigCommerce</button ></li>
                <li><button  className="hover:underline">PrestaShop</button ></li>
              </ul>
            </div>
            <div className="w-full md:w-auto">
              <h3 className="font-bold mb-4">Discover</h3>
              <ul className="space-y-2">
                <li><button  className="hover:underline">Blog</button ></li>
                <li><button  className="hover:underline">Guides</button ></li>
                <li><button  className="hover:underline">Products</button ></li>
                <li><button  className="hover:underline">Shipping Rates</button ></li>
              </ul>
            </div>
            <div className="w-full md:w-auto">
              <h3 className="font-bold mb-4">Start selling</h3>
              <ul className="space-y-2">
                <li><button h className="hover:underline">Custom T-Shirts</button ></li>
                <li><button  className="hover:underline">Custom Hoodies</button ></li>
                <li><button  className="hover:underline">Custom Mugs</button ></li>
                <li><button  className="hover:underline">Custom Books</button ></li>
                <li><button  className="hover:underline">Custom Backpacks</button ></li>
                <li><button  className="hover:underline">Custom Branding</button ></li>
              </ul>
            </div>
            <div className="w-full md:w-auto">
              <h3 className="font-bold mb-4">Printify</h3>
              <ul className="space-y-2">
                <li><button  className="hover:underline">Print on Demand</button ></li>
                <li><button  className="hover:underline">Print Providers</button ></li>
                <li><button  className="hover:underline">Experts Program</button ></li>
                <li><button  className="hover:underline">Printify API</button ></li>
                <li><button  className="hover:underline">Become a Partner</button ></li>
                <li><button  className="hover:underline">About</button ></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 mt-8 text-sm text-gray-400">
            <p>&copy; 2023 Printify Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}



const FacebookIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
  </svg>
)

const TwitterIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
  </svg>
)

const InstagramIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
)

const LinkedInIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
  </svg>
)

const YouTubeIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
  </svg>
)


    


export default Footer