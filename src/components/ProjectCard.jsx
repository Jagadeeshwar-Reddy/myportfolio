import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaUsers, FaStar, FaChartLine } from 'react-icons/fa';

const ProjectCard = ({ project }) => {
    const {
        title,
        description,
        image,
        technologies,
        demoUrl,
        githubUrl,
        stats,
        impact,
    } = project;

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4 }}
            className="group relative rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border"
            style={{
                backgroundColor: 'var(--color-surface-card)',
                borderColor: 'var(--color-border)'
            }}
            onMouseEnter={(e) => {
                e.target.style.borderColor = 'var(--color-primary)';
            }}
            onMouseLeave={(e) => {
                e.target.style.borderColor = 'var(--color-border)';
            }}
        >
            {/* Project Image */}
            <div className="relative h-56 overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                        e.target.src = `https://via.placeholder.com/400x300?text=${encodeURIComponent(title)}`;
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Hover Overlay with Links */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex space-x-4">
                        {githubUrl && githubUrl !== '#' && (
                            <motion.a
                                href={githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-full transition-colors duration-200"
                                style={{
                                    backgroundColor: 'var(--color-surface-glass)',
                                    color: 'var(--color-text-primary)',
                                    backdropFilter: 'blur(8px)'
                                }}
                                whileHover={{
                                    scale: 1.1,
                                    backgroundColor: 'var(--color-surface-card)'
                                }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <FaGithub className="w-5 h-5" />
                            </motion.a>
                        )}
                        {demoUrl && demoUrl !== '#' && (
                            <motion.a
                                href={demoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-full transition-colors duration-200"
                                style={{
                                    backgroundColor: 'var(--color-surface-glass)',
                                    color: 'var(--color-text-primary)',
                                    backdropFilter: 'blur(8px)'
                                }}
                                whileHover={{
                                    scale: 1.1,
                                    backgroundColor: 'var(--color-surface-card)'
                                }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <FaExternalLinkAlt className="w-5 h-5" />
                            </motion.a>
                        )}
                    </div>
                </div>
            </div>

            {/* Project Info */}
            <div className="p-6">
                {/* Title */}
                <h3
                    className="mb-3 transition-colors duration-300"
                    style={{
                        color: 'var(--color-text-primary)',
                        fontFamily: 'var(--font-display)',
                        fontWeight: 'var(--font-weight-bold)',
                        fontSize: 'var(--font-size-xl)',
                        lineHeight: 'var(--line-height-tight)'
                    }}
                >
                    {title}
                </h3>

                {/* Description */}
                <p
                    className="mb-4 line-clamp-3"
                    style={{
                        color: 'var(--color-text-secondary)',
                        fontFamily: 'var(--font-primary)',
                        fontSize: 'var(--font-size-sm)',
                        lineHeight: 'var(--line-height-relaxed)'
                    }}
                >
                    {description}
                </p>

                {/* Project Stats */}
                {stats && (
                    <div
                        className="grid grid-cols-2 gap-4 mb-4 p-3 rounded-xl"
                        style={{
                            backgroundColor: 'var(--color-surface-light)',
                            border: '1px solid var(--color-border)'
                        }}
                    >
                        <div
                            className="flex items-center gap-2"
                            style={{ color: 'var(--color-text-secondary)' }}
                        >
                            <FaUsers
                                className="w-4 h-4"
                                style={{ color: 'var(--color-primary)' }}
                            />
                            <span
                                style={{
                                    fontFamily: 'var(--font-primary)',
                                    fontWeight: 'var(--font-weight-medium)',
                                    fontSize: 'var(--font-size-sm)'
                                }}
                            >
                                {stats.users} Users
                            </span>
                        </div>
                        <div
                            className="flex items-center gap-2"
                            style={{ color: 'var(--color-text-secondary)' }}
                        >
                            <FaStar className="w-4 h-4 text-yellow-500" />
                            <span
                                style={{
                                    fontFamily: 'var(--font-primary)',
                                    fontWeight: 'var(--font-weight-medium)',
                                    fontSize: 'var(--font-size-sm)'
                                }}
                            >
                                {stats.rating} Rating
                            </span>
                        </div>
                    </div>
                )}

                {/* Impact */}
                {impact && (
                    <div className="mb-4">
                        <div
                            className="flex items-center gap-2 mb-2"
                            style={{ color: 'var(--color-text-secondary)' }}
                        >
                            <FaChartLine
                                className="w-4 h-4"
                                style={{ color: 'var(--color-primary)' }}
                            />
                            <span
                                style={{
                                    color: 'var(--color-text-primary)',
                                    fontFamily: 'var(--font-primary)',
                                    fontWeight: 'var(--font-weight-semibold)',
                                    fontSize: 'var(--font-size-sm)'
                                }}
                            >
                                Impact
                            </span>
                        </div>
                        <p
                            className="p-3 rounded-xl border"
                            style={{
                                color: 'var(--color-text-secondary)',
                                fontFamily: 'var(--font-primary)',
                                fontSize: 'var(--font-size-sm)',
                                lineHeight: 'var(--line-height-relaxed)',
                                backgroundColor: 'var(--color-surface-light)',
                                borderColor: 'var(--color-border)'
                            }}
                        >
                            {impact}
                        </p>
                    </div>
                )}

                {/* Technologies */}
                <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                        {technologies.slice(0, 4).map((tech) => (
                            <span
                                key={tech}
                                className="px-3 py-1.5 rounded-full border transition-colors duration-200"
                                style={{
                                    fontFamily: 'var(--font-primary)',
                                    fontWeight: 'var(--font-weight-medium)',
                                    fontSize: 'var(--font-size-xs)',
                                    backgroundColor: 'var(--color-surface-light)',
                                    color: 'var(--color-primary)',
                                    borderColor: 'var(--color-border)'
                                }}
                            >
                                {tech}
                            </span>
                        ))}
                        {technologies.length > 4 && (
                            <span
                                className="px-3 py-1.5 rounded-full border"
                                style={{
                                    fontFamily: 'var(--font-primary)',
                                    fontWeight: 'var(--font-weight-medium)',
                                    fontSize: 'var(--font-size-xs)',
                                    backgroundColor: 'var(--color-surface-light)',
                                    color: 'var(--color-text-muted)',
                                    borderColor: 'var(--color-border)'
                                }}
                            >
                                +{technologies.length - 4} more
                            </span>
                        )}
                    </div>
                </div>

                {/* Project Links */}
                <div
                    className="flex items-center justify-between pt-2 border-t"
                    style={{ borderColor: 'var(--color-border)' }}
                >
                    <div className="flex gap-3">
                        {githubUrl && githubUrl !== '#' && (
                            <a
                                href={githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 transition-colors duration-200"
                                style={{
                                    fontFamily: 'var(--font-primary)',
                                    fontWeight: 'var(--font-weight-medium)',
                                    fontSize: 'var(--font-size-sm)',
                                    color: 'var(--color-text-secondary)'
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.color = 'var(--color-primary)';
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.color = 'var(--color-text-secondary)';
                                }}
                            >
                                <FaGithub className="w-4 h-4" />
                                <span>Code</span>
                            </a>
                        )}
                        {demoUrl && demoUrl !== '#' && (
                            <a
                                href={demoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 transition-colors duration-200"
                                style={{
                                    fontFamily: 'var(--font-primary)',
                                    fontWeight: 'var(--font-weight-medium)',
                                    fontSize: 'var(--font-size-sm)',
                                    color: 'var(--color-text-secondary)'
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.color = 'var(--color-primary)';
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.color = 'var(--color-text-secondary)';
                                }}
                            >
                                <FaExternalLinkAlt className="w-4 h-4" />
                                <span>View App</span>
                            </a>
                        )}
                        {(!githubUrl || githubUrl === '#') && (!demoUrl || demoUrl === '#') && (
                            <span
                                style={{
                                    fontFamily: 'var(--font-primary)',
                                    fontSize: 'var(--font-size-sm)',
                                    fontStyle: 'italic',
                                    color: 'var(--color-text-muted)'
                                }}
                            >
                                App Store Project
                            </span>
                        )}
                    </div>

                    {/* View More Indicator */}
                    <div
                        className="transition-colors duration-200"
                        style={{ color: 'var(--color-text-muted)' }}
                        onMouseEnter={(e) => {
                            e.target.style.color = 'var(--color-primary)';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.color = 'var(--color-text-muted)';
                        }}
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard; 