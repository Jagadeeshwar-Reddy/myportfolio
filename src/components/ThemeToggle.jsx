import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import { useTheme } from '@contexts/ThemeContext';

const ThemeToggle = () => {
    const { isDark, toggleTheme } = useTheme();

    return (
        <motion.button
            onClick={toggleTheme}
            className="p-2 rounded-xl focus:outline-none focus:ring-2 transition-all duration-300 shadow-md"
            style={{
                backgroundColor: 'var(--color-surface-card)',
                color: 'var(--color-text-secondary)',
                '--tw-ring-color': 'var(--color-primary)'
            }}
            onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'var(--color-surface-light)';
                e.target.style.color = 'var(--color-text-primary)';
            }}
            onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'var(--color-surface-card)';
                e.target.style.color = 'var(--color-text-secondary)';
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
        >
            <AnimatePresence mode="wait" initial={false}>
                {isDark ? (
                    <motion.div
                        key="sun"
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <SunIcon className="w-5 h-5" />
                    </motion.div>
                ) : (
                    <motion.div
                        key="moon"
                        initial={{ rotate: 90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: -90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <MoonIcon className="w-5 h-5" />
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.button>
    );
};

export default ThemeToggle; 