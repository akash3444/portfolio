import Link from "next/link";
import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { HiOutlineX } from "react-icons/hi";

const navbarLinks = [
  {
    href: "/",
    text: "Home",
  },
  {
    href: "#skills",
    text: "Skills",
  },
  {
    href: "#projects",
    text: "Projects",
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);

  const MenuIcon = isMenuOpen ? HiOutlineX : FiMenu;

  return (
    <nav className="h-20 fixed top-0 inset-x-0 bg-slate-800/60 backdrop-filter backdrop-blur-sm z-20">
      <div className="max-w-screen-lg mx-auto h-full flex items-center justify-between px-8">
        <a href="#" className="logo text-xl font-semibold text-slate-200">
          Akash
        </a>

        <ul className="hidden md:flex items-center gap-y-3 gap-x-14">
          {navbarLinks.map((link, index) => (
            <li
              key={index}
              className="text-white font-inter font-medium animated-underline"
            >
              <Link href={link.href}>{link.text}</Link>
            </li>
          ))}
        </ul>
        <ul
          className={`${
            isMenuOpen
              ? "flex flex-col items-center gap-y-1 gap-x-14"
              : "hidden"
          } md:hidden absolute top-full inset-x-0 h-[calc(100vh-5rem)] bg-slate-800 backdrop-filter backdrop-blur-sm z-20`}
        >
          {navbarLinks.map((link, index) => (
            <li
              key={index}
              className="w-full text-center text-white font-inter font-medium transition-colors duration-200 hover:bg-slate-700 py-4"
            >
              <Link href={link.href}>
                <a className="block w-full">{link.text}</a>
              </Link>
            </li>
          ))}
        </ul>

        <button className="md:hidden" onClick={toggleMenu}>
          <MenuIcon size={25} className="text-white" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
