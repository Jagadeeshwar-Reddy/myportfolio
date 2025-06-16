import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import TypeWriter from '@components/TypeWriter';
import SocialLinks from '@components/SocialLinks';

const Home = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    const typewriterWords = [
        'Full Stack Developer',
        'React Developer',
        'Node.js Developer',
        'UI/UX Enthusiast',
    ];

    return (
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50">
            <div className="container mx-auto px-4 py-20">
                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    className="max-w-4xl mx-auto text-center"
                >
                    <motion.h1
                        className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
                        variants={itemVariants}
                    >
                        Hi, I'm{' '}
                        <span className="text-blue-600">Jagadeeshwar Reddy</span>
                    </motion.h1>

                    <motion.div
                        className="text-2xl md:text-3xl text-gray-700 mb-8 min-h-[2em]"
                        variants={itemVariants}
                    >
                        <TypeWriter
                            words={typewriterWords}
                            typingSpeed={80}
                            deletingSpeed={40}
                            pauseTime={1500}
                        />
                    </motion.div>

                    <motion.p
                        className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto"
                        variants={itemVariants}
                    >
                        I build modern, responsive, and user-friendly web applications
                        using cutting-edge technologies. Passionate about creating
                        seamless digital experiences that make a difference.
                    </motion.p>

                    <motion.div variants={itemVariants}>
                        <SocialLinks />
                    </motion.div>

                    <motion.div
                        className="mt-12 flex justify-center gap-4"
                        variants={itemVariants}
                    >
                        <Link
                            to="/portfolio"
                            className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
                        >
                            View My Work
                        </Link>
                        <Link
                            to="/contact"
                            className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors duration-300"
                        >
                            Contact Me
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Home; 