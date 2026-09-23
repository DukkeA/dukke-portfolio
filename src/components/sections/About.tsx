import { journey, type JourneyEntry } from "@/content/journey";
import { profile } from "@/content/profile";
import { ArrowUpRightIcon } from "@phosphor-icons/react/dist/ssr/ArrowUpRight";
import { CodeIcon } from "../engineering-icons";
import { SourceIcon } from "../source-icons";

const qualities = {
  "a-hobby": {
    title: "Creative",
    text: "Trying ideas. Finding my own way.",
    icon: "asset24",
    side: "right",
    position: "60%",
  },
  prevalentware: {
    title: "Reliable",
    text: "Following through, together.",
    icon: "asset25",
    side: "left",
    position: "15%",
  },
  "g6-networks": {
    title: "Builder",
    text: "Connecting the pieces. Making things work.",
    icon: "asset27",
    side: "right",
    position: "55%",
  },
  masters: {
    title: "Thoughtful",
    text: "Understanding the why behind the how.",
    icon: "asset26",
    side: "left",
    position: "15%",
  },
  "still-learning": {
    title: "Learning",
    text: "One more question. Something new to try.",
    icon: "asset28",
    side: "left",
    position: "35%",
  },
} as const;

type JourneyQuality = (typeof qualities)[keyof typeof qualities];

function JourneyQuality({ quality }: { quality: JourneyQuality }) {
  return (
    <aside
      className="journey-quality"
      data-side={quality.side}
      style={{ top: quality.position }}
      aria-label={`${quality.title}: how I work`}
    >
      <span className="journey-quality-line" aria-hidden="true" />
      <div className="journey-quality-content">
        <SourceIcon
          name={quality.icon}
          viewBox={quality.icon === "asset27" ? "0 0 19 22" : "0 0 19 19"}
          className="journey-quality-icon"
          aria-hidden="true"
        />
        <h4 className="journey-quality-title">{quality.title}</h4>
        <p>{quality.text}</p>
      </div>
    </aside>
  );
}

const starts = [
  "-38% top",
  "-25% top",
  "-13% top",
  "2% top",
  "16% top",
  "30% top",
  "49% top",
  "65% top",
];
const anchors = [
  [1111, 6.5],
  [186, 341.5],
  [105, 739.5],
  [998, 1092.5],
  [582, 1482.5],
  [59, 1766.5],
  [458, 2129.5],
  [1080, 2530],
];

function entrance(index: number, delay = 0.3, split = false) {
  return {
    "data-tl-desktop": "",
    "data-tl-type": "trigger",
    "data-tl-trigger": ".about-card-container",
    "data-tl-start": starts[index],
    ...(split ? { "data-tl-split": "lines" } : {}),
    "data-tl-from": split
      ? "{'yPercent':100}"
      : "{'y':'10%','opacity':0,'scale':0.8}",
    "data-tl-to": JSON.stringify(
      split
        ? { yPercent: 0, duration: 0.6, stagger: 0.08, delay, ease: "expo.out" }
        : {
            y: "0%",
            opacity: 1,
            scale: 1,
            duration: 1.1,
            delay,
            ease: "expo.out",
          },
    ),
  };
}

function JourneyImage({
  entry,
  expanded = false,
}: {
  entry: JourneyEntry;
  expanded?: boolean;
}) {
  if (!entry.image && !entry.symbol) return null;

  return (
    <div className={`journey-image ${expanded ? "text-white" : "text-black"}`}>
      {entry.image ? (
        <img
          src={entry.image}
          alt={entry.imageAlt}
          loading="lazy"
          className={`h-full w-full object-contain ${entry.whiteLogo && !expanded ? "invert" : ""} ${!entry.whiteLogo && expanded ? "brightness-0 invert" : ""}`}
        />
      ) : (
        <CodeIcon className="h-9 w-12" />
      )}
    </div>
  );
}

function JourneyPoint({ index }: { index: number }) {
  return (
    <div className="about-card-point-wrap" aria-hidden="true">
      <div className="about-card-point-line-wrap">
        <div
          {...entrance(index, 0.2)}
          data-tl-from="{'clipPath':'inset(100% 0% 0% 0%)'}"
          data-tl-to="{'clipPath':'inset(0% 0% 0% 0%)','duration':1.5,'delay':0.2,'ease':'expo.out'}"
          className="about-card-point-line"
        />
      </div>
      <div className="about-card-point-circle" />
    </div>
  );
}

function JourneyCard({ entry, index }: { entry: JourneyEntry; index: number }) {
  const fromRight = index === 0 || index === 3 || index === 7;
  const headingId = `journey-${entry.id}-title`;
  const quality = qualities[entry.id as keyof typeof qualities];
  return (
    <article
      id={`journey-${entry.id}`}
      data-desktop=""
      data-connect={index > 0 ? `step-${index + 1}` : undefined}
      data-origin={
        index > 0 ? `bottom ${fromRight ? "right" : "left"}` : undefined
      }
      className={`about-card-wrap ac-${index + 1}${quality ? " journey-with-quality" : ""}`}
      aria-labelledby={headingId}
    >
      {!fromRight && <JourneyPoint index={index} />}
      <div {...entrance(index)} className="about-card">
        <p
          className={`about-card-year ${entry.year ? "" : "journey-card-phase"}`}
        >
          {entry.year ? (
            <>
              {"’"}
              <span
                data-tl-desktop=""
                data-number-count={entry.year.slice(2)}
                data-tl-trigger=".about-card-container"
                data-tl-start={starts[index]}
                data-tl-to="{'duration':1.5,'stagger':0.1,'delay':0.2,'ease':'expo.out'}"
              >
                {entry.year.slice(2)}
              </span>
            </>
          ) : (
            entry.phase
          )}
        </p>
        <h3
          {...entrance(index, 0.3, true)}
          id={headingId}
          className="about-card-heading"
        >
          {entry.title}
        </h3>
        <p {...entrance(index, 0.4, true)} className="op80">
          {entry.summary}
        </p>
        <div className="about-card-bottom-layout journey-card-bottom">
          {(entry.image || entry.symbol) && (
            <div className="about-card-bottom-layout-left">
              <div {...entrance(index, 0.45)} className="about-card-img-wrap">
                <JourneyImage entry={entry} />
              </div>
            </div>
          )}
          <button
            {...entrance(index, 0.6)}
            type="button"
            className="about-card-button"
            aria-label={`Read more: ${entry.title}`}
            aria-controls={`story-${entry.id}`}
            aria-expanded="false"
          >
            Read more
          </button>
          <div
            id={`story-${entry.id}`}
            className="popup-card-wrap"
            aria-hidden="true"
          >
            <div className="popup-card-item">
              <div className="popup-card" data-lenis-prevent="">
                <div className="popup-card-top-item">
                  <span className={entry.year ? "" : "journey-popup-phase"}>
                    {entry.year || entry.phase}
                  </span>
                  <button
                    className="popup-close"
                    type="button"
                    aria-label="Close story"
                  >
                    <span className="popup-close-icon">
                      <span className="popup-close-path-1" />
                      <span className="popup-close-path-2" />
                    </span>
                  </button>
                </div>
                <div className="popup-card-bottom-item pt-6">
                  <div className="about-card-img-wrap">
                    <JourneyImage entry={entry} expanded />
                    <h4 className="popup-heading">{entry.title}</h4>
                    <p>{entry.story}</p>
                    <ul className="journey-tags" aria-label="Topics">
                      {entry.tags.map((tag) => (
                        <li key={tag}>{tag}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {fromRight && <JourneyPoint index={index} />}
      {quality && <JourneyQuality quality={quality} />}
    </article>
  );
}

function JourneyTimeline() {
  return (
    <div className="about-timeline-wrap" aria-hidden="true">
      <div
        data-tl-desktop=""
        data-tl-type="scroll"
        data-tl-trigger=".about-card-container"
        data-tl-start="top 90%"
        data-tl-end="bottom 80%"
        data-tl-from="{'height':'0%'}"
        data-tl-to="{'height':'100%','ease':'none'}"
        className="about-timeline-overflow"
      >
        <svg
          className="about-timeline"
          viewBox="0 0 1118 2580"
          preserveAspectRatio="none"
          fill="none"
        >
          <SourceIcon
            name="asset29"
            width="1118"
            height="2166"
            viewBox="0 0 1118 2166"
          />
          <path
            d="M490 2138C525 2147 560 2155 597 2164C820 2220 1100 2320 1080 2530"
            stroke="currentColor"
            strokeWidth="2.17"
          />
          <path
            d="m1080 2530-2 28"
            stroke="currentColor"
            strokeWidth="2.17"
            strokeDasharray="6 6"
          />
        </svg>
      </div>
      <svg
        className="about-timeline-position"
        viewBox="0 0 1118 2580"
        preserveAspectRatio="none"
        fill="none"
      >
        {anchors.map(([cx, cy], index) => (
          <circle
            key={index}
            cx={cx}
            cy={cy}
            r="5.5"
            fill="#ffff23"
            stroke="currentColor"
            strokeWidth="2"
            data-connect={`step-${index + 1}`}
            {...entrance(index, 0.2)}
            data-tl-from="{'opacity':0}"
            data-tl-to="{'opacity':1,'duration':0.6}"
          />
        ))}
      </svg>
    </div>
  );
}

export function About() {
  const headingEntrance = {
    "data-tl-type": "trigger",
    "data-tl-trigger": ".about-section",
    "data-tl-start": "top 90%",
    "data-tl-split": "lines",
    "data-tl-from": "{'yPercent':100}",
    "data-tl-to":
      "{'yPercent':0,'duration':0.6,'stagger':0.1,'delay':0.3,'ease':'power2.out'}",
  };
  return (
    <section id="about" className="about-section">
      <div className="content-container">
        <div className="column">
          <div className="label">A little about me</div>
          <h2 {...headingEntrance} className="h2-style margin-bottom-s">
            About Me (&)
            <br />
            My Journey
          </h2>
          <p {...headingEntrance} className="max-width-389">
            I’m Andrés David Duque Cadena, though most know me as Andrés or
            Dukke. I build software, enjoy figuring things out, and keep finding
            new things to learn. Here’s how I got here.
          </p>
          <a
            href={profile.cv.path}
            target="_blank"
            rel="noopener noreferrer"
            type="application/pdf"
            aria-label="View CV in English (PDF, opens in a new tab)"
            className="mt-5 inline-flex w-fit items-center gap-2 py-2 text-sm underline decoration-black/40 underline-offset-4 transition-colors hover:decoration-black"
          >
            View CV <span className="text-black/60">(PDF)</span>
            <ArrowUpRightIcon size={16} aria-hidden="true" />
          </a>
        </div>
        <div className="about-wrap">
          <JourneyCard entry={journey[0]} index={0} />
          <div className="about-card-container">
            {journey.slice(1).map((entry, index) => (
              <JourneyCard key={entry.id} entry={entry} index={index + 1} />
            ))}
            <JourneyTimeline />
          </div>
        </div>
      </div>
    </section>
  );
}
