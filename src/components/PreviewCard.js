import React from "react";

const PreviewCard = (props) => {
  console.log(props);
  return (
    <div
      className="bg-gray-800 rounded-lg px-4 py-2 text-gray-500"
      onClick={() => props.setActiveIndex(props.index)}
    >
      <h3 className="cursor-help text-green-600 text-4xl">{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
};

export default PreviewCard;
