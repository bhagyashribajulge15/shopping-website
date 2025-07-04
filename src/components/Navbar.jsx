"use client";
import { useCategories } from "@/hooks/useProducts";
import useStore from "@/store/useStore";
import React from "react";

const Navbar = () => {
  const { data: categories } = useCategories();
  const { category, setCategory } = useStore();

  return (
    <div className="hidden lg:block pt-3.5">
      <div className="container">
        <div className="flex w-fit gap-10 mx-auto font-medium py-4 text-black">
          <button
            onClick={() => setCategory("")}
            className={`navbar_link relative ${
              category === "" ? "text-amber-500" : ""
            }`}
          >
            All
          </button>

          {categories?.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`navbar_link relative ${
                category === cat ? "text-amber-500" : ""
              }`}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
