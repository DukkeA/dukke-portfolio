import { SourceIcon } from "../source-icons";
import { FaqGroup, FaqItem } from "../faq-item";

export function Footer() {
  return (
    <footer className={"footer"}>
      <div className={"content-container"}>
        <div className={"footer-logo"}>
          <div className={"w-embed"}>
            <SourceIcon
              name="asset45"
              xmlns={"http://www.w3.org/2000/svg"}
              viewBox={"0 0 1388 338"}
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
      </div>
    </footer>
  );
}
