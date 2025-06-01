"use client";

import Link from "next/link";
import React from "react";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { cartItems, toggleCart } = useCart();
  const cartCount = cartItems.reduce((sum, c) => sum + c.quantity, 0);

  return (
    <nav className="fixed top-0 left-0 right-0 z-20 backdrop-blur-md bg-white/80 border-b border-gray-100">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-20 px-6">
        <Link href="/" className="group flex items-center">
          <div className="mr-3 relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full blur opacity-60 group-hover:opacity-100 transition duration-300"></div>
            <div className="relative bg-white rounded-full p-2">
              <svg className="w-8 h-8 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
          </div>
          <div>
            <span className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
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
            className="relative p-2 rounded-full bg-gradient-to-r from-indigo-50 to-purple-50 hover:from-indigo-100 hover:to-purple-100 transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2"
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
              <span className="absolute -top-1 -right-1 bg-gradient-to-r from-pink-500 to-rose-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-lg shadow-rose-500/30 border border-white animate-pulse">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
