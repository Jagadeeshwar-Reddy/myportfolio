import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const defaultLinks = [
    {
        icon: <FaLinkedin className="w-6 h-6" />,
        label: 'LinkedIn',
        url: 'https://www.linkedin.com/in/jagadeeshwar-reddy-mudiyala-4786b83a/'
    },
    {
        icon: <FaGithub className="w-6 h-6" />,
        label: 'GitHub',
        url: 'https://github.com/jagadeeshwar-reddy'
    },
    {
        icon: <FaTwitter className="w-6 h-6" />,
        label: 'Twitter',
        url: 'https://twitter.com/jagadeeshwar_r'
    }
];

const SocialLinks = ({ links = defaultLinks }) => {
    return (
        <div className="flex justify-center gap-6">
            {links.map((link, index) => (
                <motion.a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    aria-label={link.label}
                >
                    {link.icon}
                </motion.a>
            ))}
        </div>
    );
};

export default SocialLinks; 