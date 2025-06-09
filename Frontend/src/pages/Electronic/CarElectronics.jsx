import React from 'react';
import { Link } from "react-router";
import EHeader from './EHeader';

const CarElectronics = () => {
  return (
    <>
      <EHeader/>

      {/* Colorful Nav */}
      <nav className="bg-gradient-to-r from-green-500 via-green-600 to-green-700 p-6 shadow-xl">
        <div className="flex flex-wrap justify-center gap-6">
          {[ 
            { label: "Car Stereos", to: "/electronic/carelectronics/carstereos" },
            { label: "Dash Cams", to: "/electronic/carelectronics/dashcams" },
            { label: "Parking Cameras", to: "/electronic/carelectronics/parkingcameras" },
            { label: "Car Chargers", to: "/electronic/carelectronics/carchargers" },
            { label: "Car Air Purifiers", to: "/electronic/carelectronics/carairpurifiers" },
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

export default CarElectronics;
