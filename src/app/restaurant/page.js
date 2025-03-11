'use client'

import Login from "../_components/login";
import Signup from "../_components/signup";
import { useState } from "react";


const Restaurant = () => {

    const [login, setLogin] = useState(true);
    return (
        <div className="w-full">
            {login ? <Login /> : <Signup />}
            <div className="text-center mt-0">
            <p className="mt-10 text-center text-sm text-gray-500" >
                   
                    {login ? " Don't Account " : " Already have an account?"}
                    < a   onClick={() => setLogin(!login)} className="font-semibold text-indigo-600 hover:text-indigo-500 cursor-pointer">
                    {login ? " Signup" : " Login"}
                    </a> 
                </p>
                
            </div>
        </div>
    );
};
export default Restaurant;