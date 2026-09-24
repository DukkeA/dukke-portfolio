import { ServiceIcon } from "../service-icons";
import { serviceAreas } from "@/content/services";
import { Architecture } from "./Architecture";

export function Services() {
  return (
    <>
      <section id="services" className="sevice_section">
        <div className="content-container">
          <div id="services_column" className="column">
            <div
              data-tl-to="{'width':'auto','opacity':1,'duration':0.7,'ease':'expo.inOut'}"
              data-tl-type="trigger"
              data-tl-trigger="#services_column"
              data-tl-start="top 90%"
              data-tl-from="{'width':'0vw','opacity':0}"
              className="label"
            >
              Services
            </div>
            <h2
              data-tl-to="{'yPercent':0,'duration':0.6,'stagger':0.1,'delay':0.3,'ease':'power2.out'}"
              data-tl-type="trigger"
              data-tl-trigger="#services_column"
              data-tl-start="top 90%"
              data-tl-split="lines"
              data-tl-from="{'yPercent':100}"
              className="h2-style margin-bottom-s"
            >
              The work <br />
              behind it.
            </h2>
            <p
              data-tl-to="{'yPercent':0,'duration':0.6,'stagger':0.1,'delay':0.3,'ease':'power2.out'}"
              data-tl-type="trigger"
              data-tl-trigger="#services_column"
              data-tl-start="top 90%"
              data-tl-split="lines"
              data-tl-from="{'yPercent':100}"
              className="max-width-389"
            >
              I can help with a complete application or the part that needs
              attention. Here is what that work can include.
            </p>
          </div>
          <div className="mt-10 rounded-xl bg-[#dfdece] px-5 min-[768px]:mt-[3.5vw] min-[768px]:px-[2.5vw]">
            {serviceAreas.map((area) => (
              <article
                key={area.id}
                id={"service-" + area.id}
                aria-labelledby={"service-" + area.id + "-title"}
                className="grid grid-cols-1 gap-6 border-b border-black/15 py-8 last:border-b-0 min-[1024px]:grid-cols-[0.9fr_1.1fr] min-[1024px]:gap-[4vw] min-[1024px]:py-[3vw]"
                data-tl-type="trigger"
                data-tl-trigger={"#service-" + area.id}
                data-tl-start="top 92%"
                data-tl-from="{'y':24,'opacity':0}"
                data-tl-to="{'y':0,'opacity':1,'duration':0.6,'ease':'power2.out'}"
                data-tl-once=""
              >
                <div className="min-w-0">
                  <div className="mb-4 flex items-start gap-3">
                    <ServiceIcon
                      area={area.id}
                      size={32}
                      className="shrink-0"
                    />
                    <h3
                      id={"service-" + area.id + "-title"}
                      className="m-0 font-display text-[clamp(1.25rem,1.7vw,2rem)] leading-[1.15] font-bold"
                    >
                      {area.title}
                    </h3>
                  </div>
                  <p className="m-0 max-w-[48ch] text-[clamp(1rem,1.1vw,1.25rem)] leading-[1.5]">
                    {area.description}
                  </p>
                </div>
                <ul className="m-0 grid list-none grid-cols-1 content-center gap-4 p-0 min-[1280px]:grid-cols-2 min-[1280px]:gap-x-7 min-[1280px]:gap-y-6">
                  {area.details.map((detail) => (
                    <li
                      key={detail}
                      className="flex items-start gap-3 text-[clamp(0.95rem,1.05vw,1.2rem)] leading-[1.5]"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-[0.55em] h-1.5 w-1.5 shrink-0 rounded-full bg-black/65"
                      />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Architecture />
    </>
  );
}
