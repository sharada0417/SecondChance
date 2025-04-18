import React from 'react'
import { Link } from "react-router";
import FAHeader from './FAHeader';
const FootWare = () => {
  return (
    <>
      <FAHeader/>

      {/* Colorful Nav */}
      <nav className="bg-gradient-to-r from-green-500 via-green-600 to-green-700 p-6 shadow-xl">
        <div className="flex flex-wrap justify-center gap-6">
          {[ 
            { label: "Boots ", to: "/fashion/footware/boots" },
            { label: "Casual Shoes", to: "/fashion/footware/casualshoes" },
            { label: "Formal Shoes", to: "/fashion/footware/formalshoes" },
            { label: "Sandals", to: "/fashion/footware/sandals" },
            { label: "Sports Shoes", to: "/fashion/footware/sportsshoes" },
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

export default FootWare
