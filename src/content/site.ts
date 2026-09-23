export const site = {
  url: "https://www.andres-duque.com",
  name: "Andrés Duque · Dukke",
  title: "Andrés Duque — Software Engineer",
  description:
    "Andrés Duque (Andrés David Duque Cadena) is a software engineer building full-stack applications with React, Next.js, Python and PostgreSQL. Explore his work and CV.",
  personDescription:
    "Andrés David Duque Cadena is a software engineer working across frontend, backend, databases and cloud infrastructure, with experience in blockchain platforms and AI applications.",
  socialImageAlt:
    "Andrés Duque, MSc Software Engineer — full-stack web applications, APIs and cloud infrastructure.",
  locale: "en_US",
  language: "en",
} as const;

// Production builds are indexable; development and Vercel previews are not.
export const isIndexable =
  process.env.NODE_ENV === "production" &&
  (!process.env.VERCEL_ENV || process.env.VERCEL_ENV === "production");
