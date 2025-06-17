import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

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

    return (
        <footer
            className="border-t"
            style={{
                background: 'var(--color-surface)',
                borderColor: 'var(--color-border)'
            }}
        >
            <div className="container mx-auto px-4 py-16">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* About Section */}
                        <motion.div
                            className="space-y-6"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-2xl font-bold text-gradient">About Me</h3>
                            <p className="leading-relaxed text-lg" style={{ color: 'var(--color-text-secondary)' }}>
                                Principal iOS Engineer with 13+ years of experience in building
                                enterprise-grade applications. Specializing in Swift, SwiftUI,
                                and iOS development, with a focus on creating scalable and
                                secure solutions that drive business growth.
                            </p>
                        </motion.div>

                        {/* Contact Info */}
                        <motion.div
                            className="space-y-6 md:text-right"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-2xl font-bold text-gradient">Connect With Me</h3>
                            <div className="flex flex-wrap gap-4 md:justify-end">
                                {socialLinks.map((link, index) => (
                                    <motion.a
                                        key={link.label}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="card p-4 rounded-xl hover:shadow-xl transition-all duration-300 group"
                                        whileHover={{ scale: 1.1, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.4, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        aria-label={link.label}
                                    >
                                        <span
                                            className="text-2xl transition-colors"
                                            style={{ color: 'var(--color-text-secondary)' }}
                                        >
                                            {link.icon}
                                        </span>
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Copyright */}
                    <motion.div
                        className="mt-16 pt-8 border-t text-center"
                        style={{ borderColor: 'var(--color-border)' }}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-lg" style={{ color: 'var(--color-text-secondary)' }}>
                            &copy; {currentYear} Jagadeeshwar Reddy. All rights reserved.
                        </p>
                        <p className="mt-2" style={{ color: 'var(--color-text-muted)' }}>
                            Thanks for visiting!
                        </p>
                    </motion.div>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 