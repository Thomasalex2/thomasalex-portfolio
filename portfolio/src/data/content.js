export const site = {
  name: 'Thomas Alex',
  role: 'Embedded Systems & Software Developer',
  tagline: 'Designing hardware and software for embedded systems and IoT devices.',
  resumeUrl: 'https://drive.google.com/file/d/1h6K-PlVp1Hx3VHNxatQkoGNe1RGS2h6E/view?usp=sharing',
}

export const nav = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Aerial', href: '/aerial' },
  { label: 'Contact', href: '#contact' },
  { label: 'View CV', href: site.resumeUrl, external: true },
]

export const hero = {
  ctaPrimary: { label: 'View My Work', href: '#experience' },
  ctaSecondary: { label: 'View CV', href: site.resumeUrl },
  image: '/images/hero.jpg',
  roles: [
    'Embedded Systems Engineer',
    'Hardware Designer',
    'IoT Developer',
    'Python Developer',
    'PCB Designer'
  ],
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
      'Continuous Learning & Tech Awareness: staying updated with modern tools and industry trends'
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
    role: 'Product Systems Engineer',
    company: 'Galenband',
    period: 'Since November 2023',
    location: 'Galway, Ireland',
    logo: '/images/company-logos/galenband.jpeg',
    points: [
      'Designing and prototyping a Class II FDA medical device for atrial fibrillation (Afib) detection by acquiring Lead I equivalent ECG signals from upper left arm',
      'Architected ultra-low-power hardware featuring discrete power management stages for long battery life and minimal user interaction',
      'Contributed to product ideation and feature selection, helping shape the roadmap for a wearable ECG monitor',
      'Designed and developed multiple high density PCB designs (up to 8 layers), from engineering evaluation kits, test boards, and interface boards through to the final product hardware',
      'Oversaw BOM selection, prototype bring-up, testing, and debugging to ensure robust hardware performance',
      'Collaborated closely with firmware and mechanical teams to integrate hardware into the full system design',
      'Developed Python scripts and automation tools for ECG data extraction, visualization, and analysis to support both R&D and validation',
      'Created internal software tools and web portals to interface with prototypes for live data analysis, demos and data collection'
    ],
  },
  {
    role: 'Embedded Systems Engineer',
    company: 'TIF Labs',
    period: 'January 2020 to May 2023',
    location: 'Bangalore, India',
    logo: '/images/company-logos/tiflabs.png',
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

export const services = [
  {
    id: 'hardware-iot',
    title: 'Embedded Hardware & IoT Prototypes',
    description:
      'PCB design, firmware, sensor integration, and device-to-cloud systems, from schematic to working prototype.',
    href: '#contact',
    inquiryType: 'Hardware & IoT',
    cta: 'Get in touch',
  },
  {
    id: 'automation',
    title: 'Internal Automation Tools',
    description:
      'Custom scripts and programs that turn repetitive manual work into reliable automated systems: faster workflows, fewer human errors, and more consistent results.',
    href: '#contact',
    inquiryType: 'Automation',
    cta: 'Get in touch',
  },
  {
    id: 'websites',
    title: 'Websites for Small Businesses',
    description:
      'Clean, fast sites that present your brand clearly. This portfolio is an example of the kind of build I deliver. More client demos coming soon.',
    href: '#contact',
    inquiryType: 'Websites',
    cta: 'Get in touch',
  },
  {
    id: 'aerial',
    title: 'Aerial Imaging & 3D Capture',
    description:
      'EU and US licensed drone photography across Ireland: inspections, surveying, planning, and 3D capture.',
    href: '/aerial',
    inquiryType: 'Aerial',
    cta: 'View aerial work',
  },
]

export const projects = [
  {
    title: 'Aerial Imaging & 3D Capture',
    description:
      'Licensed drone photography across Ireland: inspections, surveying, planning, and 3D capture.',
    link: '/aerial',
    image: '/images/aerial/aerial-cover.jpg',
    techStack: ['Drone', 'Photogrammetry', '3D Capture', '3D Modelling'],
    category: 'Digital Assets',
    difficulty: 'Advanced',
  },
  {
    title: "Gait Characterisation and Analysis - Master's Project",
    description:
      'Detect and recording gait using embedded MCUs and low-cost sensors',
    link: 'https://drive.google.com/file/d/1-hqiUdAPf2JjiMbJSEEIyfQJKgtzE2dh/view?usp=sharing',
    image: '/images/gait.png',
    techStack: ['C++', 'Arduino', 'Sensors', 'Data Analysis', 'Python'],
    category: 'Hardware & Data Analysis',
    difficulty: 'Advanced',
  },
  {
    title: 'TV Show Renamer',
    description:
      'Desktop app written in python to automatically batch rename all your favorite TV shows with their episode name fetched from Wikipedia',
    link: 'https://github.com/Thomasalex2/tv-show-renamer',
    image: '/images/show_renamer.png',
    techStack: ['Python', 'PyQt', 'Web Scraping', 'File Management', 'GUI Design'],
    category: 'Software',
    difficulty: 'Intermediate',
  },
  {
    title: 'ESP32-S3 Breakout Board',
    description:
      'Custom ESP32-S3 breakout with power management and robust USB boot circuitry for rapid prototyping.',
    link: '_blank',
    image: '/images/esp32.png',
    techStack: ['PCB Design', 'ESP32-S3', 'Power Management', 'USB-C', 'BOM', 'KiCad'],
    category: 'Hardware & PCB Design',
    difficulty: 'Intermediate',
  },
]

export const inquiryTypes = ['Hardware & IoT', 'Automation', 'Websites', 'Aerial', 'Other']

export const contact = {
  email: 'thomasalex.developer@gmail.com',
  message:
    'Do you have a product idea or a prototype and need a hardware engineer to help design it? Feel free to reach out and I will get back to you within 24 hours!',
  social: {
    github: 'https://github.com/ThomasAlex2',
    linkedin: 'https://linkedin.com/in/thomas-alex-one',
    instagram: 'https://www.instagram.com/notreallythomas_/',
  },
}

export const aerial = {
  meta: {
    title: 'Licensed Drone Photographer Ireland | Aerial Photography & 3D Capture',
    description:
      'EU and US licensed drone photographer available across Ireland. Aerial photos and video for property, surveying, planning permission, investigations, court documentation, inspections, and 3D site capture. Request a shoot — reply within 24 hours.',
  },
  hero: {
    brand: 'Aerial by Thomas Alex',
    headline: 'Licensed drone photography across Ireland',
    subcopy:
      'Aerial stills, video, and 3D capture for property, construction, surveying, planning, investigations, and inspections. EU and US licensed.',
    // Still used as poster / fallback while the video loads (and if videoSrc is empty)
    coverImage: '/images/aerial/aerial-cover.jpg',
    // Drop a short muted loop here, e.g. '/videos/aerial/galway-hero.mp4' (10-20s, H.264, <15MB ideal)
    videoSrc: '/videos/aerial/galway-hero.mp4',
    ctaPrimary: { label: 'Request a shoot', href: '#aerial-contact' },
    ctaSecondary: { label: 'See use cases', href: '#aerial-use-cases' },
    location: 'Available across Ireland',
    credentials: ['EU licensed (EASA)', 'US licensed (FAA)', 'Nationwide coverage'],
  },
  capture: {
    title: 'What I capture',
    subtitle: 'Clear aerial stills and video for real-world decisions, not just pretty flyovers.',
    items: [
      {
        title: 'Property & estates',
        description: 'Marketing-ready overview shots and site context for listings and portfolios.',
        image: '/images/aerial/gallery-property.jpg',
        imageAlt: 'Aerial drone photograph of a property and estate in Ireland',
      },
      {
        title: 'Construction progress',
        description: 'Repeatable progress documentation for stakeholders and project records.',
        image: '/images/aerial/gallery-construction.jpg',
        imageAlt: 'Aerial construction progress photography from a drone in Ireland',
      },
      {
        title: 'Roof & exterior inspection',
        description: 'Hard-to-reach views that help spot issues without scaffolding on day one.',
        image: '/images/aerial/gallery-roof.jpg',
        imageAlt: 'Drone roof and exterior inspection still of a building in Ireland',
      },
      {
        title: 'Events & landscapes',
        description: 'Cinematic aerials for venues, campuses, and scenic locations.',
        image: '/images/aerial/gallery-landscape.jpg',
        imageAlt: 'Aerial landscape and venue photography captured by drone in Ireland',
      },
    ],
  },
  useCases: {
    title: 'Who this is for',
    subtitle:
      'If you need a clear aerial record of a site anywhere in Ireland, I can usually fly it. Typical jobs include:',
    items: [
      {
        title: 'Surveying & site mapping',
        description:
          'Overview stills and 3D context for surveyors, engineers, and landowners who need the full site in one pass.',
      },
      {
        title: 'Planning permission',
        description:
          'Location context, neighbouring land, access, and site photographs to support planning applications and reports.',
      },
      {
        title: 'Investigation',
        description:
          'Independent aerial documentation of a site, boundary, or incident area when a ground-only view is not enough.',
      },
      {
        title: 'Photos for court',
        description:
          'Clear, dated aerial stills for solicitors and clients who need a visual record to support a case or statement.',
      },
      {
        title: 'Insurance & claims',
        description:
          'Roof, storm, and property condition packs that show damage or state of repair without waiting on scaffolding.',
      },
      {
        title: 'Construction & development',
        description:
          'Progress photography and stakeholder updates for builders, architects, and project managers.',
      },
    ],
  },
  faq: {
    title: 'Questions before you book',
    items: [
      {
        question: 'Do you fly across all of Ireland?',
        answer:
          'Yes. I take jobs nationwide, not only in Galway. Share the site location and timing and I will confirm availability and travel.',
      },
      {
        question: 'Are you licensed to fly a drone?',
        answer:
          'Yes. I hold both EU (EASA) and US (FAA) drone licences, and operate within the relevant rules for each job.',
      },
      {
        question: 'Can you add insurance for the day?',
        answer:
          'Yes. Day-cover insurance can be added for the shoot at a small extra cost. Request it separately when you enquire and I will include it in the quote.',
      },
      {
        question: 'Can you capture photos for planning permission or court?',
        answer:
          'Yes. I regularly produce clear, dated aerial stills for planning packs, investigations, and supporting documentation. Tell me the brief and any viewpoints you need.',
      },
      {
        question: 'How do I request a shoot?',
        answer:
          'Use the form on this page with the site location, timing, and what you need delivered. You can also email, call, or WhatsApp. I usually reply within 24 hours with availability and a quote.',
      },
      {
        question: 'What do you deliver?',
        answer:
          'Edited high-resolution stills, stabilised video, annotated inspection packs, and optional photorealistic 3D models from the same flight. Quotes are custom to the site and deliverables.',
      },
    ],
  },
  jobTypes: [
    'Property / marketing',
    'Surveying',
    'Planning permission',
    'Investigation',
    'Photos for court',
    'Insurance / inspection',
    'Construction progress',
    '3D capture',
    'Other',
  ],
  showreel: {
    title: 'Showreel',
    subtitle: 'A short look at flight footage and deliverable style.',
    // Paste YouTube video ID only (the part after v=). Unlisted is fine.
    youtubeId: '',
    poster: '/images/aerial/showreel-poster.svg',
  },
  capture3d: {
    title: '3D capture & modelling',
    subtitle: 'Beyond photos: a digital twin of the site from the air.',
    body:
      'From a structured drone flight I can rebuild a site as a photorealistic 3D model. You get a digital record you can revisit from any angle, useful when stills and video alone do not tell the full story. Deliverables are tailored per job: stills from the model, exported 3D assets, or a shareable viewing package for clients and stakeholders.',
    image: '/images/aerial/splat-poster.jpg',
    imageAlt: 'Example aerial 3D capture of a property',
    imageCaption: 'Example of a site reconstructed from aerial footage.',
    ctaLabel: 'Ask about 3D capture',
    useCases: [
      'Property marketing and remote walkthroughs',
      'Surveying, planning, and investigation context',
      'Roof and exterior context without repeat site visits',
      'Insurance, court, and inspection support packs',
    ],
    benefits: [
      {
        title: 'Any angle, later',
        description: 'Revisit the site after the flight. No need to schedule another visit for a missed viewpoint.',
      },
      {
        title: 'Clearer than a flyover alone',
        description: 'Photorealistic detail that helps clients understand layout, condition, and context.',
      },
      {
        title: 'Easy to share',
        description: 'Hand off stills, exports, or a viewing package that stakeholders can open without specialist software.',
      },
      {
        title: 'Built from the same flight',
        description: 'Often captured alongside your photography or inspection pass, so one site visit covers more.',
      },
    ],
  },
  deliverables: {
    title: 'Deliverables',
    subtitle: 'Pick what you need. Custom quotes for every shoot.',
    items: [
      { title: 'Still photography', description: 'Edited high-resolution aerial stills ready for web or print.' },
      { title: 'Video / showreel clips', description: 'Stabilised flight footage and short edited sequences.' },
      {
        title: '3D capture & models',
        description:
          'Photorealistic 3D reconstruction of the site: stills, exports, or a shareable viewing package on request.',
      },
      { title: 'Inspection packs', description: 'Annotated stills highlighting areas of interest on request.' },
    ],
  },
  contact: {
    title: 'Request a shoot',
    subtitle: 'Tell me the site, timing, and what you need delivered. I usually reply within 24 hours.',
    message:
      'Available across Ireland. Send the site location, job type, and what you need delivered — I usually reply within 24 hours with availability and a quote.',
    // Aerial page only — not shown on the engineering site. Leave '' to hide.
    // Example: '+353 86 123 4567'
    phone: '+353 899766357',
    whatsapp: true,
  },
}

export default {
  site,
  nav,
  hero,
  about,
  skills,
  experience,
  services,
  projects,
  inquiryTypes,
  contact,
  aerial,
  // Quieter ambient background for the main (engineering) site only
  starfield: {
    count: 80,
    speed: 0.15,
    maxStarSize: 1.6,
    minStarSize: 0.35,
    starColor: '#E6F7F2',
    twinkle: { enabled: true, speed: 0.012, minOpacity: 0.12, maxOpacity: 0.55 },
    movement: {
      type: 'direction',
      directionAngleDeg: 30,
      parallax: {
        layers: 3,
        layerSpeeds: [0.2, 0.4, 0.7],
        layerCounts: [0.55, 0.3, 0.15],
        sizeMultipliers: [0.65, 1, 1.25],
      },
    },
    shootingStars: {
      enabled: true,
      intervalSeconds: 22,
      speed: 8,
      length: 120,
      angleDeg: 40,
      spreadDeg: 20,
      opacity: 0.55,
    },
  },
}
