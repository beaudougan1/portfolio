const orderOS = {
  slug: "orderos",

  title: "OrderOS",

  type: "AI Voice Commerce Platform",

  category: "AI / Backend / Voice",

  featured: true,

  image: "/projects/orderos/hero.png",

  heroLayout: "landscape",

  imageCaption:
    "Voice commerce platform interface showing live call ordering, conversation state, order ticketing, and profile-driven business workflows.",

  architectureDiagram: "/projects/orderos/architecture.png",

  architectureCaption:
    "Architecture diagram showing how Twilio voice webhooks flow through a stateful conversation engine, ordering services, profile-specific business logic, catalog data, deterministic pricing, SQLite persistence, and MCP-compatible tool interfaces.",

  gallery: [],

  github: "https://github.com/beaudougan1/OrderOS",

  demo: "",

  description:
    "A profile-driven AI voice commerce platform that lets customers place, modify, review, and complete phone orders using deterministic business logic and LLM-assisted language interpretation.",

  overview:
    "OrderOS is a conversational commerce platform for phone-based ordering workflows. It uses Twilio Voice, FastAPI, SQLite, profile-driven business logic, catalog-aware ordering, and LLM-assisted interpretation to support live delivery and pickup orders. Claude interprets customer language, while backend services handle pricing, validation, fulfillment, persistence, receipt generation, and call completion. The system currently supports pizza and coffee profiles with stateful multi-turn conversations, order modifications, safety guardrails, ticket rendering, and automated test coverage.",

  technologies: [
    "Python",
    "FastAPI",
    "Twilio Voice",
    "SQLite",
    "Anthropic API",
    "MCP-Compatible Tools",
    "Repository Pattern",
    "Profile-Driven Architecture",
    "Catalog-Driven Workflows",
    "State Machine",
    "TwiML",
    "Pytest",
  ],

  achievements: [
    "Built a live Twilio voice ordering system supporting delivery and pickup workflows from greeting through order completion.",
    "Designed a deterministic commerce architecture that separates LLM interpretation from pricing, validation, fulfillment, persistence, and order execution.",
    "Implemented a stateful multi-turn conversation engine for clarification, order review, modification, confirmation, cancellation, and no-input handling.",
    "Added profile-driven business behavior for pizza and coffee workflows using shared catalog and ordering services.",
    "Implemented privacy-preserving transcript handling and deterministic safety guardrails before LLM routing.",
    "Built order persistence, ticket rendering, conversation history inspection, receipt generation, courtesy responses, and automatic call hangup behavior.",
    "Validated the platform with 360 automated tests covering conversation flows, ordering logic, profiles, catalogs, persistence, telephony responses, and safety rails.",
  ],

  challenges: [
    "Designing a voice-first state machine that could handle interruptions, corrections, clarification answers, cancellations, confirmations, and Twilio no-input events.",
    "Separating LLM-assisted interpretation from deterministic business execution so pricing, validation, fulfillment, and persistence remained reliable and testable.",
    "Creating profile-driven catalog behavior so multiple business types could share the same core conversation engine.",
    "Handling ambiguous requests through catalog-driven clarification instead of defaulting to arbitrary items.",
    "Preventing prompt injection and unrelated user requests from derailing the ordering workflow.",
  ],

  lessons: [
    "Learned how to design a production-style conversation state machine for real-time voice ordering workflows.",
    "Improved backend architecture skills through service boundaries, repositories, profile-driven business logic, and deterministic workflow orchestration.",
    "Gained experience integrating Twilio Voice, FastAPI, TwiML, SQLite persistence, and LLM-assisted interpretation into one end-to-end system.",
    "Learned how to constrain LLM usage by keeping critical business execution in deterministic services.",
    "Practiced building testable AI-assisted systems with safety rails, privacy boundaries, fake providers, and broad automated coverage.",
  ],

  futureImprovements: [
    "Map Twilio phone numbers to business profiles for automatic pizza, coffee, and future business routing.",
    "Add an operator dashboard for viewing orders, tickets, statuses, and conversation histories.",
    "Support local LLM providers in addition to Claude for lower latency, lower cost, and improved privacy.",
    "Replace SQLite with PostgreSQL for production deployments while keeping repository interfaces unchanged.",
    "Add SMS and web chat channels using the same conversation engine and ordering services.",
    "Expand catalog metadata with aliases, availability flags, combo items, and modifier compatibility rules.",
  ],
};

export default orderOS;