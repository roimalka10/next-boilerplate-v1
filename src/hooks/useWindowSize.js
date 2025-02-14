"use client";

import { useState, useEffect } from "react";

export function useWindowSize() {
  const [size, setSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });

  useEffect(() => {
    function useSize() {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    useSize();
    window.addEventListener("resize", useSize);
    return () => window.removeEventListener("resize", useSize);
  }, []);

  return size;
}
