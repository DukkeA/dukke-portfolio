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
    let navigationFrame: number | undefined;
    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const previousScrollRestoration = history.scrollRestoration;
    history.scrollRestoration = "manual";

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
      await engine.start();
      if (disposed) return;
      if (revision > 0 || reduced) engine.finishIntro();
      cleanMedia = mountProjectMedia(root, reduced);
      root.dataset.ready = "true";

      const navigateToSection = (id: string, immediate = false) => {
        const section = document.getElementById(id);
        if (!section) return;
        engine?.finishIntro();
        const menu = root.querySelector<HTMLElement>(".mobile-menu");
        if (innerWidth < 768 && menu?.getAttribute("aria-expanded") === "true")
          menu.click();
        // Projects is sticky: its enclosing section supplies a stable destination.
        const target =
          id === "projects" ? document.getElementById("work")! : section;
        const top =
          id === "hero"
            ? 0
            : target.getBoundingClientRect().top + window.scrollY;
        const offset = innerWidth < 768 && id !== "hero" ? 80 : 0;
        engine?.lenis?.start();
        if (engine?.lenis) {
          engine.lenis.scrollTo(Math.max(0, top - offset), {
            duration: reduced || immediate ? 0 : 1.15,
            immediate: reduced || immediate,
            force: true,
          });
        } else {
          window.scrollTo({
            top: Math.max(0, top - offset),
            behavior: reduced || immediate ? "instant" : "smooth",
          });
        }
      };
      const followLocation = () =>
        navigateToSection(location.hash.slice(1) || "hero", true);
      if (revision > 0 && restoreScroll.current) {
        engine.finishIntro();
        engine.lenis?.start();
        engine.lenis?.scrollTo(restoreScroll.current, {
          immediate: true,
          force: true,
        });
      } else if (location.hash) {
        followLocation();
      }
      window.addEventListener("popstate", followLocation, {
        signal: abort.signal,
      });
      window.addEventListener("hashchange", followLocation, {
        signal: abort.signal,
      });
      root.addEventListener(
        "toggle",
        (event) => {
          if (event.target instanceof HTMLDetailsElement) {
            requestAnimationFrame(() => {
              if (!disposed) engine?.refresh();
            });
          }
        },
        { capture: true, signal: abort.signal },
      );

      // Navigation is handled locally, including the menu's complete close state.
      root.addEventListener(
        "click",
        (event) => {
          const target = event.target as HTMLElement;
          const link = target.closest<HTMLAnchorElement>('a[href^="#"]');
          if (
            link &&
            !event.ctrlKey &&
            !event.metaKey &&
            !event.shiftKey &&
            !event.altKey &&
            event.button === 0
          ) {
            const id = link.getAttribute("href")?.slice(1);
            const section = id ? document.getElementById(id) : null;
            if (!section) return;
            event.preventDefault();
            if (location.hash !== `#${id}`)
              history.pushState(history.state, "", `#${id}`);
            navigateToSection(id!);
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
      const sectionTargets = sections.map((id) => ({
        id,
        element: document.getElementById(id === "projects" ? "work" : id),
      }));
      let currentSection = "";
      const updateCurrentSection = () => {
        navigationFrame = undefined;
        // The project track is sticky; follow its full scroll range instead.
        let active = "hero";
        for (const { id, element } of sectionTargets) {
          if (
            element &&
            element.getBoundingClientRect().top <= innerHeight * 0.35
          )
            active = id;
        }
        if (active !== currentSection) {
          currentSection = active;
          setCurrent(active);
        }
      };
      window.addEventListener(
        "scroll",
        () => {
          navigationFrame ??= requestAnimationFrame(updateCurrentSection);
        },
        { passive: true, signal: abort.signal },
      );
      updateCurrentSection();
    };
    void initialize().catch((error) => {
      if (!disposed)
        console.error("Unable to initialize portfolio animations", error);
    });
    return () => {
      disposed = true;
      history.scrollRestoration = previousScrollRestoration;
      abort.abort();
      if (navigationFrame !== undefined) cancelAnimationFrame(navigationFrame);
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
