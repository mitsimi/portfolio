import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import type { PortfolioData, Project } from "../../data/portfolio";
import { GridPattern, BoldLabel } from "../ui";

const ExternalLinkIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="square"
    strokeLinejoin="miter"
    aria-hidden="true"
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const GithubIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const ArrowIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="square"
    aria-hidden="true"
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

interface ProjectsSectionProps {
  data: PortfolioData;
}

// Featured project card - horizontal layout with image
const FeaturedProjectCard = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        delay: index * 0.1,
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group"
    >
      <div className="border-4 border-black bg-bg overflow-hidden">
        <div className="flex flex-col lg:flex-row">
          {/* Image section */}
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
            {/* Index badge */}
            <div className="absolute top-0 left-0 bg-black px-4 py-2">
              <span
                className={`text-2xl font-black font-mono transition-colors ${isHovered ? "text-accent" : "text-white/40"}`}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
          </div>

          {/* Content section */}
          <div className="lg:w-1/2 flex flex-col">
            {/* Header */}
            <div className="bg-black text-bg px-6 py-4 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <BoldLabel>{project.year}</BoldLabel>
                <span className="w-1 h-1 bg-white/30 rounded-full" />
                <BoldLabel className="text-white/60">
                  {project.subtitle}
                </BoldLabel>
              </div>
            </div>

            {/* Body */}
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
                    aria-label={`View ${project.title} source code`}
                  >
                    <GithubIcon />
                    <span className="text-sm font-bold uppercase tracking-wider font-mono">
                      Source
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
                    aria-label={`View ${project.title} live demo`}
                  >
                    <span className="text-sm font-bold uppercase tracking-wider font-mono">
                      Live Demo
                    </span>
                    <ArrowIcon />
                  </motion.a>
                )}
              </div>
            </div>
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
}: {
  project: Project;
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        delay: index * 0.08,
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group"
    >
      <div className="border-4 border-black bg-bg overflow-hidden h-full flex flex-col">
        {/* Single row header with index and year */}
        <div className="bg-black text-bg px-4 sm:px-6 py-3 flex items-center gap-2 sm:gap-4 min-w-0">
          <span
            className={`text-lg sm:text-xl font-black font-mono transition-colors shrink-0 ${isHovered ? "text-accent" : "text-white/40"}`}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="w-px h-4 bg-white/20 shrink-0" />
          <BoldLabel className="shrink-0">{project.year}</BoldLabel>
          <span className="w-px h-4 bg-white/20 shrink-0" />
          <BoldLabel className="text-white/60 truncate text-wrap">
            {project.subtitle}
          </BoldLabel>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 flex flex-col flex-1">
          {/* Main content */}
          <div className="flex-1">
            <motion.h3
              className="text-xl sm:text-2xl md:text-3xl font-black mb-3 font-mono leading-tight"
              animate={{ x: isHovered ? 6 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {project.title.toUpperCase()}
              <span className="text-accent">_</span>
            </motion.h3>

            <p className="text-black/60 leading-relaxed font-sans mb-4">
              {project.description}
            </p>

            {/* Tech stack inline */}
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider border border-black/15 font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center gap-4 pt-4 mt-4 border-t-2 border-black/10">
            {project.source && (
              <motion.a
                href={project.source}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-black/60 hover:text-black transition-colors"
                whileHover={{ x: 4 }}
                aria-label={`View ${project.title} source code`}
              >
                <GithubIcon />
                <span className="text-xs font-bold uppercase tracking-wider font-mono">
                  Source
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
                aria-label={`View ${project.title} live demo`}
              >
                <span className="text-xs font-bold uppercase tracking-wider font-mono">
                  Demo
                </span>
                <ExternalLinkIcon />
              </motion.a>
            )}
          </div>
        </div>

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

export const ProjectsSection = ({ data }: ProjectsSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Separate featured (with image) and compact (without) projects
  const featuredProjects = data.projects.filter((p) => p.image);
  const compactProjects = data.projects.filter((p) => !p.image);

  // Calculate index offset for compact projects
  const featuredCount = featuredProjects.length;

  return (
    <section
      id="projects"
      ref={ref}
      className="relative py-32 px-6 md:px-12 bg-bg overflow-hidden"
      aria-labelledby="projects-heading"
    >
      <GridPattern />

      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <BoldLabel className="text-accent">03 / Selected Projects</BoldLabel>
          <h2
            id="projects-heading"
            className="text-5xl md:text-8xl font-black mt-6 leading-[0.85] font-mono"
          >
            PROJECTS<span className="text-accent">_</span>
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
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
