import { SourceIcon } from "../source-icons";

export function Capabilities() {
  return (
    <section id={"overview"} className={"what_you_get_section"}>
      <div className={"content-container"}>
        <div className={"column flex-center text-center"}>
          <h2 className={"h2-big h2-style"}>
            {"What "}
            <br />
            {"You Get?"}
          </h2>
          <div
            data-tl-to={
              "{   'width':'auto',   'opacity':1,   'duration':0.7,   'ease':'expo.inOut' }"
            }
            data-tl-type={"trigger"}
            data-tl-trigger={".what_you_get-text"}
            data-tl-start={"top 100%"}
            data-tl-from={"{'width':'0vw','opacity':0}"}
            className={"label"}
          >
            {"Capabilities Overview"}
          </div>
          <p className={"what_you_get-text"}>
            {"Strategy, precision, and "}
            <span data-connect={"w"} className={"span"}>
              {"      "}
            </span>
            {" development  combined - turning "}
            <span data-connect={"seo"} className={"span"}>
              {"        "}
            </span>
            {" your vision into a powerful digital "}
            <span data-connect={"i"}>{" "}</span>
            {" experience "}
            <span data-connect={"gsap"} className={"span"}>
              {"       "}
            </span>
            {" that feels     effortless. "}
            <span data-connect={"p"} className={"span"}>
              {" "}
            </span>
          </p>
          <p className={"what_you_get-text-mobile"}>
            {"Strategy, precision, "}
            <br />
            {"and "}
            <span data-connect={"w-mobile"} className={"span"}>
              {"            "}
            </span>
            {" development  combined - turning "}
            <span data-connect={"seo-mobile"} className={"span"}>
              {"        "}
            </span>
            {" your vision into a powerful digital "}
            <span data-connect={"i-mobile"}>{" "}</span>
            {" experience "}
            <span data-connect={"gsap-mobile"} className={"span"}>
              {"          "}
            </span>
            {" that feels effortless. "}
            <span data-connect={"p-mobile"} className={"span"}>
              {" "}
            </span>
          </p>
          <div className={"capa-cards-wrap"}>
            <div
              data-connect-mobile={"w-mobile"}
              data-connect={"w"}
              data-origin={"center left"}
              data-anchor-pos={"left center"}
              className={"capa-card"}
            >
              <div
                data-tl-to={"{'scale' : 1, 'opacity' : 1}"}
                data-tl-type={"trigger"}
                data-tl-trigger={".what_you_get-text"}
                data-tl-start={"top 80%"}
                data-tl-from={"{'scale' : 0.5, 'opacity' : 0}"}
                className={"capa-card-item"}
                role={"button"}
                tabIndex={0}
                aria-label={"Webflow Development"}
              >
                <div className={"capa-card-top-item"}>
                  <SourceIcon
                    name="asset32"
                    xmlns={"http://www.w3.org/2000/svg"}
                    width={"100%"}
                    viewBox={"0 0 51 31"}
                    fill={"none"}
                    data-var-hover={"1.34"}
                    data-var-hover-mobile={"2.04"}
                    className={"webflow-icon"}
                  />
                  <div
                    data-var-hover={"1"}
                    data-var-hover-mobile={"5.507"}
                    className={"capa-card-arrow-wrap"}
                  >
                    <SourceIcon
                      name="asset33"
                      xmlns={"http://www.w3.org/2000/svg"}
                      width={"100%"}
                      viewBox={"0 0 8 7"}
                      fill={"none"}
                      className={"capa-card-arrow"}
                    />
                  </div>
                </div>
                <div className={"capa-card-bottom"}>
                  <div className={"capa-card-bottom-layout"}>
                    <h3 className={"capa-card-heading"}>
                      {"Webflow Development"}
                    </h3>
                    <p className={"capa-card-text"}>
                      {
                        "Fast, scalable websites with clean structure and a CMS setup that puts you in full control."
                      }
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-connect-mobile={"i-mobile"}
              data-connect={"i"}
              data-origin={"left center"}
              data-anchor-pos={"left center"}
              className={"capa-card"}
            >
              <div
                data-tl-to={"{'scale' : 1, 'opacity' : 1}"}
                data-tl-type={"trigger"}
                data-tl-trigger={".what_you_get-text"}
                data-tl-start={"top 47%"}
                data-tl-from={"{'scale' : 0.5, 'opacity' : 0}"}
                className={"capa-card-item"}
                role={"button"}
                tabIndex={0}
                aria-label={"Custom Integrations"}
              >
                <div className={"capa-card-top-item"}>
                  <SourceIcon
                    name="asset34"
                    xmlns={"http://www.w3.org/2000/svg"}
                    width={"100%"}
                    viewBox={"0 0 48 45"}
                    fill={"none"}
                    data-var-hover={"1.47"}
                    data-var-hover-mobile={"2.111"}
                    className={"capa-settings-icon"}
                  />
                  <div
                    data-var-hover={"1"}
                    data-var-hover-mobile={"5.507"}
                    className={"capa-card-arrow-wrap"}
                  >
                    <SourceIcon
                      name="asset33"
                      xmlns={"http://www.w3.org/2000/svg"}
                      width={"100%"}
                      viewBox={"0 0 8 7"}
                      fill={"none"}
                      className={"capa-card-arrow"}
                    />
                  </div>
                </div>
                <div className={"capa-card-bottom"}>
                  <div className={"capa-card-bottom-layout"}>
                    <h3 className={"capa-card-heading"}>
                      {"Custom Integrations"}
                    </h3>
                    <p className={"capa-card-text"}>
                      {
                        "Expanding Webflow's capabilities with APIs, third-party tools, and tailored functionality."
                      }
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={"capa-card"}
              data-origin-mobile={"center left"}
              data-connect={"seo"}
              data-connect-mobile={"seo-mobile"}
              data-origin={"center center"}
              data-anchor-pos-mobile={"left center"}
              data-offset={"0, 16%"}
              data-offset-mobile={"5%, 0%"}
              data-anchor-pos={"center center"}
            >
              <div
                data-tl-to={"{'scale' : 1, 'opacity' : 1}"}
                data-tl-type={"trigger"}
                data-tl-trigger={".what_you_get-text"}
                data-tl-start={"top 63%"}
                data-tl-from={"{'scale' : 0.5, 'opacity' : 0}"}
                className={"capa-card-item"}
                role={"button"}
                tabIndex={0}
                aria-label={"SEO-Ready Setup"}
              >
                <div className={"capa-card-top-item"}>
                  <SourceIcon
                    name="asset35"
                    xmlns={"http://www.w3.org/2000/svg"}
                    width={"100%"}
                    viewBox={"0 0 46 45"}
                    fill={"none"}
                    data-var-hover={"1.41"}
                    data-var-hover-mobile={"2.11"}
                    className={"capa-seo-icon"}
                  />
                  <div
                    data-var-hover={"1"}
                    data-var-hover-mobile={"5.507"}
                    className={"capa-card-arrow-wrap"}
                  >
                    <SourceIcon
                      name="asset33"
                      xmlns={"http://www.w3.org/2000/svg"}
                      width={"100%"}
                      viewBox={"0 0 8 7"}
                      fill={"none"}
                      className={"capa-card-arrow"}
                    />
                  </div>
                </div>
                <div className={"capa-card-bottom"}>
                  <div className={"capa-card-bottom-layout"}>
                    <h3 className={"capa-card-heading"}>{"SEO-Ready Setup"}</h3>
                    <p className={"capa-card-text"}>
                      {
                        "Optimized site structure, speed, and on-page SEO to help your website rank higher and stay visible."
                      }
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-connect-mobile={"gsap-mobile"}
              data-connect={"gsap"}
              data-origin={"center center"}
              data-anchor-pos={"center center"}
              className={"capa-card"}
            >
              <div
                data-tl-to={"{'scale' : 1, 'opacity' : 1}"}
                data-tl-type={"trigger"}
                data-tl-trigger={".what_you_get-text"}
                data-tl-start={"top 39%"}
                data-tl-from={"{'scale' : 0.5, 'opacity' : 0}"}
                className={"capa-card-item"}
                role={"button"}
                tabIndex={0}
                aria-label={"Creative & Interactive Motion"}
              >
                <div className={"capa-card-top-item"}>
                  <div data-var-hover={"3.68"} className={"capa-gsap-icon"}>
                    <SourceIcon
                      name="asset36"
                      xmlns={"http://www.w3.org/2000/svg"}
                      width={"100%"}
                      viewBox={"0 0 106 39"}
                      fill={"none"}
                      data-var-hover={"1"}
                      data-var-hover-mobile={"2.06"}
                      className={"gsap-icon"}
                    />
                  </div>
                  <div
                    data-var-hover={"1"}
                    data-var-hover-mobile={"5.507"}
                    className={"capa-card-arrow-wrap"}
                  >
                    <SourceIcon
                      name="asset33"
                      xmlns={"http://www.w3.org/2000/svg"}
                      width={"100%"}
                      viewBox={"0 0 8 7"}
                      fill={"none"}
                      className={"capa-card-arrow"}
                    />
                  </div>
                </div>
                <div className={"capa-card-bottom"}>
                  <div className={"capa-card-bottom-layout"}>
                    <h3 className={"capa-card-heading"}>
                      {"Creative & Interactive Motion"}
                    </h3>
                    <p className={"capa-card-text"}>
                      {
                        "Smooth animations and engaging user experiences powered by GSAP and custom interactions."
                      }
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-connect-mobile={"p-mobile"}
              data-connect={"p"}
              data-origin={"left center"}
              data-anchor-pos={"left center"}
              className={"capa-card"}
            >
              <div
                data-tl-to={"{'scale' : 1, 'opacity' : 1}"}
                data-tl-type={"trigger"}
                data-tl-trigger={".what_you_get-text"}
                data-tl-start={"top 25%"}
                data-tl-from={"{'scale' : 0.5, 'opacity' : 0}"}
                className={"capa-card-item"}
                role={"button"}
                tabIndex={0}
                aria-label={"Performance & Technical Optimization"}
              >
                <div className={"capa-card-top-item"}>
                  <SourceIcon
                    name="asset37"
                    xmlns={"http://www.w3.org/2000/svg"}
                    width={"100%"}
                    viewBox={"0 0 51 44"}
                    fill={"none"}
                    data-var-hover={"1.46"}
                    data-var-hover-mobile={"2.16"}
                    className={"capa-performance-icon"}
                  />
                  <div
                    data-var-hover={"1"}
                    data-var-hover-mobile={"5.507"}
                    className={"capa-card-arrow-wrap"}
                  >
                    <SourceIcon
                      name="asset33"
                      xmlns={"http://www.w3.org/2000/svg"}
                      width={"100%"}
                      viewBox={"0 0 8 7"}
                      fill={"none"}
                      className={"capa-card-arrow"}
                    />
                  </div>
                </div>
                <div className={"capa-card-bottom"}>
                  <div className={"capa-card-bottom-layout"}>
                    <h3 className={"capa-card-heading"}>
                      {"Performance & Technical Optimization"}
                    </h3>
                    <p className={"capa-card-text"}>
                      {
                        "Making your site faster, cleaner, and built to last with technical SEO and performance best practices."
                      }
                    </p>
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
