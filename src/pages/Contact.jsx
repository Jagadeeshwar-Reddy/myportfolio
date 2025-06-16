import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ContactForm from '@components/ContactForm';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const Contact = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const contactInfo = [
        {
            icon: <FaEnvelope className="w-6 h-6" />,
            title: 'Email',
            content: 'jagadeeshwar.reddy@live.in',
            link: 'mailto:jagadeeshwar.reddy@live.in',
        },
        {
            icon: <FaPhone className="w-6 h-6" />,
            title: 'Phone',
            content: '+91 9700884117',
            link: 'tel:+919700884117',
        },
        {
            icon: <FaMapMarkerAlt className="w-6 h-6" />,
            title: 'Location',
            content: 'Hyderabad, India',
            link: 'https://maps.google.com/?q=Hyderabad,India',
        },
    ];

    const socialLinks = [
        {
            icon: <FaLinkedin className="w-6 h-6" />,
            title: 'LinkedIn',
            content: '@jagadeeshwar-reddy-mudiyala',
            link: 'https://www.linkedin.com/in/jagadeeshwar-reddy-mudiyala-4786b83a/'
        },
        {
            icon: <FaGithub className="w-6 h-6" />,
            title: 'GitHub',
            content: 'jagadeeshwar-reddy',
            link: 'https://github.com/jagadeeshwar-reddy',
        },
        {
            icon: <FaTwitter className="w-6 h-6" />,
            title: 'Twitter',
            content: '@jagadeeshwar_r',
            link: 'https://twitter.com/jagadeeshwar_r',
        },
    ];

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

    return (
        <section id="contact" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    className="max-w-6xl mx-auto"
                >
                    {/* Section Title */}
                    <motion.h2
                        className="text-4xl font-bold text-center text-gray-900 mb-12"
                        variants={itemVariants}
                    >
                        Get In Touch
                    </motion.h2>

                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Contact Information */}
                        <motion.div variants={itemVariants}>
                            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                                Contact Information
                            </h3>
                            <p className="text-gray-600 mb-8">
                                I'm always open to discussing new projects, creative ideas, or
                                opportunities to be part of your vision. Feel free to reach out
                                through any of the following channels.
                            </p>

                            <div className="space-y-6">
                                {contactInfo.map((info) => (
                                    <motion.a
                                        key={info.title}
                                        href={info.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <div className="text-blue-600 mt-1">{info.icon}</div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900">
                                                {info.title}
                                            </h4>
                                            <p className="text-gray-600">{info.content}</p>
                                        </div>
                                    </motion.a>
                                ))}
                            </div>

                            {/* Social Links */}
                            <div className="mt-8">
                                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                                    Connect on Social Media
                                </h4>
                                <div className="grid grid-cols-1 gap-4">
                                    {socialLinks.map((link) => (
                                        <motion.a
                                            key={link.title}
                                            href={link.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            <div className="text-blue-600">{link.icon}</div>
                                            <div>
                                                <h4 className="font-semibold text-gray-900">
                                                    {link.title}
                                                </h4>
                                                <p className="text-gray-600">{link.content}</p>
                                            </div>
                                        </motion.a>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div variants={itemVariants}>
                            <ContactForm />
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact; 