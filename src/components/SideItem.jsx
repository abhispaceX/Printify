import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const NavItem = ({ icon, name, active, onClick }) => {
  return (
    <button
      
      onClick={onClick}
      className={`flex items-center px-6 py-2 ${
        active ? 'bg-gray-100 text-green-600' : 'text-gray-700 hover:bg-gray-100'
      }`}
    >
      <FontAwesomeIcon icon={icon} className="w-5 h-5 mr-4" />
      {name}
    </button>
  );
};

export default NavItem;
