import React from "react";
import Image from "next/image";

const Project = ({ name, thumbnail, description, skills = [] }) => {
  return (
    <div className="mx-auto max-w-xs overflow-hidden rounded-xl border border-slate-800">
      <div className="h-36 w-auto overflow-hidden bg-slate-800">
        <Image
          src={thumbnail}
          width={800}
          height={450}
          objectFit="cover"
          alt="Project"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <div className="mb-2 flex justify-start gap-3">
          <div className="h-8 w-8 rounded bg-slate-800"></div>
          <div className="h-8 w-8 rounded bg-slate-800"></div>
        </div>
        <h3 className="text-2xl font-semibold font-inter tracking-tight text-slate-200">
          {name}
        </h3>
        <p className="mt-2 text-[0.89rem] text-slate-400/80 line-clamp-4">
          {description}
        </p>
        <div className="relative mt-3 flex overflow-x-auto scrollbar-hide items-center gap-2">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="rounded-lg whitespace-nowrap border border-slate-700 bg-slate-800 py-0.5 px-3 text-[0.8rem] text-slate-200"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
