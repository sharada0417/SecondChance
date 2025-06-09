import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const items = [
  {
    name: "Silicone Case",
    type: "Case",
    brand: "Generic",
    color: "Black",
    price: 9.99,
    image: "https://source.unsplash.com/600x400/?silicone,phone,case",
    listedUser: "demo",
    listDate: "2025-03-26",
    rating: 7,
  },
  {
    name: "Leather Wallet Cover",
    type: "Cover",
    brand: "CoverMate",
    color: "Brown",
    price: 19.99,
    image: "https://source.unsplash.com/600x400/?leather,phone,cover",
    listedUser: "demo",
    listDate: "2025-04-01",
    rating: 8,
  },
  {
    name: "Clear TPU Case",
    type: "Case",
    brand: "ClearProtect",
    color: "Transparent",
    price: 12.49,
    image: "https://source.unsplash.com/600x400/?transparent,phone,case",
    listedUser: "demo",
    listDate: "2025-02-15",
    rating: 6,
  },
  {
    name: "Rugged Armor Case",
    type: "Case",
    brand: "ArmorTech",
    color: "Gray",
    price: 14.99,
    image: "https://source.unsplash.com/600x400/?rugged,phone,case",
    listedUser: "demo",
    listDate: "2025-03-10",
    rating: 9,
  },
  {
    name: "Flip Wallet Cover",
    type: "Cover",
    brand: "FlipGuard",
    color: "Black",
    price: 17.99,
    image: "https://source.unsplash.com/600x400/?flip,phone,cover",
    listedUser: "demo",
    listDate: "2025-01-20",
    rating: 7,
  },
  {
    name: "Fabric Weave Case",
    type: "Case",
    brand: "WeaveCo",
    color: "Blue",
    price: 11.99,
    image: "https://source.unsplash.com/600x400/?fabric,phone,case",
    listedUser: "demo",
    listDate: "2025-02-28",
    rating: 8,
  },
  {
    name: "Carbon Fiber Cover",
    type: "Cover",
    brand: "CarbonGuard",
    color: "Black",
    price: 24.99,
    image: "https://source.unsplash.com/600x400/?carbon,fiber,phone,cover",
    listedUser: "demo",
    listDate: "2025-03-05",
    rating: 9,
  },
  {
    name: "Hybrid Protective Case",
    type: "Case",
    brand: "HybridTech",
    color: "Red",
    price: 16.49,
    image: "https://source.unsplash.com/600x400/?hybrid,phone,case",
    listedUser: "demo",
    listDate: "2025-03-18",
    rating: 7,
  },
];

const PhoneCaseAndCover = () => {
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

        {/* Sort Filter */}
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

        {/* Type Filter */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-emerald-800 mb-2">Type</h2>
          <div className="flex items-center space-x-2 mb-2">
            <Checkbox id="case" />
            <Label htmlFor="case">Case</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="cover" />
            <Label htmlFor="cover">Cover</Label>
          </div>
        </div>


        {/* Brand Filter */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-emerald-800 mb-2">Brand</h2>
          <div className="flex flex-wrap gap-2">
            {[
              "Generic",
              "CoverMate",
              "ClearProtect",
              "ArmorTech",
              "FlipGuard",
              "WeaveCo",
              "CarbonGuard",
              "HybridTech",
            ].map((b) => (
              <button
                key={b}
                className="bg-green-700 text-white px-3 py-1 rounded-md shadow hover:bg-green-800 transition"
                title={b}
              >
                {b}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex-1 h-[900px] bg-white p-6 overflow-y-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Phone Cases & Covers</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="bg-emerald-50 p-4 rounded-xl shadow hover:shadow-lg transition"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h2 className="text-xl font-semibold text-emerald-800 mb-1">{item.name}</h2>
              <p className="text-sm text-gray-600">Type: {item.type}</p>
              <p className="text-sm text-gray-600">Brand: {item.brand}</p>
              <p className="text-sm text-gray-600">Color: {item.color}</p>
              <p className="text-sm text-gray-600">Listed: {item.listedUser}</p>
              <p className="text-sm text-gray-600 mb-2">Date: {item.listDate}</p>
              <p className="text-lg font-bold text-green-900 mb-2">
                ${item.price.toFixed(2)}
              </p>
              <div className="flex mb-4">
                {Array.from({ length: 10 }).map((_, i) => (
                  <span key={i} className="text-yellow-500">
                    {i < item.rating ? "★" : "☆"}
                  </span>
                ))}
              </div>
              <div className="flex justify-between">
                <button className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700 transition">
                  Buy Now
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

export default PhoneCaseAndCover;
