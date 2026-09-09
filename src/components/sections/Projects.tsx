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
                {"A few things"}
                <br />
                {"I've built."}
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
                  "Blockchain applications, internal tools, and AI-assisted research. A selection of work from Gen6, Prevalentware, and freelance projects, with more private and personal projects behind the scenes."
                }
              </p>
            </div>
          </div>
          <div
            className="project-pagination"
            role="group"
            aria-label="Choose a project"
          >
            {projects.map((project, index) => (
              <button
                key={project.id}
                type="button"
                className="project-pagination-button"
                data-project-index={index}
                aria-label={`Show project ${index + 1}: ${project.title}`}
                aria-current={index === 0 ? "true" : undefined}
                aria-controls="project-track"
              >
                <span />
              </button>
            ))}
          </div>
          <div
            className="work-track-wrap"
            tabIndex={0}
            role="region"
            aria-label="Selected projects"
          >
            <div id="project-track" className={"work-track"}>
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
