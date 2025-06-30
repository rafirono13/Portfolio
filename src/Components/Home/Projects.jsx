import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiTerminal } from 'react-icons/fi';
import SpotlightCard from '../Custom/SpotlightCard';

// Project image imports
import BillEase from '../../assets/BillEase.png';
import HobbyHub from '../../assets/HobbyHub.png';
import Ridezy from '../../assets/Ridezy.png';

const projectData = [
  {
    title: 'Ridezy',
    image: Ridezy,
    description:
      'A full-stack ride-sharing platform connecting drivers and passengers with real-time tracking and booking features.',
    liveLink: 'https://ridezy-f8c9c.web.app/',
    githubLink: 'https://github.com/rafirono13/Ridezy',
  },
  {
    title: 'Hobby Hub',
    image: HobbyHub,
    description:
      'A social platform for hobbyists to connect, share projects, and discover new interests in a vibrant community setting.',
    liveLink: 'https://hobby-hub-1549a.web.app/',
    githubLink: 'https://github.com/rafirono13/Hobby-Hub',
  },
  {
    title: 'BillEase',
    image: BillEase,
    description:
      'A streamlined invoicing and billing application designed for freelancers and small businesses to manage clients and payments.',
    liveLink: 'https://react-bill-98a27.web.app/',
    githubLink: 'https://github.com/rafirono13/Bill-Ease',
  },
  {
    title: 'MERN CLI Setup',
    image: null,
    description:
      'A command-line tool to boilerplate a MERN stack application instantly, saving hours of setup time.',
    liveLink: null,
    githubLink: 'https://github.com/rafirono13/MERN-CLI-Setup',
  },
];

const Projects = () => {
  // Animation variants for the main container
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
      id="projects"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <motion.h2
        className="text-center text-3xl font-bold text-white"
        variants={itemVariants}
      >
        <span className="text-cyan-400 drop-shadow-md">My Projects</span>
        <div className="mx-auto mt-2 h-1 w-28 rounded-full bg-white/10"></div>
      </motion.h2>

      {/* Projects Grid */}
      <motion.div
        className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2"
        variants={sectionVariants}
      >
        {projectData.map((project, index) => (
          <SpotlightCard key={index}>
            <div className="flex h-full flex-col">
              <div className="mb-4 h-70 overflow-hidden rounded-xl">
                {project.image ? (
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center rounded-xl bg-black/30">
                    <FiTerminal className="text-6xl text-cyan-400" />
                  </div>
                )}
              </div>
              <h3 className="text-2xl font-bold text-white">{project.title}</h3>
              <p className="mt-2 flex-grow text-gray-400">
                {project.description}
              </p>

              {/* Links */}
              <div className="mt-6 flex items-center gap-4">
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-sm text-white backdrop-blur-md transition-colors hover:bg-white/20"
                  >
                    <FiExternalLink />
                    Live Site
                  </a>
                )}
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-sm text-white backdrop-blur-md transition-colors hover:bg-white/20"
                >
                  <FiGithub />
                  GitHub
                </a>
              </div>
            </div>
          </SpotlightCard>
        ))}
      </motion.div>

      {/* More Projects Button */}
      <motion.div className="mt-16 text-center" variants={itemVariants}>
        <a
          href="https://github.com/rafirono13?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-full border border-white/20 bg-white/10 px-8 py-3 text-lg font-semibold text-white backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:shadow-cyan-500/20"
        >
          View All Projects on GitHub
        </a>
      </motion.div>
    </motion.div>
  );
};

export default Projects;
