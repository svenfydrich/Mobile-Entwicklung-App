"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface ProductCatalogProps {
  image: string;
  imgWidth?: number;
  imgHeight?: number;
  imgAlt?: string;
  id: number;
  name: string;
  price: number;
  category: string;
}

export default function Product({
  image,
  id,
  name,
  price,
  category,
  imgWidth = 300,
  imgHeight = 150,
}: ProductCatalogProps) {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/${id}`);
  };
  return (
    <div className="p-10 outline-1 outline-gray-400 h-full w-60 text-center relative">
      <Image
        src={image}
        alt={name}
        width={imgWidth}
        height={imgHeight}
        className="p-5 mx-auto w-[300px] h-[150px] object-cover rounded-4xl"
      />
      <h3 className="font-bold text-xl">{name}</h3>
      <p className="text-gray-600">{category}</p>
      <p className="pt-3">${price}</p>
      <button className="bg-red-400 absolute left-10 text-white m-auto p-2 bottom-5 cursor-pointer rounded-md transition-all ease-out hover:bg-red-300">
        Add to cart
      </button>
      <button
        className="bg-gray-400 absolute right-10 text-white m-auto p-2 bottom-5 cursor-pointer rounded-md transition-all ease-out hover:bg-gray-300"
        onClick={handleClick}
      >
        Details
      </button>
    </div>
  );
}
