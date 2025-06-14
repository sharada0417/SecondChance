// src/Layout/Cart.layout.jsx
import React from 'react';
import { CartProvider } from '@/pages/CartContext';

export default function CartLayout({ children }) {
  return <CartProvider>{children}</CartProvider>;
}
