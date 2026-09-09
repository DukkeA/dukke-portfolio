import { SourceIcon } from "../source-icons";
import { ExperienceCounter } from "../experience-counter";
import { profile } from "@/content/profile";
import { ContactButtonLabel } from "../contact-button-label";

export function Hero() {
  return (
    <section
      id={"hero"}
      data-flip-start-trigger={""}
      data-flip-start={"top top"}
      className={"hero"}
    >
      <div className={"hero-sticky"}>
        <div className={"dukke-logo-preload"}>
          <div data-flip-origin={""} className={"dukke-logo-wrap"}>
            <div className={"dukke-logo-ghost-wrap"}>
              <SourceIcon
                name="asset2"
                xmlns={"http://www.w3.org/2000/svg"}
                width={"100%"}
                viewBox={"0 0 1288 338"}
                fill={"none"}
                data-flip-target={""}
                className={"dukke-logo-ghost"}
              />
            </div>
          </div>
          <div className={"hero-navigation-wrap"}>
            <div className={"hero-links-ghost-wrapper"}>
              <div className={"ghost-link-item"}>
                <div data-link-id={"home"} className={"hero-link-ghost"}>
                  {"home"}
                </div>
              </div>
              <div
                data-tl-to={"{'opacity': 0, 'x': '0vw', 'y': '1vw'}"}
                data-tl-type={"scroll"}
                data-tl-trigger={".hero"}
                data-tl-start={"top top"}
                data-tl-end={"5% top"}
                data-tl-from={"{'opacity': 1, 'x': '0vw', 'y': '0vw'}"}
                className={"hero-navigation-sep"}
              ></div>
              <div className={"ghost-link-item"}>
                <div data-link-id={"about-me"} className={"hero-link-ghost"}>
                  {"about me"}
                </div>
              </div>
              <div
                data-tl-to={"{'opacity': 0, 'x': '0vw', 'y': '1vw'}"}
                data-tl-type={"scroll"}
                data-tl-trigger={".hero"}
                data-tl-start={"top top"}
                data-tl-end={"4% top"}
                data-tl-from={"{'opacity': 1, 'x': '0vw', 'y': '0vw'}"}
                className={"hero-navigation-sep"}
              ></div>
              <div className={"ghost-link-item"}>
                <div data-link-id={"projects"} className={"hero-link-ghost"}>
                  {"projects"}
                </div>
              </div>
            </div>
            <div className={"hero-links-ghost-wrapper is-hero-right-nav-item"}>
              <div className={"ghost-link-item"}>
                <div
                  data-link-id={"what-you-get"}
                  className={"hero-link-ghost"}
                >
                  {"what you get"}
                </div>
              </div>
              <div
                data-tl-to={"{'opacity': 0, 'x': '0vw', 'y': '1vw'}"}
                data-tl-type={"scroll"}
                data-tl-trigger={".hero"}
                data-tl-start={"top top"}
                data-tl-end={"3% top"}
                data-tl-from={"{'opacity': 1, 'x': '0vw', 'y': '0vw'}"}
                className={"hero-navigation-sep"}
              ></div>
              <div className={"ghost-link-item"}>
                <div data-link-id={"services"} className={"hero-link-ghost"}>
                  {"services"}
                </div>
              </div>
              <div
                data-tl-to={"{'opacity': 0, 'x': '0vw', 'y': '1vw'}"}
                data-tl-type={"scroll"}
                data-tl-trigger={".hero"}
                data-tl-start={"top top"}
                data-tl-end={"2% top"}
                data-tl-from={"{'opacity': 1, 'x': '0vw', 'y': '0vw'}"}
                className={"hero-navigation-sep"}
              ></div>
              <div className={"ghost-link-item"}>
                <div data-link-id={"references"} className={"hero-link-ghost"}>
                  {"references"}
                </div>
              </div>
              <div
                data-tl-to={"{'opacity': 0, 'x': '0vw', 'y': '1vw'}"}
                data-tl-type={"scroll"}
                data-tl-trigger={".hero"}
                data-tl-start={"top top"}
                data-tl-end={"1% top"}
                data-tl-from={"{'opacity': 1, 'x': '0vw', 'y': '0vw'}"}
                className={"hero-navigation-sep"}
              ></div>
              <div className={"ghost-link-item"}>
                <div data-link-id={"faq"} className={"hero-link-ghost"}>
                  {"faq"}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={"hero-container"}>
          <div className={"hero-content-layout"}>
            <h1 className={"hero-heading z-50"}>
              {profile.fullName}{" "}
              <span className="hero-role">{profile.tagline}</span>
            </h1>
            <div className={"hero-buttons-wrap"}>
              <div
                className={"hero-cta-button contact-button"}
                aria-hidden="true"
              >
                <ContactButtonLabel>Say hello</ContactButtonLabel>
              </div>
              <div className={"hero-button"}>
                <p className={"button-text"}>{"About Me"}</p>
              </div>
            </div>
          </div>
          <p
            className={"hero-right-text"}
            data-tl-trigger={".hero"}
            data-tl-end={"10% top"}
            data-tl-desktop={""}
            data-tl-type={"scroll"}
            data-tl-to={"{ 'y': -32, 'opacity': 0}"}
            data-tl-start={"5% top"}
            data-tl-from={"{ 'y': 0, 'opacity': 1}"}
          >
            With{" "}
            <strong className="hero-experience-inline">
              <ExperienceCounter className="hero-experience-value" /> years
            </strong>{" "}
            of experience, {profile.description}
          </p>
          <div className="hero-mobile-actions">
            <a
              href={profile.callUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-button"
              aria-label="Say hello on WhatsApp"
            >
              <ContactButtonLabel>Say hello</ContactButtonLabel>
            </a>
            <a href="#about">About Me</a>
          </div>
        </div>
        <div className={"mobile-hero-image-wrap"}>
          <img
            src={profile.image}
            loading={"eager"}
            fetchPriority={"high"}
            alt={profile.name}
            className={"mobile-hero-image"}
          />
        </div>
      </div>
    </section>
  );
}
