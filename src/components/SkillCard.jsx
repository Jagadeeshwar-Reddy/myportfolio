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
            className="card p-4 sm:p-6"
        >
            <h3
                className="mb-3 sm:mb-4"
                style={{
                    color: 'var(--color-text-primary)',
                    fontFamily: 'var(--font-display)',
                    fontWeight: 'var(--font-weight-semibold)',
                    fontSize: 'var(--font-size-lg)',
                    lineHeight: 'var(--line-height-tight)'
                }}
            >
                {category}
            </h3>
            <div className="space-y-3 sm:space-y-4">
                {skills.map((skill) => (
                    <motion.div key={skill.name} variants={skillVariants}>
                        <div className="flex justify-between mb-1">
                            <span
                                style={{
                                    color: 'var(--color-text-secondary)',
                                    fontFamily: 'var(--font-primary)',
                                    fontWeight: 'var(--font-weight-medium)',
                                    fontSize: 'var(--font-size-xs)'
                                }}
                            >
                                {skill.name}
                            </span>
                            <span
                                style={{
                                    color: 'var(--color-text-muted)',
                                    fontFamily: 'var(--font-primary)',
                                    fontSize: 'var(--font-size-xs)'
                                }}
                            >
                                {skill.level}%
                            </span>
                        </div>
                        <div
                            className="w-full rounded-full h-1.5 sm:h-2"
                            style={{ background: 'var(--color-surface-light)' }}
                        >
                            <motion.div
                                className="h-1.5 sm:h-2 rounded-full"
                                style={{ background: 'var(--gradient-primary)' }}
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