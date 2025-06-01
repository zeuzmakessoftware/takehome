"use client";

import React from "react";

interface CategoryFilterProps {
  categories: string[];
  active: string;
  onChange: (cat: string) => void;
}

export default function CategoryFilter({
  categories,
  active,
  onChange,
}: CategoryFilterProps) {
  return (
    <div className="relative mb-8 mt-4">
      <div className="absolute inset-0 h-12 bg-gradient-to-r from-violet-100 via-purple-100 to-pink-100 rounded-xl opacity-50 blur-xl"></div>
      <div className="relative flex items-center justify-center space-x-3 overflow-x-auto py-4 px-2 scrollbar-hide">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => onChange(cat)}
            className={`
              px-5 py-2.5 rounded-xl whitespace-nowrap font-medium transition-all duration-300 
              ${active === cat
                ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/30 transform scale-105"
                : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 hover:border-gray-300 hover:shadow-sm"}
            `}
          >
            <div className="flex items-center">
              {active === cat && (
                <svg className="w-4 h-4 mr-1.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
              )}
              {cat}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
