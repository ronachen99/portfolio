import React, { useState } from "react";
import { projects } from "../utils/projectData";
import PreviewCard from "../components/PreviewCard";
import ProjectCard from "../components/ProjectCard";

export default function Portfolio() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="flex flex-col m-8 space-y-8 items-center">
      <h2 className="flex m-8 rounded-lg justify-center text-6xl px-4 py-2 text-indigo-600 bg-zinc-800 bg-opacity-75">
        portfolio
      </h2>
      <div className="flex flex-col sm:flex-row space-y-8 sm:space-y-0 sm:space-x-8 items-center">
        <div className="w-full sm:w-1/2">
          <ProjectCard {...projects[activeIndex]} />
        </div>
        <div className="space-y-8 w-full sm:w-1/2">
          {projects.map((project, i) => (
            <PreviewCard
              {...project}
              index={i}
              setActiveIndex={setActiveIndex}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
