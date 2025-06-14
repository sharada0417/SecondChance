// File: src/Layout/root-layout.layout.jsx

import React from "react";
import Navigation from "@/components/Navigation";
import { Outlet } from "react-router-dom";
import { CartProvider } from "@/pages/CartContext";


function RootLayout() {
  return (
    <CartProvider>
      <Navigation />
      <Outlet />
    </CartProvider>
  );
}

export default RootLayout;
