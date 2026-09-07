/** Only nearby project videos load; foreground alpha videos animate on hover. */
export function mountProjectMedia(root: HTMLElement, reducedMotion: boolean) {
  const controller = new AbortController();
  const cards = root.querySelectorAll<HTMLElement>(".work-card");
  const safari =
    /safari/i.test(navigator.userAgent) &&
    !/chrome|chromium|crios|android/i.test(navigator.userAgent);
  const canHover = window.matchMedia("(hover: hover)").matches;
  const load = (video: HTMLVideoElement, foreground: boolean) => {
    if (video.getAttribute("src")) return;
    const url = foreground
      ? safari
        ? video.dataset.mov
        : video.dataset.webm
      : video.dataset.src;
    if (url) {
      video.src = url;
      video.load();
    }
  };
  const play = (video?: HTMLVideoElement | null) => {
    if (video && !reducedMotion)
      void video.play().catch(() => {
        /* Poster remains visible if autoplay is unavailable. */
      });
  };
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        const bg = entry.target.querySelector<HTMLVideoElement>(".work-bg");
        const fg = entry.target.querySelector<HTMLVideoElement>(".work-video");
        if (entry.isIntersecting && !reducedMotion) {
          if (bg) {
            load(bg, false);
            play(bg);
          }
          if (fg) {
            load(fg, true);
            if (!canHover) play(fg);
          }
        } else {
          bg?.pause();
          fg?.pause();
        }
      }
    },
    { rootMargin: "300px" },
  );
  cards.forEach((card) => {
    observer.observe(card);
    const fg = card.querySelector<HTMLVideoElement>(".work-video");
    if (!fg) return;
    card.addEventListener(
      "mouseenter",
      () => {
        if (canHover && !reducedMotion) {
          load(fg, true);
          play(fg);
        }
      },
      { signal: controller.signal },
    );
    card.addEventListener(
      "mouseleave",
      () => {
        if (canHover) {
          fg.pause();
          if (fg.readyState) fg.currentTime = 0;
        }
      },
      { signal: controller.signal },
    );
  });
  return () => {
    observer.disconnect();
    controller.abort();
    root
      .querySelectorAll<HTMLVideoElement>("video")
      .forEach((video) => video.pause());
  };
}
