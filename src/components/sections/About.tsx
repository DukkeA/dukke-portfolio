import { SourceIcon } from "../source-icons";

export function About() {
  return (
    <section id={"about"} className={"about-section"}>
      <div className={"content-container"}>
        <div className={"column"}>
          <div
            data-tl-to={
              "{   'width':'auto',   'opacity':1,   'duration':0.7,   'ease':'expo.inOut' }"
            }
            data-tl-type={"trigger"}
            data-tl-trigger={".about-section"}
            data-tl-start={"top 90%"}
            data-tl-from={"{'width':'0vw','opacity':0}"}
            className={"label"}
          >
            {"Start small grow big"}
          </div>
          <h2
            data-tl-to={
              "{'yPercent': 0,  'duration': 0.6, 'stagger': 0.1, 'delay': 0.3, 'ease': 'power2.out'}"
            }
            data-tl-type={"trigger"}
            data-tl-trigger={".about-section"}
            data-tl-start={"top 90%"}
            data-tl-split={"lines"}
            data-tl-from={"{'yPercent': 100}"}
            className={"h2-style margin-bottom-s"}
          >
            {"About Me (&) "}
            <br />
            {"My Journey"}
          </h2>
          <p
            data-tl-to={
              "{'yPercent': 0,  'duration': 0.6, 'stagger': 0.1, 'delay': 0.3, 'ease': 'power2.out'}"
            }
            data-tl-type={"trigger"}
            data-tl-trigger={".about-section"}
            data-tl-start={"top 90%"}
            data-tl-split={"lines"}
            data-tl-from={"{'yPercent': 100}"}
            className={"max-width-389"}
          >
            {
              "Seven years ago I opened Webflow for the first time. What happened after that is easier to show than explain."
            }
          </p>
        </div>
        <div className={"about-wrap"}>
          <div
            id={"ac-1"}
            data-connect={"step-1"}
            data-origin={"bottom right"}
            data-desktop={""}
            className={"about-card-wrap ac-1"}
          >
            <div
              data-tl-desktop={""}
              data-tl-type={"trigger"}
              data-tl-trigger={".about-card-container"}
              data-tl-start={"-45% top"}
              data-tl-from={"{'y': '10%', 'opacity': 0, 'scale': 0.6}"}
              data-tl-to={
                "{'y': '0%', 'opacity': 1, 'scale': 1, 'duration': 1.1, 'delay': 0.3, 'ease': 'expo.out'}"
              }
              className={"about-card"}
            >
              <p className={"about-card-year"}>
                {"'"}
                <span
                  data-tl-desktop={""}
                  data-number-count={"19"}
                  data-tl-trigger={".about-card-container"}
                  data-tl-start={"-45% top"}
                  data-tl-to={
                    "{'duration': 1.5, 'stagger': 0.1, 'delay': 0.2, 'ease': 'expo.out'}"
                  }
                >
                  {"19"}
                </span>
              </p>
              <h3
                data-tl-desktop={""}
                data-tl-type={"trigger"}
                data-tl-trigger={".about-card-container"}
                data-tl-start={"-45% top"}
                data-tl-split={"lines"}
                data-tl-from={"{'yPercent': 100}"}
                data-tl-to={
                  "{'yPercent': 0,  'duration': 0.6, 'stagger': 0.1, 'delay': 0.3, 'ease': 'expo.out'}"
                }
                className={"about-card-heading"}
              >
                {"Starting out with my brother"}
              </h3>
              <p
                data-tl-desktop={""}
                data-tl-type={"trigger"}
                data-tl-trigger={".about-card-container"}
                data-tl-start={"-45% top"}
                data-tl-split={"lines"}
                data-tl-from={"{'yPercent': 100}"}
                data-tl-to={
                  "{'yPercent': 0,  'duration': 0.6, 'stagger': 0.1, 'delay': 0.4, 'ease': 'expo.out'}"
                }
                className={"op80"}
              >
                {
                  "My brother Stefan showed me Webflow. I bothered him with questions for three months straight. He probably regrets it."
                }
              </p>
              <div className={"about-card-bottom-layout"}>
                <div className={"about-card-bottom-layout-left"}>
                  <div className={"about-card-img-wrap"}>
                    <img
                      className={"about-card-img z-index-s"}
                      src={"/assets/afc37123-frame-116046198.avif"}
                      data-tl-trigger={".about-card-container"}
                      alt={"My brother Stefan"}
                      data-tl-desktop={""}
                      data-tl-type={"trigger"}
                      data-tl-to={
                        "{'y': '0%', 'opacity': 1, 'scale': 1, 'duration': 0.5, 'delay': 0.45, 'ease': 'power3.inOut'}"
                      }
                      data-tl-start={"-45% top"}
                      loading={"lazy"}
                      data-tl-from={"{'y': '10%', 'opacity': 0, 'scale': 0.6}"}
                    />
                    <img
                      className={"about-card-img is-riight-side"}
                      src={"/assets/adf86d9e-frame-116046197.avif"}
                      data-tl-trigger={".about-card-container"}
                      alt={""}
                      data-tl-desktop={""}
                      data-tl-type={"trigger"}
                      data-tl-to={
                        "{'y': '0%', 'opacity': 1, 'scale': 1, 'duration': 0.5, 'delay': 0.55, 'ease': 'power3.inOut'}"
                      }
                      data-tl-start={"-45% top"}
                      loading={"lazy"}
                      data-tl-from={"{'y': '10%', 'opacity': 0, 'scale': 0.6}"}
                    />
                  </div>
                  <p
                    data-tl-desktop={""}
                    data-tl-type={"trigger"}
                    data-tl-trigger={".about-card-container"}
                    data-tl-start={"-45% top"}
                    data-tl-split={"lines"}
                    data-tl-from={"{'yPercent': 100}"}
                    data-tl-to={
                      "{'yPercent': 0,  'duration': 0.4, 'stagger': 0.1, 'delay': 0.6, 'ease': 'expo.out'}"
                    }
                    className={"about-card-bottom-text"}
                  >
                    {"@stefan"}
                    <br />
                    {"7years ago"}
                  </p>
                </div>
                <button
                  data-tl-type={"trigger"}
                  data-tl-trigger={".about-card-container"}
                  data-tl-start={"-45% top"}
                  data-tl-from={"{'opacity': 0}"}
                  data-tl-to={
                    "{'opacity': 1,  'duration': 1.4,  'delay': 0.8, 'ease': 'expo.out'}"
                  }
                  data-tl-desktop={""}
                  aria-label={"Read more about starting out with my brother"}
                  className={"about-card-button"}
                >
                  <p className={"paragraph"}>{"Read more"}</p>
                </button>
                <div className={"popup-card-wrap"}>
                  <div className={"popup-card-item"}>
                    <div className={"popup-card"}>
                      <div className={"popup-card-top-item"}>
                        <div>{"2019"}</div>
                        <div
                          className={"popup-close"}
                          role={"button"}
                          tabIndex={0}
                          aria-label={"Close story"}
                        >
                          <div className={"popup-close-icon"}>
                            <div className={"popup-close-path-1"}></div>
                            <div className={"popup-close-path-2"}></div>
                          </div>
                        </div>
                      </div>
                      <div className={"popup-card-bottom-item"}>
                        <div className={"about-card-img-wrap"}>
                          <img
                            src={"/assets/e18f2e8d-frame-116046201-1.svg"}
                            loading={"lazy"}
                            alt={""}
                            className={"about-card-img"}
                          />
                          <img
                            src={"/assets/2e96bedc-frame-116046202.avif"}
                            loading={"lazy"}
                            alt={"My Brother Stefan"}
                            className={"about-card-img is-riight-side"}
                          />
                          <h4 className={"popup-heading"}>
                            {"Starting out with my brother"}
                          </h4>
                          <p>
                            {
                              "My brother Stefan, a UX designer, opened Webflow and created something right in front of me. I had no idea what I was doing but I couldn't close the laptop. No master plan, no career goal. Just a guy who found something and couldn't let go. Three months of late nights and annoying my brother with questions later, I knew this was it."
                            }
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={"about-card-point-wrap"}>
              <div className={"about-card-point-line-wrap"}>
                <div
                  data-tl-desktop={""}
                  data-tl-type={"trigger"}
                  data-tl-trigger={".about-card-container"}
                  data-tl-start={"-45% top"}
                  data-tl-from={"{'clipPath':'inset(100% 0% % 0%)'}"}
                  data-tl-to={
                    "{'clipPath':'inset(0% 0% 0% 0%)',   'duration':1.5,   'delay':0.2,   'ease':'expo.out' }"
                  }
                  className={"about-card-point-line"}
                ></div>
              </div>
              <div className={"about-card-point-circle"}></div>
            </div>
          </div>
          <div className={"about-card-container"}>
            <div
              data-desktop={""}
              data-connect={"step-2"}
              data-origin={"bottom left"}
              className={"about-card-wrap ac-2"}
            >
              <div className={"about-card-point-wrap"}>
                <div className={"about-card-point-line-wrap"}>
                  <div
                    data-tl-desktop={""}
                    data-tl-type={"trigger"}
                    data-tl-trigger={".about-card-container"}
                    data-tl-start={"-22% top"}
                    data-tl-from={"{'clipPath':'inset(100% 0% % 0%)'}"}
                    data-tl-to={
                      "{'clipPath':'inset(0% 0% 0% 0%)',   'duration':1.5,   'delay':0.2,   'ease':'expo.out' }"
                    }
                    className={"about-card-point-line"}
                  ></div>
                </div>
                <div className={"about-card-point-circle"}></div>
              </div>
              <div
                data-tl-desktop={""}
                data-tl-type={"trigger"}
                data-tl-trigger={".about-card-container"}
                data-tl-start={"-22% top"}
                data-tl-from={"{'y': '10%', 'opacity': 0, 'scale': 0.6}"}
                data-tl-to={
                  "{'y': '0%', 'opacity': 1, 'scale': 1, 'duration': 1.1, 'delay': 0.3, 'ease': 'expo.out'}"
                }
                className={"about-card"}
              >
                <p className={"about-card-year"}>
                  {"'"}
                  <span
                    data-tl-desktop={""}
                    data-number-count={"20"}
                    data-tl-trigger={".about-card-container"}
                    data-tl-start={"-22% top"}
                    data-tl-to={
                      "{'duration': 1.5, 'stagger': 0.1, 'delay': 0.2, 'ease': 'expo.out'}"
                    }
                  >
                    {"20"}
                  </span>
                </p>
                <h3
                  data-tl-desktop={""}
                  data-tl-type={"trigger"}
                  data-tl-trigger={".about-card-container"}
                  data-tl-start={"-22% top"}
                  data-tl-split={"lines"}
                  data-tl-from={"{'yPercent': 100}"}
                  data-tl-to={
                    "{'yPercent': 0,  'duration': 0.6, 'stagger': 0.1, 'delay': 0.3, 'ease': 'expo.out'}"
                  }
                  className={"about-card-heading"}
                >
                  {"First freelance steps"}
                </h3>
                <p
                  data-tl-desktop={""}
                  data-tl-type={"trigger"}
                  data-tl-trigger={".about-card-container"}
                  data-tl-start={"-22% top"}
                  data-tl-split={"lines"}
                  data-tl-from={"{'yPercent': 100}"}
                  data-tl-to={
                    "{'yPercent': 0,  'duration': 0.6, 'stagger': 0.1, 'delay': 0.4, 'ease': 'expo.out'}"
                  }
                  className={"op80"}
                >
                  {
                    "First real client. First real panic. Working for yourself and working for someone else are completely different."
                  }
                </p>
                <div className={"about-card-bottom-layout"}>
                  <div className={"about-card-bottom-layout-left"}>
                    <div className={"about-card-img-wrap"}>
                      <img
                        className={"about-card-img"}
                        src={"/assets/adf86d9e-frame-116046197.avif"}
                        data-tl-trigger={".about-card-container"}
                        alt={""}
                        data-tl-desktop={""}
                        data-tl-type={"trigger"}
                        data-tl-to={
                          "{'y': '0%', 'opacity': 1, 'scale': 1, 'duration': 0.5, 'delay': 0.45, 'ease': 'power3.inOut'}"
                        }
                        data-tl-start={"-22% top"}
                        loading={"lazy"}
                        data-tl-from={
                          "{'y': '10%', 'opacity': 0, 'scale': 0.6}"
                        }
                      />
                      <img
                        className={"about-card-img is-riight-side"}
                        src={"/assets/7e98ac81-frame-116046202-2.avif"}
                        data-tl-trigger={".about-card-container"}
                        alt={""}
                        data-tl-desktop={""}
                        data-tl-type={"trigger"}
                        data-tl-to={
                          "{'y': '0%', 'opacity': 1, 'scale': 1, 'duration': 0.5, 'delay': 0.55, 'ease': 'power3.inOut'}"
                        }
                        data-tl-start={"-22% top"}
                        loading={"lazy"}
                        data-tl-from={
                          "{'y': '10%', 'opacity': 0, 'scale': 0.6}"
                        }
                      />
                    </div>
                    <p
                      data-tl-desktop={""}
                      data-tl-type={"trigger"}
                      data-tl-trigger={".about-card-container"}
                      data-tl-start={"-22% top"}
                      data-tl-split={"lines"}
                      data-tl-from={"{'yPercent': 100}"}
                      data-tl-to={
                        "{'yPercent': 0,  'duration': 0.4, 'stagger': 0.1, 'delay': 0.6, 'ease': 'expo.out'}"
                      }
                      className={"about-card-bottom-text"}
                    >
                      {"@webflow"}
                      <br />
                      {"6years ago"}
                    </p>
                  </div>
                  <button
                    data-tl-type={"trigger"}
                    data-tl-trigger={".about-card-container"}
                    data-tl-start={"-22% top"}
                    data-tl-from={"{'opacity': 0}"}
                    data-tl-to={
                      "{'opacity': 1,  'duration': 1.4,  'delay': 0.8, 'ease': 'expo.out'}"
                    }
                    data-tl-desktop={""}
                    aria-label={"Read more about first freelance steps"}
                    className={"about-card-button"}
                  >
                    <p className={"paragraph"}>{"Read more"}</p>
                  </button>
                  <div className={"popup-card-wrap"}>
                    <div className={"popup-card-item"}>
                      <div className={"popup-card"}>
                        <div className={"popup-card-top-item"}>
                          <div>{"2020"}</div>
                          <div
                            className={"popup-close"}
                            role={"button"}
                            tabIndex={0}
                            aria-label={"Close story"}
                          >
                            <div className={"popup-close-icon"}>
                              <div className={"popup-close-path-1"}></div>
                              <div className={"popup-close-path-2"}></div>
                            </div>
                          </div>
                        </div>
                        <div className={"popup-card-bottom-item"}>
                          <div className={"about-card-img-wrap"}>
                            <img
                              src={"/assets/e18f2e8d-frame-116046201-1.svg"}
                              loading={"lazy"}
                              alt={""}
                              className={"about-card-img"}
                            />
                            <img
                              src={"/assets/a856c105-frame-116046197-1.svg"}
                              loading={"lazy"}
                              alt={""}
                              className={"about-card-img is-riight-side"}
                            />
                            <h4 className={"popup-heading"}>
                              {"First freelance steps"}
                            </h4>
                            <p>
                              {
                                "Practicing on my own was comfortable. Then someone trusted me with their project and suddenly every pixel mattered in a way it didn't before. That first year of client work taught me more than six months of practice ever did. Not because the projects were complex but because someone was counting on me to get it right."
                              }
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-desktop={""}
              data-connect={"step-3"}
              data-origin={"bottom left"}
              className={"about-card-wrap ac-3"}
            >
              <div className={"about-card-point-wrap"}>
                <div className={"about-card-point-line-wrap"}>
                  <div
                    data-tl-desktop={""}
                    data-tl-type={"trigger"}
                    data-tl-trigger={".about-card-container"}
                    data-tl-start={"-4% top"}
                    data-tl-from={"{'clipPath':'inset(100% 0% % 0%)'}"}
                    data-tl-to={
                      "{'clipPath':'inset(0% 0% 0% 0%)',   'duration':1.5,   'delay':0.2,   'ease':'expo.out' }"
                    }
                    className={"about-card-point-line"}
                  ></div>
                </div>
                <div className={"about-card-point-circle"}></div>
              </div>
              <div
                data-tl-desktop={""}
                data-tl-type={"trigger"}
                data-tl-trigger={".about-card-container"}
                data-tl-start={"-4% top"}
                data-tl-from={"{'y': '10%', 'opacity': 0, 'scale': 0.6}"}
                data-tl-to={
                  "{'y': '0%', 'opacity': 1, 'scale': 1, 'duration': 1.1, 'delay': 0.3, 'ease': 'expo.out'}"
                }
                className={"about-card"}
              >
                <p className={"about-card-year"}>
                  {"'"}
                  <span
                    data-tl-desktop={""}
                    data-number-count={"21"}
                    data-tl-trigger={".about-card-container"}
                    data-tl-start={"-4% top"}
                    data-tl-to={
                      "{'duration': 1.5, 'stagger': 0.1, 'delay': 0.2, 'ease': 'expo.out'}"
                    }
                  >
                    {"21"}
                  </span>
                </p>
                <h3
                  data-tl-desktop={""}
                  data-tl-type={"trigger"}
                  data-tl-trigger={".about-card-container"}
                  data-tl-start={"-4% top"}
                  data-tl-split={"lines"}
                  data-tl-from={"{'yPercent': 100}"}
                  data-tl-to={
                    "{'yPercent': 0,  'duration': 0.6, 'stagger': 0.1, 'delay': 0.3, 'ease': 'expo.out'}"
                  }
                  className={"about-card-heading"}
                >
                  {"Beyond what I knew"}
                </h3>
                <p
                  data-tl-desktop={""}
                  data-tl-type={"trigger"}
                  data-tl-trigger={".about-card-container"}
                  data-tl-start={"-4% top"}
                  data-tl-split={"lines"}
                  data-tl-from={"{'yPercent': 100}"}
                  data-tl-to={
                    "{'yPercent': 0,  'duration': 0.6, 'stagger': 0.1, 'delay': 0.4, 'ease': 'expo.out'}"
                  }
                  className={"op80"}
                >
                  {
                    "A biotech project that made me think this isn't possible in Webflow. Turns out it was."
                  }
                </p>
                <div className={"about-card-bottom-layout"}>
                  <div className={"about-card-bottom-layout-left"}>
                    <div className={"about-card-img-wrap"}>
                      <img
                        className={"about-card-img"}
                        src={"/assets/af7a6870-frame-116046200.avif"}
                        data-tl-trigger={".about-card-container"}
                        alt={"FiftySeven Agency"}
                        data-tl-desktop={""}
                        data-tl-type={"trigger"}
                        data-tl-to={
                          "{'y': '0%', 'opacity': 1, 'scale': 1, 'duration': 0.5, 'delay': 0.45, 'ease': 'power3.inOut'}"
                        }
                        data-tl-start={"-4% top"}
                        loading={"lazy"}
                        data-tl-from={
                          "{'y': '10%', 'opacity': 0, 'scale': 0.6}"
                        }
                      />
                    </div>
                    <p
                      data-tl-desktop={""}
                      data-tl-type={"trigger"}
                      data-tl-trigger={".about-card-container"}
                      data-tl-start={"-4% top"}
                      data-tl-split={"lines"}
                      data-tl-from={"{'yPercent': 100}"}
                      data-tl-to={
                        "{'yPercent': 0,  'duration': 0.4, 'stagger': 0.1, 'delay': 0.6, 'ease': 'expo.out'}"
                      }
                      className={"about-card-bottom-text"}
                    >
                      {"@fiftyseven"}
                      <br />
                      {"5years ago"}
                    </p>
                  </div>
                  <button
                    data-tl-type={"trigger"}
                    data-tl-trigger={".about-card-container"}
                    data-tl-start={"-4% top"}
                    data-tl-from={"{'opacity': 0}"}
                    data-tl-to={
                      "{'opacity': 1,  'duration': 1.4,  'delay': 0.8, 'ease': 'expo.out'}"
                    }
                    data-tl-desktop={""}
                    aria-label={"Read more about beyond what I knew"}
                    className={"about-card-button"}
                  >
                    <p className={"paragraph"}>{"Read more"}</p>
                  </button>
                  <div className={"popup-card-wrap"}>
                    <div className={"popup-card-item"}>
                      <div className={"popup-card"}>
                        <div className={"popup-card-top-item"}>
                          <div>{"2021"}</div>
                          <div
                            className={"popup-close"}
                            role={"button"}
                            tabIndex={0}
                            aria-label={"Close story"}
                          >
                            <div className={"popup-close-icon"}>
                              <div className={"popup-close-path-1"}></div>
                              <div className={"popup-close-path-2"}></div>
                            </div>
                          </div>
                        </div>
                        <div className={"popup-card-bottom-item"}>
                          <div className={"about-card-img-wrap"}>
                            <img
                              src={"/assets/75b33804-frame-116046257.avif"}
                              loading={"lazy"}
                              alt={"FiftySeven Agency"}
                              className={"about-card-img"}
                            />
                            <h4 className={"popup-heading"}>
                              {"Beyond what "}
                              <br />
                              {"I knew"}
                            </h4>
                            <p>
                              {"When "}
                              <a
                                href={"https://www.fiftyseven.co/"}
                                target={"_blank"}
                                rel={"noopener noreferrer"}
                              >
                                {"FIFTYSEVEN"}
                              </a>
                              {
                                " sent me the brief for Roswell Biotech, my first thought was honestly this can't be done in Webflow. The design demanded pixel-perfect execution, the functionality was complex, and I had to teach myself JavaScript mid-project to make it work. Scariest project I ever took on. Also the one that changed how I approach everything after it."
                              }
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-desktop={""}
              data-connect={"step-4"}
              data-origin={"bottom right"}
              className={"about-card-wrap ac-4"}
            >
              <div
                data-tl-desktop={""}
                data-tl-type={"trigger"}
                data-tl-trigger={".about-card-container"}
                data-tl-start={"11% top"}
                data-tl-from={"{'y': '10%', 'opacity': 0, 'scale': 0.6}"}
                data-tl-to={
                  "{'y': '0%', 'opacity': 1, 'scale': 1, 'duration': 1.1, 'delay': 0.3, 'ease': 'expo.out'}"
                }
                className={"about-card"}
              >
                <p className={"about-card-year"}>
                  {"'"}
                  <span
                    data-tl-desktop={""}
                    data-number-count={"22"}
                    data-tl-trigger={".about-card-container"}
                    data-tl-start={"11% top"}
                    data-tl-to={
                      "{'duration': 1.5, 'stagger': 0.1, 'delay': 0.2, 'ease': 'expo.out'}"
                    }
                  >
                    {"22"}
                  </span>
                </p>
                <h3
                  data-tl-desktop={""}
                  data-tl-type={"trigger"}
                  data-tl-trigger={".about-card-container"}
                  data-tl-start={"11% top"}
                  data-tl-split={"lines"}
                  data-tl-from={"{'yPercent': 100}"}
                  data-tl-to={
                    "{'yPercent': 0,  'duration': 0.6, 'stagger': 0.1, 'delay': 0.3, 'ease': 'expo.out'}"
                  }
                  className={"about-card-heading"}
                >
                  {"Leveling up"}
                </h3>
                <p
                  data-tl-desktop={""}
                  data-tl-type={"trigger"}
                  data-tl-trigger={".about-card-container"}
                  data-tl-start={"11% top"}
                  data-tl-split={"lines"}
                  data-tl-from={"{'yPercent': 100}"}
                  data-tl-to={
                    "{'yPercent': 0,  'duration': 0.6, 'stagger': 0.1, 'delay': 0.4, 'ease': 'expo.out'}"
                  }
                  className={"op80"}
                >
                  {
                    "The year animations and CMS stopped being extras and started shaping how every project feels."
                  }
                </p>
                <div className={"about-card-bottom-layout"}>
                  <div className={"about-card-bottom-layout-left"}>
                    <div className={"about-card-img-wrap"}>
                      <img
                        className={"about-card-img"}
                        src={"/assets/0e69e6e7-frame-116046203.avif"}
                        data-tl-trigger={".about-card-container"}
                        alt={""}
                        data-tl-desktop={""}
                        data-tl-type={"trigger"}
                        data-tl-to={
                          "{'y': '0%', 'opacity': 1, 'scale': 1, 'duration': 0.5, 'delay': 0.45, 'ease': 'power3.inOut'}"
                        }
                        data-tl-start={"11% top"}
                        loading={"lazy"}
                        data-tl-from={
                          "{'y': '10%', 'opacity': 0, 'scale': 0.6}"
                        }
                      />
                      <img
                        className={"about-card-img is-riight-side"}
                        src={"/assets/90e6ee73-frame-116046204.avif"}
                        data-tl-trigger={".about-card-container"}
                        alt={""}
                        data-tl-desktop={""}
                        data-tl-type={"trigger"}
                        data-tl-to={
                          "{'y': '0%', 'opacity': 1, 'scale': 1, 'duration': 0.5, 'delay': 0.55, 'ease': 'power3.inOut'}"
                        }
                        data-tl-start={"11% top"}
                        loading={"lazy"}
                        data-tl-from={
                          "{'y': '10%', 'opacity': 0, 'scale': 0.6}"
                        }
                      />
                    </div>
                    <p
                      data-tl-desktop={""}
                      data-tl-type={"trigger"}
                      data-tl-trigger={".about-card-container"}
                      data-tl-start={"11% top"}
                      data-tl-split={"lines"}
                      data-tl-from={"{'yPercent': 100}"}
                      data-tl-to={
                        "{'yPercent': 0,  'duration': 0.4, 'stagger': 0.1, 'delay': 0.6, 'ease': 'expo.out'}"
                      }
                      className={"about-card-bottom-text"}
                    >
                      {"@gsap"}
                      <br />
                      {"4years ago"}
                    </p>
                  </div>
                  <button
                    data-tl-type={"trigger"}
                    data-tl-trigger={".about-card-container"}
                    data-tl-start={"11% top"}
                    data-tl-from={"{'opacity': 0}"}
                    data-tl-to={
                      "{'opacity': 1,  'duration': 1.4,  'delay': 0.8, 'ease': 'expo.out'}"
                    }
                    data-tl-desktop={""}
                    aria-label={"Read more about leveling up"}
                    className={"about-card-button"}
                  >
                    <p className={"paragraph"}>{"Read more"}</p>
                  </button>
                  <div className={"popup-card-wrap"}>
                    <div className={"popup-card-item"}>
                      <div className={"popup-card"}>
                        <div className={"popup-card-top-item"}>
                          <div>{"2022"}</div>
                          <div
                            className={"popup-close"}
                            role={"button"}
                            tabIndex={0}
                            aria-label={"Close story"}
                          >
                            <div className={"popup-close-icon"}>
                              <div className={"popup-close-path-1"}></div>
                              <div className={"popup-close-path-2"}></div>
                            </div>
                          </div>
                        </div>
                        <div className={"popup-card-bottom-item"}>
                          <div className={"about-card-img-wrap"}>
                            <img
                              src={"/assets/c079cdeb-frame-116046197-2.svg"}
                              loading={"lazy"}
                              alt={""}
                              className={"about-card-img"}
                            />
                            <img
                              src={"/assets/92450bbb-frame-116046201.svg"}
                              loading={"lazy"}
                              alt={""}
                              className={"about-card-img is-riight-side"}
                            />
                            <h4 className={"popup-heading"}>{"Leveling up"}</h4>
                            <p>
                              {
                                "GSAP went from something I used occasionally to something that shaped every project. Animations weren't decoration anymore, they were part of how a site communicates. On the CMS side I kept finding cleaner and smarter ways to structure content, setups that made managing a site effortless for clients. Everything I worked on this year started feeling more intentional."
                              }
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={"about-card-point-wrap"}>
                <div className={"about-card-point-line-wrap"}>
                  <div
                    data-tl-desktop={""}
                    data-tl-type={"trigger"}
                    data-tl-trigger={".about-card-container"}
                    data-tl-start={"11% top"}
                    data-tl-from={"{'clipPath':'inset(100% 0% % 0%)'}"}
                    data-tl-to={
                      "{'clipPath':'inset(0% 0% 0% 0%)',   'duration':1.5,   'delay':0.2,   'ease':'expo.out' }"
                    }
                    className={"about-card-point-line"}
                  ></div>
                </div>
                <div className={"about-card-point-circle"}></div>
              </div>
            </div>
            <div
              data-desktop={""}
              data-connect={"step-5"}
              data-origin={"bottom left"}
              className={"about-card-wrap ac-5"}
            >
              <div className={"about-card-point-wrap"}>
                <div className={"about-card-point-line-wrap"}>
                  <div
                    data-tl-desktop={""}
                    data-tl-type={"trigger"}
                    data-tl-trigger={".about-card-container"}
                    data-tl-start={"20% top"}
                    data-tl-from={"{'clipPath':'inset(100% 0% % 0%)'}"}
                    data-tl-to={
                      "{'clipPath':'inset(0% 0% 0% 0%)',   'duration':1.5,   'delay':0.2,   'ease':'expo.out' }"
                    }
                    className={"about-card-point-line"}
                  ></div>
                </div>
                <div className={"about-card-point-circle"}></div>
              </div>
              <div
                data-tl-desktop={""}
                data-tl-type={"trigger"}
                data-tl-trigger={".about-card-container"}
                data-tl-start={"20% top"}
                data-tl-from={"{'y': '10%', 'opacity': 0, 'scale': 0.6}"}
                data-tl-to={
                  "{'y': '0%', 'opacity': 1, 'scale': 1, 'duration': 1.1, 'delay': 0.3, 'ease': 'expo.out'}"
                }
                className={"about-card"}
              >
                <p className={"about-card-year"}>
                  {"'"}
                  <span
                    data-tl-desktop={""}
                    data-number-count={"23"}
                    data-tl-trigger={".about-card-container"}
                    data-tl-start={"20% top"}
                    data-tl-to={
                      "{'duration': 1.5, 'stagger': 0.1, 'delay': 0.2, 'ease': 'expo.out'}"
                    }
                  >
                    {"23"}
                  </span>
                </p>
                <h3
                  data-tl-desktop={""}
                  data-tl-type={"trigger"}
                  data-tl-trigger={".about-card-container"}
                  data-tl-start={"20% top"}
                  data-tl-split={"lines"}
                  data-tl-from={"{'yPercent': 100}"}
                  data-tl-to={
                    "{'yPercent': 0,  'duration': 0.6, 'stagger': 0.1, 'delay': 0.3, 'ease': 'expo.out'}"
                  }
                  className={"about-card-heading"}
                >
                  {"From trust to referrals"}
                </h3>
                <p
                  data-tl-desktop={""}
                  data-tl-type={"trigger"}
                  data-tl-trigger={".about-card-container"}
                  data-tl-start={"20% top"}
                  data-tl-split={"lines"}
                  data-tl-from={"{'yPercent': 100}"}
                  data-tl-to={
                    "{'yPercent': 0,  'duration': 0.6, 'stagger': 0.1, 'delay': 0.4, 'ease': 'expo.out'}"
                  }
                  className={"op80"}
                >
                  {
                    "No pitch. No portfolio review. Just clients telling people 'work with Nenad.' That hit different."
                  }
                </p>
                <div className={"about-card-bottom-layout"}>
                  <div className={"about-card-bottom-layout-left"}>
                    <div className={"about-card-img-wrap"}>
                      <img
                        className={"about-card-img"}
                        src={"/assets/8085caef-frame-116046201-1.avif"}
                        data-tl-trigger={".about-card-container"}
                        alt={""}
                        data-tl-desktop={""}
                        data-tl-type={"trigger"}
                        data-tl-to={
                          "{'y': '0%', 'opacity': 1, 'scale': 1, 'duration': 0.5, 'delay': 0.45, 'ease': 'power3.inOut'}"
                        }
                        data-tl-start={"20% top"}
                        loading={"lazy"}
                        data-tl-from={
                          "{'y': '10%', 'opacity': 0, 'scale': 0.6}"
                        }
                      />
                      <img
                        className={"about-card-img is-riight-side"}
                        src={"/assets/9b970663-frame-116046202-1.avif"}
                        data-tl-trigger={".about-card-container"}
                        alt={""}
                        data-tl-desktop={""}
                        data-tl-type={"trigger"}
                        data-tl-to={
                          "{'y': '0%', 'opacity': 1, 'scale': 1, 'duration': 0.5, 'delay': 0.55, 'ease': 'power3.inOut'}"
                        }
                        data-tl-start={"20% top"}
                        loading={"lazy"}
                        data-tl-from={
                          "{'y': '10%', 'opacity': 0, 'scale': 0.6}"
                        }
                      />
                    </div>
                    <p
                      data-tl-desktop={""}
                      data-tl-type={"trigger"}
                      data-tl-trigger={".about-card-container"}
                      data-tl-start={"20% top"}
                      data-tl-split={"lines"}
                      data-tl-from={"{'yPercent': 100}"}
                      data-tl-to={
                        "{'yPercent': 0,  'duration': 0.4, 'stagger': 0.1, 'delay': 0.6, 'ease': 'expo.out'}"
                      }
                      className={"about-card-bottom-text"}
                    >
                      {"@clients"}
                      <br />
                      {"3years ago"}
                    </p>
                  </div>
                  <button
                    data-tl-type={"trigger"}
                    data-tl-trigger={".about-card-container"}
                    data-tl-start={"20% top"}
                    data-tl-from={"{'opacity': 0}"}
                    data-tl-to={
                      "{'opacity': 1,  'duration': 1.4,  'delay': 0.8, 'ease': 'expo.out'}"
                    }
                    data-tl-desktop={""}
                    aria-label={"Read more about from trust to referrals"}
                    className={"about-card-button"}
                  >
                    <p className={"paragraph"}>{"Read more"}</p>
                  </button>
                  <div className={"popup-card-wrap"}>
                    <div className={"popup-card-item"}>
                      <div className={"popup-card"}>
                        <div className={"popup-card-top-item"}>
                          <div>{"2023"}</div>
                          <div
                            className={"popup-close"}
                            role={"button"}
                            tabIndex={0}
                            aria-label={"Close story"}
                          >
                            <div className={"popup-close-icon"}>
                              <div className={"popup-close-path-1"}></div>
                              <div className={"popup-close-path-2"}></div>
                            </div>
                          </div>
                        </div>
                        <div className={"popup-card-bottom-item"}>
                          <div className={"about-card-img-wrap"}>
                            <img
                              src={"/assets/686cdf5b-frame-116046197.svg"}
                              loading={"lazy"}
                              alt={""}
                              className={"about-card-img"}
                            />
                            <img
                              src={"/assets/d561abac-frame-116046198.svg"}
                              loading={"lazy"}
                              alt={""}
                              className={"about-card-img is-riight-side"}
                            />
                            <h4 className={"popup-heading"}>
                              {"From trust to referrals"}
                            </h4>
                            <p>
                              {
                                "Clients I'd worked with came back with new projects. Some recommended me to people I'd never met. No interview, no portfolio walkthrough, just 'work with Nenad, he delivers.' That kind of trust isn't something you can put in a case study. But it's the thing I'm most proud of."
                              }
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-desktop={""}
              data-connect={"step-6"}
              data-origin={"bottom left"}
              className={"about-card-wrap ac-6"}
            >
              <div className={"about-card-point-wrap"}>
                <div className={"about-card-point-line-wrap"}>
                  <div
                    data-tl-desktop={""}
                    data-tl-type={"trigger"}
                    data-tl-trigger={".about-card-container"}
                    data-tl-start={"36% top"}
                    data-tl-from={"{'clipPath':'inset(100% 0% % 0%)'}"}
                    data-tl-to={
                      "{'clipPath':'inset(0% 0% 0% 0%)',   'duration':1.5,   'delay':0.2,   'ease':'expo.out' }"
                    }
                    className={"about-card-point-line"}
                  ></div>
                </div>
                <div className={"about-card-point-circle"}></div>
              </div>
              <div
                data-tl-desktop={""}
                data-tl-type={"trigger"}
                data-tl-trigger={".about-card-container"}
                data-tl-start={"36% top"}
                data-tl-from={"{'y': '10%', 'opacity': 0, 'scale': 0.6}"}
                data-tl-to={
                  "{'y': '0%', 'opacity': 1, 'scale': 1, 'duration': 1.1, 'delay': 0.3, 'ease': 'expo.out'}"
                }
                className={"about-card"}
              >
                <p className={"about-card-year"}>
                  {"'"}
                  <span
                    data-tl-desktop={""}
                    data-number-count={"24"}
                    data-tl-trigger={".about-card-container"}
                    data-tl-start={"36% top"}
                    data-tl-to={
                      "{'duration': 1.5, 'stagger': 0.1, 'delay': 0.2, 'ease': 'expo.out'}"
                    }
                  >
                    {"24"}
                  </span>
                </p>
                <h3
                  data-tl-desktop={""}
                  data-tl-type={"trigger"}
                  data-tl-trigger={".about-card-container"}
                  data-tl-start={"36% top"}
                  data-tl-split={"lines"}
                  data-tl-from={"{'yPercent': 100}"}
                  data-tl-to={
                    "{'yPercent': 0,  'duration': 0.6, 'stagger': 0.1, 'delay': 0.3, 'ease': 'expo.out'}"
                  }
                  className={"about-card-heading"}
                >
                  {"A life-changing year"}
                </h3>
                <p
                  data-tl-desktop={""}
                  data-tl-type={"trigger"}
                  data-tl-trigger={".about-card-container"}
                  data-tl-start={"36% top"}
                  data-tl-split={"lines"}
                  data-tl-from={"{'yPercent': 100}"}
                  data-tl-to={
                    "{'yPercent': 0,  'duration': 0.6, 'stagger': 0.1, 'delay': 0.4, 'ease': 'expo.out'}"
                  }
                  className={"op80"}
                >
                  {
                    "I got married. My daughter Djina was born. Suddenly everything I do has a deeper reason behind it."
                  }
                </p>
                <div className={"about-card-bottom-layout"}>
                  <div className={"about-card-bottom-layout-left"}>
                    <div className={"about-card-img-wrap"}>
                      <img
                        className={"about-card-img"}
                        src={"/assets/811bbe16-frame-116046201.avif"}
                        data-tl-trigger={".about-card-container"}
                        alt={""}
                        data-tl-desktop={""}
                        data-tl-type={"trigger"}
                        data-tl-to={
                          "{'y': '0%', 'opacity': 1, 'scale': 1, 'duration': 0.5, 'delay': 0.45, 'ease': 'power3.inOut'}"
                        }
                        data-tl-start={"36% top"}
                        loading={"lazy"}
                        data-tl-from={
                          "{'y': '10%', 'opacity': 0, 'scale': 0.6}"
                        }
                      />
                      <img
                        className={"about-card-img is-riight-side"}
                        src={"/assets/29087d2d-frame-116046202.avif"}
                        data-tl-trigger={".about-card-container"}
                        alt={"Daughter Djina"}
                        data-tl-desktop={""}
                        data-tl-type={"trigger"}
                        data-tl-to={
                          "{'y': '0%', 'opacity': 1, 'scale': 1, 'duration': 0.5, 'delay': 0.55, 'ease': 'power3.inOut'}"
                        }
                        data-tl-start={"36% top"}
                        loading={"lazy"}
                        data-tl-from={
                          "{'y': '10%', 'opacity': 0, 'scale': 0.6}"
                        }
                      />
                    </div>
                    <p
                      data-tl-desktop={""}
                      data-tl-type={"trigger"}
                      data-tl-trigger={".about-card-container"}
                      data-tl-start={"36% top"}
                      data-tl-split={"lines"}
                      data-tl-from={"{'yPercent': 100}"}
                      data-tl-to={
                        "{'yPercent': 0,  'duration': 0.4, 'stagger': 0.1, 'delay': 0.6, 'ease': 'expo.out'}"
                      }
                      className={"about-card-bottom-text"}
                    >
                      {"@family"}
                      <br />
                      {"2years ago"}
                    </p>
                  </div>
                  <button
                    data-tl-type={"trigger"}
                    data-tl-trigger={".about-card-container"}
                    data-tl-start={"36% top"}
                    data-tl-from={"{'opacity': 0}"}
                    data-tl-to={
                      "{'opacity': 1,  'duration': 1.4,  'delay': 0.8, 'ease': 'expo.out'}"
                    }
                    data-tl-desktop={""}
                    aria-label={"Read more about a life-changing year"}
                    className={"about-card-button"}
                  >
                    <p className={"paragraph"}>{"Read more"}</p>
                  </button>
                  <div className={"popup-card-wrap"}>
                    <div className={"popup-card-item"}>
                      <div className={"popup-card"}>
                        <div className={"popup-card-top-item"}>
                          <div>{"2024"}</div>
                          <div
                            className={"popup-close"}
                            role={"button"}
                            tabIndex={0}
                            aria-label={"Close story"}
                          >
                            <div className={"popup-close-icon"}>
                              <div className={"popup-close-path-1"}></div>
                              <div className={"popup-close-path-2"}></div>
                            </div>
                          </div>
                        </div>
                        <div className={"popup-card-bottom-item"}>
                          <div className={"about-card-img-wrap"}>
                            <img
                              src={"/assets/7fbf282a-frame-116046197-3.svg"}
                              loading={"lazy"}
                              alt={""}
                              className={"about-card-img"}
                            />
                            <img
                              src={"/assets/b7cd13cf-frame-116046198.avif"}
                              loading={"lazy"}
                              alt={
                                "Smiling baby girl with blue eyes wearing a pink bow headband and a white outfit."
                              }
                              className={"about-card-img is-riight-side"}
                            />
                            <h4 className={"popup-heading"}>
                              {"A life - "}
                              <br />
                              {"changing year"}
                            </h4>
                            <p>
                              {
                                "Before this year I thought I understood what motivation meant. I had no idea. Nothing makes you sharper at work than knowing exactly who you're coming home to. Djina changed how I see everything, not just life, but how I show up for every single thing I do."
                              }
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-desktop={""}
              data-connect={"step-7"}
              data-origin={"bottom left"}
              className={"about-card-wrap ac-7"}
            >
              <div className={"about-card-point-wrap"}>
                <div className={"about-card-point-line-wrap"}>
                  <div
                    data-tl-desktop={""}
                    data-tl-type={"trigger"}
                    data-tl-trigger={".about-card-container"}
                    data-tl-start={"58% top"}
                    data-tl-from={"{'clipPath':'inset(100% 0% % 0%)'}"}
                    data-tl-to={
                      "{'clipPath':'inset(0% 0% 0% 0%)',   'duration':1.5,   'delay':0.2,   'ease':'expo.out' }"
                    }
                    className={"about-card-point-line"}
                  ></div>
                </div>
                <div className={"about-card-point-circle"}></div>
              </div>
              <div
                data-tl-desktop={""}
                data-tl-type={"trigger"}
                data-tl-trigger={".about-card-container"}
                data-tl-start={"58% top"}
                data-tl-from={"{'y': '10%', 'opacity': 0, 'scale': 0.6}"}
                data-tl-to={
                  "{'y': '0%', 'opacity': 1, 'scale': 1, 'duration': 1.1, 'delay': 0.3, 'ease': 'expo.out'}"
                }
                className={"about-card"}
              >
                <p className={"about-card-year"}>
                  {"'"}
                  <span
                    data-tl-desktop={""}
                    data-number-count={"26"}
                    data-tl-trigger={".about-card-container"}
                    data-tl-start={"58% top"}
                    data-tl-to={
                      "{'duration': 1.5, 'stagger': 0.1, 'delay': 0.2, 'ease': 'expo.out'}"
                    }
                  >
                    {"26"}
                  </span>
                </p>
                <h3
                  data-tl-desktop={""}
                  data-tl-type={"trigger"}
                  data-tl-trigger={".about-card-container"}
                  data-tl-start={"58% top"}
                  data-tl-split={"lines"}
                  data-tl-from={"{'yPercent': 100}"}
                  data-tl-to={
                    "{'yPercent': 0,  'duration': 0.6, 'stagger': 0.1, 'delay': 0.3, 'ease': 'expo.out'}"
                  }
                  className={"about-card-heading"}
                >
                  {"The journey continues"}
                </h3>
                <p
                  data-tl-desktop={""}
                  data-tl-type={"trigger"}
                  data-tl-trigger={".about-card-container"}
                  data-tl-start={"58% top"}
                  data-tl-split={"lines"}
                  data-tl-from={"{'yPercent': 100}"}
                  data-tl-to={
                    "{'yPercent': 0,  'duration': 0.6, 'stagger': 0.1, 'delay': 0.4, 'ease': 'expo.out'}"
                  }
                  className={"op80"}
                >
                  {
                    "Seven years in. Still obsessed. Now figuring out how AI fits into what I do."
                  }
                </p>
                <div className={"about-card-bottom-layout"}>
                  <div className={"about-card-bottom-layout-left"}>
                    <div className={"about-card-img-wrap"}>
                      <img
                        className={"about-card-img"}
                        src={"/assets/765bfb33-frame-116046200-1.avif"}
                        data-tl-trigger={".about-card-container"}
                        alt={""}
                        data-tl-desktop={""}
                        data-tl-type={"trigger"}
                        data-tl-to={
                          "{'y': '0%', 'opacity': 1, 'scale': 1, 'duration': 0.5, 'delay': 0.45, 'ease': 'power3.inOut'}"
                        }
                        data-tl-start={"58% top"}
                        loading={"lazy"}
                        data-tl-from={
                          "{'y': '10%', 'opacity': 0, 'scale': 0.6}"
                        }
                      />
                      <div className={"last-year-active-dot"}></div>
                    </div>
                    <p
                      data-tl-desktop={""}
                      data-tl-type={"trigger"}
                      data-tl-trigger={".about-card-container"}
                      data-tl-start={"58% top"}
                      data-tl-split={"lines"}
                      data-tl-from={"{'yPercent': 100}"}
                      data-tl-to={
                        "{'yPercent': 0,  'duration': 0.4, 'stagger': 0.1, 'delay': 0.6, 'ease': 'expo.out'}"
                      }
                      className={"about-card-bottom-text"}
                    >
                      {"@nenad"}
                      <br />
                      {"2hours ago"}
                    </p>
                  </div>
                  <button
                    data-tl-type={"trigger"}
                    data-tl-trigger={".about-card-container"}
                    data-tl-start={"58% top"}
                    data-tl-from={"{'opacity': 0}"}
                    data-tl-to={
                      "{'opacity': 1,  'duration': 1.4,  'delay': 0.8, 'ease': 'expo.out'}"
                    }
                    data-tl-desktop={""}
                    aria-label={"Read more about the journey continues"}
                    className={"about-card-button"}
                  >
                    <p className={"paragraph"}>{"Read more"}</p>
                  </button>
                  <div className={"popup-card-wrap"}>
                    <div className={"popup-card-item"}>
                      <div className={"popup-card"}>
                        <div className={"popup-card-top-item"}>
                          <div>{"2026"}</div>
                          <div
                            className={"popup-close"}
                            role={"button"}
                            tabIndex={0}
                            aria-label={"Close story"}
                          >
                            <div className={"popup-close-icon"}>
                              <div className={"popup-close-path-1"}></div>
                              <div className={"popup-close-path-2"}></div>
                            </div>
                          </div>
                        </div>
                        <div className={"popup-card-bottom-item"}>
                          <div className={"about-card-img-wrap"}>
                            <img
                              src={"/assets/2b15efd6-frame-1321314730.avif"}
                              loading={"lazy"}
                              alt={"Me | Nenad Popadic"}
                              className={"about-card-img"}
                            />
                            <h4 className={"popup-heading"}>
                              {"The journey continues"}
                            </h4>
                            <p>
                              {
                                "The industry doesn't stand still and neither do I. After seven years of working, learning, and evolving, AI has opened up a whole new layer of what's possible. Same obsession, new tools. The best work is still ahead."
                              }
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={"about-timeline-wrap"}>
              <div
                data-tl-desktop={""}
                data-tl-type={"scroll"}
                data-tl-trigger={".about-card-container"}
                data-tl-start={"top 90%"}
                data-tl-end={"bottom 80%"}
                data-tl-from={"{'height' : '0%'}"}
                data-tl-to={
                  "{   'keyframes': [     { 'height': '14%', 'duration': 2 },     { 'height': '28%', 'duration': 1 },     { 'height': '42%', 'duration': 1.5 },     { 'height': '56%', 'duration': 2 },     { 'height': '70%', 'duration': 1 },     { 'height': '84%', 'duration': 1.5 },     { 'height': '100%', 'duration': 2 }   ],   'ease': 'none' }"
                }
                className={"about-timeline-overflow"}
              >
                <SourceIcon
                  name="asset29"
                  xmlns={"http://www.w3.org/2000/svg"}
                  width={"100%"}
                  viewBox={"0 0 1118 2166"}
                  fill={"none"}
                  className={"about-timeline"}
                />
              </div>
              <SourceIcon
                name="asset30"
                xmlns={"http://www.w3.org/2000/svg"}
                width={"100%"}
                viewBox={"0 0 1118 2166"}
                fill={"none"}
                className={"about-timeline-position"}
              />
            </div>
          </div>
          <div className={"mobile-timeline-wrap"}>
            <SourceIcon
              name="asset31"
              xmlns={"http://www.w3.org/2000/svg"}
              width={"100%"}
              viewBox={"0 0 15 2421"}
              fill={"none"}
              className={"mobile-timeline-icon"}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
