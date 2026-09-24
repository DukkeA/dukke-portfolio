import { ArchitectureCarousel } from "../architecture-carousel";
import { architectureSlides } from "@/content/architecture";

export function Architecture() {
  return (
    <section
      id="architecture"
      data-theme="dark"
      className="architecture-section"
      aria-labelledby="architecture-heading"
    >
      <div className="architecture-intro">
        <div className="column">
          <div className="label is-secondary">Software architecture</div>
          <h2
            id="architecture-heading"
            className="h2-style-white"
            data-tl-once=""
            data-tl-type="trigger"
            data-tl-trigger="#architecture"
            data-tl-start="top 80%"
            data-tl-split="lines"
            data-tl-from="{'yPercent':100}"
            data-tl-to="{'yPercent':0,'duration':0.6,'stagger':0.1,'ease':'power2.out'}"
          >
            Designed to fit
            <br />
            the problem.
          </h2>
        </div>
        <p className="m-0 max-w-[40ch] text-[clamp(1rem,1.25vw,1.4rem)] leading-relaxed text-white/70">
          I help turn product needs into system boundaries, data flows, and
          deployment decisions. Choosing the right structure also means knowing
          what to keep simple.
        </p>
      </div>
      <ArchitectureCarousel slides={architectureSlides} />
    </section>
  );
}
