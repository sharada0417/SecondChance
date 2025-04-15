import React from 'react';
import { Link } from "react-router";

const HomeElectronics = () => {
  return (
      <>
        {/* Header Section */}
        <div className="flex flex-col items-center bg-gradient-to-r from-green-400 via-green-500 to-green-600 p-8 shadow-2xl">
          <h3 className="text-4xl font-extrabold text-white mb-2 drop-shadow-md tracking-wide">
            📱 Mobile & Accessories
          </h3>
        </div>
  
        {/* Colorful Nav */}
        <nav className="bg-gradient-to-r from-green-500 via-green-600 to-green-700 p-6 shadow-xl">
          <div className="flex flex-wrap justify-center gap-6">
            {[ 
              { label: "Televisions", to: "/homeelectronic/televishion" },
              { label: "HomeTheater", to: "/homeelectronic/hometheter" },
              { label: "Refrigerators", to: "/homeelectronic/refrigerators" },
              { label: "Air Conditioners", to: "/homeelectronic/aircondition" },
              { label: "Washing Machines", to: "/homeelectronic/washingmachine" },
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
};

export default HomeElectronics;




