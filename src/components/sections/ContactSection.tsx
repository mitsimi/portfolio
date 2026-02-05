import { useRef } from "react";
import { motion, useInView } from "motion/react";
import type { PortfolioData } from "../../data/portfolio";
import { BoldLabel } from "../ui";

interface ContactSectionProps {
  data: PortfolioData;
}

export const ContactSection = ({ data }: ContactSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="connect"
      ref={ref}
      className="relative py-32 px-6 md:px-12 text-black overflow-hidden"
      aria-labelledby="connect-heading"
    >
      <div className="max-w-450 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <BoldLabel className="text-accent">05 / Contact</BoldLabel>

          <h2
            id="connect-heading"
            className="text-5xl md:text-8xl font-black mt-6 mb-8 leading-[0.95] font-mono"
          >
            LET'S
            <br />
            <span
              style={{
                WebkitTextStroke: "3px black",
                WebkitTextFillColor: "transparent",
              }}
            >
              CONNECT_
            </span>
          </h2>

          <p className="text-xl text-black/70 max-w-xl mb-12 font-sans">
            Got a project in mind? Let's build something brutal together.
          </p>

          <motion.a
            href={`mailto:${data.email}`}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="inline-block text-3xl md:text-5xl font-black hover:opacity-70 transition-opacity border-b-4 border-black pb-2 font-mono"
          >
            {data.email.toUpperCase()}
          </motion.a>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="mt-16 flex flex-wrap gap-6"
          >
            <a
              href={`https://${data.social.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-black text-white font-bold uppercase tracking-[0.2em] text-sm hover:bg-bg hover:text-black transition-colors border-4 border-black font-mono"
            >
              GitHub
            </a>
          </motion.div>
        </motion.div>

        <motion.footer
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
          className="mt-32 pt-8 border-t-4 border-black/20 flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
        >
          <BoldLabel className="text-black/50">
            {data.location.toUpperCase()}
          </BoldLabel>
          <BoldLabel className="text-black/50">
            {new Date().getFullYear()} {data.name.toUpperCase()}
          </BoldLabel>
        </motion.footer>
      </div>
    </section>
  );
};
