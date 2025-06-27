// src/pages/PaymentConform.jsx
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '@/pages/CartContext';
import { useSaveAddressMutation, useCreateOrderMutation } from '@/lib/api/orderApi';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const PaymentConform = () => {
  const navigate = useNavigate();
  const { cartItems, removeFromCart } = useContext(CartContext);
  const [addr, setAddr] = useState({ street: '', city: '', state: '', zipCode: '', country: '' });
  const [errorMessage, setErrorMessage] = useState(''); // Added for user feedback

  const [saveAddress, { isLoading: addrLoading }] = useSaveAddressMutation();
  const [createOrder, { isLoading: orderLoading }] = useCreateOrderMutation();

  const subtotal = cartItems.reduce((sum, i) => sum + i.price * i.qty, 0);
  const shipping = 5.99;
  const total = subtotal + shipping;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(''); // Clear previous errors
    try {
      await saveAddress(addr).unwrap();
      await createOrder(
        cartItems.map(item => ({ productId: item.id, quantity: item.qty }))
      ).unwrap();
      cartItems.forEach(item => removeFromCart(item.id));
      navigate('/payment-success');
    } catch (err) {
      console.error('Checkout error:', {
        message: err.message,
        status: err.status,
        data: err.data,
        originalError: err,
      }); // Detailed logging
      const userError =
        err.status === 403
          ? 'Access denied. Please ensure you are logged in or try again later.'
          : 'An error occurred during checkout. Please try again.';
      setErrorMessage(userError); // Display user-friendly error
    }
  };

  return (
    <div className="min-h-screen bg-white p-6">
      <h1 className="text-3xl font-bold text-[#166835] mb-6">Payment Confirmation</h1>
      {errorMessage && (
        <p className="text-red-600 mb-4 p-4 bg-red-100 rounded-lg">{errorMessage}</p> // Error display
      )}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Order Summary */}
        <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-1/3 border-t-4 border-[#166835]">
          <h2 className="text-xl font-semibold text-[#166835] mb-4">Order Summary</h2>
          <p className="text-[#166835]">
            Subtotal: <span className="font-semibold">${subtotal.toFixed(2)}</span>
          </p>
          <p className="text-[#166835]">
            Shipping: <span className="font-semibold">${shipping.toFixed(2)}</span>
          </p>
          <p className="text-[#166835] font-bold mt-2">
            Total: <span className="text-[#166835]">${total.toFixed(2)}</span>
          </p>
        </div>
        {/* Address Form */}
        <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-2/3 border-t-4 border-[#166835]">
          <h2 className="text-xl font-semibold text-[#166835] mb-4">Shipping Address</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {['street', 'city', 'state', 'zipCode', 'country'].map((field) => (
              <div key={field}>
                <Label htmlFor={field} className="text-[#166835]">
                  {field.charAt(0).toUpperCase() + field.slice(1)}
                </Label>
                <Input
                  id={field}
                  value={addr[field]}
                  onChange={(e) => setAddr({ ...addr, [field]: e.target.value })}
                  placeholder={`Enter ${field}`}
                  className="border-[#166835] focus:border-[#166835] text-[#166835]"
                />
              </div>
            ))}
            <Button
              type="submit"
              className="w-full bg-[#166835] hover:bg-[#145a2a] text-white"
              disabled={addrLoading || orderLoading}
            >
              {addrLoading || orderLoading ? 'Processing…' : 'Place Order (Cash on Delivery)'}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PaymentConform;