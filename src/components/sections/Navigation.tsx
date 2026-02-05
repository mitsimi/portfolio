import { useState, useEffect } from "react";
import { motion } from "motion/react";

interface NavigationProps {
  activeSection: string;
}

const sections = ["home", "about", "projects", "journey", "connect"];

export const Navigation = ({ activeSection }: NavigationProps) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4, ease: [0.87, 0, 0.13, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-bg/95 backdrop-blur-sm border-b-4 border-black"
          : "bg-transparent"
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-450 mx-auto px-6 py-4 flex items-center justify-between">
        <motion.a
          href="#home"
          className="text-2xl font-black tracking-tighter font-mono"
          whileHover={{ x: 4 }}
        >
          NF<span className="text-accent">_</span>
        </motion.a>

        <ul className="hidden md:flex gap-0 list-none m-0 p-0 border-2 border-black">
          {sections.map((section, i) => (
            <li
              key={section}
              className={
                i < sections.length - 1 ? "border-r-2 border-black" : ""
              }
            >
              <a
                href={`#${section}`}
                className={`block px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] transition-all duration-200 font-mono ${
                  activeSection === section
                    ? "bg-black text-bg"
                    : "bg-transparent text-black hover:bg-black/10"
                }`}
                aria-current={activeSection === section ? "true" : undefined}
              >
                {section}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block text-xs font-bold uppercase tracking-[0.2em] font-mono">
          EST. 2001
        </div>
      </div>
    </motion.nav>
  );
};
