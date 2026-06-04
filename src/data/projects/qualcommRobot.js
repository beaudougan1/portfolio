const qualcommRobot = {
  slug: "qualcomm-robot",

  title: "Qualcomm-Sponsored Guide Robot",

  type: "Senior Design Capstone",

  category: "Robotics",

  featured: true,

  image: "/projects/qualcomm-robot/robot-1.jpg",

  heroLayout: "portrait",

  imageCaption:
    "Front view of the completed autonomous guide robot. The platform combines a Rubik Pi 3 development board, LiDAR sensor, camera, battery system, and speaker for voice interaction within a custom 3D-printed enclosure mounted on the WaveRover robot base.",
  gallery: [
    {
      src: "/projects/qualcomm-robot/robot-2.jpg",
      caption: "iOS app screens used to control and interact with the guide robot.",
    },
    {
      src: "/projects/qualcomm-robot/robot-3.jpg",
      caption: "Mapping workflow showing how the robot creates and uses a map for navigation.",
    },
    {
      src: "/projects/qualcomm-robot/robot-4.jpg",
      caption: "User-end design diagram showing how people interact with the robot system.",
    },
  ],

  architectureDiagram: "/projects/qualcomm-robot/architecture.png",

  architectureCaption:
     "The robot listens for a wake word, processes commands through voice recognition, performs navigation through ROS2, communicates with the iOS application over Bluetooth, and uses LiDAR for obstacle detection.",

  youtubeEmbed:
    "https://www.youtube.com/embed/s65I-PJ3e-8",

  github: "https://github.com/montse-jara/wave_rover",

  demo: "https://youtu.be/s65I-PJ3e-8",

  description:
    "A voice-activated autonomous guide robot built with a Rubik Pi 3 development board and robotics platform.",

  overview:
    "This senior design capstone project was sponsored by Qualcomm and developed by a four-person team. The project focused on building a voice-activated guide robot capable of real-time navigation, object detection, obstacle avoidance, face tracking, Bluetooth communication with an iOS application, keyword detection, and text-to-speech responses.",

  technologies: [
    "Python",
    "Machine Learning",
    "Obstacle Detection",
    "Voice Recognition",
    "Text-to-Speech",
    "Bluetooth",
    "SCRUM",
    "ROS2",
    "Swift",
    "Ubuntu",
  ],

  achievements: [
    "Selected as part of a four-person senior design team",
    "Built voice activation using keyword detection and speech recognition",
    "Integrated object detection, obstacle avoidance, and LiDAR odometry for real-time navigation",
    "Connected robot functionality to an iOS application through Bluetooth",
  ],

  challenges: [
    "Integrating hardware and software components into one working system",
    "Handling real-time navigation and obstacle avoidance",
    "Coordinating development across a four-person team using SCRUM",
    "Working on a new development board with limited documentation and community support",
  ],

  lessons: [
    "Strengthened robotics and embedded systems development skills",
    "Gained experience working with hardware constraints",
    "Improved team collaboration and technical communication",
    "Working on a real-world project sponsored by Qualcomm provided valuable industry experience",
  ],

  futureImprovements: [
    "Improve mapping accuracy",
    "Allow mapping directly from iOS app",
    "Add a ML model to analyze floor type and adjust speed accordingly",
    "Expand supported voice commands",
  ],
};

export default qualcommRobot;