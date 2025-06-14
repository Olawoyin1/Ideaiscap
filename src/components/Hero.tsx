
import { useEffect, useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { FiMenu } from 'react-icons/fi';




const keywords = ['CHANGE', 'ACTION', 'PURPOSE', 'SOLUTION'];
const typingSpeed = 200;
const deletingSpeed = 140;
const delayBetweenWords = 900;

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.4, ease: 'easeInOut' },
  },
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const bounceVariant: Variants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 20,
      duration: 1,
    },
  },
};

export default function Hero() {
  const [phase, setPhase] = useState<'overlay' | 'typingPrefix' | 'typingSuffix' | 'pause' | 'showFinal' | 'done'>('overlay');
  const [prefix, setPrefix] = useState('');
  const [suffix, setSuffix] = useState('');
  const [suffixIndex, setSuffixIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);


  const [lineCount, setLineCount] = useState(4);

  const prefixFull = 'IDEA IS ';
  const suffixList = ['...', ...keywords]; // SOLUTION is included here
  const finalSuffix = 'CAPITAL';



  useEffect(() => {
  const updateLineCount = () => {
    setLineCount(window.innerWidth < 640 ? 3 : 4); 
  };

  updateLineCount(); // Initial check
  window.addEventListener('resize', updateLineCount);
  return () => window.removeEventListener('resize', updateLineCount);
}, []);


  useEffect(() => {
    const interval = setInterval(() => setShowCursor((prev) => !prev), 500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => setPhase('typingPrefix'), 2800);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (phase !== 'typingPrefix') return;

    if (prefix.length < prefixFull.length) {
      const timeout = setTimeout(() => {
        setPrefix(prefixFull.slice(0, prefix.length + 1));
      }, typingSpeed);
      return () => clearTimeout(timeout);
    }

    setPhase('typingSuffix');
  }, [phase, prefix]);

  useEffect(() => {
    if (phase !== 'typingSuffix') return;

    const current = suffixList[suffixIndex];

    if (!isDeleting) {
      if (suffix.length < current.length) {
        const timeout = setTimeout(() => {
          setSuffix(current.slice(0, suffix.length + 1));
        }, typingSpeed);
        return () => clearTimeout(timeout);
      }

      const timeout = setTimeout(() => setIsDeleting(true), delayBetweenWords);
      return () => clearTimeout(timeout);
    }

    if (suffix.length > 0) {
      const timeout = setTimeout(() => {
        setSuffix(current.slice(0, suffix.length - 1));
      }, deletingSpeed);
      return () => clearTimeout(timeout);
    }

    setIsDeleting(false);

    if (suffixIndex + 1 < suffixList.length) {
      setSuffixIndex((i) => i + 1);
    } else {
      setPhase('pause');
      setShowCursor(false);
    }
  }, [phase, suffix, isDeleting, suffixIndex]);

  useEffect(() => {
    if (phase === 'pause') {
      const timeout = setTimeout(() => {
        setPhase('showFinal');
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [phase]);

  useEffect(() => {
    if (phase === 'showFinal') {
      const timeout = setTimeout(() => setPhase('done'), 1200);
      return () => clearTimeout(timeout);
    }
  }, [phase]);

  return (
    <section
      className="relative min-h-screen bg-black text-white flex items-center justify-center px-8 overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: 'url("../../Images/hero.jpg")' }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-40 z-0" />

      {/* Falling Lines */}
<div className="absolute container inset-0 z-0 pointer-events-none">
  <div className="relative h-full w-full flex justify-between px-20">
    {Array.from({ length: lineCount }, (_, idx) => (
      <motion.div
        key={idx}
        className="w-px bg-gray-400 opacity-20 h-full"
        initial={{ y: '-100%' }}
        animate={{ y: '100%' }}
        transition={{
          repeat: Infinity,
          duration: 2.5 + idx * 0.3,
          ease: 'linear',
          delay: idx * 0.5,
        }}
      />
    ))}
  </div>
</div>


      {/* Overlay Slide */}
      <AnimatePresence>
        {phase === 'overlay' && (
          <motion.div
            className="absolute inset-0 bg-black z-50"
            initial={{ x: '0%' }}
            animate={{ x: '100%' }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2, ease: 'easeInOut' }}
          />
        )}
      </AnimatePresence>

      {/* Typing Header */}
      <div className="text-center max-w-2xl z-10">
        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl font-semibold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2 }}
        >
          {phase === 'showFinal' || phase === 'done' ? (
            <>
              <span>IDEA IS </span>
              <motion.span
                className="text-white inline-block"
                variants={bounceVariant}
                initial="hidden"
                animate="visible"
              >
                {finalSuffix}
              </motion.span>
            </>
          ) : (
            <>
              <span>{prefix}</span>
              <span className="text-blue-800">{suffix}</span>
              {showCursor && <span className="text-blue-700">|</span>}
            </>
          )}
        </motion.h1>

        {/* Final Content */}
        {phase === 'done' && (
          <motion.div
            className="mt-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="flex items-center justify-center text-xl font-semibold gap-2 sm:gap-4 md:text-2xl text-gray-300 text-center"
              variants={fadeInUp}
            >
              <p>Innovative</p>
              <p>|</p>
              <p>Imaginative</p>
              <p>|</p>
              <p>Creative</p>
            </motion.div>

            {/* Right Sidebar */}
            <motion.aside
              className="absolute hidden sm:flex right-0 top-0 h-screen w-20 bg-black/30  flex-col items-center py-6"
              variants={fadeInUp}
            >
              <motion.div className="mb-4" variants={fadeInUp}>
                <FiMenu className="text-white text-2xl cursor-pointer" />
              </motion.div>
              <motion.nav
                className="flex flex-col justify-evenly flex-1 items-center text-white text-xs tracking-wide font-semibold"
                variants={containerVariants}
              >
                {['Facebook', 'X', 'Instagram', 'LinkedIn', 'TikTok'].map((name) => (
                  <motion.a
                    key={name}
                    href="/"
                    className="rotate-[-90deg] hover:text-blue-400 transition"
                    variants={fadeInUp}
                  >
                    {name}
                  </motion.a>
                ))}
              </motion.nav>
            </motion.aside>

            {/* Bottom Button */}
            <motion.div className="absolute hidden sm:block bottom-10 left-10" variants={fadeInUp}>
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
