import React from "react";
import Link from "next/link";

const SocialMedia = ({ icon: Icon, link }) => {
  return (
    <Link href={link}>
      <a target="_blank">
        <div className="cursor-pointer h-10 w-10 flex items-center justify-center rounded bg-slate-800 hover:bg-slate-700 transition-colors duration-200">
          <Icon size={23} className="text-white" />
        </div>
      </a>
    </Link>
  );
};

export default SocialMedia;
