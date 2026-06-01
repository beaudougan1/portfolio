const echoesForgotten = {
  slug: "echoes-forgotten",

  title: "Echoes of the Forgotten",

  type: "Game Development",

  category: "Software Architecture",

  featured: false,

  image: "/projects/echoes-forgotten/hero.png",
  heroLayout: "landscape",
  imageCaption:
    "Title screen for Echoes of the Forgotten, a text-based RPG with custom pixel-art styling, dynamic audio, and branching player choices.",

  architectureDiagram: "/projects/echoes-forgotten/architecture.png",
  architectureCaption:
  "System architecture diagram showing the game's separation between view, controller, and model layers, along with audio state management and item decorator patterns.",

  gallery: [
    {
      src: "/projects/echoes-forgotten/ingame.png",
      caption:
        "In-game dialogue view demonstrating the custom UI layout, pixel font styling, player status panel, and narrative progression system.",
    },
    {
      src: "/projects/echoes-forgotten/choices.png",
      caption:
        "Choice-based interaction screen showing player stats, equipment, condition tracking, and branching dialogue options.",
    },
  ],
  video: "",
  github: "https://github.com/beaudougan1/Echoes-Of-The-Forgotten",
  demo: "",

  description:
    "A text-based RPG game with custom fonts, dynamic audio, and multiple software architecture patterns.",

  overview:
    "Echoes of the Forgotten is a text-based RPG built in Java that combines branching dialogue, dynamic audio, custom pixel-art styling, and multiple software architecture patterns. The project emphasizes maintainability and extensibility through MVC, State, Snapshot, Decorator, and Singleton patterns while delivering an interactive story-driven experience.",

  technologies: [
    "Java",
    "MVC",
    "State Pattern",
    "Decorator Pattern",
    "Singleton Pattern",
    "Snapshot Pattern",
    "Swing GUI",
    "Audio Management",
  ],

  achievements: [
    "Developed a fully playable text-based RPG with branching dialogue and story progression.",
    "Implemented MVC, State, Snapshot, Decorator, and Singleton patterns to improve maintainability and extensibility.",
    "Built a dynamic audio system that changes music and sound behavior based on game state.",
    "Designed a custom pixel-art inspired interface with player stats, inventory, equipment, and dialogue interactions.",
  ],

  challenges: [
    "Managing game state cleanly",
    "Coordinating dynamic audio with gameplay events",
    "Applying multiple architecture patterns without overcomplicating the codebase",
  ],

  lessons: [
    "Strengthened software architecture skills through real-world application of multiple design patterns.",
    "Learned how state management affects game flow and player experience.",
    "Improved understanding of event-driven interfaces and audio integration.",
    "Practiced balancing extensibility with code simplicity.",
  ],

  futureImprovements: [
    "Add more story branches",
    "Improve save/load functionality",
    "Expand gameplay systems",
  ],
};

export default echoesForgotten;