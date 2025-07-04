import useStore from "@/store/useStore";
import Image from "next/image";
import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa";

const ProductCard = ({ product, img, title, desc, rating, price, id }) => {
  const generateRating = (rating) => {
    switch (rating) {
      case 1:
        return (
          <div className="flex gap-1 text-[20px] text-[#FF9529]">
            <FaStar />
            <FaRegStar />
            <FaRegStar />
            <FaRegStar />
            <FaRegStar />
          </div>
        );
      case 2:
        return (
          <div className="flex gap-1 text-[20px] text-[#FF9529]">
            <FaStar />
            <FaStar />
            <FaRegStar />
            <FaRegStar />
            <FaRegStar />
          </div>
        );
      case 3:
        return (
          <div className="flex gap-1 text-[20px] text-[#FF9529]">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaRegStar />
            <FaRegStar />
          </div>
        );
      case 4:
        return (
          <div className="flex gap-1 text-[20px] text-[#FF9529]">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaRegStar />
          </div>
        );
      case 5:
        return (
          <div className="flex gap-1 text-[20px] text-[#FF9529]">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
        );

      default:
        return null;
    }
  };

  const { setModalProduct } = useStore();

  return (
    <div
      onClick={() => setModalProduct(product)}
      className="cursor-pointer px-4 border border-gray-300 rounded-xl max-w-[400px] min-h-[435px]
      shadow hover:shadow-2xl hover:scale-105 transition-transform transition-shadow duration-[2000ms] transform"
    >
      <div className="relative w-full h-60">
        <Image src={img} alt={title} fill className="object-contain" />
      </div>

      <div className="space-y-2 py-2">
        <h2 className="text-accent font-medium uppercase">{title}</h2>
        <p className="text-gray-500">{desc.slice(0, 50)}...</p>
        <div>{generateRating(rating)}</div>
        <div>{rating}</div>
        <div className="font-bold flex gap-4">${price}</div>
      </div>
    </div>
  );
};

export default ProductCard;
