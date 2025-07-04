// src/pages/ProductDetails.jsx
import React, { useContext } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useGetProductByIdQuery } from '@/lib/api/productApi';
import { CartContext } from '@/pages/CartContext';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: product, isLoading, isError } = useGetProductByIdQuery(id);
  const { addToCart, removeFromCart, cartItems } = useContext(CartContext); // Added cartItems and removeFromCart

  if (isLoading) return <p className="p-6">Loading product details...</p>;
  if (isError || !product) return <p className="p-6 text-red-600">Product not found.</p>;

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.imageUrl,
      unit: 'Each',
      qty: 1,
    });
  };

  const handleBuyNow = () => {
    // Clear cart using removeFromCart
    cartItems.forEach(item => removeFromCart(item.id));
    // Add the current product
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.imageUrl,
      unit: 'Each',
      qty: 1,
    });
    navigate('/payment-conform');
  };

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white rounded-xl shadow">
      <Link to="/electronic/mobileacc/mobilephone" className="text-green-600 hover:underline mb-4 inline-block">
        ← Back to products
      </Link>
      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full md:w-1/2 h-auto object-cover rounded-md"
        />
        <div className="flex-1">
          <h1 className="text-4xl font-bold text-emerald-800 mb-4">{product.name}</h1>
          <p className="text-md text-gray-700 mb-4">{product.description}</p>
          <p className="text-lg text-gray-600 mb-2">
            Recycle Date: <span className="font-medium text-emerald-800">{product.recycleDate}</span>
          </p>
          <p className="text-4xl font-extrabold text-green-900 mb-6">
            ${product.price.toFixed(2)}
          </p>
          <div className="flex space-x-4">
            <button
              onClick={handleBuyNow}
              className="bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition"
            >
              Buy Now
            </button>
            <button
              onClick={handleAddToCart}
              className="border border-green-600 text-green-600 px-6 py-3 rounded-xl hover:bg-green-100 transition"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;