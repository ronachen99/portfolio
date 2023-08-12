import React from "react";

const PreviewCard = (props) => {
  console.log(props);
  return (
    <div
      className="bg-zinc-800 rounded-lg px-4 py-2 text-zinc-500 bg-opacity-75 "
      onClick={() => props.setActiveIndex(props.index)}
    >
      <h3 className="cursor-help text-indigo-600 text-4xl">{props.title}</h3>
      <h3 className="text-zinc-400 text-2xl">{props.usedTech}</h3>
      <p>{props.description}</p>
    </div>
  );
};

export default PreviewCard;
