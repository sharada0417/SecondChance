import React from 'react'
import { Link } from "react-router";
import FAHeader from './FAHeader';
const Accessories = () => {
  return (
    <>
      <FAHeader/>

      {/* Colorful Nav */}
      <nav className="bg-gradient-to-r from-green-500 via-green-600 to-green-700 p-6 shadow-xl">
        <div className="flex flex-wrap justify-center gap-6">
          {[ 
            { label: "Bags", to: "/fashion/accessories/bags" },
            { label: "Belts", to: "/fashion/accessories/belts" },
            { label: "Headphones", to: "/fashion/accessories/headphones" },
            { label: "Jewlery", to: "/fashion/accessories/jewelry" },
            { label: "Sunglasses", to: "/fashion/accessories/sunglasses" },
            { label: "Watches", to: "/fashion/accessories/watches" },
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
  )
}

export default Accessories
