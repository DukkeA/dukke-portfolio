"use client";

import { useSyncExternalStore, type HTMLAttributes } from "react";
import { getExperienceYears } from "@/lib/experience";

function subscribe(onChange: () => void) {
  const interval = window.setInterval(onChange, 60_000);
  window.addEventListener("focus", onChange);
  document.addEventListener("visibilitychange", onChange);

  return () => {
    window.clearInterval(interval);
    window.removeEventListener("focus", onChange);
    document.removeEventListener("visibilitychange", onChange);
  };
}

// Keep the prerendered page and initial hydration consistent across dates.
const getServerSnapshot = () => null;

export function ExperienceCounter(props: HTMLAttributes<HTMLSpanElement>) {
  const years = useSyncExternalStore(
    subscribe,
    getExperienceYears,
    getServerSnapshot,
  );

  return <span {...props}>{years === null ? "—" : `${years}+`}</span>;
}
