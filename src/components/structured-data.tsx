import { profile } from "@/content/profile";
import { site } from "@/content/site";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: site.name,
      alternateName: profile.name,
      inLanguage: site.language,
      publisher: { "@id": `${site.url}/#person` },
    },
    {
      "@type": "ProfilePage",
      "@id": `${site.url}/#profile`,
      url: site.url,
      name: site.title,
      description: site.description,
      inLanguage: site.language,
      isPartOf: { "@id": `${site.url}/#website` },
      mainEntity: { "@id": `${site.url}/#person` },
    },
    {
      "@type": "Person",
      "@id": `${site.url}/#person`,
      name: profile.fullName,
      alternateName: profile.name,
      jobTitle: "Software Engineer",
      url: site.url,
      image: `${site.url}${profile.image}`,
      description: profile.description,
      sameAs: Object.values(profile.socials),
      subjectOf: {
        "@type": "DigitalDocument",
        name: `${profile.fullName} — CV`,
        url: `${site.url}${profile.cv.path}`,
        encodingFormat: "application/pdf",
        inLanguage: site.language,
      },
    },
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
