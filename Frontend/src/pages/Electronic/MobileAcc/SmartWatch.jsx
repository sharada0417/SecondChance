import React, { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const items = [
  {
    name: "Apple Watch Series 9",
    brand: "Apple",
    price: 399.99,
    image: "https://source.unsplash.com/600x400/?apple-watch",
    listedUser: "demo",
    releaseDate: "2023-09-15",
    rating: 9,
    os: "watchOS",
    displayType: "OLED",
    batteryLife: "18 hours",
    color: "Space Gray",
  },
  {
    name: "Samsung Galaxy Watch 6",
    brand: "Samsung",
    price: 349.99,
    image: "https://source.unsplash.com/600x400/?samsung-watch",
    listedUser: "demo",
    releaseDate: "2023-07-20",
    rating: 8,
    os: "Wear OS",
    displayType: "AMOLED",
    batteryLife: "40 hours",
    color: "Black",
  },
];

const colorMap = {
  "Space Gray": "#555555",
  "Black": "#000000",
};

const SmartWatch = () => {
  const [sortBy, setSortBy] = useState(null);
  const [selectedOS, setSelectedOS] = useState([]);
  const [selectedDisplayTypes, setSelectedDisplayTypes] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);

  const uniqueOSes = [...new Set(items.map(item => item.os))];
  const uniqueDisplayTypes = [...new Set(items.map(item => item.displayType))];
  const uniqueBrands = [...new Set(items.map(item => item.brand))];
  const uniqueColors = [...new Set(items.map(item => item.color))];

  const handleOSChange = (os) => {
    setSelectedOS(prev =>
      prev.includes(os) ? prev.filter(item => item !== os) : [...prev, os]
    );
  };

  const handleDisplayTypeChange = (displayType) => {
    setSelectedDisplayTypes(prev =>
      prev.includes(displayType) ? prev.filter(item => item !== displayType) : [...prev, displayType]
    );
  };

  const handleBrandChange = (brand) => {
    setSelectedBrands(prev =>
      prev.includes(brand) ? prev.filter(item => item !== brand) : [...prev, brand]
    );
  };

  const handleColorChange = (color) => {
    setSelectedColors(prev =>
      prev.includes(color) ? prev.filter(item => item !== color) : [...prev, color]
    );
  };

  let filteredItems = items.filter(item =>
    (selectedOS.length === 0 || selectedOS.includes(item.os)) &&
    (selectedDisplayTypes.length === 0 || selectedDisplayTypes.includes(item.displayType)) &&
    (selectedBrands.length === 0 || selectedBrands.includes(item.brand)) &&
    (selectedColors.length === 0 || selectedColors.includes(item.color))
  );

  if (sortBy === "priceLowToHigh") {
    filteredItems.sort((a, b) => a.price - b.price);
  } else if (sortBy === "priceHighToLow") {
    filteredItems.sort((a, b) => b.price - a.price);
  } else if (sortBy === "dateOldestFirst") {
    filteredItems.sort((a, b) => new Date(a.releaseDate) - new Date(b.releaseDate));
  } else if (sortBy === "dateNewestFirst") {
    filteredItems.sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate));
  }

  return (
    <div className="flex">
      <div className="w-[400px] h-[900px] bg-gradient-to-br from-green-100 via-emerald-200 to-lime-100 p-6 text-black shadow-xl rounded-xl">
        <h1 className="text-2xl font-bold mb-6 text-green-900">Filters</h1>
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-emerald-800 mb-2">Sort by</h2>
          <RadioGroup value={sortBy} onValueChange={setSortBy}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="priceLowToHigh" id="priceLowToHigh" />
              <Label htmlFor="priceLowToHigh">Price: Low to High</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="priceHighToLow" id="priceHighToLow" />
              <Label htmlFor="priceHighToLow">Price: High to Low</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="dateOldestFirst" id="dateOldestFirst" />
              <Label htmlFor="dateOldestFirst">Date: Oldest First</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="dateNewestFirst" id="dateNewestFirst" />
              <Label htmlFor="dateNewestFirst">Date: Newest First</Label>
            </div>
          </RadioGroup>
        </div>
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-emerald-800 mb-2">OS</h2>
          {uniqueOSes.map(os => (
            <div key={os} className="flex items-center space-x-2 mb-2">
              <Checkbox
                id={os}
                checked={selectedOS.includes(os)}
                onCheckedChange={() => handleOSChange(os)}
              />
              <Label htmlFor={os}>{os}</Label>
            </div>
          ))}
        </div>
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-emerald-800 mb-2">Display Type</h2>
          {uniqueDisplayTypes.map(displayType => (
            <div key={displayType} className="flex items-center space-x-2 mb-2">
              <Checkbox
                id={displayType}
                checked={selectedDisplayTypes.includes(displayType)}
                onCheckedChange={() => handleDisplayTypeChange(displayType)}
              />
              <Label htmlFor={displayType}>{displayType}</Label>
            </div>
          ))}
        </div>
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-emerald-800 mb-2">Brand</h2>
          <div className="flex flex-wrap gap-2">
            {uniqueBrands.map(brand => (
              <button
                key={brand}
                className={`px-3 py-1 rounded-md shadow transition ${
                  selectedBrands.includes(brand) ? "bg-green-800 text-white" : "bg-green-700 text-white"
                }`}
                onClick={() => handleBrandChange(brand)}
              >
                {brand}
              </button>
            ))}
          </div>
        </div>
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-emerald-800 mb-2">Color</h2>
          <div className="flex flex-wrap gap-2">
            {uniqueColors.map(color => (
              <div
                key={color}
                className={`w-6 h-6 rounded-full cursor-pointer border-2 ${
                  selectedColors.includes(color) ? "border-green-800" : "border-gray-400"
                }`}
                style={{ backgroundColor: colorMap[color] }}
                title={color}
                onClick={() => handleColorChange(color)}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="flex-1 h-[900px] bg-white p-6 overflow-y-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Smart Watches</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
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
              <p className="text-sm text-gray-600">OS: {item.os}</p>
              <p className="text-sm text-gray-600">Display Type: {item.displayType}</p>
              <p className="text-sm text-gray-600">Battery Life: {item.batteryLife}</p>
              <p className="text-sm text-gray-600">Color: {item.color}</p>
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

export default SmartWatch;