import { projects } from "@/content/projects";
import { SourceIcon } from "./source-icons";
type Project = (typeof projects)[number];
export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <a
      aria-label={`View ${project.title} project`}
      className="work-card w-inline-block"
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        alt={project.imageAlt}
        className="work-image"
        loading="lazy"
        src={project.image}
      />
      <div className="w-embed">
        <video
          className="work-bg absolute inset-0 size-full object-cover"
          data-src={project.background}
          loop
          muted
          playsInline
          poster={project.backgroundPoster}
          preload="none"
        />
      </div>
      <div className="work-card-content">
        <div className="work-card-content-top-layout">
          <div className="work-label">{String(index + 1).padStart(2, "0")}</div>
          <div className="work-label-wrap">
            {project.tags.map((tag) => (
              <div className="work-label" key={tag}>
                {tag}
              </div>
            ))}
          </div>
        </div>
        <div className="w-embed">
          <video
            className="work-video absolute inset-0 size-full object-contain"
            data-webm={project.foregroundWebm}
            data-mov={project.foregroundMov}
            loop
            muted
            playsInline
            poster={project.foregroundPoster}
            preload="none"
          />
        </div>
        <div className="work-card-content-bottom-layout">
          <h3 className="work-card-heading">{project.title}</h3>
          <p className="op80">{project.description}</p>
          <div className="work-card-arrow-wrap">
            <div className={"work-card-arrow-icon"}>
              <SourceIcon
                name="asset1"
                xmlns={"http://www.w3.org/2000/svg"}
                width={"100%"}
                viewBox={"0 0 23 23"}
                fill={"none"}
                className={"work-card-arrow"}
              />
              <SourceIcon
                name="asset1"
                xmlns={"http://www.w3.org/2000/svg"}
                width={"100%"}
                viewBox={"0 0 23 23"}
                fill={"none"}
                className={"work-card-arrow-2"}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="work-image-overlay" />
    </a>
  );
}
