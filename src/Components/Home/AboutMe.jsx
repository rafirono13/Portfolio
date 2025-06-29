import React from 'react';
import { FiCode, FiCpu, FiBookOpen } from 'react-icons/fi';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'; // For the quote!
import { motion } from 'framer-motion';

const AboutMe = () => {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <motion.div
      className="py-20"
      id="about"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.h2
        className="text-3xl font-bold text-white"
        variants={itemVariants}
      >
        <span className="text-cyan-400 drop-shadow-md">What I do?</span>
        <div className="mt-2 h-1 w-28 rounded-full bg-white/10"></div>
      </motion.h2>

      <section className="mt-8 flex flex-col gap-12 md:flex-row md:gap-16">
        {/* Left: Accordion */}
        <motion.div
          className="flex w-full flex-col md:w-1/2"
          variants={itemVariants}
        >
          {/* Collapse for the accordion */}
          <div className="join-vertical join w-full bg-transparent">
            {/* Accordion Item 1 */}
            <div className="collapse-arrow collapse join-item border border-white/20 bg-white/5">
              <input type="radio" name="my-accordion-1" defaultChecked />
              <div className="collapse-title flex items-center gap-3 px-5 py-4 text-base font-semibold text-white md:text-lg">
                <FiCode /> Web Development
              </div>
              <div className="collapse-content px-5 text-sm text-gray-300">
                <ul className="list-inside list-disc space-y-2 pb-4">
                  <li>
                    Crafting responsive MERN stack applications that feel alive.
                  </li>
                  <li>
                    Designing modern UI/UX with Tailwind CSS & Framer Motion.
                  </li>
                  <li>
                    Building robust backend APIs with Node.js, Express, and
                    MongoDB.
                  </li>
                </ul>
              </div>
            </div>

            {/* Accordion Item 2 */}
            <div className="collapse-arrow collapse join-item border border-white/20 bg-white/5">
              <input type="radio" name="my-accordion-1" />
              <div className="collapse-title flex items-center gap-3 px-5 py-4 text-base font-semibold text-white md:text-lg">
                <FiCpu /> AI Prompt Engineering
              </div>
              <div className="collapse-content px-5 text-sm text-gray-300">
                <ul className="list-inside list-disc space-y-2 pb-4">
                  <li>
                    Architecting prompt systems for generative AI like ChatGPT.
                  </li>
                  <li>
                    Automating workflows by integrating AI into complex scripts.
                  </li>
                  <li>
                    Exploring the frontiers of LLMs for creative
                    problem-solving.
                  </li>
                </ul>
              </div>
            </div>

            {/* Accordion Item 3 */}
            <div className="collapse-arrow collapse join-item border border-white/20 bg-white/5">
              <input type="radio" name="my-accordion-1" />
              <div className="collapse-title flex items-center gap-3 px-5 py-4 text-base font-semibold text-white md:text-lg">
                <FiBookOpen /> Research & Learning
              </div>
              <div className="collapse-content px-5 text-sm text-gray-300">
                <ul className="list-inside list-disc space-y-2 pb-4">
                  <li>
                    Building a "second brain" with a personal knowledge base in
                    Obsidian.
                  </li>
                  <li>
                    Diving deep into documentation to master new technologies.
                  </li>
                  <li>
                    Embracing constant learning as a core part of my developer
                    identity.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right: Paragraph & Quote */}
        <motion.div
          className="flex w-full flex-col justify-center gap-8 text-white md:w-1/2"
          variants={itemVariants}
        >
          {/* Text about me  */}
          <p className="text-start text-base font-light text-gray-300 md:text-lg">
            I started my journey of deep research and self-learning back in 10th
            grade. Since then, I’ve been exploring beyond just writing code —
            diving into the <span className="font-bold">why</span> and
            <span className="font-bold"> how</span> behind everything. As a
            developer, I don’t want to just build sites like a factory worker. I
            want to shape the future of web development — blending art, logic,
            and AI as my ultimate power tools.
          </p>

          {/* Quote Card */}
          <div className="relative rounded-xl border border-white/10 p-3 shadow-xl shadow-cyan-500/10">
            <FaQuoteLeft
              className="absolute top-3 left-3 text-4xl text-cyan-400/20"
              aria-hidden="true"
            />
            <p className="relative z-10 text-center text-xl font-medium text-white italic drop-shadow-[0_0_10px_rgba(56,189,248,0.6)] md:text-2xl">
              Patience, appreciation, and acceptance is the key.
            </p>
            <FaQuoteRight
              className="absolute right-3 bottom-3 text-4xl text-cyan-400/20"
              aria-hidden="true"
            />
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default AboutMe;
