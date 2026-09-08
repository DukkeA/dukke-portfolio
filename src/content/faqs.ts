import { profile } from "./profile";

export const faqs = [
  {
    question: "What kind of software do you build?",
    answer:
      "I build web applications, from the interface to the services and data behind it. That includes customer-facing products, internal tools, dashboards, and API integrations. My background is in full-stack development, with a strong focus on frontend work.",
  },
  {
    question: "Can you work on an existing product?",
    answer:
      "Yes. I can help with new features, bugs, performance, or parts of a codebase that have become difficult to maintain. I start by understanding how the product works and what the team needs, then work through the changes in manageable steps.",
  },
  {
    question: "How do you approach a new project?",
    answer:
      "We start with what you're trying to do, who will use it, and any constraints. From there, we agree on a scope and priorities. I build in stages, share progress, and make room for feedback before moving on to the next part.",
  },
  {
    question: "Can you work alongside our team?",
    answer:
      "I've worked closely with designers, backend engineers, and product teams. I'm comfortable discussing technical decisions, reviewing code, and working within an existing process. If you're looking for another engineer for your team, tell me about the role and we can explore whether it's a good fit.",
  },
  {
    question: "Which technologies do you work with?",
    answer:
      "Most of my work uses React, Next.js, TypeScript, and Tailwind. On the backend, I work with Node.js, Python, APIs, and PostgreSQL. I also use tools such as Prisma, Docker, GitHub, and Vercel. The choice depends on the product and the people who will maintain it.",
  },
  {
    question: "Do you handle design and development?",
    answer:
      "Software engineering is my main focus. I can turn a design into a polished, responsive interface and help refine layouts, interactions, and accessibility along the way. I also enjoy working with designers when a project needs a more specific visual direction.",
  },
  {
    question: "What happens after a release?",
    answer:
      "I can help with fixes, monitoring, performance improvements, and new features. I also leave useful documentation so the work is easier to continue. We can agree on the support you need based on the product and the team taking care of it.",
  },
  {
    question: "What's the best way to get in touch?",
    answer: `Email me at ${profile.email}. A short note about your project, a role, or something you'd like to discuss is enough to get started. You can also find me on LinkedIn and GitHub through the links on this page.`,
  },
] as const;
