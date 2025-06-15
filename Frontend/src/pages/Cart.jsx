import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaTrash, FaMinus, FaPlus, FaShoppingCart } from 'react-icons/fa';
import { CartContext } from '@/pages/CartContext';
import { useSaveAddressMutation, useCreateOrderMutation } from '@/lib/api/orderApi';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const Cart = () => {
  const navigate = useNavigate();
  const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);
  const [open, setOpen] = useState(false);
  const [addr, setAddr] = useState({ street: '', city: '', state: '', zipCode: '', country: '' });

  const [saveAddress, { isLoading: addrLoading }] = useSaveAddressMutation();
  const [createOrder, { isLoading: orderLoading }] = useCreateOrderMutation();

  const totalItems = cartItems.reduce((sum, i) => sum + i.qty, 0);
  const subtotal   = cartItems.reduce((sum, i) => sum + i.price * i.qty, 0);
  const shipping   = 5.99;

  const handleCheckout = async () => {
    try {
      // Save the address
      await saveAddress(addr).unwrap();
      // Create the order
      await createOrder(
        cartItems.map(item => ({ productId: item.id, quantity: item.qty }))
      ).unwrap();
      // Clear cart
      cartItems.forEach(item => removeFromCart(item.id));
      setOpen(false);
      // Show success alert and navigate home
      alert('Your order was successfully created (Cash on Delivery)!');
      navigate('/');
    } catch (err) {
      console.error('Checkout error:', err);
    }
  };

  return (
    <>
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
                {/* Item Info */}
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800">{item.name}</h3>
                    <p className="text-sm text-green-600 font-medium">{item.unit}</p>
                    <p className="text-sm text-gray-600">${item.price.toFixed(2)}</p>
                  </div>
                </div>

                {/* Quantity Controls */}
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

                {/* Remove Button */}
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

        {/* Cart Summary + Checkout */}
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

          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button className="w-full bg-green-600 hover:bg-green-700">
                Checkout &nbsp; (${(subtotal + shipping).toFixed(2)})
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Enter Shipping Address</DialogTitle>
                <DialogDescription>
                  We'll save this address before creating your order.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                {['street','city','state','zipCode','country'].map(field => (
                  <div key={field}>
                    <label className="block text-sm font-medium text-gray-700">
                      {field.charAt(0).toUpperCase() + field.slice(1)}
                    </label>
                    <Input
                      value={addr[field]}
                      onChange={e => setAddr(s => ({ ...s, [field]: e.target.value }))}
                      placeholder={field}
                    />
                  </div>
                ))}
              </div>
              <DialogFooter>
                <Button onClick={handleCheckout} disabled={addrLoading || orderLoading}>
                  {addrLoading || orderLoading ? 'Processing…' : 'Submit & Place Order'}
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </>
  );
};

export default Cart;
