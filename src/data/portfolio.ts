export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  tech: string[];
  year: number;
  image?: string;
  source?: string;
  demo?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  highlights: string[];
}

export interface Skill {
  category: string;
  items: string[];
}

export interface PortfolioData {
  name: string;
  username: string;
  title: string;
  tagline: string;
  bio: string;
  location: string;
  email: string;
  social: {
    github: string;
    linkedin?: string;
    twitter?: string;
  };
  projects: Project[];
  experience: Experience[];
  skills: Skill[];
}

export const portfolioData: PortfolioData = {
  name: "Noah Füreder",
  username: "mitsimi",
  title: "Informatics Student",
  tagline: "Building things that live on the web, one commit at a time",
  bio: "I'm an informatics student at Johannes Kepler University in Linz, Austria, passionate about software development and creating elegant solutions to complex problems. Based in Upper Austria, I combine academic foundations with hands-on project experience to craft meaningful digital experiences.",
  location: "Linz, Upper Austria",
  email: "contact@mitsimi.dev",
  social: {
    github: "github.com/mitsimi",
  },
  projects: [
    {
      id: "code-share",
      title: "CodeShare",
      subtitle: "Full-stack snippet platform",
      description:
        "A modern code snippet sharing platform built with Go and Vue.js featuring authentication and syntax highlighting.",
      longDescription:
        "A full-stack code snippet platform built as an engineering-focused project to explore backend architecture, authentication, and frontend state management. Features include JWT authentication with refresh-safe database access via SQLC tokens, type, TanStack Query for server state, and a responsive Vue 3 SPA with Tailwind CSS. The backend follows clean architecture principles with explicit domain, repository, and handler layers.",
      tech: ["Go", "Vue.js", "TypeScript", "SQLite", "Tailwind CSS"],
      year: 2025,
      demo: "https://codeshare.mitsimi.dev",
      source: "https://github.com/mitsimi/codeshare",
      image: "/images/codeshare.png",
    },
    {
      id: "jump_rs",
      title: "Jumpers",
      subtitle: "Wake-on-LAN web application",
      description:
        "A Wake-on-LAN web server built with Rust and Axum for waking devices remotely.",
      longDescription:
        "A Wake-on-LAN web application built with Rust and Axum. Features include HTTP API for waking devices, JSON-based device storage, configurable via file or environment variables, optional OpenTelemetry tracing support, and Docker deployment. The frontend is a TypeScript SPA served by the Rust backend, with OpenAPI-generated client code for type-safe API communication.",
      tech: ["Rust", "Axum", "TypeScript", "React", "OpenTelemetry", "Docker"],
      year: 2026,
      source: "https://github.com/mitsimi/jump_rs",
      image: "/images/jumpers.png",
    },
    {
      id: "veil",
      title: "Veil",
      subtitle: "PNG steganography tool",
      description:
        "A Rust library and CLI tool for hiding and extracting data in PNG files using steganography.",
      longDescription:
        "A Rust library and command-line tool for hiding and extracting data in PNG files using steganography. Uses PNG's chunk-based structure to hide data in custom 'vEiL' chunks without pixel manipulation. Features include detecting hidden data, hiding text messages or files, extracting hidden data, and a clean trait-based API for library usage. Created as a learning exercise to explore Rust's type system, error handling, and binary file formats.",
      tech: ["Rust", "CLI"],
      year: 2025,
      source: "https://github.com/mitsimi/veil",
    },
    {
      id: "raycast-gitea",
      title: "Raycast Gitea",
      subtitle: "Gitea extension for Raycast",
      description:
        "A Raycast extension to interact with Gitea repositories directly from your launcher.",
      longDescription:
        "A Raycast extension for seamless Gitea integration. Allows users to quickly access repositories, view issues, pull requests, and notifications without leaving their workflow. Built with TypeScript for type safety and maintainability, demonstrating modern extension development for the Raycast platform.",
      tech: ["TypeScript", "Raycast API", "JavaScript"],
      year: 2025,
      source: "https://github.com/mitsimi/raycast-gitea",
    },
    {
      id: "aocli",
      title: "AoC CLI",
      subtitle: "Advent of Code CLI tool",
      description:
        "A convenient CLI tool to speed up Advent of Code puzzle solving workflow.",
      longDescription:
        "A command-line tool designed to accelerate the Advent of Code puzzle-solving workflow. Features include project scaffolding, input downloading, template generation, and submission automation. Built to streamline the annual Advent of Code event participation with minimal friction.",
      tech: ["Go", "CLI"],
      year: 2024,
      source: "https://github.com/mitsimi/aocli",
    },
    {
      id: "multimedia-converter",
      title: "Multimedia Converter",
      subtitle: "Desktop media conversion tool",
      description:
        "A desktop application for converting images, audio, and video files between formats, built with Java and Qt Jambi.",
      longDescription:
        "A university project exploring multimedia processing in Java. Features a Qt-based GUI using Qt Jambi bindings and leverages JAVE (Java Audio Video Encoder) for format conversion. Supports batch conversion of images, audio files, and videos with a clean, native-feeling interface.",
      tech: ["Java", "Qt Jambi", "JAVE", "Maven"],
      year: 2023,
      source: "https://github.com/mitsimi/multimediaconverter",
    },
  ],
  experience: [
    {
      company: "Gemeinde Pasching",
      role: "IT-Coordinator",
      period: "2023 - Present",
      description:
        "Coordinating all IT operations for the local community government",
      highlights: [
        "Managing system maintenance and network troubleshooting",
        "Providing direct user support and technical assistance",
        "Communicating with external service providers",
      ],
    },
    {
      company: "Johannes Kepler University",
      role: "Informatics Student (Bachelor)",
      period: "2023 - Present",
      description:
        "Pursuing a Bachelor's degree in Informatics with focus on software engineering",
      highlights: [
        "Studying algorithms, data structures, and software architecture",
        "Working on practical projects applying theoretical knowledge",
        "Collaborating with peers on team-based development projects",
      ],
    },
    {
      company: "Ing. A. Fritz Voith GesmbH",
      role: "IT Internship",
      period: "2019",
      description:
        "Summer internship focused on software development and IT operations",
      highlights: [
        "Developed application for material price tracking with PSIpenta/ERP integration",
        "Assisted in everyday IT operations and support tasks",
      ],
    },
    {
      company: "HTBLA Traun",
      role: "Information & Communication Technologies",
      period: "2017 - 2022",
      description:
        "Higher Technical College education specializing in IT and communications",
      highlights: [
        "Completed comprehensive technical education in informatics",
        "Participated in IT-Security enhancement program",
      ],
    },
  ],
  skills: [
    {
      category: "Languages",
      items: ["TypeScript", "JavaScript", "Java", "Go", "Rust", "SQL"],
    },
    {
      category: "Frontend",
      items: ["React", "Vue.js", "Astro", "Tailwind CSS", "HTML/CSS"],
    },
    {
      category: "Backend",
      items: ["Node.js", "PostgreSQL", "REST APIs", "RPC"],
    },
    {
      category: "Tools",
      items: ["Git", "GitHub", "Docker", "Zed", "Linux"],
    },
  ],
};
