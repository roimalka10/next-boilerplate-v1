"use client";

import { useEffect } from "react";

const HeaderHeightProvider = () => {
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
};

export default HeaderHeightProvider;
