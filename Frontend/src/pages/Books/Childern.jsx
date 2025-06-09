import React from 'react'
import BHeader from './BHeader';
import { Link } from "react-router";
const Childern = () => {
  return (
    <>
      <BHeader/>

      {/* Colorful Nav */}
      <nav className="bg-gradient-to-r from-green-500 via-green-600 to-green-700 p-6 shadow-xl">
        <div className="flex flex-wrap justify-center gap-6">
          {[ 
            { label: "Activity books", to: "books/children/activitybooks" },
            { label: "Comics", to: "books/children/comics" },
            { label: "Learning Books", to: "books/children/learningBooks" },
            { label: "School Books", to: "books/children/schoolBooks" },
            { label: "Story books", to: "books/children/storybooks" },
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

export default Childern
