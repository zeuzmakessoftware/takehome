import React from "react";
import { Product } from "@/context/CartContext";
import ProductDetailClient from "@/components/ProductDetailClient";

export async function generateStaticParams() {
  const res = await fetch("https://cart-api.alexrodriguez.workers.dev/products");
  const products = await res.json();
  
  return products.map((product: Product) => ({
    id: product.id.toString(),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params; 
  const res = await fetch(`https://cart-api.alexrodriguez.workers.dev/products/${id}`);
  const product = await res.json();
  
  return {
    title: product.name,
    description: product.description,
  };
}

async function getProduct(id: string) {
  const res = await fetch(`https://cart-api.alexrodriguez.workers.dev/products/${id}`, {
    next: { revalidate: 3600 },
  });
  
  if (!res.ok) {
    throw new Error("Failed to fetch product");
  }
  
  return res.json();
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params; 
  const product = await getProduct(id);

  if (!product) {
    return <div className="mt-8 text-center">Product not found</div>;
  }

  return <ProductDetailClient product={product} />;
}