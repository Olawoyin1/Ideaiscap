// Navbar.tsx
import { useEffect, useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
// import { IoMenu } from "react-icons/io5";
import { GrClose } from "react-icons/gr";
import NavSectionContent from "./NavSectionContent";
// import { Link } from "react-router-dom";

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

const navItems = [
  { name: "LAST GENERATION", key: "last-generation" },
//   { name: "IDEA IS CAP", key: "ideaiscapital" },
{ name: "OUR PURPOSE", key: "purpose" },
{ name: "JOURNEY", key: "journey" },
//   { name: "THE EDITOR", key: "editor" },
//   { name: "CONTRIBUTORS", key: "contributors" },
//   { name: "JOIN THE MOVEMENT", key: "movement" },
  { name: "FILOSOFI", key: "filosofi" },
  { name: "SOSIOLOJI", key: "sosioloji" },
  { name: "CONNECT", key: "connect" },
];
interface NavbarProps {
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar: React.FC<NavbarProps> = ({ menuOpen, setMenuOpen }) =>  {
//   const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const handleNavClick = (key: string) => {
    setActiveSection(key); // opens content
  };

const closeSection = () => {
    setActiveSection(null); // closes content
  };

  useEffect(() => {
  if (menuOpen) {
    document.body.style.overflow = "hidden"; // disable scroll
  } else {
    document.body.style.overflow = ""; // restore scroll
  }

  // Cleanup when unmounting
  return () => {
    document.body.style.overflow = "";
  };
}, [menuOpen]);
  return (
    <nav className="w-full z-50 relative">
      

      <AnimatePresence>
        {menuOpen  && (
          <motion.div
            className="fixed inset-0 bg-white z-40 flex items-center justify-center"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            {/* Close Icon */}
            <div
              className="absolute top-5 right-5 text-4xl cursor-pointer z-50"
              onClick={() => setMenuOpen(false)}
            >
              <GrClose color="#000000" />
            </div>

            {/* Nav Items */}
            <motion.ul
              className="w-full text-xl sm:text-3xl space-y-5 font-light text-center"
              variants={containerVariant}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              {navItems.map((item, index) => (
                <motion.li key={item.key} variants={itemVariant}>
                  <button
                    onClick={() => handleNavClick(item.key)}
                    className={`hover:text-blue-400 tracking-[3px] cursor-pointer text-black transition ${
                      index === 0
                        ? "text-2xl md:text-4xl font-bold"
                        : "text-xl font-light"
                    }`}
                  >
                    {item.name}
                  </button>
                  {item.name === "LAST GENERATION" && (
                    <div className="h-px w-[80%]  md:w-130 mx-auto bg-black/20 mt-9" />
                  )}
                  {item.name === "JOIN THE MOVEMENT" && (
                    <div className="h-px w-[80%]  md:w-80 mx-auto bg-black/20 mt-9" />
                  )}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Slide-Up Section Content */}
      <AnimatePresence>
        {activeSection && (
          <NavSectionContent section={activeSection} onClose={closeSection} />
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
