import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Home from '../Header/Home/Home';
import Navbar from '../Header/Navbar/Navbar';

export default function RootLayOut() {
  return (
    <>
      <Navbar />
      <Outlet></Outlet>
      <Footer />
    </>
  );
}
