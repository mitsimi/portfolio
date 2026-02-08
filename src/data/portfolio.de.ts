import type { PortfolioData } from "./portfolio";

export const portfolioData: PortfolioData = {
  name: "Noah Füreder",
  username: "mitsimi",
  title: "Informatik-Student",
  tagline: "Ich baue Dinge fürs Web – Commit für Commit.",
  bio: "Ich bin Informatik-Student an der Johannes Kepler Universität Linz mit Schwerpunkt Softwareentwicklung und dem Anspruch, elegante Lösungen für komplexe Probleme zu schaffen. Aus Oberösterreich kombiniere ich akademische Grundlagen mit praxisnahen Projekten, um digitale Erlebnisse mit Substanz zu gestalten.",
  location: "Linz, Oberösterreich",
  email: "contact@mitsimi.dev",
  social: {
    github: "github.com/mitsimi",
  },
  projects: [
    {
      id: "jump_rs",
      title: "Jumpers",
      subtitle: "Wake-on-LAN-Webanwendung",
      description:
        "Ein Wake-on-LAN-Webserver mit Rust und Axum, der Geräte über das Netzwerk aufweckt.",
      longDescription:
        "Eine Wake-on-LAN-Webanwendung mit Rust und Axum. Enthält eine HTTP-API zum Aufwecken von Geräten, JSON-basierte Gerätespeicherung, Konfiguration per Datei oder Umgebungsvariablen, optionales OpenTelemetry-Tracing und Docker-Deployment. Das Frontend ist eine TypeScript-SPA, die vom Rust-Backend ausgeliefert wird, mit OpenAPI-generiertem Client-Code für typsichere API-Kommunikation.",
      tech: ["Rust", "Axum", "TypeScript", "React", "OpenTelemetry", "Docker"],
      year: 2026,
      source: "https://github.com/mitsimi/jump_rs",
      image: "/images/jumpers.png",
    },
    {
      id: "code-share",
      title: "CodeShare",
      subtitle: "Full-Stack Snippet-Plattform",
      description:
        "Moderne Code-Snippet-Plattform mit Go und Vue.js inklusive Authentifizierung und Syntax-Highlighting.",
      longDescription:
        "Eine Full-Stack-Plattform für Code-Snippets, gebaut als Engineering-orientiertes Projekt zur Erkundung von Backend-Architektur, Authentifizierung und Frontend-State-Management. Features: JWT-Auth mit refresh-sicherem Datenbankzugriff über SQLC-Token, TanStack Query für Server State und eine responsive Vue-3-SPA mit Tailwind CSS. Das Backend folgt Clean-Architecture-Prinzipien mit klaren Domain-, Repository- und Handler-Layern.",
      tech: ["Go", "Vue.js", "TypeScript", "SQLite", "Tailwind CSS"],
      year: 2025,
      demo: "https://codeshare.mitsimi.dev",
      source: "https://github.com/mitsimi/codeshare",
      image: "/images/codeshare.png",
    },
    {
      id: "veil",
      title: "Veil",
      subtitle: "PNG-Steganografie-Tool",
      description:
        "Rust-Bibliothek und CLI-Tool zum Verstecken und Extrahieren von Daten in PNG-Dateien.",
      longDescription:
        "Eine Rust-Bibliothek und ein CLI-Tool für Steganografie in PNG-Dateien. Nutzt die chunk-basierte PNG-Struktur, um Daten in benutzerdefinierten 'vEiL'-Chunks ohne Pixelmanipulation zu verstecken. Features: versteckte Daten erkennen, Textnachrichten oder Dateien verstecken, extrahieren und eine saubere, trait-basierte API. Entstanden als Lernprojekt zu Rusts Typsystem, Fehlerbehandlung und binären Dateiformaten.",
      tech: ["Rust", "CLI"],
      year: 2025,
      source: "https://github.com/mitsimi/veil",
    },
    {
      id: "raycast-gitea",
      title: "Raycast Gitea",
      subtitle: "Gitea-Extension für Raycast",
      description:
        "Raycast-Extension, um Gitea-Repositories direkt aus dem Launcher zu bedienen.",
      longDescription:
        "Eine Raycast-Extension für eine nahtlose Gitea-Integration. Ermöglicht schnellen Zugriff auf Repositories, Issues, Pull Requests und Benachrichtigungen, ohne den Workflow zu verlassen. In TypeScript gebaut für Typsicherheit und Wartbarkeit – modernes Extension-Development für Raycast.",
      tech: ["TypeScript", "Raycast API", "JavaScript"],
      year: 2025,
      source: "https://github.com/mitsimi/raycast-gitea",
    },
    {
      id: "aocli",
      title: "AoC CLI",
      subtitle: "Advent-of-Code CLI-Tool",
      description:
        "Praktisches CLI-Tool zur Beschleunigung des Advent-of-Code-Workflows.",
      longDescription:
        "Ein CLI-Tool, das den Advent-of-Code-Workflow beschleunigt. Features: Projekt-Scaffolding, Input-Download, Template-Generierung und Submission-Automation. Entwickelt, um die jährliche Teilnahme mit minimaler Reibung zu unterstützen.",
      tech: ["Go", "CLI"],
      year: 2024,
      source: "https://github.com/mitsimi/aocli",
    },
    {
      id: "multimedia-converter",
      title: "Multimedia Converter",
      subtitle: "Desktop-Medienkonverter",
      description:
        "Desktop-App zum Konvertieren von Bild-, Audio- und Videodateien, gebaut mit Java und Qt Jambi.",
      longDescription:
        "Ein Uni-Projekt zur Multimedia-Verarbeitung in Java. Enthält eine Qt-basierte GUI mit Qt-Jambi-Bindings und nutzt JAVE (Java Audio Video Encoder) für die Formatkonvertierung. Unterstützt Batch-Konvertierung von Bildern, Audios und Videos mit nativer Anmutung.",
      tech: ["Java", "Qt Jambi", "JAVE", "Maven"],
      year: 2023,
      source: "https://github.com/mitsimi/multimediaconverter",
    },
  ],
  experience: [
    {
      company: "Gemeinde Pasching",
      role: "IT-Koordinator",
      period: "2023 - Heute",
      description: "Koordination aller IT-Operationen für die Gemeinde",
      highlights: [
        "Wartung von Systemen und Netzwerk-Fehlerbehebung",
        "Direkter User-Support und technische Unterstützung",
        "Kommunikation mit externen Dienstleistern",
      ],
    },
    {
      company: "Johannes Kepler Universität",
      role: "Informatik Bachelorstudium",
      period: "2023 - Heute",
      description:
        "Bachelorstudium Informatik mit Schwerpunkt Software Engineering",
      highlights: [
        "Algorithmen, Datenstrukturen und Softwarearchitektur",
        "Praxisprojekte zur Anwendung theoretischer Inhalte",
        "Zusammenarbeit in teamorientierten Entwicklungsprojekten",
      ],
    },
    {
      company: "Ing. A. Fritz Voith GesmbH",
      role: "IT-Praktikum",
      period: "2019",
      description:
        "Sommerpraktikum mit Fokus auf Softwareentwicklung und IT-Betrieb",
      highlights: [
        "Entwicklung einer Anwendung zur Materialpreis-Verfolgung mit PSIpenta/ERP-Integration",
        "Unterstützung im Tagesgeschäft der IT",
      ],
    },
    {
      company: "HTBLA Traun",
      role: "Informations- und Kommunikations-Technologien",
      period: "2017 - 2022",
      description:
        "Höhere technische Ausbildung mit Schwerpunkt IT und Kommunikation",
      highlights: [
        "Umfassende technische Ausbildung in Informatik",
        "Teilnahme am IT-Security-Enhancement-Programm",
      ],
    },
  ],
  skills: [
    {
      category: "Sprachen",
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
