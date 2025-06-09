import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const DashBoard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
        ADMIN DASHBOARD
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
        
        <div className="bg-white p-10 min-h-[250px] rounded-2xl shadow-lg text-center flex flex-col justify-center">
          <h2 className="text-2xl font-semibold text-gray-600 mb-4">
            Category Management
          </h2>
          <Link to="/dashbord/categorymange" className="w-1/2 mx-auto">
            <Button className="w-full bg-green-700 text-white text-sm px-4 py-2 rounded hover:bg-green-800">
              Manage
            </Button>
          </Link>
        </div>

        <div className="bg-white p-10 min-h-[250px] rounded-2xl shadow-lg text-center flex flex-col justify-center">
          <h2 className="text-2xl font-semibold text-gray-600 mb-4">
            User Management
          </h2>
          <Link to="/dashbord/usernamge" className="w-1/2 mx-auto">
            <Button className="w-full bg-green-700 text-white text-sm px-4 py-2 rounded hover:bg-green-800">
              Manage
            </Button>
          </Link>
        </div>

        <div className="bg-white p-10 min-h-[250px] rounded-2xl shadow-lg text-center flex flex-col justify-center">
          <h2 className="text-2xl font-semibold text-gray-600 mb-4">
            Product Management
          </h2>
          <Link to="/dashbord/productmange" className="w-1/2 mx-auto">
            <Button className="w-full bg-green-700 text-white text-sm px-4 py-2 rounded hover:bg-green-800">
              Manage
            </Button>
          </Link>
        </div>

        <div className="bg-white p-10 min-h-[250px] rounded-2xl shadow-lg text-center flex flex-col justify-center">
          <h2 className="text-2xl font-semibold text-gray-600 mb-4">
            Order Management
          </h2>
          <Link to="/dashbord/ordermange" className="w-1/2 mx-auto">
            <Button className="w-full bg-green-700 text-white text-sm px-4 py-2 rounded hover:bg-green-800">
              Manage
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
