
import React, { useState } from 'react';
const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const onsubmit = async (e) => {
        e.preventDefault();
        debugger
        if (!username && !password) {
            setError(true);
            return false;

        }
        else {
            setError(false);
            console.log(error);

        }
        let response = await fetch('http://localhost:3000/api/restaurant', {

            method: "POST",
            body: JSON.stringify({ login: true, email: username, password: password }),
        });
        if (response.status === 200) {
            const data = await response.json();
            console.log("data", data);
            localStorage.setItem("resturant_id", JSON.stringify(data.message));
        }
        else {
            console.log("error", response);
        }
    };

    return (
        <>


            <div className="flex min-h-full flex-col justify-center px-6 pt-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img className="mx-auto h-10 w-auto" src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
                    <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900 dark:text-white">Sign in to your account</h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" action="#" method="POST">
                        <div>
                            <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900 dark:text-white">Email address</label>
                            <div className="mt-2">
                                <input type="email" name="email" id="email" onChange={(e) => setUsername(e.target.value)} required className="  dark:bg-black  border block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block dark:text-white text-sm/6 font-medium text-gray-900">Password</label>
                                <div className="text-sm">
                                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                                </div>
                            </div>
                            <div className="mt-2">
                                <input onChange={(e) => setPassword(e.target.value)} type="password" name="password" id="password" required className=" dark:bg-black  border block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                            </div>
                        </div>



                        <div>
                            <button type="submit" onClick={(e) => onsubmit(e)} className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
                        </div>

                        <div className="flex items-center justify-center space-x-4">
                            <button className="dark:text-white  dark:bg-black flex border-indigo-600 border-2 rounded-md w-full justify-center h-12  items-center bg-white px-3 py-1.5 text-sm/6 font-semibold text-gray-900 shadow-xs hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                <img src="https://img.icons8.com/color/48/000000/google-logo.png" alt="Google" className="h-5 w-5 mr-2" />
                                Google
                            </button>
                            <button className="dark:bg-black dark:text-white border-indigo-600 border-2 rounded-md w-full justify-center h-12  flex items-center bg-white px-3 py-1.5 text-sm/6 font-semibold text-gray-900 shadow-xs hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                <img src="https://img.icons8.com/color/48/000000/facebook-new.png" alt="Facebook" className="h-5 w-5 mr-2" />
                                Facebook
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        </>
    );
};
export default Login;
// The Login component is a functional component that returns a form with an email input, password input, and a submit button. The form is not connected to any backend service, so it won't actually log in the user. It's just a static form for demonstration purposes.