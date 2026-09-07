"use client";

import { useSyncExternalStore, type SVGProps } from "react";
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

export function ExperienceCounter(props: SVGProps<SVGSVGElement>) {
  const years = useSyncExternalStore(
    subscribe,
    getExperienceYears,
    getServerSnapshot,
  );

  return (
    <svg
      {...props}
      viewBox="0 0 58 29"
      fill="currentColor"
      role="img"
      aria-label={
        years === null ? "Years of experience" : `${years}+ years of experience`
      }
    >
      <text
        x="0"
        y="28"
        fontFamily="Tr 3 A, Arial, sans-serif"
        fontWeight="700"
        fontSize="37"
      >
        {years === null ? "—" : `${years}+`}
      </text>
    </svg>
  );
}
