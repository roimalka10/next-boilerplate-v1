import React from "react";

export default function GridBox(props) {
    return (
        <div className={`grid-box grid-box-${props.id}`}>
            <div className="grid-box-image">
                <img src={props.image} alt={`${props.title}`} />
            </div>
            <div className="grid-box-inner">
                <h3 className="grid-box-title">{props.title}</h3>
                <h4 className="grid-box-subtitle">{props.subtitle}</h4>
                <div className="grid-box-text">{props.text}</div>
            </div>
        </div>
    );
}
