"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // If on the home route, reset state to default (green)
    if (pathname === "/") {
      setIsScrolled(false);
    } else {
      setIsScrolled(true); // White navbar on other pages
    }
  }, [pathname]); // Run this whenever the route changes

  useEffect(() => {
    if (pathname !== "/") return; // Only add scroll listener on home page

    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);
  const links = (
    <>
      <Link href="/">
        <li>Home</li>
      </Link>
      <Link href="/about-us">
        <li>About Us</li>
      </Link>
      <Link href="/mortgage-calculator">
        <li>Mortgage Calculator</li>
      </Link>
      <Link href="/start">
        <li>Start</li>
      </Link>
    </>
  );
  return (
    <nav
      className={`fixed top-0 z-50 w-full py-4 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg text-black" : "bg-primary text-white"
      }`}
      // className="bg-primary text-white fixed top-0 z-50 w-full py-4"
    >
      <div className="navbar w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow "
            >
              {links}
            </ul>
          </div>
          <Link href={"/"} className="font-bold text-3xl">
            Better
          </Link>
          <div className=" hidden lg:flex">
            <ul className="menu menu-horizontal gap-6 px-1 ml-6">{links}</ul>
          </div>
        </div>
        <div className="navbar-end space-x-4">
          <div className="w-10 h-10 rounded-full border border-white flex justify-center items-center">
            <FaPhoneAlt />
          </div>

          <a className="">Sign In</a>
          <a className="py-2 px-4 rounded-full bg-secondary">Continue</a>
        </div>
      </div>
    </nav>
  );
}
