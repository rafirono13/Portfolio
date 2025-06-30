import React from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
  const loaderVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <motion.div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-[#060010]/50 backdrop-blur-lg"
      variants={loaderVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <span className="loading loading-lg loading-ring text-cyan-400"></span>
    </motion.div>
  );
};

export default Loader;
