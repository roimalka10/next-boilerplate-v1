import React from "react";

export default function Gridbox(props) {
  return (
    <div className={`gridbox gridbox-${props.index}`}>
      <h3 className="gridbox-title">{props.title}</h3>
      <h4 className="gridbox-subtitle">{props.subtitle}</h4>
      <div className="gridbox-text">{props.text}</div>
    </div>
  );
}
