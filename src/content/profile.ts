/** Portfolio identity and shared primary portrait. */
const cvFileName = "CV-Andres-Duque-EN_c.pdf";

export const profile = {
  name: "Dukke",
  fullName: "Andrés Duque",
  image: "/assets/main-photo.png",
  email: "andduque.ing@gmail.com",
  callUrl: "https://wa.me/573202411663",
  cv: {
    fileName: cvFileName,
    path: `/${cvFileName}`,
    assetPath: `/assets/cvs/${cvFileName}`,
  },
  tagline: "MSc Software Engineer",
  description:
    "I build web applications, from the interface to the data behind it. I like clear code, useful details, and understanding how things work.",
  socials: {
    github: "https://github.com/DukkeA",
    linkedin: "https://www.linkedin.com/in/andresduqueing/",
  },
} as const;
