import React from "react";
import toast, { Toaster } from "react-hot-toast";
import FoodData from "../data/FoodData.js";
import FoodCard from "./FoodCard.jsx";

const FoodItems = () => {
  const handleToast = (name) => toast.success(`Added ${name} `);
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex flex-wrap gap-10 justify-center lg:justify-start mx-6 my-10">
        {FoodData.map((food) => (
          <FoodCard
            key={food.id}
            id={food.id}
            name={food.name}
            price={food.price}
            desc={food.desc}
            rating={food.rating}
            img={food.img}
            handleToast={handleToast}
          />
        ))}
      </div>
    </>
  );
};

export default FoodItems;
