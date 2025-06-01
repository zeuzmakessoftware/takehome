"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Product, useCart } from "../context/CartContext";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
      <div className="absolute -right-16 -top-16 h-40 w-40 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
      <div className="absolute -left-16 -bottom-16 h-40 w-40 bg-gradient-to-tr from-pink-500 to-rose-500 rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
      
      <div className="relative overflow-hidden">
        <span className="absolute top-3 right-3 z-10 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
          {product.category}
        </span>
        <Link href={`/product/${product.id}`} className="block overflow-hidden">
          <div className="relative h-56 overflow-hidden">
            <Image
              src={product.image}
              alt={product.name}
              width={400}
              height={300}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </Link>
      </div>
      
      <div className="p-5 flex flex-col">
        <Link href={`/product/${product.id}`} className="text-lg font-bold text-gray-800 hover:text-indigo-600 transition-colors duration-200">
          {product.name}
        </Link>
        <div className="flex items-center justify-between mt-2">
          <p className="text-xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
            ${product.price}
          </p>
          <div className="flex items-center">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>
        </div>
        <button
          onClick={() => addToCart(product)}
          className="mt-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-2.5 px-4 rounded-xl font-medium transform transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center group"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 transform transition-transform duration-300 group-hover:rotate-12" viewBox="0 0 20 20" fill="currentColor">
            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
          </svg>
          Add to Cart
        </button>
      </div>
    </div>
  );
}
