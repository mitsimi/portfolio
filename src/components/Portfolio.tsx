import { useState, useEffect } from "react";
import type { PortfolioData } from "../data/portfolio";
import {
  Navigation,
  HeroSection,
  AboutSection,
  ProjectsSection,
  ExperienceSection,
  ContactSection,
} from "./sections";

interface Props {
  data: PortfolioData;
}

export default function Portfolio({ data }: Props) {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 },
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-bg text-black selection:bg-accent selection:text-black">
      <Navigation activeSection={activeSection} />
      <HeroSection data={data} />
      <AboutSection data={data} />
      <ProjectsSection data={data} />
      <ExperienceSection data={data} />
      <ContactSection data={data} />
    </div>
  );
}
