import { motion, Variants } from "framer-motion";

const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const Journey = () => {
  return (
    <motion.div
      className="py-17 min-h-[100vh] mx-auto box-border"
      initial="hidden"
      id="journey"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={container}
    >
      <div className="container">
        {/* Header */}
        <motion.div className="mb-[30px] p-0 box-border" variants={fadeInUp}>
          <h2 className="text-2xl md:text-4xl mb-2 font-medium leading-[37.4px] text-[#292b2c]">
            JOURNEY
          </h2>
        </motion.div>

        {/* First Paragraph */}
        <motion.p className="text-justify text-xl my-0 mb-4 p-0 box-border" variants={fadeInUp}>
          <b className="font-bold m-0 p-0 box-border">Are you ready?</b>
        </motion.p>

        {/* Main Paragraph */}
        <motion.p className="text-justify  text-sm  md:text-lg my-0 mb-4 p-0 box-border" variants={fadeInUp}>
          Are you ready to build? Are you ready for solutions? Are you ready to change your behavior? Are
          you ready to be honorable? Are you ready to let go of your ego? Are you ready to create a
          community? Are you ready to stop blaming others for your difficulties? Are you ready to
          stop expecting solutions from the outside? Are you ready to sacrifice for a better future?
          Let’s get to it; we have no time to waste.
          We’ve been thinking about what’s next for us, our continent, our role in the world, and how the world
          perceives Africa. We’ve been thinking about solutions and the obstacles that hold us back. We’ve been
          thinking about the changes that need to happen to build a better society for future generations. Yes,
          we’ve been thinking a lot. It is said that the future belongs to those who prepare for it today.
          Are you ready?
        </motion.p>

        {/* New Mindset */}
        <motion.p className="text-justify text-xl my-0 mb-4 p-0 box-border" variants={fadeInUp}>
          <b className="font-bold m-0 p-0 box-border">New Mindset.</b>
        </motion.p>

        {/* Final Paragraph */}
        <motion.p className="text-justify text-sm  md:text-lg my-0 mb-4 p-0 box-border" variants={fadeInUp}>
          Think big, think ahead, think globally. Great achievements stem from great ideas. Africa requires
          bold, innovative concepts and a generation willing to take risks to bring them to life. Learning
          from past mistakes and adopting a systematic approach is essential. Only through this method can we
          attain remarkable outcomes. We need collaboration to create a better future. At Idea Is Capital, we
          are passionate about doing things correctly. Our values and vision focus on solutions. We are committed
          to rewriting the African narrative and rebuilding it together. We can develop a future that embodies
          dignity.
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Journey;
