export const site = {
  url: "https://andres-duque.com",
  name: "Andrés Duque · Dukke",
  title: "Andrés Duque — Software Engineer · Dukke",
  description:
    "Andrés Duque (Dukke), software engineer building web applications across frontend, backend, and infrastructure. Explore my experience, services, and CV.",
  locale: "en_US",
  language: "en",
} as const;

// Production builds are indexable; development and Vercel previews are not.
export const isIndexable =
  process.env.NODE_ENV === "production" &&
  (!process.env.VERCEL_ENV || process.env.VERCEL_ENV === "production");
