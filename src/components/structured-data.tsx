import { profile } from "@/content/profile";
import { projects } from "@/content/projects";
import { serviceAreas } from "@/content/services";
import { site } from "@/content/site";

const personId = `${site.url}/#person`;
const profileId = `${site.url}/#profile`;
const selectedProjects = projects.filter(
  (project) => project.preview !== "more",
);

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: `${site.url}/`,
      name: site.name,
      alternateName: [profile.name, profile.fullName, profile.legalName],
      description: site.description,
      inLanguage: site.language,
      publisher: { "@id": `${site.url}/#person` },
    },
    {
      "@type": "ProfilePage",
      "@id": profileId,
      url: `${site.url}/`,
      name: site.title,
      description: site.description,
      inLanguage: site.language,
      isPartOf: { "@id": `${site.url}/#website` },
      mainEntity: { "@id": `${site.url}/#person` },
      primaryImageOfPage: `${site.url}${profile.image}`,
      hasPart: selectedProjects.map((project) => ({
        "@id": `${site.url}/#project-${project.id}-title`,
      })),
      mentions: serviceAreas.map((area) => ({
        "@id": `${site.url}/#service-${area.id}`,
      })),
    },
    {
      "@type": "Person",
      "@id": personId,
      name: profile.fullName,
      alternateName: [
        profile.name,
        profile.legalName,
        "Andres Duque",
        "Andres David Duque Cadena",
      ],
      givenName: "Andrés David",
      familyName: "Duque Cadena",
      jobTitle: "Software Engineer",
      url: `${site.url}/`,
      image: `${site.url}${profile.image}`,
      description: site.personDescription,
      mainEntityOfPage: { "@id": profileId },
      knowsAbout: [
        "Software engineering",
        "Full-stack development",
        "API design",
        "Database design",
        "Cloud infrastructure",
        "Blockchain applications",
        "Retrieval-augmented generation (RAG)",
      ],
      sameAs: Object.values(profile.socials),
      subjectOf: {
        "@type": "DigitalDocument",
        name: `${profile.fullName} — CV`,
        url: `${site.url}${profile.cv.path}`,
        encodingFormat: "application/pdf",
        inLanguage: site.language,
        about: { "@id": personId },
        author: { "@id": personId },
      },
    },
    ...selectedProjects.map((project) => ({
      "@type": "CreativeWork",
      "@id": `${site.url}/#project-${project.id}-title`,
      url: `${site.url}/#project-${project.id}-title`,
      name: project.title,
      description: project.description,
      keywords: project.tags,
      contributor: { "@id": personId },
      isPartOf: { "@id": profileId },
      inLanguage: site.language,
    })),
    ...serviceAreas.map((area) => ({
      "@type": "Service",
      "@id": `${site.url}/#service-${area.id}`,
      url: `${site.url}/#service-${area.id}`,
      name: area.title,
      serviceType: area.title,
      description: area.description,
      provider: { "@id": personId },
    })),
  ],
};

export function StructuredData() {
  return (
    <script
      id="portfolio-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
      }}
    />
  );
}
