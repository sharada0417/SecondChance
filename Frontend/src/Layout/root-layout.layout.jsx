// File: src/Layout/root-layout.layout.jsx

import React from "react";
import Navigation from "@/components/Navigation";
import { Outlet } from "react-router-dom";
import { CartProvider } from "@/pages/CartContext";
import { Toaster } from "@/components/ui/toaster";
import Footerpage from "@/pages/Footerpage";


function RootLayout() {
  return (
    <CartProvider>
      <Navigation />
      <Outlet />
       <Toaster />
       <Footerpage/>
    </CartProvider>
  );
}

export default RootLayout;
