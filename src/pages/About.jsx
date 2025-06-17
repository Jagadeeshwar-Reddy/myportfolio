import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SkillCard from '@components/SkillCard';

const About = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const skills = [
        {
            category: 'iOS Development',
            skills: [
                { name: 'Swift', level: 95 },
                { name: 'Objective-C', level: 90 },
                { name: 'SwiftUI', level: 85 },
                { name: 'UIKit', level: 95 },
                { name: 'Core Data', level: 90 },
                { name: 'Combine', level: 85 },
                { name: 'Core Animation', level: 90 },
                { name: 'Auto Layout', level: 95 },
            ],
        },
        {
            category: 'Tools & Technologies',
            skills: [
                { name: 'Git', level: 90 },
                { name: 'CI/CD', level: 85 },
                { name: 'Firebase', level: 80 },
                { name: 'REST APIs', level: 90 },
                { name: 'Core ML', level: 75 },
                { name: 'TestFlight', level: 90 },
                { name: 'App Store Connect', level: 90 },
                { name: 'Xcode', level: 95 },
            ],
        },
        {
            category: 'Soft Skills',
            skills: [
                { name: 'Team Leadership', level: 95 },
                { name: 'Problem Solving', level: 90 },
                { name: 'Communication', level: 85 },
                { name: 'Mentoring', level: 90 },
                { name: 'Agile/Scrum', level: 90 },
                { name: 'Code Review', level: 95 },
                { name: 'Technical Documentation', level: 85 },
                { name: 'Project Management', level: 80 },
            ],
        },
    ];

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
                            About Me
                        </motion.h2>

                        {/* About Content */}
                        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start lg:items-center mb-12 lg:mb-16">
                            {/* About Text */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                animate={inView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.6, delay: 0.4 }}
                            >
                                <h3
                                    className="mb-4"
                                    style={{
                                        color: 'var(--color-text-primary)',
                                        fontFamily: 'var(--font-display)',
                                        fontWeight: 'var(--font-weight-semibold)',
                                        fontSize: 'var(--font-size-xl)',
                                        lineHeight: 'var(--line-height-tight)'
                                    }}
                                >
                                    Principal iOS Engineer
                                </h3>
                                <p
                                    className="mb-4"
                                    style={{
                                        color: 'var(--color-text-secondary)',
                                        fontFamily: 'var(--font-primary)',
                                        fontSize: 'var(--font-size-base)',
                                        lineHeight: 'var(--line-height-relaxed)'
                                    }}
                                >
                                    I am a Principal iOS Engineer with 13+ years of experience in building
                                    enterprise-grade applications. My expertise lies in developing
                                    scalable and secure iOS applications for diverse industries including
                                    e-commerce, real estate, and healthcare.
                                </p>
                                <p
                                    className="mb-4"
                                    style={{
                                        color: 'var(--color-text-secondary)',
                                        fontFamily: 'var(--font-primary)',
                                        fontSize: 'var(--font-size-base)',
                                        lineHeight: 'var(--line-height-relaxed)'
                                    }}
                                >
                                    Throughout my career, I have successfully delivered numerous
                                    high-impact projects, mentored development teams, and driven
                                    technical innovation. I specialize in Swift, SwiftUI, and UIKit,
                                    with a strong focus on creating intuitive user interfaces and
                                    robust backend integrations.
                                </p>
                                <p
                                    style={{
                                        color: 'var(--color-text-secondary)',
                                        fontFamily: 'var(--font-primary)',
                                        fontSize: 'var(--font-size-base)',
                                        lineHeight: 'var(--line-height-relaxed)'
                                    }}
                                >
                                    I am passionate about staying current with the latest iOS
                                    development trends and best practices, ensuring that the
                                    applications I build are not only technically sound but also
                                    provide exceptional user experiences.
                                </p>
                            </motion.div>

                            {/* Skills Grid */}
                            <motion.div
                                className="grid gap-4 lg:gap-6"
                                initial={{ opacity: 0, x: 30 }}
                                animate={inView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.6, delay: 0.6 }}
                            >
                                {skills.map((category, index) => (
                                    <SkillCard
                                        key={category.category}
                                        category={category.category}
                                        skills={category.skills}
                                        delay={index * 0.2}
                                    />
                                ))}
                            </motion.div>
                        </div>

                        {/* Additional Info */}
                        <motion.div
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.8 }}
                        >
                            <InfoCard
                                title="Experience"
                                content="13+ Years in iOS Development"
                            />
                            <InfoCard
                                title="Education"
                                content="B.Tech in Computer Science"
                            />
                            <InfoCard
                                title="Location"
                                content="Hyderabad, India"
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

const InfoCard = ({ title, content }) => (
    <motion.div
        whileHover={{ y: -5 }}
        className="card text-center p-6"
    >
        <h4
            className="mb-2"
            style={{
                color: 'var(--color-text-primary)',
                fontFamily: 'var(--font-display)',
                fontWeight: 'var(--font-weight-semibold)',
                fontSize: 'var(--font-size-lg)',
                lineHeight: 'var(--line-height-tight)'
            }}
        >
            {title}
        </h4>
        <p style={{
            color: 'var(--color-text-secondary)',
            fontFamily: 'var(--font-primary)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 'var(--line-height-relaxed)'
        }}>
            {content}
        </p>
    </motion.div>
);

export default About; 