import { projects } from "@/content/projects";
import { ProjectCard } from "../project-card";

export function Projects() {
  return (
    <section id={"work"} data-theme={"dark"} className={"work_section"}>
      <div className={"work-sticky-support"}></div>
      <div id={"projects"} className={"work-sticky"}>
        <div className={"work-container"}>
          <div className={"work-top-layout"}>
            <div
              id={"w-node-_5e7c5502-ddba-215f-98c3-2549ffbe64ae-be2d4114"}
              className={"column"}
            >
              <div
                data-tl-once={""}
                data-tl-type={"trigger"}
                data-tl-trigger={".work-sticky"}
                data-tl-start={"top 80%"}
                data-tl-from={"{'width':'0vw','opacity':0}"}
                data-tl-to={
                  "{   'width':'auto',   'opacity':1,   'duration':0.7,   'ease':'expo.inOut' }"
                }
                className={"label is-secondary"}
              >
                {"SELECTED WORK"}
              </div>
              <h2
                data-tl-once={""}
                data-tl-type={"trigger"}
                data-tl-trigger={".work-sticky"}
                data-tl-start={"top 80%"}
                data-tl-split={"lines"}
                data-tl-from={"{'yPercent': 100}"}
                data-tl-to={
                  "{'yPercent': 0,  'duration': 0.6, 'stagger': 0.1, 'delay': 0.3, 'ease': 'power2.out'}"
                }
                className={"h2-style-white"}
              >
                {"Built in Webflow,"}
                <br />
                {"Made to Perform"}
              </h2>
            </div>
            <div
              id={"w-node-_5e7c5502-ddba-215f-98c3-2549ffbe64b5-be2d4114"}
              className={"work-top-text"}
            >
              <p
                data-tl-once={""}
                data-tl-type={"trigger"}
                data-tl-trigger={".work-sticky"}
                data-tl-start={"top 80%"}
                data-tl-split={"lines"}
                data-tl-from={"{'yPercent': 100}"}
                data-tl-to={
                  "{'yPercent': 0,  'duration': 0.6, 'stagger': 0.1, 'delay': 0.3, 'ease': 'power2.out'}"
                }
              >
                {
                  "Over seven years I've helped businesses across different industries turn their ideas into websites that look and work exactly how they imagined. Here's a look at some of that work."
                }
              </p>
            </div>
          </div>
          <div className={"work-track-wrap"}>
            <div className={"work-track"}>
              {projects.map((project, index) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
