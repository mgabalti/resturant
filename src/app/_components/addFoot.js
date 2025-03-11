"use client"
import { useState } from 'react';

const AddFood = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [imgPath, setImgPath] = useState('');
    const [description, setDescription] = useState('');
    const [restoId, setRestoId] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const foodData = {
            name,
            price: Number(price),
            imgPath,
            description,
            resto_id:JSON.parse(localStorage.getItem("resturant_id"))._id
        };


        try {
            if (name && price && imgPath && description ) {
              
                console.log('Food added successfully:', foodData);
                let result = await fetch("http://localhost:3000/api/restaurant/foods", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(foodData),
                });
                let data = await result.json();
                console.log("data", data);
                alert("Food Added Successfully");
            }
            //const response = await axios.post('/api/foods', foodData);
        } catch (error) {
            console.error('Error adding food:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4 p-4 bg-white dark:bg-gray-800 mt-3 shadow-md rounded-md">
            <div className="flex flex-col">
                <label className="dark:text-white mb-2 font-semibold">Name:</label>
                <input 
                    type="text" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    required 
                    className="p-2 dark:bg-gray-800 dark:text-white border border-gray-300 rounded-md"
                />
            </div>
            <div className="flex flex-col">
                <label className="dark:text-white mb-2 font-semibold">Price:</label>
                <input 
                    type="number" 
                    value={price} 
                    onChange={(e) => setPrice(e.target.value)} 
                    required 
                    className="p-2 dark:bg-gray-800 dark:text-white border border-gray-300 rounded-md"
                />
            </div>
            <div className="flex flex-col">
                <label className="dark:text-white mb-2 font-semibold">Image Path:</label>
                <input 
                    type="text" 
                    value={imgPath} 
                    onChange={(e) => setImgPath(e.target.value)} 
                    required 
                    className="p-2 dark:bg-gray-800 dark:text-white border border-gray-300 rounded-md"
                />
            </div>
            <div className="flex flex-col">
                <label className="dark:text-white mb-2 font-semibold">Description:</label>
                <textarea 
                    value={description} 
                    onChange={(e) => setDescription(e.target.value)} 
                    required 
                    className="p-2 dark:bg-gray-800 dark:text-white border border-gray-300 rounded-md"
                />
            </div>
            <div className="flex flex-col">
                <label className="dark:text-white mb-2 font-semibold">Restaurant ID:</label>
                <input 
                    type="text" 
                    value={restoId} 
                    onChange={(e) => setRestoId(e.target.value)} 
                    required 
                    className="p-2 dark:bg-gray-800 dark:text-white border border-gray-300 rounded-md"
                />
            </div>
            <button type="submit" className="dark:bg-black  flex px-7 justify-center rounded-md bg-indigo-600  py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Add Food
            </button>
        </form>
    );
};

export default AddFood; 
