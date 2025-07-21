import React from 'react';
import { motion } from 'framer-motion';
import LetterGlitch from '../Custom/LetterGlitch';
import InfiniteScroll from '../Custom/InfiniteScroll';
import { FaGithub, FaNodeJs, FaReact, FaStripe } from 'react-icons/fa';
import {
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiReactrouter,
  SiTailwindcss,
} from 'react-icons/si';

const Skills = () => {
  const skillsList = [
    {
      content: (
        <div className="flex items-center gap-3">
          <FaReact className="text-cyan-400" size={30} /> React
        </div>
      ),
    },
    {
      content: (
        <div className="flex items-center gap-3">
          <FaNodeJs className="text-green-400" size={30} /> Node.js
        </div>
      ),
    },
    {
      content: (
        <div className="flex items-center gap-3">
          <SiExpress className="text-white" size={28} /> Express.js
        </div>
      ),
    },
    {
      content: (
        <div className="flex items-center gap-3">
          <SiMongodb className="text-green-500" size={30} /> MongoDB
        </div>
      ),
    },
    {
      content: (
        <div className="flex items-center gap-3">
          <SiJavascript className="text-yellow-400" size={28} /> JavaScript
        </div>
      ),
    },
    {
      content: (
        <div className="flex items-center gap-3">
          <SiTailwindcss className="text-sky-400" size={30} /> Tailwind CSS
        </div>
      ),
    },
    {
      content: (
        <div className="flex items-center gap-3">
          <SiFirebase className="text-orange-400" size={30} /> Firebase
        </div>
      ),
    },
    {
      content: (
        <div className="flex items-center gap-3">
          <FaGithub className="text-white" size={30} /> GitHub
        </div>
      ),
    },
    {
      content: (
        <div className="flex items-center gap-3">
          <FaStripe className="text-purple-400" size={30} /> Stripe
        </div>
      ),
    },
    {
      content: <div className="flex items-center gap-3 text-white">Axios</div>,
    },
    {
      content: (
        <div className="flex items-center gap-3 text-white">TanStack Query</div>
      ),
    },
    {
      content: (
        <div className="flex items-center gap-3">
          <SiReactrouter className="text-rose-400" size={30} /> React Router
        </div>
      ),
    },
  ];

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <motion.section
      id="skills"
      className="py-20"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16">
        {/* Left Side: Glitch Effect*/}
        <motion.div
          className="relative mb-10 h-80 w-full overflow-hidden rounded-2xl lg:mb-0 lg:h-[500px] lg:w-1/2"
          variants={itemVariants}
        >
          <LetterGlitch />
        </motion.div>

        {/* Right Side: Infinite Scroll*/}
        <motion.div
          className="h-80 w-full text-white lg:h-[500px] lg:w-1/2"
          variants={itemVariants}
        >
          <InfiniteScroll
            items={skillsList}
            speed={0.4}
            direction="up"
            itemMinHeight={80}
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Skills;
