import { SourceIcon } from "../source-icons";
import { FaqGroup, FaqItem } from "../faq-item";
import { ProfileLinks } from "../profile-links";
import { ContactButtonLabel } from "../contact-button-label";
import { profile } from "@/content/profile";

export function Footer() {
  return (
    <footer className={"footer"}>
      <div className={"content-container"}>
        <div className={"footer-logo"}>
          <div className={"w-embed"}>
            <SourceIcon
              name="asset45"
              xmlns={"http://www.w3.org/2000/svg"}
              viewBox={"0 0 1288 338"}
              className={"footer-logo-icon"}
            />
          </div>
        </div>
        <div id={"faq"} className={"column faq-column-main"}>
          <div className={"label"}>{"FAQ"}</div>
          <h2 className={"h2-style"}>
            {"Got any "}
            <br />
            {"questions?"}
          </h2>
          <FaqGroup>
            <div className={"faq-column"}>
              <div className={"faq-colum-item"}>
                <FaqItem index={0} />
                <FaqItem index={1} />
                <FaqItem index={2} />
                <FaqItem index={3} />
              </div>
              <div className={"faq-colum-item"}>
                <FaqItem index={4} />
                <FaqItem index={5} />
                <FaqItem index={6} />
                <FaqItem index={7} />
              </div>
            </div>
          </FaqGroup>
        </div>
        <section
          id="contact"
          className="closing-section"
          aria-labelledby="closing-heading"
        >
          <div>
            <p className="label w-fit">KEEP IN TOUCH</p>
            <h2 id="closing-heading" className="closing-heading">
              Let&apos;s talk.
            </h2>
            <p className="closing-description">
              A project, a question, or just &ldquo;Hi!&rdquo; I&apos;d be happy
              to hear from you.
            </p>
          </div>
          <div className="closing-actions">
            <a
              href={profile.callUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="closing-whatsapp contact-button"
              aria-label="Say Hi! on WhatsApp"
            >
              <ContactButtonLabel>Say Hi!</ContactButtonLabel>
            </a>
            <a className="closing-email" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
            <ProfileLinks />
          </div>
        </section>
      </div>
    </footer>
  );
}
