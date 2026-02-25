import { JSIcon, PhpIcon, NextIcon, TailwindIcon, TypeIcon, AWSIcon, DockerIcon, GitIcon, ReactIcon, MongoDBIcon, PostgresIcon, MySqlIcon } from "./icon";

export const projects = [
  {
    title: "RECS Homes",
    description:
      "A modern dashboard for managing real estate buildings and properties construction.",
    tags: ["React", "TailwindCSS", "Node.js"],
    image: "/recs.png",
    type: "Website",
  },
  {
    title: "Lumle Restaurant and Bar",
    description:
      "Full-featured online restaurant and bar website with table reservation and menu management along with gift card purchase and payment integration.",
    tags: ["Next.js", "Postgres", "Paytrail"],
    image: "/lumle.png",
    type: "Website",
  },
  {
    title: "National PhysioTherapy and Rehabilitation Center",
    description:
      "Full-featured online physiotherapy and rehabilitation center website with appointment booking and patient management.",
    tags: ["Next.js", "Postgres", "Node.js"],
    image: "/physio.png",
    type: "Website",
  },
  {
    title: "Peace Destination Nepal",
    description:
      "Full-featured online travel agency website with travel bookings and blogs.",
    tags: ["Next.js", "Postgres", "Node.js"],
    image: "/pdn.png",
    type: "Website",
  },
  {
    title: "Lumle Restaurant & Bar App",
    description:
      "Full-featured online restaurant and bar app with table reservation and menu management along with gift card purchase and payment integration.",
    tags: ["React Native", "Node.js", "Paytrail"],
    image: "/lumle-app.jpg",
    type: "Mobile Application",
  },
  {
    title: "Njangi Biz App",
    description:
      "Full-featured online shopping platform with product catalog, shopping cart.",
    tags: ["React Native", "Node.js"],
    image: "/njangi.png",
    type: "Mobile Application",
  },
  {
    title: "Needy Store",
    description:
      "Full-featured online shopping platform with product catalog, and shopping cart.",
    tags: ["React", "Next.js", "Postgres"],
    image: "/needy.png",
    type: "Website",
  },
  {
    title: "KPG Industrial",
    description:
      "Designed to showcase the services and expertise of KPG Industrial, a trusted engineering and industrial solutions provider in Nepal, which offers high-quality LPG solutions, gas plant engineering, and machine maintenance services.",
    tags: ["React", "Next.js", "Postgres"],
    image: "/kpg.png",
    type: "Website",
  }


];

export const skills = [
  {
    title: "Backend",
    children: [
      {
        title: "Node.js",
        emoji: <JSIcon />,
        subtitle: "Backend Runtime",
      },
      {
        title: "php",
        emoji: <PhpIcon />,
        subtitle: "Backend Language",
      },
    ],
  },
  {
    title: "Frontend",
    children: [
      {
        title: "React",
        emoji: <ReactIcon />,
        subtitle: "Frontend Framework",
      },
      {
        title: "Next.js",
        emoji: <NextIcon />,
        subtitle: "Frontend Framework",
      },
      {
        title: "TailwindCSS",
        emoji: <TailwindIcon />,
        subtitle: "Frontend Framework",
      },
      {
        title: "JavaScript",
        emoji: <JSIcon />,
        subtitle: "Scripting Language",
      },
      {
        title: "TypeScript",
        emoji: <TypeIcon />,
        subtitle: "Type-safe JavaScript",
      },
    ],
  },
  {
    title: "Cloud & DevOps",
    children: [
      {
        title: "AWS",
        emoji: <AWSIcon />,
        subtitle: "Cloud Platform",
      },
      {
        title: "Docker",
        emoji: <DockerIcon />,
        subtitle: "Containerization",
      },
      {
        title: "Git",
        emoji: <GitIcon />,
        subtitle: "Version Control",
      },
    ],
  },
  {
    title: "Databases",
    children: [
      {
        title: "MongoDB",
        emoji: <MongoDBIcon />,
        subtitle: "NoSQL Database",
      },
      {
        title: "PostgreSQL",
        emoji: <PostgresIcon />,
        subtitle: "Relational Database",
      },
      {
        title: "MySQL",
        emoji: <MySqlIcon />,
        subtitle: "SQL Database",
      },
    ],
  },
];
