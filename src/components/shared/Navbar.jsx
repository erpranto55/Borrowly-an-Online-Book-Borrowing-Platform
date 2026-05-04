"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "@/lib/auth-client";
import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const { data: session, isPending } = useSession();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinkClass = (path) =>
    pathname === path
      ? "text-primary font-semibold"
      : "hover:text-primary";

  return (
    <div className="bg-gray-100 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center min-h-20 px-4">

        <Link href="/" className="text-3xl md:text-4xl font-bold text-primary">
          Borrowly
        </Link>

        <div className="hidden md:flex gap-6 font-medium">
          <Link href="/" className={navLinkClass("/")}>Home</Link>
          <Link href="/books" className={navLinkClass("/books")}>All Books</Link>
        </div>

        <div className="flex items-center gap-3">

          <button
            className="md:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

          {isPending ? (
            <span>Loading...</span>
          ) : session ? (
            <div className="hidden sm:flex gap-3 items-center">
              <span className="text-sm text-gray-500 hidden lg:block">
                Hey, {session?.user?.name?.split(" ")[0] || "User"}
              </span>

              <Link href="/profile">
                <Image
                  src={session?.user?.image || "/default-avatar.png"}
                  alt="user"
                  width={36}
                  height={36}
                  className="rounded-full border"
                />
              </Link>

              <button
                className="btn btn-primary btn-sm"
                onClick={() => signOut()}
              >
                Logout
              </button>
            </div>
          ) : (
            <Link href="/login" className="btn btn-primary btn-sm">
              Login
            </Link>
          )}
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t px-4 py-4 flex flex-col gap-3 shadow">

          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className={navLinkClass("/")}
          >
            Home
          </Link>

          <Link
            href="/books"
            onClick={() => setMenuOpen(false)}
            className={navLinkClass("/books")}
          >
            All Books
          </Link>

          {session ? (
            <>
              <Link href="/profile" onClick={() => setMenuOpen(false)}>
                Profile
              </Link>
              <button
                onClick={() => {
                  signOut();
                  setMenuOpen(false);
                }}
                className="text-left text-red-500"
              >
                Logout
              </button>
            </>
          ) : (
            <Link href="/login" onClick={() => setMenuOpen(false)}>
              Login
            </Link>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;