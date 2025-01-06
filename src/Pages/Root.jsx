import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import { ToastContainer } from 'react-toastify';

const Root = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>
            <ToastContainer/>
        </div>
    );
};

export default Root;