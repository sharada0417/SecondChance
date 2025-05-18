import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import SeconchanceImg from "./../assets/signInpage.png"; // Adjust path if needed

const SignIn = () => {
    const [form, setForm] = useState({ email: "", password: "" });
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");
        if (!form.email || !form.password) {
            setError("Please enter both email and password.");
            return;
        }
        alert("Signed in!");
    };

    return (
        <div className="w-screen  flex">
            {/* Image Side */}
            <div className="w-1/2 hidden md:flex items-center justify-center bg-white">
                <img
                    src={SeconchanceImg}
                    alt="SecondChance"
                    className="object-contain w-full h-full"
                />
            </div>

            {/* Form Side */}
            <div className="w-full md:w-1/2  flex items-center justify-center px-8">
                <div className="w-full max-w-md">
                    <h2 className="text-3xl font-bold mb-6 text-center">Sign In</h2>
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <label className="block mb-1 text-sm font-medium">Email</label>
                            <Input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="Enter your email"
                                required
                            />
                        </div>
                        <div>
                            <label className="block mb-1 text-sm font-medium">Password</label>
                            <Input
                                type="password"
                                name="password"
                                value={form.password}
                                onChange={handleChange}
                                placeholder="Enter your password"
                                required
                            />
                        </div>
                        {error && <div className="text-red-500 text-sm">{error}</div>}
                        <Button type="submit" className="w-full">
                            Sign In
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignIn;

