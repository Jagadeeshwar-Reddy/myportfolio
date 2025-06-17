import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    FaGithub,
    FaLinkedin,
    FaTwitter,
    FaEnvelope,
    FaArrowRight,
    FaDownload,
    FaCode,
    FaMobile,
    FaRocket
} from 'react-icons/fa';
import Experience from './Experience';
import TypeWriter from '../components/TypeWriter';

const Home = () => {
    const socialLinks = [
        {
            icon: <FaGithub />,
            url: 'https://github.com/jagadeeshwar-reddy',
            label: 'GitHub',
        },
        {
            icon: <FaLinkedin />,
            url: 'https://www.linkedin.com/in/jagadeeshwar-reddy-mudiyala-4786b83a/',
            label: 'LinkedIn',
        },
        {
            icon: <FaTwitter />,
            url: 'https://twitter.com/jagadeeshwar_r',
            label: 'Twitter',
        },
        {
            icon: <FaEnvelope />,
            url: 'mailto:jagadeeshwar.reddy@live.in',
            label: 'Email',
        },
    ];

    const features = [
        {
            icon: <FaCode className="text-4xl" />,
            title: 'Swift & SwiftUI',
            description: 'Expert in modern iOS development with Swift and SwiftUI frameworks',
        },
        {
            icon: <FaMobile className="text-4xl" />,
            title: 'Mobile Apps',
            description: 'Building enterprise-grade mobile applications with focus on performance',
        },
        {
            icon: <FaRocket className="text-4xl" />,
            title: 'Scalable Solutions',
            description: 'Creating robust, scalable solutions for complex business requirements',
        },
    ];

    return (
        <div className="min-h-screen" style={{ background: 'var(--gradient-bg)' }}>
            {/* Hero Section */}
            <section className="section relative overflow-hidden">
                <div className="container">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="space-y-8"
                        >
                            <div className="space-y-4">
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2, duration: 0.6 }}
                                    style={{
                                        color: 'var(--color-primary)',
                                        fontFamily: 'var(--font-primary)',
                                        fontWeight: 'var(--font-weight-semibold)',
                                        fontSize: 'var(--font-size-lg)'
                                    }}
                                >
                                    👋 Hello, I'm
                                </motion.p>

                                <motion.h1
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4, duration: 0.6 }}
                                    className="text-gradient"
                                    style={{ fontFamily: 'var(--font-display)' }}
                                >
                                    Jagadeeshwar Reddy
                                </motion.h1>

                                <motion.h2
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6, duration: 0.6 }}
                                    style={{
                                        color: 'var(--color-text-primary)',
                                        fontFamily: 'var(--font-display)',
                                        fontWeight: 'var(--font-weight-bold)',
                                        fontSize: 'var(--font-size-3xl)',
                                        lineHeight: 'var(--line-height-tight)',
                                        letterSpacing: 'var(--letter-spacing-tight)'
                                    }}
                                >
                                    <TypeWriter words={["Principal iOS Engineer"]} typingSpeed={90} deletingSpeed={40} pauseTime={2500} />
                                </motion.h2>

                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.8, duration: 0.6 }}
                                    style={{
                                        color: 'var(--color-text-secondary)',
                                        fontFamily: 'var(--font-primary)',
                                        fontSize: 'var(--font-size-xl)',
                                        lineHeight: 'var(--line-height-relaxed)'
                                    }}
                                >
                                    Crafting exceptional mobile experiences with 13+ years of expertise in Swift, SwiftUI, and enterprise iOS development.
                                </motion.p>
                            </div>

                            {/* CTA Buttons */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1, duration: 0.6 }}
                                className="flex flex-wrap gap-4"
                            >
                                <Link to="/portfolio" className="btn-primary group">
                                    View My Work
                                    <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <Link to="/contact" className="btn-secondary">
                                    Get In Touch
                                </Link>
                                <a
                                    href="/CV_Jagadeeshwar Reddy_iOS_Developer.pdf"
                                    download
                                    className="btn-outline group"
                                >
                                    <FaDownload className="mr-2 group-hover:animate-bounce" />
                                    Download CV
                                </a>
                            </motion.div>

                            {/* Social Links */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.2, duration: 0.6 }}
                                className="flex gap-4"
                            >
                                {socialLinks.map((link, index) => (
                                    <motion.a
                                        key={link.label}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="card p-3 rounded-xl hover:shadow-xl transition-all duration-300 group"
                                        whileHover={{ scale: 1.1, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 1.4 + index * 0.1, duration: 0.6 }}
                                        aria-label={link.label}
                                    >
                                        <span
                                            className="text-2xl transition-colors"
                                            style={{
                                                color: 'var(--color-text-secondary)',
                                            }}
                                        >
                                            {link.icon}
                                        </span>
                                    </motion.a>
                                ))}
                            </motion.div>
                        </motion.div>

                        {/* Right Content - Modern Floating Card */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative"
                        >
                            <div className="relative z-10">
                                {/* Modern Floating Card */}
                                <motion.div
                                    className="relative w-80 h-80 mx-auto"
                                    animate={{
                                        y: [0, -10, 0],
                                        rotateY: [0, 5, 0]
                                    }}
                                    transition={{
                                        duration: 6,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                >
                                    {/* Floating background elements */}
                                    <motion.div
                                        className="absolute inset-0 rounded-3xl"
                                        style={{
                                            background: 'var(--gradient-primary)',
                                            opacity: 0.1
                                        }}
                                        animate={{
                                            scale: [1, 1.05, 1],
                                            rotate: [0, 180, 360]
                                        }}
                                        transition={{
                                            duration: 8,
                                            repeat: Infinity,
                                            ease: "linear"
                                        }}
                                    />

                                    <motion.div
                                        className="absolute inset-4 rounded-3xl"
                                        style={{
                                            background: 'var(--gradient-secondary)',
                                            opacity: 0.15
                                        }}
                                        animate={{
                                            scale: [1, 1.1, 1],
                                            rotate: [360, 180, 0]
                                        }}
                                        transition={{
                                            duration: 10,
                                            repeat: Infinity,
                                            ease: "linear"
                                        }}
                                    />

                                    {/* Main card container */}
                                    <motion.div
                                        className="absolute inset-8 rounded-3xl backdrop-blur-xl"
                                        style={{
                                            background: 'rgba(255, 255, 255, 0.15)',
                                            border: '1px solid rgba(255, 255, 255, 0.3)',
                                            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                                        }}
                                        whileHover={{
                                            scale: 1.05,
                                            boxShadow: '0 35px 60px -12px rgba(0, 0, 0, 0.35)'
                                        }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {/* Content */}
                                        <div className="relative z-10 p-8 text-center">
                                            <motion.div
                                                className="text-7xl mb-6"
                                                animate={{
                                                    rotate: [0, 10, -10, 0],
                                                    scale: [1, 1.1, 1]
                                                }}
                                                transition={{
                                                    duration: 4,
                                                    repeat: Infinity,
                                                    ease: "easeInOut"
                                                }}
                                            >
                                                📱
                                            </motion.div>

                                            <motion.div
                                                style={{
                                                    fontFamily: 'var(--font-display)',
                                                    fontWeight: 'var(--font-weight-bold)',
                                                    fontSize: 'var(--font-size-2xl)',
                                                    textShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
                                                    background: 'var(--gradient-primary)',
                                                    WebkitBackgroundClip: 'text',
                                                    WebkitTextFillColor: 'transparent',
                                                    backgroundClip: 'text'
                                                }}
                                                animate={{
                                                    opacity: [0.8, 1, 0.8],
                                                    scale: [0.98, 1, 0.98]
                                                }}
                                                transition={{
                                                    duration: 3,
                                                    repeat: Infinity,
                                                    ease: "easeInOut"
                                                }}
                                            >
                                                iOS App Developer
                                            </motion.div>
                                        </div>
                                    </motion.div>
                                </motion.div>
                            </div>

                            {/* Enhanced floating elements */}
                            <motion.div
                                className="absolute top-8 -right-8 w-24 h-24 rounded-full"
                                style={{
                                    background: 'var(--gradient-secondary)',
                                    opacity: 0.2
                                }}
                                animate={{
                                    y: [0, -20, 0],
                                    scale: [1, 1.2, 1],
                                    rotate: [0, 360]
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            />

                            <motion.div
                                className="absolute bottom-8 -left-8 w-20 h-20 rounded-full"
                                style={{
                                    background: 'var(--gradient-primary)',
                                    opacity: 0.25
                                }}
                                animate={{
                                    y: [0, 20, 0],
                                    scale: [1, 0.8, 1],
                                    rotate: [360, 0]
                                }}
                                transition={{
                                    duration: 5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 1
                                }}
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Experience Timeline Section */}
            <section className="section relative overflow-hidden">
                <Experience />
            </section>

            {/* Features Section */}
            <section className="section" style={{ background: 'var(--color-surface)' }}>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2
                            className="text-gradient mb-4"
                            style={{ fontFamily: 'var(--font-display)' }}
                        >
                            What I Do
                        </h2>
                        <p
                            className="max-w-2xl mx-auto"
                            style={{
                                color: 'var(--color-text-secondary)',
                                fontFamily: 'var(--font-primary)',
                                fontSize: 'var(--font-size-xl)',
                                lineHeight: 'var(--line-height-relaxed)'
                            }}
                        >
                            Specializing in creating exceptional iOS applications with modern technologies and best practices.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                viewport={{ once: true }}
                                className="card-hover text-center group"
                            >
                                <div className="mb-6 flex justify-center">
                                    <div
                                        className="p-4 rounded-2xl transition-all duration-300"
                                        style={{ background: 'var(--gradient-secondary)' }}
                                    >
                                        <span className="text-gradient">{feature.icon}</span>
                                    </div>
                                </div>
                                <h3
                                    className="mb-4"
                                    style={{
                                        color: 'var(--color-text-primary)',
                                        fontFamily: 'var(--font-display)',
                                        fontWeight: 'var(--font-weight-bold)',
                                        fontSize: 'var(--font-size-2xl)',
                                        lineHeight: 'var(--line-height-tight)'
                                    }}
                                >
                                    {feature.title}
                                </h3>
                                <p
                                    style={{
                                        color: 'var(--color-text-secondary)',
                                        fontFamily: 'var(--font-primary)',
                                        fontSize: 'var(--font-size-base)',
                                        lineHeight: 'var(--line-height-relaxed)'
                                    }}
                                >
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="section" style={{ background: 'var(--gradient-bg)' }}>
                <div className="container">
                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { number: '13+', label: 'Years Experience' },
                            { number: '50+', label: 'Apps Delivered' },
                            { number: '100%', label: 'Client Satisfaction' },
                            { number: '24/7', label: 'Support Available' },
                        ].map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="text-center"
                            >
                                <div
                                    className="text-gradient mb-2"
                                    style={{
                                        fontFamily: 'var(--font-display)',
                                        fontWeight: 'var(--font-weight-bold)',
                                        fontSize: 'var(--font-size-5xl)',
                                        lineHeight: 'var(--line-height-tight)'
                                    }}
                                >
                                    {stat.number}
                                </div>
                                <div
                                    style={{
                                        color: 'var(--color-text-secondary)',
                                        fontFamily: 'var(--font-primary)',
                                        fontWeight: 'var(--font-weight-medium)',
                                        fontSize: 'var(--font-size-base)'
                                    }}
                                >
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home; 