const canvasCalendar = {
  slug: "canvas-calendar",

  title: "Canvas Calendar System",

  type: "REST API Application",

  category: "Software Engineering",

  featured: false,

  image: "/projects/canvas-calendar/use-case.png",
  heroLayout: "landscape",
  imageCaption:
  "Use case diagram showing the primary workflows supported by the Canvas Calendar application, including authentication, assignment management, progress tracking, and assignment weight analysis.",

  architectureDiagram:
  "/projects/canvas-calendar/backend_architecture.png",

  architectureCaption:
  "High-level system architecture illustrating how Canvas API data is retrieved, translated, and transformed into calendar events and progress calculations.",

  gallery: [
    {
      src: "/projects/canvas-calendar/arch3.png",
      caption: "Detailed frontend architecture illustrating the MVC-inspired structure, UI controllers, display components, and model interactions used throughout the application.",
    },
    {
    src: "/projects/canvas-calendar/sequence-overview.png",
    caption:
      "High-level sequence diagram showing how user actions propagate through the Canvas Calendar system, including authentication validation, calendar rendering, assignment updates, and progress tracking workflows.",
    },
    {
      src: "/projects/canvas-calendar/sequence-delete.png",
      caption: "Sequence diagram illustrating assignment creation, deletion, and weight recalculation workflows within the application.",
    },
  ],
  video: "",
  github: "https://github.com/beaudougan1/Better-Canvas-Calendar",
  demo: "",

  description:
    "A calendar application that uses student class information from the Canvas REST API and displays it in a GUI calendar.",

  overview:
     "Canvas Calendar System is a student productivity application that integrates with the Canvas REST API to retrieve course information, assignments, due dates, and grading data. The system transforms Canvas data into a graphical calendar interface while providing assignment management, progress tracking, and assignment weight analysis features through a structured MVC-inspired architecture.",

  technologies: ["Java", "REST APIs", "GUI", "SCRUM"],

  achievements: [
    "Integrated the Canvas REST API",
    "Displayed student course information in a calendar interface",
    "Collaborated with a team using SCRUM practices",
  ],

  challenges: [
    "Working with paginated Canvas API responses and authentication tokens.",
    "Transforming API data into a user-friendly calendar representation.",
    "Maintaining separation between API integration, business logic, and presentation layers.",
    "Coordinating development across a team using SCRUM practices.",
  ],
  lessons: [
    "Improved experience working with external REST APIs and authentication flows.",
    "Learned how to design software using MVC-inspired architectural patterns.",
    "Gained experience translating backend data into meaningful user-facing visualizations.",
    "Strengthened team collaboration skills through SCRUM-based development.",
  ],
  futureImprovements: [
    "Add support for additional learning management systems beyond Canvas.",
    "Improve assignment weights by taking in info from the syllabus.",
    "Convert the java application into a web-based google chrome application.",
    "Provide real-time synchronization and notifications for assignment updates.",
  ],
};

export default canvasCalendar;