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
    <div className="product-card">
      <div className="product-card-gradient-top"></div>
      <div className="product-card-gradient-bottom"></div>
      
      <div className="product-image-container">
        <Link href={`/product/${product.id}`} className="product-image-link">
          <div className="product-image-wrapper">
            <Image
              src={product.image}
              alt={product.name}
              width={400}
              height={300}
              className="product-image"
            />
            <div className="product-image-overlay"></div>
          </div>
        </Link>
      </div>
      
      <div className="product-content">
        <Link href={`/product/${product.id}`} className="product-name-link">
          {product.name}
        </Link>
        <div className="product-price-container">
          <span className="product-price">${product.price.toFixed(2)}</span>
        </div>
        <div className="rating-container">
          <div className="star-rating">
            {[...Array(5)].map((_, i) => (
              <svg key={i} xmlns="http://www.w3.org/2000/svg" className="star-icon" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        </div>
        <p className="product-description">{product.description}</p>
        <div className="product-button-container">
          <button
            onClick={() => addToCart(product)}
            className="add-to-cart-button"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="cart-icon" viewBox="0 0 20 20" fill="currentColor">
              <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
            </svg>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
