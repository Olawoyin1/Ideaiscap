

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { FiMenu } from "react-icons/fi";
import { GrClose } from "react-icons/gr";
import { Link, useNavigate } from "react-router-dom";
import { IoMenu } from "react-icons/io5";

const typingSpeed = 100;


const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3, delayChildren: 0.6 },
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

const Hero = () => {



  const [phase, setPhase] = useState<
    | "typingIdea"
    | "deletingIdea"
    | "typingSolution1"
    | "typingSolution2"
    | "typingSolution3"
    | "fadingSolution"
    | "typingFinal"
    | "finalReveal"
  >("typingIdea");
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [solutionIndex, setSolutionIndex] = useState(0);
  const [finalIndex, setFinalIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [lineCount, setLineCount] = useState(4);
  
  const finalText = "IDEA IS CAP".split("");
  const fullPhrase1 = "IDEA IS SOLUTION";
  const solutionPart1 = "SOLUTION IS CHANGE";
  const solutionPart2 = " + ACTION";
  const solutionPart3 = " + PURPOSE";
  const navigate = useNavigate()

  const navItems = [
    { name: "LAST GENERATION", href: "/last-generation" },
    { name: "OUR PURPOSE", href: "/purpose" },
    { name: "JOURNEY", href: "/journey" },
    { name: "FILOSOFI", href: "/filosofi" },
    { name: "SOCIOLOJI", href: "/socioloji" },
    { name: "CONNECT", href: "/connect" },
  ];




    const itemVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", bounce: 0.4 },
  },
};

const containerVariant: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3, delayChildren: 0.7 },
  },
};

  useEffect(() => {
    const updateLineCount = () =>
      setLineCount(window.innerWidth < 640 ? 2 : 4);
    updateLineCount();
    window.addEventListener("resize", updateLineCount);
    return () => window.removeEventListener("resize", updateLineCount);
  }, []);

  useEffect(() => {
    if (phase !== "typingIdea") return;
    if (index < fullPhrase1.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + fullPhrase1[index]);
        setIndex((i) => i + 1);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => setPhase("deletingIdea"), 3000);
      return () => clearTimeout(timeout);
    }
  }, [phase, index]);

  useEffect(() => {
    if (phase !== "deletingIdea") return;
    if (text.length > 0) {
      const timeout = setTimeout(() => {
        setText((prev) => prev.slice(0, -1));
      }, 50);
      return () => clearTimeout(timeout);
    } else {
      setSolutionIndex(0);
      setPhase("typingSolution1");
    }
  }, [phase, text]);

  useEffect(() => {
    if (phase !== "typingSolution1") return;
    if (solutionIndex < solutionPart1.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + solutionPart1[solutionIndex]);
        setSolutionIndex((i) => i + 1);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setSolutionIndex(0);
        setPhase("typingSolution2");
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [phase, solutionIndex]);

  useEffect(() => {
    if (phase !== "typingSolution2") return;
    if (solutionIndex < solutionPart2.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + solutionPart2[solutionIndex]);
        setSolutionIndex((i) => i + 1);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setSolutionIndex(0);
        setPhase("typingSolution3");
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [phase, solutionIndex]);

  useEffect(() => {
    if (phase !== "typingSolution3") return;
    if (solutionIndex < solutionPart3.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + solutionPart3[solutionIndex]);
        setSolutionIndex((i) => i + 1);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => setPhase("fadingSolution"), 3000);
      return () => clearTimeout(timeout);
    }
  }, [phase, solutionIndex]);

  useEffect(() => {
    if (phase !== "fadingSolution") return;
    const timeout = setTimeout(() => {
      setText("");
      setPhase("typingFinal");
    }, 1000);
    return () => clearTimeout(timeout);
  }, [phase]);

  useEffect(() => {
    if (phase !== "typingFinal") return;
    if (finalIndex < finalText.length) {
      const timeout = setTimeout(() => {
        setFinalIndex((i) => i + 1);
      }, 150);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => setPhase("finalReveal"), 800);
      return () => clearTimeout(timeout);
    }
  }, [phase, finalIndex]);

  return (
    <section
      className="relative min-h-screen bg-black text-white flex items-center justify-center px-4 sm:px-8  overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url(../../Images/hero.jpg)" }}
    >
      <div className="absolute inset-0 bg-black/40 z-10" />

      <div className="absolute container inset-0 z-0 pointer-events-none">
        <div className="relative h-full w-full flex justify-between px-4 sm:px-20">
          {Array.from({ length: lineCount }, (_, idx) => (
            <motion.div
              key={idx}
              className="w-px bg-white opacity-30 h-full"
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

      <div className="text-center sm:-ml-20 sm:-mt-8 w-full w-full z-10 min-h-[120px] px-1 sm:px-0">
        {(phase !== "typingFinal" && phase !== "finalReveal") && (
          <motion.h1
            key={text}
            className="text-3xl sm:text-5xl md:text-6xl hero-txt leading-tight"
            initial={{ opacity: 0.5 }}
            animate={{ opacity: phase === "fadingSolution" ? 0 : 1 }}
            transition={{ duration: 0.8 }}
          >
            {text}
            {phase !== "fadingSolution" && (
              <span className="inline-block w-[1px] h-[1em] bg-white ml-1 animate-pulse" />
            )}
          </motion.h1>
        )}

        {(phase === "typingFinal" || phase === "finalReveal") && (
          <h1 className="text-4xl sm:text-5xl md:text-7xl hero-txt leading-snug">
            {finalText.slice(0, finalIndex).map((char, i) => (
              <motion.span
                key={i}
                className="inline-block"
                initial={{ opacity: 0, filter: "blur(6px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 0.4 }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </h1>
        )}

        {phase === "finalReveal" && (
          <motion.div
            className="mt-4 sm:-mt-1 md:-mt-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="flex flex-wrap items-center justify-center text-sm sm:text-lg text-gray-300 uppercase gap-2 sm:gap-4 tracking-wide mt-4 text-center"
              variants={fadeInUp}
            >
              <p>Innovative</p>
              <p>|</p>
              <p>Imaginative</p>
              <p>|</p>
              <p>Creative</p>
            </motion.div>



              {/* Side Nav */}
            <motion.aside
              className="absolute hidden sm:flex right-0 top-0 h-screen w-20 bg-black/30 z-50 flex-col justify-between items-center py-6"
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
      </div>

      {phase === "finalReveal" && (
        <motion.div
          className="absolute sm:hidden top-6 right-6 rotate-90 z-50"
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



        {phase === "finalReveal" && (
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
      
      
 


      
      {/* Slide-up menu */}
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
              className="w-full text-xl sm:text-3xl space-y-6 text-center"
              variants={containerVariant}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              {navItems.map((item, index) => (
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
                    className={`hover:text-blue-400 tracking-[2px]  text-black transition ${
        index === 0 ? "text-2xl md:text-4xl" : "text-xl font-light" } `}
                  >
                    {item.name}
                  </Link>

                  {item.name === "LAST GENERATION" && (
                    <div className="h-px w-[80%]  md:w-130 mx-auto bg-black/20 mt-9" />
                  )}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero;
