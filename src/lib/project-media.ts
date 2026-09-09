/** Run illustrative project animations only while their cards are in view. */
export function mountProjectMedia(root: HTMLElement, reducedMotion: boolean) {
  const cards = root.querySelectorAll<HTMLElement>(".portfolio-project");
  if (reducedMotion) return () => {};

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        const card = entry.target as HTMLElement;
        card.dataset.previewPlaying = String(entry.isIntersecting);
      }
    },
    { threshold: 0.15 },
  );

  cards.forEach((card) => observer.observe(card));

  return () => {
    observer.disconnect();
    cards.forEach((card) => delete card.dataset.previewPlaying);
  };
}
