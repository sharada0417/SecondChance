import React, { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const items = [
  {
    name: "LG Split AC 1.5 Ton",
    brand: "LG",
    price: 499.99,
    image: "https://source.unsplash.com/600x400/?split-ac",
    listedUser: "demo",
    releaseDate: "2023-05-10",
    rating: 8,
    type: "Split",
    coolingCapacity: "1.5 Ton",
    color: "White",
  },
  {
    name: "Daikin Window AC 1 Ton",
    brand: "Daikin",
    price: 349.99,
    image: "https://source.unsplash.com/600x400/?window-ac",
    listedUser: "demo",
    releaseDate: "2022-12-15",
    rating: 7,
    type: "Window",
    coolingCapacity: "1 Ton",
    color: "White",
  },
  {
    name: "Samsung Split AC 2 Ton",
    brand: "Samsung",
    price: 699.99,
    image: "https://source.unsplash.com/600x400/?samsung-ac",
    listedUser: "demo",
    releaseDate: "2023-03-20",
    rating: 9,
    type: "Split",
    coolingCapacity: "2 Ton",
    color: "Silver",
  },
  {
    name: "Carrier Portable AC",
    brand: "Carrier",
    price: 299.99,
    image: "https://source.unsplash.com/600x400/?portable-ac",
    listedUser: "demo",
    releaseDate: "2023-01-05",
    rating: 6,
    type: "Portable",
    coolingCapacity: "0.75 Ton",
    color: "Black",
  },
  {
    name: "Voltas Split AC 1.2 Ton",
    brand: "Voltas",
    price: 429.99,
    image: "https://source.unsplash.com/600x400/?voltas-ac",
    listedUser: "demo",
    releaseDate: "2023-06-01",
    rating: 8,
    type: "Split",
    coolingCapacity: "1.2 Ton",
    color: "White",
  },
];

const colorMap = {
  "White": "#ffffff",
  "Silver": "#c0c0c0",
  "Black": "#000000",
};

const AirConditioners = () => {
  const [sortBy, setSortBy] = useState(null);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedCoolingCapacities, setSelectedCoolingCapacities] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);

  const uniqueTypes = [...new Set(items.map(item => item.type))];
  const uniqueCoolingCapacities = [...new Set(items.map(item => item.coolingCapacity))];
  const uniqueBrands = [...new Set(items.map(item => item.brand))];
  const uniqueColors = [...new Set(items.map(item => item.color))];

  const handleTypeChange = (type) => {
    setSelectedTypes(prev =>
      prev.includes(type) ? prev.filter(item => item !== type) : [...prev, type]
    );
  };

  const handleCoolingCapacityChange = (capacity) => {
    setSelectedCoolingCapacities(prev =>
      prev.includes(capacity) ? prev.filter(item => item !== capacity) : [...prev, capacity]
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
    (selectedTypes.length === 0 || selectedTypes.includes(item.type)) &&
    (selectedCoolingCapacities.length === 0 || selectedCoolingCapacities.includes(item.coolingCapacity)) &&
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
          <h2 className="text-lg font-semibold text-emerald-800 mb-2">Type</h2>
          {uniqueTypes.map(type => (
            <div key={type} className="flex items-center space-x-2 mb-2">
              <Checkbox
                id={type}
                checked={selectedTypes.includes(type)}
                onCheckedChange={() => handleTypeChange(type)}
              />
              <Label htmlFor={type}>{type}</Label>
            </div>
          ))}
        </div>
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-emerald-800 mb-2">Cooling Capacity</h2>
          {uniqueCoolingCapacities.map(capacity => (
            <div key={capacity} className="flex items-center space-x-2 mb-2">
              <Checkbox
                id={capacity}
                checked={selectedCoolingCapacities.includes(capacity)}
                onCheckedChange={() => handleCoolingCapacityChange(capacity)}
              />
              <Label htmlFor={capacity}>{capacity}</Label>
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
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Air Conditioners</h1>
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
              <p className="text-sm text-gray-600">Type: {item.type}</p>
              <p className="text-sm text-gray-600">Cooling Capacity: {item.coolingCapacity}</p>
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

export default AirConditioners;