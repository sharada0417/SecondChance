import React from 'react'
import BHeader from './BHeader';
import { Link } from "react-router";

const Art = () => {
    return (
        <>
          <BHeader/>
    
          {/* Colorful Nav */}
          <nav className="bg-gradient-to-r from-green-500 via-green-600 to-green-700 p-6 shadow-xl">
            <div className="flex flex-wrap justify-center gap-6">
              {[ 
                { label: "ArtCraft", to: "books/art/artCraft" },
                { label: "DIYProject", to: "books/art/dIYProject" },
                { label: "Gardening", to: "books/art/gardening" },
                { label: "Music", to: "books/art/music" },
                { label: "Photograpy", to: "books/art/photograpy" },
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

export default Art
