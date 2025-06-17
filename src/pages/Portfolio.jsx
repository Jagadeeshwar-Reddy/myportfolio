import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ProjectCard from '@components/ProjectCard';

// Using placeholder images until actual project images are available
const tescoImage = 'https://placehold.co/600x400/2563eb/ffffff?text=Tesco+Groceries';
const ubloodImage = 'https://placehold.co/600x400/dc2626/ffffff?text=UBlood';
const homepadImage = 'https://placehold.co/600x400/16a34a/ffffff?text=homePad';
const sydneyAirportImage = 'https://placehold.co/600x400/0891b2/ffffff?text=Sydney+Airport';
const wecometoyouImage = 'https://placehold.co/600x400/d97706/ffffff?text=WeComeToYou';
const eeyuvaImage = 'https://placehold.co/600x400/7c3aed/ffffff?text=EeYuva';
const saysoImage = 'https://placehold.co/600x400/059669/ffffff?text=Say+So';
const lobbydayImage = 'https://placehold.co/600x400/be185d/ffffff?text=Lobby+Day';
const tubetnrImage = 'https://placehold.co/600x400/ea580c/ffffff?text=TubeTnr';
const immomagazineImage = 'https://placehold.co/600x400/0d9488/ffffff?text=IMMOmagazine';
const scopeitImage = 'https://placehold.co/600x400/9333ea/ffffff?text=Scope+It';

const Portfolio = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const [selectedCategory, setSelectedCategory] = useState('all');

    const projects = [
        {
            title: 'Tesco Groceries iPhone & iPad',
            description: 'Feature-rich groceries shopping app for seamless online ordering and next-day doorstep delivery. Serving over 1.5 million active users across multiple regions (UK, Ireland, Czech Republic, Hungary, Slovakia).',
            image: tescoImage,
            category: 'ecommerce',
            technologies: ['Swift 5', 'iOS 14 SDK', 'MVC/MVVM', 'GraphQL', 'UI Automation', 'CocoaPods'],
            demoUrl: 'https://apps.apple.com/app/tesco-groceries',
            githubUrl: '#',
            stats: {
                users: '1.5M+',
                rating: '4.8',
            },
            impact: '80K daily orders, 5 regions'
        },
        {
            title: 'UBlood',
            description: 'Blood donation application connecting donors and recipients through geolocation-based notifications. Enables users to raise requests for specific blood types and connect with nearby donors for timely assistance.',
            image: ubloodImage,
            category: 'healthcare',
            technologies: ['Swift 5', 'iOS 14 SDK', 'MVC/MVVM', 'REST APIs', 'Core Location', 'JSON'],
            demoUrl: 'https://apps.apple.com/app/ublood',
            githubUrl: '#',
            stats: {
                users: 'Global',
                rating: '4.9',
            },
            impact: 'Emergency blood donation platform'
        },
        {
            title: 'homePad & homePad Pro',
            description: 'First iPad app on App Store for real estate inventory management and inspection reports. Enables digital recording of property inventory with advanced inspection reports, furniture inventory, and task management.',
            image: homepadImage,
            category: 'enterprise',
            technologies: ['Objective-C & Swift', 'iOS 9.0 SDK', 'SQLite', 'JSON Web Services', 'PDF Generation', 'Cloud Backup'],
            demoUrl: 'https://apps.apple.com/app/homepad',
            githubUrl: '#',
            stats: {
                users: 'Revolutionary',
                rating: '4.7',
            },
            impact: 'First digital inventory management solution'
        },
        {
            title: 'Sydney Airport App',
            description: 'Official Sydney Airport app providing live flight information, real-time updates, terminal navigation, and comprehensive airport services. Features interactive maps for T1 International and T2 Domestic terminals.',
            image: sydneyAirportImage,
            category: 'travel',
            technologies: ['Objective-C', 'iOS 4.0 SDK', 'SQLite', 'Push Notifications', 'SOAP Web Services', 'XML'],
            demoUrl: 'https://apps.apple.com/app/sydney-airport',
            githubUrl: '#',
            stats: {
                users: 'Airport Visitors',
                rating: '4.6',
            },
            impact: 'Enhanced travel experience'
        },
        {
            title: 'WeComeToYou Home Cleaning',
            description: 'On-demand home services app allowing users to book appointments for home cleaning, laundry, and car wash services. Provides seamless and convenient booking experience.',
            image: wecometoyouImage,
            category: 'services',
            technologies: ['Swift 3', 'iOS 9.0 SDK', 'SQLite', 'RESTful JSON', 'HTML'],
            demoUrl: '#',
            githubUrl: '#',
            stats: {
                users: 'Service Users',
                rating: '4.5',
            },
            impact: 'On-demand home services platform'
        },
        {
            title: 'EeYuva',
            description: 'Content delivery app for youth from Eenadu publications. Engages users with wide range of topics relevant to young audiences, offering insightful and dynamic content across categories.',
            image: eeyuvaImage,
            category: 'media',
            technologies: ['Swift 3', 'iOS 9.0 SDK', 'SQLite Manager', 'REST JSON', 'HTML'],
            demoUrl: '#',
            githubUrl: '#',
            stats: {
                users: 'Youth Audience',
                rating: '4.4',
            },
            impact: 'Youth-focused content platform'
        },
        {
            title: 'Say So',
            description: 'Video solution app for auto dealerships simplifying video creation and uploading. Sales staff can record and upload videos showcasing model demos, customer testimonials, and owner reviews with single click.',
            image: saysoImage,
            category: 'automotive',
            technologies: ['Swift 1.0', 'iOS 8.0 SDK', 'Video Capture', 'JSON Web Services', 'Wistia API'],
            demoUrl: '#',
            githubUrl: '#',
            stats: {
                users: 'Auto Dealers',
                rating: '4.3',
            },
            impact: 'Simplified video marketing for dealers'
        },
        {
            title: 'Lobby Day',
            description: 'Advocacy app for associations and trade organizations, empowering activists with tools to promote issues on Capitol Hill and generate public support. Facilitates status updates and social media integration.',
            image: lobbydayImage,
            category: 'social',
            technologies: ['Objective-C', 'iOS 7.0 & 8.0 SDK', 'JSON Web Services', 'Social Media APIs'],
            demoUrl: '#',
            githubUrl: '#',
            stats: {
                users: 'Activists',
                rating: '4.2',
            },
            impact: 'Political advocacy platform'
        },
        {
            title: 'TubeTnr',
            description: 'Interactive talent platform where performers and audiences can create, discover, and promote talent. Users can upload and share 20-second clips of performances directly from iPhone camera roll.',
            image: tubetnrImage,
            category: 'entertainment',
            technologies: ['Swift 1.0', 'iOS 4.0 & 5.0 SDK', 'Push Notifications', 'RESTful JSON', 'Video Processing'],
            demoUrl: '#',
            githubUrl: '#',
            stats: {
                users: 'Performers',
                rating: '4.1',
            },
            impact: 'Talent discovery platform'
        },
        {
            title: 'IMMOmagazine',
            description: 'First free interactive real estate magazine in Switzerland, available on iPhone and iPad. Features curated property listings from over hundred partner real estate agencies in Switzerland and France.',
            image: immomagazineImage,
            category: 'realestate',
            technologies: ['Objective-C', 'iOS 4.0 & 5.0 SDK', 'Push Notifications', 'JSON', 'PDF Rendering'],
            demoUrl: '#',
            githubUrl: '#',
            stats: {
                users: 'Swiss Market',
                rating: '4.0',
            },
            impact: 'First interactive real estate magazine'
        },
        {
            title: 'Scope It!',
            description: 'Proximity-based communication app enabling users to communicate within 3km radius by posting updates about local happenings, either anonymously or with profile information.',
            image: scopeitImage,
            category: 'social',
            technologies: ['Objective-C', 'iOS 4.0 & 5.0 SDK', 'Google Maps', 'JSON Web Services', 'Location Services'],
            demoUrl: '#',
            githubUrl: '#',
            stats: {
                users: 'Local Community',
                rating: '3.9',
            },
            impact: 'Local community communication'
        }
    ];

    const categories = [
        { id: 'all', name: 'All Projects' },
        { id: 'ecommerce', name: 'E-Commerce' },
        { id: 'healthcare', name: 'Healthcare' },
        { id: 'enterprise', name: 'Enterprise' },
        { id: 'travel', name: 'Travel' },
        { id: 'services', name: 'Services' },
        { id: 'media', name: 'Media' },
        { id: 'automotive', name: 'Automotive' },
        { id: 'social', name: 'Social' },
        { id: 'entertainment', name: 'Entertainment' },
        { id: 'realestate', name: 'Real Estate' }
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
                    className="max-w-7xl mx-auto"
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
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
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