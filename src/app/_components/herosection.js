import Image from "next/image";
import React from "react";
import myImage from '../../assets/images/Hero-3.png';
export default function Herosection() {
    return (
        <div className="pt-16 lg:pt-0">
            <div className="bg-black h-screen lg:p-10 relative">
                <div className="grid grid-cols-1 h-full items-center lg:grid-cols-2 align-items-center">
                    <div className="p-4 ">
                        <p className="head-font lg:text-8xl md:text-6xl text-6xl text-center lg:text-left font-bold uppercase text-white">
                            Handmade, With an <span className="text-yellow-500">
                                Extra Pinch </span> of Love
                        </p>
                        <p className="text-white text-2xl my-4 text-center lg:text-left ">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                        <div className="flex justify-center lg:justify-start">
                        <button className="bg-yellow-500 text-white px-10 font-medium py-3" >Order Now</button>
                        </div>
                        <ul className="flex gap-6 mt-6 justify-center lg:justify-start">
                            <li className="flex flex-col font-bold ">
                                <span className="text-yellow-500 text-xs">MERCHANTS </span>
                                <span className="text-white text-3xl lg:text-4xl" >5K<span className="text-yellow-500">+</span> </span>
                            </li>
                            <li className="flex flex-col font-bold text-xs ">
                                <span className="text-yellow-500">YUMMY MENUS</span>
                                <span className="text-white text-3xl lg:text-4xl" >15K<span className="text-yellow-500">+</span> </span>
                            </li>
                            <li className="flex flex-col font-bold text-xs">
                                <span className="text-yellow-500">HAPPY CUSTOMERS</span>
                                <span className="text-white text-3xl lg:text-4xl" >152K<span className="text-yellow-500">+</span> </span>
                            </li>
                        </ul>
                    </div>
                    <div className="h-96">
                        <Image className="lg:absolute lg:top-0 bottom-0 lg:object-right-bottom h-full w-full object-contain lg:object-right right-0" src={myImage} alt="dsfa" />
                    </div>
                </div>
            </div>
        </div>
    );
}
