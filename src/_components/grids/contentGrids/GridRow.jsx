import React from "react";

export default function GridRow(props) {
  return (
    <div className={`grid-row grid-row-${props.id}`}>
      <div className="grid-row-image">
        <img src={props.image} alt={`${props.title}`} />
      </div>
      <div className="grid-row-inner">
        <h3 className="grid-row-title">{props.title}</h3>
        <h4 className="grid-row-subtitle">{props.subtitle}</h4>
        <div className="grid-row-text">{props.text}</div>
      </div>
    </div>
  );
}
