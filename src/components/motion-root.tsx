"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { mountProjectMedia } from "@/lib/project-media";

export function MotionRoot({ children }: { children: ReactNode }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [revision, setRevision] = useState(0);
  const restoreScroll = useRef(0);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const abort = new AbortController();
    let disposed = false;
    let cleanMedia: (() => void) | undefined;
    let engine:
      | ReturnType<
          typeof import("@/lib/animation-engine").createAnimationEngine
        >
      | undefined;
    let observer: IntersectionObserver | undefined;
    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;

    const initialize = async () => {
      const { createAnimationEngine } = await import("@/lib/animation-engine");
      await document.fonts.ready;
      await Promise.all(
        Array.from(
          root.querySelectorAll<HTMLImageElement>(".hero-profile-img"),
        ).map((img) => img.decode().catch(() => {})),
      );
      if (disposed) return;
      // FLIP measurements are taken from the original hero composition.
      window.scrollTo(0, 0);
      engine = createAnimationEngine(root, () => {
        restoreScroll.current = window.scrollY;
        setRevision((value) => value + 1);
      });
      engine.start();
      if (revision > 0 || reduced) engine.finishIntro();
      cleanMedia = mountProjectMedia(root, reduced);
      root.dataset.ready = "true";
      if (restoreScroll.current)
        engine.lenis?.scrollTo(restoreScroll.current, { immediate: true, force: true });

      // Navigation is handled locally, including the menu's complete close state.
      root.addEventListener(
        "click",
        (event) => {
          const target = event.target as HTMLElement;
          const link = target.closest<HTMLAnchorElement>('a[href^="#"]');
          if (link) {
            const id = link.getAttribute("href")?.slice(1);
            const section = id ? document.getElementById(id) : null;
            if (!section) return;
            event.preventDefault();
            engine?.finishIntro();
            const menu = root.querySelector<HTMLElement>(".mobile-menu");
            if (
              innerWidth < 768 &&
              menu?.getAttribute("aria-expanded") === "true"
            )
              menu.click();
            engine?.lenis?.start();
            engine?.lenis?.scrollTo(section, {
              duration: reduced ? 0 : 1.15,
              offset: innerWidth < 768 ? -80 : 0,
              immediate: reduced,
            });
            if (!engine?.lenis)
              section.scrollIntoView({
                behavior: reduced ? "instant" : "smooth",
              });
          }
          if (target.closest(".mobile-menu")) {
            const menu = root.querySelector<HTMLElement>(".mobile-menu");
            menu?.setAttribute(
              "aria-expanded",
              String(menu.getAttribute("aria-expanded") !== "true"),
            );
          }
        },
        { signal: abort.signal },
      );

      // Preserve reference appearance while making its custom controls keyboard usable.
      root.addEventListener(
        "keydown",
        (event) => {
          const target = event.target as HTMLElement;
          if (
            (event.key === "Enter" || event.key === " ") &&
            target.matches('[role="button"]')
          ) {
            event.preventDefault();
            target.click();
          }
          if (event.key === "Escape") {
            root
              .querySelector<HTMLElement>(
                ".popup-card-wrap.is-active-card .popup-close",
              )
              ?.click();
            engine?.closeCapability();
            root
              .querySelector<HTMLElement>('.mobile-menu[aria-expanded="true"]')
              ?.click();
          }
        },
        { signal: abort.signal },
      );

      // Webflow's original current-section marker, implemented without its runtime.
      const navLinks = root.querySelectorAll<HTMLAnchorElement>(
        ".nav-link,.hero-navigation-link",
      );
      const sections = [
        "hero",
        "about",
        "projects",
        "overview",
        "services",
        "testimonial",
        "faq",
      ];
      const setCurrent = (id: string) =>
        navLinks.forEach((link) => {
          const active = link.getAttribute("href") === `#${id}`;
          link.classList.toggle("w--current", active);
          if (active) link.setAttribute("aria-current", "location");
          else link.removeAttribute("aria-current");
        });
      setCurrent("hero");
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) setCurrent(entry.target.id);
          });
        },
        { rootMargin: "-12% 0px -48% 0px" },
      );
      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) observer?.observe(section);
      });
    };
    void initialize().catch((error) => {
      if (!disposed)
        console.error("Unable to initialize portfolio animations", error);
    });
    return () => {
      disposed = true;
      abort.abort();
      observer?.disconnect();
      cleanMedia?.();
      engine?.destroy();
    };
  }, [revision]);

  return (
    <div key={revision} className="page-wrap" ref={rootRef}>
      {children}
    </div>
  );
}
