import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaTrash, FaMinus, FaPlus, FaShoppingCart } from 'react-icons/fa';
import { CartContext } from '@/pages/CartContext';
import { Button } from '@/components/ui/button';

const Cart = () => {
  const navigate = useNavigate();
  const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);

  const totalItems = cartItems.reduce((sum, i) => sum + i.qty, 0);
  const subtotal = cartItems.reduce((sum, i) => sum + i.price * i.qty, 0);
  const shipping = 5.99;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-white p-6 flex flex-col md:flex-row justify-between gap-6">
      {/* Cart Items */}
      <div className="flex-1">
        {cartItems.length === 0 ? (
          <p className="text-[#166835]">Your cart is empty.</p>
        ) : (
          cartItems.map(item => (
            <div
              key={item.id}
              className="bg-white flex items-center justify-between p-4 rounded-lg shadow mb-4 border border-[#166835]"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded"
                />
                <div>
                  <h3 className="font-semibold text-lg text-[#166835]">{item.name}</h3>
                  <p className="text-sm text-[#166835] font-medium">{item.unit}</p>
                  <p className="text-sm text-[#166835]">${item.price.toFixed(2)}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button
                  className="text-white bg-[#166835] p-2 rounded hover:bg-[#145a2a]"
                  onClick={() => updateQuantity(item.id, item.qty - 1)}
                  disabled={item.qty <= 1}
                >
                  <FaMinus />
                </button>
                <span className="font-medium text-[#166835]">{item.qty}</span>
                <button
                  className="text-white bg-[#166835] p-2 rounded hover:bg-[#145a2a]"
                  onClick={() => updateQuantity(item.id, item.qty + 1)}
                >
                  <FaPlus />
                </button>
              </div>
              <button
                className="text-[#166835] hover:text-[#145a2a]"
                onClick={() => removeFromCart(item.id)}
              >
                <FaTrash size={18} />
              </button>
            </div>
          ))
        )}
      </div>

      {/* Cart Summary + Checkout */}
      <div className="w-full md:w-1/3 max-w-sm ml-auto bg-white p-6 rounded-lg shadow-md border border-[#166835]">
        <div className="flex items-center gap-2 mb-4">
          <FaShoppingCart className="text-[#166835]" size={22} />
          <h2 className="text-xl font-semibold text-[#166835]">My Cart</h2>
        </div>
        <p className="text-sm text-[#166835]">To be delivered on</p>
        <p className="text-[#166835] font-bold text-lg mb-4">Fri 11/11</p>
        <div className="text-sm text-[#166835] mb-2">
          Items total ({totalItems} items):{' '}
          <span className="font-semibold text-[#166835]">${subtotal.toFixed(2)}</span>
        </div>
        <div className="text-sm text-[#166835] mb-4">
          Shipping fee: <span className="font-semibold text-[#166835]">${shipping.toFixed(2)}</span>
        </div>
        <Button
          className="w-full bg-[#166835] hover:bg-[#145a2a] text-white"
          onClick={() => navigate('/payment-conform')}
        >
          Checkout (${total.toFixed(2)})
        </Button>
      </div>
    </div>
  );
};

export default Cart;