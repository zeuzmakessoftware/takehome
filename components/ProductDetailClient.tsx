"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { useCart, Product } from "../context/CartContext";

interface ProductDetailClientProps {
  product: Product;
}

export default function ProductDetailClient({ product }: ProductDetailClientProps) {
  const { addToCart } = useCart();

  // Disable page scrolling while this component is mounted
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  return (
    // Lower z-index than the navbar so clicks still register on the navbar
    <div className="inset-0 z-40 flex items-center justify-center">
      <div className="w-[90%] max-w-4xl mt-32 bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
        {/* Image Section */}
        <div className="relative w-full md:w-1/2 h-80 md:h-auto group">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            priority
          />
          <div className="absolute top-4 left-4 bg-indigo-600 text-white text-sm font-medium px-3 py-1 rounded-full">
            Featured
          </div>
        </div>

        {/* Details Section */}
        <div className="w-full md:w-1/2 p-16 flex flex-col justify-between">
          <div>
            <h1 className="text-4xl font-extrabold text-gray-800 tracking-tight">
              {product.name}
            </h1>
            <p className="mt-4 text-gray-600 leading-relaxed">{product.description}</p>
          </div>

          <div className="mt-8 flex items-center justify-between">
            <p className="text-3xl font-bold text-indigo-600">${product.price}</p>
            <button
              onClick={() => addToCart(product)}
              className="relative inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-lg font-semibold rounded-full shadow-lg transition-all duration-300 hover:from-indigo-600 hover:to-purple-600 active:scale-95"
            >
              <span className="absolute inset-0 rounded-full opacity-0 bg-white/20 transition-opacity duration-300 group-hover:opacity-100"></span>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
