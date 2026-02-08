import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { MapPin } from "lucide-react";
import type { PortfolioData } from "../../data/portfolio";
import { BoldLabel } from "../ui";

interface AboutSectionProps {
  data: PortfolioData;
}

const SkillTag = ({ skill, delay }: { skill: string; delay: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.3 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative px-4 py-2 text-sm font-bold border-2 border-bg/20 hover:border-accent hover:bg-accent hover:text-black transition-all duration-200 cursor-default font-mono inline-block"
    >
      <motion.span
        animate={{ x: isHovered ? 2 : 0 }}
        transition={{ duration: 0.2 }}
      >
        {skill}
      </motion.span>
    </motion.span>
  );
};

export const AboutSection = ({ data }: AboutSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Flatten all skills for the cloud display
  const allSkills = data.skills.flatMap((category) => category.items);

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-32 px-6 md:px-12 bg-black text-bg overflow-hidden"
      aria-labelledby="about-heading"
    >
      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #f5f5f0 1px, transparent 1px),
            linear-gradient(to bottom, #f5f5f0 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <BoldLabel className="text-accent">02 / About</BoldLabel>
          <h2
            id="about-heading"
            className="text-5xl md:text-8xl font-black mt-6 leading-[0.95] font-mono"
          >
            ABOUT<span className="text-accent">_</span>
          </h2>
        </motion.div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left column - Bio and stats */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="lg:col-span-5"
          >
            {/* Bio card */}
            <div className="border-4 border-bg mb-8">
              <div className="bg-bg text-black px-6 py-4">
                <BoldLabel>WHO I AM</BoldLabel>
              </div>
              <div className="p-6 md:p-8">
                <p className="text-lg md:text-xl text-bg/80 leading-relaxed font-sans mb-6">
                  {data.bio}
                </p>

                {/* Location */}
                <div className="flex items-center gap-3 text-bg/60">
                  <MapPin size={18} strokeWidth={2.5} aria-hidden="true" />
                  <span className="font-mono text-sm">{data.location}</span>
                </div>
              </div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 }}
                className="border-4 border-bg/20 p-6 group hover:border-accent transition-colors"
              >
                <div className="text-5xl md:text-6xl font-black text-accent font-mono leading-none">
                  {data.projects.length}
                </div>
                <BoldLabel className="text-bg/50 mt-3 block group-hover:text-bg transition-colors">
                  Projects
                </BoldLabel>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 }}
                className="border-4 border-bg/20 p-6 group hover:border-accent transition-colors"
              >
                <div className="text-5xl md:text-6xl font-black text-accent font-mono leading-none">
                  {new Date().getFullYear() - 2017}
                </div>
                <BoldLabel className="text-bg/50 mt-3 block group-hover:text-bg transition-colors">
                  Years Coding
                </BoldLabel>
              </motion.div>
            </div>
          </motion.div>

          {/* Right column - Skills */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="border-4 border-bg h-full">
              <div className="bg-bg text-black px-6 py-4 flex items-center justify-between">
                <BoldLabel>TECH STACK</BoldLabel>
                <span className="text-xs font-mono text-black/40">
                  {allSkills.length} skills
                </span>
              </div>

              <div className="p-6 md:p-8">
                {data.skills.map((category, categoryIndex) => (
                  <motion.div
                    key={category.category}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4 + categoryIndex * 0.1 }}
                    className="mb-8 last:mb-0"
                  >
                    {/* Category header */}
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-2xl font-black font-mono text-accent">
                        {String(categoryIndex + 1).padStart(2, "0")}
                      </span>
                      <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-bg/40 font-mono">
                        {category.category}
                      </h3>
                      <div className="flex-1 h-px bg-bg/10" />
                    </div>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2 pl-10">
                      {category.items.map((skill, skillIndex) => (
                        <SkillTag
                          key={skill}
                          skill={skill}
                          delay={0.5 + categoryIndex * 0.1 + skillIndex * 0.03}
                        />
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
