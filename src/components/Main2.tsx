// import { useEffect, useState } from "react";
// import { motion, Variants } from "framer-motion";
// import { IoMenu } from "react-icons/io5";

// const containerVariants: Variants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: { staggerChildren: 0.4, ease: "easeInOut" },
//   },
// };

// const fadeInUp: Variants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
// };

// interface HeroProps {
//   setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
// }

// const HeroAnimation: React.FC<HeroProps> = ({ setMenuOpen }) => {
//   const [phase, setPhase] = useState("typingWhatIs");
//   const [typedText, setTypedText] = useState("");
//   const [showMainText, setShowMainText] = useState(true);
//   const [showSolutionIs, setShowSolutionIs] = useState(false);
//   const [finalText, setFinalText] = useState("");
//   const [finalVisible, setFinalVisible] = useState(false);
//   const [lineCount, setLineCount] = useState(4);
//   const baseText = "WHAT IS ";
//   const dotSequence = ["...", "..", ".", ""];

//   useEffect(() => {
//     const updateLineCount = () => setLineCount(window.innerWidth < 640 ? 3 : 4);
//     updateLineCount();
//     window.addEventListener("resize", updateLineCount);
//     return () => window.removeEventListener("resize", updateLineCount);
//   }, []);

//   useEffect(() => {
//     if (phase === "typingWhatIs") {
//       setTypedText(baseText);
//       setTimeout(() => setPhase("typingDots"), 400);
//     }

//     if (phase === "typingDots") {
//       let i = 0;
//       const interval = setInterval(() => {
//         setTypedText(baseText + ".".repeat(i + 1));
//         i++;
//         if (i === 3) {
//           clearInterval(interval);
//           setTimeout(() => setPhase("deletingDots"), 1000);
//         }
//       }, 400);
//       return () => clearInterval(interval);
//     }

//     if (phase === "deletingDots") {
//       let i = 0;
//       const interval = setInterval(() => {
//         setTypedText(baseText + dotSequence[i]);
//         i++;
//         if (i === dotSequence.length) {
//           clearInterval(interval);
//           setTimeout(() => setPhase("typingSolution"), 1000);
//         }
//       }, 400);
//       return () => clearInterval(interval);
//     }

//     if (phase === "typingSolution") {
//       const solution = "SOLUTION";
//       let i = 0;
//       const interval = setInterval(() => {
//         setTypedText(baseText + solution.slice(0, i + 1));
//         i++;
//         if (i === solution.length) {
//           clearInterval(interval);
//           setTimeout(() => {
//             setTypedText("");
//             setShowMainText(false);
//             setPhase("showSolutionDetails");
//           }, 3000);
//         }
//       }, 50);
//       return () => clearInterval(interval);
//     }

//     if (phase === "showSolutionDetails") {
//       setShowSolutionIs(true);
//       setTimeout(() => setPhase("deleteAll"), 5000);
//     }

//     if (phase === "deleteAll") {
//       setTypedText("");
//       setShowSolutionIs(false);
//       setTimeout(() => setPhase("finalReveal"), 100);
//     }

//     if (phase === "finalReveal") {
//       const final = "IDEA IS CAP";
//       let i = 0;
//       const interval = setInterval(() => {
//         setFinalText(final.slice(0, i + 1));
//         i++;
//         if (i === final.length) {
//           clearInterval(interval);
//           setTimeout(() => setFinalVisible(true), 100);
//         }
//       }, 120);
//       return () => clearInterval(interval);
//     }
//   }, [phase]);

//   return (
//     <section
//       className="relative min-h-screen bg-black text-white flex items-center justify-center px-8 overflow-hidden bg-cover bg-center z-10"
//       style={{ backgroundImage: "url(../../Images/hero.jpg)" }}
//     >
//       <div className="absolute inset-0 bg-black/40 z-10" />

//       {/* Vertical animated lines */}
//       <div className="absolute container inset-0 z-0 pointer-events-none">
//         <div className="relative h-full w-full flex justify-between px-20">
//           {Array.from({ length: lineCount }, (_, idx) => (
//             <motion.div
//               key={idx}
//               className="w-px bg-white opacity-40 h-full"
//               initial={{ y: "-100%" }}
//               animate={{ y: "100%" }}
//               transition={{
//                 repeat: Infinity,
//                 duration: 2.5 + idx * 0.3,
//                 ease: "linear",
//                 delay: idx * 0.5,
//               }}
//             />
//           ))}
//         </div>
//       </div>

//       {/* Typing "WHAT IS SOLUTION" */}
//       {showMainText && (
//         <h1 className="text-5xl z-10 hero-txt sm:text-6xl md:text-7xl font-bold">
//           {[...typedText].map((char, i) => (
//             <motion.span
//               key={i}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.3, delay: i * 0.05 }}
//             >
//               {char === " " ? "\u00A0" : char}
//             </motion.span>
//           ))}
//         </h1>
//       )}

//       {/* SOLUTION = CHANGE + ACTION + PURPOSE */}
//       {showSolutionIs && (
//         <div className="text-center hero-txt mt-4">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-3xl sm:text-4xl md:text-5xl font-bold"
//           >
//             SOLUTION = <span className="text-white">CHANGE</span>
//             <span className="text-blue-500 mx-2">+</span>
//             <span className="text-white">ACTION</span>
//             <span className="text-blue-500 mx-2">+</span>
//             <span className="text-white">PURPOSE</span>
//           </motion.div>
//         </div>
//       )}

//       {/* Final Reveal: IDEA IS CAP + text + menu */}
//       {finalVisible && (
//         <motion.div
//           initial="hidden"
//           animate="visible"
//           variants={{
//             hidden: {},
//             visible: {
//               transition: {
//                 staggerChildren: 0.3,
//               },
//             },
//           }}
//           className="mt-10 max-w-2xl text-white z-10 text-center space-y-4 text-lg md:text-xl"
//         >
//           <motion.h1 className="text-5xl hero-txt text-white  sm:text-6xl md:text-7xl">
//             {[...finalText].map((char, i) => (
//               <motion.span
//                 key={"final-" + i}
//                 initial={{ opacity: 0, filter: "blur(5px)" }}
//                 animate={{ opacity: 1, filter: "blur(0px)" }}
//                 transition={{ duration: 0.4, delay: i * 0.1 }}
//               >
//                 {char === " " ? "\u00A0" : char}
//               </motion.span>
//             ))}
//           </motion.h1>

//           <motion.div
//             className="flex items-center justify-center pf text-[16px] md:text-lg text-gray-200 uppercase gap-2 sm:gap-4 md:tracking-[4px] tracking-[2px] mt-4 z-20  md:mt-0 text-center"
//             variants={fadeInUp}
//           >
//             <p>Innovative</p>
//             <p>|</p>
//             <p>Imaginative</p>
//             <p>|</p>
//             <p>Creative</p>
//           </motion.div>

//           {/* Mobile Menu Button */}
//           <motion.div
//             className="absolute sm:hidden top-7 right-7 rotate-90 z-20"
//             initial={{ opacity: 0, y: -10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, ease: "easeOut" }}
//           >
//             <IoMenu
//               className="text-white text-3xl cursor-pointer"
//               onClick={() => setMenuOpen(true)}
//             />
//           </motion.div>

//           {/* Side Nav */}
//           <motion.aside
//             className="absolute hidden sm:flex right-0 top-0 h-screen w-20 bg-black/30 z-10 flex-col justify-between items-center py-6"
//             variants={fadeInUp}
//           >
//             <motion.div className="mb-auto mt-8" variants={fadeInUp}>
//               <IoMenu
//                 className="text-white text-3xl flex-1 cursor-pointer rotate-90"
//                 onClick={() => setMenuOpen(true)}
//               />
//             </motion.div>

//             <motion.nav
//               className="flex absolute bottom-70 justify-evenly flex-1 flex-end rotate-[-90deg] items-center text-xs tracking-widest font-semibold"
//               variants={containerVariants}
//             >
//               {["Facebook", "Instagram", "LinkedIn", "TikTok", "X"].map(
//                 (name) => (
//                   <motion.a
//                     key={name}
//                     href={`https://${name.toLowerCase()}.com/ideaiscapital`}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="uppercase sf px-4 py-2 tracking-[5px] h-fit hover:text-blue-400 transition duration-300"
//                     variants={fadeInUp}
//                   >
//                     {name}
//                   </motion.a>
//                 )
//               )}
//             </motion.nav>
//           </motion.aside>
//         </motion.div>
//       )}
//     </section>
//   );
// };

// export default HeroAnimation;



// // Hero.tsx
// import { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// // Blur letter animation from your reference
// const splitText = (text: string) =>
//   [...text].map((char, i) => (
//     <motion.span
//       key={i + char}
//       initial={{ opacity: 0, filter: "blur(5px)" }}
//       animate={{ opacity: 1, filter: "blur(0px)" }}
//       transition={{ duration: 0.4, delay: i * 0.1 }}
//       className="inline-block"
//     >
//       {char === " " ? "\u00A0" : char}
//     </motion.span>
//   ));

// const Hero = () => {
//   const [step, setStep] = useState(0);
//   const [dots, setDots] = useState("");

//   // Step 0: Type dots
//   useEffect(() => {
//     if (step === 0 && dots.length < 3) {
//       const timeout = setTimeout(() => {
//         setDots((prev) => prev + ".");
//       }, 500);
//       return () => clearTimeout(timeout);
//     } else if (step === 0 && dots.length === 3) {
//       setTimeout(() => setStep(1), 1000);
//     }
//   }, [step, dots]);

//   // Step 1: Delete dots
//   useEffect(() => {
//     if (step === 1 && dots.length > 0) {
//       const timeout = setTimeout(() => {
//         setDots((prev) => prev.slice(0, -1));
//       }, 300);
//       return () => clearTimeout(timeout);
//     } else if (step === 1 && dots.length === 0) {
//       setTimeout(() => setStep(2), 500);
//     }
//   }, [step, dots]);

//   // Step progression
//   useEffect(() => {
//     if (step === 2) setTimeout(() => setStep(3), 3000);
//     if (step === 3) setTimeout(() => setStep(4), 1000);
//     if (step === 4) setTimeout(() => setStep(5), 500);
//     if (step === 5) setTimeout(() => setStep(6), 3000);
//     if (step === 6) setTimeout(() => setStep(7), 3000);
//     if (step === 7) setTimeout(() => setStep(8), 3000);
//   }, [step]);

//   return (
//     <section className="min-h-screen flex items-center justify-center bg-black text-white p-4">
//       <div className="text-4xl md:text-6xl font-bold text-center space-y-10 font-mono">
//         {/* WHAT IS ... */}
//         {(step <= 2) && (
//           <motion.div
//             key="question"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             className="flex justify-center flex-wrap"
//           >
//             <motion.h1 className="text-white flex flex-wrap justify-center">
//               {splitText("WHAT IS " + dots + (step === 2 ? "SOLUTION?" : ""))}
//             </motion.h1>
//           </motion.div>
//         )}

//         {/* Equation */}
//         {step >= 5 && step < 8 && (
//           <motion.div
//             key="equation"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="flex justify-center flex-wrap gap-4"
//           >
//             <motion.h1 className="text-yellow-400 flex flex-wrap justify-center">
//               {splitText(step >= 6 ? "IDEA" : "SOLUTION")}
//             </motion.h1>

//             <motion.h1>=</motion.h1>

//             <motion.h1 className="flex flex-wrap justify-center">
//               {splitText(
//                 step >= 7 ? "C + A + P" : "CHANGE + ACTION + PURPOSE"
//               )}
//             </motion.h1>
//           </motion.div>
//         )}

//         {/* Final Reveal */}
//         {step === 8 && (
//           <motion.div
//             key="final"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 1 }}
//             className="text-yellow-400"
//           >
//             <motion.h1 className="text-white flex flex-wrap justify-center">
//               {splitText("IDEA IS CAP")}
//             </motion.h1>
//           </motion.div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default Hero;

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const HeroAnimation = () => {
  const [phase, setPhase] = useState("whatIsDots");
  const [whatIsText, setWhatIsText] = useState("WHAT IS");
  const [showQuestion, setShowQuestion] = useState(true);
  const [equationParts, setEquationParts] = useState<string[]>([]);
  const [showFinalReveal, setShowFinalReveal] = useState(false);
  const [finalText, setFinalText] = useState("IDEA IS ");
  const [capText, setCapText] = useState<string[]>(["C", "A", "P"]);

  useEffect(() => {
    if (phase === "whatIsDots") {
      const dots = ["WHAT IS .", "WHAT IS ..", "WHAT IS ..."];
      let i = 0;
      const interval = setInterval(() => {
        setWhatIsText(dots[i]);
        i++;
        if (i === dots.length) {
          clearInterval(interval);
          setTimeout(() => setPhase("removeDots"), 3000);
        }
      }, 500);
    }

    if (phase === "removeDots") {
      const steps = ["WHAT IS ..", "WHAT IS .", "WHAT IS"];
      let i = 0;
      const interval = setInterval(() => {
        setWhatIsText(steps[i]);
        i++;
        if (i === steps.length) {
          clearInterval(interval);
          setTimeout(() => setPhase("typeSolution"), 500);
        }
      }, 200);
    }

    if (phase === "typeSolution") {
      const solution = " SOLUTION?";
      let i = 0;
      const interval = setInterval(() => {
        setWhatIsText((prev) => "WHAT IS" + solution.slice(0, i + 1));
        i++;
        if (i === solution.length) {
          clearInterval(interval);
          setTimeout(() => {
            setShowQuestion(false); // Hide question line after 3s
            setPhase("showEquation");
          }, 3000);
        }
      }, 100);
    }

    if (phase === "showEquation") {
      setEquationParts([
        "SOLUTION",
        "=",
        "CHANGE",
        "+",
        "ACTION",
        "+",
        "PURPOSE",
      ]);
      setTimeout(() => setPhase("replaceSolution"), 3000);
    }

    if (phase === "replaceSolution") {
      setEquationParts([
        "IDEA",
        "=",
        "CHANGE",
        "+",
        "ACTION",
        "+",
        "PURPOSE",
      ]);
      setTimeout(() => setPhase("startCap"), 3000);
    }

    if (phase === "startCap") {
      const steps = [
        ["IDEA", "=", <span>C</span>, "HANGE", "+", "ACTION", "+", "PURPOSE"],
        ["IDEA", "=", "C", "+", <span>A</span>, "CTION", "+", "PURPOSE"],
        ["IDEA", "=", "C", "+", "A", "+", <span>P</span>, "URPOSE"],
        ["IDEA", "=", "C", "+", "A", "+", "P"],
      ];
      let i = 0;
      const interval = setInterval(() => {
        if (i < steps.length) {
          const current = steps[i];
          setEquationParts(current.map((el) => (typeof el === "string" ? el : el.props.children)));
          i++;
        } else {
          clearInterval(interval);
          setTimeout(() => {
            setEquationParts([]);
            setPhase("revealFinal");
          }, 2000);
        }
      }, 1000);
    }

    if (phase === "revealFinal") {
      setFinalText("IDEA IS ");
      setTimeout(() => setShowFinalReveal(true), 1000);
    }
  }, [phase]);

  const renderBlurryText = (text: string, keyPrefix = "") =>
    [...text].map((char, i) => (
      <motion.span
        key={keyPrefix + i}
        initial={{ opacity: 0, filter: "blur(5px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.4, delay: i * 0.08 }}
      >
        {char === " " ? "\u00A0" : char}
      </motion.span>
    ));

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-4 text-center">
      {showQuestion && (
        <motion.h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-8">
          {renderBlurryText(whatIsText, "question")}
        </motion.h1>
      )}

      {equationParts.length > 0 && (
        <motion.h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mt-4">
          {equationParts.map((part, i) => (
            <motion.span
              key={"eq" + i}
              initial={{ opacity: 0, filter: "blur(5px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
              className="inline-block mx-1"
            >
              {part}
            </motion.span>
          ))}
        </motion.h2>
      )}

      {showFinalReveal && (
        <motion.h1
          className="mt-10 text-5xl sm:text-6xl md:text-7xl font-bold flex gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {renderBlurryText(finalText, "final")}
          {capText.map((char, idx) => (
            <motion.span
              key={"cap-" + idx}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.4 }}
              className="text-blue-500"
            >
              {char}
            </motion.span>
          ))}
        </motion.h1>
      )}
    </section>
  );
};

export default HeroAnimation;
