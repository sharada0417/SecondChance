import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const items = [
  {
    name: "Fast Wall Charger",
    recycleName: "Charger Recycle",
    recycleBy: "ChargePlus",
    price: 15.99,
    image: "https://source.unsplash.com/600x400/?fast,charger",
    listedUser: "demo",
    recycleDate: "2025-03-26",
    rating: 7,
  },
  {
    name: "Wireless Qi Charger",
    recycleName: "Charger Recycle",
    recycleBy: "EcoCharge",
    price: 19.49,
    image: "https://source.unsplash.com/600x400/?wireless,charger",
    listedUser: "demo",
    recycleDate: "2025-03-26",
    rating: 8,
  },
  {
    name: "USB‑C PD Charger",
    recycleName: "Charger Recycle",
    recycleBy: "PowerFlow",
    price: 22.99,
    image: "https://source.unsplash.com/600x400/?usb-c,charger",
    listedUser: "demo",
    recycleDate: "2025-03-26",
    rating: 9,
  },
  {
    name: "Multi‑Port USB Charger",
    recycleName: "Charger Recycle",
    recycleBy: "HubCharge",
    price: 29.99,
    image: "https://source.unsplash.com/600x400/?multiport,charger",
    listedUser: "demo",
    recycleDate: "2025-03-26",
    rating: 6,
  },
  {
    name: "Car Fast Charger",
    recycleName: "Charger Recycle",
    recycleBy: "DriveCharge",
    price: 12.49,
    image: "https://source.unsplash.com/600x400/?car,charger",
    listedUser: "demo",
    recycleDate: "2025-03-26",
    rating: 5,
  },
  {
    name: "Solar Power Charger",
    recycleName: "Charger Recycle",
    recycleBy: "SunCharge",
    price: 34.99,
    image: "https://source.unsplash.com/600x400/?solar,charger",
    listedUser: "demo",
    recycleDate: "2025-03-26",
    rating: 8,
  },
  {
    name: "Power Bank 10000mAh",
    recycleName: "Charger Recycle",
    recycleBy: "ChargeBank",
    price: 24.99,
    image: "https://source.unsplash.com/600x400/?powerbank",
    listedUser: "demo",
    recycleDate: "2025-03-26",
    rating: 9,
  },
];

const ChargesAndCovers = () => {
  return (
    <div className="flex">
      {/* Filter Section */}
      <div className="w-[400px] h-[900px] bg-gradient-to-br from-green-100 via-emerald-200 to-lime-100 p-6 text-black shadow-xl rounded-xl">
        <h1 className="text-2xl font-bold mb-6 text-green-900">Filters</h1>

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

        {/* Type Filter */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-emerald-800 mb-2">Type</h2>
          <div className="flex items-center space-x-2 mb-2">
            <Checkbox id="chargers" />
            <Label htmlFor="chargers">Chargers</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="powerbanks" />
            <Label htmlFor="powerbanks">Powerbanks</Label>
          </div>
        </div>

        {/* Brand Filter */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-emerald-800 mb-2">Brand</h2>
          <div className="flex flex-wrap gap-2">
            {[
              "ChargePlus",
              "EcoCharge",
              "PowerFlow",
              "HubCharge",
              "DriveCharge",
              "SunCharge",
              "ChargeBank",
            ].map((brand) => (
              <button
                key={brand}
                className="bg-green-700 text-white px-3 py-1 rounded-md shadow hover:bg-green-800 transition"
                title={brand}
              >
                {brand}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex-1 h-[900px] bg-white p-6 overflow-y-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Items</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-emerald-50 p-4 rounded-xl shadow hover:shadow-lg transition"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h2 className="text-xl font-semibold text-emerald-800">
                {item.name}
              </h2>
              <p className="text-sm text-gray-600">
                Recycle: {item.recycleName}
              </p>
              <p className="text-sm text-gray-600">
                By: {item.recycleBy}
              </p>
              <p className="text-sm text-gray-600">
                Listed User: {item.listedUser}
              </p>
              <p className="text-sm text-gray-600 mb-2">
                Recycle Date: {item.recycleDate}
              </p>
              <p className="text-lg font-bold text-green-900 mb-2">
                ${item.price.toFixed(2)}
              </p>
              {/* Rating Stars (out of 10) */}
              <div className="flex mb-4">
                {Array.from({ length: 10 }).map((_, i) => (
                  <span key={i} className="text-yellow-500">
                    {i < item.rating ? "★" : "☆"}
                  </span>
                ))}
              </div>
              <div className="flex justify-between">
                <button className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700 transition">
                  Pay Now
                </button>
                <button className="border border-green-600 text-green-700 px-4 py-1 rounded hover:bg-green-100 transition">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChargesAndCovers;
