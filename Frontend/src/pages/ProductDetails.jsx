import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useGetProductByIdQuery } from '@/lib/api/productApi';

const ProductDetails = () => {
  const { id } = useParams();
  const { data: product, isLoading, isError } = useGetProductByIdQuery(id);

  if (isLoading) return <p className="p-6">Loading product details...</p>;
  if (isError || !product) return <p className="p-6 text-red-600">Product not found.</p>;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow">
      <Link to="/" className="text-green-600 hover:underline mb-4 inline-block">← Back to products</Link>
      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full md:w-1/2 h-auto object-cover rounded-md"
        />
        <div className="flex-1">
          <h1 className="text-4xl font-bold text-emerald-800 mb-4">{product.name}</h1>
          <p className="text-md text-gray-700 mb-4">{product.description}</p>
          <p className="text-lg text-gray-600 mb-2">Recycle Date: <span className="font-medium text-emerald-800">{product.recycleDate}</span></p>
          <p className="text-4xl font-extrabold text-green-900 mb-6">${product.price.toFixed(2)}</p>
          <div className="flex space-x-4">
            <button className="bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition">
              Buy Now
            </button>
            <button className="border border-green-600 text-green-700 px-6 py-3 rounded-xl hover:bg-green-100 transition">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;