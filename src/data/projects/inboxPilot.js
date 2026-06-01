const inboxPilot = {
  slug: "inbox-pilot",

  title: "Inbox Pilot",

  type: "Full-Stack AI Application",

  category: "AI / Full-Stack",

  featured: true,

  image: "/projects/inbox-pilot/hero.png",

  heroLayout: "portrait",

  imageCaption:
    "AI-powered email assistant interface showing unified inbox, AI summaries, workflow recommendations, and productivity tracking features.",

  architectureDiagram:
  "/projects/inbox-pilot/architecture.png",

  architectureCaption:
  "Implementation-level architecture showing how the Next.js frontend communicates with FastAPI route handlers, service layers, repositories, Gmail integrations, AI services, and PostgreSQL persistence. The design separates frontend features, business logic, provider integrations, and storage concerns to support future providers and agentic workflows.",

  gallery: [
     {
      src: "/projects/inbox-pilot/inbox.png",
      caption: "Unified inbox view displaying synchronized Gmail emails with search, filtering, and detailed email browsing capabilities.",
    },
    {
      src: "/projects/inbox-pilot/prioritized.png",
      caption: "AI-prioritized inbox that classifies emails by urgency and recommends actions to help users focus on the most important messages first.",
    },
    {
      src: "/projects/inbox-pilot/summary.png",
      caption: "AI-generated email summaries that extract key context, priorities, deadlines, and required actions from incoming messages.",
    },
    {
      src: "/projects/inbox-pilot/workflow.png",
      caption: "Workflow recommendation engine that analyzes emails and suggests actionable next steps such as follow-ups, task creation, and priority review.",
    },
    {
      src: "/projects/inbox-pilot/drafting.png",
      caption: "AI draft reply generation that creates context-aware email responses directly from synchronized inbox content.",
    },
    {
      src: "/projects/inbox-pilot/productivity.png",
      caption: "Local productivity timeline that converts actionable emails into tracked tasks and follow-ups with completion and management controls.",
    },
    {
      src: "/projects/inbox-pilot/providers.png",
      caption: "Provider management dashboard showing connected Gmail accounts and the platform’s future multi-provider architecture roadmap.",
    },
    {
      src: "/projects/inbox-pilot/health.png",
      caption: "API health monitoring endpoint verifying application availability and operational status for backend services.",
    },
    {
      src: "/projects/inbox-pilot/healthdb.png",
      caption: "Database health monitoring endpoint confirming successful PostgreSQL connectivity and backend data layer availability.",
    },
  ],

  video: "",

  github: "",

  demo: "",

  description:
    "A full-stack AI email assistant that summarizes emails, drafts replies, recommends workflows, and converts messages into tracked productivity tasks.",

  overview:
    "InboxPilot is an AI-powered email productivity platform designed to reduce inbox overload by turning emails into summaries, draft replies, workflow recommendations, and local productivity tasks. The application syncs Gmail messages into a normalized PostgreSQL backend, processes email content through AI services, and presents the results in a polished Next.js dashboard. Its backend is organized around provider-agnostic services, integration layers, persistence repositories, health checks, rate limiting, caching, and an MCP-compatible tool layer for future agent integrations.",

  technologies: [
    "Next.js",
    "TypeScript",
    "FastAPI",
    "PostgreSQL",
    "Gmail API",
    "Anthropic API",
    "Provider Abstraction",
    "MCP-Compatible Tools",
    "REST APIs",
    "Rate Limiting",
    "Health Checks",
  ],

  achievements: [
    "Built AI-powered email summaries, priority classification, draft reply generation, and workflow recommendations.",
    "Synchronized Gmail data into a normalized PostgreSQL model with provider-aware account storage.",
    "Designed a modular backend with route, service, integration, sync, persistence, cache, and observability layers.",
    "Implemented a local productivity timeline that converts actionable emails into tracked tasks and follow-ups.",
    "Added health checks, rate limiting, encrypted token handling, and provider management screens.",
  ],

  challenges: [
    "Designing a provider-agnostic architecture while supporting real Gmail synchronization.",
    "Structuring Gmail data into a clean relational model without leaking provider-specific details into business logic.",
    "Balancing AI automation with user-controlled actions such as summaries, draft replies, workflow suggestions, and task creation.",
    "Keeping cached AI results scoped safely across users, accounts, prompts, and model versions.",
  ],

  lessons: [
    "Gained experience designing full-stack AI-assisted productivity workflows.",
    "Improved backend architecture skills through service layers, repositories, provider abstractions, and sync reconciliation.",
    "Learned how to integrate Gmail data with normalized database storage and AI processing.",
    "Practiced building frontend interfaces with searchable dashboards, modals, empty states, and error handling.",
  ],

  futureImprovements: [
    "Add Outlook and additional provider integrations.",
    "Improve workflow recommendation accuracy and allow users to run multi-step workflows.",
    "Add richer productivity analytics and task filtering.",
    "Replace development user switching with production authentication.",
  ],
};

export default inboxPilot;