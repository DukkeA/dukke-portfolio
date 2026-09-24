export const architectureStudies = [
  {
    id: "modular-monolith",
    title: "Start simple. Keep boundaries.",
    pattern: "Modular monolith",
    description:
      "A commerce application with clear module contracts, owned database schemas, and durable background jobs. One deployment, without mixing every responsibility together.",
    benefit: "Simple deployments, local calls, and consistent transactions.",
    tradeoff:
      "Modules share a release cycle. Boundaries need care as the team grows.",
    tags: ["Domain boundaries", "Single deployment", "PostgreSQL"],
  },
  {
    id: "ports-adapters",
    title: "Keep the rules at the center.",
    pattern: "Hexagonal architecture",
    description:
      "A payment workflow with HTTP and webhook entry points, application-owned ports, and replaceable payment and database adapters. Business rules stay independent of the provider.",
    benefit: "Test use cases without a server or a real database.",
    tradeoff: "Extra interfaces pay off when the domain has enough complexity.",
    tags: ["Ports & adapters", "Dependency inversion", "Testability"],
  },
  {
    id: "event-driven",
    title: "Let each part work at its pace.",
    pattern: "Event-driven architecture",
    description:
      "An order and its outbox entry are committed together. Independent consumers deduplicate events, update their own state, and isolate failed deliveries for controlled recovery.",
    benefit: "Background work can scale and recover independently.",
    tradeoff:
      "Plan for duplicate delivery, eventual consistency, and failed messages.",
    tags: ["Transactional outbox", "Idempotency", "Async messaging"],
  },
  {
    id: "cloud-topology",
    title: "Know what is exposed.",
    pattern: "Cloud infrastructure",
    description:
      "A protected edge, stateless API replicas, private data, caching, and background workers. The topology makes ingress, identity checks, and durable storage explicit.",
    benefit:
      "Clear ingress, private data access, and room to scale the application tier.",
    tradeoff:
      "More infrastructure means more cost, monitoring, and operational ownership.",
    tags: ["Network boundaries", "Managed data", "Containers"],
  },
  {
    id: "aws-platform",
    title: "From the edge to the worker.",
    pattern: "AWS application platform",
    description:
      "CloudFront serves a React frontend from private S3 storage and routes API traffic to an internal load balancer. Fargate services connect to RDS, while workers process SQS jobs and store files in a separate S3 bucket.",
    benefit:
      "Scale web traffic and background processing separately, with private origins and managed storage.",
    tradeoff:
      "IAM policies, network access, queue retries, and cloud costs need ongoing attention.",
    tags: ["CloudFront & S3", "ECS Fargate", "SQS & RDS"],
  },
  {
    id: "request-lifecycle",
    title: "Follow the request all the way.",
    pattern: "Async request lifecycle",
    description:
      "A report export moves from an idempotent request to a durable job, a private file, and an authorized status check. A separate failure path schedules bounded retries.",
    benefit:
      "Make security checks and service contracts visible before implementation.",
    tradeoff:
      "Leases, retry limits, and stable artifact keys matter when work is delivered more than once.",
    tags: ["Idempotency", "Leased jobs", "Bounded retries"],
  },
] as const;

export const architectureSlides = architectureStudies.map((study) => ({
  ...study,
  src: `/assets/architecture/${study.id}.html?theme=dark`,
}));

export type ArchitectureSlide = (typeof architectureSlides)[number];
