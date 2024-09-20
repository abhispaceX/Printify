import React,{useState} from 'react'
import {  ChevronDown, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';


const NavBar=()=>{
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div>
       <nav className="flex justify-between items-center py-4 px-4 md:px-6">
        <Link to='/' >
        <div className="text-2xl font-bold text-[#31300a]"><img src="https://printify.com/pfh/media/logo-WQH7INSW.svg" alt="logo" /></div>
        </Link>
        <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
          <p className="text-[#31300a] text-sm lg:text-base">Catalog</p>
          <p className="text-[#31300a] text-sm lg:text-base flex items-center">How it works <ChevronDown size={16} /></p>
          <p href="#" className="text-[#31300a] text-sm lg:text-base">Pricing</p>
          <p className="text-[#31300a] text-sm lg:text-base">Blog</p>
          <p className="text-[#31300a] text-sm lg:text-base flex items-center">Services <ChevronDown size={16} /></p>
          <p className="text-[#31300a] text-sm lg:text-base flex items-center">Use-cases <ChevronDown size={16} /></p>
          <p className="text-[#31300a] text-sm lg:text-base flex items-center">Need help? <ChevronDown size={16} /></p>
        </div>
        <button className="hidden md:block bg-[#c6f37b] text-[#31300a] px-4 py-2 rounded-md text-sm lg:text-base">My store</button>
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white p-4">
          <p className="block py-2 text-[#31300a]">Catalog</p>
          <p className="block py-2 text-[#31300a]">How it works</p>
          <p className="block py-2 text-[#31300a]">Pricing</p>
          <p className="block py-2 text-[#31300a]">Blog</p>
          <p className="block py-2 text-[#31300a]">Services</p>
          <p className="block py-2 text-[#31300a]">Use-cases</p>
          <p className="block py-2 text-[#31300a]">Need help?</p>
          <button className="mt-4 w-full bg-[#c6f37b] text-[#31300a] px-4 py-2 rounded-md">My store</button>
        </div>
      )}
    </div>
  )
}

export default NavBar
