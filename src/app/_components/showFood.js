"use client"

import React from 'react';

const ShowFood = () => {

    return (
        <div>

            <table className='w-full '>
                <thead>
                    <tr className='border-b border-gray-100 dark:border-gray-800 dark:text-white text-left' >
                        <th className='text-left p-2'>Food Name</th>
                        <th>Price</th>
                        <th>Image</th>
                        <th>Description</th>
                        <th>Restaurant ID</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='border-b border-gray-100 dark:border-gray-800 dark:text-white' >
                        <td className='p-2' >Chicken</td>
                        <td className='p-2' >20</td>
                        <td className='p-2' >image</td>
                        <td className='p-2' >Chicken with rice</td>
                        <td className='p-2' >1</td>
                        <td className='p-2' >
                            <button>Edit</button>
                        </td>

                    </tr>
                    <tr className='border-b border-gray-100 dark:border-gray-800 dark:text-white' >
                        <td className='p-2'>Beef</td>
                        <td className='p-2'>30</td>
                        <td className='p-2'>image</td>
                        <td className='p-2'>Beef with rice</td>
                        <td className='p-2'>1</td>
                        <td className='p-2' >
                            <button>Edit</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
export default ShowFood;