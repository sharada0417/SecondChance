import React from 'react'
import { Link } from "react-router";
import FUHeader from './FUHeader';

const LivingRoom = () => {
  return (
    <>
    <FUHeader/>

    {/* Colorful Nav */}
    <nav className="bg-gradient-to-r from-green-500 via-green-600 to-green-700 p-6 shadow-xl">
      <div className="flex flex-wrap justify-center gap-6">
        {[ 
          { label: "Coffee Table", to: "/furnitures/livingroom/coffeetables" },
          { label: "Recliners", to: "/furnitures/livingroom/recliners" },
          { label: "Sofas", to: "/furnitures/livingroom/sofas" },
          { label: "TV Units", to: "/furnitures/livingroom/tvunits" },
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

export default LivingRoom
