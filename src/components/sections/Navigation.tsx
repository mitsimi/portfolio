import { useState, useEffect } from "react";
import { motion } from "motion/react";
import type { Locale } from "../../i18n/locales";
import type { Strings } from "../../i18n";
import { locales } from "../../i18n/locales";

interface NavigationProps {
  activeSection: string;
  locale: Locale;
  strings: Strings;
}

const sectionIds = ["home", "about", "projects", "journey", "connect"] as const;

export const Navigation = ({
  activeSection,
  locale,
  strings,
}: NavigationProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const enHref = locales.en.pathPrefix;
  const deHref = locales.de.pathPrefix;

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

        <div className="flex md:hidden items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] font-mono">
          {locale === "en" ? (
            <span className="text-black">EN</span>
          ) : (
            <a
              href={enHref}
              className="text-black/40 hover:text-black transition-colors"
              aria-label="Switch to English"
            >
              EN
            </a>
          )}
          <span className="text-black/30">|</span>
          {locale === "de" ? (
            <span className="text-black">DE</span>
          ) : (
            <a
              href={deHref}
              className="text-black/40 hover:text-black transition-colors"
              aria-label="Switch to German"
            >
              DE
            </a>
          )}
        </div>

        <ul className="hidden md:flex gap-0 list-none m-0 p-0 border-2 border-black">
          {sectionIds.map((section, i) => (
            <li
              key={section}
              className={
                i < sectionIds.length - 1 ? "border-r-2 border-black" : ""
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
                {strings.nav[section]}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-6 text-xs font-bold uppercase tracking-[0.2em] font-mono">
          <span className="text-black/60">EST. 2001</span>
          <div className="flex items-center gap-2">
            {locale === "en" ? (
              <span className="text-black">EN</span>
            ) : (
              <a
                href={enHref}
                className="text-black/40 hover:text-black transition-colors"
                aria-label="Switch to English"
              >
                EN
              </a>
            )}
            <span className="text-black/30">|</span>
            {locale === "de" ? (
              <span className="text-black">DE</span>
            ) : (
              <a
                href={deHref}
                className="text-black/40 hover:text-black transition-colors"
                aria-label="Switch to German"
              >
                DE
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};
