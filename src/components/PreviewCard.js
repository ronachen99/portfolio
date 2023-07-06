import React from "react";

const PreviewCard = (props) => {
  console.log(props);
  return (
    <div onClick={() => props.setActiveIndex(props.index)}>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </div>
  );
};

export default PreviewCard;
