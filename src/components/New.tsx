// // import { useEffect, useState } from "react";
// // import { motion, AnimatePresence } from "framer-motion";

// // const IdeaAnimation = () => {
// //   const [ideaText, setIdeaText] = useState<string[]>([]);
// //   const [step, setStep] = useState(0);
// //   const [charIndex, setCharIndex] = useState(0);
// //   const [segmentIndex, setSegmentIndex] = useState(0);
// //   const [charInSegment, setCharInSegment] = useState(0);
// //   const [solutionLine, setSolutionLine] = useState<string>("");
// //   const [replaceWord, setReplaceWord] = useState(false);
// //   const [showFinalCAP, setShowFinalCAP] = useState(false);

// //   const fullIdeaText = "IDEA IS SOLUTION";
// //   const segments = [" IS CHANGE", " ACTION", " PURPOSE"];

// //   useEffect(() => {
// //     if (step === 0 && charIndex < fullIdeaText.length) {
// //       const timeout = setTimeout(() => {
// //         setIdeaText((prev) => [...prev, fullIdeaText[charIndex]]);
// //         setCharIndex(charIndex + 1);
// //       }, 100);
// //       return () => clearTimeout(timeout);
// //     } else if (step === 0 && charIndex === fullIdeaText.length) {
// //       const timeout = setTimeout(() => setStep(1), 3000);
// //       return () => clearTimeout(timeout);
// //     }

// //     if (step === 1 && segmentIndex < segments.length) {
// //       if (charInSegment < segments[segmentIndex].length) {
// //         const timeout = setTimeout(() => {
// //           setSolutionLine((prev) => prev + segments[segmentIndex][charInSegment]);
// //           setCharInSegment((prev) => prev + 1);
// //         }, 100);
// //         return () => clearTimeout(timeout);
// //       } else {
// //         const timeout = setTimeout(() => {
// //           setSegmentIndex((prev) => prev + 1);
// //           setCharInSegment(0);
// //         }, 3000);
// //         return () => clearTimeout(timeout);
// //       }
// //     } else if (step === 1 && segmentIndex === segments.length) {
// //       const timeout = setTimeout(() => {
// //         setReplaceWord(true);
// //         setStep(2);
// //       }, 2000);
// //       return () => clearTimeout(timeout);
// //     }
// //   }, [step, charIndex, segmentIndex, charInSegment]);

// //   useEffect(() => {
// //     if (step === 2) {
// //       const timeout = setTimeout(() => setShowFinalCAP(true), 2000);
// //       return () => clearTimeout(timeout);
// //     }
// //   }, [step]);

// //   const renderFinalLine = () => {
// //     const parts = solutionLine.split(" ").filter(Boolean);
// //     return parts.map((word, i) => {
// //       if (["CHANGE", "ACTION", "PURPOSE"].includes(word)) {
// //         return (
// //           <span key={i} className="mr-2">
// //             <motion.span
// //               className="text-blue-400"
// //               initial={{ opacity: 0 }}
// //               animate={{ opacity: 1 }}
// //               transition={{ delay: i * 0.3 }}
// //             >
// //               {word[0]}
// //             </motion.span>
// //             <motion.span
// //               initial={{ y: 0, opacity: 1 }}
// //               animate={{ y: 30, opacity: 0 }}
// //               transition={{ duration: 0.6, delay: 0.3 + i * 0.3 }}
// //             >
// //               {word.slice(1)}
// //             </motion.span>
// //           </span>
// //         );
// //       } else {
// //         return (
// //           <span key={i} className="mr-2">
// //             {word}
// //           </span>
// //         );
// //       }
// //     });
// //   };

// //   return (
// //     <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white font-mono space-y-8">
// //       {step === 0 && (
// //         <motion.div className="text-4xl font-bold">
// //           {ideaText.map((char, i) => (
// //             <motion.span
// //               key={i}
// //               initial={{ filter: "blur(6px)", opacity: 0 }}
// //               animate={{ filter: "blur(0px)", opacity: 1 }}
// //               transition={{ duration: 0.3 }}
// //             >
// //               {char}
// //             </motion.span>
// //           ))}
// //         </motion.div>
// //       )}

// //       {step >= 1 && (
// //         <div className="text-4xl font-bold flex flex-wrap items-center">
// //           <AnimatePresence mode="wait">
// //             {!replaceWord ? (
// //               <motion.span
// //                 key="solution"
// //                 initial={{ y: 0, opacity: 1 }}
// //                 animate={{ y: 0, opacity: 1 }}
// //                 exit={{ y: -20, opacity: 0 }}
// //                 className="mr-2"
// //               >
// //                 SOLUTION
// //               </motion.span>
// //             ) : (
// //               <motion.span
// //                 key="idea"
// //                 initial={{ y: 20, opacity: 0 }}
// //                 animate={{ y: 0, opacity: 1 }}
// //                 className="mr-2"
// //               >
// //                 IDEA
// //               </motion.span>
// //             )}
// //           </AnimatePresence>

// //           <div className="flex flex-wrap items-center">
// //             {!replaceWord ? (
// //               <motion.span
// //                 initial={{ opacity: 0 }}
// //                 animate={{ opacity: 1 }}
// //                 transition={{ duration: 0.6 }}
// //               >
// //                 {solutionLine}
// //               </motion.span>
// //             ) : (
// //               renderFinalLine()
// //             )}
// //           </div>
// //         </div>
// //       )}

// //       {showFinalCAP && (
// //         <motion.div
// //           className="text-4xl font-bold"
// //           initial={{ opacity: 0 }}
// //           animate={{ opacity: 1 }}
// //         >
// //           IDEA IS CAP
// //         </motion.div>
// //       )}
// //     </div>
// //   );
// // };

// // export default IdeaAnimation;



// import { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const IdeaAnimation = () => {
//   const [ideaText, setIdeaText] = useState<string[]>([]);
//   const [step, setStep] = useState(0);
//   const [charIndex, setCharIndex] = useState(0);
//   const [segmentIndex, setSegmentIndex] = useState(0);
//   const [charInSegment, setCharInSegment] = useState(0);
//   const [changeLine, setChangeLine] = useState<string>("");
//   const [replaceSolutionWithIdea, setReplaceSolutionWithIdea] = useState(false);
//   const [startCapTransition, setStartCapTransition] = useState(false);
//   const [showCAP, setShowCAP] = useState(false);
//   const [finalIdeaCap, setFinalIdeaCap] = useState<string[]>([]);

//   const fullIdeaText = "IDEA IS SOLUTION";
//   const segments = ["CHANGE", " + ACTION", " + PURPOSE"];
//   const finalText = "IDEA IS CAP";

//   useEffect(() => {
//     if (step === 0 && charIndex < fullIdeaText.length) {
//       const timeout = setTimeout(() => {
//         setIdeaText((prev) => [...prev, fullIdeaText[charIndex]]);
//         setCharIndex((prev) => prev + 1);
//       }, 100);
//       return () => clearTimeout(timeout);
//     }
//     if (step === 0 && charIndex === fullIdeaText.length) {
//       const timeout = setTimeout(() => setStep(1), 2000);
//       return () => clearTimeout(timeout);
//     }

//     if (step === 1 && segmentIndex < segments.length) {
//       if (charInSegment < segments[segmentIndex].length) {
//         const timeout = setTimeout(() => {
//           setChangeLine((prev) => prev + segments[segmentIndex][charInSegment]);
//           setCharInSegment((prev) => prev + 1);
//         }, 100);
//         return () => clearTimeout(timeout);
//       } else {
//         const timeout = setTimeout(() => {
//           setSegmentIndex((prev) => prev + 1);
//           setCharInSegment(0);
//         }, 3000);
//         return () => clearTimeout(timeout);
//       }
//     }

//     if (segmentIndex === segments.length && !replaceSolutionWithIdea) {
//       const timeout = setTimeout(() => setReplaceSolutionWithIdea(true), 2000);
//       return () => clearTimeout(timeout);
//     }

//     if (replaceSolutionWithIdea && !startCapTransition) {
//       const timeout = setTimeout(() => setStartCapTransition(true), 2000);
//       return () => clearTimeout(timeout);
//     }

//     if (startCapTransition && !showCAP) {
//       const timeout = setTimeout(() => setShowCAP(true), 2000);
//       return () => clearTimeout(timeout);
//     }

//     if (showCAP && finalIdeaCap.length < finalText.length) {
//       const timeout = setTimeout(() => {
//         setFinalIdeaCap((prev) => [...prev, finalText[finalIdeaCap.length]]);
//       }, 120);
//       return () => clearTimeout(timeout);
//     }
//   }, [step, charIndex, segmentIndex, charInSegment, replaceSolutionWithIdea, startCapTransition, showCAP, finalIdeaCap]);

//   const capWords = ["CHANGE", "ACTION", "PURPOSE"];

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white font-mono space-y-6">
//       {step === 0 && (
//         <motion.div className="text-4xl font-bold">
//           {ideaText.map((char, i) => (
//             <motion.span
//               key={i}
//               initial={{ filter: "blur(6px)", opacity: 0 }}
//               animate={{ filter: "blur(0px)", opacity: 1 }}
//               transition={{ duration: 0.3 }}
//             >
//               {char}
//             </motion.span>
//           ))}
//         </motion.div>
//       )}

//       {step >= 1 && (
//         <div className="flex flex-col items-center space-y-2 text-4xl font-bold">
//           <AnimatePresence mode="wait">
//             <motion.div key={replaceSolutionWithIdea ? "idea" : "solution"}>
//               <motion.span
//                 initial={{ opacity: 0, y: -10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -10 }}
//                 transition={{ duration: 0.5 }}
//               >
//                 {replaceSolutionWithIdea ? "IDEA IS" : "SOLUTION IS"}
//               </motion.span>
//             </motion.div>
//           </AnimatePresence>

//           {!startCapTransition && (
//             <motion.div className="text-blue-400">
//               {changeLine}
//             </motion.div>
//           )}

//           {startCapTransition && !showCAP && (
//             <motion.div className="flex text-blue-400">
//               {capWords.map((word, i) => (
//                 <div key={i} className="mr-3 flex">
//                   <span className="font-bold">
//                     {word[0]}
//                   </span>
//                   <motion.span
//                     initial={{ opacity: 1 }}
//                     animate={{ opacity: 0 }}
//                     transition={{ duration: 1, delay: i * 0.4 }}
//                   >
//                     {word.slice(1)}
//                   </motion.span>
//                 </div>
//               ))}
//             </motion.div>
//           )}

//           {showCAP && (
//             <motion.div className="text-4xl font-bold">
//               {finalIdeaCap.map((char, i) => (
//                 <motion.span
//                   key={i}
//                   initial={{ filter: "blur(6px)", opacity: 0 }}
//                   animate={{ filter: "blur(0px)", opacity: 1 }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   {char}
//                 </motion.span>
//               ))}
//             </motion.div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default IdeaAnimation;



import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const IdeaAnimation = () => {
  const [ideaText, setIdeaText] = useState<string[]>([]);
  const [step, setStep] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [segmentIndex, setSegmentIndex] = useState(0);
  const [charInSegment, setCharInSegment] = useState(0);
  const [changeLine, setChangeLine] = useState<string>("");
  const [replaceSolutionWithIdea, setReplaceSolutionWithIdea] = useState(false);
  const [startCapTransition, setStartCapTransition] = useState(false);
  const [showCAP, setShowCAP] = useState(false);
  const [finalIdeaCap, setFinalIdeaCap] = useState<string[]>([]);
  const [hideAll, setHideAll] = useState(false);

  const fullIdeaText = "IDEA IS SOLUTION";
  const segments = ["CHANGE", " + ACTION", " + PURPOSE"];
  const finalText = "IDEA IS CAP";

  useEffect(() => {
    if (step === 0 && charIndex < fullIdeaText.length) {
      const timeout = setTimeout(() => {
        setIdeaText((prev) => [...prev, fullIdeaText[charIndex]]);
        setCharIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
    if (step === 0 && charIndex === fullIdeaText.length) {
      const timeout = setTimeout(() => setStep(1), 2000);
      return () => clearTimeout(timeout);
    }

    if (step === 1 && segmentIndex < segments.length) {
      if (charInSegment < segments[segmentIndex].length) {
        const timeout = setTimeout(() => {
          setChangeLine((prev) => prev + segments[segmentIndex][charInSegment]);
          setCharInSegment((prev) => prev + 1);
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setSegmentIndex((prev) => prev + 1);
          setCharInSegment(0);
        }, 3000);
        return () => clearTimeout(timeout);
      }
    }

    if (segmentIndex === segments.length && !replaceSolutionWithIdea) {
      const timeout = setTimeout(() => setReplaceSolutionWithIdea(true), 2000);
      return () => clearTimeout(timeout);
    }

    if (replaceSolutionWithIdea && !startCapTransition) {
      const timeout = setTimeout(() => setStartCapTransition(true), 2000);
      return () => clearTimeout(timeout);
    }

    if (startCapTransition && !showCAP) {
      const timeout = setTimeout(() => setShowCAP(true), 3000);
      return () => clearTimeout(timeout);
    }

    if (showCAP && finalIdeaCap.length < finalText.length) {
      const timeout = setTimeout(() => {
        setFinalIdeaCap((prev) => [...prev, finalText[finalIdeaCap.length]]);
      }, 120);
      return () => clearTimeout(timeout);
    }

    if (finalIdeaCap.length === finalText.length && !hideAll) {
      const timeout = setTimeout(() => setHideAll(true), 1000);
      return () => clearTimeout(timeout);
    }
  }, [step, charIndex, segmentIndex, charInSegment, replaceSolutionWithIdea, startCapTransition, showCAP, finalIdeaCap, hideAll]);

  const capWords = ["CHANGE", "ACTION", "PURPOSE"];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white font-mono space-y-6">
      {!hideAll && step === 0 && (
        <motion.div className="text-4xl font-bold">
          {ideaText.map((char, i) => (
            <motion.span
              key={i}
              initial={{ filter: "blur(6px)", opacity: 0 }}
              animate={{ filter: "blur(0px)", opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {char}
            </motion.span>
          ))}
        </motion.div>
      )}

      {!hideAll && step >= 1 && (
        <div className="flex flex-col items-center space-y-4 text-4xl font-bold">
          <AnimatePresence mode="wait">
            <motion.div key={replaceSolutionWithIdea ? "idea" : "solution"}>
              <motion.span
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
              >
                {replaceSolutionWithIdea ? "IDEA IS" : "SOLUTION IS"}
              </motion.span>
            </motion.div>
          </AnimatePresence>

          {!startCapTransition && (
            <motion.div className="text-blue-400">
              {changeLine}
            </motion.div>
          )}

          {startCapTransition && !showCAP && (
            <motion.div className="flex text-blue-400 text-4xl font-bold">
              {capWords.map((word, i) => (
                <motion.div key={i} className="mr-4 flex">
                  <motion.span
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="font-bold"
                  >
                    {word[0]}
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 0 }}
                    transition={{ duration: 1, delay: i * 0.5 }}
                  >
                    {word.slice(1)}
                  </motion.span>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      )}

      {hideAll && (
        <motion.div className="text-4xl font-bold">
          {finalIdeaCap.map((char, i) => (
            <motion.span
              key={i}
              initial={{ filter: "blur(6px)", opacity: 0 }}
              animate={{ filter: "blur(0px)", opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {char}
            </motion.span>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default IdeaAnimation;
