import React from "react";
import gridsMap from "../GridsMap";

export default function HomePage({ pageData }) {
  const {
    page_main_gallery,
    page_main_gallery_headline,
    page_main_gallery_subheadline,
    page_main_gallery_title_as_h1,
    page_main_gallery_subheadline_as_h2,
    page_info,
    page_contents,
  } = pageData;

  return (
    <div className="home-page">
      <div id="hero-gallery">
        <div className="gallery-images">
          {page_main_gallery.map((image, index) => (
            <img
              className={`gallery-image gallery-image-${index + 1}`}
              key={index}
              src={image}
              alt={`Gallery Image ${index + 1}`}
            />
          ))}
        </div>
        {page_main_gallery_title_as_h1 ? (
          <h1>{page_main_gallery_headline}</h1>
        ) : (
          <h1>{page_info.title}</h1>
        )}
        {page_main_gallery_subheadline_as_h2 ? (
          <h2>{page_main_gallery_subheadline}</h2>
        ) : (
          <h2>{page_info.subtitle}</h2>
        )}
        {page_info.text && (
          <div className="text-container">{page_info.text}</div>
        )}
      </div>

      <div id="allSectionsWrapper">
        {page_contents.map((grid) =>
          gridsMap[grid.type]
            ? React.createElement(gridsMap[grid.type], {
                ...grid,
                key: grid.id,
              })
            : null
        )}
      </div>
    </div>
  );
}
