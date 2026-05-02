import Link from "next/link";
import { FaFacebook, FaGithub, FaLinkedin, FaRegCopyright } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-base-200 text-base-content mt-16">
            <div className="container mx-auto px-4 py-10 grid md:grid-cols-3 gap-8">

                <div>
                    <h2 className="text-2xl font-bold text-primary">
                        Borrowly
                    </h2>
                    <p className="mt-2 text-sm text-gray-600">
                        Your modern digital library. Explore, borrow, and enjoy books anytime, anywhere.
                    </p>
                </div>

                <div>
                    <h3 className="font-semibold mb-3">Quick Links</h3>
                    <div className="space-y-2 text-sm flex flex-col">
                        <Link href="/" className="hover:text-primary">Home</Link>
                        <Link href="/books" className="hover:text-primary">All Books</Link>
                        <Link href="/profile" className="hover:text-primary">My Profile</Link>
                    </div>
                </div>

                <div>
                    <h3 className="font-semibold mb-3">Contact Us</h3>
                    <p className="text-sm text-gray-600">
                        Email: support@borrowly.com
                    </p>
                    <p className="text-sm text-gray-600">
                        Phone: +880 1234-567890
                    </p>

                    <div className="flex gap-4 mt-4 text-xl">
                        <a href="#" className="hover:text-primary">
                            <FaFacebook />
                        </a>
                        <a href="#" className="hover:text-primary">
                            <FaGithub />
                        </a>
                        <a href="#" className="hover:text-primary">
                            <FaLinkedin />
                        </a>
                    </div>
                </div>

            </div>

            <div className="text-center text-sm py-4 border-t border-gray-300 flex gap-2 items-center justify-center">
                <FaRegCopyright />
                {new Date().getFullYear()} Borrowly. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;