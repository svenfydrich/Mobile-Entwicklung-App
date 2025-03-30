"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

interface ProductDetailsProps {
  params: Promise<{ id: string }>;
}

export default function ProductDetails({ params }: ProductDetailsProps) {
  const resolvedParams = React.use(params);
  const { id } = resolvedParams;
  const router = useRouter();

  const productId = parseInt(id, 10);
  const products = [
    {
      id: 1,
      image: "/images/leather-pants.jpg",
      name: "Wiesn Outfit",
      price: 19.99,
      category: "Clothing",
    },
    {
      id: 2,
      image: "/images/playstation.jpg",
      name: "Game Console",
      price: 499.99,
      category: "Electronics",
    },
    {
      id: 3,
      image: "/images/mixer.jpg",
      name: "The Fancy Supermix",
      price: 139.99,
      category: "Home & Kitchen",
    },
    {
      id: 4,
      image: "/images/noise_cancelling_headphones.webp",
      name: "Noise-Cancelling Headphones",
      price: 249.99,
      category: "Electronics",
    },
    {
      id: 5,
      image: "/images/smartwatch_fitness_tracker.jpg",
      name: "Smartwatch Fitness Tracker",
      price: 129.99,
      category: "Electronics",
    },
    {
      id: 6,
      image: "/images/mechanical_keyboard.jpg",
      name: "Mechanical Keyboard",
      price: 89.99,
      category: "Electronics",
    },
    {
      id: 7,
      image: "/images/cotton_tshirt.jpg",
      name: "Cotton T-Shirt",
      price: 24.99,
      category: "Clothing",
    },
    {
      id: 8,
      image: "/images/slim-fit-jeans.jpg",
      name: "Slim Fit Jeans",
      price: 59.99,
      category: "Clothing",
    },
    {
      id: 9,
      image: "/images/winter-jacked.jpg",
      name: "Winter Jacket",
      price: 149.99,
      category: "Clothing",
    },
    {
      id: 10,
      image: "/images/coffee_maker.webp",
      name: "Automatic Coffee Maker",
      price: 79.99,
      category: "Home & Kitchen",
    },
    {
      id: 11,
      image: "/images/nutribullet.jpg",
      name: "High-Speed Blender",
      price: 119.99,
      category: "Home & Kitchen",
    },
    {
      id: 12,
      image: "/images/luxury_bedding-set.webp",
      name: "Luxury Bedding Set",
      price: 199.99,
      category: "Home & Kitchen",
    },
    {
      id: 13,
      image: "/images/tablet.webp",
      name: "10 inch Tablet",
      price: 329.99,
      category: "Electronics",
    },
  ];
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <Header />
      <div className="flex flex-col m-auto justify-center p-5">
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <Image
          src={product.image}
          alt={product.name}
          width={300}
          height={150}
          className="p-5 mx-auto max-w-[300px] max-h-[600px] object-cover rounded-4xl"
        />
        <p className="flex m-auto">
          <b>Price</b>: ${product.price}
        </p>
        <p className="flex m-auto p-2">
          <b>Category</b>: {product.category}
        </p>
        <button
          className="bg-gray-400 text-white m-auto p-2 cursor-pointer rounded-md transition-all ease-out hover:bg-gray-300"
          onClick={() => router.back()}
        >
          Back to Products
        </button>
      </div>
      <Footer />
    </div>
  );
}
