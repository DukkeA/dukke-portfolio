import type { Project } from "@/content/projects";
import { ProjectPreview } from "./project-preview";

export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <article
      className="work-card portfolio-project"
      aria-labelledby={`project-${project.id}-title`}
      data-project={project.id}
    >
      <div className="project-meta">
        <span className="project-number">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span>{project.context}</span>
        {project.status && (
          <span className="project-status">{project.status}</span>
        )}
      </div>
      <ProjectPreview kind={project.preview} label={project.previewAlt} />
      <div className="project-details">
        <h3 id={`project-${project.id}-title`} className="work-card-heading">
          {project.title}
        </h3>
        <p className="project-description">{project.description}</p>
        <ul
          className="project-tags"
          aria-label={`${project.title} technologies and features`}
        >
          {project.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
