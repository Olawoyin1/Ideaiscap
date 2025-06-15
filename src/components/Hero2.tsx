import { useEffect, useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { FiMenu } from "react-icons/fi";

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

  // Slide up keywords
  // useEffect(() => {
  //   if (phase !== 'keywords') return;
  //   if (keywordIndex < keywords.length) {
  //     const timeout = setTimeout(() => {
  //       setKeywordIndex((i) => i + 1);
  //     }, 2000);
  //     return () => clearTimeout(timeout);
  //   }
  //   const pause = setTimeout(() => setPhase('typingFinal'), 0);
  //   return () => clearTimeout(pause);
  // }, [phase, keywordIndex]);

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
                <FiMenu className="text-white text-2xl cursor-pointer" />
              </motion.div>
              <motion.nav
                className="flex flex-col justify-evenly flex-1 items-center text-white text-xs tracking-wide font-semibold"
                variants={containerVariants}
              >
                {["Facebook", "X", "Instagram", "LinkedIn", "TikTok"].map(
                  (name) => (
                    <motion.a
                      key={name}
                      href="/"
                      className="rotate-[-90deg] hover:text-blue-400 transition"
                      variants={fadeInUp}
                    >
                      {name}
                    </motion.a>
                  )
                )}
              </motion.nav>
            </motion.aside>

            <motion.div
              className="absolute hidden sm:block bottom-10 left-10"
              variants={fadeInUp}
            >
              <button className="bg-black text-white cursor-pointer px-7 py-2 font-semibold shadow hover:bg-blue-700 text-lg transition">
                Journey
              </button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
