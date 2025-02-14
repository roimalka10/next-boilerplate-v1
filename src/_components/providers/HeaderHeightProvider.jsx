"use client";

import { useEffect } from "react";

export default function HeaderHeightProvider() {
  useEffect(() => {
    function setHeaderHeight() {
      const header = document.querySelector("header");
      if (header) {
        document.documentElement.style.setProperty("--headerHeight", `${header.offsetHeight}px`);
      }
    }

    setHeaderHeight();
    window.addEventListener("resize", setHeaderHeight);

    return () => window.removeEventListener("resize", setHeaderHeight);
  }, []);

  return null;
}
