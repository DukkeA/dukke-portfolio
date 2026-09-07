import { SourceIcon } from "../source-icons";

export function Testimonials() {
  return (
    <section id={"testimonial"} className={"testimonial_section"}>
      <div className={"content-container"}>
        <div id={"client_column"} className={"column"}>
          <div
            data-tl-once={""}
            data-tl-type={"trigger"}
            data-tl-trigger={"#client_column"}
            data-tl-start={"top 90%"}
            data-tl-from={"{'width':'0vw','opacity':0}"}
            data-tl-to={
              "{   'width':'auto',   'opacity':1,   'duration':0.7,   'ease':'expo.inOut' }"
            }
            className={"label"}
          >
            {"TESTIMONIALS"}
          </div>
          <h2
            data-tl-once={""}
            data-tl-type={"trigger"}
            data-tl-trigger={"#client_column"}
            data-tl-start={"top 90%"}
            data-tl-split={"lines"}
            data-tl-from={"{'yPercent': 100}"}
            data-tl-to={
              "{'yPercent': 0,  'duration': 0.6, 'stagger': 0.1, 'delay': 0.3, 'ease': 'power2.out'}"
            }
            className={"h2-style margin-bottom-s"}
          >
            {"From People "}
            <br />
            {"I've Worked with"}
          </h2>
        </div>
        <div className={"swiper-main-wrap"}>
          <div className={"swiper-pagination"}>
            <div className={"swiper-bullet"}></div>
          </div>
          <div className={"swiper"}>
            <div className={"swiper-wrapper"}>
              <div className={"swiper-slide"}>
                <div className={"swiper-card"}>
                  <div className={"column"}>
                    <div className={"swiper-card-top"}>
                      <h3 className={"swiper-heading"}>
                        {"Trusted "}
                        <br />
                        {"long-term collaborator."}
                      </h3>
                      <SourceIcon
                        name="asset42"
                        xmlns={"http://www.w3.org/2000/svg"}
                        width={"100%"}
                        viewBox={"0 0 30 30"}
                        fill={"none"}
                        className={"swiper-quote-icon"}
                      />
                    </div>
                    <p>
                      {
                        "Nenad has been a fantastic partner to work with and continues to be an essential part of our team"
                      }
                      <strong>{"."}</strong>
                      {
                        " He communicates clearly and promptly, and his work consistently exceeds expectations. He resolves technical challenges quickly and efficiently, always demonstrating skill, reliability, and a strong commitment to quality."
                      }
                    </p>
                  </div>
                  <div className={"swiper-card-bottom"}>
                    <img
                      src={"/assets/fdd78302-danette-beal.avif"}
                      loading={"lazy"}
                      alt={"Danette Beal | VP of Marketing Alosant"}
                      className={"client-img"}
                    />
                    <div className={"client-info"}>
                      <p className={"text-weight-medium"}>{"Danette Beal"}</p>
                      <p className={"client-text-small"}>{"VP of Marketing"}</p>
                      <a
                        href={"https://www.alosant.com/"}
                        target={"_blank"}
                        className={"client-text-link"}
                        rel={"noopener noreferrer"}
                      >
                        {"Alosant.com"}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className={"swiper-slide"}>
                <div className={"swiper-card"}>
                  <div className={"column"}>
                    <div className={"swiper-card-top"}>
                      <h3 className={"swiper-heading"}>
                        {"Thinks through "}
                        <br />
                        {"the entire experience."}
                      </h3>
                      <SourceIcon
                        name="asset42"
                        xmlns={"http://www.w3.org/2000/svg"}
                        width={"100%"}
                        viewBox={"0 0 30 30"}
                        fill={"none"}
                        className={"swiper-quote-icon"}
                      />
                    </div>
                    <p>
                      {
                        "Nenad doesn't just code Webflow—he thinks through the experience. Motion, pacing, narrative flow: all aligned with technical excellence. The result is sites that feel cohesive, intentional, complete. A true partner in execution. No gaps, no compromises."
                      }
                    </p>
                  </div>
                  <div className={"swiper-card-bottom"}>
                    <img
                      src={"/assets/a9b0cdb7-petar_s.jpeg"}
                      loading={"lazy"}
                      sizes={"100vw"}
                      srcSet={
                        "/assets/007d498b-petar_s-p-500.jpeg 500w, /assets/a9b0cdb7-petar_s.jpeg 800w"
                      }
                      alt={""}
                      className={"client-img"}
                    />
                    <div className={"client-info"}>
                      <p className={"text-weight-medium"}>
                        {"Petar Stojakovic"}
                      </p>
                      <p className={"client-text-small"}>{"Founder "}</p>
                      <a
                        href={"https://www.fiftyseven.co/"}
                        target={"_blank"}
                        className={"client-text-link"}
                        rel={"noopener noreferrer"}
                      >
                        {"fiftyseven.co"}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className={"swiper-slide"}>
                <div className={"swiper-card"}>
                  <div className={"column"}>
                    <div className={"swiper-card-top"}>
                      <h3 className={"swiper-heading"}>
                        {"Reliable, skilled, "}
                        <br />
                        {"and easy to work with."}
                      </h3>
                      <SourceIcon
                        name="asset42"
                        xmlns={"http://www.w3.org/2000/svg"}
                        width={"100%"}
                        viewBox={"0 0 30 30"}
                        fill={"none"}
                        className={"swiper-quote-icon"}
                      />
                    </div>
                    <p>
                      {
                        "Nenad was great to work with! He delivered our websites on time, gave our design team helpful guidance, and suggested smarter solutions that really improved the final results. Super reliable and easy to collaborate with — highly recommend!"
                      }
                    </p>
                  </div>
                  <div className={"swiper-card-bottom"}>
                    <img
                      src={"/assets/5b1bd1a7-klemen-vute.avif"}
                      loading={"lazy"}
                      alt={"Klemen Vute | PM from Povio"}
                      className={"client-img"}
                    />
                    <div className={"client-info"}>
                      <p className={"text-weight-medium"}>{"Klemen Vute"}</p>
                      <p className={"client-text-small"}>{"PM from Povio"}</p>
                      <a
                        href={"https://povio.com/"}
                        target={"_blank"}
                        className={"client-text-link"}
                        rel={"noopener noreferrer"}
                      >
                        {"Povio.com"}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className={"swiper-slide"}>
                <div className={"swiper-card"}>
                  <div className={"column"}>
                    <div className={"swiper-card-top"}>
                      <h3 className={"swiper-heading"}>
                        <strong>
                          {"The details that "}
                          <br />
                          {"set him apart."}
                        </strong>
                      </h3>
                      <SourceIcon
                        name="asset42"
                        xmlns={"http://www.w3.org/2000/svg"}
                        width={"100%"}
                        viewBox={"0 0 30 30"}
                        fill={"none"}
                        className={"swiper-quote-icon"}
                      />
                    </div>
                    <p>
                      {
                        "I’ve worked with Nenad for many years, and he still surprises me with the speed and quality of his work. His attention to the small details, the ones most engineers overlook makes all the difference for great websites. He’s reliable, fun to collaborate with, and consistently delivers beyond expectations. As long as he wants to work with us, we’ll keep building together."
                      }
                    </p>
                  </div>
                  <div className={"swiper-card-bottom"}>
                    <img
                      src={"/assets/af6df2b1-testimonial.avif"}
                      loading={"lazy"}
                      alt={"Johana | Co-Founder Moat agency"}
                      className={"client-img"}
                    />
                    <div className={"client-info"}>
                      <p className={"text-weight-medium"}>
                        {"Johanna Dahlroos"}
                      </p>
                      <p className={"client-text-small"}>
                        {"Co-Founder and Creative Director"}
                      </p>
                      <a
                        href={"https://www.moat-studio.com/"}
                        target={"_blank"}
                        className={"client-text-link"}
                        rel={"noopener noreferrer"}
                      >
                        {"Moat Agency"}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className={"swiper-slide"}>
                <div className={"swiper-card"}>
                  <div className={"column"}>
                    <div className={"swiper-card-top"}>
                      <h3 className={"swiper-heading"}>
                        {"Design-focused, "}
                        <br />
                        {"reliable development."}
                      </h3>
                      <SourceIcon
                        name="asset42"
                        xmlns={"http://www.w3.org/2000/svg"}
                        width={"100%"}
                        viewBox={"0 0 30 30"}
                        fill={"none"}
                        className={"swiper-quote-icon"}
                      />
                    </div>
                    <p>
                      {
                        "We’ve hired Nenad for several projects, and working with him has always been effortless thanks to his good understanding of design. He’s dedicated to perfecting each delivery for our clients, ensuring a smooth and engaging web experience."
                      }
                    </p>
                  </div>
                  <div className={"swiper-card-bottom"}>
                    <img
                      src={"/assets/80b9bd4c-marko-ivanvoic.avif"}
                      loading={"lazy"}
                      alt={"Marko Ivanovic Brand Designer | Legacy"}
                      className={"client-img"}
                    />
                    <div className={"client-info"}>
                      <p className={"text-weight-medium"}>{"Marko Ivanovic"}</p>
                      <p className={"client-text-small"}>{"Legacy Agency"}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={"swiper-slide"}>
                <div className={"swiper-card"}>
                  <div className={"column"}>
                    <div className={"swiper-card-top"}>
                      <h3 className={"swiper-heading"}>
                        {"A developer with a "}
                        <br />
                        {"true product mindset."}
                      </h3>
                      <SourceIcon
                        name="asset42"
                        xmlns={"http://www.w3.org/2000/svg"}
                        width={"100%"}
                        viewBox={"0 0 30 30"}
                        fill={"none"}
                        className={"swiper-quote-icon"}
                      />
                    </div>
                    <p>
                      {
                        "Nenad is a rare blend of speed, quality, and collaboration. He actively contributes ideas that improve how designs translate into development, and he approaches every build with a product mindset. He’s reliable, detail-oriented, and consistently delivers high-quality work on tight timelines."
                      }
                    </p>
                  </div>
                  <div className={"swiper-card-bottom"}>
                    <img
                      src={"/assets/36e0c7ba-chrissy.avif"}
                      loading={"lazy"}
                      alt={"Chrissy Cowdrey | Product Designer"}
                      className={"client-img"}
                    />
                    <div className={"client-info"}>
                      <p className={"text-weight-medium"}>
                        {"Chrissy Cowdrey"}
                      </p>
                      <p className={"client-text-small"}>
                        {"Product/Web Designer"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={"swiper-slide"}>
                <div className={"swiper-card"}>
                  <div className={"column"}>
                    <div className={"swiper-card-top"}>
                      <h3 className={"swiper-heading"}>
                        {"A proven "}
                        <br />
                        {"expert you trust."}
                      </h3>
                      <SourceIcon
                        name="asset42"
                        xmlns={"http://www.w3.org/2000/svg"}
                        width={"100%"}
                        viewBox={"0 0 30 30"}
                        fill={"none"}
                        className={"swiper-quote-icon"}
                      />
                    </div>
                    <p>
                      {
                        "I’ve been working with Nenad for years and have always been impressed by his work ethic, fast turnaround, and attention to detail. Nenad clearly knows his craft, takes a thoughtful and disciplined approach to his work, and consistently delivers results that meet a high professional standard."
                      }
                    </p>
                  </div>
                  <div className={"swiper-card-bottom"}>
                    <img
                      src={"/assets/35bf809b-marko-ilic.avif"}
                      loading={"lazy"}
                      alt={"Marko Ilic | CEO at SeeDesign"}
                      className={"client-img"}
                    />
                    <div className={"client-info"}>
                      <p className={"text-weight-medium"}>{"Marko Ilic"}</p>
                      <p className={"client-text-small"}>{"Founder"}</p>
                      <a
                        href={"https://see.design/"}
                        target={"_blank"}
                        className={"client-text-link"}
                        rel={"noopener noreferrer"}
                      >
                        {"see.design"}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className={"swiper-slide"}>
                <div className={"swiper-card"}>
                  <div className={"column"}>
                    <div className={"swiper-card-top"}>
                      <h3 className={"swiper-heading"}>
                        {"Exceptional leadership and technical ownership."}
                      </h3>
                      <SourceIcon
                        name="asset42"
                        xmlns={"http://www.w3.org/2000/svg"}
                        width={"100%"}
                        viewBox={"0 0 30 30"}
                        fill={"none"}
                        className={"swiper-quote-icon"}
                      />
                    </div>
                    <p>
                      {
                        "We loved working with Nenad on the Autorank website. He showed exceptional leadership throughout the project, taking full ownership of the website infrastructure and guiding key technical decisions. His structured approach and attention to quality ensured a reliable and scalable outcome."
                      }
                    </p>
                  </div>
                  <div className={"swiper-card-bottom"}>
                    <img
                      src={"/assets/97196ff2-bart.avif"}
                      loading={"lazy"}
                      alt={"Bart-Jan Leyts | CEO Autorank"}
                      className={"client-img"}
                    />
                    <div className={"client-info"}>
                      <p className={"text-weight-medium"}>{"Bart-Jan Leyts"}</p>
                      <p className={"client-text-small"}>{"CEO"}</p>
                      <a
                        href={"https://www.autorank.com/"}
                        target={"_blank"}
                        className={"client-text-link"}
                        rel={"noopener noreferrer"}
                      >
                        {"Autorank.com"}
                      </a>
                    </div>
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
