/** DUKKE glyph outlines derived from the bundled Tr 3 A Bold display font. */
const glyphs = [
  "M0 0H110.706Q172.922 0 207.863 44.307Q242.804 88.613 242.804 168.53Q242.804 243.745 207.506 287.935Q172.209 332.124 112.488 332.124H0ZM69.347 72.16V259.964H111.419Q172.744 259.964 172.744 168.53Q172.744 117.759 157.591 94.96Q142.438 72.16 109.458 72.16Z",
  "M277.744 192.975V0H347.091V198.851Q347.091 231.288 357.877 248.446Q368.662 265.605 390.233 265.605Q433.196 265.605 433.196 198.851V0H502.543V192.975Q502.543 260.669 472.415 299.334Q442.288 338 390.233 338Q338 338 307.872 299.334Q277.744 260.669 277.744 192.975Z",
  "M547.11 332.124V0H616.457V146.2H621.627L700.422 0H782.605L690.974 163.594L784.744 332.124H700.422L621.627 184.748H616.457V332.124Z",
  "M812.732 332.124V0H882.079V146.2H887.249L966.045 0H1048.227L956.596 163.594L1050.366 332.124H966.045L887.249 184.748H882.079V332.124Z",
  "M1147.702 259.024H1288V332.124H1078.355V0H1284.613V73.1H1147.702V128.572H1273.738V201.672H1147.702Z",
] as const;

export const dukkeWordmark = glyphs
  .map((d) => `<path d="${d}" fill="currentColor"/>`)
  .join("");
export const dukkeIntro = glyphs
  .map((d) => `<path class="dukke-logo-letter" d="${d}" fill="currentColor"/>`)
  .join("");
export const dukkeFooter = `<defs><clipPath id="dukke-clip">${glyphs.map((d) => `<path d="${d}"/>`).join("")}</clipPath></defs><g clip-path="url(#dukke-clip)"><rect fill="#FFFF23" height="338" width="1288"/><g id="image-trail-group"></g></g>`;
