import React from 'react'
import BHeader from './BHeader';
import { Link } from "react-router";

const nonFiction = () => {
  return (
    <>
      <BHeader/>

      {/* Colorful Nav */}
      <nav className="bg-gradient-to-r from-green-500 via-green-600 to-green-700 p-6 shadow-xl">
        <div className="flex flex-wrap justify-center gap-6">
          {[ 
             { label: "Biographies", to: "books/nonfiction/biographies" },
             { label: "Fitness", to: "books/nonfiction/fitness" },
             { label: "Self help", to: "books/nonfiction/selfhelp" },
             { label: "Travel", to: "books/nonfiction/travel" },
             { label: "True crime", to: "books/nonfiction/truecrime" },
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

export default nonFiction





