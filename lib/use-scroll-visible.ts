"use client";

import { useEffect, useState } from "react";

// Keeps floating chrome (WhatsApp / AI-assistant buttons) off the hero's
// first paint so it never sits on top of the hero's stat cards there —
// it fades in once the user scrolls past the given threshold.
export function useScrollVisible(threshold = 260) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > threshold);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return visible;
}
