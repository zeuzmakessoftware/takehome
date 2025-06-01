"use client";

import React from "react";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cartItems, removeFromCart, isCartOpen, toggleCart } = useCart();
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div
      className={`cart-sidebar ${isCartOpen ? "" : "cart-sidebar-hidden"}`}
    >
      <div className="p-4 flex items-center justify-between border-b">
        <h2 className="text-xl font-bold">Your Cart</h2>
        <button onClick={toggleCart} className="text-gray-600">
          ×
        </button>
      </div>
      <div className="p-4 flex flex-col h-[calc(100%-4rem)]">
        {cartItems.length === 0 ? (
          <p className="text-gray-500">Cart is empty.</p>
        ) : (
          <div className="flex-1 overflow-y-auto">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between mb-4"
              >
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-gray-600">
                    ${item.price} × {item.quantity}
                  </p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        )}
        <div className="border-t pt-4">
          <p className="text-lg font-semibold">Total: ${total}</p>
        </div>
      </div>
    </div>
  );
}
