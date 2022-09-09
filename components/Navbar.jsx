import Link from "next/link";
import React from "react";
import { FiMenu } from "react-icons/fi";

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
  return (
    <nav className="h-20 fixed top-0 inset-x-0 bg-slate-800/60 backdrop-filter backdrop-blur-sm z-20">
      <div className="max-w-screen-lg mx-auto h-full flex items-center justify-between px-8">
        <a href="#" className="logo text-xl font-semibold text-slate-200">
          Akash
        </a>

        <ul className="flex items-center gap-y-3 gap-x-14">
          {navbarLinks.map((link, index) => (
            <li
              key={index}
              className="text-white font-inter font-medium animated-underline"
            >
              <Link href={link.href}>{link.text}</Link>
            </li>
          ))}
        </ul>

        <button className="md:hidden">
          <FiMenu size={25} className="text-white" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
