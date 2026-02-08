import { motion } from "motion/react";
import type { PortfolioData } from "../../data/portfolio";
import type { Strings } from "../../i18n";
import { BoldLabel } from "../ui";

interface ExperienceSectionProps {
  data: PortfolioData;
  strings: Strings;
}

export const ExperienceSection = ({
  data,
  strings,
}: ExperienceSectionProps) => {
  return (
    <section
      id="journey"
      className="relative py-32 px-6 md:px-12 bg-black text-bg overflow-hidden"
      aria-labelledby="journey-heading"
    >
      <div className="max-w-350 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2, margin: "0px 0px -15% 0px" }}
          transition={{ duration: 0.3 }}
          className="mb-16"
        >
          <BoldLabel className="text-accent">
            {strings.experience.sectionLabel}
          </BoldLabel>
          <h2
            id="journey-heading"
            className="text-5xl md:text-8xl font-black mt-6 leading-[0.95] font-mono"
          >
            {strings.experience.heading}
            <span className="text-accent">_</span>
          </h2>
        </motion.div>

        <div className="space-y-0">
          {data.experience.map((exp, index) => (
            <motion.article
              key={exp.company}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2, margin: "0px 0px -15% 0px" }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              className="border-t-4 border-bg/20 py-12 group hover:bg-bg/5 transition-colors px-6 -mx-6"
            >
              <div className="grid md:grid-cols-4 gap-8 items-start">
                <div>
                  <BoldLabel className="text-accent">{exp.period}</BoldLabel>
                </div>

                <div className="md:col-span-3">
                  <h3 className="text-3xl font-black mb-2 group-hover:text-accent transition-colors font-mono">
                    {exp.role.toUpperCase()}
                  </h3>
                  <p className="text-xl text-bg/50 mb-4 font-mono">
                    {exp.company}
                  </p>
                  <p className="text-bg/70 mb-6 leading-relaxed font-sans">
                    {exp.description}
                  </p>
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, i) => (
                      <li
                        key={i}
                        className="text-sm text-bg/50 flex items-start gap-3 font-sans"
                      >
                        <span className="text-accent font-bold">//</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
