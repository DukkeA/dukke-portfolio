export type JourneyEntry = {
  id: string;
  year?: string;
  phase?: string;
  title: string;
  summary: string;
  story: string;
  image?: string;
  imageAlt?: string;
  whiteLogo?: boolean;
  symbol?: "code";
  tags: readonly string[];
};

export const journey: readonly JourneyEntry[] = [
  {
    id: "first-curiosity",
    phase: "Early days",
    title: "A different kind of problem",
    summary:
      "During my civil engineering degree at Universidad Nacional, programming started to catch my attention. I wanted to understand what I could do with it.",
    story:
      "I was studying civil engineering at Universidad Nacional de Colombia when programming began to interest me. I liked the idea of writing instructions, trying them out, and seeing what happened. Alongside my degree, that curiosity gradually made room for something new.",
    tags: ["Curiosity", "Problem solving"],
  },
  {
    id: "a-hobby",
    phase: "A hobby",
    title: "It started just for fun",
    summary:
      "I began learning to code in my spare time. Small projects and plenty of questions gave me reasons to keep coming back.",
    story:
      "At first, programming was something I did because I enjoyed it. I spent time learning, trying small projects, and working through the things I didn't understand. Little by little, a hobby became something I wanted to take more seriously.",
    symbol: "code",
    tags: ["Personal projects", "Practice"],
  },
  {
    id: "nevato",
    year: "2021",
    title: "My first team",
    summary:
      "Nevato gave me my first opportunity as a frontend developer. I built interfaces with React and learned what it takes to deliver work for clients.",
    story:
      "At Nevato, I worked on responsive interfaces, reusable components, and features for client projects. React, Tailwind, and REST APIs became part of my daily work. It was my first experience building software as part of a team, with people depending on what we delivered.",
    image: "/assets/journey/nevato.png",
    imageAlt: "Nevato",
    whiteLogo: true,
    tags: ["React", "Tailwind", "REST APIs"],
  },
  {
    id: "web-development",
    year: "2022",
    title: "Making room to study",
    summary:
      "A web development program at Universidad Tecnológica de Pereira gave my learning more structure, alongside the things I was discovering at work.",
    story:
      "I completed a web development program at Universidad Tecnológica de Pereira. Studying alongside practical experience gave me another way to approach what I was learning. I could bring questions from my work into my studies, then put what I learned into practice.",
    image: "/assets/journey/utp.png",
    imageAlt: "Universidad Tecnológica de Pereira",
    tags: ["Web development", "Further study"],
  },
  {
    id: "prevalentware",
    year: "2022",
    title: "Beyond the interface",
    summary:
      "At Prevalentware, I moved into full-stack development. My work grew to include APIs, databases, and the connections behind the interface.",
    story:
      "I joined Prevalentware as a full-stack developer, working across frontend and backend. Alongside React and Next.js, I used GraphQL, Prisma, and PostgreSQL. Following a feature from its interface down to its data helped me understand how the different parts of an application fit together.",
    image: "/assets/journey/prevalentware.png",
    imageAlt: "Prevalentware",
    whiteLogo: true,
    tags: ["Next.js", "GraphQL", "PostgreSQL"],
  },
  {
    id: "g6-networks",
    year: "2024",
    title: "More pieces to connect",
    summary:
      "At G6 Networks, I build web applications that connect APIs and blockchain services, working closely with backend and product teams.",
    story:
      "My work at G6 Networks brings together React, TypeScript, Next.js, and integrations with APIs and blockchain infrastructure. I work with backend and product teams on architecture and the experience people use. I've also built internal proofs of concept and contributed to a winning hackathon project.",
    image: "/assets/journey/gen6.svg",
    imageAlt: "Gen6, G6 Networks",
    whiteLogo: true,
    tags: ["TypeScript", "APIs", "Blockchain"],
  },
  {
    id: "masters",
    year: "2025",
    title: "Understanding the decisions",
    summary:
      "My master's studies in Software Engineering at Uniandes brought more attention to architecture, trade-offs, and how software evolves over time.",
    story:
      "The master's in Software Engineering at Universidad de los Andes has been a chance to look more closely at the decisions behind the code. I'm interested in how applications are structured, why a particular approach makes sense, and how to keep a codebase understandable as it grows.",
    image: "/assets/journey/uniandes.svg",
    imageAlt: "Universidad de los Andes",
    whiteLogo: true,
    tags: ["Software engineering", "Architecture"],
  },
  {
    id: "still-learning",
    phase: "Today",
    title: "Still learning, every day",
    summary:
      "There is always something new to try. I keep building small projects, asking questions, and making time to understand the tools I use.",
    story:
      "I still enjoy the part where something doesn't quite make sense yet. These days, that means personal projects, new tools, and exploring how AI can help with everyday engineering work. I keep coming back to the same habit: try something, understand it, and keep learning.",
    tags: ["Side projects", "AI workflows", "Curiosity"],
  },
];
