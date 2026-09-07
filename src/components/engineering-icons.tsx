import type { SVGProps } from "react";

export function CodeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 91 57" fill="none" aria-hidden="true">
      <path
        d="M26 12 9 28.5 26 45M65 12l17 16.5L65 45M53 6 38 51"
        stroke="currentColor"
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function LearningIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path
        d="M9 24a15 15 0 0 1 26-10l4 4M39 24a15 15 0 0 1-26 10l-4-4M39 8v10H29M9 40V30h10"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
