"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const LoginPage = () => {
    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();

        if (email === "admin@gmail.com" && password === "123456") {
            localStorage.setItem("user", JSON.stringify({ email }));
            router.push("/");
        } else {
            alert("Invalid credentials");
        }
    };

    return (
        <div className="flex justify-center items-center min-h-[80vh]">
            <div className="w-full max-w-md p-8 bg-base-200 rounded-lg shadow-md">

                <h2 className="text-2xl font-bold text-center mb-6">
                    Login to Borrowly
                </h2>

                <form onSubmit={handleLogin} className="space-y-4">

                    <div>
                        <label className="label">Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="input input-bordered w-full"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <label className="label">Password</label>
                        <input
                            type="password"
                            placeholder="Enter password"
                            className="input input-bordered w-full"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <button className="btn btn-primary w-full">
                        Login
                    </button>
                </form>

                <p className="text-sm mt-4 text-center">
                    Don&apos;t have an account?{" "}
                    <span
                        onClick={() => router.push("/register")}
                        className="text-primary cursor-pointer"
                    >
                        Register
                    </span>
                </p>

            </div>
        </div>
    );
};

export default LoginPage;