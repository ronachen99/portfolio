import React, { useState } from "react";
import { projects } from "../utils/projectData";
import PreviewCard from "../components/PreviewCard";
import ProjectCard from "../components/ProjectCard";
export default function Portfolio() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div>
      <h1>Portfolio</h1>
      <div style={{ display: "flex" }}>
        <div style={{ width: "70%" }}>
          <ProjectCard {...projects[activeIndex]} />
        </div>
        <div>
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
