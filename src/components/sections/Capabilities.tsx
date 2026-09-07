import { SourceIcon } from "../source-icons";
import { ServiceIcon } from "../service-icons";
import { serviceAreas, type ServiceAreaId } from "@/content/services";

function CapabilityText({ mobile = false }: { mobile?: boolean }) {
  const anchor = (area: ServiceAreaId) => (
    <span
      data-connect={area + (mobile ? "-mobile" : "")}
      className="span capability-anchor"
      aria-hidden="true"
    >
      {"\u00a0"}
    </span>
  );

  return (
    <p className={mobile ? "what_you_get-text-mobile" : "what_you_get-text"}>
      {"A polished interface, "}
      {anchor("frontend")}
      {" a dependable backend, "}
      {anchor("backend")}
      {" data that makes sense, "}
      {anchor("data")}
      {" and reliable releases. "}
      {anchor("infrastructure")}
      {" Software you can use today and keep improving. "}
      {anchor("maintenance")}
    </p>
  );
}

export function Capabilities() {
  return (
    <section id="overview" className="what_you_get_section">
      <div className="content-container">
        <div className="column flex-center text-center">
          <h2 className="h2-big h2-style">
            What <br />
            You Get
          </h2>
          <div
            data-tl-to="{'width':'auto','opacity':1,'duration':0.7,'ease':'expo.inOut'}"
            data-tl-type="trigger"
            data-tl-trigger=".what_you_get-text"
            data-tl-start="top 100%"
            data-tl-from="{'width':'0vw','opacity':0}"
            className="label"
          >
            Built with care
          </div>
          <CapabilityText />
          <CapabilityText mobile />
          <div className="capa-cards-wrap">
            {serviceAreas.map((area, index) => (
              <div
                key={area.id}
                data-connect={area.id}
                data-connect-mobile={area.id + "-mobile"}
                data-origin="center center"
                data-anchor-pos="center center"
                className="capa-card"
              >
                <div
                  data-tl-to="{'scale':1,'opacity':1}"
                  data-tl-type="trigger"
                  data-tl-trigger=".what_you_get-text"
                  data-tl-start={"top " + (80 - index * 13) + "%"}
                  data-tl-from="{'scale':0.5,'opacity':0}"
                  className="capa-card-item"
                  role="button"
                  tabIndex={0}
                  aria-label={area.outcome}
                  aria-expanded={false}
                >
                  <div className="capa-card-top-item">
                    <ServiceIcon
                      area={area.id}
                      size="100%"
                      data-var-hover="1.4"
                      data-var-hover-mobile="2.1"
                      className="capa-settings-icon h-auto"
                    />
                    <div
                      data-var-hover="1"
                      data-var-hover-mobile="5.507"
                      className="capa-card-arrow-wrap"
                    >
                      <SourceIcon
                        name="asset33"
                        viewBox="0 0 8 7"
                        fill="none"
                        className="capa-card-arrow"
                      />
                    </div>
                  </div>
                  <div className="capa-card-bottom">
                    <div className="capa-card-bottom-layout">
                      <h3 className="capa-card-heading">{area.outcome}</h3>
                      <p className="capa-card-text">{area.summary}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
