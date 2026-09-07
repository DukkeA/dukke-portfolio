import { SourceIcon } from "../source-icons";

export function Services() {
  return (
    <section id={"services"} className={"sevice_section"}>
      <div className={"content-container"}>
        <div id={"services_column"} className={"column"}>
          <div
            data-tl-to={
              "{   'width':'auto',   'opacity':1,   'duration':0.7,   'ease':'expo.inOut' }"
            }
            data-tl-type={"trigger"}
            data-tl-trigger={"#services_column"}
            data-tl-start={"top 90%"}
            data-tl-from={"{'width':'0vw','opacity':0}"}
            className={"label"}
          >
            {"SERVICES"}
          </div>
          <h2
            data-tl-to={
              "{'yPercent': 0,  'duration': 0.6, 'stagger': 0.1, 'delay': 0.3, 'ease': 'power2.out'}"
            }
            data-tl-type={"trigger"}
            data-tl-trigger={"#services_column"}
            data-tl-start={"top 90%"}
            data-tl-split={"lines"}
            data-tl-from={"{'yPercent': 100}"}
            className={"h2-style margin-bottom-s"}
          >
            {"Solutions "}
            <br />
            {"That Deliver"}
          </h2>
          <p
            data-tl-to={
              "{'yPercent': 0,  'duration': 0.6, 'stagger': 0.1, 'delay': 0.3, 'ease': 'power2.out'}"
            }
            data-tl-type={"trigger"}
            data-tl-trigger={"#services_column"}
            data-tl-start={"top 90%"}
            data-tl-split={"lines"}
            data-tl-from={"{'yPercent': 100}"}
            className={"max-width-389"}
          >
            {
              "Same quality, same attention to detail. The only difference is the size of the project and what you need right now."
            }
          </p>
        </div>
        <div className={"service-wrap"}>
          <div className={"service-card is-first"}>
            <div className={"service-top-content"}>
              <div className={"service-card-top-item"}>
                <SourceIcon
                  name="asset38"
                  xmlns={"http://www.w3.org/2000/svg"}
                  width={"100%"}
                  viewBox={"0 0 42 42"}
                  fill={"none"}
                  className={"service-card-icon"}
                />
                <h3 className={"service-card-heading"}>{"Ongoing Support"}</h3>
              </div>
              <div className={"service-price-item"}>
                <p>{"$3,000"}</p>
                <div className={"services-hours-text"}>
                  <p>{"/ 30hours"}</p>
                </div>
              </div>
              <p>
                {"Your dedicated Webflow developer, "}
                <br />
                {
                  "30 hours a month. Whatever your site needs, handled. Minimum 3 month commitment."
                }
              </p>
              <div className={"service-list"}>
                <div className={"service-list-item"}>
                  <div className={"service-list-bullet-icon"}></div>
                  <p>{"New pages, sections, and features"}</p>
                </div>
                <div className={"service-list-item"}>
                  <div className={"service-list-bullet-icon"}></div>
                  <p>
                    {
                      "Campaign-driven updates (modules, content blocks, assets)"
                    }
                  </p>
                </div>
                <div className={"service-list-item"}>
                  <div className={"service-list-bullet-icon"}></div>
                  <p>
                    {"Maintenance, bug fixes, and "}
                    <br />
                    {"content updates"}
                  </p>
                </div>
                <div className={"service-list-item"}>
                  <div className={"service-list-bullet-icon"}></div>
                  <p>{"Technical SEO and performance optimization"}</p>
                </div>
                <div className={"service-list-item"}>
                  <div className={"service-list-bullet-icon"}></div>
                  <p>
                    {"Unused hours roll over "}
                    <br />
                    {"(up to 3 months)"}
                  </p>
                </div>
              </div>
            </div>
            <div className={"service-bottom-content"}>
              <SourceIcon
                name="asset39"
                xmlns={"http://www.w3.org/2000/svg"}
                width={"100%"}
                viewBox={"0 0 22 23"}
                fill={"none"}
                className={"services-tooltip-icon"}
              />
              <p>
                {
                  "For brands that need continuous growth and long-term collaboration."
                }
              </p>
            </div>
          </div>
          <div className={"service-card"}>
            <div className={"service-top-content"}>
              <div className={"service-card-top-item"}>
                <SourceIcon
                  name="asset40"
                  xmlns={"http://www.w3.org/2000/svg"}
                  width={"100%"}
                  viewBox={"0 0 44 42"}
                  fill={"none"}
                  className={"service-card-icon"}
                />
                <h3 className={"service-card-heading"}>{"Starter Build"}</h3>
              </div>
              <div className={"service-price-item"}>
                <p>{"$5,000"}</p>
                <div className={"services-hours-text"}></div>
              </div>
              <p>
                {
                  "A clean Webflow site ready to launch in one to two weeks. Perfect for brands that need a solid online presence without the complexity."
                }
                <br />
                {"‍"}
              </p>
              <div className={"service-list"}>
                <div className={"service-list-item"}>
                  <div className={"service-list-bullet-icon"}></div>
                  <p>{"Up to 6 pages"}</p>
                </div>
                <div className={"service-list-item"}>
                  <div className={"service-list-bullet-icon"}></div>
                  <p>{"CMS setup"}</p>
                </div>
                <div className={"service-list-item"}>
                  <div className={"service-list-bullet-icon"}></div>
                  <p>{"Mid-level animations and interactions"}</p>
                </div>
                <div className={"service-list-item"}>
                  <div className={"service-list-bullet-icon"}></div>
                  <p>{"Technical SEO setup"}</p>
                </div>
                <div className={"service-list-item"}>
                  <div className={"service-list-bullet-icon"}></div>
                  <p>{"Launch within one to two weeks"}</p>
                </div>
                <div className={"service-list-item"}>
                  <div className={"service-list-bullet-icon"}></div>
                  <p>{"Webflow Editor training after launch"}</p>
                </div>
              </div>
            </div>
            <div className={"service-bottom-content"}>
              <SourceIcon
                name="asset39"
                xmlns={"http://www.w3.org/2000/svg"}
                width={"100%"}
                viewBox={"0 0 22 23"}
                fill={"none"}
                className={"services-tooltip-icon"}
              />
              <p>
                {"For new sites or migrations that need a fast, clean start"}
              </p>
            </div>
          </div>
          <div className={"service-card"}>
            <div className={"service-top-content"}>
              <div className={"service-card-top-item"}>
                <SourceIcon
                  name="asset41"
                  xmlns={"http://www.w3.org/2000/svg"}
                  width={"100%"}
                  viewBox={"0 0 42 42"}
                  fill={"none"}
                  className={"service-card-icon"}
                />
                <h3 className={"service-card-heading"}>{"Custom Project"}</h3>
              </div>
              <div className={"service-price-item"}>
                <p>{"Book a Call"}</p>
              </div>
              <p>
                {
                  "High-end Webflow development for complex projects. Every scope is different, so every project starts with a conversation."
                }
                <br />
                {"‍"}
              </p>
              <div className={"service-list"}>
                <div className={"service-list-item"}>
                  <div className={"service-list-bullet-icon"}></div>
                  <p>
                    {"Advanced interaction and "}
                    <br />
                    {"animation systems"}
                  </p>
                </div>
                <div className={"service-list-item"}>
                  <div className={"service-list-bullet-icon"}></div>
                  <p>
                    {"Scalable CMS architecture with multi-collection setups"}
                  </p>
                </div>
                <div className={"service-list-item"}>
                  <div className={"service-list-bullet-icon"}></div>
                  <p>
                    {"Complex layouts, modular components and dynamic content"}
                  </p>
                </div>
                <div className={"service-list-item"}>
                  <div className={"service-list-bullet-icon"}></div>
                  <p>
                    {
                      "Integration ready structure for external tools and API driven features"
                    }
                  </p>
                </div>
                <div className={"service-list-item"}>
                  <div className={"service-list-bullet-icon"}></div>
                  <p>{"14 days post-launch support included"}</p>
                </div>
              </div>
            </div>
            <div className={"service-bottom-content"}>
              <SourceIcon
                name="asset39"
                xmlns={"http://www.w3.org/2000/svg"}
                width={"100%"}
                viewBox={"0 0 22 23"}
                fill={"none"}
                className={"services-tooltip-icon"}
              />
              <p>
                {
                  "For complex projects that go beyond the basics and need a tailored approach."
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
