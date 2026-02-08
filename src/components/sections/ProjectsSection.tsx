import { useState } from "react";
import { motion } from "motion/react";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import type { PortfolioData, Project } from "../../data/portfolio";
import type { Strings } from "../../i18n";
import { GridPattern, BoldLabel } from "../ui";

interface ProjectsSectionProps {
  data: PortfolioData;
  strings: Strings;
}

const ProjectHeader = ({
  index,
  year,
  subtitle,
  isHovered,
}: {
  index: number;
  year: number;
  subtitle: string;
  isHovered: boolean;
}) => {
  return (
    <div className="bg-black text-bg px-4 sm:px-6 py-3 flex items-center gap-2 sm:gap-4 min-w-0">
      <span
        className={`text-lg sm:text-xl font-black font-mono transition-colors shrink-0 ${isHovered ? "text-accent" : "text-white/40"}`}
      >
        {String(index + 1).padStart(2, "0")}
      </span>
      <span className="w-px h-4 bg-white/20 shrink-0" />
      <BoldLabel className="shrink-0">{year}</BoldLabel>
      <span className="w-px h-4 bg-white/20 shrink-0" />
      <BoldLabel className="text-white/60 truncate text-wrap">
        {subtitle}
      </BoldLabel>
    </div>
  );
};

const ProjectDetails = ({
  project,
  isHovered,
  strings,
}: {
  project: Project;
  isHovered: boolean;
  strings: Strings;
}) => {
  return (
    <div className="p-6 lg:p-8 flex-1 flex flex-col">
      <motion.h3
        className="text-3xl lg:text-4xl font-black mb-4 font-mono leading-tight"
        animate={{ x: isHovered ? 6 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {project.title.toUpperCase()}
        <span className="text-accent">_</span>
      </motion.h3>

      <p className="text-black/60 mb-6 leading-relaxed font-sans flex-1">
        {project.description}
      </p>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 text-xs font-bold uppercase tracking-wider border-2 border-black/15 font-mono bg-black/2"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex items-center gap-4 pt-4 border-t-2 border-black/10">
        {project.source && (
          <motion.a
            href={project.source}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-black/70 hover:text-black transition-colors"
            whileHover={{ x: 4 }}
            aria-label={strings.projects.ariaSource.replace(
              "{title}",
              project.title,
            )}
          >
            <Github size={18} aria-hidden="true" />
            <span className="text-sm font-bold uppercase tracking-wider font-mono">
              {strings.projects.source}
            </span>
          </motion.a>
        )}
        {project.demo && (
          <motion.a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-accent hover:text-black transition-colors ml-auto"
            whileHover={{ x: 4 }}
            aria-label={strings.projects.ariaLive.replace(
              "{title}",
              project.title,
            )}
          >
            <span className="text-sm font-bold uppercase tracking-wider font-mono">
              {strings.projects.liveDemo}
            </span>
            <ArrowRight size={20} strokeWidth={2.5} aria-hidden="true" />
          </motion.a>
        )}
      </div>
    </div>
  );
};

// Featured project card - horizontal layout with image
const FeaturedProjectCard = ({
  project,
  index,
  strings,
}: {
  project: Project;
  index: number;
  strings: Strings;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2, margin: "0px 0px -15% 0px" }}
      transition={{
        delay: index * 0.08,
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group"
    >
      <div className="border-4 border-black bg-bg overflow-hidden">
        <div className="flex flex-col lg:flex-row">
          {/* Image section */}
          {project.image && (
            <div className="relative lg:w-1/2 border-b-4 lg:border-b-0 lg:border-r-4 border-black overflow-hidden">
              <div className="aspect-video lg:aspect-auto lg:h-full relative">
                <motion.img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  loading="lazy"
                  className="w-full h-full object-cover object-top"
                  initial={{ scale: 1 }}
                  animate={{ scale: isHovered ? 1.05 : 1 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                />
                {/* Accent overlay on hover */}
                <motion.div
                  className="absolute inset-0 bg-accent mix-blend-multiply"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isHovered ? 0.05 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>
          )}

          {/* Content section */}
          <div className="lg:w-1/2 flex flex-col">
            {/* Header */}
            <ProjectHeader
              index={index}
              year={project.year}
              subtitle={project.subtitle}
              isHovered={isHovered}
            />

            {/* Content */}
            <ProjectDetails
              project={project}
              isHovered={isHovered}
              strings={strings}
            />

            {/* Hover indicator */}
            <motion.div
              className="h-1 bg-accent mt-auto"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: isHovered ? 1 : 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformOrigin: "left" }}
            />
          </div>
        </div>
      </div>
    </motion.article>
  );
};

// Compact project card - for projects without images
const CompactProjectCard = ({
  project,
  index,
  strings,
}: {
  project: Project;
  index: number;
  strings: Strings;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2, margin: "0px 0px -15% 0px" }}
      transition={{
        delay: index * 0.06,
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group"
    >
      <div className="border-4 border-black bg-bg overflow-hidden h-full flex flex-col">
        {/* Header */}
        <ProjectHeader
          index={index}
          year={project.year}
          subtitle={project.subtitle}
          isHovered={isHovered}
        />

        {/* Content */}
        <ProjectDetails
          project={project}
          isHovered={isHovered}
          strings={strings}
        />

        {/* Hover indicator */}
        <motion.div
          className="h-1 bg-accent mt-auto"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isHovered ? 1 : 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          style={{ transformOrigin: "left" }}
        />
      </div>
    </motion.article>
  );
};

export const ProjectsSection = ({ data, strings }: ProjectsSectionProps) => {
  // Separate featured (with image) and compact (without) projects
  const featuredProjects = data.projects.filter((p) => p.image);
  const compactProjects = data.projects.filter((p) => !p.image);

  // Calculate index offset for compact projects
  const featuredCount = featuredProjects.length;

  return (
    <section
      id="projects"
      className="relative py-32 px-6 md:px-12 bg-bg overflow-hidden"
      aria-labelledby="projects-heading"
    >
      <GridPattern />

      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2, margin: "0px 0px -15% 0px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <BoldLabel className="text-accent">
            {strings.projects.sectionLabel}
          </BoldLabel>
          <h2
            id="projects-heading"
            className="text-5xl md:text-8xl font-black mt-6 leading-[0.85] font-mono"
          >
            {strings.projects.heading}
            <span className="text-accent">_</span>
          </h2>
        </motion.div>

        {/* Featured projects - full width stacked */}
        {featuredProjects.length > 0 && (
          <div className="space-y-8 mb-12">
            {featuredProjects.map((project, index) => (
              <FeaturedProjectCard
                key={project.id}
                project={project}
                index={index}
                strings={strings}
              />
            ))}
          </div>
        )}

        {/* Compact projects - 2 column grid */}
        {compactProjects.length > 0 && (
          <div className="grid md:grid-cols-2 gap-6">
            {compactProjects.map((project, index) => (
              <CompactProjectCard
                key={project.id}
                project={project}
                index={featuredCount + index}
                strings={strings}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
