import React from 'react'
import { Link } from "react-router";
import FUHeader from './FUHeader';

const DiningRoom = () => {
  return (
    <>
    <FUHeader/>

    {/* Colorful Nav */}
    <nav className="bg-gradient-to-r from-green-500 via-green-600 to-green-700 p-6 shadow-xl">
      <div className="flex flex-wrap justify-center gap-6">
        {[ 
          { label: "Bar unit", to: "/furnitures/diningroom/barunits" },
          { label: "Crockery Units", to: "/furnitures/diningroom/crockeryunits" },
          { label: "Dining Chairs", to: "/furnitures/diningroom/diningchairs" },
          { label: "Dining tables", to: "/furnitures/diningroom/diningtables" },
          { label: "Sideboards", to: "/furnitures/diningroom/sideboards" },
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

export default DiningRoom
