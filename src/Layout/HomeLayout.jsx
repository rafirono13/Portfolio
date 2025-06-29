import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Common/Navbar';

const HomeLayout = () => {
  return (
    <div className="mx-auto min-h-screen w-10/12">
      <nav className="fixed z-[100] mx-auto w-10/12">
        <Navbar></Navbar>
      </nav>
      <div className="mx-auto md:w-10/12">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default HomeLayout;
