import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMapPin, FiSend } from 'react-icons/fi';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // In a real application, you would handle form submission here,
    // e.g., send data to a backend API using Axios or fetch.
    // For now, we'll simulate a successful submission.

    try {
      // Simulate an API call
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate network delay

      // You can access form data like this:
      const form = e.target;
      const formData = new FormData(form);
      const name = formData.get('name');
      const email = formData.get('email');
      const message = formData.get('message');

      console.log('Form Data:', { name, email, message });

      form.reset();
      Swal.fire({
        toast: true,
        position: 'top-end',
        icon: 'success',
        title: 'Message sent successfully!',
        showConfirmButton: false,
        timer: 3000,
        background: 'rgba(17, 25, 40, 0.8)',
        color: '#fff',
        timerProgressBar: true,
        customClass: {
          popup: 'backdrop-blur-md rounded-lg shadow-xl',
        },
      });
    } catch (error) {
      console.error('Form submission error:', error);
      Swal.fire({
        toast: true,
        position: 'top-end',
        icon: 'error',
        title: 'Failed to send message. Please try again.',
        showConfirmButton: false,
        timer: 3000,
        background: 'rgba(30, 30, 30, 0.9)',
        color: '#fff',
        timerProgressBar: true,
        customClass: {
          popup: 'backdrop-blur-md rounded-lg shadow-xl',
        },
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section
      id="contact"
      className="py-20"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="flex flex-col lg:flex-row lg:gap-16">
        {/* Left Side: Info */}
        <motion.div
          className="mb-12 w-full lg:mb-0 lg:w-2/5"
          variants={itemVariants}
        >
          <h2 className="text-xl font-semibold text-gray-400">Let's talk</h2>
          <h3 className="mt-1 text-4xl font-bold text-cyan-400 drop-shadow-md">
            Contact me
          </h3>
          <p className="mt-4 text-gray-300">
            Have a question or a project in mind? I'm always open to discussing
            new opportunities and creative ideas. Feel free to reach out.
          </p>
          <div className="mt-6 flex items-center gap-3 text-gray-300">
            <FiMapPin className="text-cyan-400" />
            <span>Dhaka, Dhanmondi</span>
          </div>
        </motion.div>

        {/* Right Side: Form */}
        <motion.div className="w-full lg:w-3/5" variants={itemVariants}>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Form Fields */}
            <div>
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your Name"
                required
                className="w-full rounded-lg border border-white/20 bg-white/5 p-3 text-white placeholder-gray-500 transition-all focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50"
              />
            </div>

            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your Email"
                required
                className="w-full rounded-lg border border-white/20 bg-white/5 p-3 text-white placeholder-gray-500 transition-all focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50"
              />
            </div>

            <div>
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows="5"
                placeholder="Your Message"
                required
                className="w-full rounded-lg border border-white/20 bg-white/5 p-3 text-white placeholder-gray-500 transition-all focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="group flex w-full items-center justify-center gap-2 rounded-lg bg-cyan-500/80 px-6 py-3 font-semibold text-black transition-all duration-300 hover:bg-cyan-500 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
              <FiSend className="-mt-px transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </form>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
