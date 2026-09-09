export type ProjectPreviewKind =
  "dapps" | "verifier" | "fono" | "sicar" | "sonrisas" | "greenloop" | "more";

export type Project = {
  id: string;
  title: string;
  context: string;
  description: string;
  tags: readonly string[];
  preview: ProjectPreviewKind;
  previewAlt: string;
  status?: string;
};

// Project scope and stacks supplied by Andrés. Preview interfaces use sample data.
export const projects: readonly Project[] = [
  {
    id: "gen6-dapps",
    title: "Gen6 dApps",
    context: "Built at Gen6",
    description:
      "A blockchain platform for publishing and verifying content, managing balances and transactions, encrypted member chat, and network node monitoring.",
    tags: [
      "React",
      "Flask",
      "PostgreSQL",
      "Substrate / Polkadot",
      "Encrypted chat",
      "Node monitoring",
    ],
    preview: "dapps",
    previewAlt:
      "Illustrative Gen6 interface with verified content, an account balance, and encrypted member messaging.",
  },
  {
    id: "gen6-verifier",
    title: "Gen6 Verifier",
    context: "Built at Gen6",
    description:
      "A decentralized application that can be installed locally to verify files and identities against records on the Gen6 blockchain.",
    tags: [
      "React",
      "Flask",
      "PostgreSQL",
      "Blockchain verification",
      "Local installation",
    ],
    preview: "verifier",
    previewAlt:
      "Illustrative local verification workflow matching a file with its record on the Gen6 blockchain.",
  },
  {
    id: "fono",
    title: "FONO",
    context: "Built at Gen6",
    description:
      "An event ticketing platform in development, using blockchain to support ticket verification with security and user privacy in mind.",
    tags: ["React", "Flask", "PostgreSQL", "Blockchain", "Digital ticketing"],
    preview: "fono",
    previewAlt: "Illustrative FONO event page and digital admission ticket.",
    status: "In development",
  },
  {
    id: "sicar",
    title: "SICAR",
    context: "Freelance project",
    description:
      "An internal research platform that uses RAG and LLMs to retrieve relevant Colombian tax regulations and ground answers in source documents.",
    tags: ["React", "FastAPI", "PostgreSQL", "RAG", "LLMs", "Semantic search"],
    preview: "sicar",
    previewAlt:
      "Illustrative SICAR research interface retrieving source documents for a Colombian tax query.",
  },
  {
    id: "lab-sonrisas",
    title: "Lab Sonrisas Dashboard",
    context: "Built at Prevalentware",
    description:
      "An internal operations platform for managing customers, product orders, shipments, and invoicing in one connected workflow.",
    tags: [
      "React",
      "Express",
      "GraphQL",
      "PostgreSQL",
      "Order management",
      "Invoicing",
    ],
    preview: "sonrisas",
    previewAlt:
      "Illustrative Lab Sonrisas dashboard showing customer orders moving through production, shipping, and invoicing.",
  },
  {
    id: "greenloop",
    title: "GreenLoop Dashboard",
    context: "Built at Prevalentware",
    description:
      "An internal workspace for planning projects, tracking timelines and deadlines, and keeping teams updated through Gantt charts and notifications.",
    tags: [
      "React",
      "Express",
      "GraphQL",
      "PostgreSQL",
      "Gantt charts",
      "Notifications",
    ],
    preview: "greenloop",
    previewAlt:
      "Illustrative GreenLoop workspace with a project schedule, Gantt chart, and a deadline notification.",
  },
  {
    id: "many-more",
    title: "Many more",
    context: "Beyond this selection",
    description:
      "More private projects, personal experiments, and small ideas that turned into software. Some built for others, some just to try something new.",
    tags: ["Private projects", "Personal work", "Experiments"],
    preview: "more",
    previewAlt:
      "Playful collage of interface sketches, code fragments, charts, and a mobile app idea, with an and more note.",
  },
];
