export type ProfessionalReference = {
  id: string;
  name: string;
  role: string;
  company: string;
  relationship: string;
  linkedin: string;
  image: string;
  title: string;
  message: string;
};

// Roles, companies, and photos checked on LinkedIn on 2026-09-08.
// Andrés confirmed that the listed people have approved these messages.
export const professionalReferences: ProfessionalReference[] = [
  {
    id: "juan-andres-lopez-motta",
    name: "Juan Andres Lopez Motta",
    role: "Backend Engineer",
    company: "PlatformX Solutions",
    relationship: "University & freelance projects",
    linkedin: "https://www.linkedin.com/in/jualopezmo/",
    image: "/assets/references/juan-andres-lopez-motta.jpg",
    title: "Thinks beyond his part of the code.",
    message:
      "Andrés and I have worked together since university, including on freelance projects. He takes time to understand how the pieces fit together, from the interface to the API behind it. I appreciate being able to discuss a technical decision with him and come away with a clearer, simpler approach.",
  },
  {
    id: "martin-david-galvan-castro",
    name: "Martin David Galvan Castro",
    role: "Software Engineer",
    company: "Global66",
    relationship: "University & freelance projects",
    linkedin:
      "https://www.linkedin.com/in/martin-david-galvan-castro-0809a0201/",
    image: "/assets/references/martin-david-galvan-castro.jpg",
    title: "Easy to plan with. Easy to work with.",
    message:
      "Working with Andrés feels straightforward. We agree on what needs doing, keep each other in the loop, and talk through problems early. That made a real difference in our freelance work, where we often had to figure things out together and make good use of the time we had.",
  },
  {
    id: "diego-fonseca-gonzalez",
    name: "Diego Augusto Fonseca Gonzalez",
    role: "Software Engineer",
    company: "Mercado Libre",
    relationship: "University classmate",
    linkedin: "https://www.linkedin.com/in/diego-fonseca-gonzalez/",
    image: "/assets/references/diego-fonseca-gonzalez.jpg",
    title: "Always wants to understand why.",
    message:
      "I remember Andrés as someone who would keep exploring a topic after the assignment was done. At university, he liked trying things out, asking questions, and sharing what he had figured out. Studying with him often turned into a good conversation about how something actually worked.",
  },
  {
    id: "camila-andrea-jimenez-lopez",
    name: "Camila Andrea Jiménez López",
    role: "Backend Developer",
    company: "Yalutec",
    relationship: "Former teammate at Prevalent",
    linkedin:
      "https://www.linkedin.com/in/camila-andrea-jim%C3%A9nez-l%C3%B3pez-6a20941b9/",
    image: "/assets/references/camila-andrea-jimenez-lopez.jpg",
    title: "Pays attention to the details.",
    message:
      "At Prevalent, I appreciated the care Andrés put into his work. He would look beyond whether a feature worked and think about edge cases, how the data arrived, and what another developer would need to understand later. He was also open to feedback, which made reviewing work together much easier.",
  },
  {
    id: "laura-vera",
    name: "Laura Vera",
    role: "Frontend Web Developer",
    company: "SETI S.A.S · Bancolombia",
    relationship: "Former teammate at Prevalent",
    linkedin: "https://www.linkedin.com/in/laura-vera-web-development/",
    image: "/assets/references/laura-vera.jpg",
    title: "Someone you can ask for help.",
    message:
      "Andrés was an approachable teammate at Prevalent. If I had a question, he would take the time to walk through it with me and explain his reasoning. I liked that we could share ideas, learn from each other, and ask for a second opinion without making it a big thing.",
  },
  {
    id: "miguel-landazuri",
    name: "Miguel Landázuri",
    role: "Regional Solution Engineer",
    company: "ISS · Intelligent Security Systems",
    relationship: "Collaborator across professional projects",
    linkedin: "https://www.linkedin.com/in/miguel-landazuri-desarrollo-web/",
    image: "/assets/references/miguel-landazuri.jpg",
    title: "Gets comfortable with the unfamiliar.",
    message:
      "We've collaborated on different projects, each with its own tools and constraints. Andrés is willing to get into unfamiliar code, ask the right questions, and work out a practical next step. He stays involved when a problem crosses frontend and backend, and follows it through instead of just handing it off.",
  },
  {
    id: "sebastian-agreda",
    name: "Sebastian Agreda",
    role: "Senior Fullstack Developer",
    company: "Source Meridian",
    relationship: "Former CTO at Nevato · friend",
    linkedin: "https://www.linkedin.com/in/sebastian-agreda-b9391792/",
    image: "/assets/references/sebastian-agreda.jpg",
    title: "Good to see how far he's come.",
    message:
      "I worked with Andrés at Nevato early in his software career, and we've stayed friends since. He was keen to learn and willing to take responsibility for his work. It's been good to see him build on that over the years while remaining the same thoughtful, down-to-earth person I got to know.",
  },
];
