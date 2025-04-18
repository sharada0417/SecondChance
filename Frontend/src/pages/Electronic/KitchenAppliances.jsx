import React from 'react';
import { Link } from "react-router";
import EHeader from './EHeader';

const KitchenAppliances = () => {
  return (
    <>
     <EHeader/>

      {/* Colorful Nav */}
      <nav className="bg-gradient-to-r from-green-500 via-green-600 to-green-700 p-6 shadow-xl">
        <div className="flex flex-wrap justify-center gap-6">
          {[ 
            { label: "Mixer Grinders", to: "/electronic/kitchenappliances/mixergrinders" },
            { label: "Microwave Ovens", to: "/electronic/kitchenappliances/microwaveovens" },
            { label: "Coffee Makers", to: "/electronic/kitchenappliances/coffeeMakers" },
            { label: "Induction Cooktops", to: "/electronic/kitchenappliances/inductioncooktops" },
            { label: "Toasters", to: "/electronic/kitchenappliances/toasters" },
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

export default KitchenAppliances;
