import React from 'react';
import { motion } from 'framer-motion';
import {
    FaBuilding,
    FaCalendarAlt,
    FaMapMarkerAlt,
    FaCode,
    FaMobile,
    FaUsers,
    FaRocket,
    FaCog,
    FaShieldAlt,
    FaChartLine,
    FaShoppingCart,
    FaGlobe,
    FaCloud,
    FaTools,
    FaCheckCircle,
    FaBriefcase,
    FaStar
} from 'react-icons/fa';

// Import company logos
import tescoLogo from '../assets/images/companies/tesco-logo.png';
import teleparadigmLogo from '../assets/images/companies/teleparadigm-logo.png';

const Experience = () => {
    const experiences = [
        {
            company: "Tesco Bengaluru Pvt Ltd",
            position: "Software Development Engineer II",
            duration: "Aug 2015 - Present",
            year: "2015",
            location: "Bengaluru, Karnataka",
            type: "Full-time",
            logo: tescoLogo,
            description: "Leading iOS development for Tesco Groceries app, serving over 1.5 million customers across multiple regions with focus on scalable e-commerce solutions.",
            responsibilities: [
                "Engineered and built the Tesco Groceries app from scratch, collaborating with senior engineers and architects",
                "Serving over 1.5 million iOS customers and facilitating an average of 80K daily orders from iOS app",
                "Implemented CI/CD pipelines on Azure platform to streamline application distribution",
                "Led the QA-Automation initiative, reducing regression testing time by over 40% and saving ~36 hours of manual testing per release",
                "Mentored junior engineers, promoting technical excellence and best practices in mobile app development",
                "Collaborated with stakeholders across multiple regions (UK, Ireland, Czech Republic, Hungary, Slovakia)"
            ],
            technologies: ["Swift", "SwiftUI", "Objective-C", "Xcode", "Azure DevOps", "GraphQL", "CocoaPods", "Git", "Jenkins", "Fastlane"],
            achievements: [
                "Successfully delivered Tesco Groceries app serving 1.5M+ customers across 5 regions",
                "Reduced regression testing time by 40% through QA automation framework",
                "Facilitated 80K daily orders through iOS app optimization",
                "Streamlined app release cycles and enhanced quality for mango releases"
            ]
        },
        {
            company: "TeleParadigm Networks Ltd",
            position: "Senior Software Engineer",
            duration: "August 2011 - July 2015",
            year: "2011",
            location: "Hyderabad, India",
            type: "Full-time",
            logo: teleparadigmLogo,
            description: "Architected and developed over 20 iOS applications from inception to production, specializing in diverse client solutions across various industries.",
            responsibilities: [
                "Architected and developed over 20 iOS applications from inception to production",
                "Led and mentored developers, fostering skill development and sharing best practices",
                "Collaborated closely with developers and QA engineers to deliver high-quality features",
                "Drove the design of new product features and ensured robust, scalable solutions",
                "Worked on diverse projects including real estate, healthcare, and entertainment apps",
                "Implemented various iOS architectural patterns and best practices"
            ],
            technologies: ["Swift", "Objective-C", "UIKit", "Core Data", "SQLite", "REST APIs", "JSON", "CocoaPods", "Git", "Xcode"],
            achievements: [
                "Successfully developed and launched 20+ iOS applications on App Store",
                "Led development of innovative apps like homePad, UBlood, and Sydney Airport app",
                "Established best practices and mentoring programs for junior developers",
                "Delivered high-quality solutions across multiple industries and client requirements"
            ]
        }
    ];

    // Use the original array order (current company first)
    const chronologicalExperiences = experiences;

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
            {/* Timeline Section */}
            <section className="section relative overflow-hidden">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-20"
                    >
                        <h1 className="text-gradient mb-6 text-5xl md:text-6xl font-bold">Professional Journey</h1>
                    </motion.div>

                    {/* Timeline */}
                    <div className="relative">
                        {/* Central Timeline Line */}
                        <div className="absolute left-[80%] transform -translate-x-1/2 w-1 bg-indigo-500 hidden lg:block"
                            style={{ top: '50px', bottom: '50px', height: 'auto' }}></div>

                        {/* Present Badge at Top */}
                        <div className="absolute left-[80%] -translate-x-1/2 top-0 z-20">
                            <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 text-white px-8 py-3 rounded-full text-lg font-bold shadow-lg flex items-center space-x-2">
                                <FaBriefcase className="w-5 h-5" />
                                <span>Present</span>
                            </div>
                        </div>

                        {/* Timeline Items */}
                        <div className="space-y-16 lg:space-y-24">
                            {chronologicalExperiences.map((exp, index) => (
                                <motion.div
                                    key={exp.company}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: index * 0.2 }}
                                    viewport={{ once: true }}
                                    className="relative flex items-center lg:gap-12"
                                >
                                    {/* Experience Card */}
                                    <div className="w-full lg:w-4/5 lg:pr-24">
                                        <motion.div
                                            whileHover={{ y: -5 }}
                                            className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:border-slate-200 overflow-hidden group p-6 md:p-8"
                                        >
                                            {/* Card Header */}
                                            <div className="bg-gradient-to-r from-slate-50 to-white p-8 border-b border-slate-100 mb-6">
                                                <div className="flex items-center space-x-6">
                                                    <div className="w-20 h-20 flex items-center justify-center bg-white rounded-2xl shadow-md border border-slate-200 p-3 group-hover:shadow-lg transition-all duration-300">
                                                        <img
                                                            src={exp.logo}
                                                            alt={`${exp.company} logo`}
                                                            className="max-w-full max-h-full object-contain"
                                                            onError={(e) => {
                                                                e.target.style.display = 'none';
                                                                e.target.nextSibling.style.display = 'block';
                                                            }}
                                                        />
                                                        <div
                                                            className="text-2xl text-slate-400 hidden"
                                                            style={{ display: 'none' }}
                                                        >
                                                            🏢
                                                        </div>
                                                    </div>
                                                    <div className="flex-1">
                                                        <h3 className="text-2xl font-bold text-slate-900 mb-1 group-hover:text-indigo-600 transition-colors duration-300">
                                                            {exp.position}
                                                        </h3>
                                                        <p className="text-lg text-indigo-600 font-semibold mb-2">
                                                            {exp.company}
                                                        </p>
                                                        <div className="flex items-center space-x-4 text-sm text-slate-600">
                                                            <div className="flex items-center space-x-1">
                                                                <FaCalendarAlt className="text-indigo-500 w-3 h-3" />
                                                                <span>{exp.duration}</span>
                                                            </div>
                                                            <div className="flex items-center space-x-1">
                                                                <FaMapMarkerAlt className="text-indigo-500 w-3 h-3" />
                                                                <span>{exp.location}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Key Impact Highlight */}
                                            <div className="mb-6">
                                                <div className="flex items-center gap-2 text-slate-700 mb-2">
                                                    <FaRocket className="w-5 h-5 text-green-500" />
                                                    <span className="text-base font-semibold text-slate-900">Key Impact</span>
                                                </div>
                                                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-xl border border-green-100 text-slate-700 font-medium text-sm">
                                                    {exp.achievements[0]}
                                                </div>
                                            </div>
                                            {/* Two-column layout for details */}
                                            <div className="flex flex-col lg:flex-row gap-8">
                                                {/* Responsibilities */}
                                                <div className="flex-1">
                                                    <div className="flex items-center gap-2 mb-3">
                                                        <FaUsers className="text-indigo-500 w-5 h-5" />
                                                        <h4 className="text-lg font-bold text-slate-900">Key Responsibilities</h4>
                                                    </div>
                                                    <ul className="space-y-3">
                                                        {exp.responsibilities.map((resp, idx) => (
                                                            <li key={idx} className="flex items-start gap-2">
                                                                <FaCheckCircle className="text-indigo-400 mt-1 w-4 h-4 flex-shrink-0" />
                                                                <span className="text-sm text-slate-700">{resp}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                                {/* Achievements & Tech Stack */}
                                                <div className="flex-1 flex flex-col gap-8">
                                                    {/* Achievements */}
                                                    <div>
                                                        <div className="flex items-center gap-2 mb-3">
                                                            <FaStar className="text-yellow-500 w-5 h-5" />
                                                            <h4 className="text-lg font-bold text-slate-900">Achievements</h4>
                                                        </div>
                                                        <ul className="space-y-3">
                                                            {exp.achievements.map((ach, idx) => (
                                                                <li key={idx} className="flex items-start gap-2">
                                                                    <FaCheckCircle className="text-yellow-400 mt-1 w-4 h-4 flex-shrink-0" />
                                                                    <span className="text-sm text-slate-700">{ach}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                    {/* Tech Stack */}
                                                    <div>
                                                        <div className="flex items-center gap-2 mb-3">
                                                            <FaCode className="text-indigo-500 w-5 h-5" />
                                                            <h4 className="text-lg font-bold text-slate-900">Technologies</h4>
                                                        </div>
                                                        <div className="flex flex-wrap gap-2">
                                                            {exp.technologies.map((tech, idx) => (
                                                                <span
                                                                    key={idx}
                                                                    className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-xs font-medium border border-indigo-100 flex items-center gap-1"
                                                                >
                                                                    <FaCode className="w-3 h-3 text-indigo-400" /> {tech}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Description at the bottom */}
                                            <div className="mt-8 border-t border-slate-100 pt-6">
                                                <p className="text-slate-600 leading-relaxed text-base">
                                                    {exp.description}
                                                </p>
                                            </div>
                                        </motion.div>
                                    </div>

                                    {/* Timeline Dot */}
                                    <div className="absolute left-[80%] transform -translate-x-1/2 w-6 h-6 bg-indigo-500 rounded-full border-4 border-white shadow-lg z-10 hidden lg:block">
                                        <div className="w-full h-full bg-indigo-500 rounded-full animate-pulse"></div>
                                    </div>

                                    {/* Year Badge */}
                                    {index === 1 && (
                                        <div className="absolute left-[80%] transform -translate-x-1/2 -translate-y-1/2 top-0 mb-6">
                                            <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                                                2015
                                            </div>
                                        </div>
                                    )}
                                </motion.div>
                            ))}
                        </div>

                        {/* Timeline End Point */}
                        <div className="absolute left-[80%] -translate-x-1/2 bottom-0 z-20">
                            <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 text-white px-8 py-3 rounded-full text-lg font-bold shadow-lg flex items-center">
                                <span>2011</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Experience; 