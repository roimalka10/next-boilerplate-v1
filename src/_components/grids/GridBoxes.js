import React from "react";
import gridsMap from "../GridsMap";

export default function Gridboxes(props) {
  return (
    <section className="section grid-boxes-section">
      <h1 className="grid-title">{props.title}</h1>
      <div className="grid-boxes">
        {props.content_childrens && props.content_childrens.length > 0
          ? props.content_childrens.map((child) =>
              React.createElement(gridsMap[child.type], {
                ...child,
                key: child.id,
              })
            )
          : "No children available"}
      </div>
    </section>
  );
}
