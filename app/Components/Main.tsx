"use client";
import React, { useState } from "react";
import Product from "./Product";

function Main() {
  const categories = ["Electronics", "Clothing", "Home & Kitchen"];
  const products = [
    {
      id: 1,
      image: "/images/leather-pants.jpg",
      name: "Wiesn Outfit",
      price: 19.99,
      category: categories[1],
    },
    {
      id: 2,
      image: "/images/playstation.jpg",
      name: "Game Console",
      price: 499.99,
      category: categories[0],
    },
    {
      id: 3,
      image: "/images/mixer.jpg",
      name: "The Fancy Supermix",
      price: 139.99,
      category: categories[2],
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

  const [selectedFilters, setSelectedFilters] = useState([]);

  const handleFilterChange = (category) => {
    if (selectedFilters.includes(category)) {
      setSelectedFilters(selectedFilters.filter((item) => item !== category));
    } else {
      setSelectedFilters([...selectedFilters, category]);
    }
  };

  const filteredProducts =
    selectedFilters.length > 0
      ? products.filter((product) => selectedFilters.includes(product.category))
      : products;

  return (
    <div className="flex flex-row h-110 pt-5 pb-5 overflow-auto">
      <aside className="bg-gray-200 flex flex-col min-w-1/4 max-w-1/2 pt-10 pl-5">
        <h2 className="font-bold text-xl">Filters</h2>
        <ul className="pt-3">
          {categories.map((category) => (
            <li key={category}>
              <label>
                <input
                  type="checkbox"
                  checked={selectedFilters.includes(category)}
                  onChange={() => handleFilterChange(category)}
                />{" "}
                {category}
              </label>
            </li>
          ))}
        </ul>
      </aside>
      <ul className="flex flex-row gap-5">
        {filteredProducts.map((product) => (
          <li key={product.name}>
            <Product
              image={product.image}
              name={product.name}
              price={product.price}
              category={product.category}
              id={product.id}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Main;
