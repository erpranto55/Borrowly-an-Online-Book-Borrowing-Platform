"use client";

import { useSession } from "@/lib/auth-client";
import Link from "next/link";
import Image from "next/image";

export default function ProfilePage() {
    const { data: session, isPending } = useSession();

    if (isPending) {
        return (
            <div className="flex justify-center items-center min-h-[70vh]">
                <p className="text-lg font-medium">Loading...</p>
            </div>
        );
    }

    if (!session) {
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

    const user = session.user;

    return (
        <div className="container mx-auto px-4 py-10">
            <h1 className="text-3xl font-bold mb-8 text-center">
                My Profile
            </h1>

            <div className="max-w-3xl mx-auto bg-base-200 p-6 rounded-xl shadow text-center">
                <h2 className="text-xl font-semibold mb-4">
                    User Info
                </h2>

                <Image
                    src={user.image || "https://i.ibb.co/4pDNDk1/avatar.png"}
                    alt="profile"
                    width={96}
                    height={96}
                    className="rounded-full mx-auto mb-4"
                />

                <p className="mb-2">
                    <strong>Name:</strong> {user.name}
                </p>

                <p className="mb-4">
                    <strong>Email:</strong> {user.email}
                </p>

                <Link href="/update" className="btn btn-outline">
                    Update Profile
                </Link>
            </div>
        </div>
    );
}