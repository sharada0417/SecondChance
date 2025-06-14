
// src/components/MobilePhones.jsx
import React from 'react';
import { Link } from 'react-router';
import { useGetProductsByCategoryQuery } from '@/lib/api/productApi';

const ChargesAndCovers = ({ categoryId = 1, subid = 2 }) => {
  const { data: products = [], isLoading, isError } = useGetProductsByCategoryQuery({ categoryId, subid });

  if (isLoading) return <p className="p-6">Loading...</p>;
  if (isError) return <p className="p-6 text-red-600">Error loading products.</p>;
  if (products.length === 0) return <p className="p-6">No products found.</p>;

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
          {products.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="block bg-emerald-50 p-4 rounded-xl shadow hover:shadow-lg transition"
            >
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h2 className="text-2xl font-semibold text-emerald-800 mb-1">{product.name}</h2>
              <p className="text-3xl font-bold text-green-900 mb-2">${product.price.toFixed(2)}</p>
              <p className="text-sm text-gray-500 mb-2">Recycle Date: {product.recycleDate}</p>
              <div className="flex justify-between">
                <button
                  onClick={e => { e.preventDefault(); /* handle buy now */ }}
                  className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
                >
                  Buy Now
                </button>
                <button
                  onClick={e => { e.preventDefault(); /* handle add to cart */ }}
                  className="border border-green-600 text-green-700 px-4 py-2 rounded hover:bg-green-100 transition"
                >
                  Add to Cart
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChargesAndCovers;


