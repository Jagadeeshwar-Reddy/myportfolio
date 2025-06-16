import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PageLoader = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Hide loader after a short delay to ensure smooth transition
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1500); // Reduced from 2000ms to 1500ms for better UX

        // Cleanup timer on unmount
        return () => clearTimeout(timer);
    }, []);

    // Add event listener for when all resources are loaded
    useEffect(() => {
        const handleLoad = () => {
            setIsLoading(false);
        };

        if (document.readyState === 'complete') {
            handleLoad();
        } else {
            window.addEventListener('load', handleLoad);
            return () => window.removeEventListener('load', handleLoad);
        }
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900"
                >
                    <div className="relative">
                        {/* Outer ring */}
                        <motion.div
                            className="w-24 h-24 border-4 border-blue-500 rounded-full"
                            animate={{
                                scale: [1, 1.2, 1],
                                rotate: 360,
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: 'easeInOut',
                            }}
                        />

                        {/* Inner ring */}
                        <motion.div
                            className="absolute top-1/2 left-1/2 w-16 h-16 border-4 border-blue-300 rounded-full"
                            style={{ marginLeft: '-2rem', marginTop: '-2rem' }}
                            animate={{
                                scale: [1, 0.8, 1],
                                rotate: -360,
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                ease: 'easeInOut',
                            }}
                        />

                        {/* Center dot */}
                        <motion.div
                            className="absolute top-1/2 left-1/2 w-4 h-4 bg-blue-600 rounded-full"
                            style={{ marginLeft: '-0.5rem', marginTop: '-0.5rem' }}
                            animate={{
                                scale: [1, 1.5, 1],
                                opacity: [1, 0.5, 1],
                            }}
                            transition={{
                                duration: 1,
                                repeat: Infinity,
                                ease: 'easeInOut',
                            }}
                        />

                        {/* Loading text */}
                        <motion.div
                            className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-white text-sm font-medium"
                            animate={{
                                opacity: [0.5, 1, 0.5],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                ease: 'easeInOut',
                            }}
                        >
                            Loading...
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default PageLoader; 