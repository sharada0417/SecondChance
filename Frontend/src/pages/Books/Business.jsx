import React from 'react'
import BHeader from './BHeader';
import { Link } from "react-router";

const Business = () => {
  return (
    <>
      <BHeader/>

      {/* Colorful Nav */}
      <nav className="bg-gradient-to-r from-green-500 via-green-600 to-green-700 p-6 shadow-xl">
        <div className="flex flex-wrap justify-center gap-6">
          {[ 
            { label: "Finance", to: "books/business/finance" },
            { label: "Law", to: "books/business/law" },
            { label: "Management", to: "books/business/management" },
            { label: "Marketing", to: "books/business/marketing" },
            { label: "Strategy", to: "books/business/strategy" },
          ].map((item, index) => (
            <Link
              key={index}
              to={item.to}
              className="bg-white text-gray-800 font-semibold px-4 py-2 rounded-full shadow-md hover:bg-yellow-200 hover:scale-105 transition-transform duration-300"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
}

export default Business
