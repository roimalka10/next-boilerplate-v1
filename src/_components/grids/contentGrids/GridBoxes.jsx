import React from "react";
import gridsMap from "../GridsMap";

export default function GridBoxes(props) {
  return (
    <>
      {props.status && (
        <section className={"section grid-boxes-section" + (props.class ? ` ${props.class}` : "")}>
          {props.title && (
            <div className="grid-title">
              <h1>{props.title}</h1>
            </div>
          )}
          {props.content_childrens &&
            (props.content_childrens.length > 0 ? (
              <div className="grid-boxes">
                {props.content_childrens.map((child) =>
                  React.createElement(gridsMap[child.type], {
                    ...child,
                    key: child.id,
                  })
                )}
              </div>
            ) : null)}
        </section>
      )}
    </>
  );
}
