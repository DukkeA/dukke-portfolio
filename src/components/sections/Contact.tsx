import { profile } from "@/content/profile";

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
            {"Transform Your "}
            <br />
            {"Webflow"}
            <br />
            <span className={"cta-span-heading"}>{"Experience"}</span>
            <br />
            <span className={"cta-span-heading"}>{"Journey"}</span>
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
              "Every Webflow site has room to grow. You get a clear view of what works, what holds you back and how to move toward a setup that feels faster, lighter and easier to manage."
            }
          </p>
          <div className={"cta-wrap"}>
            <img
              src={"/assets/2b15efd6-frame-1321314730.avif"}
              loading={"lazy"}
              alt={""}
              className={"cta_img"}
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
                          {"Have something in mind?"}
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
                      className={"cta-button w-inline-block"}
                      rel={"noopener noreferrer"}
                    >
                      <p className={"button-text"}>{"Let's Talk"}</p>
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
