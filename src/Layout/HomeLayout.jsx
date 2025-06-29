import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Common/Navbar';

const HomeLayout = () => {
  return (
    <div className="mx-auto min-h-screen w-10/12">
      <nav className="w-full">
        <Navbar></Navbar>
      </nav>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default HomeLayout;
