import { SourceIcon } from "../source-icons";
import { ProfileLinks } from "../profile-links";
import { profile } from "@/content/profile";
import { SidebarLogos } from "../sidebar-logos";
import { ContactButtonLabel } from "../contact-button-label";

export function Navigation() {
  return (
    <header
      data-tl-desktop={""}
      data-tl-type={"trigger"}
      data-tl-trigger={".hero"}
      data-tl-start={"53% top"}
      data-tl-from={"{'zIndex': 2}"}
      data-tl-to={"{'zIndex': 100, 'duration': 0.1}"}
      className={"navigation"}
    >
      <div className={"nav-container"}>
        <div
          data-tl-desktop={""}
          data-tl-type={"trigger"}
          data-tl-trigger={".hero"}
          data-tl-start={"top 70%"}
          className={"profile-img-wrap"}
        >
          <div className={"profile-img-item"}>
            <img
              className={"hero-profile-img"}
              src={profile.image}
              data-tl-trigger={".hero"}
              alt={profile.name}
              data-tl-end={"70% top"}
              data-tl-desktop={""}
              data-tl-type={"scroll"}
              data-tl-to={"{'filter': 'blur(90px)', 'opacity': 0.3}"}
              data-tl-start={"top top"}
              sizes={"100vw"}
              loading={"eager"}
              data-tl-from={"{'filter': 'blur(0px)', 'opacity': 1}"}
              fetchPriority={"high"}
            />
          </div>
        </div>
        <div
          id={"w-node-_5e7c5502-ddba-215f-98c3-2549ffbe61a2-be2d4114"}
          className={"nav-top-layout"}
        >
          <div
            data-tl-desktop={""}
            data-tl-type={"scroll"}
            data-tl-trigger={".hero"}
            data-tl-start={"35% top"}
            data-tl-end={"39% top"}
            data-tl-from={"{'scale' : 0.5, 'opacity' : 0}"}
            data-tl-to={"{'scale' : 1, 'opacity' : 1}"}
            className={"nav-top-bg"}
          ></div>
          <div className={"nav-top-item"}>
            <div
              data-tl-desktop={""}
              data-tl-type={"scroll"}
              data-tl-trigger={".hero"}
              data-tl-start={"42% top"}
              data-tl-end={"44% top"}
              data-tl-from={
                "{'color' : '#ffff23', 'backgroundColor': 'transparent'}"
              }
              data-tl-to={"{'color' : '#000', 'backgroundColor': '#ffff23'}"}
              className={"nav-logo"}
            >
              <div className={"nav-logo-item"}>
                <div
                  data-flip-trigger={".hero"}
                  data-flip-start={"top top"}
                  data-flip-end={"44% top"}
                  className={"dukke-logo"}
                >
                  <SourceIcon
                    name="asset2"
                    xmlns={"http://www.w3.org/2000/svg"}
                    width={"100%"}
                    viewBox={"0 0 1288 338"}
                    fill={"none"}
                    className={"dukke-logo-svg"}
                  />
                </div>
              </div>
            </div>
            <div className={"social-wrap"}>
              <a
                className={"social-link w-inline-block"}
                data-tl-trigger={".hero"}
                data-tl-end={"46% top"}
                href={profile.socials.github}
                data-tl-type={"scroll"}
                data-tl-to={"{'scale' : 1, 'opacity' : 1}"}
                aria-label={"GitHub"}
                data-tl-start={"44% top"}
                target={"_blank"}
                data-tl-from={"{'scale' : 0.3, 'opacity' : 0}"}
                rel={"noopener noreferrer"}
              >
                <SourceIcon
                  name="github"
                  viewBox="0 0 496 512"
                  fill="none"
                  aria-hidden="true"
                  className="instagram"
                />
              </a>
              <a
                className={"social-link w-inline-block"}
                data-tl-trigger={".hero"}
                data-tl-end={"48% top"}
                href={profile.socials.linkedin}
                data-tl-type={"scroll"}
                data-tl-to={"{'scale' : 1, 'opacity' : 1}"}
                aria-label={"linkedin"}
                data-tl-start={"46% top"}
                target={"_blank"}
                data-tl-from={"{'scale' : 0.3, 'opacity' : 0}"}
                rel={"noopener noreferrer"}
              >
                <SourceIcon
                  name="asset5"
                  xmlns={"http://www.w3.org/2000/svg"}
                  width={"100%"}
                  viewBox={"0 0 15 15"}
                  fill={"none"}
                  className={"instagram"}
                />
              </a>
              <a
                className="social-link w-inline-block shrink-0"
                data-tl-trigger=".hero"
                data-tl-start="48% top"
                data-tl-end="50% top"
                data-tl-type="scroll"
                data-tl-from="{'scale' : 0.3, 'opacity' : 0}"
                data-tl-to="{'scale' : 1, 'opacity' : 1}"
                href={profile.cv.path}
                target="_blank"
                rel="noopener noreferrer"
                type="application/pdf"
                aria-label="CV (PDF, opens in a new tab)"
                title="View CV (PDF)"
              >
                <span
                  aria-hidden="true"
                  className="social-bg-path font-display text-[0.85vw] font-bold leading-none"
                >
                  CV
                </span>
              </a>
            </div>
            <div className={"mobile-menu-wrap"}>
              <a
                href={profile.callUrl}
                target={"_blank"}
                className={"nav-button-mobile contact-button w-button"}
                aria-label="Say Hi! on WhatsApp"
                rel={"noopener noreferrer"}
              >
                <ContactButtonLabel>Say Hi!</ContactButtonLabel>
              </a>
              <div
                className={"mobile-menu"}
                role={"button"}
                tabIndex={0}
                aria-label={"Toggle navigation"}
                aria-controls="mobile-navigation"
                aria-expanded={"false"}
              >
                <div className={"mobile-menu-icons"}>
                  <SourceIcon
                    name="asset6"
                    xmlns={"http://www.w3.org/2000/svg"}
                    width={"100%"}
                    viewBox={"0 0 16 7"}
                    fill={"none"}
                    className={"mobile-menu-icon"}
                  />
                </div>
                <div className={"mobile-menu-icons"}>
                  <SourceIcon
                    name="asset6"
                    xmlns={"http://www.w3.org/2000/svg"}
                    width={"100%"}
                    viewBox={"0 0 16 7"}
                    fill={"none"}
                    className={"mobile-menu-icon"}
                  />
                </div>
              </div>
            </div>
          </div>
          <p
            data-tl-to={"{ 'y': '0%'}"}
            data-tl-type={"scroll"}
            data-tl-trigger={".hero"}
            data-tl-start={"38% top"}
            data-tl-end={"42% top"}
            data-tl-split={"lines"}
            data-tl-from={"{ 'y': '100%'}"}
            className={"nav-top-text"}
          >
            {profile.description}
          </p>
        </div>
        <div id="mobile-navigation" className={"nav-menu-wrap"}>
          <nav className={"nav-menu"}>
            <div
              data-flip-end={"30% top"}
              data-flip-trigger={".hero"}
              data-flip-start={"7% top"}
              className={"nav-menu-item"}
            >
              <a
                className={"nav-link w-inline-block"}
                data-tl-trigger={".hero"}
                data-tl-desktop={""}
                href={"#hero"}
                data-tl-type={"trigger"}
                data-tl-to={"{'scale': 1}"}
                aria-label={"hero"}
                data-tl-start={"50% top"}
                data-tl-from={"{'scale': 0}"}
              ></a>
              <div
                data-tl-desktop={""}
                data-tl-type={"scroll"}
                data-tl-trigger={".hero"}
                data-tl-start={"28% top"}
                data-tl-end={"30% top"}
                data-tl-from={"{'scale' : 0.5, 'opacity' : 0}"}
                data-tl-to={"{'scale' : 1, 'opacity' : 1}"}
                className={"nav-item-bg"}
              ></div>
              <SourceIcon
                name="asset9"
                xmlns={"http://www.w3.org/2000/svg"}
                width={"100%"}
                viewBox={"0 0 16 16"}
                fill={"none"}
                data-tl-type={"scroll"}
                data-tl-trigger={".hero"}
                data-tl-start={"29% top"}
                data-tl-end={"31% top"}
                data-tl-from={"{'scale' : 0.2, 'opacity' : 0}"}
                data-tl-to={"{'scale' : 1, 'opacity' : 1}"}
                data-tl-desktop={""}
                className={"nav-item-icon"}
              />
              <a
                data-link-id={"home"}
                href={"#hero"}
                className={"hero-navigation-link"}
              >
                {"Home"}
              </a>
            </div>
            <div
              data-flip-end={"31% top"}
              data-flip-trigger={".hero"}
              data-flip-start={"6% top"}
              className={"nav-menu-item"}
            >
              <a
                className={"nav-link w-inline-block"}
                data-tl-trigger={".hero"}
                data-tl-desktop={""}
                href={"#about"}
                data-tl-type={"trigger"}
                data-tl-to={"{'scale': 1}"}
                aria-label={"about"}
                data-tl-start={"50% top"}
                data-tl-from={"{'scale': 0}"}
              ></a>
              <a
                data-button-hover={""}
                data-link-id={"about-me"}
                href={"#about"}
                className={"hero-navigation-link"}
              >
                {"About me"}
              </a>
              <SourceIcon
                name="asset10"
                xmlns={"http://www.w3.org/2000/svg"}
                width={"100%"}
                viewBox={"0 0 16 16"}
                fill={"none"}
                data-tl-type={"scroll"}
                data-tl-trigger={".hero"}
                data-tl-start={"30% top"}
                data-tl-end={"32% top"}
                data-tl-from={"{'scale' : 0.2, 'opacity' : 0}"}
                data-tl-to={"{'scale' : 1, 'opacity' : 1}"}
                data-tl-desktop={""}
                className={"nav-item-icon"}
              />
              <div
                data-tl-desktop={""}
                data-tl-type={"scroll"}
                data-tl-trigger={".hero"}
                data-tl-start={"29% top"}
                data-tl-end={"31% top"}
                data-tl-from={"{'scale' : 0.5, 'opacity' : 0}"}
                data-tl-to={"{'scale' : 1, 'opacity' : 1}"}
                className={"nav-item-bg"}
              ></div>
            </div>
            <div
              data-flip-end={"32% top"}
              data-flip-trigger={".hero"}
              data-flip-start={"4% top"}
              className={"nav-menu-item"}
            >
              <a
                className={"nav-link w-inline-block"}
                data-tl-trigger={".hero"}
                data-tl-desktop={""}
                href={"#projects"}
                data-tl-type={"trigger"}
                data-tl-to={"{'scale': 1}"}
                aria-label={"projects"}
                data-tl-start={"50% top"}
                data-tl-from={"{'scale': 0}"}
              ></a>
              <a
                data-button-hover={""}
                data-link-id={"projects"}
                href={"#projects"}
                className={"hero-navigation-link"}
              >
                {"projects"}
              </a>
              <SourceIcon
                name="asset11"
                xmlns={"http://www.w3.org/2000/svg"}
                width={"100%"}
                viewBox={"0 0 16 16"}
                fill={"none"}
                data-tl-type={"scroll"}
                data-tl-trigger={".hero"}
                data-tl-start={"31% top"}
                data-tl-end={"33% top"}
                data-tl-from={"{'scale' : 0.2, 'opacity' : 0}"}
                data-tl-to={"{'scale' : 1, 'opacity' : 1}"}
                data-tl-desktop={""}
                className={"nav-item-icon"}
              />
              <div
                data-tl-desktop={""}
                data-tl-type={"scroll"}
                data-tl-trigger={".hero"}
                data-tl-start={"30% top"}
                data-tl-end={"32% top"}
                data-tl-from={"{'scale' : 0.5, 'opacity' : 0}"}
                data-tl-to={"{'scale' : 1, 'opacity' : 1}"}
                className={"nav-item-bg"}
              ></div>
            </div>
            <div
              data-flip-end={"33% top"}
              data-flip-trigger={".hero"}
              data-flip-start={"5% top"}
              className={"nav-menu-item"}
            >
              <a
                className={"nav-link w-inline-block"}
                data-tl-trigger={".hero"}
                data-tl-desktop={""}
                href={"#overview"}
                data-tl-type={"trigger"}
                data-tl-to={"{'scale': 1}"}
                aria-label={"what you get"}
                data-tl-start={"50% top"}
                data-tl-from={"{'scale': 0}"}
              ></a>
              <SourceIcon
                name="asset12"
                xmlns={"http://www.w3.org/2000/svg"}
                width={"100%"}
                viewBox={"0 0 16 16"}
                fill={"none"}
                data-tl-type={"scroll"}
                data-tl-trigger={".hero"}
                data-tl-start={"32% top"}
                data-tl-end={"34% top"}
                data-tl-from={"{'scale' : 0.2, 'opacity' : 0}"}
                data-tl-to={"{'scale' : 1, 'opacity' : 1}"}
                data-tl-desktop={""}
                className={"nav-item-icon"}
              />
              <a
                data-button-hover={""}
                data-link-id={"what-you-get"}
                href={"#overview"}
                className={"hero-navigation-link"}
              >
                {"What you get"}
              </a>
              <div
                data-tl-desktop={""}
                data-tl-type={"scroll"}
                data-tl-trigger={".hero"}
                data-tl-start={"31% top"}
                data-tl-end={"33% top"}
                data-tl-from={"{'scale' : 0.5, 'opacity' : 0}"}
                data-tl-to={"{'scale' : 1, 'opacity' : 1}"}
                className={"nav-item-bg"}
              ></div>
            </div>
            <div
              data-flip-end={"34% top"}
              data-flip-trigger={".hero"}
              data-flip-start={"3% top"}
              className={"nav-menu-item"}
            >
              <a
                className={"nav-link w-inline-block"}
                data-tl-trigger={".hero"}
                data-tl-desktop={""}
                href={"#services"}
                data-tl-type={"trigger"}
                data-tl-to={"{'scale': 1}"}
                aria-label={"services"}
                data-tl-start={"50% top"}
                data-tl-from={"{'scale': 0}"}
              ></a>
              <a
                data-button-hover={""}
                data-link-id={"services"}
                href={"#services"}
                className={"hero-navigation-link"}
              >
                {"Services"}
              </a>
              <SourceIcon
                name="asset13"
                xmlns={"http://www.w3.org/2000/svg"}
                width={"100%"}
                viewBox={"0 0 10 16"}
                fill={"none"}
                data-tl-type={"scroll"}
                data-tl-trigger={".hero"}
                data-tl-start={"33% top"}
                data-tl-end={"35% top"}
                data-tl-from={"{'scale' : 0.2, 'opacity' : 0}"}
                data-tl-to={"{'scale' : 1, 'opacity' : 1}"}
                data-tl-desktop={""}
                className={"nav-item-icon services-icon"}
              />
              <div
                data-tl-desktop={""}
                data-tl-type={"scroll"}
                data-tl-trigger={".hero"}
                data-tl-start={"32% top"}
                data-tl-end={"34% top"}
                data-tl-from={"{'scale' : 0.5, 'opacity' : 0}"}
                data-tl-to={"{'scale' : 1, 'opacity' : 1}"}
                className={"nav-item-bg"}
              ></div>
            </div>
            <div
              data-flip-end={"35% top"}
              data-flip-trigger={".hero"}
              data-flip-start={"2% top"}
              className={"nav-menu-item"}
            >
              <a
                className={"nav-link w-inline-block"}
                data-tl-trigger={".hero"}
                data-tl-desktop={""}
                href={"#testimonial"}
                data-tl-type={"trigger"}
                data-tl-to={"{'scale': 1}"}
                aria-label={"references"}
                data-tl-start={"50% top"}
                data-tl-from={"{'scale': 0}"}
              ></a>
              <a
                data-button-hover={""}
                data-link-id={"references"}
                href={"#testimonial"}
                className={"hero-navigation-link"}
              >
                {"references"}
              </a>
              <SourceIcon
                name="asset14"
                xmlns={"http://www.w3.org/2000/svg"}
                width={"100%"}
                viewBox={"0 0 16 17"}
                fill={"none"}
                data-tl-type={"scroll"}
                data-tl-trigger={".hero"}
                data-tl-start={"34% top"}
                data-tl-end={"36% top"}
                data-tl-from={"{'scale' : 0.2, 'opacity' : 0}"}
                data-tl-to={"{'scale' : 1, 'opacity' : 1}"}
                data-tl-desktop={""}
                className={"nav-item-icon"}
              />
              <div
                data-tl-desktop={""}
                data-tl-type={"scroll"}
                data-tl-trigger={".hero"}
                data-tl-start={"33% top"}
                data-tl-end={"35% top"}
                data-tl-from={"{'scale' : 0.5, 'opacity' : 0}"}
                data-tl-to={"{'scale' : 1, 'opacity' : 1}"}
                className={"nav-item-bg"}
              ></div>
            </div>
            <div
              data-flip-end={"36% top"}
              data-flip-trigger={".hero"}
              data-flip-start={"1% top"}
              className={"nav-menu-item"}
            >
              <a
                className={"nav-link w-inline-block"}
                data-tl-trigger={".hero"}
                data-tl-desktop={""}
                href={"#faq"}
                data-tl-type={"trigger"}
                data-tl-to={"{'scale': 1}"}
                aria-label={"faq"}
                data-tl-start={"50% top"}
                data-tl-from={"{'scale': 0}"}
              ></a>
              <a
                data-button-hover={""}
                data-link-id={"faq"}
                href={"#faq"}
                className={"hero-navigation-link"}
              >
                {"Faq"}
              </a>
              <SourceIcon
                name="asset15"
                xmlns={"http://www.w3.org/2000/svg"}
                width={"100%"}
                viewBox={"0 0 16 16"}
                fill={"none"}
                data-tl-type={"scroll"}
                data-tl-trigger={".hero"}
                data-tl-start={"35% top"}
                data-tl-end={"37% top"}
                data-tl-from={"{'scale' : 0.2, 'opacity' : 0}"}
                data-tl-to={"{'scale' : 1, 'opacity' : 1}"}
                data-tl-desktop={""}
                className={"nav-item-icon"}
              />
              <div
                data-tl-desktop={""}
                data-tl-type={"scroll"}
                data-tl-trigger={".hero"}
                data-tl-start={"34% top"}
                data-tl-end={"36% top"}
                data-tl-from={"{'scale' : 0.5, 'opacity' : 0}"}
                data-tl-to={"{'scale' : 1, 'opacity' : 1}"}
                className={"nav-item-bg"}
              ></div>
            </div>
            <div
              data-tl-desktop={""}
              data-tl-type={"scroll"}
              data-tl-trigger={".hero"}
              data-tl-start={"31% top"}
              data-tl-end={"35% top"}
              data-tl-from={"{'scale' : 0.5, 'opacity' : 0}"}
              data-tl-to={"{'scale' : 1, 'opacity' : 1}"}
              className={"nav-menu-bg"}
            ></div>
          </nav>
          <ProfileLinks className="mobile-profile-links" />
          <div
            data-tl-desktop={""}
            data-tl-type={"scroll"}
            data-tl-trigger={".hero"}
            data-tl-start={"30% top"}
            data-tl-end={"35% top"}
            data-tl-from={"{'opacity' : 0}"}
            data-tl-to={"{ 'opacity' : 1}"}
            className={"nav-comapny-wrap"}
            role="group"
            aria-label="Companies and tools I work with"
          >
            <SidebarLogos />
          </div>
          <div
            data-tl-desktop={""}
            data-tl-type={"scroll"}
            data-tl-trigger={".hero"}
            data-tl-start={"33% top"}
            data-tl-end={"38% top"}
            data-tl-from={"{'opacity' : 0}"}
            data-tl-to={"{'opacity' : 1}"}
            className={"nav-email-wrap"}
          >
            <div
              className={"nav-email-item"}
              role={"button"}
              tabIndex={0}
              aria-label={"Copy email address"}
            >
              <p className={"email-text"}>{profile.email}</p>
              <div className={"clipboard-item"}>
                <SourceIcon
                  name="asset22"
                  xmlns={"http://www.w3.org/2000/svg"}
                  width={"100%"}
                  viewBox={"0 0 14 14"}
                  fill={"none"}
                  className={"clipboard-icon"}
                />
                <p>{"Copy to clipboard"}</p>
              </div>
              <div className={"clipboard-wrap"}>
                <SourceIcon
                  name="asset23"
                  xmlns={"http://www.w3.org/2000/svg"}
                  width={"100%"}
                  viewBox={"0 0 13 13"}
                  fill={"none"}
                  className={"copy-email-icon"}
                />
              </div>
            </div>
          </div>
          <div
            data-flip-end={"35% top"}
            data-flip-target={".hero"}
            data-flip-start={"5% top"}
            className={"nav-button-wrap"}
          >
            <a
              data-button-hover={""}
              href={profile.callUrl}
              target={"_blank"}
              className={"nav-button contact-button w-inline-block"}
              aria-label="Say Hi! on WhatsApp"
              rel={"noopener noreferrer"}
            >
              <ContactButtonLabel>Say Hi!</ContactButtonLabel>
            </a>
            <a
              data-button-hover={""}
              href={"#about"}
              className={"nav-button-secondary w-inline-block"}
            >
              <p className={"button-text"}>{"About Me"}</p>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
