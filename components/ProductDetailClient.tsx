"use client";

import React from "react";
import Image from "next/image";
import { useCart, Product } from "../context/CartContext";

interface ProductDetailClientProps {
  product: Product;
}

export default function ProductDetailClient({ product }: ProductDetailClientProps) {
  const { addToCart } = useCart();

  return (
    <div className="max-w-4xl mx-auto mt-8 flex flex-col md:flex-row gap-8">
      <Image
        src={product.image}
        alt={product.name}
        width={500}
        height={500}
        className="w-full md:w-1/2 h-auto object-cover rounded"
        priority
      />
      <div className="flex flex-col">
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <p className="mt-4 text-gray-700">{product.description}</p>
        <p className="mt-4 text-2xl font-semibold">${product.price}</p>
        <button
          onClick={() => addToCart(product)}
          className="mt-6 bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
