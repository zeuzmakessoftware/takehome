"use client";

import React, { useState, useEffect } from "react";
import { Product } from "@/context/CartContext";
import ProductCard from "@/components/ProductCard";
import CategoryFilter from "@/components/CatagoryFilter";

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filtered, setFiltered] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [activeCat, setActiveCat] = useState<string>("All");

  useEffect(() => {
    fetch("https://cart-api.alexrodriguez.workers.dev/products")
      .then((res) => res.json())
      .then((data: Product[]) => {
        setProducts(data);
        setFiltered(data);
        const cats = Array.from(new Set(data.map((p) => p.category)));
        setCategories(["All", ...cats]);
      });
  }, []);

  useEffect(() => {
    if (activeCat === "All") setFiltered(products);
    else setFiltered(products.filter((p) => p.category === activeCat));
  }, [activeCat, products]);

  return (
    <div className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-br from-indigo-100 to-purple-100 h-full w-full -z-10"></div>
      <div className="absolute -top-10 left-1/4 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute -top-10 right-1/4 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -top-10 left-1/3 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block">Discover Amazing</span>
          <span className="block bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">Products</span>
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
          Browse our collection of premium quality items
        </p>
      </div>
      
      <CategoryFilter
        categories={categories}
        active={activeCat}
        onChange={setActiveCat}
      />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filtered.length > 0 ? (
          filtered.map((product, index) => (
            <div 
              key={product.id} 
              className="animate-fadeIn" 
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProductCard product={product} />
            </div>
          ))
        ) : (
          <div className="col-span-full flex flex-col items-center justify-center py-12">
            <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <p className="mt-4 text-xl font-medium text-gray-600">No products found</p>
            <p className="text-gray-500">Try selecting a different category</p>
          </div>
        )}
      </div>
    </div>
  );
}