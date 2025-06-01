"use client";

import React, { ReactNode } from "react";
import { CartProvider } from "../context/CartContext";
import Navbar from "@/components/Navbar";
import Cart from "@/components/Cart";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <CartProvider>
      <Navbar />
      <Cart />
      <div className="content-container">{children}</div>
    </CartProvider>
  );
}
