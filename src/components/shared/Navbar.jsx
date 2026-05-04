"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "@/lib/auth-client";
import { PersonFill } from '@gravity-ui/icons';
import Image from "next/image";

const Navbar = () => {
  const pathname = usePathname();
  const { data: session, isPending } = useSession();

  const navLinkClass = (path) =>
    pathname === path
      ? "text-primary border-b-2 border-primary pb-1"
      : "hover:text-primary";

  return (
    <div className="bg-gray-100 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center min-h-20 px-4">

        <Link href="/" className="text-4xl font-bold text-primary">
          Borrowly
        </Link>

        <div className="hidden md:flex gap-6 font-medium">
          <Link href="/" className={navLinkClass("/")}>Home</Link>
          <Link href="/books" className={navLinkClass("/books")}>All Books</Link>
        </div>

        <div>
          {isPending ? (
            <span>Loading...</span>
          ) : session ? (
            <div className="flex gap-3 items-center">
              <span className="text-sm font-medium text-gray-500">
                Hey, {session?.user?.name?.split(" ")[0] || "User"}
              </span>
              <Link href="/profile">
                <Image
                  src={session?.user?.image || "/default-avatar.png"}
                  alt="user"
                  width={40}
                  height={40}
                  className="rounded-full border"
                />
              </Link>
              <button
                className="btn btn-primary"
                onClick={() => signOut()}
              >
                Logout
              </button>
            </div>
          ) : (
            <Link href="/login" className="btn btn-primary">
              Login
            </Link>
          )}
        </div>

      </div>
    </div>
  );
};

export default Navbar;