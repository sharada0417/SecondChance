import React from 'react';
import { Link } from "react-router";
import EHeader from './EHeader';

const MobileAcc = () => {
  return (
    <>
      <EHeader/>

      {/* Colorful Nav */}
      <nav className="bg-gradient-to-r from-green-500 via-green-600 to-green-700 p-6 shadow-xl">
        <div className="flex flex-wrap justify-center gap-6">
          {[ 
            { label: " Smartphones", to: "/electronic/mobileacc/mobilephone" },
            { label: "Phone Cases & Covers", to: "/electronic/mobileacc/phoneCase" },
            { label: " Chargers & Power Banks", to: "/electronic/mobileacc/charges" },
            { label: " Headphones & Earbuds", to: "/electronic/mobileacc/headphones" },
            { label: " Screen Protectors", to: "/electronic/mobileacc/screenprotector" },
            { label: "Phone Holders & Stands", to: "/electronic/mobileacc/phoneholders" },
            { label: " Smartwatches & Fitness Trackers", to: "/electronic/mobileacc/smartwatch" },
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

export default MobileAcc;
