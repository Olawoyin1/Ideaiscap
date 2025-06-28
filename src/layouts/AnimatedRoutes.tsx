// AnimatedRoutes.tsx
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import PageWrapper from "../components/PageWrapper";

// Direct imports (no lazy loading)
import Home from "../pages/Home";
import Purpose from "../pages/Purpose";
import Generation from "../pages/Generation";
import Filosofi from "../pages/Filosofi";
import Socioloji from "../pages/Socioloji";
import Connect from "../pages/Connect";
import Journey from "../components/Journey";

export default function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <Home />
            </motion.div>
          }
        />
        <Route
          path="/journey"
          element={<PageWrapper><Journey /></PageWrapper>}
        />
        <Route
          path="/purpose"
          element={<PageWrapper><Purpose /></PageWrapper>}
        />
        <Route
          path="/last-generation"
          element={<PageWrapper><Generation /></PageWrapper>}
        />
        <Route
          path="/filosofi"
          element={<PageWrapper><Filosofi /></PageWrapper>}
        />
        <Route
          path="/socioloji"
          element={<PageWrapper><Socioloji /></PageWrapper>}
        />
        <Route
          path="/connect"
          element={<PageWrapper><Connect /></PageWrapper>}
        />
      </Routes>
    </AnimatePresence>
  );
}
