"use client";

import { authClient } from "@/lib/auth-client";
import { Check, Eye, EyeSlash } from "@gravity-ui/icons";
import { Button, Description, FieldError, Form, Input, InputGroup, Label, TextField } from "@heroui/react";
import { toast } from "react-toastify";
import Link from "next/link";
import { useState } from "react";

const LoginPage = () => {
    const [isVisible, setIsVisible] = useState(false);

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const userData = Object.fromEntries(formData.entries());
        console.log("Form Data Submitted", userData);
        const { data, error } = await authClient.signIn.email({
            email: userData.email,
            password: userData.password,
            rememberMe: true,
            callbackURL: "/profile",
        });

        console.log("Sign In Response:", { data, error });

        if (error) {
            toast.error("Error SingingIn: " + error.message);
        }
        if (data) {
            toast.success("Sign In Successful!")
        }
    };

    return (
        <div className="flex justify-center items-center min-h-[80vh] px-4 ">
            <Form className="flex w-96 flex-col gap-4 bg-gray-50 p-6 rounded-xl shadow-md border border-gray-200" onSubmit={onSubmit}>
                <TextField
                    isRequired
                    name="email"
                    type="email"
                    validate={(value) => {
                        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                            return "Please enter a valid email address";
                        }
                        return null;
                    }}
                >
                    <Label>Email</Label>
                    <Input name="email" placeholder="Your Email" />
                    <FieldError />
                </TextField>
                <TextField
                    isRequired
                    name="password"
                    type={isVisible ? "text" : "password"}
                    validate={(value) => {
                        if (value.length < 8) {
                            return "Password must be at least 8 characters";
                        }
                        if (!/[A-Z]/.test(value)) {
                            return "Password must contain at least one uppercase letter";
                        }
                        if (!/[0-9]/.test(value)) {
                            return "Password must contain at least one number";
                        }
                        return null;
                    }}
                >
                    <Label>Password</Label>

                    <div className="relative">
                        <Input name="password" placeholder="Enter your password" />

                        <button
                            type="button"
                            onClick={() => setIsVisible(!isVisible)}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 p-1 rounded hover:bg-gray-200"
                        >
                            {isVisible ? <Eye className="size-4" /> : <EyeSlash className="size-4" />}
                        </button>
                    </div>

                    <Description>
                        Must be at least 8 characters with 1 uppercase and 1 number
                    </Description>

                    <FieldError />
                </TextField>
                <div className="flex gap-2">
                    <Button
                        type="submit"
                        className="bg-blue-600 text-white hover:bg-blue-700"
                    >
                        <Check />
                        Sign In
                    </Button>
                    <Button type="reset" variant="secondary">
                        Reset
                    </Button>
                </div>
                <p className="text-sm text-center mt-2">
                    Don&apos;t have an account?{" "}
                    <Link href="/register" className="text-blue-600 hover:underline font-medium">
                        Register
                    </Link>
                </p>
            </Form>
        </div>
    );
};

export default LoginPage;