import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Bars3Icon,
    XMarkIcon,
    HomeIcon,
    UserIcon,
    FolderIcon,
    EnvelopeIcon
} from '@heroicons/react/24/outline';

const navLinks = [
    { path: '/', label: 'Home', icon: HomeIcon },
    { path: '/about', label: 'About', icon: UserIcon },
    { path: '/portfolio', label: 'Portfolio', icon: FolderIcon },
    { path: '/contact', label: 'Contact', icon: EnvelopeIcon },
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
        <motion.nav
            className="fixed w-full z-50 transition-all duration-500 bg-white/95 backdrop-blur-xl shadow-lg border-b border-green-200"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <Link
                        to="/"
                        className="flex-shrink-0 focus:outline-none focus:ring-2 focus:ring-green-500 rounded-xl p-2"
                        aria-label="Home"
                    >
                        <motion.h1
                            className="text-2xl font-bold text-gradient font-display"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Jagadeeshwar Reddy
                        </motion.h1>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-center space-x-8">
                            {navLinks.map((link) => (
                                <NavLink
                                    key={link.path}
                                    to={link.path}
                                    isActive={location.pathname === link.path}
                                    icon={link.icon}
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
                            className="bg-white p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300 shadow-md"
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
                            className="fixed inset-0 bg-black/20 backdrop-blur-sm md:hidden"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            aria-hidden="true"
                        />

                        {/* Menu */}
                        <motion.div
                            id="mobile-menu"
                            className="md:hidden absolute w-full bg-white shadow-xl border-b border-slate-200"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.4, ease: 'easeInOut' }}
                        >
                            <motion.div
                                className="px-4 pt-4 pb-6 space-y-2"
                                initial="closed"
                                animate="open"
                                exit="closed"
                                variants={{
                                    open: {
                                        transition: { staggerChildren: 0.1, delayChildren: 0.2 }
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
                                        icon={link.icon}
                                    >
                                        {link.label}
                                    </MobileNavLink>
                                ))}
                            </motion.div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

const NavLink = ({ to, children, isActive, icon: Icon }) => (
    <Link
        to={to}
        className={`nav-link px-4 py-2 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 ${isActive
            ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-md'
            : 'hover:bg-slate-100'
            }`}
        aria-current={isActive ? 'page' : undefined}
    >
        <Icon className="w-5 h-5" />
        {children}
    </Link>
);

const MobileNavLink = ({ to, children, isActive, onClick, index, icon: Icon }) => (
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
            className={`block px-4 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-3 ${isActive
                ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white'
                : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
                }`}
            aria-current={isActive ? 'page' : undefined}
        >
            <Icon className="w-5 h-5" />
            {children}
        </Link>
    </motion.div>
);

export default React.memo(Navbar); 