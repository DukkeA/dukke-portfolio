import { LinkedinLogoIcon } from "@phosphor-icons/react/ssr";
import { professionalReferences } from "@/content/references";

export function Testimonials() {
  return (
    <section id="testimonial" className="testimonial_section">
      <div className="content-container">
        <div id="client_column" className="column">
          <div
            data-tl-once=""
            data-tl-type="trigger"
            data-tl-trigger="#client_column"
            data-tl-start="top 90%"
            data-tl-from="{'width':'0vw','opacity':0}"
            data-tl-to="{'width':'auto','opacity':1,'duration':0.7,'ease':'expo.inOut'}"
            className="label"
          >
            PROFESSIONAL REFERENCES
          </div>
          <h2
            data-tl-once=""
            data-tl-type="trigger"
            data-tl-trigger="#client_column"
            data-tl-start="top 90%"
            data-tl-split="lines"
            data-tl-from="{'yPercent': 100}"
            data-tl-to="{'yPercent':0,'duration':0.6,'stagger':0.1,'delay':0.3,'ease':'power2.out'}"
            className="h2-style margin-bottom-s"
          >
            People I&apos;ve
            <br />
            worked with.
          </h2>
        </div>
        <div className="swiper-main-wrap">
          <div className="swiper-pagination" />
          <div className="swiper">
            <div className="swiper-wrapper">
              {professionalReferences.map((reference) => (
                <div className="swiper-slide" key={reference.id}>
                  <article className="swiper-card reference-card">
                    <div className="column">
                      <div className="swiper-card-top">
                        <h3 className="swiper-heading">{reference.title}</h3>
                      </div>
                      <p>{reference.message}</p>
                    </div>
                    <div className="swiper-card-bottom">
                      <img
                        src={reference.image}
                        width={100}
                        height={100}
                        loading="lazy"
                        decoding="async"
                        alt={reference.name}
                        className="client-img"
                      />
                      <div className="client-info">
                        <a
                          href={reference.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${reference.name} on LinkedIn (opens in a new tab)`}
                          className="client-text-link reference-name-link text-weight-medium"
                        >
                          <span className="reference-name-text">
                            {reference.name}
                          </span>
                          <span className="reference-linkedin-icon">
                            <LinkedinLogoIcon
                              weight="fill"
                              aria-hidden="true"
                              className="size-full"
                            />
                          </span>
                        </a>
                        <p className="client-text-small">{reference.role}</p>
                        <p className="client-text-small">{reference.company}</p>
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
