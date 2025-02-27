'use client'

import Login from "../_components/login";
import Signup from "../_components/signup";
import { useState } from "react";

const Restaurant = () => {

    const [login, setLogin] = useState(true);
    return (
        <div className="w-full">
            {login ? <Login /> : <Signup />}
            <div className="text-center mt-3">
                <button className="btn btn-primary" onClick={() => setLogin(!login)}>
                    {login ? "Switch to Signup" : "Switch to Login"}
                </button>
            </div>
        </div>
    );
};
export default Restaurant;