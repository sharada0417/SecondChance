import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const items = [
  {
    name: "Sony WH-1000XM5",
    type: "Wireless",
    brand: "Sony",
    color: "Black",
    price: 399.99,
    image: "https://source.unsplash.com/600x400/?wireless,headphones",
    listedUser: "demo",
    releaseDate: "2022-05-20",
    rating: 9,
  },
  {
    name: "Bose QuietComfort 45",
    type: "Wireless",
    brand: "Bose",
    color: "Silver",
    price: 329.0,
    image: "https://source.unsplash.com/600x400/?bose,headphones",
    listedUser: "demo",
    releaseDate: "2023-01-15",
    rating: 8,
  },
  {
    name: "Audio‑Technica ATH-M50x",
    type: "Wired",
    brand: "Audio‑Technica",
    color: "Black",
    price: 149.0,
    image: "https://source.unsplash.com/600x400/?studio,headphones",
    listedUser: "demo",
    releaseDate: "2021-08-10",
    rating: 8,
  },
  {
    name: "Sennheiser HD 660 S",
    type: "Wired",
    brand: "Sennheiser",
    color: "Anthracite",
    price: 499.95,
    image: "https://source.unsplash.com/600x400/?sennheiser,headphones",
    listedUser: "demo",
    releaseDate: "2022-03-05",
    rating: 9,
  },
  {
    name: "JBL Tune 760NC",
    type: "Wireless",
    brand: "JBL",
    color: "Blue",
    price: 119.95,
    image: "https://source.unsplash.com/600x400/?jbl,headphones",
    listedUser: "demo",
    releaseDate: "2023-06-12",
    rating: 7,
  },
  {
    name: "Apple AirPods Max",
    type: "Wireless",
    brand: "Apple",
    color: "Space Gray",
    price: 549.0,
    image: "https://source.unsplash.com/600x400/?airpods,max",
    listedUser: "demo",
    releaseDate: "2020-12-15",
    rating: 8,
  },
  {
    name: "Beats Studio3",
    type: "Wireless",
    brand: "Beats",
    color: "Matte Black",
    price: 299.95,
    image: "https://source.unsplash.com/600x400/?beats,headphones",
    listedUser: "demo",
    releaseDate: "2022-11-01",
    rating: 7,
  },
];

const HeadPhones = () => {
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
            <Checkbox id="wired" />
            <Label htmlFor="wired">Wired</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="wireless" />
            <Label htmlFor="wireless">Wireless</Label>
          </div>
        </div>

        {/* Brand Filter */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-emerald-800 mb-2">Brand</h2>
          <div className="flex flex-wrap gap-2">
            {["Sony", "Bose", "Audio‑Technica", "Sennheiser", "JBL", "Apple", "Beats"].map(
              (b) => (
                <button
                  key={b}
                  className="bg-green-700 text-white px-3 py-1 rounded-md shadow hover:bg-green-800 transition"
                  title={b}
                >
                  {b}
                </button>
              )
            )}
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex-1 h-[900px] bg-white p-6 overflow-y-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Headphones</h1>
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
              <p className="text-sm text-gray-600">Listed: {item.listedUser}</p>
              <p className="text-sm text-gray-600 mb-2">Release: {item.releaseDate}</p>
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

export default HeadPhones;
