// // import React, { useEffect, useState } from "react";
// // import { motion, Variants } from "framer-motion";
// // import { FiMenu } from "react-icons/fi";
// // import { IoMenu } from "react-icons/io5";

// // const typingSpeed = 120;

// // const containerVariants: Variants = {
// //   hidden: { opacity: 0 },
// //   visible: {
// //     opacity: 1,
// //     transition: { staggerChildren: 0.4, ease: "easeInOut" },
// //   },
// // };

// // const fadeInUp: Variants = {
// //   hidden: { opacity: 0, y: 20 },
// //   visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
// // };

// // interface HeroProps {
// //   setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
// // }

// // const Hero: React.FC<HeroProps> = ({ setMenuOpen }) => {
// //   const [phase, setPhase] = useState<"solution" | "capPurpose" | "typingFinal" | "done">("solution");
// //   const [finalIndex, setFinalIndex] = useState(0);
// //   const [lineCount, setLineCount] = useState(4);

// //   const spacedFinal = "IDEA IS CAP".split("");

// //   useEffect(() => {
// //     const updateLineCount = () => setLineCount(window.innerWidth < 640 ? 3 : 4);
// //     updateLineCount();
// //     window.addEventListener("resize", updateLineCount);
// //     return () => window.removeEventListener("resize", updateLineCount);
// //   }, []);

// //   useEffect(() => {
// //     if (phase !== "typingFinal") return;
// //     if (finalIndex < spacedFinal.length) {
// //       const timeout = setTimeout(() => {
// //         setFinalIndex((i) => i + 1);
// //       }, typingSpeed);
// //       return () => clearTimeout(timeout);
// //     }
// //     const doneTimeout = setTimeout(() => setPhase("done"), 600);
// //     return () => clearTimeout(doneTimeout);
// //   }, [phase, finalIndex]);

// //   return (
// //     <section
// //       className="relative min-h-screen bg-black text-white flex items-center justify-center px-8 overflow-hidden bg-cover bg-center"
// //       style={{ backgroundImage: "url(../../Images/hero.jpg)" }}
// //     >
// //       <div className="absolute inset-0 bg-black/40 z-10" />

// //       <div className="absolute container inset-0 z-0 pointer-events-none">
// //         <div className="relative h-full w-full flex justify-between px-20">
// //           {Array.from({ length: lineCount }, (_, idx) => (
// //             <motion.div
// //               key={idx}
// //               className="w-px bg-white opacity-40 h-full"
// //               initial={{ y: "-100%" }}
// //               animate={{ y: "100%" }}
// //               transition={{
// //                 repeat: Infinity,
// //                 duration: 2.5 + idx * 0.3,
// //                 ease: "linear",
// //                 delay: idx * 0.5,
// //               }}
// //             />
// //           ))}
// //         </div>
// //       </div>

// //       <div className="text-center md:-ml-20 md:-mt-8 max-w-2xl z-10">
// //         {phase === "solution" && (
// //           <motion.h1
// //             className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
// //             initial={{ opacity: 0, y: 20 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.8 }}
// //             onAnimationComplete={() => {
// //               setTimeout(() => setPhase("capPurpose"), 1500);
// //             }}
// //           >
// //             SOLUTION IS
// //           </motion.h1>
// //         )}

// //         {phase === "capPurpose" && (
// //           <motion.div
// //             className="text-3xl sm:text-4xl md:text-5xl font-semibold flex justify-center gap-6 text-white"
// //             initial="hidden"
// //             animate="visible"
// //             variants={containerVariants}
// //             onAnimationComplete={() => {
// //               setTimeout(() => setPhase("typingFinal"), 2000);
// //             }}
// //           >
// //             {["CHANGE", "ACTION", "PURPOSE"].map((word, idx) => (
// //               <motion.span
// //                 key={word}
// //                 className="relative"
// //                 variants={fadeInUp}
// //               >
// //                 <span className="text-white">{word[0]}</span>
// //                 <span className="text-blue-500">{word.slice(1)}</span>
// //                 {idx < 2 && <span className="mx-2 text-gray-400 font-light">+</span>}
// //               </motion.span>
// //             ))}
// //           </motion.div>
// //         )}

// //         {(phase === "typingFinal" || phase === "done") && (
// //           <h1 className="text-5xl hero-txt sm:text-6xl md:text-7xl mt-6">
// //             {spacedFinal.slice(0, finalIndex).map((char, i) => (
// //               <motion.span
// //                 key={i}
// //                 className="inline-block"
// //                 initial={{ opacity: 0, filter: "blur(6px)" }}
// //                 animate={{ opacity: 1, filter: "blur(0px)" }}
// //                 transition={{ duration: 1 }}
// //               >
// //                 {char === " " ? "\u00A0" : char}
// //               </motion.span>
// //             ))}
// //           </h1>
// //         )}

// //         {phase === "done" && (
// //           <motion.div
// //             className="-mt-1 md:mt-6"
// //             variants={containerVariants}
// //             initial="hidden"
// //             animate="visible"
// //           >
// //             <motion.div
// //               className="flex items-center justify-center pf text-[16px] md:text-lg text-gray-200 uppercase gap-2 sm:gap-4 md:tracking-[4px] tracking-[2px] mt-4  md:mt-0 text-center"
// //               variants={fadeInUp}
// //             >
// //               <p>Innovative</p>
// //               <p>|</p>
// //               <p>Imaginative</p>
// //               <p>|</p>
// //               <p>Creative</p>
// //             </motion.div>

// //             <motion.aside
// //               className="absolute hidden sm:flex right-0 top-0 h-screen w-20 bg-black/30 z-50 flex-col justify-between items-center py-6"
// //               variants={fadeInUp}
// //             >
// //               <motion.div className="mb-auto mt-8" variants={fadeInUp}>
// //                 <IoMenu
// //                   className="text-white text-3xl flex-1 cursor-pointer rotate-90"
// //                   onClick={() => setMenuOpen(true)}
// //                 />
// //               </motion.div>

// //               <motion.nav
// //                 className="flex absolute bottom-70 justify-evenly flex-1 flex-end rotate-[-90deg] items-center text-xs tracking-widest font-semibold"
// //                 variants={containerVariants}
// //               >
// //                 {["Facebook", "Instagram", "LinkedIn", "TikTok", "X"].map(
// //                   (name) => (
// //                     <motion.a
// //                       key={name}
// //                       href={`https://${name.toLowerCase()}.com/ideaiscapital`}
// //                       target="_blank"
// //                       rel="noopener noreferrer"
// //                       className="uppercase sf px-4 py-2 tracking-[5px] h-fit hover:text-blue-400 transition duration-300"
// //                       variants={fadeInUp}
// //                     >
// //                       {name}
// //                     </motion.a>
// //                   )
// //                 )}
// //               </motion.nav>
// //             </motion.aside>

// //             <motion.div
// //               className="absolute hidden  bottom-14 left-10"
// //               variants={fadeInUp}
// //             >
// //               <a
// //                 href="#journey"
// //                 className="px-5 py-[12px] hover:bg-[#0584F2] font-semibold tracking-[2px] text-sm bg-black uppercase pf text-white cursor-pointer transition-colors duration-300"
// //               >
// //                 Journey
// //               </a>
// //             </motion.div>
// //           </motion.div>
// //         )}
// //       </div>

// //       {phase === "done" && (
// //         <motion.div
// //           className="absolute sm:hidden top-7 right-7 rotate-90 z-20"
// //           initial={{ opacity: 0, y: -10 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.6, ease: "easeOut" }}
// //         >
// //           <FiMenu
// //             className="text-white text-3xl cursor-pointer"
// //             onClick={() => setMenuOpen(true)}
// //           />
// //         </motion.div>
// //       )}

// //       {phase === "done" && (
// //         <motion.div
// //           className="fixed block sm:hidden bottom-0 left-0 w-full bg-[#1c1b1b] py-3 z-50"
// //           initial={{ opacity: 0, y: 20 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.6, ease: "easeOut" }}
// //         >
// //           <motion.nav
// //             className="container flex items-center min-h-8 justify-center text-xs sm:text-base gap-3 sm:gap-4 text-white uppercase"
// //             variants={containerVariants}
// //           >
// //             {["Facebook", "Instagram", "LinkedIn", "TikTok", "X"].map(
// //               (item, idx, arr) => (
// //                 <React.Fragment key={item}>
// //                   <motion.a
// //                     href={`https://${item.toLowerCase()}.com/ideaiscapital`}
// //                     target="_blank"
// //                     rel="noopener noreferrer"
// //                     className="hover:text-blue-400 tracking-[2px] font-semibold pf transition"
// //                     variants={fadeInUp}
// //                   >
// //                     {item}
// //                   </motion.a>
// //                   {idx < arr.length - 1 && (
// //                     <motion.span className="text-white/50" variants={fadeInUp}>
// //                       |
// //                     </motion.span>
// //                   )}
// //                 </React.Fragment>
// //               )
// //             )}
// //           </motion.nav>
// //         </motion.div>
// //       )}
// //     </section>
// //   );
// // };

// // export default Hero;


// import React, { useEffect, useState } from "react";
// import { motion, Variants } from "framer-motion";
// import { FiMenu } from "react-icons/fi";
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

// const Hero: React.FC<HeroProps> = ({ setMenuOpen }) => {
//   const [phase, setPhase] = useState<
//     | "ideaIs"
//     | "ideaSolution"
//     | "whatIsSolution"
//     | "solutionBlock"
//     | "typingFinal"
//     | "done"
//   >("ideaIs");

//   const [typedText, setTypedText] = useState("");
//   const [index, setIndex] = useState(0);
//   const [deleting, setDeleting] = useState(false);
//   const typingSpeed = 100;
//   const pauseDuration = 3000;

//   const fullTextMap: Record<string, string> = {
//     ideaIs: "IDEA IS ...",
//     ideaSolution: "IDEA IS SOLUTION",
//     typingFinal: "IDEA IS CAP",
//   };

//   useEffect(() => {
//     if (["solutionBlock", "whatIsSolution", "typingFinal", "done"].includes(phase)) return;
//     const fullText = fullTextMap[phase];

//     if (!deleting && index < fullText.length) {
//       const timeout = setTimeout(() => {
//         setTypedText(fullText.slice(0, index + 1));
//         setIndex(index + 1);
//       }, typingSpeed);
//       return () => clearTimeout(timeout);
//     }

//     if (!deleting && index === fullText.length) {
//       if (phase === "ideaIs") {
//         setTimeout(() => setDeleting(true), pauseDuration);
//       } else if (phase === "ideaSolution") {
//         setTimeout(() => setDeleting(true), pauseDuration);
//       }
//     }

//     if (deleting) {
//       const deleteTimeout = setTimeout(() => {
//         setTypedText((prev) => prev.slice(0, -1));
//         setIndex((i) => i - 1);
//         if (index <= (phase === "ideaIs" ? 8 : 0)) {
//           setDeleting(false);
//           setIndex(0);
//           if (phase === "ideaIs") setPhase("ideaSolution");
//           else if (phase === "ideaSolution") setPhase("whatIsSolution");
//         }
//       }, 60);
//       return () => clearTimeout(deleteTimeout);
//     }
//   }, [index, deleting, phase]);

//   // Blurry typing effect for final IDEA IS CAP
//   const [finalIndex, setFinalIndex] = useState(0);
//   useEffect(() => {
//     if (phase !== "typingFinal") return;
//     if (finalIndex < fullTextMap["typingFinal"].length) {
//       const timeout = setTimeout(() => {
//         setFinalIndex((i) => i + 1);
//       }, 120);
//       return () => clearTimeout(timeout);
//     }
//     const doneTimeout = setTimeout(() => setPhase("done"), pauseDuration);
//     return () => clearTimeout(doneTimeout);
//   }, [phase, finalIndex]);

//   return (
//     <section
//       className="relative min-h-screen bg-black text-white flex items-center justify-center px-8 overflow-hidden bg-cover bg-center"
//       style={{ backgroundImage: "url(../../Images/hero.jpg)" }}
//     >
//       <div className="absolute inset-0 bg-black/40 z-10" />

//       <div className="text-center max-w-2xl z-10">
//         {phase !== "solutionBlock" && phase !== "typingFinal" && phase !== "done" && (
//           <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
//             {typedText}
//           </h1>
//         )}

//         {phase === "whatIsSolution" && (
//           <motion.h1
//             className="text-4xl sm:text-5xl md:text-6xl font-bold"
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             onAnimationComplete={() => setTimeout(() => setPhase("solutionBlock"), pauseDuration)}
//           >
//             WHAT IS SOLUTION?
//           </motion.h1>
//         )}

//         {phase === "solutionBlock" && (
//           <motion.div
//             className="space-y-3"
//             initial="hidden"
//             animate="visible"
//             variants={containerVariants}
//             onAnimationComplete={() => setTimeout(() => setPhase("typingFinal"), pauseDuration)}
//           >
//             <motion.h1
//               className="text-4xl sm:text-5xl md:text-6xl font-bold"
//               variants={fadeInUp}
//             >
//               SOLUTION IS
//             </motion.h1>

//             <div className="flex flex-col sm:flex-row justify-center gap-4 items-center mt-2">
//               {['CHANGE', 'ACTION', 'PURPOSE'].map((word, i) => (
//                 <motion.div
//                   key={i}
//                   className="text-3xl sm:text-4xl md:text-5xl font-semibold"
//                   initial={{ opacity: 0, filter: "blur(6px)" }}
//                   animate={{ opacity: 1, filter: "blur(0px)" }}
//                   transition={{ duration: 1, delay: i * 0.4 }}
//                 >
//                   <span className="text-white">{word[0]}</span>
//                   <span className="text-blue-500">{word.slice(1)}</span>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
//         )}

//         {phase === "typingFinal" && (
//           <h1 className="text-5xl hero-txt sm:text-6xl md:text-7xl mt-6">
//             {fullTextMap["typingFinal"].slice(0, finalIndex).split("").map((char, i) => (
//               <motion.span
//                 key={i}
//                 className="inline-block"
//                 initial={{ opacity: 0, filter: "blur(6px)" }}
//                 animate={{ opacity: 1, filter: "blur(0px)" }}
//                 transition={{ duration: 0.6, delay: i * 0.08 }}
//               >
//                 {char === " " ? "\u00A0" : char}
//               </motion.span>
//             ))}
//           </h1>
//         )}

//         {phase === "done" && (
//           <motion.div
//             className="mt-6"
//             variants={containerVariants}
//             initial="hidden"
//             animate="visible"
//           >
//             <motion.div
//               className="flex items-center justify-center pf text-[16px] md:text-lg text-gray-200 uppercase gap-4 tracking-[2px] text-center"
//               variants={fadeInUp}
//             >
//               <p>Innovative</p>
//               <p>|</p>
//               <p>Imaginative</p>
//               <p>|</p>
//               <p>Creative</p>
//             </motion.div>
//           </motion.div>
//         )}
//       </div>

//       {phase === "done" && (
//         <motion.div
//           className="absolute sm:flex hidden right-0 top-0 h-screen w-20 bg-black/30 z-50 flex-col justify-between items-center py-6"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.6 }}
//         >
//           <motion.div className="mb-auto mt-8">
//             <IoMenu
//               className="text-white text-3xl flex-1 cursor-pointer rotate-90"
//               onClick={() => setMenuOpen(true)}
//             />
//           </motion.div>
//         </motion.div>
//       )}

//       {phase === "done" && (
//         <motion.div
//           className="absolute sm:hidden top-7 right-7 rotate-90 z-20"
//           initial={{ opacity: 0, y: -10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, ease: "easeOut" }}
//         >
//           <FiMenu
//             className="text-white text-3xl cursor-pointer"
//             onClick={() => setMenuOpen(true)}
//           />
//         </motion.div>
//       )}
//     </section>
//   );
// };

// export default Hero;


import React, { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import { FiMenu } from "react-icons/fi";
import { IoMenu } from "react-icons/io5";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, ease: "easeInOut" },
  },
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

interface HeroProps {
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Hero: React.FC<HeroProps> = ({ setMenuOpen }) => {
  const [phase, setPhase] = useState<
    | "ideaIs"
    | "solution"
    | "whatIsSolution"
    | "solutionBlock"
    | "typingFinal"
    | "done"
  >("ideaIs");

  const [typedText, setTypedText] = useState<string[]>([]);
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const typingSpeed = 100;
  const pauseDuration = 3000;

  const fullTextMap: Record<string, string> = {
    ideaIs: "IDEA IS ...",
    solution: "IDEA IS SOLUTION",
    typingFinal: "IDEA IS CAP",
  };

  useEffect(() => {
    if (["whatIsSolution", "solutionBlock", "typingFinal", "done"].includes(phase)) return;
    const fullText = fullTextMap[phase].split("");

    if (!deleting && index < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText((prev) => [...prev, fullText[index]]);
        setIndex(index + 1);
      }, fullText[index] === "." ? 600 : typingSpeed);
      return () => clearTimeout(timeout);
    }

    if (!deleting && index === fullText.length) {
      setTimeout(() => setDeleting(true), pauseDuration);
    }

    if (deleting) {
      const deleteTimeout = setTimeout(() => {
        setTypedText((prev) => prev.slice(0, -1));
        setIndex((i) => i - 1);
        if (index <= 0) {
          setDeleting(false);
          setIndex(0);
          setTypedText([]);
          if (phase === "ideaIs") setPhase("solution");
          else if (phase === "solution") setPhase("whatIsSolution");
        }
      }, 50);
      return () => clearTimeout(deleteTimeout);
    }
  }, [index, deleting, phase]);

  const [finalIndex, setFinalIndex] = useState(0);
  const spacedFinal = fullTextMap["typingFinal"].split("");
  useEffect(() => {
    if (phase !== "typingFinal") return;
    if (finalIndex < spacedFinal.length) {
      const timeout = setTimeout(() => {
        setFinalIndex((i) => i + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
    const doneTimeout = setTimeout(() => setPhase("done"), pauseDuration);
    return () => clearTimeout(doneTimeout);
  }, [phase, finalIndex]);

  return (
    <section
      className="relative min-h-screen bg-black text-white flex items-center justify-center px-8 overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url(../../Images/hero.jpg)" }}
    >
      <div className="absolute inset-0 bg-black/40 z-10" />

      <div className="text-center max-w-2xl z-10">
        {(phase === "ideaIs" || phase === "solution") && (
          <h1 className="text-4xl hero-txt sm:text-5xl md:text-6xl font-bold">
            {typedText.map((char, i) => (
              <motion.span
                key={i}
                className="inline-block"
                initial={{ opacity: 0, filter: "blur(6px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </h1>
        )}

        {phase === "whatIsSolution" && (
          <motion.h1
            className="text-4xl hero-txt sm:text-5xl md:text-6xl font-bold"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            onAnimationComplete={() => setTimeout(() => setPhase("solutionBlock"), pauseDuration)}
          >
            WHAT IS SOLUTION?
          </motion.h1>
        )}

        {phase === "solutionBlock" && (
          <motion.div
            className="space-y-3 hero-txt"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            onAnimationComplete={() => setTimeout(() => setPhase("typingFinal"), pauseDuration)}
          >
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold"
              variants={fadeInUp}
            >
              SOLUTION IS
            </motion.h1>
            <motion.div
              className="flex flex-col sm:flex-row justify-center gap-4 items-center mt-2"
              variants={containerVariants}
            >
              {["CHANGE", "ACTION", "PURPOSE"].map((word, i) => (
                <motion.div
                  key={i}
                  className="text-3xl sm:text-4xl md:text-5xl font-semibold"
                  initial={{ opacity: 0, filter: "blur(6px)" }}
                  animate={{ opacity: 1, filter: "blur(0px)" }}
                  transition={{ duration: 0.6, delay: i * 0.4 }}
                >
                  <span className="text-white">{word[0]}</span>
                  <span className="text-blue-500">{word.slice(1)}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}

        {(phase === "typingFinal" || phase === "done") && (
          <motion.h1
            className="text-5xl hero-txt sm:text-6xl md:text-7xl mt-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
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
          </motion.h1>
        )}

        {phase === "done" && (
          <motion.div
            className="mt-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="flex items-center justify-center pf text-[16px] md:text-lg text-gray-200 uppercase gap-4 tracking-[2px] text-center"
              variants={fadeInUp}
            >
              <p>Innovative</p>
              <p>|</p>
              <p>Imaginative</p>
              <p>|</p>
              <p>Creative</p>
            </motion.div>
          </motion.div>
        )}
      </div>

      {(phase === "done" || phase === "typingFinal") && (
       
                    <motion.aside
                      className="absolute hidden sm:flex right-0 top-0 h-screen w-20 bg-black/30 z-20 flex-col justify-between items-center py-6"
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
      )}

      {(phase === "done" || phase === "typingFinal") && (
        <motion.div
          className="absolute sm:hidden top-7 right-7 rotate-90 z-20"
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
    </section>
  );
};

export default Hero;
