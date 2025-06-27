import React from 'react';
import { TbTruckDelivery } from 'react-icons/tb';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const PaymentSuccess = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white p-6">
      <TbTruckDelivery className="text-6xl text-[#166835] mb-4" />
      <h1 className="text-3xl font-bold text-[#166835] mb-2">Order Confirmed!</h1>
      <p className="text-[#166835] mb-6">Thank you for your purchase. Your order is on the way.</p>
      <Button
        onClick={() => navigate('/')}
        className="bg-[#166835] hover:bg-[#145a2a] text-white"
      >
        Return to Home
      </Button>
    </div>
  );
};

export default PaymentSuccess;
