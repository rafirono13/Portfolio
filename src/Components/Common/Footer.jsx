import React from 'react';
import { motion } from 'framer-motion';
import { FaReact } from 'react-icons/fa';
import { SiTailwindcss, SiVercel } from 'react-icons/si';
import Threads from './../Custom/Threads';

const Footer = () => {
  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <div className="relative w-full overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <Threads
          color={[0.13, 0.83, 0.93]}
          amplitude={5}
          distance={0.5}
          enableMouseInteraction={true}
        />
      </div>

      {/* Content Container (constrained width) */}
      <motion.footer
        className="relative z-10 mx-auto w-11/12 rounded-t-2xl border-x border-t border-white/10 bg-white/5 p-8 text-center text-white md:w-10/12 lg:w-9/12"
        variants={footerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="flex flex-col items-center gap-8">
          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-6 text-gray-300">
            <a href="#about" className="transition hover:text-cyan-400">
              About
            </a>
            <a href="#projects" className="transition hover:text-cyan-400">
              Projects
            </a>
            <a href="#skills" className="transition hover:text-cyan-400">
              Skills
            </a>
            <a href="#contact" className="transition hover:text-cyan-400">
              Contact
            </a>
          </div>

          {/* Built With Section */}
          <div className="w-full border-t border-white/10 pt-8">
            <h3 className="mb-4 text-sm tracking-widest text-gray-500 uppercase">
              Built With
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-8">
              <div className="flex items-center gap-2">
                <FaReact className="text-sky-400" size={20} />
                <span>React</span>
              </div>
              <div className="flex items-center gap-2">
                <SiTailwindcss className="text-cyan-400" size={20} />
                <span>Tailwind CSS</span>
              </div>
              <div className="flex items-center gap-2">
                <SiVercel className="text-white" size={18} />
                <span>Vercel</span>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <p className="mt-4 text-sm text-gray-500">
            &copy; {new Date().getFullYear()} MD Rafi. All Rights Reserved.
          </p>
        </div>
      </motion.footer>
    </div>
  );
};

export default Footer;
