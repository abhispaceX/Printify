import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import NavItem from './SideItem';
import { faHome, faClipboard, faTag, faTruck, faDollarSign, faChartBar, faCog, faHeart, faAward, faQuestionCircle, faBookOpen, faUser } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  // State to keep track of the active nav item
  const [activeItem, setActiveItem] = useState('Dashboard');

  return (
    <aside className="w-64 bg-white border-r border-gray-200 h-screen flex flex-col">
      <div className="flex items-center p-4">
        <svg className="w-8 h-8 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <h1 className="text-xl font-bold">Printify</h1>
      </div>
      <nav className="mt-6 flex-grow">
        <div className="flex items-center justify-between px-4 py-2 border border-gray-200 rounded-md mx-4 mb-4">
          <span>My new store</span>
          <ChevronDown size={16} />
        </div>
        <div className="space-y-2 px-2"> {/* Adds spacing between nav items */}
          <NavItem icon={faHome} name="Dashboard" active={activeItem === 'Dashboard'} onClick={() => setActiveItem('Dashboard')} />
          <NavItem icon={faClipboard} name="Catalog" active={activeItem === 'Catalog'} onClick={() => setActiveItem('Catalog')} />
          <NavItem icon={faTag} name="My products" active={activeItem === 'My products'} onClick={() => setActiveItem('My products')} />
          <NavItem icon={faTruck} name="Orders" active={activeItem === 'Orders'} onClick={() => setActiveItem('Orders')} />
          <NavItem icon={faDollarSign} name="Wallet" active={activeItem === 'Wallet'} onClick={() => setActiveItem('Wallet')} />
          <NavItem icon={faChartBar} name="Insights" active={activeItem === 'Insights'} onClick={() => setActiveItem('Insights')} />
          <NavItem icon={faCog} name="Store settings" active={activeItem === 'Store settings'} onClick={() => setActiveItem('Store settings')} />
          <NavItem icon={faHeart} name="Branding" active={activeItem === 'Branding'} onClick={() => setActiveItem('Branding')} />
          <NavItem icon={faAward} name="Printify Premium" active={activeItem === 'Printify Premium'} onClick={() => setActiveItem('Printify Premium')} />
          <NavItem icon={faQuestionCircle} name="Need help?" active={activeItem === 'Need help?'} onClick={() => setActiveItem('Need help?')} />
          <NavItem icon={faBookOpen} name="Resources" active={activeItem === 'Resources'} onClick={() => setActiveItem('Resources')} />
          <NavItem icon={faUser} name="Account" active={activeItem === 'Account'} onClick={() => setActiveItem('Account')} />
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
