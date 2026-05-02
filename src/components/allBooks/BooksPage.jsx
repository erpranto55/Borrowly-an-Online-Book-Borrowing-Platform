"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import booksData from "@/data/books.json";
import BookCard from "@/components/shared/BookCard";

const categories = ["All", "Story", "Tech", "Science", "History", "Self-Development"];

const BooksPage = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [search, setSearch] = useState("");
    const searchParams = useSearchParams();

    useEffect(() => {
        const categoryFromURL = searchParams.get("category");

        if (categoryFromURL) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setSelectedCategory(categoryFromURL);
        }
    }, [searchParams]);

    const filteredBooks = booksData.filter((book) => {
        const matchCategory =
            selectedCategory === "All" || book.category === selectedCategory;

        const matchSearch =
            book.title.toLowerCase().includes(search.toLowerCase()) ||
            book.author.toLowerCase().includes(search.toLowerCase());

        return matchCategory && matchSearch;
    });

    return (
        <div className="container mx-auto px-4 py-10 ">


            <div className="flex flex-col lg:flex-row gap-8">

                <div className="lg:w-1/4">
                    <h2 className="text-xl font-bold mb-4">Categories</h2>

                    <div className="flex flex-col gap-2">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`btn justify-start ${selectedCategory === cat
                                    ? "btn-primary text-white"
                                    : "btn-outline"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="lg:w-3/4">
                    <div className="flex justify-between">
                        <div></div>
                        <h2 className="font-bold text-3xl">All Books</h2>
                        <div className="mb-6">
                            <input
                                type="text"
                                placeholder="Search books..."
                                className="input input-bordered w-full max-w-md"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </div>
                    </div>
                    {filteredBooks.length === 0 ? (
                        <p className="text-gray-500">No books found.</p>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredBooks.map((book) => (
                                <BookCard key={book.id} book={book} />
                            ))}
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
};

export default BooksPage;