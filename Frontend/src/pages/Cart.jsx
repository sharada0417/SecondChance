
import React, { useContext } from 'react';
import { FaTrash, FaMinus, FaPlus, FaShoppingCart } from 'react-icons/fa';
import { CartContext } from '@/pages/CartContext';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);

  const totalItems = cartItems.reduce((sum, item) => sum + item.qty, 0);
  const subtotal   = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);
  const shipping   = 5.99;

  return (
    <div className="min-h-screen bg-gray-50 p-6 flex flex-col md:flex-row justify-between gap-6">
      {/* Cart Items */}
      <div className="flex-1">
        {cartItems.length === 0 ? (
          <p className="text-gray-600">Your cart is empty.</p>
        ) : (
          cartItems.map(item => (
            <div
              key={item.id}
              className="bg-white flex items-center justify-between p-4 rounded-lg shadow mb-4"
            >
              <div className="flex items-center gap-4">
                <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
                <div>
                  <h3 className="font-semibold text-lg text-gray-800">{item.name}</h3>
                  <p className="text-sm text-green-600 font-medium">{item.unit}</p>
                  <p className="text-sm text-gray-600">${item.price.toFixed(2)}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  className="text-white bg-green-600 p-2 rounded hover:bg-green-700"
                  onClick={() => updateQuantity(item.id, item.qty - 1)}
                  disabled={item.qty <= 1}
                >
                  <FaMinus />
                </button>
                <span className="font-medium">{item.qty}</span>
                <button
                  className="text-white bg-green-600 p-2 rounded hover:bg-green-700"
                  onClick={() => updateQuantity(item.id, item.qty + 1)}
                >
                  <FaPlus />
                </button>
              </div>

              <button
                className="text-gray-400 hover:text-red-600"
                onClick={() => removeFromCart(item.id)}
              >
                <FaTrash size={18} />
              </button>
            </div>
          ))
        )}
      </div>

      {/* Cart Summary */}
      <div className="w-full md:w-1/3 max-w-sm ml-auto bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center gap-2 mb-4">
          <FaShoppingCart className="text-green-700" size={22} />
          <h2 className="text-xl font-semibold">My Cart</h2>
        </div>

        <p className="text-sm text-gray-600">To be delivered on</p>
        <p className="text-green-700 font-bold text-lg mb-4">Fri 11/11</p>

        <div className="text-sm text-gray-700 mb-2">
          Items total ({totalItems} items):{' '}
          <span className="font-semibold text-green-800">${subtotal.toFixed(2)}</span>
        </div>
        <div className="text-sm text-gray-700 mb-4">
          Shipping fee: <span className="font-semibold text-red-500">${shipping.toFixed(2)}</span>
        </div>

        <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg text-lg">
          Checkout &nbsp; (${(subtotal + shipping).toFixed(2)})
        </button>
      </div>
    </div>
  );
};

export default Cart;
