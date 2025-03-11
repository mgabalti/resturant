"use client"

import ShowFood from "@/app/_components/showFood";
import AddFood from "@/app/_components/addFoot";
import NavbarComponent from "@/app/_components/navbar";
import React, { useState } from 'react';

const Dashboard = () => {
  const [addFood, setAddFood] = useState(false);

  return (
    <div className="p-3">
      <NavbarComponent />
      <div className='flex justify-end items-center mt-3'>
        <button onClick={() => setAddFood(!addFood)} className='   bg-indigo-600 text-white rounded-md px-4 py-1 border-0 hover:bg-indigo-400'>{addFood ? "Go Back" : "Add Food"}</button>
      </div>
      <div className=" max-w-2xl w-full mx-auto">
        {!addFood ? <ShowFood /> : <AddFood />}
      </div>

    </div>
  );
};
export default Dashboard;