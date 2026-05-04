"use client";

import { useSession, authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";
import { toast } from "react-toastify";

export default function UpdateProfilePage() {
    const router = useRouter();
    const { data: session, isPending } = useSession();

    const [name, setName] = useState("");
    const [image, setImage] = useState("");

    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");

    const [uploading, setUploading] = useState(false);

    useEffect(() => {
        if (!isPending && !session) {
            router.push("/login");
        }

        if (session) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setName(session.user.name || "");
            setImage(session.user.image || "");
        }
    }, [session, isPending, router]);

    const handleImageUpload = async (file) => {
        if (!file) return;

        setUploading(true);

        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "YOUR_UPLOAD_PRESET");

        try {
            const res = await fetch(
                "https://api.cloudinary.com/v1_1/YOUR_CLOUD_NAME/image/upload",
                {
                    method: "POST",
                    body: formData,
                }
            );

            const data = await res.json();

            setImage(data.secure_url);
            toast.success("Image uploaded!");
        } catch (err) {
            toast.error("Image upload failed");
        }

        setUploading(false);
    };

    const handleProfileUpdate = async (e) => {
        e.preventDefault();

        const { error } = await authClient.updateUser({
            name,
            image,
        });

        if (error) {
            toast.error(error.message);
        } else {
            toast.success("Profile updated!");
            router.refresh();
        }
    };

    const handlePasswordChange = async (e) => {
        e.preventDefault();

        const { error } = await authClient.changePassword({
            currentPassword,
            newPassword,
        });

        if (error) {
            toast.error(error.message);
        } else {
            toast.success("Password changed!");
            setCurrentPassword("");
            setNewPassword("");
        }
    };

    if (isPending) {
        return <p className="text-center mt-10">Loading...</p>;
    }

    return (
        <div className="flex justify-center items-center min-h-[80vh] bg-gray-50 px-4">
            <div className="w-96 bg-gray-100 p-6 rounded-xl shadow-md border">

                <h2 className="text-xl font-semibold text-center mb-4">
                    Update Profile
                </h2>

                <div className="flex flex-col items-center mb-4">
                    <Image
                        src={image || "https://i.ibb.co/4pDNDk1/avatar.png"}
                        alt="profile"
                        width={80}
                        height={80}
                        className="rounded-full mb-2"
                    />
                </div>

                <form onSubmit={handleProfileUpdate} className="space-y-3">

                    <input
                        type="text"
                        className="input input-bordered w-full bg-white"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your Name"
                    />

                    <input
                        type="file"
                        accept="image/*"
                        className="file-input file-input-bordered w-full bg-white"
                        onChange={(e) => handleImageUpload(e.target.files[0])}
                    />

                    <button
                        className="btn btn-primary w-full"
                        disabled={uploading}
                    >
                        {uploading ? "Uploading..." : "Update Info"}
                    </button>
                </form>

                <div className="mt-6 border-t pt-4">

                    <h3 className="text-sm font-semibold mb-2 text-gray-600">
                        Change Password
                    </h3>

                    <form onSubmit={handlePasswordChange} className="space-y-3">

                        <input
                            type="password"
                            className="input input-bordered w-full bg-white"
                            placeholder="Current Password"
                            value={currentPassword}
                            onChange={(e) => setCurrentPassword(e.target.value)}
                        />

                        <input
                            type="password"
                            className="input input-bordered w-full bg-white"
                            placeholder="New Password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                        />

                        <button className="btn btn-outline w-full">
                            Change Password
                        </button>

                    </form>
                </div>

            </div>
        </div>
    );
}