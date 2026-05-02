import books from "@/data/books.json";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaStar } from "react-icons/fa";

const BookDetailsPage = async ({ params }) => {
    const { id } = await params;
    const book = books.find((b) => String(b.id) === id);

    if (!book) return notFound();

    return (
        <div className="container mx-auto px-4 py-10">

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

                <div className="relative w-full h-200">
                    <Image
                        src={book.image_url}
                        alt={book.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover rounded-lg"
                        priority
                    />
                </div>

                <div className="space-y-4">
                    <h1 className="text-3xl font-bold">{book.title}</h1>

                    <p className="text-gray-500 text-lg">
                        by {book.author}
                    </p>

                    <div className="flex items-center gap-4">
                        <span className="badge badge-outline text-sm">
                            {book.category}
                        </span>

                        <span className="text-yellow-500 font-semibold">
                            <FaStar /> {book.rating}
                        </span>
                    </div>

                    <p className="text-gray-700 leading-relaxed">
                        {book.description}
                    </p>

                    {/* Availability */}
                    <p className="font-medium">
                        Available:{" "}
                        <span className="text-primary">
                            {book.available_quantity} copies
                        </span>
                    </p>

                    {/* Button */}
                    <div className="flex items-center gap-3">
                        <button className="btn btn-primary ">
                            Borrow Book
                        </button>

                        <Link href="/books" className="btn btn-outline btn-primary">
                            ← Back to Books
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetailsPage;