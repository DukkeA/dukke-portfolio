// A narrow, same-origin bridge: preserve Archify interactions, pass page scrolling
// and background drags to the surrounding carousel, and pause offscreen motion.
(() => {
  // Archify 2.17's no-chapters stub lacks this query, which the motion governor
  // calls after initialization. There cannot be a playing story in this viewer.
  if (window.Archify?.guidedViews && typeof window.Archify.guidedViews.isPlaying !== "function") {
    window.Archify.guidedViews.isPlaying = () => false;
  }
  // Start live even if a previous viewer stored "still"; the governor continues
  // to respect reduced motion and suspends animation while the slide is hidden.
  window.Archify?.motionGovernor?.setMode("live", { persist: false });
  const origin = window.location.origin;
  document.documentElement.dataset.portfolioExpanded = String(new URLSearchParams(location.search).get("expanded") === "1");
  const send = (payload) => window.parent.postMessage({ channel: "portfolio-diagram", ...payload }, origin);
  const interactive = (target) => target.closest?.('[data-node-id], [data-edge-id], button, input, .focus-chip, .diagram-nav, .node-finder, .semantic-lens, .diagram-guide, .overview-map, .route-probe');
  let releaseMotion = null;
  let drag = null;
  window.addEventListener("message", (event) => {
    if (event.origin !== origin || event.source !== window.parent || event.data?.channel !== "portfolio-diagram") return;
    if (event.data.type === "visibility") {
      if (!event.data.active && !releaseMotion) releaseMotion = window.Archify?.motionGovernor?.suspend("portfolio-hidden");
      if (event.data.active && releaseMotion) { releaseMotion(); releaseMotion = null; }
    }
  });
  document.addEventListener("wheel", (event) => {
    if (event.ctrlKey || event.metaKey || interactive(event.target)) return;
    event.preventDefault();
    send({ type: "scroll", deltaY: event.deltaY * (event.deltaMode === 1 ? 16 : 1), deltaX: event.deltaX });
  }, { passive: false, capture: true });
  document.addEventListener("pointerdown", (event) => {
    if (event.button !== 0 || interactive(event.target) || document.querySelector('.diagram-container.is-pannable')) return;
    drag = { x: event.clientX, y: event.clientY, id: event.pointerId };
    if (event.pointerType === "mouse") event.preventDefault();
    document.documentElement.setPointerCapture(event.pointerId);
  }, true);
  document.addEventListener("pointermove", (event) => {
    const canDrag = !interactive(event.target) && !document.querySelector('.diagram-container.is-pannable');
    send({ type: "cursor", x: event.clientX, y: event.clientY, visible: event.pointerType === "mouse" && (canDrag || !!drag) });
    if (!drag) return;
    const dx = event.clientX - drag.x;
    const dy = event.clientY - drag.y;
    if (Math.abs(dx) > 8 && Math.abs(dx) > Math.abs(dy)) document.documentElement.classList.add("portfolio-dragging");
  });
  const finish = (event) => {
    if (drag) {
      const dx = event.clientX - drag.x;
      const dy = event.clientY - drag.y;
      if (Math.abs(dx) > 55 && Math.abs(dx) > Math.abs(dy)) send({ type: "slide", direction: dx < 0 ? 1 : -1 });
    }
    drag = null;
    document.documentElement.classList.remove("portfolio-dragging");
  };
  document.addEventListener("pointerup", finish);
  document.addEventListener("pointercancel", () => { drag = null; document.documentElement.classList.remove("portfolio-dragging"); });
  document.addEventListener("pointerleave", () => send({ type: "cursor", visible: false }));
  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    const hasSelection = document.querySelector('svg[data-focus-active], svg[data-route-active], svg[data-lens-active], .diagram-guide:not([hidden]), .node-finder:not([hidden])');
    if (!hasSelection) send({ type: "escape" });
  }, true);
  send({ type: "ready" });
})();
