import React from 'react'
import FUHeader from './FUHeader'
import { Link } from "react-router";

const OfficeRoom = () => {
  return (
    <>
    <FUHeader/>

    {/* Colorful Nav */}
    <nav className="bg-gradient-to-r from-green-500 via-green-600 to-green-700 p-6 shadow-xl">
      <div className="flex flex-wrap justify-center gap-6">
        {[ 
          { label: "Book Shelves", to: "/furnitures/officeroom/bookshelves" },
          { label: "Filing Cabinets", to: "/furnitures/officeroom/filingcabinets" },
          { label: "Office Chairs", to: "/furnitures/officeroom/officechairs" },
          { label: "Office tables", to: "/furnitures/officeroom/officetables" },
          { label: "Work stations", to: "/furnitures/officeroom/workstations" },
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

export default OfficeRoom
