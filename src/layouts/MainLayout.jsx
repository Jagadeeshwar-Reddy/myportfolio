import React from 'react';
import { Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';

// Components
import Navbar from '@components/Navbar';
import Footer from '@components/Footer';

const pageVariants = {
    initial: {
        opacity: 0,
        y: 20,
    },
    animate: {
        opacity: 1,
        y: 0,
    },
    exit: {
        opacity: 0,
        y: -20,
    },
};

const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.5,
};

function MainLayout() {
    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-gray-50">
            <Navbar />
            <motion.main
                className="flex-grow pt-20"
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageVariants}
                transition={pageTransition}
            >
                <Outlet />
            </motion.main>
            <Footer />
        </div>
    );
}

export default MainLayout; 