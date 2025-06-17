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
        <div className="min-h-screen">
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
                                    className="text-indigo-600 font-semibold text-lg"
                                >
                                    👋 Hello, I'm
                                </motion.p>

                                <motion.h1
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4, duration: 0.6 }}
                                    className="text-gradient"
                                >
                                    Jagadeeshwar Reddy
                                </motion.h1>

                                <motion.h2
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6, duration: 0.6 }}
                                    className="text-3xl md:text-4xl font-bold text-slate-900"
                                >
                                    Senior iOS Developer
                                </motion.h2>

                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.8, duration: 0.6 }}
                                    className="text-xl text-slate-600 leading-relaxed"
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
                                        <span className="text-2xl text-slate-600 group-hover:text-indigo-600 transition-colors">
                                            {link.icon}
                                        </span>
                                    </motion.a>
                                ))}
                            </motion.div>
                        </motion.div>

                        {/* Right Content - Clean Design */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative"
                        >
                            <div className="relative z-10">
                                <div className="card text-center">
                                    <div className="w-64 h-64 mx-auto relative">
                                        {/* Clean gradient circles */}
                                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-100 to-cyan-100 animate-pulse"></div>
                                        <div className="absolute inset-4 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 animate-pulse delay-1000"></div>
                                        <div className="absolute inset-8 rounded-full bg-gradient-to-r from-blue-100 to-teal-100 animate-pulse delay-2000"></div>

                                        {/* Center content */}
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="text-center">
                                                <div className="text-6xl mb-4">📱</div>
                                                <div className="text-2xl font-bold text-gradient">iOS Developer</div>
                                                <div className="text-slate-600">13+ Years Experience</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Subtle floating elements */}
                            <div className="absolute top-10 -right-10 w-20 h-20 bg-gradient-to-r from-indigo-200 to-cyan-200 rounded-full opacity-60 animate-bounce"></div>
                            <div className="absolute bottom-10 -left-10 w-16 h-16 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full opacity-60 animate-bounce delay-1000"></div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="section bg-slate-50">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-gradient mb-4">What I Do</h2>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
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
                                    <div className="p-4 rounded-2xl bg-gradient-to-r from-indigo-100 to-cyan-100 group-hover:from-indigo-200 group-hover:to-cyan-200 transition-all duration-300">
                                        <span className="text-gradient">{feature.icon}</span>
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="section">
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
                                <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">{stat.number}</div>
                                <div className="text-slate-600 font-medium">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home; 