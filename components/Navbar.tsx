"use client";

import Link from "next/link";
import React from "react";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { cartItems, toggleCart } = useCart();
  const cartCount = cartItems.reduce((sum, c) => sum + c.quantity, 0);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link href="/" className="logo-group flex items-center">
          <div className="logo-gradient">
            <div className="logo-gradient-bg"></div>
            <div className="logo-icon-container">
              <svg className="w-8 h-8 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
          </div>
          <div>
            <span className="store-name">
              Fictional Store
            </span>
          </div>
        </Link>
        
        <div className="flex items-center space-x-6">
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-200">
              Home
            </Link>
          </div>
          
          <button
            onClick={toggleCart}
            className="cart-button"
            id="cart-button"
            aria-label="Shopping cart"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-indigo-600 group-hover:text-indigo-700 transition-colors duration-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.2 6h12.4M6 19a1 1 0 102 0 1 1 0 00-2 0zm10 0a1 1 0 102 0 1 1 0 00-2 0z"
              />
            </svg>
            {cartCount > 0 && (
              <span className="cart-count-badge">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
