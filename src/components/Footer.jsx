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
        <footer className="bg-gray-900 text-gray-300 py-12">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* About Section */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold text-white">About Me</h3>
                            <p className="text-gray-400">
                                Senior iOS Developer with 13+ years of experience in building
                                enterprise-grade applications. Specializing in Swift, SwiftUI,
                                and iOS development, with a focus on creating scalable and
                                secure solutions.
                            </p>
                        </div>

                        {/* Contact Info */}
                        <div className="space-y-4 md:text-right">
                            <h3 className="text-xl font-semibold text-white">Connect With Me</h3>
                            <div className="flex flex-wrap gap-4 md:justify-end">
                                {socialLinks.map((link) => (
                                    <motion.a
                                        key={link.label}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-400 hover:text-white transition-colors duration-200"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                        aria-label={link.label}
                                    >
                                        {link.icon}
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
                        <p>&copy; {currentYear} Jagadeeshwar Reddy. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 