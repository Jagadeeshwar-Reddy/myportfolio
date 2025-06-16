import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/contact', label: 'Contact' },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const menuRef = useRef(null);

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    // Handle escape key
    useEffect(() => {
        const handleEscape = (event) => {
            if (event.key === 'Escape') {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
        };
    }, [isOpen]);

    return (
        <header className="sticky top-0 z-50 w-full">
            <div className="relative">
                {/* Background with blur effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-slate-800 transition-opacity duration-300" />
                <div className="absolute inset-0 bg-slate-900/95 backdrop-blur-sm opacity-0 transition-opacity duration-300 [.scrolled_&]:opacity-100" />

                {/* Navbar content */}
                <nav className="relative">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between items-center h-20">
                            {/* Logo */}
                            <Link
                                to="/"
                                className="flex-shrink-0 focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded-lg p-1"
                                aria-label="Home"
                            >
                                <motion.h1
                                    className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent font-display"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Jagadeeshwar Reddy
                                </motion.h1>
                            </Link>

                            {/* Desktop Navigation */}
                            <div className="hidden md:block">
                                <div className="ml-10 flex items-center space-x-6">
                                    {navLinks.map((link) => (
                                        <NavLink
                                            key={link.path}
                                            to={link.path}
                                            isActive={location.pathname === link.path}
                                        >
                                            {link.label}
                                        </NavLink>
                                    ))}
                                </div>
                            </div>

                            {/* Mobile menu button */}
                            <div className="md:hidden" ref={menuRef}>
                                <button
                                    onClick={() => setIsOpen(!isOpen)}
                                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:text-white hover:bg-slate-700/50 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-colors duration-300"
                                    aria-expanded={isOpen}
                                    aria-controls="mobile-menu"
                                    aria-label={isOpen ? 'Close menu' : 'Open menu'}
                                >
                                    <AnimatePresence mode="wait" initial={false}>
                                        {isOpen ? (
                                            <motion.div
                                                key="close"
                                                initial={{ rotate: -90, opacity: 0 }}
                                                animate={{ rotate: 0, opacity: 1 }}
                                                exit={{ rotate: 90, opacity: 0 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                            </motion.div>
                                        ) : (
                                            <motion.div
                                                key="menu"
                                                initial={{ rotate: 90, opacity: 0 }}
                                                animate={{ rotate: 0, opacity: 1 }}
                                                exit={{ rotate: -90, opacity: 0 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Mobile menu */}
                    <AnimatePresence>
                        {isOpen && (
                            <>
                                {/* Backdrop */}
                                <motion.div
                                    className="fixed inset-0 bg-black/50 backdrop-blur-sm md:hidden"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                    aria-hidden="true"
                                />

                                {/* Menu */}
                                <motion.div
                                    id="mobile-menu"
                                    className="md:hidden absolute w-full bg-slate-800/95 backdrop-blur-sm shadow-lg"
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                                >
                                    <motion.div
                                        className="px-2 pt-2 pb-3 space-y-1 sm:px-3"
                                        initial="closed"
                                        animate="open"
                                        exit="closed"
                                        variants={{
                                            open: {
                                                transition: { staggerChildren: 0.07, delayChildren: 0.2 }
                                            },
                                            closed: {
                                                transition: { staggerChildren: 0.05, staggerDirection: -1 }
                                            }
                                        }}
                                    >
                                        {navLinks.map((link, index) => (
                                            <MobileNavLink
                                                key={link.path}
                                                to={link.path}
                                                isActive={location.pathname === link.path}
                                                onClick={() => setIsOpen(false)}
                                                index={index}
                                            >
                                                {link.label}
                                            </MobileNavLink>
                                        ))}
                                    </motion.div>
                                </motion.div>
                            </>
                        )}
                    </AnimatePresence>
                </nav>
            </div>
        </header>
    );
};

const NavLink = ({ to, children, isActive }) => (
    <Link
        to={to}
        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 ${isActive
            ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/20'
            : 'text-gray-200 hover:text-white hover:bg-slate-700/50'
            }`}
        aria-current={isActive ? 'page' : undefined}
    >
        {children}
    </Link>
);

const MobileNavLink = ({ to, children, isActive, onClick, index }) => (
    <motion.div
        variants={{
            closed: { opacity: 0, x: -20 },
            open: { opacity: 1, x: 0 }
        }}
        transition={{ duration: 0.3 }}
    >
        <Link
            to={to}
            onClick={onClick}
            className={`block px-4 py-3 rounded-lg text-base font-medium focus:outline-none focus:ring-2 focus:ring-cyan-500 ${isActive
                ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
                : 'text-gray-200 hover:text-white hover:bg-slate-700/50'
                } transition-colors duration-300`}
            aria-current={isActive ? 'page' : undefined}
        >
            {children}
        </Link>
    </motion.div>
);

export default React.memo(Navbar); 