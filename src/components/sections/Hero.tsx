import { SourceIcon } from "../source-icons";
import { CodeIcon } from "../engineering-icons";
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
          <p
            className={"hero-left-text"}
            data-tl-trigger={".hero"}
            data-tl-split={"lines"}
            data-tl-end={"10% top"}
            data-tl-desktop={""}
            data-tl-type={"scroll"}
            data-tl-to={"{ 'y': '-100%'}"}
            data-tl-start={"5% top"}
            data-tl-from={"{ 'y': '0%'}"}
          >
            {profile.tagline}
          </p>
          <div className={"hero-content-layout"}>
            <h1 className={"hero-heading z-50"}>
              {"Software, "}
              <br />
              {"Engineered "}
              <br />
              {"with care."}
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
            data-tl-split={"lines"}
            data-tl-end={"10% top"}
            data-tl-desktop={""}
            data-tl-type={"scroll"}
            data-tl-to={"{ 'y': '-100%'}"}
            data-tl-start={"5% top"}
            data-tl-from={"{ 'y': '0%'}"}
          >
            {profile.description}
          </p>
          <div className={"hero-cards-wrap"}>
            <div className={"hero-cards-left"}>
              <div className={"hero-card-2-wrap"}>
                <div data-flip-id={"hero-card-2"} className={"hero-card-2"}>
                  <div className={"hero-card-2-bg"}></div>
                  <div className={"hero-webflow-icon-wrap"}>
                    <CodeIcon
                      xmlns={"http://www.w3.org/2000/svg"}
                      width={"100%"}
                      viewBox={"0 0 91 57"}
                      fill={"none"}
                      data-flip-id={"icon"}
                      className={"hero-webflow-icon"}
                    />
                  </div>
                  <div className={"hero-c-projects-text-wrap"}>
                    <p
                      id={"projects_start_text"}
                      data-flip-id={"hero-card-2-text"}
                      className={"hero-webflow-projects-text"}
                    >
                      {"Full-stack"}
                      <br />
                      {"development"}
                    </p>
                  </div>
                </div>
              </div>
              <div className={"hero-card-1-wrap"}>
                <div className={"hero-card-1"}>
                  <div className={"experience-bg"}></div>
                  <div className={"experience-number-wrap"}>
                    <ExperienceCounter
                      xmlns={"http://www.w3.org/2000/svg"}
                      width={"100%"}
                      viewBox={"0 0 41 28"}
                      fill={"none"}
                      className={"experience-number"}
                    />
                  </div>
                  <div className={"experience-text-wrap"}>
                    <p
                      id={"yrs_small_text_start"}
                      className={"experience-text"}
                    >
                      {"Years of"}
                      <br />
                      {"experience"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-tl-desktop={""}
              data-tl-type={"scroll"}
              data-tl-trigger={".hero"}
              data-tl-start={"5% top"}
              data-tl-end={"20% top"}
              data-tl-from={
                "{'scale': 1, 'opacity': 1, 'x': '0vw', 'y': '0vw'}"
              }
              data-tl-to={
                "{'scale': 0.3, 'opacity': 0, 'x': '-25vw', 'y': '-5vw'}"
              }
              className={"hero-card-3"}
            >
              <div className={"hero-card-3-item"}>
                <SourceIcon
                  name="asset24"
                  xmlns={"http://www.w3.org/2000/svg"}
                  width={"100%"}
                  viewBox={"0 0 19 19"}
                  fill={"none"}
                  className={"hero-card-3-icon"}
                />
                <p>{"Creative"}</p>
              </div>
              <div className={"hero-card-3-item"}>
                <SourceIcon
                  name="asset25"
                  xmlns={"http://www.w3.org/2000/svg"}
                  width={"100%"}
                  viewBox={"0 0 19 19"}
                  fill={"none"}
                  className={"hero-card-3-icon"}
                />
                <p>{"Reliable"}</p>
              </div>
              <div className={"hero-card-3-item"}>
                <SourceIcon
                  name="asset26"
                  xmlns={"http://www.w3.org/2000/svg"}
                  width={"100%"}
                  viewBox={"0 0 19 19"}
                  fill={"none"}
                  className={"hero-card-3-icon"}
                />
                <p>{"Thoughtful"}</p>
              </div>
              <div className={"hero-card-3-item"}>
                <SourceIcon
                  name="asset27"
                  xmlns={"http://www.w3.org/2000/svg"}
                  width={"100%"}
                  viewBox={"0 0 19 22"}
                  fill={"none"}
                  className={"hero-card-3-icon"}
                />
                <p>{"Builder"}</p>
              </div>
              <div className={"hero-card-3-item"}>
                <SourceIcon
                  name="asset28"
                  xmlns={"http://www.w3.org/2000/svg"}
                  width={"100%"}
                  viewBox={"0 0 18 18"}
                  fill={"none"}
                  className={"hero-card-3-icon"}
                />
                <p>{"Learning"}</p>
              </div>
            </div>
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
