import Link from "next/link";
import books from "@/data/books.json";
import Image from "next/image";
import BookCard from "@/components/shared/BookCard";

const FeaturedBooks = () => {

    const featuredBooks = [...books]
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 4);

    return (
        <div className="container mx-auto px-4 py-16">

            <h2 className="text-3xl font-bold text-center mb-10">
                Featured Books
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {featuredBooks.map((book) => (
                    <BookCard key={book.id} book={book} />
                ))}
            </div>

        </div>
    );
};

export default FeaturedBooks;