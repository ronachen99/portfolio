import React from "react";

const ProjectCard = (props) => {
  return (
    <div
      className="projects"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <a href={props.website}>
        <img
          src={props.imageSrc}
          alt={props.altText}
          style={{ width: "100%", height: "100%" }}
        />
      </a>
    </div>
  );
};

export default ProjectCard;
