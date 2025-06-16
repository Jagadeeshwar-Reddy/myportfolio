import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

const SkillCard = ({ category, skills, delay = 0 }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start('visible');
        }
    }, [isInView, controls]);

    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                delay,
                duration: 0.5,
                staggerChildren: 0.1,
            },
        },
    };

    const skillVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 },
    };

    return (
        <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="bg-white rounded-lg shadow-md p-6"
        >
            <h3 className="text-xl font-semibold text-gray-900 mb-4">{category}</h3>
            <div className="space-y-4">
                {skills.map((skill) => (
                    <motion.div key={skill.name} variants={skillVariants}>
                        <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium text-gray-700">
                                {skill.name}
                            </span>
                            <span className="text-sm text-gray-500">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                            <motion.div
                                className="bg-blue-600 h-2 rounded-full"
                                initial={{ width: 0 }}
                                animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                                transition={{ duration: 1, delay: delay + 0.2 }}
                            />
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default SkillCard; 