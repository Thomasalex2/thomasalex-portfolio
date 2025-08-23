export const site = {
  name: 'Thomas Alex',
  role: 'Embedded Systems & Software Developer',
  tagline: 'Designing hardware and software for embedded systems and IoT devices.',
  resumeUrl: 'https://drive.google.com/file/d/1h6K-PlVp1Hx3VHNxatQkoGNe1RGS2h6E/view?usp=sharing',
}

export const nav = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
  { label: 'View CV', href: site.resumeUrl, external: true },
]

export const hero = {
  ctaPrimary: { label: 'View My Work', href: '#experience' },
  ctaSecondary: { label: 'View CV', href: site.resumeUrl },
  image: '/images/hero.jpg',
}

export const about = {
  image: 'images/profile_picture.jpg',
  bio:
    'I’m an Embedded Systems & Software Developer with a focus on designing efficient, real-world solutions. From low-power medical devices to IoT products, I work across hardware and software to bring ideas into working prototypes and products. My approach is hands-on, practical, and driven by curiosity, with a preference for building things that are not only functional but meaningful. I actively keep up with emerging technologies, exploring the latest tools and methods to stay ahead in both hardware and software.',
}

export const skills = [
  {
    category: 'Hardware Engineering',
    items: [
      'Embedded Hardware Design & Prototyping',
      'PCB Design - Schematic and layout with 3D Model',
      'Sensor Integration & Data Acquisition',
      'Low Power System Design',
      'Prototype Bring-up, Testing & Debugging'
    ],
  },
  {
    category: 'Software & Firmware',
    items: [
      'Firmware Development (Arduino & MicroPython)',
      'Python Development (Automation, RPA, GUI Tools)',
      'Edge AI & TinyML Integration (Edge Impulse, YOLO, Jetson Nano)',
      'Cross-platform GUI Development (PyQt, Web UI basics)',
      'Signal Processing (ECG & biosignals)'
    ],
  },
  {
    category: 'IoT & Systems',
    items: [
      'IoT Product Development (device to cloud integration)',
      'System Architecture & BOM Optimisation',
      'Version Control & CI/CD (Git, GitHub Actions)',
      'Continuous Learning & Tech Awareness — staying updated with modern tools, and industry trends'
    ],
  },
  {
    category: 'Leadership & Communication',
    items: [
      'R&D Project Leadership',
      'Mentorship & Team Management',
      'Technical Writing & Knowledge Sharing',
      'AI-assisted Development & Rapid Prototyping',
      'Multimedia Content Creation (Video editing, tutorials, hosting)'
    ],
  },
]

export const experience = [
  {
    role: 'Hardware & Software Engineer',
    company: 'Galenband',
    period: 'Since November 2023',
    location: 'Galway, Ireland',
    points: [
      'Designing and prototyping a Class II FDA medical device for atrial fibrillation (Afib) detection using ECG signals from the upper arm, focusing on long battery life and minimal user interaction',
      'Contributed to product ideation and feature selection, helping shape the roadmap for a wearable ECG monitor',
      'Created multiple PCB designs (up to 6 layers) — from engineering evaluation kits and test boards to the final product hardware',
      'Oversaw BOM selection, prototype bring-up, testing, and debugging to ensure robust hardware performance',
      'Collaborated closely with firmware and mechanical teams to integrate hardware into the full system design',
      'Developed Python scripts for ECG data extraction, visualization, and analysis to support both R&D and validation',
    ],
  },
  {
    role: 'Embedded Systems Engineer',
    company: 'TIF Labs',
    period: 'January 2020 – May 2023',
    location: 'Bangalore, India',
    points: [
      'Designed and developed 20+ microcontroller PCBs, sensor boards, breakouts, and full-fledged products',
      'Python developer - CLI-based helper tools, inferencing bots, tester applications and RPA - based automation bots for hospitals',
      'Product R&D for products like Alpha Care, IOTIF Trainer Kit, WittyFox line up of products, and many other client projects',
      'Directed product life cycle for 10 + new products, including BOM selection, procurement, testing, and launch',
      'Managed 3+ team of engineers for over 2 years. Delegated tasks effectively and efficiently. Wrote, hosted & edited technical scripts for over 30 YouTube videos',
      'Lead over 3 major projects - Scope, timeline and feedback and enhancements as technical consultant for clients',
      'Conducted and hosted over 5 online technical IoT workshops, attended by 100+ participants'
    ],
  },
]

export const projects = [
  {
    title: "Gait Characterisation and Analysis - Master's Project",
    description:
      'Detect and recording gait using embedded MCUs and low-cost sensors',
    link: 'https://drive.google.com/file/d/1-hqiUdAPf2JjiMbJSEEIyfQJKgtzE2dh/view?usp=sharing',
    image: '/images/gait.png',
  },
  {
    title: 'TV Show Renamer',
    description:
      'Desktop app written in python to automatically batch rename all your favorite TV shows with their episode name fetched from Wikipedia',
    link: 'https://github.com/Thomasalex2/tv-show-renamer',
    image: '/images/show_renamer.png',
  },
  {
    title: 'ESP32-S3 Breakout Board',
    description:
      'Custom ESP32-S3 breakout with power management and robust USB boot circuitry for rapid prototyping.',
    link: '_blank',
    image: '/images/esp32.png',
  }
]



export const contact = {
  email: 'thomasalexk@outlook.com',
  social: {
    github: 'https://github.com/ThomasAlex2',
    linkedin: 'https://linkedin.com/in/thomas-alex-one',
    instagram: 'https://www.instagram.com/notreallythomas_/',
  },
}

export default {
  site,
  nav,
  hero,
  about,
  skills,
  experience,
  projects,
  contact,
  starfield: {
    count: 120,
    speed: 0.25,
    maxStarSize: 2.2,
    minStarSize: 0.4,
    starColor: '#E6F7F2',
    twinkle: { enabled: true, speed: 0.02, minOpacity: 0.15, maxOpacity: 0.9 },
    movement: {
      type: 'direction',
      directionAngleDeg: 30,
      parallax: {
        layers: 3,
        layerSpeeds: [0.35, 0.7, 1.2],
        layerCounts: [0.5, 0.3, 0.2],
        sizeMultipliers: [0.7, 1, 1.4],
      },
    },
    shootingStars: {
      enabled: true,
      intervalSeconds: 10,
      speed: 10,
      length: 160,
      angleDeg: 40,
      spreadDeg: 25,
      opacity: 0.85,
    },
  },
}


