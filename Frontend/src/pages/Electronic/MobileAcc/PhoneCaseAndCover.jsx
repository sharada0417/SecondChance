import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const PhoneCaseAndCover = () => {
  return (
    <div className="flex">
      {/* Filter Section */}
      <div className="w-[400px] h-[900px] bg-gradient-to-br from-green-100 via-emerald-200 to-lime-100 p-6 text-black shadow-xl rounded-xl">
        <h1 className="text-2xl font-bold mb-6 text-green-900"> Filters</h1>

        {/* Price Filter */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-emerald-800 mb-2">Price</h2>
          <div className="flex items-center space-x-2 mb-2">
            <Checkbox id="low" />
            <Label htmlFor="low">Low to High</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="high" />
            <Label htmlFor="high">High to Low</Label>
          </div>
        </div>

        {/* Oldest/Newest Filter */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-emerald-800 mb-2">Sort by</h2>
          <div className="flex items-center space-x-2 mb-2">
            <Checkbox id="oldest" />
            <Label htmlFor="oldest">Oldest First</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="newest" />
            <Label htmlFor="newest">Newest First</Label>
          </div>
        </div>

        {/* Color Filter */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-emerald-800 mb-2">Color</h2>
          <div className="flex flex-wrap gap-2">
            <div className="w-6 h-6 rounded-full bg-black border-2 border-gray-400 cursor-pointer" title="Black"></div>
            <div className="w-6 h-6 rounded-full bg-white border-2 border-gray-400 cursor-pointer" title="White"></div>
            <div className="w-6 h-6 rounded-full bg-blue-500 border-2 border-gray-400 cursor-pointer" title="Blue"></div>
            <div className="w-6 h-6 rounded-full bg-red-500 border-2 border-gray-400 cursor-pointer" title="Red"></div>
            <div className="w-6 h-6 rounded-full bg-yellow-400 border-2 border-gray-400 cursor-pointer" title="Yellow"></div>
            <div className="w-6 h-6 rounded-full bg-green-600 border-2 border-gray-400 cursor-pointer" title="Green"></div>
          </div>
        </div>

        {/* Brand Filter with Buttons */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-emerald-800 mb-2">Brand</h2>
          <div className="flex flex-wrap gap-2">
            <button
              className="bg-green-700 text-white px-3 py-1 rounded-md shadow hover:bg-green-800 transition"
              title="Apple"
            >
              Apple
            </button>
            <button
              className="bg-green-700 text-white px-3 py-1 rounded-md shadow hover:bg-green-800 transition"
              title="Samsung"
            >
              Samsung
            </button>
            <button
              className="bg-green-700 text-white px-3 py-1 rounded-md shadow hover:bg-green-800 transition"
              title="Xiaomi"
            >
              Xiaomi
            </button>
            <button
              className="bg-green-700 text-white px-3 py-1 rounded-md shadow hover:bg-green-800 transition"
              title="Vivo"
            >
              Vivo
            </button>
            <button
              className="bg-green-700 text-white px-3 py-1 rounded-md shadow hover:bg-green-800 transition"
              title="Oppo"
            >
              Oppo
            </button>
            <button
              className="bg-green-700 text-white px-3 py-1 rounded-md shadow hover:bg-green-800 transition"
              title="Nokia"
            >
              Nokia
            </button>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex-1 h-[900px] bg-white p-6">
        <h1 className="text-3xl font-bold text-gray-800">Hi</h1>
      </div>
    </div>
  );
};

export default PhoneCaseAndCover;
