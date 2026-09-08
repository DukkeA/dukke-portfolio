import { profile } from "@/content/profile";
import { ContactButtonLabel } from "../contact-button-label";

export function Contact() {
  return (
    <section id={"webflow_journey"} className={"cta_section"}>
      <div className={"content-container"}>
        <div id={"cta_column"} className={"column cta-column"}>
          <h2
            data-tl-once={""}
            data-tl-type={"trigger"}
            data-tl-trigger={"#cta_column"}
            data-tl-start={"top 90%"}
            data-tl-from={"{'yPercent': 100}"}
            data-tl-to={
              "{'yPercent': 0,  'duration': 0.6, 'stagger': 0.1, 'delay': 0.3, 'ease': 'power2.out'}"
            }
            data-tl-split={"lines"}
            className={"cta_heading"}
          >
            {"Have an idea?"}
            <br />
            {"Let's build"}
            <br />
            <span className={"cta-span-heading"}>{"something"}</span>
            <br />
            <span className={"cta-span-heading"}>{"useful."}</span>
          </h2>
          <p
            data-tl-once={""}
            data-tl-type={"trigger"}
            data-tl-trigger={"#cta_column"}
            data-tl-start={"top 65%"}
            data-tl-split={"lines"}
            data-tl-from={"{'yPercent': 100}"}
            data-tl-to={
              "{'yPercent': 0,  'duration': 0.6, 'stagger': 0.1, 'delay': 0.3, 'ease': 'power2.out'}"
            }
            className={"max-width-389"}
          >
            {
              "A new application, an existing product that needs attention, or a team looking for another engineer. Tell me what you're working on, and we can talk through the details and see how I can help."
            }
          </p>
          <div className={"cta-wrap"}>
            <img
              src={profile.image}
              loading={"lazy"}
              alt={profile.name}
              className="cta_img aspect-square shrink-0 rounded-full bg-[#e4e0ce] object-cover object-top"
            />
            <div className={"column"}>
              <div className={"cta-column-item"}>
                <div className={"cta-chat-grid"}>
                  <div
                    id={"w-node-_5e7c5502-ddba-215f-98c3-2549ffbe6693-be2d4114"}
                    className={"cta-chat-item"}
                  >
                    <div className={"cta-chat"}>
                      <div className={"cta-text-wrap"}>
                        <p
                          id={
                            "w-node-_5e7c5502-ddba-215f-98c3-2549ffbe6696-be2d4114"
                          }
                          className={"cta-text"}
                        >
                          {"Tell me about it."}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={"cta-button-grid"}>
                  <div className={"cta-button-grid-item"}>
                    <a
                      data-button-hover={""}
                      href={profile.callUrl}
                      target={"_blank"}
                      className={"cta-button contact-button w-inline-block"}
                      aria-label="Let's talk on WhatsApp"
                      rel={"noopener noreferrer"}
                    >
                      <ContactButtonLabel>{"Let's Talk"}</ContactButtonLabel>
                    </a>
                  </div>
                </div>
              </div>
              <div className={"typing-grid"}>
                <div className={"typing-grid-item"}>
                  <div className={"cta-chat-typing-wrap"}>
                    <div className={"typing-dots"}></div>
                    <div className={"typing-dots"}></div>
                    <div className={"typing-dots"}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
