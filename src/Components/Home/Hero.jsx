import React from 'react';
import { motion } from 'framer-motion';
import HeroAvatar from '../../assets/Avatar.jpg';
import { FiGithub, FiDownload } from 'react-icons/fi';
import { BiLogoGmail } from 'react-icons/bi';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  const generateGmailComposeUrl = (to, subject, body) => {
    const baseUrl = 'https://mail.google.com/mail/u/0/';
    const params = new URLSearchParams({
      view: 'cm',
      fs: '1',
      tf: '1',
      to: to,
      su: subject,
      body: body,
    });
    return `${baseUrl}?${params.toString()}`;
  };

  // Email compose configuration
  const emailConfig = {
    to: 'farhanmahbubrafi@gmail.com',
    subject: "Let's Work Together - Portfolio Inquiry",
    body: `Hey Rafi,

I found your portfolio and would love to connect! 

I'm interested in discussing:
- Web development projects
- Collaboration opportunities
- Your MERN stack expertise

Looking forward to hearing from you!

Best regards`,
  };

  const gmailComposeUrl = generateGmailComposeUrl(
    emailConfig.to,
    emailConfig.subject,
    emailConfig.body,
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  const avatarVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.section
      className="flex w-full flex-col items-center justify-between gap-12 px-2 py-16 md:gap-6 lg:flex-row"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Left Side: Intro Text & Links */}
      <motion.div
        className="flex w-full flex-col items-center gap-5 text-center text-white lg:w-1/2 lg:items-start lg:text-left"
        variants={containerVariants}
      >
        <motion.p className="text-lg text-gray-400" variants={itemVariants}>
          Hi, my name is
        </motion.p>
        <motion.h1
          className="text-4xl leading-tight font-bold md:text-5xl lg:text-6xl"
          variants={itemVariants}
        >
          MD Rafi
        </motion.h1>
        <motion.h2
          className="text-3xl leading-tight font-bold text-cyan-400 md:text-4xl"
          variants={itemVariants}
        >
          MERN Stack Developer
        </motion.h2>
        <motion.p
          className="mt-2 max-w-md text-gray-300"
          variants={itemVariants}
        >
          I build beautiful, interactive, and responsive web applications from
          concept to completion, turning ideas into a digital reality.
        </motion.p>

        {/* Socials & Resume Button (FOR DESKTOP) */}
        <motion.div
          className="mt-6 hidden items-center justify-center gap-4 lg:flex lg:justify-start"
          variants={itemVariants}
          whileTap={{ scale: 0.95 }}
        >
          <a
            href="/Resume_MD_Rafi.pdf"
            download="/Resume_MD_Rafi.pdf"
            className="flex h-12 items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-4 text-sm font-semibold text-white backdrop-blur-md transition duration-300 hover:scale-105 hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:text-cyan-400"
          >
            <FiDownload />
            Resume
          </a>
          <div className="flex items-center justify-center gap-4">
            <a
              href="https://github.com/rafirono13"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-xl text-white backdrop-blur-md transition duration-300 hover:scale-110 hover:text-cyan-400"
              aria-label="GitHub Profile"
            >
              <FiGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/md-rafi-mern"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-xl text-white backdrop-blur-md transition duration-300 hover:scale-110 hover:text-cyan-400"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin />
            </a>
            <a
              href={gmailComposeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-xl text-white backdrop-blur-md transition duration-300 hover:scale-110 hover:text-cyan-400"
              aria-label="Send Email via Gmail"
              title="Open Gmail compose window"
            >
              <BiLogoGmail />
            </a>
            <a
              href="https://facebook.com/md.rafi669"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-xl text-white backdrop-blur-md transition duration-300 hover:scale-110 hover:text-cyan-400"
              aria-label="Facebook Profile"
            >
              <FaFacebook />
            </a>
          </div>
        </motion.div>
      </motion.div>

      {/* Right Side: Avatar Banner */}
      <motion.div
        className="relative flex w-full max-w-sm items-center justify-center lg:w-1/2 lg:max-w-none"
        variants={avatarVariants}
      >
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-xl">
          <img
            src={HeroAvatar}
            alt="Rafi Avatar"
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute right-4 bottom-4 left-4 rounded-lg border border-white/20 bg-white/10 p-3 text-xs text-white shadow-md backdrop-blur-md md:text-sm">
            "Transforming ideas into interactive digital experiences with the
            MERN stack."
          </div>
        </div>
        <div className="absolute -z-10 h-[80%] w-[80%] rounded-full bg-cyan-500/20 blur-3xl"></div>
      </motion.div>

      {/* Socials & Resume Button (FOR MOBILE) */}
      <motion.div
        className="mt-6 flex w-full flex-col items-center gap-4 lg:hidden"
        variants={itemVariants}
      >
        <a
          href="/Rafi_Resume.pdf"
          download="/Rafi_Resume.pdf"
          className="flex h-12 w-full max-w-xs items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-4 text-sm font-semibold text-white backdrop-blur-md transition duration-300 hover:scale-105 hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:text-cyan-400"
        >
          <FiDownload />
          Resume
        </a>
        <div className="flex items-center justify-center gap-4">
          <a
            href="https://github.com/rafirono13"
            h
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-xl text-white backdrop-blur-md transition duration-300 hover:scale-110 hover:text-cyan-400"
            aria-label="GitHub Profile"
          >
            <FiGithub />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-xl text-white backdrop-blur-md transition duration-300 hover:scale-110 hover:text-cyan-400"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin />
          </a>
          <a
            href={gmailComposeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-xl text-white backdrop-blur-md transition duration-300 hover:scale-110 hover:text-cyan-400"
            aria-label="Send Email via Gmail"
            title="Open Gmail compose window"
          >
            <BiLogoGmail />
          </a>
          <a
            href="https://facebook.com/md.rafi669"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-xl text-white backdrop-blur-md transition duration-300 hover:scale-110 hover:text-cyan-400"
            aria-label="Facebook Profile"
          >
            <FaFacebook />
          </a>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
