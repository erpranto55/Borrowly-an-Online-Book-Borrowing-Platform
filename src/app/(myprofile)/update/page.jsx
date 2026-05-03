"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const UpdateProfilePage = () => {
    const router = useRouter();
    const [name, setName] = useState("");
    const [image, setImage] = useState("");

    useEffect(() => {
        const storedUser = localStorage.getItem("user");

        if (!storedUser) {
            router.push("/login");
            return;
        }

        const user = JSON.parse(storedUser);
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setName(user.name || "");
        setImage(user.image || "");
    }, [router]);

    const handleUpdate = (e) => {
        e.preventDefault();

        const updatedUser = {
            name,
            image,
        };

        localStorage.setItem("user", JSON.stringify(updatedUser));

        alert("Profile updated successfully ");

        router.push("/profile");
    };

    return (
        <div className="container mx-auto px-4 py-10 max-w-lg">

            <h2 className="text-2xl font-bold mb-6 text-center">
                Update Profile
            </h2>

            <form onSubmit={handleUpdate} className="space-y-4">

                <input
                    type="text"
                    placeholder="Your Name"
                    className="input input-bordered w-full"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />

                <input
                    type="text"
                    placeholder="Image URL"
                    className="input input-bordered w-full"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                />

                <button className="btn btn-primary w-full">
                    Update Information
                </button>

            </form>
        </div>
    );
};

export default UpdateProfilePage;