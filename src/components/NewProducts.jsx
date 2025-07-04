"use client";
import React from "react";
import ProductCard from "./ProductCard";
import { useProducts } from "@/hooks/useProducts";
import useStore from "@/store/useStore";

const productData = [
  {
    img: "/banner-1.jpg",
    title: "Trending Item",
    desc: "Women Latest Fashion Sale",
    rating: 2,
    price: "1000.00",
  },
  {
    img: "/banner-2.jpg",
    title: "New Arrivals",
    desc: "Men’s Summer Collection",
    rating: 4,
    price: "1500.00",
  },
  {
    img: "/banner-3.jpg",
    title: "Best Seller",
    desc: "Kids Exclusive Outfits",
    rating: 5,
    price: "800.00",
  },
  {
    img: "/banner-4.jpg",
    title: "New Arrivals",
    desc: "Men’s Summer Collection",
    rating: 3,
    price: "1500.00",
  },
  {
    img: "/banner-5.jpg",
    title: "Best Seller",
    desc: "Kids Exclusive Outfits",
    rating: 1,
    price: "800.00",
  },
];

const NewProducts = () => {
  const { data, isLoading } = useProducts();
  const { search, category } = useStore();

  if (isLoading) return <div className="p-10 text-center">Loading...</div>;

  let filtered = data;

  if (category) {
    filtered = filtered.filter((p) => p.category === category);
  }
  if (search) {
    filtered = filtered.filter((p) =>
      p.title.toLowerCase().includes(search.toLowerCase())
    );
  }

  return (
    <div>
      <div className="container pt-10 px-16">
        <div
          className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2
        lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10"
        >
          {filtered?.map((item) => (
            <ProductCard
              key={item.id}
              product={item}
              img={item.image}
              title={item.title}
              desc={item.description}
              rating={item.rating.rate}
              price={item.price}
              id={item.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewProducts;
