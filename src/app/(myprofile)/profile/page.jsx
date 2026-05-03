"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function ProfilePage() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setUser(JSON.parse(storedUser));
        }
    }, []);

    if (!user) {
        return (
            <div className="flex flex-col justify-center items-center min-h-[70vh] text-center px-4">
                <h2 className="text-2xl font-bold mb-3">
                    You are not logged in
                </h2>

                <p className="text-gray-500 mb-6">
                    Please login to view your profile.
                </p>

                <Link href="/login" className="btn btn-primary">
                    Go to Login
                </Link>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-10">
            <h1 className="text-3xl font-bold mb-8 text-center">
                My Profile
            </h1>

            <div className="max-w-3xl mx-auto bg-base-200 p-6 rounded-xl shadow">
                <h2 className="text-xl font-semibold mb-4">
                    User Info
                </h2>
                <Image
                    src={user.image || "https://i.ibb.co/4pDNDk1/avatar.png"}
                    alt="profile"
                    width={96}
                    height={96}
                    className="rounded-full mx-auto"
                />
                <p><strong>Name:</strong> {user.name}</p>
                <p><strong>Email:</strong> {user.email}</p>

                <Link href="/profile/update" className="btn btn-outline mt-4">
                    Update Profile
                </Link>
            </div>
        </div>
    );
}