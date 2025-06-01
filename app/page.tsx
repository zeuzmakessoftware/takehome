"use client";

import React from "react";
import ProductList from "@/components/ProductList";
import Navbar from "@/components/Navbar";

export default function HomePage() {
  return (
    <main className="min-h-screen w-screen max-w-full bg-gradient-to-b from-white to-gray-200">
      <Navbar />
      <ProductList />
    </main>
  );
}
