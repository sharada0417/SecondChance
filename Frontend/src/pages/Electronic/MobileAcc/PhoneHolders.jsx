

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useGetProductsByCategoryQuery } from '@/lib/api/productApi';
import { CartContext } from '@/pages/CartContext';

const MobilePhones = ({ categoryId = 1, subid = 7 }) => {
  const { addToCart } = useContext(CartContext);
  const { data: products = [], isLoading, isError } =
    useGetProductsByCategoryQuery({ categoryId, subid });

  if (isLoading) return <p className="p-6">Loading...</p>;
  if (isError)   return <p className="p-6 text-red-600">Error loading products.</p>;
  if (!products.length) return <p className="p-6">No products found.</p>;

  return (
    <div className="flex">
      {/* Filter Section unchanged */}
      <div className="w-[400px] h-[900px] bg-gradient-to-br from-green-100 via-emerald-200 to-lime-100 p-6 text-black shadow-xl rounded-xl">
        {/* ... filters ... */}
      </div>

      {/* Content Section */}
      <div className="flex-1 h-[900px] bg-white p-6 overflow-y-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Mobile Phones</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map(product => (
            <div
              key={product.id}
              className="bg-emerald-50 p-4 rounded-xl shadow hover:shadow-lg transition"
            >
              <Link to={`/product/${product.id}`}>
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
              </Link>
              <h2 className="text-2xl font-semibold text-emerald-800 mb-1">
                {product.name}
              </h2>
              <p className="text-3xl font-bold text-green-900 mb-2">
                ${product.price.toFixed(2)}
              </p>
              <p className="text-sm text-gray-500 mb-4">
                Recycle Date: {product.recycleDate}
              </p>
              <div className="flex justify-between">
                <Link to={`/product/${product.id}`}>
                                <button className="border border-green-600 text-green-700 px-4 py-2 rounded hover:bg-green-100 transition">
                                  View Item
                                 </button>
                                </Link>
                <button
                  onClick={e => {
                    e.preventDefault();
                    addToCart({
                      id: product.id,
                      name: product.name,
                      price: product.price,
                      image: product.imageUrl,
                      unit: 'Each',
                    });
                  }}
                  className="border border-green-600 text-green-700 px-4 py-2 rounded hover:bg-green-100 transition"
                >
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
