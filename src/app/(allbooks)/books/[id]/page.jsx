import books from "@/data/books.json";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaCheck, FaStar } from "react-icons/fa";
import { LuTriangleAlert } from "react-icons/lu";
import { MdAutorenew } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import { SlCalender } from "react-icons/sl";
import BorrowModal from "@/components/shared/BorrowModal";
import BorrowButton from "@/components/shared/BorrowButton";


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

                        <span className="text-yellow-500 font-semibold flex items-center gap-2">
                            <FaStar /> {book.rating}
                        </span>
                    </div>

                    <p className="text-gray-700 leading-relaxed">
                        {book.description}
                    </p>

                    <div className="mt-2">
                        {book.available_quantity > 0 ? (
                            <span className="text-green-600 font-medium flex gap-2 items-center">
                                <FaCheck /> In Stock ({book.available_quantity} copies)
                            </span>
                        ) : (
                            <span className="text-red-500 font-medium flex gap-2 items-center">
                                <RxCross1 /> Out of Stock
                            </span>
                        )}
                    </div>

                    <div className="flex items-center gap-3">
                        <BorrowButton available={book.available_quantity} />

                        <Link href="/books" className="btn btn-outline btn-primary">
                            ← Back to Books
                        </Link>
                    </div>
                    <div className="mt-6 p-4 bg-base-200 rounded-lg">
                        <h3 className="font-semibold mb-2">Borrow Info:</h3>

                        <ul className="text-sm text-gray-600 space-y-1">
                            <li className="flex gap-2 items-center"><SlCalender /> Borrow Duration: 7 days</li>
                            <li className="flex gap-2 items-center"><MdAutorenew /> Renewable: Yes</li>
                            <li className="flex gap-2 items-center"><LuTriangleAlert /> Late Fee: ৳10/day</li>
                        </ul>
                    </div>
                </div>
            </div>

            <BorrowModal book={book} />
        </div>
    );
};

export default BookDetailsPage;