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
        <div className="min-h-screen" style={{ background: 'var(--gradient-bg)' }}>
            <section className="section relative overflow-hidden">
                <div className="container">
                    <motion.div
                        ref={ref}
                        initial={{ opacity: 0, y: 50 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8 }}
                        className="max-w-6xl mx-auto"
                    >
                        {/* Section Title */}
                        <motion.h2
                            className="text-gradient mb-12 text-center"
                            style={{
                                fontFamily: 'var(--font-display)',
                                fontWeight: 'var(--font-weight-bold)',
                                fontSize: 'var(--font-size-5xl)',
                                lineHeight: 'var(--line-height-tight)',
                                letterSpacing: 'var(--letter-spacing-tight)'
                            }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            Get In Touch
                        </motion.h2>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                            {/* Contact Information */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                animate={inView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.6, delay: 0.4 }}
                            >
                                <h3 className="text-xl lg:text-2xl font-semibold mb-4 lg:mb-6" style={{ color: 'var(--color-text-primary)' }}>
                                    Contact Information
                                </h3>
                                <p className="mb-6 lg:mb-8 leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                                    I'm always open to discussing new projects, creative ideas, or
                                    opportunities to be part of your vision. Feel free to reach out
                                    through any of the following channels.
                                </p>

                                <div className="space-y-4 lg:space-y-6">
                                    {contactInfo.map((info, index) => (
                                        <motion.a
                                            key={info.title}
                                            href={info.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-start gap-3 lg:gap-4 p-3 lg:p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                                            style={{ background: 'var(--color-surface-card)' }}
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={inView ? { opacity: 1, y: 0 } : {}}
                                            transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                                        >
                                            <div className="mt-1" style={{ color: 'var(--color-primary)' }}>{info.icon}</div>
                                            <div>
                                                <h4 className="font-semibold text-sm lg:text-base" style={{ color: 'var(--color-text-primary)' }}>
                                                    {info.title}
                                                </h4>
                                                <p className="text-sm lg:text-base" style={{ color: 'var(--color-text-secondary)' }}>{info.content}</p>
                                            </div>
                                        </motion.a>
                                    ))}
                                </div>

                                {/* Social Links */}
                                <div className="mt-6 lg:mt-8">
                                    <h4 className="text-base lg:text-lg font-semibold mb-3 lg:mb-4" style={{ color: 'var(--color-text-primary)' }}>
                                        Connect on Social Media
                                    </h4>
                                    <div className="grid grid-cols-1 gap-3 lg:gap-4">
                                        {socialLinks.map((link, index) => (
                                            <motion.a
                                                key={link.title}
                                                href={link.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-3 lg:gap-4 p-3 lg:p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                                                style={{ background: 'var(--color-surface-card)' }}
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                                            >
                                                <div style={{ color: 'var(--color-primary)' }}>{link.icon}</div>
                                                <div>
                                                    <h4 className="font-semibold text-sm lg:text-base" style={{ color: 'var(--color-text-primary)' }}>
                                                        {link.title}
                                                    </h4>
                                                    <p className="text-sm lg:text-base" style={{ color: 'var(--color-text-secondary)' }}>{link.content}</p>
                                                </div>
                                            </motion.a>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>

                            {/* Contact Form */}
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                animate={inView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.6, delay: 0.6 }}
                            >
                                <ContactForm />
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Contact; 