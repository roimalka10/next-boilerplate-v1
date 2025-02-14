"use client";

import { useEffect } from "react";

export default function WindowSizeProvider() {
  useEffect(() => {
    function updateWindowSize() {
      document.documentElement.style.setProperty("--app-width", `${window.innerWidth}px`);
      document.documentElement.style.setProperty("--app-height", `${window.innerHeight}px`);
    }

    updateWindowSize();
    window.addEventListener("resize", updateWindowSize);
    return () => window.removeEventListener("resize", updateWindowSize);
  }, []);

  return null;
}
