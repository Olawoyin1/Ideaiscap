// // // // // import React, { useEffect, useState } from "react";
// // // // // import { motion, AnimatePresence, Variants } from "framer-motion";
// // // // // import { FiMenu } from "react-icons/fi";
// // // // // import { GrClose } from "react-icons/gr";
// // // // // import { Link } from "react-router-dom";
// // // // // import { useNavigate } from "react-router-dom";
// // // // // // import { TiThMenu } from "react-icons/ti";
// // // // // import { IoMenu } from "react-icons/io5";

// // // // // const keywords = ["CHANGE", "ACTION", "PURPOSE", "SOLUTION"];
// // // // // const typingSpeed = 120;

// // // // // const containerVariants: Variants = {
// // // // //   hidden: { opacity: 0 },
// // // // //   visible: {
// // // // //     opacity: 1,
// // // // //     transition: { staggerChildren: 0.4, ease: "easeInOut" },
// // // // //   },
// // // // // };

// // // // // const fadeInUp: Variants = {
// // // // //   hidden: { opacity: 0, y: 20 },
// // // // //   visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
// // // // // };
// // // // // // const keywordVariant: Variants = {
// // // // // //   initial: { opacity: 0, y: 50, filter: "blur(6px)" },
// // // // // //   animate: {
// // // // // //     opacity: 1,
// // // // // //     y: 0,
// // // // // //     filter: "blur(0px)",
// // // // // //     transition: { duration: 0.4, type: "spring", bounce: 0.5 },
// // // // // //   },
// // // // // //   exit: {
// // // // // //     opacity: 0,
// // // // // //     y: -40,
// // // // // //     filter: "blur(4px)",
// // // // // //     transition: { duration: 0.3 },
// // // // // //   },
// // // // // // };


// // // // // const keywordVariant: Variants = {
// // // // //   initial: {
// // // // //     opacity: 0,
// // // // //     filter: "blur(6px)",
// // // // //   },
// // // // //   animate: {
// // // // //     opacity: 1,
// // // // //     filter: "blur(0px)",
// // // // //     transition: {
// // // // //       duration: 0.4,
// // // // //       ease: "easeOut",
// // // // //     },
// // // // //   },
// // // // //   exit: {
// // // // //     opacity: 0,
// // // // //     filter: "blur(4px)",
// // // // //     transition: {
// // // // //       duration: 0.3,
// // // // //       ease: "easeIn",
// // // // //     },
// // // // //   },
// // // // // };


// // // // // export default function Hero() {
// // // // //   const [phase, setPhase] = useState<
// // // // //     "intro" | "keywords" | "typingFinal" | "done"
// // // // //   >("intro");
// // // // //   const [introIndex, setIntroIndex] = useState(0);
// // // // //   const [keywordIndex, setKeywordIndex] = useState(0);
// // // // //   const [finalIndex, setFinalIndex] = useState(0);
// // // // //   const [lineCount, setLineCount] = useState(4);
// // // // //   const [menuOpen, setMenuOpen] = useState(false);
// // // // //   const [showDots, setShowDots] = useState(false);

// // // // //   const [isMobile, setIsMobile] = useState(false);
// // // // //   const navigate = useNavigate();

// // // // //   const navItems = [
// // // // //     { name: "OUR PURPOSE", href: "/purpose" },
// // // // //     { name: "LAST GENERATION", href: "/last-generation" },
// // // // //     { name: "FILOSOFI", href: "/filosofi" },
// // // // //     { name: "SOCIOLOJI", href: "/socioloji" },
// // // // //     { name: "CONNECT", href: "/connect" },
// // // // //   ];

// // // // //   useEffect(() => {
// // // // //     const handleResize = () => {
// // // // //       setIsMobile(window.innerWidth < 640); // Tailwind's `sm`
// // // // //     };

// // // // //     handleResize(); // set initially
// // // // //     window.addEventListener("resize", handleResize);
// // // // //     return () => window.removeEventListener("resize", handleResize);
// // // // //   }, []);

// // // // //   const containerVariant: Variants = {
// // // // //     hidden: { opacity: 0 },
// // // // //     visible: {
// // // // //       opacity: 1,
// // // // //       transition: { staggerChildren: 0.3, delayChildren: 0.7 },
// // // // //     },
// // // // //   };

// // // // //   const itemVariant: Variants = {
// // // // //     hidden: { opacity: 0, y: 20 },
// // // // //     visible: {
// // // // //       opacity: 1,
// // // // //       y: 0,
// // // // //       transition: { type: "spring", bounce: 0.4 },
// // // // //     },
// // // // //   };

// // // // //   const introText = "IDEA IS";

// // // // //   const spacedFinal = "IDEA IS CAPITAL".split("");

// // // // //   // Responsive vertical lines
// // // // //   useEffect(() => {
// // // // //     const updateLineCount = () => setLineCount(window.innerWidth < 640 ? 3 : 4);
// // // // //     updateLineCount();
// // // // //     window.addEventListener("resize", updateLineCount);
// // // // //     return () => window.removeEventListener("resize", updateLineCount);
// // // // //   }, []);

// // // // //   useEffect(() => {
// // // // //     if (phase !== "intro") return;
// // // // //     if (introIndex < introText.length) {
// // // // //       const timeout = setTimeout(() => {
// // // // //         setIntroIndex((i) => i + 1);
// // // // //       }, typingSpeed);
// // // // //       return () => clearTimeout(timeout);
// // // // //     }

// // // // //     // Start dot animation after typing finishes
// // // // //     setShowDots(true);

// // // // //     // Wait 3s with animated dots before showing keywords
// // // // //     const delay = setTimeout(() => {
// // // // //       setPhase("keywords");
// // // // //     }, 3000);

// // // // //     return () => clearTimeout(delay);
// // // // //   }, [phase, introIndex]);

// // // // //   useEffect(() => {
// // // // //     if (phase !== "keywords") return;

// // // // //     if (keywordIndex === 0) {
// // // // //       const delay = setTimeout(() => {
// // // // //         setKeywordIndex(1);
// // // // //       }, 700); // ⏱ 1 second delay before first keyword

// // // // //       return () => clearTimeout(delay);
// // // // //     }

// // // // //     if (keywordIndex < keywords.length) {
// // // // //       const timeout = setTimeout(() => {
// // // // //         setKeywordIndex((i) => i + 1);
// // // // //       }, 3000); // Wait 3s between keywords
// // // // //       return () => clearTimeout(timeout);
// // // // //     }

// // // // //     // ✅ Delay the transition to next phase *after* the final keyword has animated out
// // // // //     const pause = setTimeout(() => setPhase("typingFinal"), 1500); // Let the last word fade out
// // // // //     return () => clearTimeout(pause);
// // // // //   }, [phase, keywordIndex]);

// // // // //   // Typing final full line
// // // // //   useEffect(() => {
// // // // //     if (phase !== "typingFinal") return;
// // // // //     if (finalIndex < spacedFinal.length) {
// // // // //       const timeout = setTimeout(() => {
// // // // //         setFinalIndex((i) => i + 1);
// // // // //       }, typingSpeed);
// // // // //       return () => clearTimeout(timeout);
// // // // //     }
// // // // //     const doneTimeout = setTimeout(() => setPhase("done"), 600);
// // // // //     return () => clearTimeout(doneTimeout);
// // // // //   }, [phase, finalIndex]);

// // // // //   return (
// // // // //     <section
// // // // //       className="relative min-h-screen bg-black text-white flex items-center justify-center px-8 overflow-hidden bg-cover bg-center"
// // // // //       style={{ backgroundImage: "url(../../Images/hero.jpg)" }}
// // // // //     >
// // // // //       {/* Dark Overlay */}
// // // // //       <div className="absolute inset-0 bg-black/40 z-10" />

// // // // //       {/* Vertical falling lines */}
// // // // //       <div className="absolute container inset-0 z-0 pointer-events-none">
// // // // //         <div className="relative h-full w-full flex justify-between px-20">
// // // // //           {Array.from({ length: lineCount }, (_, idx) => (
// // // // //             <motion.div
// // // // //               key={idx}
// // // // //               className="w-px bg-white opacity-40 h-full"
// // // // //               initial={{ y: "-100%" }}
// // // // //               animate={{ y: "100%" }}
// // // // //               transition={{
// // // // //                 repeat: Infinity,
// // // // //                 duration: 2.5 + idx * 0.3,
// // // // //                 ease: "linear",
// // // // //                 delay: idx * 0.5,
// // // // //               }}
// // // // //             />
// // // // //           ))}
// // // // //         </div>
// // // // //       </div>

// // // // //       <div className="text-center max-w-2xl md:-ml-20 md:-mt-8 z-10">
// // // // //         {/* Step 1: Typing IDEA IS ... */}
// // // // //         {phase === "intro" && (
// // // // //           // <h1 className="text-5xl hero-txt sm:text-6xl md:text-7xl font-semibold flex items-center gap-1 justify-center">
// // // // //           <motion.h1
// // // // //             className="text-5xl hero-txt sm:text-6xl md:text-7xl font-semibold flex items-center gap-1 justify-center"
// // // // //             initial={{ opacity: 1, x: 0, scale: 1 }}
// // // // //             // animate={ }
// // // // //             transition={{ duration: 0.8, ease: "easeInOut" }}
// // // // //           >
// // // // //             {/* Typed "IDEA IS" */}
// // // // //             {introText
// // // // //               .slice(0, introIndex)
// // // // //               .split("")
// // // // //               .map((char, i) => (
// // // // //                 <motion.span
// // // // //                   key={i}
// // // // //                   className="inline-block"
// // // // //                   initial={{ opacity: 0, filter: "blur(6px)" }}
// // // // //                   animate={{ opacity: 1, filter: "blur(0px)" }}
// // // // //                   transition={{ duration: 0.5 }}
// // // // //                 >
// // // // //                   {char === " " ? "\u00A0" : char}
// // // // //                 </motion.span>
// // // // //               ))}

// // // // //             {/* Animated Dots */}
// // // // //             {showDots && (
// // // // //               <div className="flex gap-1">
// // // // //                 {[0, 1, 2].map((i) => (
// // // // //                   <motion.span
// // // // //                     key={i}
// // // // //                     className="text-5xl sm:text-6xl md:text-7xl text-blue-300"
// // // // //                     initial={{ opacity: 0 }}
// // // // //                     animate={{ opacity: 1 }}
// // // // //                     transition={{ delay: 0.4 * i, duration: 0.3 }}
// // // // //                   >
// // // // //                     .
// // // // //                   </motion.span>
// // // // //                 ))}
// // // // //               </div>
// // // // //             )}
// // // // //           </motion.h1>
// // // // //         )}

       
// // // // //         {/* Step 2: Slide "IDEA IS" to the left and show keywords sliding up beside it */}
// // // // //         {phase === "keywords" && (
// // // // //           // <motion.h1
// // // // //           //   className="absolute  top-1/2 left-1/2 transform -translate-y-1/2 text-5xl sm:text-6xl md:text-7xl font-semibold hero-txt z-30"
// // // // //           //   initial={{ x: "-50%", scale: 1 }}
// // // // //           //   animate={{ x: "-500px", scale: 0.75 }} // 👈 move farther left
// // // // //           //   transition={{
// // // // //           //     // duration: 1.5, // 👈 slow down the movement
// // // // //           //     ease: "easeInOut",
// // // // //           //   }}
// // // // //           // >
// // // // //           //   IDEA IS
// // // // //           // </motion.h1>

// // // // //           <motion.h1
// // // // //           className="absolute top-1/2 left-1/2 transform -translate-y-1/2 text-4xl sm:text-6xl md:text-7xl font-semibold hero-txt z-30"
// // // // //           initial={{ x: "-50%", y: "-50%", scale: 1 }}
// // // // //           animate={
// // // // //             isMobile
// // // // //               ? { y: "-80px", scale: 0.75 } // 👈 Slide up on mobile
// // // // //               : { x: "-500px", y:"-10px", scale: 0.75 } // 👈 Slide left on desktop
// // // // //           }
// // // // //           transition={{
// // // // //             ease: "easeInOut",
// // // // //             duration: 0.3,
// // // // //           }}
// // // // //         >
// // // // //           IDEA IS
// // // // //         </motion.h1>
// // // // //         )}

// // // // //         {phase === "keywords" && (
// // // // //           <div className="flex justify-center items-center  min-h-[100px] relative z-10">
// // // // //             <AnimatePresence mode="wait">
// // // // //               <motion.h1
// // // // //                 key={keywords[keywordIndex - 1]}
// // // // //                 className="text-7xl md:text-8xl tracking-[4px] font-bold pf text-blue-400 text-center"
// // // // //                 variants={keywordVariant}
// // // // //                 initial="initial"
// // // // //                 animate="animate"
// // // // //                 exit="exit"
// // // // //               >
// // // // //                 {keywords[keywordIndex - 1]}
// // // // //               </motion.h1>
// // // // //             </AnimatePresence>
// // // // //           </div>
// // // // //         )}

// // // // //         {/* Step 3: Type "IDEA IS CAPITAL" */}
// // // // //         {(phase === "typingFinal" || phase === "done") && (
// // // // //           <h1 className="text-5xl hero-txt sm:text-6xl md:text-7xl ">
// // // // //             {spacedFinal.slice(0, finalIndex).map((char, i) => (
// // // // //               <motion.span
// // // // //                 key={i}
// // // // //                 className="inline-block"
// // // // //                 initial={{ opacity: 0, filter: "blur(6px)" }}
// // // // //                 animate={{ opacity: 1, filter: "blur(0px)" }}
// // // // //                 transition={{ duration: 1 }}
// // // // //               >
// // // // //                 {char === " " ? "\u00A0" : char}
// // // // //               </motion.span>
// // // // //             ))}
// // // // //           </h1>
// // // // //         )}

// // // // //         {/* Final UI */}
// // // // //         {phase === "done" && (
// // // // //           <motion.div
// // // // //             className="-mt-1 md:mt-6"
// // // // //             variants={containerVariants}
// // // // //             initial="hidden"
// // // // //             animate="visible"
// // // // //           >
// // // // //             <motion.div
// // // // //               className="flex  items-center justify-center pf text-[16px] md:text-lg text-gray-200 uppercase   gap-2 sm:gap-4 md:tracking-[4px] tracking-[2px]  text-center"
// // // // //               variants={fadeInUp}
// // // // //             >
// // // // //               <p>Innovative</p>
// // // // //               <p>|</p>
// // // // //               <p>Imaginative</p>
// // // // //               <p>|</p>
// // // // //               <p>Creative</p>
// // // // //             </motion.div>

// // // // //             <motion.aside
// // // // //               // className="absolute hidden sm:flex right-0 top-0 h-screen w-20 bg-black/30 flex-col items-center py-6"
// // // // //               className="absolute hidden sm:flex right-0 top-0 h-screen w-20 bg-black/30 z-50 flex-col justify-between  items-center py-6"
// // // // //               variants={fadeInUp}
// // // // //             >
// // // // //               {/* Top: Menu Icon */}
// // // // //               <motion.div className="mb-auto mt-8" variants={fadeInUp}>
// // // // //                 <IoMenu
// // // // //                   className="text-white text-3xl flex-1 cursor-pointer rotate-90"
// // // // //                   onClick={() => setMenuOpen(true)}
// // // // //                 />
// // // // //               </motion.div>

// // // // //               {/* Social Links Section */}
// // // // //               <motion.nav
// // // // //                 className="flex absolute bottom-70 justify-evenly flex-1 flex-end rotate-[-90deg] items-center text-xs tracking-widest font-semibold"
// // // // //                 variants={containerVariants}
// // // // //               >
// // // // //                 {[
// // // // //                   {
// // // // //                     name: "Facebook",
// // // // //                     url: "https://facebook.com/ideaiscapital",
// // // // //                   },
// // // // //                   {
// // // // //                     name: "Instagram",
// // // // //                     url: "https://instagram.com/ideaiscapital",
// // // // //                   },
// // // // //                   {
// // // // //                     name: "LinkedIn",
// // // // //                     url: "https://linkedin.com/company/ideaiscapital",
// // // // //                   },
// // // // //                   { name: "TikTok", url: "https://tiktok.com/@ideaiscapital" },
// // // // //                   { name: "X", url: "https://x.com/ideaiscapital" },
// // // // //                 ].map(({ name, url }) => (
// // // // //                   <motion.a
// // // // //                     key={name}
// // // // //                     href={url}
// // // // //                     target="_blank"
// // // // //                     rel="noopener noreferrer"
// // // // //                     className="uppercase sf px-4 py-2 tracking-[5px] h-fit hover:text-blue-400 transition duration-300"
// // // // //                     variants={fadeInUp}
// // // // //                   >
// // // // //                     {name}
// // // // //                   </motion.a>
// // // // //                 ))}
// // // // //               </motion.nav>
// // // // //             </motion.aside>

// // // // //             <motion.div
// // // // //               className="absolute hidden sm:block bottom-14 left-10"
// // // // //               variants={fadeInUp}
// // // // //             >
// // // // //               <a
// // // // //                 href="#journey"
// // // // //                 className="px-5 py-[12px] hover:bg-[#0584F2] font-semibold tracking-[2px] text-sm  bg-black uppercase pf text-white  cursor-pointer transition-colors duration-300 m-0 box-border leading-2 touch-manipulation appearance-none transform  opacity-100 scroll-smooth"
// // // // //               >
// // // // //                 Journey
// // // // //               </a>
// // // // //             </motion.div>
// // // // //           </motion.div>
// // // // //         )}

// // // // //         {/* Menu icon for small screens only */}
// // // // //         {phase === "done" && (
// // // // //           <motion.div
// // // // //             className="absolute sm:hidden top-7 right-7 rotate-90 z-50"
// // // // //             initial={{ opacity: 0, y: -10 }}
// // // // //             animate={{ opacity: 1, y: 0 }}
// // // // //             transition={{ duration: 0.6, ease: "easeOut" }}
// // // // //           >
// // // // //             <FiMenu
// // // // //               className="text-white text-3xl cursor-pointer"
// // // // //               onClick={() => setMenuOpen(true)}
// // // // //             />
// // // // //           </motion.div>
// // // // //         )}
// // // // //       </div>

// // // // //       {phase === "done" && (
// // // // //         <motion.div
// // // // //           className="fixed block sm:hidden bottom-0 left-0 w-full bg-[#1c1b1b]  py-3 z-50"
// // // // //           initial={{ opacity: 0, y: 20 }}
// // // // //           animate={{ opacity: 1, y: 0 }}
// // // // //           transition={{ duration: 0.6, ease: "easeOut" }}
// // // // //         >
// // // // //           <motion.nav
// // // // //             className="container flex  items-center min-h-8 justify-center text-xs  sm:text-base gap-3 sm:gap-4 text-white uppercase "
// // // // //             variants={containerVariants}
// // // // //           >
// // // // //             {[
// // // // //               { name: "Facebook", url: "https://facebook.com/ideaiscap" },
// // // // //               { name: "Instagram", url: "https://instagram.com/ideaiscap" },
// // // // //               {
// // // // //                 name: "LinkedIn",
// // // // //                 url: "https://linkedin.com/company/ideaiscap",
// // // // //               },
// // // // //               { name: "TikTok", url: "https://tiktok.com/@ideaiscap" },
// // // // //               { name: "X", url: "https://x.com/ideaiscap" },
// // // // //             ].map((item, idx, arr) => (
// // // // //               <React.Fragment key={item.name}>
// // // // //                 <motion.a
// // // // //                   href={item.url}
// // // // //                   target="_blank"
// // // // //                   rel="noopener noreferrer"
// // // // //                   className="hover:text-blue-400 tracking-[2px] font-semibold pf transition"
// // // // //                   variants={fadeInUp}
// // // // //                 >
// // // // //                   {item.name}
// // // // //                 </motion.a>
// // // // //                 {idx < arr.length - 1 && (
// // // // //                   <motion.span className="text-white/50" variants={fadeInUp}>
// // // // //                     |
// // // // //                   </motion.span>
// // // // //                 )}
// // // // //               </React.Fragment>
// // // // //             ))}
// // // // //           </motion.nav>
// // // // //         </motion.div>
// // // // //       )}

// // // // //       <AnimatePresence>
// // // // //         {menuOpen && (
// // // // //           <motion.div
// // // // //             className="fixed inset-0 bg-white z-50 flex items-center justify-center"
// // // // //             initial={{ y: "100%" }}
// // // // //             animate={{ y: 0 }}
// // // // //             exit={{ y: "100%" }}
// // // // //             transition={{ duration: 0.6, ease: "easeInOut" }}
// // // // //           >
// // // // //             {/* Close icon */}
// // // // //             <div
// // // // //               className="absolute top-5 right-5 text-3xl cursor-pointer"
// // // // //               onClick={() => setMenuOpen(false)}
// // // // //             >
// // // // //               <GrClose color="#000000" />
// // // // //             </div>

// // // // //             {/* AnimatePresence for list */}
// // // // //             <motion.ul
// // // // //               className=" text-xl sm:text-3xl space-y-6 text-center"
// // // // //               variants={containerVariant}
// // // // //               initial="hidden"
// // // // //               animate="visible"
// // // // //               exit="hidden"
// // // // //             >
// // // // //               {navItems.map((item) => (
// // // // //                 <motion.li key={item.name} variants={itemVariant}>
// // // // //                   <Link
// // // // //                     to={item.href}
// // // // //                     onClick={(e) => {
// // // // //                       e.preventDefault(); // Prevent immediate routing
// // // // //                       setMenuOpen(false); // Trigger exit animation
// // // // //                       setTimeout(() => {
// // // // //                         navigate(item.href); // Proper route transition
// // // // //                       }, 600); // Match your motion exit transition
// // // // //                     }}
// // // // //                     className="hover:text-blue-400 tracking-[3px] text-xl font-semibold text-black pf transition"
// // // // //                   >
// // // // //                     {item.name}
// // // // //                   </Link>

// // // // //                   {item.name === "LAST GENERATION" && (
// // // // //                     <div className="h-px w-130 mx-auto bg-black/20 mt-9" />
// // // // //                   )}
// // // // //                 </motion.li>
// // // // //               ))}
// // // // //             </motion.ul>
// // // // //           </motion.div>
// // // // //         )}
// // // // //       </AnimatePresence>
// // // // //     </section>
// // // // //   );
// // // // // }




// // // // import React, { useEffect, useState } from "react";
// // // // import { motion, AnimatePresence, Variants } from "framer-motion";
// // // // import { FiMenu } from "react-icons/fi";
// // // // import { GrClose } from "react-icons/gr";
// // // // import { Link, useNavigate } from "react-router-dom";
// // // // import { IoMenu } from "react-icons/io5";

// // // // const keywords = ["CHANGE", "ACTION", "PURPOSE", "SOLUTION"];
// // // // const typingSpeed = 120;

// // // // const containerVariants: Variants = {
// // // //   hidden: { opacity: 0 },
// // // //   visible: {
// // // //     opacity: 1,
// // // //     transition: { staggerChildren: 0.4, ease: "easeInOut" },
// // // //   },
// // // // };

// // // // const fadeInUp: Variants = {
// // // //   hidden: { opacity: 0, y: 20 },
// // // //   visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
// // // // };

// // // // const keywordVariant: Variants = {
// // // //   initial: { opacity: 0, filter: "blur(6px)" },
// // // //   animate: {
// // // //     opacity: 1,
// // // //     filter: "blur(0px)",
// // // //     transition: { duration: 0.4, ease: "easeOut" },
// // // //   },
// // // //   exit: {
// // // //     opacity: 0,
// // // //     filter: "blur(4px)",
// // // //     transition: { duration: 0.3, ease: "easeIn" },
// // // //   },
// // // // };

// // // // export default function Hero() {
// // // //   const [phase, setPhase] = useState<"intro" | "keywords" | "typingFinal" | "done">("intro");
// // // //   const [introIndex, setIntroIndex] = useState(0);
// // // //   const [keywordIndex, setKeywordIndex] = useState(0);
// // // //   const [finalIndex, setFinalIndex] = useState(0);
// // // //   const [lineCount, setLineCount] = useState(4);
// // // //   const [menuOpen, setMenuOpen] = useState(false);
// // // //   const [showDots, setShowDots] = useState(false);
// // // //   const [hideDots, setHideDots] = useState(false);
// // // //   const [moveIdeaUp, setMoveIdeaUp] = useState(false);
// // // //   const [isMobile, setIsMobile] = useState(false);
// // // //   const navigate = useNavigate();

// // // //   const navItems = [
// // // //     { name: "OUR PURPOSE", href: "/purpose" },
// // // //     { name: "LAST GENERATION", href: "/last-generation" },
// // // //     { name: "FILOSOFI", href: "/filosofi" },
// // // //     { name: "SOCIOLOJI", href: "/socioloji" },
// // // //     { name: "CONNECT", href: "/connect" },
// // // //   ];

// // // //   const introText = "IDEA IS";
// // // //   const spacedFinal = "IDEA IS CAPITAL".split("");

// // // //   useEffect(() => {
// // // //     const handleResize = () => setIsMobile(window.innerWidth < 640);
// // // //     handleResize();
// // // //     window.addEventListener("resize", handleResize);
// // // //     return () => window.removeEventListener("resize", handleResize);
// // // //   }, []);

// // // //   useEffect(() => {
// // // //     const updateLineCount = () => setLineCount(window.innerWidth < 640 ? 3 : 4);
// // // //     updateLineCount();
// // // //     window.addEventListener("resize", updateLineCount);
// // // //     return () => window.removeEventListener("resize", updateLineCount);
// // // //   }, []);

// // // //   useEffect(() => {
// // // //     if (phase !== "intro") return;
// // // //     if (introIndex < introText.length) {
// // // //       const timeout = setTimeout(() => setIntroIndex((i) => i + 1), typingSpeed);
// // // //       return () => clearTimeout(timeout);
// // // //     }

// // // //     const dotsTimer = setTimeout(() => setShowDots(true), 2000);
// // // //     const hideDotsTimer = setTimeout(() => {
// // // //       setHideDots(true);
// // // //       setMoveIdeaUp(true);
// // // //     }, 3500);
// // // //     const nextPhaseTimer = setTimeout(() => setPhase("keywords"), 4500);

// // // //     return () => {
// // // //       clearTimeout(dotsTimer);
// // // //       clearTimeout(hideDotsTimer);
// // // //       clearTimeout(nextPhaseTimer);
// // // //     };
// // // //   }, [phase, introIndex]);

// // // //   useEffect(() => {
// // // //     if (phase !== "keywords") return;
// // // //     if (keywordIndex === 0) {
// // // //       const delay = setTimeout(() => setKeywordIndex(1), 700);
// // // //       return () => clearTimeout(delay);
// // // //     }
// // // //     if (keywordIndex < keywords.length) {
// // // //       const timeout = setTimeout(() => setKeywordIndex((i) => i + 1), 3000);
// // // //       return () => clearTimeout(timeout);
// // // //     }
// // // //     const pause = setTimeout(() => setPhase("typingFinal"), 1500);
// // // //     return () => clearTimeout(pause);
// // // //   }, [phase, keywordIndex]);

// // // //   useEffect(() => {
// // // //     if (phase !== "typingFinal") return;
// // // //     if (finalIndex < spacedFinal.length) {
// // // //       const timeout = setTimeout(() => setFinalIndex((i) => i + 1), typingSpeed);
// // // //       return () => clearTimeout(timeout);
// // // //     }
// // // //     const doneTimeout = setTimeout(() => setPhase("done"), 600);
// // // //     return () => clearTimeout(doneTimeout);
// // // //   }, [phase, finalIndex]);

// // // //   return (
// // // //     <section
// // // //       className="relative min-h-screen bg-black text-white flex items-center justify-center px-8 overflow-hidden bg-cover bg-center"
// // // //       style={{ backgroundImage: "url(../../Images/hero.jpg)" }}
// // // //     >
// // // //       <div className="absolute inset-0 bg-black/40 z-10" />
// // // //       <div className="absolute container inset-0 z-0 pointer-events-none">
// // // //         <div className="relative h-full w-full flex justify-between px-20">
// // // //           {Array.from({ length: lineCount }, (_, idx) => (
// // // //             <motion.div
// // // //               key={idx}
// // // //               className="w-px bg-white opacity-40 h-full"
// // // //               initial={{ y: "-100%" }}
// // // //               animate={{ y: "100%" }}
// // // //               transition={{
// // // //                 repeat: Infinity,
// // // //                 duration: 2.5 + idx * 0.3,
// // // //                 ease: "linear",
// // // //                 delay: idx * 0.5,
// // // //               }}
// // // //             />
// // // //           ))}
// // // //         </div>
// // // //       </div>

// // // //       <div className="text-center max-w-2xl md:-ml-20 md:-mt-8 z-10">
// // // //         {(phase === "intro" || phase === "keywords") && (
// // // //           <motion.h1
// // // //             className="text-5xl sm:text-6xl md:text-7xl font-semibold flex items-center gap-1 justify-center hero-txt"
// // // //             animate={moveIdeaUp ? { y: -80 } : { y: 0 }}
// // // //             transition={{ duration: 0.8, ease: "easeInOut" }}
// // // //           >
// // // //             {introText.split("").map((char, i) => (
// // // //               <motion.span
// // // //                 key={i}
// // // //                 initial={{ opacity: 0, filter: "blur(6px)" }}
// // // //                 animate={i < introIndex ? { opacity: 1, filter: "blur(0px)" } : {}}
// // // //                 transition={{ duration: 0.5, delay: i * 0.05 }}
// // // //               >
// // // //                 {char === " " ? "\u00A0" : char}
// // // //               </motion.span>
// // // //             ))}
// // // //             {showDots && !hideDots && (
// // // //               <div className="flex gap-1 ml-2">
// // // //                 {[0, 1, 2].map((i) => (
// // // //                   <motion.span
// // // //                     key={i}
// // // //                     className="text-blue-300"
// // // //                     initial={{ opacity: 0 }}
// // // //                     animate={{ opacity: 1 }}
// // // //                     transition={{ delay: 0.4 * i, duration: 0.3 }}
// // // //                   >
// // // //                     .
// // // //                   </motion.span>
// // // //                 ))}
// // // //               </div>
// // // //             )}
// // // //           </motion.h1>
// // // //         )}
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // }




// // // import React, { useEffect, useState } from "react";
// // // import { motion, AnimatePresence, Variants } from "framer-motion";
// // // import { FiMenu } from "react-icons/fi";
// // // import { GrClose } from "react-icons/gr";
// // // import { Link, useNavigate } from "react-router-dom";
// // // import { IoMenu } from "react-icons/io5";

// // // const keywords = ["CHANGE", "ACTION", "PURPOSE", "SOLUTION"];
// // // const typingSpeed = 120;

// // // const keywordVariant: Variants = {
// // //   initial: { opacity: 0, filter: "blur(6px)" },
// // //   animate: {
// // //     opacity: 1,
// // //     filter: "blur(0px)",
// // //     transition: { duration: 0.4, ease: "easeOut" },
// // //   },
// // //   exit: {
// // //     opacity: 0,
// // //     filter: "blur(4px)",
// // //     transition: { duration: 0.3, ease: "easeIn" },
// // //   },
// // // };

// // // export default function Hero() {
// // //   const [phase, setPhase] = useState<"intro" | "keywords" | "typingFinal" | "done">("intro");
// // //   const [introIndex, setIntroIndex] = useState(0);
// // //   const [keywordIndex, setKeywordIndex] = useState(0);
// // //   const [showDots, setShowDots] = useState(false);
// // //   const [hideDots, setHideDots] = useState(false);
// // //   const [moveIdeaUp, setMoveIdeaUp] = useState(false);

// // //   const introText = "IDEA IS";

// // //   useEffect(() => {
// // //     if (phase !== "intro") return;
// // //     if (introIndex < introText.length) {
// // //       const timeout = setTimeout(() => setIntroIndex((i) => i + 1), typingSpeed);
// // //       return () => clearTimeout(timeout);
// // //     }

// // //     const dotsTimer = setTimeout(() => setShowDots(true), 1000);
// // //     const hideDotsTimer = setTimeout(() => {
// // //       setHideDots(true);
// // //       setMoveIdeaUp(true);
// // //     }, 3000);
// // //     const nextPhaseTimer = setTimeout(() => setPhase("keywords"), 4000);

// // //     return () => {
// // //       clearTimeout(dotsTimer);
// // //       clearTimeout(hideDotsTimer);
// // //       clearTimeout(nextPhaseTimer);
// // //     };
// // //   }, [phase, introIndex]);

// // //   useEffect(() => {
// // //     if (phase !== "keywords") return;
// // //     if (keywordIndex === 0) {
// // //       const delay = setTimeout(() => setKeywordIndex(1), 500);
// // //       return () => clearTimeout(delay);
// // //     }
// // //     if (keywordIndex < keywords.length) {
// // //       const timeout = setTimeout(() => setKeywordIndex((i) => i + 1), 3000);
// // //       return () => clearTimeout(timeout);
// // //     }
// // //   }, [phase, keywordIndex]);

// // //   return (
// // //     <section
// // //       className="relative min-h-screen bg-black text-white flex items-center justify-center px-8 overflow-hidden bg-cover bg-center"
// // //       style={{ backgroundImage: "url(../../Images/hero.jpg)" }}
// // //     >
// // //       <div className="absolute inset-0 bg-black/40 z-10" />
// // //       <div className="text-center max-w-2xl md:-ml-20 md:-mt-8 z-10">
// // //         {(phase === "intro" || phase === "keywords") && (
// // //           <motion.h1
// // //             className="text-5xl sm:text-6xl md:text-7xl font-semibold flex items-center gap-1 justify-center hero-txt"
// // //             animate={moveIdeaUp ? { y: -80 } : { y: 0 }}
// // //             transition={{ duration: 0.8, ease: "easeInOut" }}
// // //           >
// // //             {introText.split("").map((char, i) => (
// // //               <motion.span
// // //                 key={i}
// // //                 initial={{ opacity: 0, filter: "blur(6px)" }}
// // //                 animate={i < introIndex ? { opacity: 1, filter: "blur(0px)" } : {}}
// // //                 transition={{ duration: 0.5, delay: i * 0.05 }}
// // //               >
// // //                 {char === " " ? "\u00A0" : char}
// // //               </motion.span>
// // //             ))}
// // //             {showDots && !hideDots && (
// // //               <div className="flex gap-1 ml-2">
// // //                 {[0, 1, 2].map((i) => (
// // //                   <motion.span
// // //                     key={i}
// // //                     className="text-blue-300"
// // //                     initial={{ opacity: 0 }}
// // //                     animate={{ opacity: 1 }}
// // //                     transition={{ delay: 0.4 * i, duration: 0.3 }}
// // //                   >
// // //                     .
// // //                   </motion.span>
// // //                 ))}
// // //               </div>
// // //             )}
// // //           </motion.h1>
// // //         )}

// // //         {phase === "keywords" && (
// // //           <div className="flex justify-center items-center mt-4 min-h-[100px] relative z-10">
// // //             <AnimatePresence mode="wait">
// // //               <motion.h1
// // //                 key={keywords[keywordIndex - 1]}
// // //                 className="text-6xl md:text-7xl tracking-[4px] font-bold pf text-blue-400 text-center"
// // //                 variants={keywordVariant}
// // //                 initial="initial"
// // //                 animate="animate"
// // //                 exit="exit"
// // //               >
// // //                 {keywords[keywordIndex - 1]}
// // //               </motion.h1>
// // //             </AnimatePresence>
// // //           </div>
// // //         )}
// // //       </div>
// // //     </section>
// // //   );
// // // }




// // import React, { useEffect, useState } from "react";
// // import { motion, AnimatePresence, Variants } from "framer-motion";
// // import { FiMenu } from "react-icons/fi";
// // import { GrClose } from "react-icons/gr";
// // import { Link, useNavigate } from "react-router-dom";
// // import { IoMenu } from "react-icons/io5";

// // const keywords = ["CHANGE", "ACTION", "PURPOSE", "SOLUTION"];
// // const typingSpeed = 120;

// // const keywordVariant: Variants = {
// //   initial: { opacity: 0, filter: "blur(6px)" },
// //   animate: {
// //     opacity: 1,
// //     filter: "blur(0px)",
// //     transition: { duration: 0.4, ease: "easeOut" },
// //   },
// //   exit: {
// //     opacity: 0,
// //     filter: "blur(4px)",
// //     transition: { duration: 0.3, ease: "easeIn" },
// //   },
// // };

// // export default function Hero() {
// //   const [phase, setPhase] = useState<"intro" | "keywords" | "typingFinal" | "done">("intro");
// //   const [introIndex, setIntroIndex] = useState(0);
// //   const [keywordIndex, setKeywordIndex] = useState(0);
// //   const [finalIndex, setFinalIndex] = useState(0);
// //   const [showDots, setShowDots] = useState(false);
// //   const [hideDots, setHideDots] = useState(false);
// //   const [moveIdeaUp, setMoveIdeaUp] = useState(false);

// //   const introText = "IDEA IS";
// //   const spacedFinal = "IDEA IS CAPITAL".split("");

// //   useEffect(() => {
// //     if (phase !== "intro") return;
// //     if (introIndex < introText.length) {
// //       const timeout = setTimeout(() => setIntroIndex((i) => i + 1), typingSpeed);
// //       return () => clearTimeout(timeout);
// //     }

// //     const dotsTimer = setTimeout(() => setShowDots(true), 1000);
// //     const hideDotsTimer = setTimeout(() => {
// //       setHideDots(true);
// //       setMoveIdeaUp(true);
// //     }, 4000);
// //     const nextPhaseTimer = setTimeout(() => setPhase("keywords"), 4500);

// //     return () => {
// //       clearTimeout(dotsTimer);
// //       clearTimeout(hideDotsTimer);
// //       clearTimeout(nextPhaseTimer);
// //     };
// //   }, [phase, introIndex]);

// //   useEffect(() => {
// //     if (phase !== "keywords") return;
// //     if (keywordIndex === 0) {
// //       const delay = setTimeout(() => setKeywordIndex(1), 500);
// //       return () => clearTimeout(delay);
// //     }
// //     if (keywordIndex < keywords.length) {
// //       const timeout = setTimeout(() => setKeywordIndex((i) => i + 1), 3000);
// //       return () => clearTimeout(timeout);
// //     }
// //     const next = setTimeout(() => setPhase("typingFinal"), 1500);
// //     return () => clearTimeout(next);
// //   }, [phase, keywordIndex]);

// //   useEffect(() => {
// //     if (phase !== "typingFinal") return;
// //     if (finalIndex < spacedFinal.length) {
// //       const timeout = setTimeout(() => setFinalIndex((i) => i + 1), typingSpeed);
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
// //       <div className="text-center max-w-2xl md:-ml-20 md:-mt-8 z-10">
// //         {(phase === "intro" || phase === "keywords") && (
// //           <motion.h1
// //             className="text-5xl sm:text-6xl md:text-7xl font-semibold flex items-center gap-1 justify-center hero-txt"
// //             animate={moveIdeaUp ? { y: -80 } : { y: 0 }}
// //             transition={{ duration: 0.8, ease: "easeInOut" }}
// //           >
// //             {introText.split("").map((char, i) => (
// //               <motion.span
// //                 key={i}
// //                 initial={{ opacity: 0, filter: "blur(6px)" }}
// //                 animate={i < introIndex ? { opacity: 1, filter: "blur(0px)" } : {}}
// //                 transition={{ duration: 0.5, delay: i * 0.05 }}
// //               >
// //                 {char === " " ? "\u00A0" : char}
// //               </motion.span>
// //             ))}
// //             {showDots && !hideDots && (
// //               <div className="flex gap-1 ml-2">
// //                 {[0, 1, 2].map((i) => (
// //                   <motion.span
// //                     key={i}
// //                     className="text-blue-300"
// //                     initial={{ opacity: 0 }}
// //                     animate={{ opacity: 1 }}
// //                     transition={{ delay: 0.4 * i, duration: 0.3 }}
// //                   >
// //                     .
// //                   </motion.span>
// //                 ))}
// //               </div>
// //             )}
// //           </motion.h1>
// //         )}

// //         {phase === "keywords" && (
// //           <div className="flex justify-center items-center mt-4 min-h-[100px] relative z-10">
// //             <AnimatePresence mode="wait">
// //               <motion.h1
// //                 key={keywords[keywordIndex - 1]}
// //                 className="text-6xl md:text-7xl tracking-[4px] font-bold pf text-blue-400 text-center"
// //                 variants={keywordVariant}
// //                 initial="initial"
// //                 animate="animate"
// //                 exit="exit"
// //               >
// //                 {keywords[keywordIndex - 1]}
// //               </motion.h1>
// //             </AnimatePresence>
// //           </div>
// //         )}

// //         {(phase === "typingFinal" || phase === "done") && (
// //           <h1 className="text-5xl hero-txt sm:text-6xl md:text-7xl ">
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
// //             className="mt-6"
// //             initial={{ opacity: 0 }}
// //             animate={{ opacity: 1 }}
// //             transition={{ duration: 1 }}
// //           >
// //             <div className="flex items-center justify-center pf text-sm md:text-lg text-gray-200 uppercase gap-4 tracking-[2px] text-center">
// //               <p>Innovative</p>
// //               <p>|</p>
// //               <p>Imaginative</p>
// //               <p>|</p>
// //               <p>Creative</p>
// //             </div>

// //             <div className="mt-6">
// //               <a
// //                 href="#journey"
// //                 className="px-5 py-[12px] hover:bg-[#0584F2] font-semibold tracking-[2px] text-sm bg-black uppercase pf text-white cursor-pointer transition-colors duration-300"
// //               >
// //                 Journey
// //               </a>
// //             </div>

// //             <aside className="absolute hidden sm:flex right-0 top-0 h-screen w-20 bg-black/30 z-50 flex-col justify-between items-center py-6">
// //               <div className="mb-auto mt-8">
// //                 <IoMenu
// //                   className="text-white text-3xl rotate-90 cursor-pointer"
// //                   onClick={() => alert("Menu Clicked")}
// //                 />
// //               </div>
// //               <nav className="flex absolute bottom-70 rotate-[-90deg] items-center text-xs tracking-widest font-semibold">
// //                 {["Facebook", "Instagram", "LinkedIn", "TikTok", "X"].map((name) => (
// //                   <a
// //                     key={name}
// //                     href="#"
// //                     className="uppercase sf px-4 py-2 tracking-[5px] hover:text-blue-400 transition duration-300"
// //                   >
// //                     {name}
// //                   </a>
// //                 ))}
// //               </nav>
// //             </aside>
// //           </motion.div>
// //         )}
// //       </div>
// //     </section>
// //   );
// // }




// import React, { useEffect, useState } from "react";
// import { motion, AnimatePresence, Variants } from "framer-motion";
// import { FiMenu } from "react-icons/fi";
// import { GrClose } from "react-icons/gr";
// import { Link, useNavigate } from "react-router-dom";
// import { IoMenu } from "react-icons/io5";

// const keywords = ["CHANGE", "ACTION", "PURPOSE", "SOLUTION"];
// const typingSpeed = 120;

// const keywordVariant: Variants = {
//   initial: { opacity: 0, filter: "blur(6px)" },
//   animate: {
//     opacity: 1,
//     filter: "blur(0px)",
//     transition: { duration: 0.4, ease: "easeOut" },
//   },
//   exit: {
//     opacity: 0,
//     filter: "blur(4px)",
//     transition: { duration: 0.3, ease: "easeIn" },
//   },
// };

// export default function Hero() {
//   const [phase, setPhase] = useState<"intro" | "keywords" | "typingFinal" | "done">("intro");
//   const [introIndex, setIntroIndex] = useState(0);
//   const [keywordIndex, setKeywordIndex] = useState(0);
//   const [finalIndex, setFinalIndex] = useState(0);
//   const [showDots, setShowDots] = useState(false);
//   const [hideDots, setHideDots] = useState(false);
//   const [moveIdeaUp, setMoveIdeaUp] = useState(false);

//   const introText = "IDEA IS";
//   const spacedFinal = "IDEA IS CAPITAL".split("");

//   useEffect(() => {
//     if (phase !== "intro") return;
//     if (introIndex < introText.length) {
//       const timeout = setTimeout(() => setIntroIndex((i) => i + 1), typingSpeed);
//       return () => clearTimeout(timeout);
//     }

//     const dotsTimer = setTimeout(() => setShowDots(true), 1000);
//     const hideDotsTimer = setTimeout(() => {
//       setHideDots(true);
//       setMoveIdeaUp(true);
//     }, 4000);
//     const nextPhaseTimer = setTimeout(() => setPhase("keywords"), 4500);

//     return () => {
//       clearTimeout(dotsTimer);
//       clearTimeout(hideDotsTimer);
//       clearTimeout(nextPhaseTimer);
//     };
//   }, [phase, introIndex]);

//   useEffect(() => {
//     if (phase !== "keywords") return;
//     if (keywordIndex === 0) {
//       const delay = setTimeout(() => setKeywordIndex(1), 500);
//       return () => clearTimeout(delay);
//     }
//     if (keywordIndex < keywords.length) {
//       const timeout = setTimeout(() => setKeywordIndex((i) => i + 1), 3000);
//       return () => clearTimeout(timeout);
//     }
//     const next = setTimeout(() => setPhase("typingFinal"), 3000);
//     return () => clearTimeout(next);
//   }, [phase, keywordIndex]);

//   useEffect(() => {
//     if (phase !== "typingFinal") return;
//     if (finalIndex < spacedFinal.length) {
//       const timeout = setTimeout(() => setFinalIndex((i) => i + 1), typingSpeed);
//       return () => clearTimeout(timeout);
//     }
//     const doneTimeout = setTimeout(() => setPhase("done"), 600);
//     return () => clearTimeout(doneTimeout);
//   }, [phase, finalIndex]);

//   return (
//     <section
//       className="relative min-h-screen bg-black text-white flex items-center justify-center px-8 overflow-hidden bg-cover bg-center"
//       style={{ backgroundImage: "url(../../Images/hero.jpg)" }}
//     >
//       <div className="absolute inset-0 bg-black/40 z-10" />
//       <div className="text-left max-w-2xl md:-ml-20 md:-mt-8 z-10">
//         {(phase === "intro" || phase === "keywords") && (
//           <motion.h1
//             className="text-5xl sm:text-6xl md:text-7xl font-semibold flex items-center gap-1 hero-txt"
//             animate={moveIdeaUp ? { y: -20 } : { y: 0 }}
//             transition={{ duration: 0.8, ease: "easeInOut" }}
//           >
//             {introText.split("").map((char, i) => (
//               <motion.span
//                 key={i}
//                 initial={{ opacity: 0, filter: "blur(6px)" }}
//                 animate={i < introIndex ? { opacity: 1, filter: "blur(0px)" } : {}}
//                 transition={{ duration: 0.5, delay: i * 0.02 }}
//               >
//                 {char === " " ? "\u00A0" : char}
//               </motion.span>
//             ))}
//             {showDots && !hideDots && (
//               <div className="flex gap-1 ml-2">
//                 {[0, 1, 2].map((i) => (
//                   <motion.span
//                     key={i}
//                     className="text-blue-300"
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ delay: 0.4 * i, duration: 1 }}
//                   >
//                     .
//                   </motion.span>
//                 ))}
//               </div>
//             )}
//           </motion.h1>
//         )}

//         {phase === "keywords" && (
//           <div className="mt-4 min-h-[100px] relative z-10">
//             <AnimatePresence mode="wait">
//               <motion.h1
//                 key={keywords[keywordIndex - 1]}
//                 className="text-6xl md:text-7xl tracking-[4px] font-bold pf text-blue-400"
//                 variants={keywordVariant}
//                 initial="initial"
//                 animate="animate"
//                 exit="exit"
//               >
//                 {keywords[keywordIndex - 1]}
//               </motion.h1>
//             </AnimatePresence>
//           </div>
//         )}

//         {(phase === "typingFinal" || phase === "done") && (
//           <h1 className="text-5xl hero-txt sm:text-6xl md:text-7xl ">
//             {spacedFinal.slice(0, finalIndex).map((char, i) => (
//               <motion.span
//                 key={i}
//                 className="inline-block"
//                 initial={{ opacity: 0, filter: "blur(6px)" }}
//                 animate={{ opacity: 1, filter: "blur(0px)" }}
//                 transition={{ duration: 1 }}
//               >
//                 {char === " " ? "\u00A0" : char}
//               </motion.span>
//             ))}
//           </h1>
//         )}

//         {phase === "done" && (
//           <motion.div
//             className="mt-6"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 1 }}
//           >
//             <div className="flex items-center pf text-sm md:text-lg text-gray-200 uppercase gap-4 tracking-[2px]">
//               <p>Innovative</p>
//               <p>|</p>
//               <p>Imaginative</p>
//               <p>|</p>
//               <p>Creative</p>
//             </div>

//             <div className="mt-6">
//               <a
//                 href="#journey"
//                 className="px-5 py-[12px] hover:bg-[#0584F2] font-semibold tracking-[2px] text-sm bg-black uppercase pf text-white cursor-pointer transition-colors duration-300"
//               >
//                 Journey
//               </a>
//             </div>

//             <aside className="absolute hidden sm:flex right-0 top-0 h-screen w-20 bg-black/30 z-50 flex-col justify-between items-center py-6">
//               <div className="mb-auto mt-8">
//                 <IoMenu
//                   className="text-white text-3xl rotate-90 cursor-pointer"
//                   onClick={() => alert("Menu Clicked")}
//                 />
//               </div>
//               <nav className="flex absolute bottom-70 rotate-[-90deg] items-center text-xs tracking-widest font-semibold">
//                 {["Facebook", "Instagram", "LinkedIn", "TikTok", "X"].map((name) => (
//                   <a
//                     key={name}
//                     href="#"
//                     className="uppercase sf px-4 py-2 tracking-[5px] hover:text-blue-400 transition duration-300"
//                   >
//                     {name}
//                   </a>
//                 ))}
//               </nav>
//             </aside>
//           </motion.div>
//         )}
//       </div>
//     </section>
//   );
// }



// // import React, { useEffect, useState } from "react";
// // import { motion, Variants } from "framer-motion";
// // import { FiMenu } from "react-icons/fi";
// // import { IoMenu } from "react-icons/io5";

// // const containerVariants: Variants = {
// //   hidden: { opacity: 0 },
// //   visible: {
// //     opacity: 1,
// //     transition: { staggerChildren: 0.2, ease: "easeInOut" },
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
// //   const [phase, setPhase] = useState<
// //     | "ideaIs"
// //     | "solution"
// //     | "whatIsSolution"
// //     | "solutionBlock"
// //     | "typingFinal"
// //     | "done"
// //   >("ideaIs");

// //   const [typedText, setTypedText] = useState<string[]>([]);
// //   const [index, setIndex] = useState(0);
// //   const [deleting, setDeleting] = useState(false);
// //   const typingSpeed = 100;
// //   const pauseDuration = 3000;

// //   const fullTextMap: Record<string, string> = {
// //     ideaIs: "IDEA IS ...",
// //     solution: "IDEA IS SOLUTION",
// //     typingFinal: "IDEA IS CAP",
// //   };

// //   useEffect(() => {
// //     if (["whatIsSolution", "solutionBlock", "typingFinal", "done"].includes(phase)) return;
// //     const fullText = fullTextMap[phase].split("");

// //     if (!deleting && index < fullText.length) {
// //       const timeout = setTimeout(() => {
// //         setTypedText((prev) => [...prev, fullText[index]]);
// //         setIndex(index + 1);
// //       }, fullText[index] === "." ? 600 : typingSpeed);
// //       return () => clearTimeout(timeout);
// //     }

// //     if (!deleting && index === fullText.length) {
// //       setTimeout(() => setDeleting(true), pauseDuration);
// //     }

// //     if (deleting) {
// //       const deleteTimeout = setTimeout(() => {
// //         setTypedText((prev) => prev.slice(0, -1));
// //         setIndex((i) => i - 1);
// //         if (index <= 0) {
// //           setDeleting(false);
// //           setIndex(0);
// //           setTypedText([]);
// //           if (phase === "ideaIs") setPhase("solution");
// //           else if (phase === "solution") setPhase("whatIsSolution");
// //         }
// //       }, 50);
// //       return () => clearTimeout(deleteTimeout);
// //     }
// //   }, [index, deleting, phase]);

// //   const [finalIndex, setFinalIndex] = useState(0);
// //   const spacedFinal = fullTextMap["typingFinal"].split("");
// //   useEffect(() => {
// //     if (phase !== "typingFinal") return;
// //     if (finalIndex < spacedFinal.length) {
// //       const timeout = setTimeout(() => {
// //         setFinalIndex((i) => i + 1);
// //       }, 100);
// //       return () => clearTimeout(timeout);
// //     }
// //     const doneTimeout = setTimeout(() => setPhase("done"), pauseDuration);
// //     return () => clearTimeout(doneTimeout);
// //   }, [phase, finalIndex]);

// //   return (
// //     <section
// //       className="relative min-h-screen bg-black text-white flex items-center justify-center px-8 overflow-hidden bg-cover bg-center"
// //       style={{ backgroundImage: "url(../../Images/hero.jpg)" }}
// //     >
// //       <div className="absolute inset-0 bg-black/40 z-10" />

// //       <div className="text-center max-w-2xl z-10">
// //         {(phase === "ideaIs" || phase === "solution") && (
// //           <h1 className="text-4xl hero-txt sm:text-5xl md:text-6xl font-bold">
// //             {typedText.map((char, i) => (
// //               <motion.span
// //                 key={i}
// //                 className="inline-block"
// //                 initial={{ opacity: 0, filter: "blur(6px)" }}
// //                 animate={{ opacity: 1, filter: "blur(0px)" }}
// //                 transition={{ duration: 0.4, delay: i * 0.05 }}
// //               >
// //                 {char === " " ? "\u00A0" : char}
// //               </motion.span>
// //             ))}
// //           </h1>
// //         )}

// //         {phase === "whatIsSolution" && (
// //           <motion.h1
// //             className="text-4xl hero-txt sm:text-5xl md:text-6xl font-bold"
// //             initial={{ opacity: 0, y: 50 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.8 }}
// //             onAnimationComplete={() => setTimeout(() => setPhase("solutionBlock"), pauseDuration)}
// //           >
// //             WHAT IS SOLUTION?
// //           </motion.h1>
// //         )}

// //         {phase === "solutionBlock" && (
// //           <motion.div
// //             className="space-y-3 hero-txt"
// //             initial="hidden"
// //             animate="visible"
// //             variants={containerVariants}
// //             onAnimationComplete={() => setTimeout(() => setPhase("typingFinal"), pauseDuration)}
// //           >
// //             <motion.h1
// //               className="text-4xl sm:text-5xl md:text-6xl font-bold"
// //               variants={fadeInUp}
// //             >
// //               SOLUTION IS
// //             </motion.h1>
// //             <motion.div
// //               className="flex flex-col sm:flex-row justify-center gap-4 items-center mt-2"
// //               variants={containerVariants}
// //             >
// //               {["CHANGE", "ACTION", "PURPOSE"].map((word, i) => (
// //                 <motion.div
// //                   key={i}
// //                   className="text-3xl sm:text-4xl md:text-5xl font-semibold"
// //                   initial={{ opacity: 0, filter: "blur(6px)" }}
// //                   animate={{ opacity: 1, filter: "blur(0px)" }}
// //                   transition={{ duration: 0.6, delay: i * 0.4 }}
// //                 >
// //                   <span className="text-white">{word[0]}</span>
// //                   <span className="text-blue-500">{word.slice(1)}</span>
// //                 </motion.div>
// //               ))}
// //             </motion.div>
// //           </motion.div>
// //         )}

// //         {(phase === "typingFinal" || phase === "done") && (
// //           <motion.h1
// //             className="text-5xl hero-txt sm:text-6xl md:text-7xl mt-6"
// //             variants={containerVariants}
// //             initial="hidden"
// //             animate="visible"
// //           >
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
// //           </motion.h1>
// //         )}

// //         {phase === "done" && (
// //           <motion.div
// //             className="mt-6"
// //             variants={containerVariants}
// //             initial="hidden"
// //             animate="visible"
// //           >
// //             <motion.div
// //               className="flex items-center justify-center pf text-[16px] md:text-lg text-gray-200 uppercase gap-4 tracking-[2px] text-center"
// //               variants={fadeInUp}
// //             >
// //               <p>Innovative</p>
// //               <p>|</p>
// //               <p>Imaginative</p>
// //               <p>|</p>
// //               <p>Creative</p>
// //             </motion.div>
// //           </motion.div>
// //         )}
// //       </div>

// //       {(phase === "done" || phase === "typingFinal") && (

// //                     <motion.aside
// //                       className="absolute hidden sm:flex right-0 top-0 h-screen w-20 bg-black/30 z-20 flex-col justify-between items-center py-6"
// //                       variants={fadeInUp}
// //                     >
// //                       <motion.div className="mb-auto mt-8" variants={fadeInUp}>
// //                         <IoMenu
// //                           className="text-white text-3xl flex-1 cursor-pointer rotate-90"
// //                           onClick={() => setMenuOpen(true)}
// //                         />
// //                       </motion.div>

// //                       <motion.nav
// //                         className="flex absolute bottom-70 justify-evenly flex-1 flex-end rotate-[-90deg] items-center text-xs tracking-widest font-semibold"
// //                         variants={containerVariants}
// //                       >
// //                         {["Facebook", "Instagram", "LinkedIn", "TikTok", "X"].map(
// //                           (name) => (
// //                             <motion.a
// //                               key={name}
// //                               href={`https://${name.toLowerCase()}.com/ideaiscapital`}
// //                               target="_blank"
// //                               rel="noopener noreferrer"
// //                               className="uppercase sf px-4 py-2 tracking-[5px] h-fit hover:text-blue-400 transition duration-300"
// //                               variants={fadeInUp}
// //                             >
// //                               {name}
// //                             </motion.a>
// //                           )
// //                         )}
// //                       </motion.nav>
// //                     </motion.aside>
// //       )}

// //       {(phase === "done" || phase === "typingFinal") && (
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
// //     </section>
// //   );
// // };

// // export default Hero;

// import React, { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const HeroAnimation = () => {
//   const [phase, setPhase] = useState("typingIdea");
//   const [typedText, setTypedText] = useState("");
//   const [solutionText, setSolutionText] = useState("");
//   const [showWhatIs, setShowWhatIs] = useState(false);
//   const [showSolutionIs, setShowSolutionIs] = useState(false);
//   const [showWords, setShowWords] = useState({ change: false, action: false, purpose: false });

//   const fullText = "IDEA IS ";
//   const dots = [".", "..", "..."];

//   useEffect(() => {
//     if (phase === "typingIdea") {
//       let i = 0;
//       const interval = setInterval(() => {
//         setTypedText(fullText.slice(0, i + 1));
//         i++;
//         if (i === fullText.length) {
//           clearInterval(interval);
//           setPhase("typingDots");
//         }
//       }, 100);
//       return () => clearInterval(interval);
//     }

//     if (phase === "typingDots") {
//       let i = 0;
//       const interval = setInterval(() => {
//         setTypedText(fullText + dots[i]);
//         i++;
//         if (i === dots.length) {
//           clearInterval(interval);
//           setTimeout(() => setPhase("typingSolution"), 500);
//         }
//       }, 500);
//       return () => clearInterval(interval);
//     }

//     if (phase === "typingSolution") {
//       let i = 0;
//       const solution = "SOLUTION";
//       const interval = setInterval(() => {
//         setSolutionText(solution.slice(0, i + 1));
//         i++;
//         if (i === solution.length) {
//           clearInterval(interval);
//           setTimeout(() => setPhase("fadeOutAll"), 1000);
//         }
//       }, 150);
//       return () => clearInterval(interval);
//     }

//     if (phase === "fadeOutAll") {
//       setTimeout(() => {
//         setTypedText("");
//         setSolutionText("");
//         setPhase("whatIsSolution");
//         setShowWhatIs(true);
//       }, 500);
//     }

//     if (phase === "whatIsSolution") {
//       setTimeout(() => {
//         setShowWhatIs(false);
//         setTimeout(() => {
//           setShowSolutionIs(true);
//           setTimeout(() => setShowWords(w => ({ ...w, change: true })), 2000);
//           setTimeout(() => setShowWords(w => ({ ...w, action: true })), 4000);
//           setTimeout(() => setShowWords(w => ({ ...w, purpose: true })), 6000);
//           setTimeout(() => setPhase("finalIdea"), 8000);
//         }, 1000);
//       }, 3000);
//     }
//   }, [phase]);

//   return (
//     <div className="min-h-screen flex flex-col justify-center items-center text-white bg-black text-center px-4">
//       {phase === "typingIdea" || phase === "typingDots" || phase === "typingSolution" ? (
//         <h1 className="text-5xl sm:text-6xl md:text-7xl">
//           {[...typedText + solutionText].map((char, i) => (
//             <motion.span
//               key={i}
//               initial={{ opacity: 0, filter: "blur(6px)" }}
//               animate={{ opacity: 1, filter: "blur(0px)" }}
//               transition={{ duration: 0.5, delay: i * 0.05 }}
//             >
//               {char === " " ? "\u00A0" : char}
//             </motion.span>
//           ))}
//         </h1>
//       ) : null}

//       <AnimatePresence mode="wait">
//         {showWhatIs && (
//           <motion.h1
//             key="what-is"
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -40 }}
//             transition={{ duration: 0.8 }}
//             className="text-4xl sm:text-5xl md:text-6xl font-bold"
//           >
//             WHAT IS SOLUTION?
//           </motion.h1>
//         )}
//       </AnimatePresence>

//       {showSolutionIs && (
//         <div className="mt-8 text-center">
//           <motion.h2
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 1 }}
//             className="text-4xl sm:text-5xl md:text-6xl"
//           >
//             SOLUTION IS
//           </motion.h2>

//           <div className="mt-4 flex flex-col sm:flex-row gap-4 text-3xl sm:text-4xl md:text-5xl justify-center items-center">
//             {showWords.change && (
//               <motion.span
//                 initial={{ opacity: 0, filter: "blur(8px)" }}
//                 animate={{ opacity: 1, filter: "blur(0px)" }}
//                 transition={{ duration: 1 }}
//               >
//                 CHANGE
//               </motion.span>
//             )}
//             {showWords.action && (
//               <motion.span
//                 initial={{ opacity: 0, filter: "blur(8px)" }}
//                 animate={{ opacity: 1, filter: "blur(0px)" }}
//                 transition={{ duration: 1 }}
//               >
//                 + ACTION
//               </motion.span>
//             )}
//             {showWords.purpose && (
//               <motion.span
//                 initial={{ opacity: 0, filter: "blur(8px)" }}
//                 animate={{ opacity: 1, filter: "blur(0px)" }}
//                 transition={{ duration: 1 }}
//               >
//                 + PURPOSE
//               </motion.span>
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default HeroAnimation;

// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";

// const HeroAnimation = () => {
//   const [phase, setPhase] = useState("typingIdea");
//   const [typedText, setTypedText] = useState("IDEA IS ");
//   const [solutionText, setSolutionText] = useState("");

//   const baseText = "IDEA IS ";
//   const dotSequence = ["...", "..", ".", ""]; // reverse delete sequence

//   useEffect(() => {
//     if (phase === "typingIdea") {
//       setTypedText(baseText);
//       setTimeout(() => setPhase("typingDots"), 800);
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
//         setSolutionText(solution.slice(0, i + 1));
//         i++;
//         if (i === solution.length) {
//           clearInterval(interval);
//         }
//       }, 150);
//       return () => clearInterval(interval);
//     }
//   }, [phase]);

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-black text-white text-center px-4">
//       <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold">
//         {[...typedText + solutionText].map((char, i) => (
//           <motion.span
//             key={i}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.3, delay: i * 0.05 }}
//           >
//             {char === " " ? "\u00A0" : char}
//           </motion.span>
//         ))}
//       </h1>
//     </div>
//   );
// };

// export default HeroAnimation;
