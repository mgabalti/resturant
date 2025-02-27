
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
        }
        else {
            console.log("error", response);
        }
    };

    return (
        <>


            <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                <div class="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
                    <h2 class="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">Sign in to your account</h2>
                </div>

                <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form class="space-y-6" action="#" method="POST">
                        <div>
                            <label for="email" class="block text-sm/6 font-medium text-gray-900">Email address</label>
                            <div class="mt-2">
                                <input type="email" name="email" id="email"  onChange={(e) => setUsername(e.target.value)} autocomplete="email" required class="border block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                            </div>
                        </div>

                        <div>
                            <div class="flex items-center justify-between">
                                <label for="password" class="block text-sm/6 font-medium text-gray-900">Password</label>
                                <div class="text-sm">
                                    <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                                </div>
                            </div>
                            <div class="mt-2">
                                <input  onChange={(e) => setPassword(e.target.value)} type="password" name="password" id="password" autocomplete="current-password" required class="border block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                            </div>
                        </div>

                        <div>
                            <button type="submit"  onClick={(e) => onsubmit(e)} class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
                        </div>
                    </form>

                    <p class="mt-10 text-center text-sm/6 text-gray-500">
                        Not a member?
                        <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">Start a 14 day free trial</a>
                    </p>
                </div>
            </div>
        </>
    );
};
export default Login;
// The Login component is a functional component that returns a form with an email input, password input, and a submit button. The form is not connected to any backend service, so it won't actually log in the user. It's just a static form for demonstration purposes.