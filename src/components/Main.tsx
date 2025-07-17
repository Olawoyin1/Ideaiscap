
import { useEffect, useState } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { IoMenu } from "react-icons/io5";

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
interface HeroProps {
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const HeroAnimation: React.FC<HeroProps> = ({ setMenuOpen }) => {
  const [phase, setPhase] = useState("typingIdea");
  const [typedText, setTypedText] = useState("");
  const [solutionText, setSolutionText] = useState("");
  const [questionVisible, setQuestionVisible] = useState(false);
  const [showSolutionIs, setShowSolutionIs] = useState(false);
  const [capWords, setCapWords] = useState<string[]>([]);
  const [finalVisible, setFinalVisible] = useState(false);
  const [finalText, setFinalText] = useState("");
  const [showMainText, setShowMainText] = useState(true);
  const [lineCount, setLineCount] = useState(4);
  const baseText = "IDEA IS ";
  const dotSequence = ["...", "..", ".", ""];
  

  useEffect(() => {
    const updateLineCount = () => setLineCount(window.innerWidth < 640 ? 3 : 4);
    updateLineCount();
    window.addEventListener("resize", updateLineCount);
    return () => window.removeEventListener("resize", updateLineCount);
  }, []);

  useEffect(() => {
    if (phase === "typingIdea") {
      setTypedText(baseText);
      setTimeout(() => setPhase("typingDots"), 400);
    }

    if (phase === "typingDots") {
      let i = 0;
      const interval = setInterval(() => {
        setTypedText(baseText + ".".repeat(i + 1));
        i++;
        if (i === 3) {
          clearInterval(interval);
          setTimeout(() => setPhase("deletingDots"), 1000);
        }
      }, 400);
      return () => clearInterval(interval);
    }

    if (phase === "deletingDots") {
      let i = 0;
      const interval = setInterval(() => {
        setTypedText(baseText + dotSequence[i]);
        i++;
        if (i === dotSequence.length) {
          clearInterval(interval);
          setTimeout(() => setPhase("typingSolution"), 1000);
        }
      }, 400);
      return () => clearInterval(interval);
    }

    if (phase === "typingSolution") {
      const solution = "SOLUTION";
      let i = 0;
      const interval = setInterval(() => {
        setSolutionText(solution.slice(0, i + 1));
        i++;
        if (i === solution.length) {
          clearInterval(interval);
          setTimeout(() => {
            setTypedText("");
            setSolutionText("");
            setShowMainText(false); // remove IDEA IS SOLUTION from DOM completely
            setPhase("showQuestion");
          }, 3000);
        }
      }, 50);
      return () => clearInterval(interval);
    }

    if (phase === "showQuestion") {
      setQuestionVisible(true);
      setTimeout(() => setPhase("hideQuestion"), 3000);
    }

    if (phase === "hideQuestion") {
      setQuestionVisible(false);
      setTimeout(() => setPhase("showSolutionDetails"), 1000);
    }

    if (phase === "showSolutionDetails") {
      setShowSolutionIs(true);
      const words = ["CHANGE", "ACTION", "PURPOSE"];
      words.forEach((word, index) => {
        setTimeout(() => {
          setCapWords((prev) => [...prev, word]);
        }, 1000 * index);
      });
      setTimeout(() => setPhase("deleteAll"), 5000);
    }

    if (phase === "deleteAll") {
      setTypedText("");
      setSolutionText("");
      setShowSolutionIs(false);
      setCapWords([]);
      setTimeout(() => setPhase("finalReveal"), 100);
    }

    if (phase === "finalReveal") {
      const final = "IDEA IS CAP";
      let i = 0;
      const interval = setInterval(() => {
        setFinalText(final.slice(0, i + 1));
        i++;
        if (i === final.length) {
          clearInterval(interval);
          setTimeout(() => setFinalVisible(true), 100);
        }
      }, 120);
      return () => clearInterval(interval);
    }
  }, [phase]);

  return (
    <section
          className="relative min-h-screen bg-black text-white flex items-center justify-center px-8 overflow-hidden bg-cover bg-center z-10"
          style={{ backgroundImage: "url(../../Images/hero.jpg)" }}
        >
          <div className="absolute inset-0 bg-black/40 z-10" />
    
          <div className="absolute container inset-0 z-0 pointer-events-none">
            <div className="relative h-full w-full flex justify-between px-20">
              {Array.from({ length: lineCount }, (_, idx) => (
                <motion.div
                  key={idx}
                  className="w-px bg-white opacity-40 h-full"
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

      {/* MAIN TYPING LINE */}
      {showMainText && (
        <h1 className="text-5xl z-10 hero-txt sm:text-6xl md:text-7xl font-bold">
          {[...(typedText + solutionText)].map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </h1>
      )}

      {/* QUESTION: WHAT IS SOLUTION */}
      <AnimatePresence>
        {questionVisible && (
          <motion.div
            key="question"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl z-10 hero-txt sm:text-6xl md:text-7xl font-bold"
          >
            WHAT IS SOLUTION?
          </motion.div>
        )}
      </AnimatePresence>

      {/* SOLUTION IS + CHANGE/ACTION/PURPOSE */}
      {showSolutionIs && (
        <div className="text-center hero-txt space-y-4 mt-4 ">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl z-10 hero-txt sm:text-5xl font-bold"
          >
            SOLUTION IS
          </motion.div>

          <div className="flex flex-col md:flex-row gap-2 items-center justify-center text-2xl md:text-3xl">
            {capWords.map((word, index) => (
              <motion.div
                key={word}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex gap-1 items-end"
              >
                <span className="text-white  text-5xl z-10 hero-txt sm:text-6xl md:text-7xl font-bold">{word[0]}</span>
                <span className="text-blue-500 text-2xl">{word.slice(1)}</span>
                {index < capWords.length - 1 && (
                  <span className="text-white mx-2 md:text-5xl">+</span>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* FINAL PHRASE & NAVIGATION */}
      {finalVisible && (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.3,
              },
            },
          }}
          className="mt-10 max-w-2xl text-white z-10 text-center space-y-4 text-lg md:text-xl"
        >
          <motion.h1 className="text-5xl hero-txt text-white  sm:text-6xl md:text-7xl">
            {[...finalText].map((char, i) => (
              <motion.span
                key={"final-" + i}
                initial={{ opacity: 0, filter: "blur(5px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h1>

          <motion.div
            className="flex items-center justify-center pf text-[16px] md:text-lg text-gray-200 uppercase gap-2 sm:gap-4 md:tracking-[4px] tracking-[2px] mt-4 z-20  md:mt-0 text-center"
            variants={fadeInUp}
          >
            <p>Innovative</p>
            <p>|</p>
            <p>Imaginative</p>
            <p>|</p>
            <p>Creative</p>
          </motion.div>


          <motion.div
                    className="absolute sm:hidden top-7 right-7 rotate-90 z-20"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    <IoMenu
                      className="text-white text-3xl cursor-pointer"
                      onClick={() => setMenuOpen(true)}
                    />
                  </motion.div>

          {/* Side Nav */}
          <motion.aside
            className="absolute hidden sm:flex right-0 top-0 h-screen w-20 bg-black/30 z-10 flex-col justify-between items-center py-6"
            variants={fadeInUp}
          >
            <motion.div className="mb-auto mt-8" variants={fadeInUp}>
              <IoMenu
                className="text-white text-3xl flex-1 cursor-pointer rotate-90"
                onClick={() => setMenuOpen(true)}
              />
            </motion.div>

            <motion.nav
              className="flex absolute bottom-70 justify-evenly flex-1 flex-end rotate-[-90deg] items-center text-xs tracking-widest font-semibold"
              variants={containerVariants}
            >
              {["Facebook", "Instagram", "LinkedIn", "TikTok", "X"].map(
                (name) => (
                  <motion.a
                    key={name}
                    href={`https://${name.toLowerCase()}.com/ideaiscapital`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="uppercase sf px-4 py-2 tracking-[5px] h-fit hover:text-blue-400 transition duration-300"
                    variants={fadeInUp}
                  >
                    {name}
                  </motion.a>
                )
              )}
            </motion.nav>
          </motion.aside>
        </motion.div>
      )}
    </section>
  );
};

export default HeroAnimation;
