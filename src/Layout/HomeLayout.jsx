import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from '../Components/Common/Navbar';
import Footer from '../Components/Common/Footer';
import Loader from '../Components/Common/Loader';

const HomeLayout = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-[#060010]">
      <AnimatePresence>{loading && <Loader />}</AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.5 }}
      >
        <div className="mx-auto min-h-screen w-10/12">
          <nav className="fixed z-[100] mx-auto w-10/12">
            <Navbar></Navbar>
          </nav>
          <div className="mx-auto md:w-10/12">
            <Outlet></Outlet>
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </motion.div>
    </div>
  );
};

export default HomeLayout;
