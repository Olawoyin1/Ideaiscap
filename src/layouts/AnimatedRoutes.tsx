// AnimatedRoutes.tsx
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { lazy, Suspense } from "react";
import PageWrapper from "../components/PageWrapper";

// Lazy loaded pages
const Home = lazy(() => import("../pages/Home"));
const Purpose = lazy(() => import("../pages/Purpose"));
const Generation = lazy(() => import("../pages/Generation"));
const Filosofi = lazy(() => import("../pages/Filosofi"));
const Socioloji = lazy(() => import("../pages/Socioloji"));
const Connect = lazy(() => import("../pages/Connect"));

export default function AnimatedRoutes() {
  const location = useLocation();

  return (
    <Suspense
      fallback={
        <div className="fixed inset-0 flex bg-black items-center justify-center text-white text-xl">
          Loading...
        </div>
      }
    >
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
          <Route path="/purpose" element={<PageWrapper><Purpose /></PageWrapper>} />
          <Route path="/last-generation" element={<PageWrapper><Generation /></PageWrapper>} />
          <Route path="/filosofi" element={<PageWrapper><Filosofi /></PageWrapper>} />
          <Route path="/socioloji" element={<PageWrapper><Socioloji /></PageWrapper>} />
          <Route path="/connect" element={<PageWrapper><Connect /></PageWrapper>} />
        </Routes>
      </AnimatePresence>
    </Suspense>
  );
}
