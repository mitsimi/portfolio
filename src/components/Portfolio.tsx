import { useState, useEffect } from "react";
import type { PortfolioData } from "../data/portfolio";
import type { Locale } from "../i18n/locales";
import type { Strings } from "../i18n";
import {
  Navigation,
  HeroSection,
  AboutSection,
  ProjectsSection,
  ExperienceSection,
  ContactSection,
} from "./sections";
import { Footer } from "./ui";

interface Props {
  data: PortfolioData;
  locale: Locale;
  strings: Strings;
}

export default function Portfolio({ data, locale, strings }: Props) {
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
      <Navigation activeSection={activeSection} locale={locale} strings={strings} />
      <HeroSection data={data} strings={strings} />
      <AboutSection data={data} strings={strings} />
      <ProjectsSection data={data} strings={strings} />
      <ExperienceSection data={data} strings={strings} />
      <ContactSection data={data} strings={strings} />
      <Footer data={data} strings={strings} />
    </div>
  );
}
