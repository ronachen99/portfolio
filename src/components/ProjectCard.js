import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = (props) => {
  return (
    <div className="group relative">
      <img
        src={props.imageSrc}
        alt={props.altText}
        className="w-100 h-100 rounded-lg overflow-hidden"
      />
      <div className="absolute inset-0 flex flex-col rounded-lg items-center justify-center space-y-8 opacity-0 group-hover:opacity-70 transition-opacity duration-300 bg-black">
        <h3 className="text-white text-5xl">{props.title}</h3>
        <div className="flex space-x-8">
          <a href={props.repo} target="_blank" rel="noreferrer">
            <FaGithub className="text-white text-4xl cursor-pointer" />
          </a>
          <a href={props.website} target="_blank" rel="noreferrer">
            <FaExternalLinkAlt className="text-white text-4xl cursor-pointer" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
