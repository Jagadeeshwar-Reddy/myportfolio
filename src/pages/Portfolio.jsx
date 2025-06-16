import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ProjectCard from '@components/ProjectCard';

// Using placeholder images until actual project images are available
const ubloodImage = 'https://placehold.co/600x400/2563eb/ffffff?text=UBlood';
const realestateImage = 'https://placehold.co/600x400/16a34a/ffffff?text=Real+Estate';
const ecommerceImage = 'https://placehold.co/600x400/d97706/ffffff?text=E-Commerce';
const healthcareImage = 'https://placehold.co/600x400/dc2626/ffffff?text=Healthcare';

const Portfolio = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const [selectedCategory, setSelectedCategory] = useState('all');

    const projects = [
        {
            title: 'UBlood',
            description: 'A blood donation app connecting donors and recipients. Features geolocation-based notifications and a user-friendly interface for timely assistance.',
            image: ubloodImage,
            category: 'healthcare',
            technologies: ['Swift', 'UIKit', 'Firebase', 'Core Location'],
            demoUrl: 'https://apps.apple.com/app/ublood',
            githubUrl: '#',
            stats: {
                users: '50K+',
                rating: '4.9',
            },
        },
        {
            title: 'Real Estate Platform',
            description: 'Enterprise-grade real estate application with property listings, virtual tours, and secure payment processing. Integrated with multiple third-party services.',
            image: realestateImage,
            category: 'enterprise',
            technologies: ['Swift', 'SwiftUI', 'Core Data', 'Combine'],
            demoUrl: '#',
            githubUrl: '#',
            stats: {
                users: '100K+',
                rating: '4.8',
            },
        },
        {
            title: 'E-Commerce App',
            description: 'Feature-rich e-commerce application with AR product visualization, secure payment processing, and real-time inventory management.',
            image: ecommerceImage,
            category: 'ecommerce',
            technologies: ['Swift', 'UIKit', 'ARKit', 'Core ML'],
            demoUrl: '#',
            githubUrl: '#',
            stats: {
                users: '200K+',
                rating: '4.7',
            },
        },
        {
            title: 'Healthcare Management',
            description: 'Comprehensive healthcare management system for clinics and hospitals. Features patient management, appointment scheduling, and medical records.',
            image: healthcareImage,
            category: 'healthcare',
            technologies: ['Swift', 'SwiftUI', 'Core Data', 'HealthKit'],
            demoUrl: '#',
            githubUrl: '#',
            stats: {
                users: '75K+',
                rating: '4.9',
            },
        },
    ];

    const categories = [
        { id: 'all', name: 'All Projects' },
        { id: 'healthcare', name: 'Healthcare' },
        { id: 'enterprise', name: 'Enterprise' },
        { id: 'ecommerce', name: 'E-Commerce' },
    ];

    const filteredProjects = selectedCategory === 'all'
        ? projects
        : projects.filter(project => project.category === selectedCategory);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    return (
        <section id="portfolio" className="py-20 bg-gray-50">
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
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        My Portfolio
                    </motion.h2>

                    {/* Filter Buttons */}
                    <motion.div
                        className="flex flex-wrap justify-center gap-4 mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        {categories.map((category) => (
                            <motion.button
                                key={category.id}
                                onClick={() => setSelectedCategory(category.id)}
                                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${selectedCategory === category.id
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-white text-gray-600 hover:bg-gray-100'
                                    }`}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {category.name}
                            </motion.button>
                        ))}
                    </motion.div>

                    {/* Projects Grid */}
                    <motion.div
                        className="grid md:grid-cols-2 lg:grid-cols-2 gap-8"
                        variants={containerVariants}
                    >
                        <AnimatePresence mode="wait">
                            {filteredProjects.map((project) => (
                                <ProjectCard key={project.title} project={project} />
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Portfolio; 