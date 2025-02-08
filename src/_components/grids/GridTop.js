import React from "react";

export default function GridTop({
  page_main_gallery,
  page_main_gallery_headline,
  page_main_gallery_subheadline,
  page_main_gallery_title_as_h1,
  page_main_gallery_subheadline_as_h2,
}) {
  return (
    <div id="GridTop">
      {page_main_gallery_title_as_h1 && <h1>{page_main_gallery_headline}</h1>}
      {page_main_gallery_subheadline_as_h2 && (
        <h2>{page_main_gallery_subheadline}</h2>
      )}

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
    </div>
  );
}
