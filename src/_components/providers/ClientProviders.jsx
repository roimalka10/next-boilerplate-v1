"use client";

import HeaderHeightProvider from "./HeaderHeightProvider";
import WindowSizeProvider from "./WindowSizeProvider";

export default function ClientProviders() {
  return (
    <>
      <WindowSizeProvider />
      <HeaderHeightProvider />
    </>
  );
}
