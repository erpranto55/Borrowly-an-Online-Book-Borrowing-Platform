"use client";

import Link from "next/link";
import { useState } from "react";

const RegisterPage = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (form.password !== form.confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        console.log("Form Data:", form);
        alert("Register UI ready (Backend later)");
    };

    return (
        <div className="flex justify-center items-center min-h-[80vh] px-4">
            <div className="w-full max-w-md bg-base-200 p-8 rounded-xl shadow-md">

                <h2 className="text-3xl font-bold text-center mb-6">
                    Create Account
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4">

                    <div>
                        <label className="label">Full Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            className="input input-bordered w-full"
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div>
                        <label className="label">Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            className="input input-bordered w-full"
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div>
                        <label className="label">Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter password"
                            className="input input-bordered w-full"
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div>
                        <label className="label">Confirm Password</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirm password"
                            className="input input-bordered w-full"
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <button className="btn btn-primary w-full mt-2">
                        Register
                    </button>
                </form>

                <p className="text-sm text-center mt-4">
                    Already have an account?{" "}
                    <Link href="/login" className="text-primary font-medium">
                        Login
                    </Link>
                </p>

            </div>
        </div>
    );
};

export default RegisterPage;