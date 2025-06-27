
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { FiMenu } from "react-icons/fi";
import { GrClose } from "react-icons/gr";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import { TiThMenu } from "react-icons/ti";
import { IoMenu } from "react-icons/io5";




const keywords = ["CHANGE", "ACTION", "PURPOSE", "SOLUTION"];
const typingSpeed = 120;

const keywordVariant: Variants = {
  initial: { opacity: 0, filter: "blur(6px)" },
  animate: {
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.4, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    filter: "blur(4px)",
    transition: { duration: 0.3, ease: "easeIn" },
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

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.4, ease: "easeInOut" },
  },
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Hero() {
  const [phase, setPhase] = useState<
    "intro" | "keywords" | "typingFinal" | "done"
  >("intro");
  const [introIndex, setIntroIndex] = useState(0);
  const [keywordIndex, setKeywordIndex] = useState(0);
  const [finalIndex, setFinalIndex] = useState(0);
  const [showDots, setShowDots] = useState(false);
  const [hideDots, setHideDots] = useState(false);
    const [lineCount, setLineCount] = useState(4);
    const [menuOpen, setMenuOpen] = useState(false);
  const [moveIdeaUp, setMoveIdeaUp] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const introText = "IDEA IS";
  const spacedFinal = "IDEA IS CAPITAL".split("");

  const navigate = useNavigate();

  // Responsive vertical lines
    useEffect(() => {
      const updateLineCount = () => setLineCount(window.innerWidth < 640 ? 3 : 4);
      updateLineCount();
      window.addEventListener("resize", updateLineCount);
      return () => window.removeEventListener("resize", updateLineCount);
    }, []);
    
const containerVariant: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.7 },
    },
  };

  const navItems = [
    { name: "OUR PURPOSE", href: "/purpose" },
    { name: "LAST GENERATION", href: "/last-generation" },
    { name: "FILOSOFI", href: "/filosofi" },
    { name: "SOCIOLOJI", href: "/socioloji" },
    { name: "CONNECT", href: "/connect" },
  ];


  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (phase !== "intro") return;
    if (introIndex < introText.length) {
      const timeout = setTimeout(
        () => setIntroIndex((i) => i + 1),
        typingSpeed
      );
      return () => clearTimeout(timeout);
    }

    const dotsTimer = setTimeout(() => setShowDots(true), 1000);
    const hideDotsTimer = setTimeout(() => {
      setHideDots(true);
      setMoveIdeaUp(true);
    }, 4000);
    const nextPhaseTimer = setTimeout(() => setPhase("keywords"), 4500);

    return () => {
      clearTimeout(dotsTimer);
      clearTimeout(hideDotsTimer);
      clearTimeout(nextPhaseTimer);
    };
  }, [phase, introIndex]);

  useEffect(() => {
    if (phase !== "keywords") return;
    if (keywordIndex === 0) {
      const delay = setTimeout(() => setKeywordIndex(1), 500);
      return () => clearTimeout(delay);
    }
    if (keywordIndex < keywords.length) {
      const timeout = setTimeout(() => setKeywordIndex((i) => i + 1), 3000);
      return () => clearTimeout(timeout);
    }
    const next = setTimeout(() => setPhase("typingFinal"), 3000);
    return () => clearTimeout(next);
  }, [phase, keywordIndex]);

  useEffect(() => {
    if (phase !== "typingFinal") return;
    if (finalIndex < spacedFinal.length) {
      const timeout = setTimeout(
        () => setFinalIndex((i) => i + 1),
        typingSpeed
      );
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
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Vertical falling lines */}
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

      <div
        className={`z-10 transition-all duration-700 ease-in-out ${
          isMobile ? "text-center" : "text-left md:-ml-20 md:-mt-8"
        } ${
          phase === "typingFinal" || phase === "done" ? "w-fit" : "sm:w-[330px]"
        }`}
      >
        <motion.div
          animate={
            moveIdeaUp
              ? { y: isMobile ? -40 : -80, x: isMobile ? 0 : -47, scale: 0.75 }
              : { x: 0, y: 0, scale: 1 }
          }
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="h-auto"
        >
          {(phase === "intro" || phase === "keywords") && (
            <motion.h1
              className={`text-5xl sm:text-6xl md:text-7xl font-semibold flex items-center gap-1 hero-txt ${
                isMobile ? "justify-center" : ""
              }`}
            >
              {introText.split("").map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, filter: "blur(6px)" }}
                  animate={
                    i < introIndex ? { opacity: 1, filter: "blur(0px)" } : {}
                  }
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
              {showDots && !hideDots && (
                <div className="flex gap-1 ml-2">
                  {[0, 1, 2].map((i) => (
                    <motion.span
                      key={i}
                      className="text-blue-300"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 * i, duration: 0.3 }}
                    >
                      .
                    </motion.span>
                  ))}
                </div>
              )}
            </motion.h1>
          )}
        </motion.div>

        {phase === "keywords" && (
          <div
            className={`mt-4 relative z-10 ${
              isMobile ? "text-center" : "text-left"
            }`}
          >
            <AnimatePresence mode="wait">
              <motion.h1
                key={keywords[keywordIndex - 1]}
                className="text-6xl md:text-9xl tracking-[4px] font-bold pf text-blue-400"
                variants={keywordVariant}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                {keywords[keywordIndex - 1]}
              </motion.h1>
            </AnimatePresence>
          </div>
        )}

        {(phase === "typingFinal" || phase === "done") && (
          <h1
            className={`text-5xl hero-txt sm:text-6xl md:text-7xl ${
              isMobile ? "text-center" : ""
            }`}
          >
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

        {phase === "done" && (
          <motion.div
            className="mt-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              // className={`flex flex-wrap items-center ${
              //   isMobile ? "justify-center" : "justify-center"
              // } pf text-sm md:text-lg text-gray-200 uppercase gap-4 tracking-[2px]`}
              className="flex items-center justify-center pf text-sm md:text-lg text-gray-200 uppercase gap-4 tracking-[2px]"
              variants={fadeInUp}
            >
              <p>Innovative</p>
              <p>|</p>
              <p>Imaginative</p>
              <p>|</p>
              <p>Creative</p>
            </motion.div>

            <motion.div
              className="absolute hidden sm:block bottom-14 left-10"
              variants={fadeInUp}
            >
              <a
                href="#journey"
                className="px-5 py-[12px] hover:bg-[#0584F2] font-semibold tracking-[2px] text-sm  bg-black uppercase pf text-white  cursor-pointer transition-colors duration-300 m-0 box-border leading-2 touch-manipulation appearance-none transform  opacity-100 scroll-smooth"
              >
                Journey
              </a>
            </motion.div>

            <motion.aside
                          className="absolute hidden sm:flex right-0 top-0 h-screen w-20 bg-black/30 z-50 flex-col justify-between items-center py-6"
                          variants={fadeInUp}
                        >
                          <motion.div className="mb-auto mt-8" variants={fadeInUp}>
                            <IoMenu
                              className="text-white text-3xl rotate-90 cursor-pointer"
                              // onClick={() => alert("Menu Clicked")}
                              onClick={() => setMenuOpen(true)}
                            />
                          </motion.div>
                          <motion.nav
                            className="flex absolute bottom-70 rotate-[-90deg] items-center text-xs tracking-widest font-semibold"
                            variants={containerVariants}
                          >
                            {["Facebook", "Instagram", "LinkedIn", "TikTok", "X"].map(
                              (name) => (
                                <motion.a
                                  key={name}
                                  href="#"
                                  className="uppercase sf px-4 py-2 tracking-[5px] hover:text-blue-400 transition duration-300"
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
                  className="fixed block sm:hidden bottom-0 left-0 w-full bg-[#1c1b1b]  py-3 z-50"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <motion.nav
                    className="container flex  items-center min-h-8 justify-center text-xs  sm:text-base gap-3 sm:gap-4 text-white uppercase "
                    variants={containerVariants}
                  >
                    {[
                      { name: "Facebook", url: "https://facebook.com/ideaiscap" },
                      { name: "Instagram", url: "https://instagram.com/ideaiscap" },
                      {
                        name: "LinkedIn",
                        url: "https://linkedin.com/company/ideaiscap",
                      },
                      { name: "TikTok", url: "https://tiktok.com/@ideaiscap" },
                      { name: "X", url: "https://x.com/ideaiscap" },
                    ].map((item, idx, arr) => (
                      <React.Fragment key={item.name}>
                        <motion.a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-blue-400 tracking-[2px] font-semibold pf transition"
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
                    className="fixed inset-0 bg-white z-50 flex items-center justify-center"
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "100%" }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                  >
                    {/* Close icon */}
                    <div
                      className="absolute top-5 right-5 text-3xl cursor-pointer"
                      onClick={() => setMenuOpen(false)}
                    >
                      <GrClose color="#000000" />
                    </div>
        
                    {/* AnimatePresence for list */}
                    <motion.ul
                      className=" text-xl sm:text-3xl space-y-6 text-center"
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
                            className="hover:text-blue-400 tracking-[3px] text-xl font-semibold text-black pf transition"
                          >
                            {item.name}
                          </Link>
        
                          {item.name === "LAST GENERATION" && (
                            <div className="h-px w-130 mx-auto bg-black/20 mt-9" />
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
