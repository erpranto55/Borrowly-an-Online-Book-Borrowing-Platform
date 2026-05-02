"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const navLinkClass = (path) =>
    pathname === path
      ? "text-primary border-b-2 border-primary pb-1"
      : "hover:text-primary";

  return (
    <div className="bg-gray-100 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center min-h-20 px-4">

        {/* Logo */}
        <Link href="/" className="text-4xl font-bold text-primary">
          Borrowly
        </Link>

        {/* Menu */}
        <div className="hidden md:flex gap-6 font-medium">
          <Link href="/" className={navLinkClass("/")}>
            Home
          </Link>
          <Link href="/books" className={navLinkClass("/books")}>
            All Books
          </Link>
          <Link href="/profile" className={navLinkClass("/profile")}>
            My Profile
          </Link>
        </div>

        {/* Right */}
        <div>
          <Link href="/login" className="btn btn-primary">
            Login
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Navbar;