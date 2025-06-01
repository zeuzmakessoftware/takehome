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
    <div className="product-detail-container">
      <Image
        src={product.image}
        alt={product.name}
        width={500}
        height={500}
        className="product-detail-image"
        priority
      />
      <div className="product-detail-content">
        <h1 className="product-detail-title">{product.name}</h1>
        <p className="product-detail-description">{product.description}</p>
        <p className="product-detail-price">${product.price}</p>
        <button
          onClick={() => addToCart(product)}
          className="product-detail-button"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
