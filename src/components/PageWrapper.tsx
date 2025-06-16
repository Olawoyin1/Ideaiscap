import { motion, Variants } from "framer-motion";
import type { ReactNode, FC } from "react";
import { useMemo } from "react";

const duration = 0.6;
const ease = "easeInOut";

const variantsList: Variants[] = [
  {
    initial: {
      opacity: 0,
      x: 70,
      transition: { duration, ease },
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration, ease },
    },
    exit: {
      opacity: 0,
      x: -70,
      transition: { duration, ease },
    },
  },
  {
    initial: {
      opacity: 0,
      y: 50,
      transition: { duration, ease },
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration, ease },
    },
    exit: {
      opacity: 0,
      y: -50,
      transition: { duration, ease },
    },
  },
  {
    initial: {
      opacity: 0,
      x: -100,
      transition: { duration, ease },
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration, ease },
    },
    exit: {
      opacity: 0,
      x: 100,
      transition: { duration, ease },
    },
  },
  {
    initial: {
      opacity: 0,
      y: -100,
      transition: { duration, ease },
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration, ease },
    },
    exit: {
      opacity: 0,
      y: 100,
      transition: { duration, ease },
    },
  },
  {
    initial: {
      opacity: 0,
      transition: { duration, ease },
    },
    animate: {
      opacity: 1,
      transition: { duration, ease },
    },
    exit: {
      opacity: 0,
      transition: { duration, ease },
    },
  },
];

interface PageWrapperProps {
  children: ReactNode;
}

const PageWrapper: FC<PageWrapperProps> = ({ children }) => {
  const randomVariant = useMemo(
    () => variantsList[Math.floor(Math.random() * variantsList.length)],
    []
  );

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={randomVariant}
    >
      {children}
    </motion.div>
  );
};

export default PageWrapper;
