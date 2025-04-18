import React from 'react'
import BHeader from './BHeader';
import { Link } from "react-router";

const Education = () => {
      return (
    <>
      <BHeader/>

      {/* Colorful Nav */}
      <nav className="bg-gradient-to-r from-green-500 via-green-600 to-green-700 p-6 shadow-xl">
        <div className="flex flex-wrap justify-center gap-6">
          {[ 
             { label: "Dictionaries", to: "books/education/Dictionaries" },
             { label: "Exam Guides", to: "books/education/ExamGuides" },
             { label: "Language Books", to: "books/education/languagebooks" },
             { label: "Reference manual", to: "books/education/referencemanual" },
             { label: "Text Books", to: "books/education/textbooks" },
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

export default Education
