"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type KeyboardEvent,
  type PointerEvent,
} from "react";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowsOutSimpleIcon,
  XIcon,
} from "@phosphor-icons/react";
import type { ArchitectureSlide } from "@/content/architecture";

export function ArchitectureCarousel({
  slides,
}: {
  slides: ArchitectureSlide[];
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const currentRef = useRef(0);
  const cursorRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef<{ x: number; scroll: number; index: number } | null>(
    null,
  );
  const [dragging, setDragging] = useState(false);
  const [current, setCurrent] = useState(0);
  const [expanded, setExpanded] = useState<number | null>(null);
  const [inView, setInView] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      const track = trackRef.current;
      if (!track) return;
      const target = Math.max(0, Math.min(slides.length - 1, index));
      track.scrollTo({
        left: target * track.clientWidth,
        behavior: matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "instant"
          : "smooth",
      });
    },
    [slides.length],
  );

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const resize = new ResizeObserver(() => {
      track.scrollTo({
        left: currentRef.current * track.clientWidth,
        behavior: "instant",
      });
    });
    resize.observe(track);
    const visibility = new IntersectionObserver(([entry]) =>
      setInView(entry.isIntersecting),
    );
    visibility.observe(track);
    return () => {
      resize.disconnect();
      visibility.disconnect();
    };
  }, []);

  useEffect(() => {
    if (expanded !== null) dialogRef.current?.showModal();
  }, [expanded]);

  useEffect(() => {
    const frames = () =>
      Array.from(
        document.querySelectorAll<HTMLIFrameElement>(
          "iframe[data-architecture-viewer]",
        ),
      );
    function syncVisibility() {
      frames().forEach((frame) =>
        frame.contentWindow?.postMessage(
          {
            channel: "portfolio-diagram",
            type: "visibility",
            active:
              frame.dataset.expanded === "true" ||
              (inView && expanded === null),
          },
          window.location.origin,
        ),
      );
    }
    function onMessage(event: MessageEvent) {
      if (
        event.origin !== window.location.origin ||
        event.data?.channel !== "portfolio-diagram"
      )
        return;
      const frame = frames().find(
        (candidate) => candidate.contentWindow === event.source,
      );
      if (!frame) return;
      const { type, direction, deltaY, deltaX, x, y, visible } = event.data;
      if (type === "ready") syncVisibility();
      if (type === "escape" && expanded !== null) dialogRef.current?.close();
      if (
        type === "slide" &&
        expanded === null &&
        (direction === 1 || direction === -1)
      )
        goTo(currentRef.current + direction);
      if (type === "scroll" && expanded === null && Number.isFinite(deltaY)) {
        if (Number.isFinite(deltaX) && Math.abs(deltaX) > Math.abs(deltaY))
          return;
        window.scrollBy({
          top: Math.max(-300, Math.min(300, deltaY)),
          behavior: "instant",
        });
      }
      if (type === "cursor" && cursorRef.current) {
        cursorRef.current.dataset.visible = String(
          Boolean(visible) && expanded === null,
        );
        if (Number.isFinite(x) && Number.isFinite(y)) {
          const rect = frame.getBoundingClientRect();
          cursorRef.current.style.transform = `translate3d(${rect.left + x}px,${rect.top + y}px,0)`;
        }
      }
    }
    window.addEventListener("message", onMessage);
    syncVisibility();
    return () => window.removeEventListener("message", onMessage);
  }, [inView, expanded, current, goTo]);

  function moveCursor(event: PointerEvent<HTMLDivElement>) {
    if (event.pointerType !== "mouse" || !cursorRef.current) return;
    const target = event.target as HTMLElement;
    cursorRef.current.dataset.visible = String(
      !target.closest("button, a, iframe") && expanded === null,
    );
    cursorRef.current.style.transform = `translate3d(${event.clientX}px,${event.clientY}px,0)`;
    const drag = dragRef.current;
    if (drag && trackRef.current)
      trackRef.current.scrollLeft = drag.scroll + drag.x - event.clientX;
  }

  function finishDrag(event: PointerEvent<HTMLDivElement>) {
    const drag = dragRef.current;
    if (!drag) return;
    dragRef.current = null;
    setDragging(false);
    const delta = drag.x - event.clientX;
    goTo(drag.index + (Math.abs(delta) > 55 ? Math.sign(delta) : 0));
  }

  function onKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.target !== event.currentTarget) return;
    const destination = {
      ArrowLeft: current - 1,
      ArrowRight: current + 1,
      Home: 0,
      End: slides.length - 1,
    }[event.key];
    if (destination === undefined) return;
    event.preventDefault();
    goTo(destination);
  }

  const enlarged = expanded === null ? null : slides[expanded];

  return (
    <div className="architecture-carousel" data-in-view={inView}>
      <div className="architecture-toolbar">
        <div className="flex items-center gap-4">
          <span
            className="font-display text-sm tabular-nums text-white/65"
            aria-live="polite"
            aria-atomic="true"
          >
            <span className="text-dukke-yellow">
              {String(current + 1).padStart(2, "0")}
            </span>
            {" / "}
            {String(slides.length).padStart(2, "0")}
          </span>
          <div
            className="architecture-pagination"
            role="group"
            aria-label="Choose an architecture diagram"
          >
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                className="architecture-pagination-button"
                aria-label={`Show ${slide.pattern}`}
                aria-current={current === index ? "true" : undefined}
                aria-controls="architecture-track"
                onClick={() => goTo(index)}
              >
                <span />
              </button>
            ))}
          </div>
        </div>
        <div className="flex gap-2">
          <button
            className="architecture-control"
            type="button"
            aria-label="Previous architecture diagram"
            disabled={current === 0}
            onClick={() => goTo(current - 1)}
          >
            <ArrowLeftIcon size={20} aria-hidden="true" />
          </button>
          <button
            className="architecture-control"
            type="button"
            aria-label="Next architecture diagram"
            disabled={current === slides.length - 1}
            onClick={() => goTo(current + 1)}
          >
            <ArrowRightIcon size={20} aria-hidden="true" />
          </button>
        </div>
      </div>

      <div
        id="architecture-track"
        ref={trackRef}
        className="architecture-track"
        role="region"
        aria-roledescription="carousel"
        aria-label="Software architecture examples"
        tabIndex={0}
        onKeyDown={onKeyDown}
        data-dragging={dragging}
        onPointerDown={(event) => {
          if (
            event.pointerType !== "mouse" ||
            event.button !== 0 ||
            (event.target as HTMLElement).closest("button, a, iframe")
          )
            return;
          event.preventDefault();
          event.currentTarget.setPointerCapture(event.pointerId);
          dragRef.current = {
            x: event.clientX,
            scroll: event.currentTarget.scrollLeft,
            index: current,
          };
          setDragging(true);
        }}
        onPointerMove={moveCursor}
        onPointerUp={finishDrag}
        onPointerCancel={() => {
          dragRef.current = null;
          setDragging(false);
          goTo(currentRef.current);
        }}
        onPointerLeave={() => {
          if (cursorRef.current) cursorRef.current.dataset.visible = "false";
        }}
        onScroll={() => {
          const track = trackRef.current;
          if (!track?.clientWidth) return;
          const index = Math.max(
            0,
            Math.min(
              slides.length - 1,
              Math.round(track.scrollLeft / track.clientWidth),
            ),
          );
          currentRef.current = index;
          setCurrent(index);
        }}
      >
        {slides.map((slide, index) => (
          <article
            key={slide.id}
            className="architecture-slide"
            role="group"
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${slides.length}: ${slide.pattern}`}
            inert={index !== current}
            data-active={index === current}
          >
            <div className="architecture-slide-heading">
              <span className="font-display text-[clamp(1rem,1.4vw,1.5rem)] text-dukke-yellow">
                {slide.pattern}
              </span>
              <button
                className="architecture-expand"
                type="button"
                aria-label={`Expand ${slide.pattern} diagram`}
                onClick={() => setExpanded(index)}
              >
                <ArrowsOutSimpleIcon size={18} aria-hidden="true" />
                <span className="sm:hidden">Expand</span>
                <span className="hidden sm:inline">Expand diagram</span>
              </button>
            </div>
            <div className="architecture-viewer-shell">
              {index === current && (
                <iframe
                  key={slide.id}
                  src={slide.src}
                  title={`${slide.pattern}: interactive diagram`}
                  className="architecture-viewer"
                  data-architecture-viewer=""
                  loading="lazy"
                />
              )}
            </div>
            <div className="architecture-caption">
              <div>
                <h3 className="m-0 mb-3 font-display text-[clamp(1.5rem,2.3vw,2.75rem)] leading-[1.1] text-white">
                  {slide.title}
                </h3>
                <p className="m-0 max-w-[60ch] text-[clamp(0.95rem,1.05vw,1.2rem)] leading-relaxed text-white/65">
                  {slide.description}
                </p>
                <ul
                  className="architecture-tags"
                  aria-label="Architecture concepts"
                >
                  {slide.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </div>
              <dl className="architecture-tradeoffs">
                <div>
                  <dt>Why it fits</dt>
                  <dd>{slide.benefit}</dd>
                </div>
                <div>
                  <dt>What to weigh</dt>
                  <dd>{slide.tradeoff}</dd>
                </div>
              </dl>
            </div>
          </article>
        ))}
      </div>
      <div
        ref={cursorRef}
        className="architecture-drag-cursor"
        aria-hidden="true"
      >
        <ArrowLeftIcon size={14} />
        <span>Drag</span>
        <ArrowRightIcon size={14} />
      </div>
      <p className="mt-4 mb-0 text-xs text-white/65">
        Drag to browse · Hover or select a node to trace its connections · Use +
        to zoom
      </p>
      <p className="mt-4 mb-0 text-xs text-white/45">
        Conceptual examples. The right architecture depends on the product, the
        team, and the constraints.
      </p>

      <dialog
        ref={dialogRef}
        className="architecture-dialog"
        aria-labelledby="architecture-dialog-title"
        onClose={() => setExpanded(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) dialogRef.current?.close();
        }}
      >
        {enlarged && (
          <div className="architecture-dialog-content">
            <div className="flex items-center justify-between gap-5 border-b border-white/15 p-5">
              <h2
                id="architecture-dialog-title"
                className="m-0 font-display text-xl text-white"
              >
                {enlarged.pattern}
              </h2>
              <button
                type="button"
                className="architecture-control shrink-0"
                aria-label="Close diagram"
                onClick={() => dialogRef.current?.close()}
                autoFocus
              >
                <XIcon size={22} aria-hidden="true" />
              </button>
            </div>
            <p className="m-0 px-5 pt-3 text-xs text-white/50 sm:hidden">
              Select a node to explore. Use + to zoom, then drag to pan.
            </p>
            <div className="architecture-dialog-viewer" data-lenis-prevent="">
              <iframe
                src={`${enlarged.src}&expanded=1`}
                title={`${enlarged.pattern}: enlarged interactive diagram`}
                className="architecture-viewer"
                data-architecture-viewer=""
                data-expanded="true"
              />
            </div>
            <p className="m-0 border-t border-white/15 px-5 py-4 text-sm text-white/65">
              {enlarged.description}
            </p>
          </div>
        )}
      </dialog>
    </div>
  );
}
