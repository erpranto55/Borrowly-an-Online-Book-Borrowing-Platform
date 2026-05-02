import Link from "next/link";
import heroBooks from "@/assets/hero-books.jpg"
import Image from "next/image";

const Hero = () => {
    return (
        <div className="">
            <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center gap-10 py-16 px-4">

                {/* Left Content */}
                <div className="flex-1">
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                        Borrow Books. Expand Your World.
                    </h1>

                    <p className="mt-4 text-gray-600 text-lg">
                        Discover thousands of books anytime, anywhere.
                        Explore categories, find your favorites, and start reading today.
                    </p>

                    <Link href="/books" className="btn btn-primary mt-6">
                        Browse Now
                    </Link>
                </div>

                {/* Right Image */}
                <div className="relative h-150 w-120">
                    <Image
                        src={heroBooks}
                        alt="Books"
                        fill
                        priority
                        className="object-cover rounded-lg"
                    />
                </div>

            </div>
        </div>
    );
};

export default Hero;