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
    image: "data:image/jpeg;base64,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",
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
