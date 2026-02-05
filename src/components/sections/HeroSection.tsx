import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import type { PortfolioData } from "../../data/portfolio";
import { GridPattern, NoiseOverlay, DiagonalStripe, BoldLabel } from "../ui";

interface HeroSectionProps {
  data: PortfolioData;
}

export const HeroSection = ({ data }: HeroSectionProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden bg-bg"
      aria-labelledby="hero-heading"
    >
      <GridPattern />
      <NoiseOverlay />

      {/* Large decorative number */}
      <motion.div
        style={{ y, opacity }}
        className="absolute -right-20 top-1/2 -translate-y-1/2 text-[40vw] font-black text-black/3 leading-none select-none pointer-events-none font-mono hidden md:block"
        aria-hidden="true"
      >
        01
      </motion.div>

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 px-6 md:px-12 max-w-450 mx-auto w-full md:pt-32"
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6, ease: [0.87, 0, 0.13, 1] }}
          className="mb-8"
        >
          <BoldLabel className="text-accent">Software Developer</BoldLabel>
        </motion.div>

        <div className="overflow-hidden">
          <motion.h1
            id="hero-heading"
            initial={{ y: 200 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.87, 0, 0.13, 1] }}
            className="text-[15vw] md:text-[12vw] font-black leading-[0.85] tracking-tighter text-black font-mono"
          >
            {data.name.split(" ")[0].toUpperCase()}
          </motion.h1>
        </div>

        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: 300 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.87, 0, 0.13, 1] }}
            className="text-[15vw] md:text-[12vw] font-black tracking-tighter text-black font-mono"
            style={{
              WebkitTextStroke: "2px black",
              WebkitTextFillColor: "transparent",
            }}
          >
            {data.name.split(" ").slice(1).join(" ").toUpperCase()}
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-16 max-w-xl"
        >
          <p className="text-lg md:text-xl text-black/70 leading-relaxed border-l-4 border-accent pl-6 font-sans">
            {data.tagline}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mt-12 flex flex-wrap gap-4"
        >
          <a
            href="#work"
            className="inline-flex items-center gap-4 px-8 py-4 bg-black text-bg font-bold uppercase tracking-[0.2em] text-sm hover:bg-accent transition-colors border-4 border-black font-mono"
          >
            View Work
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="square"
                strokeWidth={3}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
          <a
            href={`https://${data.social.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 px-8 py-4 bg-transparent text-black font-bold uppercase tracking-[0.2em] text-sm hover:bg-black hover:text-bg transition-colors border-4 border-black font-mono"
          >
            GitHub
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-4 border-black rounded-full flex justify-center pt-2"
        >
          <motion.div className="w-2 h-2 bg-black rounded-full" />
        </motion.div>
        <BoldLabel className="text-black/50">Scroll</BoldLabel>
      </motion.div>
    </section>
  );
};
