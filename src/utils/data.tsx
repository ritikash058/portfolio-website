import {
  JSIcon, PhpIcon, NextIcon, TailwindIcon, TypeIcon,
  AWSIcon, DockerIcon, GitIcon, ReactIcon,
  MongoDBIcon, PostgresIcon, MySqlIcon,
} from "./icon";

export const projects = [
  {
    title: "RECS Homes",
    description:
      "A modern dashboard for managing real estate buildings and property construction projects.",
    tags: ["React", "TailwindCSS", "Node.js", "Express", "Postgres"],
    image: "/recs.png",
    type: "Website",
    liveUrl: "https://recshomes.com/", 
  },
  {
    title: "Lumle Restaurant and Bar",
    description:
      "Full-featured restaurant website with table reservation, menu management, gift card purchase, and payment integration.",
    tags: ["Next.js", "Postgres", "Paytrail", "Node.js", "Express"],
    image: "/lumle.png",
    type: "Website",
    liveUrl: "https://lumle.fi/"
  },
  {
    title: "National PhysioTherapy & Rehabilitation Center",
    description:
      "Physiotherapy and rehabilitation website with appointment booking and patient management.",
    tags: ["Next.js", "Postgres", "Node.js", "Express"],
    image: "/physio.png",
    type: "Website",
    liveUrl: "https://the-nprc.com/"
  },
  {
    title: "Peace Destination Nepal",
    description:
      "Travel agency website with travel bookings and an integrated blog.",
    tags: ["Next.js", "Postgres", "Node.js", "Express"],
    image: "/pdn.png",
    type: "Website",

  },
  {
    title: "Lumle Restaurant & Bar App",
    description:
      "Mobile app version of Lumle with table reservation, menu management, and payment integration.",
    tags: ["React Native", "Node.js", "Paytrail"],
    image: "/lumle-app.jpg",
    type: "Mobile Application",
    liveUrl: "https://play.google.com/store/apps/details?id=com.lumle&hl=en_US"
  },
  {
    title: "Njangi Biz App",
    description:
      "Online shopping platform with product catalog, shopping cart, and order flow.",
    tags: ["React Native", "Node.js", "Express", "Postgres"],
    image: "/njangi.png",
    type: "Mobile Application + Website",
    liveUrl:"https://play.google.com/store/apps/details?id=com.zerologicspace.njangi&hl=en_US"

  },
  {
    title: "PocketSeq",
    description:
      "A platform that connects \"people ×place× experiences\" and allows users to search for places that fit their purpose.",
    tags: ["React", "Node.js", "Express", "Postgres", "Graphql"],
    image: "/psq.png",
    type: "Website",
    liveUrl:"https://www.pocketseq.com/"

  },
  {
    title: "E-Upachar",
    description:
      "A telemedicine app enabling real-time video consultations between doctors and patients, with low-latency, concurrent sessions",
    tags: ["React Native", "Node.js", "Express", "Postgres", "Payment Services", "Comet chat"],
    image: "/eupachar.png",
    type: "Mobile Application + Website",
    liveUrl: "https://e-upachar.com/"
  },
  {
    title: "Needy Store",
    description:
      "E-commerce platform with product catalog and shopping cart experience.",
    tags: ["React", "Next.js", "Postgres", "Node.js", "Express"],
    image: "/needy.png",
    type: "Website",
    liveUrl: "https://needystoreonline.com/"
  },
  {
    title: "KPG Industrial",
    description:
      "Corporate site showcasing LPG solutions, gas plant engineering, and machine maintenance services.",
    tags: ["React", "Next.js", "Postgres", "Node.js", "MongoDB"],
    image: "/kpg.png",
    type: "Website",
  },
  {
    title: "Z-Wallet",
    description:
      "Wallet system with top-ups, purchases (PIN/serial generation), and public APIs for third-party product sales with automatic billing.",
    tags: ["Node.js", "PostgreSQL", "Next.js", "Express", "eSewa", "Khalti", "FonePay"],
    image: "/digital-game-api.png",
    type: "Website",
  },
  {
    title: "ZAuth",
    description:
      "NPM package providing authentication, authorization, and user management for ZLS projects.",
    tags: ["Node.js", "PostgreSQL", "Express", "TypeScript"],
    image: "/z-auth.png",
    type: "NPM Package",
  },
  {
    title: "Inside Nepal",
    description:
      "Travel portfolio website for a tour guide, showcasing curated tour packages.",
    tags: ["React", "Next.js", "PostgreSQL", "Node.js", "Express"],
    image: "/tws.png",
    type: "Website",
    liveUrl: "https://insidenepal.org/"
  },
  {
    title: "GrabLoco",
    description:
      "Platform for exclusive local deals, coupons, and vendor savings in the community.",
    tags: ["React Native", "PostgreSQL", "Express", "Turborepo", "Next.js"],
    image: "/grabloco.png",
    type: "Mobile Application + Website",
    liveUrl : "https://grabloco.com/"
  },
];

export const skills = [
  {
    title: "Backend",
    children: [
      { title: "Node.js", emoji: <JSIcon />, subtitle: "Backend Runtime" },
      { title: "PHP", emoji: <PhpIcon />, subtitle: "Backend Language" },
    ],
  },
  {
    title: "Frontend",
    children: [
      { title: "React", emoji: <ReactIcon />, subtitle: "Frontend Library" },
      { title: "Next.js", emoji: <NextIcon />, subtitle: "React Framework" },
      { title: "TailwindCSS", emoji: <TailwindIcon />, subtitle: "CSS Framework" },
      { title: "JavaScript", emoji: <JSIcon />, subtitle: "Scripting Language" },
      { title: "TypeScript", emoji: <TypeIcon />, subtitle: "Type-safe JavaScript" },
    ],
  },
  {
    title: "Cloud & DevOps",
    children: [
      { title: "AWS", emoji: <AWSIcon />, subtitle: "Cloud Platform" },
      { title: "Docker", emoji: <DockerIcon />, subtitle: "Containerization" },
      { title: "Git", emoji: <GitIcon />, subtitle: "Version Control" },
    ],
  },
  {
    title: "Databases",
    children: [
      { title: "MongoDB", emoji: <MongoDBIcon />, subtitle: "NoSQL Database" },
      { title: "PostgreSQL", emoji: <PostgresIcon />, subtitle: "Relational Database" },
      { title: "MySQL", emoji: <MySqlIcon />, subtitle: "SQL Database" },
    ],
  },
  {
    title: "Mobile",
    children: [
      { title: "React Native", emoji: <ReactIcon />, subtitle: "Mobile Framework" },
    ],
  },
];

export const experiences = [
  {
    role: "Full-Stack Developer",
    company: "ZLS (Zero Logic Space)",
    period: "2023 — Present",
    description:
      "Building web and cross-plaform mobile applications with Next.js, React Native, Node.js, and PostgreSQL. Led payment integrations (eSewa, Khalti, FonePay, Paytrail, Stripe) and shipped reusable auth packages used across client projects.",
    tags: ["Next.js", "Node.js", "PostgreSQL", "AWS" , "React Native"],
  },
  {
    role: "Junior Developer",
    company: "ZLS(Zero Logic Space)",
    period: "2022 — 2023",
    description:
      "Delivered responsive marketing sites and dashboards for clients across real estate, hospitality, and travel verticals.",
    tags: ["React", "TailwindCSS", "Express", "Next.js"],
  },
  {
    role: "Frontend Developer",
    company: "Early Career",
    period: "2021 — 2022",
    description:
      "Built foundations in JavaScript, React, PHP, and database design while contributing to internal tooling.",
    tags: ["JavaScript", "React", "PHP", "MySQL"],
  },
];