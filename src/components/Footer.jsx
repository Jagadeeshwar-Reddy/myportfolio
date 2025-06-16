import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import SocialLinks from './SocialLinks';

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
                    <div className="grid md:grid-cols-3 gap-8">
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

                        {/* Quick Links */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold text-white">Quick Links</h3>
                            <ul className="space-y-2">
                                {['Home', 'About', 'Portfolio', 'Contact'].map((link) => (
                                    <li key={link}>
                                        <motion.a
                                            href={`#${link.toLowerCase()}`}
                                            className="text-gray-400 hover:text-white transition-colors duration-200"
                                            whileHover={{ x: 5 }}
                                        >
                                            {link}
                                        </motion.a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold text-white">Connect</h3>
                            <SocialLinks links={socialLinks} />
                            <div className="mt-4 text-gray-400">
                                <p>Email: jagadeeshwar.reddy@live.in</p>
                                <p>Phone: +91 9700884117</p>
                                <p>Location: Hyderabad, India</p>
                            </div>
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="mt-12 pt-8 border-t border-gray-800">
                        <div className="flex flex-col md:flex-row justify-between items-center">
                            <p className="text-gray-400 text-sm">
                                © {currentYear} Jagadeeshwar Reddy. All rights reserved.
                            </p>
                            <p className="text-gray-400 text-sm mt-4 md:mt-0">
                                Built with ❤️ using React and TailwindCSS
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 