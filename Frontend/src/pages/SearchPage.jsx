import React from "react";
import { useSearchParams, Link } from "react-router-dom";
import { useSearchProductsQuery } from "@/lib/api/productApi";

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query") || "";

  const { data: products, isLoading, isError } = useSearchProductsQuery(query);

  if (isLoading) return <p className="p-6">Loading...</p>;
  if (isError) return <p className="p-6 text-red-600">Error loading products.</p>;
  if (!products || products.length === 0)
    return <p className="p-6">No products found for “{query}”.</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Search Results for “{query}”</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            className="block bg-white p-4 rounded-lg shadow hover:shadow-lg transition"
          >
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-48 object-cover mb-4 rounded"
            />
            <h2 className="text-xl font-bold">{product.name}</h2>
            <p className="text-gray-600 line-clamp-2">{product.description}</p>
            <div className="mt-2 flex justify-between items-center">
              <span className="text-green-600 font-bold">${product.price.toFixed(2)}</span>
              <span className="text-sm text-gray-500">Recycle Date: {product.recycleDate}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
