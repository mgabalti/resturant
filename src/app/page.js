import React from "react";
import NavbarComponent from "./_components/navbar";
import Herosection from "./_components/herosection";
import { FoodCard } from "./_components/foodCard";
export default function Home() {
  return (
    <div className="h-screen overflow-auto" >
      <div className="absolute top-0 z-50 w-full">
        <NavbarComponent />
      </div>
      <Herosection />
     <div className="w-10/12 mx-auto pt-16">
     <p className="text-yellow-500 font-xl mt-9 font-bold uppercase">crispy, every bite taste      </p>
     <h2 className="text-white head-font text-5xl font-bold uppercase">Popular Food Items</h2>
     <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 p-4">
   
     

        <FoodCard />
        <FoodCard />
        <FoodCard />
        <FoodCard />
      </div>
     </div>
    </div>
  );
}
