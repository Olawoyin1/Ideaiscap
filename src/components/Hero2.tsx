import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { FiMenu } from "react-icons/fi";
import { GrClose } from "react-icons/gr";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const keywords = ["CHANGE", "ACTION", "PURPOSE", "SOLUTION"];
const typingSpeed = 120;

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.4, ease: "easeInOut" },
  },
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const keywordVariant: Variants = {
  initial: { opacity: 0, y: 50, filter: "blur(6px)" },
  animate: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.4, type: "spring", bounce: 0.5 },
  },
  exit: {
    opacity: 0,
    y: -40,
    filter: "blur(4px)",
    transition: { duration: 0.3 },
  },
};

export default function Hero() {
  const [phase, setPhase] = useState<
    "intro" | "keywords" | "typingFinal" | "done"
  >("intro");
  const [introIndex, setIntroIndex] = useState(0);
  const [keywordIndex, setKeywordIndex] = useState(0);
  const [finalIndex, setFinalIndex] = useState(0);
  const [lineCount, setLineCount] = useState(4);
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();

  const navItems = [
    { name: "OUR PURPOSE", href: "/purpose" },
    { name: "LAST GENERATION", href: "/last-generation" },
    { name: "FILOSOFI", href: "/filosofi" },
    { name: "SOCIOLOJI", href: "/socioloji" },
    { name: "CONNECT", href: "/connect" },
  ];

  const containerVariant: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.7 },
    },
  };

  const itemVariant: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", bounce: 0.4 },
    },
  };

  const introText = "IDEA IS ...";
  const spacedFinal = "IDEA IS CAPITAL".split("");

  // Responsive vertical lines
  useEffect(() => {
    const updateLineCount = () => setLineCount(window.innerWidth < 640 ? 3 : 4);
    updateLineCount();
    window.addEventListener("resize", updateLineCount);
    return () => window.removeEventListener("resize", updateLineCount);
  }, []);

  // Typing "IDEA IS ..." with delay
  useEffect(() => {
    if (phase !== "intro") return;
    if (introIndex < introText.length) {
      const timeout = setTimeout(() => {
        setIntroIndex((i) => i + 1);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    }
    const delay = setTimeout(() => setPhase("keywords"), 1200);
    return () => clearTimeout(delay);
  }, [phase, introIndex]);

  useEffect(() => {
    if (phase !== "keywords") return;

    if (keywordIndex === 0) {
      // Show first keyword instantly
      setKeywordIndex(1);
      return;
    }

    if (keywordIndex < keywords.length) {
      const timeout = setTimeout(() => {
        setKeywordIndex((i) => i + 1);
      }, 2000); // Wait 2s between keywords
      return () => clearTimeout(timeout);
    }

    // ✅ Delay the transition to next phase *after* the final keyword has animated out
    const pause = setTimeout(() => setPhase("typingFinal"), 1500); // Let the last word fade out
    return () => clearTimeout(pause);
  }, [phase, keywordIndex]);

  // Typing final full line
  useEffect(() => {
    if (phase !== "typingFinal") return;
    if (finalIndex < spacedFinal.length) {
      const timeout = setTimeout(() => {
        setFinalIndex((i) => i + 1);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    }
    const doneTimeout = setTimeout(() => setPhase("done"), 600);
    return () => clearTimeout(doneTimeout);
  }, [phase, finalIndex]);

  return (
    <section
      className="relative min-h-screen bg-black text-white flex items-center justify-center px-8 overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url(../../Images/hero.jpg)" }}
    >
      {/* Vertical falling lines */}
      <div className="absolute container inset-0 z-0 pointer-events-none">
        <div className="relative h-full w-full flex justify-between px-20">
          {Array.from({ length: lineCount }, (_, idx) => (
            <motion.div
              key={idx}
              className="w-px bg-gray-400 opacity-20 h-full"
              initial={{ y: "-100%" }}
              animate={{ y: "100%" }}
              transition={{
                repeat: Infinity,
                duration: 2.5 + idx * 0.3,
                ease: "linear",
                delay: idx * 0.5,
              }}
            />
          ))}
        </div>
      </div>

      <div className="text-center max-w-2xl z-10">
        {/* Step 1: Typing IDEA IS ... */}
        {phase === "intro" && (
          <h1 className="text-5xl hero-txt sm:text-6xl md:text-7xl font-semibold">
            {introText
              .slice(0, introIndex)
              .split("")
              .map((char, i) => (
                <motion.span
                  key={i}
                  className="inline-block"
                  initial={{ opacity: 0, filter: "blur(6px)" }}
                  animate={{ opacity: 1, filter: "blur(0px)" }}
                  transition={{ duration: 0.5 }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
          </h1>
        )}

        {/* Step 2: Slide up keywords */}
        {phase === "keywords" &&
          keywordIndex > 0 &&
          keywordIndex <= keywords.length && (
            <AnimatePresence mode="wait">
              <motion.h1
                key={keywords[keywordIndex - 1]}
                className="text-5xl sm:text-6xl md:text-7xl hero-txt font-semibold text-blue-400"
                variants={keywordVariant}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                {keywords[keywordIndex - 1]}
              </motion.h1>
            </AnimatePresence>
          )}

        {/* Step 3: Type "IDEA IS CAPITAL" */}
        {(phase === "typingFinal" || phase === "done") && (
          <h1 className="text-5xl hero-txt sm:text-6xl md:text-7xl font-semibold">
            {spacedFinal.slice(0, finalIndex).map((char, i) => (
              <motion.span
                key={i}
                className="inline-block"
                initial={{ opacity: 0, filter: "blur(6px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 1 }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </h1>
        )}

        {/* Final UI */}
        {phase === "done" && (
          <motion.div
            className="mt-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="flex items-center justify-center text-xl  gap-2 sm:gap-4 md:text-2xl text-gray-300 text-center"
              variants={fadeInUp}
            >
              <p>Innovative</p>
              <p>|</p>
              <p>Imaginative</p>
              <p>|</p>
              <p>Creative</p>
            </motion.div>

            <motion.aside
              className="absolute hidden sm:flex right-0 top-0 h-screen w-20 bg-black/30 flex-col items-center py-6"
              variants={fadeInUp}
            >
              <motion.div className="mb-4" variants={fadeInUp}>
                <FiMenu
                  className="text-white  text-2xl cursor-pointer rotate-90"
                  onClick={() => setMenuOpen(true)}
                />
              </motion.div>
              <motion.nav
                className="flex flex-col justify-evenly flex-1 items-center text-white text-xs tracking-wide font-semibold"
                variants={containerVariants}
              >
                {[
                  {
                    name: "Facebook",
                    url: "https://facebook.com/ideaiscapital",
                  },
                  { name: "X", url: "https://x.com/ideaiscapial" }, // formerly Twitter
                  {
                    name: "Instagram",
                    url: "https://instagram.com/ideaiscapital",
                  },
                  {
                    name: "LinkedIn",
                    url: "https://linkedin.com/company/ideaiscapital",
                  },
                  { name: "TikTok", url: "https://tiktok.com/@ideaiscapital" },
                ].map(({ name, url }) => (
                  <motion.a
                    key={name}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rotate-[-90deg] hover:text-blue-400 transition"
                    variants={fadeInUp}
                  >
                    {name}
                  </motion.a>
                ))}
              </motion.nav>
            </motion.aside>

            <motion.div
              className="absolute hidden sm:block bottom-10 left-10"
              variants={fadeInUp}
            >
              <a
                href="#journey"
                className="bg-black text-white cursor-pointer px-7 py-2 font-semibold shadow transition-all hover:bg-blue-700 text-lg "
              >
                Journey
              </a>
            </motion.div>
          </motion.div>
        )}

        {/* Menu icon for small screens only */}
        {phase === "done" && (
          <motion.div
            className="absolute sm:hidden top-7 right-7 rotate-90 z-50"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <FiMenu
              className="text-white text-3xl cursor-pointer"
              onClick={() => setMenuOpen(true)}
            />
          </motion.div>
        )}
      </div>

      {phase === "done" && (
        <motion.div
          className="fixed block sm:hidden bottom-0 left-0 w-full bg-black/80 backdrop-blur-sm py-3 z-50"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.nav
            className="container flex items-center justify-center text-xs cf sm:text-base gap-2 sm:gap-4 text-white uppercase tracking-wide"
            variants={containerVariants}
          >
            {[
              { name: "Facebook", url: "https://facebook.com" },
              { name: "Instagram", url: "https://instagram.com" },
              { name: "LinkedIn", url: "https://linkedin.com" },
              { name: "TikTok", url: "https://tiktok.com" },
              { name: "X", url: "https://x.com" },
            ].map((item, idx, arr) => (
              <React.Fragment key={item.name}>
                <motion.a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition"
                  variants={fadeInUp}
                >
                  {item.name}
                </motion.a>
                {idx < arr.length - 1 && (
                  <motion.span className="text-white/50" variants={fadeInUp}>
                    |
                  </motion.span>
                )}
              </React.Fragment>
            ))}
          </motion.nav>
        </motion.div>
      )}

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 bg-black z-50 flex items-center justify-center"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            {/* Close icon */}
            <div
              className="absolute top-5 right-5 text-white text-3xl cursor-pointer"
              onClick={() => setMenuOpen(false)}
            >
              <GrClose />
            </div>

            {/* AnimatePresence for list */}
            <motion.ul
              className="text-white text-xl sm:text-3xl space-y-6 text-center"
              variants={containerVariant}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              {navItems.map((item) => (
                <motion.li key={item.name} variants={itemVariant}>
                  <Link
                    to={item.href}
                    onClick={(e) => {
                      e.preventDefault(); // Prevent immediate routing
                      setMenuOpen(false); // Trigger exit animation
                      setTimeout(() => {
                        navigate(item.href); // Proper route transition
                      }, 600); // Match your motion exit transition
                    }}
                    className="hover:text-blue-400 cf transition"
                  >
                    {item.name}
                  </Link>

                  {item.name === "LAST GENERATION" && (
                    <div className="h-px w-130 mx-auto bg-white/20 mt-9" />
                  )}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
