import { getImageProps } from "next/image";
import { profile } from "@/content/profile";

const portrait = {
  src: profile.image,
  alt: profile.fullName,
  width: 1024,
  height: 1536,
};

// Both hero instances select the same resource, including the hidden instance.
// Account for the mobile object-cover crop and desktop object-contain fit.
export const heroPortraitProps = getImageProps({
  ...portrait,
  loading: "eager",
  fetchPriority: "high",
  sizes:
    "(max-width: 767px) max(100vw, clamp(24.42rem, calc(118.44vw + 0.738rem), 56.76rem)), min(100vw, 66.67vh)",
}).props;

export const contactPortraitProps = getImageProps({
  ...portrait,
  loading: "lazy",
  sizes: "(max-width: 767px) clamp(2.4rem, 12vw, 5.75rem), 3.06vw",
}).props;
