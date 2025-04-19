import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const items = [
  {
    name: "iPhone 14 Pro",
    brand: "Apple",
    price: 999.99,
    image: "https://source.unsplash.com/600x400/?iphone",
    listedUser: "demo",
    releaseDate: "2023-09-16",
    rating: 9,
  },
  {
    name: "Galaxy S23",
    brand: "Samsung",
    price: 899.99,
    image: "https://source.unsplash.com/600x400/?samsung,phone",
    listedUser: "demo",
    releaseDate: "2023-02-17",
    rating: 8,
  },
  {
    name: "Pixel 7",
    brand: "Google",
    price: 599.99,
    image: "https://source.unsplash.com/600x400/?pixel,phone",
    listedUser: "demo",
    releaseDate: "2022-10-13",
    rating: 8,
  },
  {
    name: "OnePlus 11",
    brand: "OnePlus",
    price: 699.99,
    image: "https://source.unsplash.com/600x400/?oneplus,phone",
    listedUser: "demo",
    releaseDate: "2023-01-04",
    rating: 7,
  },
  {
    name: "Xiaomi 13",
    brand: "Xiaomi",
    price: 749.99,
    image: "https://source.unsplash.com/600x400/?xiaomi,phone",
    listedUser: "demo",
    releaseDate: "2023-12-01",
    rating: 7,
  },
  {
    name: "Nokia G50",
    brand: "Nokia",
    price: 299.99,
    image: "https://source.unsplash.com/600x400/?nokia,phone",
    listedUser: "demo",
    releaseDate: "2021-10-28",
    rating: 6,
  },
  {
    name: "Vivo X90",
    brand: "Vivo",
    price: 649.99,
    image: "https://source.unsplash.com/600x400/?vivo,phone",
    listedUser: "demo",
    releaseDate: "2023-03-31",
    rating: 7,
  },
  {
    name: "Find X6 Pro",
    brand: "Oppo",
    price: 899.99,
    image: "https://source.unsplash.com/600x400/?oppo,phone",
    listedUser: "demo",
    releaseDate: "2023-02-24",
    rating: 8,
  },
];

const MobilePhones = () => {
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

        {/* OS Filter */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-emerald-800 mb-2">OS</h2>
          <div className="flex items-center space-x-2 mb-2">
            <Checkbox id="android" />
            <Label htmlFor="android">Android</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="ios" />
            <Label htmlFor="ios">iOS</Label>
          </div>
        </div>

        {/* Brand Filter */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-emerald-800 mb-2">Brand</h2>
          <div className="flex flex-wrap gap-2">
            {["Apple", "Samsung", "Google", "OnePlus", "Xiaomi", "Nokia", "Vivo", "Oppo"].map((b) => (
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
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Mobile Phones</h1>
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
              <h2 className="text-xl font-semibold text-emerald-800">{item.name}</h2>
              <p className="text-sm text-gray-600">Brand: {item.brand}</p>
              <p className="text-sm text-gray-600">Listed User: {item.listedUser}</p>
              <p className="text-sm text-gray-600 mb-2">Release Date: {item.releaseDate}</p>
              <p className="text-lg font-bold text-green-900 mb-2">${item.price.toFixed(2)}</p>
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

export default MobilePhones;
