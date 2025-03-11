import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Link from "next/link";

const Signup = () => {
    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [c_password, setCPassword] = useState("");
    const [name, setName] = useState("");
    const [city, setCity] = useState("");
    const [address, setAddress] = useState("");
    const [contact, setContact] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== c_password) {
            setError("Passwords do not match.");
            return;
        }
        setError("");

        let result = await fetch("http://localhost:3000/api/restaurant", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, email, password, city, address, contact }),
        });

        if (result.status === 200) {
            alert("Signup Successful");
            router.push("/restaurant/dashboard");
        } else {
            alert("Signup Failed");
        }
    };

    return (
        <div className="flex  flex-col justify-center px-6 pt-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-lg">
                <img
                    className="mx-auto h-10 w-auto"
                    src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                    alt="Your Company"
                />
                <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-gray-900">
                    Create your account
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-lg">
                <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="flex gap-3 justify-between">
                <div className="w-full">
                        <label className="block text-sm font-medium text-gray-900">Name</label>
                        <input
                            type="text"
                            className="border w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 placeholder-gray-400 outline-none focus:ring-2 focus:ring-indigo-600"
                            placeholder="Enter your name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>

                    <div className="w-full">
                        <label className="block text-sm font-medium text-gray-900">Email</label>
                        <input
                            type="email"
                            className="border w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 placeholder-gray-400 outline-none focus:ring-2 focus:ring-indigo-600"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                </div>

                    <div className="flex justify-between gap-3">
                        <div className="w-full">
                            <label className="block text-sm font-medium text-gray-900">Password</label>
                            <input
                                type="password"
                                className="border w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 placeholder-gray-400 outline-none focus:ring-2 focus:ring-indigo-600"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>

                        <div className="w-full">
                            <label className="block text-sm font-medium text-gray-900">Confirm Password</label>
                            <input
                                type="password"
                                className="border w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 placeholder-gray-400 outline-none focus:ring-2 focus:ring-indigo-600"
                                placeholder="Confirm your password"
                                value={c_password}
                                onChange={(e) => setCPassword(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    {error && <p className="text-red-500 text-sm">{error}</p>}
                    <div className="flex justify-between gap-3">
                        <div className="w-full">
                            <label className="block text-sm font-medium text-gray-900">Contact</label>
                            <input
                                type="text"
                                className="border w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 placeholder-gray-400 outline-none focus:ring-2 focus:ring-indigo-600"
                                placeholder="Enter your contact number"
                                value={contact}
                                onChange={(e) => setContact(e.target.value)}
                                required
                            />
                        </div>
                        <div className="w-full">
                            <label className="block text-sm font-medium text-gray-900">City</label>
                            <input
                                type="text"
                                className="border w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 placeholder-gray-400 outline-none focus:ring-2 focus:ring-indigo-600"
                                placeholder="Enter your city"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-900">Address</label>
                        <input
                            type="text"
                            className="border w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 placeholder-gray-400 outline-none focus:ring-2 focus:ring-indigo-600"
                            placeholder="Enter your address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            required
                        />
                    </div>



                    <button
                        type="submit"
                        className="w-full rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                    >
                        Sign up
                    </button>
                </form>

                
            </div>
        </div>
    );
};

export default Signup;
