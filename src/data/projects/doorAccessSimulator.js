const doorAccessSimulator = {
  slug: "door-access-simulator",

  title: "STM32 Door Access Simulator",

  type: "Embedded Systems",

  category: "Embedded Systems",

  featured: false,

  image: "/projects/doorlock/hero.jpg",

  heroLayout: "portrait",

  imageCaption:
    "Final embedded systems prototype demonstrating keypad-controlled door access using an STM32 Nucleo board, servo motor, LEDs, buzzer, and a model door.",

  gallery: [
    {
        src: "/projects/doorlock/conceptual-design.png",
        caption:
            "High-level block diagram showing how keypad inputs, LEDs, buzzer feedback, and servo motor control interact through the STM32-based embedded system.",
    },
    {
        src: "/projects/doorlock/layout.png",
        caption:
            "Detailed wiring and circuit layout used to connect the STM32 Nucleo board, keypad matrix, servo motor, LEDs, and buzzer through the breadboard.",
    },
  ],

  github: "https://github.com/beaudougan1/STM32-Door-Access-Simulator",

  demo: "https://youtube.com/shorts/Id3XtuauKOA?feature=share",

  description:
    "An embedded systems project that simulated keypad-controlled door access using an STM32 Nucleo board, servo motor, LEDs, buzzer feedback, and a 4x4 matrix keypad.",

  overview:
    "STM32 Door Access Simulator is an embedded systems project that demonstrates keypad-based access control using an STM32 Nucleo development board. The system reads a four-digit code from a 4x4 matrix keypad, controls a servo motor to simulate opening or closing a model door, and provides visual and audio feedback through red and green LEDs and a buzzer. The project combines PWM control, digital inputs, digital outputs, keypad scanning, and embedded state management into a physical hardware demonstration.",

  technologies: [
    "STM32 Nucleo",
    "Embedded C++",
    "Mbed",
    "PWM",
    "Servo Motor",
    "4x4 Matrix Keypad",
    "Digital I/O",
    "Buzzer",
    "LED Indicators",
  ],

  achievements: [
    "Built a keypad-controlled embedded access simulation using an STM32 Nucleo board.",
    "Integrated a servo motor to open and close a model door based on authentication state.",
    "Implemented visual and audio feedback using LEDs and buzzer tones for correct and incorrect keypad entries.",
    "Used PWM outputs, digital inputs, and digital outputs to coordinate multiple hardware components.",
    "Created keypad input logic for four-digit access codes and a lock button behavior.",
  ],

  challenges: [
    "Fitting multiple components onto a breadboard while avoiding resistor and wire interference.",
    "Managing limited wire availability while keeping connections close enough to reach the Nucleo board.",
    "Troubleshooting keypad wiring across row and column inputs.",
    "Working with servo range limitations and tuning the usable write range.",
    "Coordinating keypad input, servo control, LED state, and buzzer feedback in one embedded loop.",
  ],

  lessons: [
    "Gained hands-on experience integrating hardware components with an STM32 Nucleo board.",
    "Improved understanding of PWM control for servo motors and buzzers.",
    "Learned how matrix keypad input can be scanned and translated into embedded control logic.",
    "Practiced debugging physical wiring issues in a multi-component embedded system.",
    "Strengthened understanding of state-based embedded behavior for locked and unlocked states.",
  ],

  futureImprovements: [
    "Add Bluetooth support for remote access control and allowing user to change code remotely.",
    "Add mobile application integration for IoT-style functionality.",
    "Allow users to change the access code without modifying source code.",
    "Track lock and unlock activity over time.",
  ],
};

export default doorAccessSimulator;