import React from "react";

export default function LobbyView({
  page_info,
  page_main_gallery_title_as_h1,
  page_main_gallery_subheadline_as_h2,
}) {
  return (
    <div id="lobbyView">
      {page_main_gallery_title_as_h1 ? null : <h1>{page_info.title}</h1>}
      {!page_main_gallery_subheadline_as_h2 && <h2>{page_info.subtitle}</h2>}
      {page_info.text && <div className="text-container">{page_info.text}</div>}
    </div>
  );
}
