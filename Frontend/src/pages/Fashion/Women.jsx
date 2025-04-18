import React from 'react'
import { Link } from "react-router";
import FAHeader from './FAHeader';

const Women = () => {
  return (
    <>
      <FAHeader/>

      {/* Colorful Nav */}
      <nav className="bg-gradient-to-r from-green-500 via-green-600 to-green-700 p-6 shadow-xl">
        <div className="flex flex-wrap justify-center gap-6">
          {[ 
            { label: "Dresses", to: "/fashion/women/dresses" },
            { label: "Handbags", to: "/fashion/women/handbags" },
            { label: "Kurtis", to: "/fashion/women/kurtis" },
            { label: "Sarees", to: "/fashion/women/sarees" },
            { label: "Tops", to: "/fashion/women/tops" },
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

export default Women
