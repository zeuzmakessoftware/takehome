"use client";

import React from "react";
import ProductList from "@/components/ProductList";
import Navbar from "@/components/Navbar";

export default function HomePage() {
  return (
    <main className="main-container">
      <Navbar />
      <ProductList />
    </main>
  );
}
