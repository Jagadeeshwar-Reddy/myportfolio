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
        <div className="min-h-screen" style={{ background: 'var(--gradient-bg)' }}>
            {/* Timeline Section */}
            <section className="section relative overflow-hidden">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-20"
                    >
                        <h1
                            className="text-gradient mb-6"
                            style={{
                                fontFamily: 'var(--font-display)',
                                fontWeight: 'var(--font-weight-bold)',
                                fontSize: 'var(--font-size-6xl)',
                                lineHeight: 'var(--line-height-tight)',
                                letterSpacing: 'var(--letter-spacing-tight)'
                            }}
                        >
                            Professional Journey
                        </h1>
                    </motion.div>

                    {/* Timeline */}
                    <div className="relative">
                        {/* Central Timeline Line */}
                        <div
                            className="absolute left-[80%] transform -translate-x-1/2 w-1 hidden lg:block"
                            style={{
                                top: '50px',
                                bottom: '50px',
                                height: 'auto',
                                background: 'var(--color-primary)'
                            }}
                        ></div>

                        {/* Present Badge at Top */}
                        <div className="absolute left-[80%] -translate-x-1/2 top-0 z-20">
                            <div
                                className="text-white px-8 py-3 rounded-full shadow-lg flex items-center space-x-2"
                                style={{
                                    background: 'var(--gradient-primary)',
                                    fontFamily: 'var(--font-primary)',
                                    fontWeight: 'var(--font-weight-bold)',
                                    fontSize: 'var(--font-size-lg)'
                                }}
                            >
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
                                            className="rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group p-6 md:p-8"
                                            style={{
                                                background: 'var(--color-surface-card)',
                                                border: '1px solid var(--color-border)'
                                            }}
                                        >
                                            {/* Card Header */}
                                            <div
                                                className="p-8 border-b mb-6"
                                                style={{
                                                    background: 'var(--color-surface-light)',
                                                    borderColor: 'var(--color-border)'
                                                }}
                                            >
                                                <div className="flex items-center space-x-6">
                                                    <div
                                                        className="w-20 h-20 flex items-center justify-center rounded-2xl shadow-md border p-3 group-hover:shadow-lg transition-all duration-300"
                                                        style={{
                                                            background: 'var(--color-surface-card)',
                                                            borderColor: 'var(--color-border)'
                                                        }}
                                                    >
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
                                                            className="text-2xl hidden"
                                                            style={{
                                                                display: 'none',
                                                                color: 'var(--color-text-muted)'
                                                            }}
                                                        >
                                                            🏢
                                                        </div>
                                                    </div>
                                                    <div className="flex-1">
                                                        <h3
                                                            className="mb-1 group-hover:transition-colors duration-300"
                                                            style={{
                                                                color: 'var(--color-text-primary)',
                                                                fontFamily: 'var(--font-display)',
                                                                fontWeight: 'var(--font-weight-bold)',
                                                                fontSize: 'var(--font-size-2xl)',
                                                                lineHeight: 'var(--line-height-tight)'
                                                            }}
                                                        >
                                                            {exp.position}
                                                        </h3>
                                                        <p
                                                            className="mb-2"
                                                            style={{
                                                                color: 'var(--color-primary)',
                                                                fontFamily: 'var(--font-primary)',
                                                                fontWeight: 'var(--font-weight-semibold)',
                                                                fontSize: 'var(--font-size-lg)'
                                                            }}
                                                        >
                                                            {exp.company}
                                                        </p>
                                                        <div
                                                            className="flex items-center space-x-4"
                                                            style={{
                                                                color: 'var(--color-text-secondary)',
                                                                fontFamily: 'var(--font-primary)',
                                                                fontSize: 'var(--font-size-sm)'
                                                            }}
                                                        >
                                                            <div className="flex items-center space-x-1">
                                                                <FaCalendarAlt className="w-3 h-3" style={{ color: 'var(--color-primary)' }} />
                                                                <span>{exp.duration}</span>
                                                            </div>
                                                            <div className="flex items-center space-x-1">
                                                                <FaMapMarkerAlt className="w-3 h-3" style={{ color: 'var(--color-primary)' }} />
                                                                <span>{exp.location}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Key Impact Highlight */}
                                            <div className="mb-6">
                                                <div className="flex items-center gap-2 mb-2" style={{ color: 'var(--color-text-secondary)' }}>
                                                    <FaRocket className="w-5 h-5" style={{ color: 'var(--color-primary)' }} />
                                                    <span
                                                        style={{
                                                            color: 'var(--color-text-primary)',
                                                            fontFamily: 'var(--font-primary)',
                                                            fontWeight: 'var(--font-weight-semibold)',
                                                            fontSize: 'var(--font-size-base)'
                                                        }}
                                                    >
                                                        Key Impact
                                                    </span>
                                                </div>
                                                <div
                                                    className="p-4 rounded-xl border"
                                                    style={{
                                                        background: 'var(--color-surface-light)',
                                                        borderColor: 'var(--color-border)',
                                                        color: 'var(--color-text-secondary)',
                                                        fontFamily: 'var(--font-primary)',
                                                        fontWeight: 'var(--font-weight-medium)',
                                                        fontSize: 'var(--font-size-sm)',
                                                        lineHeight: 'var(--line-height-relaxed)'
                                                    }}
                                                >
                                                    {exp.achievements[0]}
                                                </div>
                                            </div>
                                            {/* Two-column layout for details */}
                                            <div className="flex flex-col lg:flex-row gap-8">
                                                {/* Responsibilities */}
                                                <div className="flex-1">
                                                    <div className="flex items-center gap-2 mb-3">
                                                        <FaUsers className="w-5 h-5" style={{ color: 'var(--color-primary)' }} />
                                                        <h4
                                                            style={{
                                                                color: 'var(--color-text-primary)',
                                                                fontFamily: 'var(--font-display)',
                                                                fontWeight: 'var(--font-weight-bold)',
                                                                fontSize: 'var(--font-size-lg)',
                                                                lineHeight: 'var(--line-height-tight)'
                                                            }}
                                                        >
                                                            Key Responsibilities
                                                        </h4>
                                                    </div>
                                                    <ul className="space-y-3">
                                                        {exp.responsibilities.map((resp, idx) => (
                                                            <li key={idx} className="flex items-start gap-2">
                                                                <FaCheckCircle className="mt-1 w-4 h-4 flex-shrink-0" style={{ color: 'var(--color-primary-light)' }} />
                                                                <span
                                                                    style={{
                                                                        color: 'var(--color-text-secondary)',
                                                                        fontFamily: 'var(--font-primary)',
                                                                        fontSize: 'var(--font-size-sm)',
                                                                        lineHeight: 'var(--line-height-relaxed)'
                                                                    }}
                                                                >
                                                                    {resp}
                                                                </span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                                {/* Achievements & Tech Stack */}
                                                <div className="flex-1 flex flex-col gap-8">
                                                    {/* Achievements */}
                                                    <div>
                                                        <div className="flex items-center gap-2 mb-3">
                                                            <FaStar className="w-5 h-5" style={{ color: 'var(--color-accent)' }} />
                                                            <h4
                                                                style={{
                                                                    color: 'var(--color-text-primary)',
                                                                    fontFamily: 'var(--font-display)',
                                                                    fontWeight: 'var(--font-weight-bold)',
                                                                    fontSize: 'var(--font-size-lg)',
                                                                    lineHeight: 'var(--line-height-tight)'
                                                                }}
                                                            >
                                                                Achievements
                                                            </h4>
                                                        </div>
                                                        <ul className="space-y-3">
                                                            {exp.achievements.map((ach, idx) => (
                                                                <li key={idx} className="flex items-start gap-2">
                                                                    <FaCheckCircle className="mt-1 w-4 h-4 flex-shrink-0" style={{ color: 'var(--color-accent)' }} />
                                                                    <span
                                                                        style={{
                                                                            color: 'var(--color-text-secondary)',
                                                                            fontFamily: 'var(--font-primary)',
                                                                            fontSize: 'var(--font-size-sm)',
                                                                            lineHeight: 'var(--line-height-relaxed)'
                                                                        }}
                                                                    >
                                                                        {ach}
                                                                    </span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                    {/* Tech Stack */}
                                                    <div>
                                                        <div className="flex items-center gap-2 mb-3">
                                                            <FaCode className="w-5 h-5" style={{ color: 'var(--color-primary)' }} />
                                                            <h4
                                                                style={{
                                                                    color: 'var(--color-text-primary)',
                                                                    fontFamily: 'var(--font-display)',
                                                                    fontWeight: 'var(--font-weight-bold)',
                                                                    fontSize: 'var(--font-size-lg)',
                                                                    lineHeight: 'var(--line-height-tight)'
                                                                }}
                                                            >
                                                                Technologies
                                                            </h4>
                                                        </div>
                                                        <div className="flex flex-wrap gap-2">
                                                            {exp.technologies.map((tech, idx) => (
                                                                <span
                                                                    key={idx}
                                                                    className="px-3 py-1 rounded-full border flex items-center gap-1"
                                                                    style={{
                                                                        background: 'var(--color-surface-light)',
                                                                        color: 'var(--color-primary)',
                                                                        borderColor: 'var(--color-border)',
                                                                        fontFamily: 'var(--font-primary)',
                                                                        fontWeight: 'var(--font-weight-medium)',
                                                                        fontSize: 'var(--font-size-xs)'
                                                                    }}
                                                                >
                                                                    <FaCode className="w-3 h-3" style={{ color: 'var(--color-primary-light)' }} /> {tech}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Description at the bottom */}
                                            <div className="mt-8 border-t pt-6" style={{ borderColor: 'var(--color-border)' }}>
                                                <p className="leading-relaxed text-base" style={{ color: 'var(--color-text-secondary)' }}>
                                                    {exp.description}
                                                </p>
                                            </div>
                                        </motion.div>
                                    </div>

                                    {/* Timeline Dot */}
                                    <div
                                        className="absolute left-[80%] transform -translate-x-1/2 w-6 h-6 rounded-full border-4 shadow-lg z-10 hidden lg:block"
                                        style={{
                                            background: 'var(--color-primary)',
                                            borderColor: 'var(--color-surface-card)'
                                        }}
                                    >
                                        <div
                                            className="w-full h-full rounded-full animate-pulse"
                                            style={{ background: 'var(--color-primary)' }}
                                        ></div>
                                    </div>

                                    {/* Year Badge */}
                                    {index === 1 && (
                                        <div className="absolute left-[80%] transform -translate-x-1/2 -translate-y-1/2 top-0 mb-6">
                                            <div
                                                className="text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg"
                                                style={{ background: 'var(--gradient-primary)' }}
                                            >
                                                2015
                                            </div>
                                        </div>
                                    )}
                                </motion.div>
                            ))}
                        </div>

                        {/* Timeline End Point */}
                        <div className="absolute left-[80%] -translate-x-1/2 bottom-0 z-20">
                            <div
                                className="text-white px-8 py-3 rounded-full text-lg font-bold shadow-lg flex items-center"
                                style={{ background: 'var(--gradient-primary)' }}
                            >
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