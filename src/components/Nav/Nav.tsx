"use client";
import Link from "next/link";

const Nav = () => {
  return (
    <div className="fixed top-0 w-full flex justify-center text-white px-8 py-7 text-lg z-[99] bg-black">
      <div className="flex gap-4 items-center justify-around w-[70%]">
        <Link href="/" className="hover:text-blue-600">
          Home
        </Link>
        <Link href="/movies" className="hover:text-red">
          Movie
        </Link>
        <Link href="/pokemon" className="hover:text-yellow-400">
          Pokemon
        </Link>
      </div>
    </div>
  );
};

export default Nav;
