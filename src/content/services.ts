export const serviceAreas = [
  {
    id: "frontend",
    title: "Frontend & UI",
    outcome: "Interfaces that feel right",
    summary:
      "A design shaped around your product, with thoughtful details, clear interactions, and layouts that feel at home on any screen.",
    description:
      "I turn ideas and designs into interfaces people can use comfortably. From the first screen to the smallest interaction, the details should work together.",
    details: [
      "Custom layouts and reusable UI components",
      "Responsive design, accessibility, and keyboard navigation",
      "Purposeful motion and clear loading, empty, and error states",
      "Page speed, search visibility, and browser compatibility",
    ],
  },
  {
    id: "backend",
    title: "Backend & APIs",
    outcome: "Reliable behind the scenes",
    summary:
      "The logic behind your product, built to handle real workflows, connect your tools, and give the right people the right access.",
    description:
      "I build the services that make an application work: its business rules, integrations, and access controls, with clear boundaries and predictable behavior.",
    details: [
      "API design, implementation, and documentation",
      "Authentication, permissions, and input validation",
      "Third-party integrations, webhooks, and background tasks",
      "Error handling and tests for business-critical flows",
    ],
  },
  {
    id: "data",
    title: "Databases",
    outcome: "Data with a clear structure",
    summary:
      "Information organized around how your product works, with consistent records, efficient queries, and a plan for changes as it grows.",
    description:
      "I design data models around the questions your application needs to answer. A clear structure makes information easier to use, maintain, and protect.",
    details: [
      "Data modeling, relationships, and integrity constraints",
      "Queries and indexes tuned to real usage",
      "Versioned migrations and existing data imports",
      "Access policies, backup setup, and recovery checks",
    ],
  },
  {
    id: "infrastructure",
    title: "Infrastructure & DevOps",
    outcome: "Releases you can rely on",
    summary:
      "A repeatable path from development to production, with checks before release and visibility into how your application is running.",
    description:
      "I set up the environments and delivery process that keep software running. Deployments should be repeatable, problems visible, and recovery planned for.",
    details: [
      "Cloud hosting, containers, and environment configuration",
      "Automated builds, tests, and deployments with CI/CD",
      "Environment variables, secrets, domains, and HTTPS",
      "Logs, health checks, alerts, and release rollbacks",
    ],
  },
  {
    id: "maintenance",
    title: "Testing & maintenance",
    outcome: "Room to keep improving",
    summary:
      "Readable code, useful tests, and clear documentation so the next feature or fix has a sensible place to start.",
    description:
      "I help existing products stay useful as needs change. That means understanding what is there, fixing friction, and making the next change easier.",
    details: [
      "Unit, integration, and end-to-end testing",
      "Code reviews, refactoring, and dependency updates",
      "Performance profiling and targeted bug fixes",
      "Technical documentation, handover, and new features",
    ],
  },
] as const;

export type ServiceAreaId = (typeof serviceAreas)[number]["id"];
