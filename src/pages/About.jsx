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
        <section id="about" className="py-20 bg-gray-50">
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
                        About Me
                    </motion.h2>

                    {/* About Content */}
                    <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                        {/* About Text */}
                        <motion.div variants={itemVariants}>
                            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                                Senior iOS Developer
                            </h3>
                            <p className="text-gray-600 mb-4">
                                I am a Senior iOS Developer with 13+ years of experience in building
                                enterprise-grade applications. My expertise lies in developing
                                scalable and secure iOS applications for diverse industries including
                                e-commerce, real estate, and healthcare.
                            </p>
                            <p className="text-gray-600 mb-4">
                                Throughout my career, I have successfully delivered numerous
                                high-impact projects, mentored development teams, and driven
                                technical innovation. I specialize in Swift, SwiftUI, and UIKit,
                                with a strong focus on creating intuitive user interfaces and
                                robust backend integrations.
                            </p>
                            <p className="text-gray-600">
                                I am passionate about staying current with the latest iOS
                                development trends and best practices, ensuring that the
                                applications I build are not only technically sound but also
                                provide exceptional user experiences.
                            </p>
                        </motion.div>

                        {/* Skills Grid */}
                        <motion.div
                            className="grid gap-6"
                            variants={containerVariants}
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
                        className="grid md:grid-cols-3 gap-8"
                        variants={containerVariants}
                    >
                        <InfoCard
                            title="Experience"
                            content="13+ Years in iOS Development"
                            variants={itemVariants}
                        />
                        <InfoCard
                            title="Education"
                            content="B.Tech in Computer Science"
                            variants={itemVariants}
                        />
                        <InfoCard
                            title="Location"
                            content="Hyderabad, India"
                            variants={itemVariants}
                        />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

const InfoCard = ({ title, content, variants }) => (
    <motion.div
        variants={variants}
        className="bg-white p-6 rounded-lg shadow-md text-center"
    >
        <h4 className="text-lg font-semibold text-gray-900 mb-2">{title}</h4>
        <p className="text-gray-600">{content}</p>
    </motion.div>
);

export default About; 