import React from "react";
import gridsMap from "../grids/GridsMap";
import LobbyView from "../grids/layoutGrids/LobbyView";
import GridTop from "../grids/layoutGrids/GridTop";

export default function LobbyPage({ className, pageData }) {
  return (
    <div className={"lobby-page" + (className ? ` ${className}` : "")}>
      {pageData.page_main_gallery && (
        <GridTop
          page_main_gallery={pageData.page_main_gallery}
          page_main_gallery_headline={pageData.page_main_gallery_headline}
          page_main_gallery_subheadline={pageData.page_main_gallery_subheadline}
          page_main_gallery_title_as_h1={pageData.page_main_gallery_title_as_h1}
          page_main_gallery_subheadline_as_h2={pageData.page_main_gallery_subheadline_as_h2}
        />
      )}
      {pageData.page_info && (
        <LobbyView
          page_info={pageData.page_info}
          page_main_gallery_title_as_h1={pageData.page_main_gallery_title_as_h1}
          page_main_gallery_subheadline_as_h2={pageData.page_main_gallery_subheadline_as_h2}
        />
      )}

      <div id="allSectionsWrapper">
        {pageData.page_contents.map((grid) =>
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
