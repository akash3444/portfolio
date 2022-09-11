import React from "react";
import Image from "next/image";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
import { HiOutlineArrowNarrowDown } from "react-icons/hi";
import SocialMedia from "../shared/SocialMedia";

const socialMediaIcons = [
  {
    icon: FaGithub,
    link: "https://github.com/Akash3444",
    "aria-label": "View my Github profile",
  },
  {
    icon: FaLinkedinIn,
    link: "https://www.linkedin.com/in/akash-3444/",
    "aria-label": "View my LinkedIn profile",
  },
  {
    icon: SiUpwork,
    link: "https://www.upwork.com/freelancers/~018f16af62f6d209b4",
    "aria-label": "View my UpWork profile",
  },
];

const Hero = () => {
  return (
    <div className="mt-20 py-10 px-6 text-center">
      {/* <div className="mx-auto h-28 w-28 rounded-full bg-slate-800"></div> */}
      <Image height={200} width={200} src="/images/avatar.svg" alt="Avatar" />
      <h1 className="mt-4 text-4xl font-inter font-semibold text-slate-100">
        Akash Moradiya
      </h1>
      <h2 className="text-primary-200 font-inter font-medium text-[1.05rem]">
        React.js Developer
      </h2>
      <p className="mx-auto mt-8 max-w-[38ch] tracking-tight text-slate-400 text-[1.2rem]">
        I&apos;m a front-end web developer with 3+ years of experience in the
        web development.
      </p>

      <div className="mt-8 flex justify-center gap-3">
        {socialMediaIcons.map((socialMedia) => (
          <SocialMedia key={socialMedia.link} {...socialMedia} />
        ))}
      </div>
      <a href="#skills">
        <button
          aria-label="Explore"
          className="mt-8 rounded-lg bg-primary-600 py-2 px-6 text-sm text-white transition hover:scale-105 hover:bg-primary-700 focus:bg-primary-700 focus:outline-dotted focus:outline-[3px] focus:outline-offset-4 focus:outline-slate-300"
        >
          Explore
        </button>
      </a>

      <a href="#skills">
        <button
          aria-label="Skills"
          className="mx-auto mt-10 block animate-bounce"
        >
          <HiOutlineArrowNarrowDown size={45} className="text-slate-400" />
        </button>
      </a>
    </div>
  );
};

export default Hero;
