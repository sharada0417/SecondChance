import React, { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const items = [
  {
    name: "Sony Bravia 55\" 4K",
    brand: "Sony",
    price: 799.99,
    image: "https://source.unsplash.com/600x400/?sony-tv",
    listedUser: "demo",
    releaseDate: "2023-02-10",
    rating: 9,
    screenSize: "55\"",
    resolution: "4K",
    smartFeatures: "Yes",
    color: "Black",
  },
  {
    name: "Samsung QLED 65\" 8K",
    brand: "Samsung",
    price: 1999.99,
    image: "https://source.unsplash.com/600x400/?samsung-tv",
    listedUser: "demo",
    releaseDate: "2023-01-20",
    rating: 10,
    screenSize: "65\"",
    resolution: "8K",
    smartFeatures: "Yes",
    color: "Silver",
  },
  {
    name: "LG OLED 48\" 4K",
    brand: "LG",
    price: 1299.99,
    image: "https://source.unsplash.com/600x400/?lg-tv",
    listedUser: "demo",
    releaseDate: "2022-12-15",
    rating: 9,
    screenSize: "48\"",
    resolution: "4K",
    smartFeatures: "Yes",
    color: "Black",
  },
  {
    name: "TCL 32\" HD TV",
    brand: "TCL",
    price: 199.99,
    image: "https://source.unsplash.com/600x400/?tcl-tv",
    listedUser: "demo",
    releaseDate: "2023-03-05",
    rating: 7,
    screenSize: "32\"",
    resolution: "HD",
    smartFeatures: "No",
    color: "Black",
  },
  {
    name: "Philips 50\" 4K Smart TV",
    brand: "Philips",
    price: 499.99,
    image: "https://source.unsplash.com/600x400/?philips-tv",
    listedUser: "demo",
    releaseDate: "2023-04-01",
    rating: 8,
    screenSize: "50\"",
    resolution: "4K",
    smartFeatures: "Yes",
    color: "Gray",
  },
];

const colorMap = {
  "Black": "#000000",
  "Silver": "#c0c0c0",
  "Gray": "#808080",
};

const Televisions = () => {
  const [sortBy, setSortBy] = useState(null);
  const [selectedScreenSizes, setSelectedScreenSizes] = useState([]);
  const [selectedResolutions, setSelectedResolutions] = useState([]);
  const [selectedSmartFeatures, setSelectedSmartFeatures] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);

  const uniqueScreenSizes = [...new Set(items.map(item => item.screenSize))];
  const uniqueResolutions = [...new Set(items.map(item => item.resolution))];
  const uniqueSmartFeatures = [...new Set(items.map(item => item.smartFeatures))];
  const uniqueBrands = [...new Set(items.map(item => item.brand))];
  const uniqueColors = [...new Set(items.map(item => item.color))];

  const handleScreenSizeChange = (size) => {
    setSelectedScreenSizes(prev =>
      prev.includes(size) ? prev.filter(item => item !== size) : [...prev, size]
    );
  };

  const handleResolutionChange = (resolution) => {
    setSelectedResolutions(prev =>
      prev.includes(resolution) ? prev.filter(item => item !== resolution) : [...prev, resolution]
    );
  };

  const handleSmartFeaturesChange = (feature) => {
    setSelectedSmartFeatures(prev =>
      prev.includes(feature) ? prev.filter(item => item !== feature) : [...prev, feature]
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
    (selectedScreenSizes.length === 0 || selectedScreenSizes.includes(item.screenSize)) &&
    (selectedResolutions.length === 0 || selectedResolutions.includes(item.resolution)) &&
    (selectedSmartFeatures.length === 0 || selectedSmartFeatures.includes(item.smartFeatures)) &&
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
          <h2 className="text-lg font-semibold text-emerald-800 mb-2">Screen Size</h2>
          {uniqueScreenSizes.map(size => (
            <div key={size} className="flex items-center space-x-2 mb-2">
              <Checkbox
                id={size}
                checked={selectedScreenSizes.includes(size)}
                onCheckedChange={() => handleScreenSizeChange(size)}
              />
              <Label htmlFor={size}>{size}</Label>
            </div>
          ))}
        </div>
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-emerald-800 mb-2">Resolution</h2>
          {uniqueResolutions.map(resolution => (
            <div key={resolution} className="flex items-center space-x-2 mb-2">
              <Checkbox
                id={resolution}
                checked={selectedResolutions.includes(resolution)}
                onCheckedChange={() => handleResolutionChange(resolution)}
              />
              <Label htmlFor={resolution}>{resolution}</Label>
            </div>
          ))}
        </div>
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-emerald-800 mb-2">Smart Features</h2>
          {uniqueSmartFeatures.map(feature => (
            <div key={feature} className="flex items-center space-x-2 mb-2">
              <Checkbox
                id={feature}
                checked={selectedSmartFeatures.includes(feature)}
                onCheckedChange={() => handleSmartFeaturesChange(feature)}
              />
              <Label htmlFor={feature}>{feature}</Label>
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
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Televisions</h1>
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
              <p className="text-sm text-gray-600">Screen Size: {item.screenSize}</p>
              <p className="text-sm text-gray-600">Resolution: {item.resolution}</p>
              <p className="text-sm text-gray-600">Smart Features: {item.smartFeatures}</p>
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

export default Televisions;