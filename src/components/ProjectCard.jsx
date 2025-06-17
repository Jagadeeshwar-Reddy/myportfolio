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
            className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-100 hover:border-slate-200"
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
                                className="bg-white/90 backdrop-blur-sm text-slate-800 p-3 rounded-full hover:bg-white transition-colors duration-200"
                                whileHover={{ scale: 1.1 }}
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
                                className="bg-white/90 backdrop-blur-sm text-slate-800 p-3 rounded-full hover:bg-white transition-colors duration-200"
                                whileHover={{ scale: 1.1 }}
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
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors duration-300">
                    {title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 mb-4 text-sm leading-relaxed line-clamp-3">
                    {description}
                </p>

                {/* Project Stats */}
                {stats && (
                    <div className="grid grid-cols-2 gap-4 mb-4 p-3 bg-slate-50 rounded-xl">
                        <div className="flex items-center gap-2 text-slate-700">
                            <FaUsers className="w-4 h-4 text-indigo-500" />
                            <span className="text-sm font-medium">{stats.users} Users</span>
                        </div>
                        <div className="flex items-center gap-2 text-slate-700">
                            <FaStar className="w-4 h-4 text-yellow-500" />
                            <span className="text-sm font-medium">{stats.rating} Rating</span>
                        </div>
                    </div>
                )}

                {/* Impact */}
                {impact && (
                    <div className="mb-4">
                        <div className="flex items-center gap-2 text-slate-700 mb-2">
                            <FaChartLine className="w-4 h-4 text-green-500" />
                            <span className="text-sm font-semibold text-slate-900">Impact</span>
                        </div>
                        <p className="text-sm text-slate-600 bg-gradient-to-r from-green-50 to-emerald-50 p-3 rounded-xl border border-green-100">
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
                                className="px-3 py-1.5 bg-indigo-50 text-indigo-700 rounded-full text-xs font-medium border border-indigo-100 hover:bg-indigo-100 transition-colors duration-200"
                            >
                                {tech}
                            </span>
                        ))}
                        {technologies.length > 4 && (
                            <span className="px-3 py-1.5 bg-slate-50 text-slate-600 rounded-full text-xs font-medium border border-slate-200">
                                +{technologies.length - 4} more
                            </span>
                        )}
                    </div>
                </div>

                {/* Project Links */}
                <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                    <div className="flex gap-3">
                        {githubUrl && githubUrl !== '#' && (
                            <a
                                href={githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-slate-600 hover:text-indigo-600 transition-colors duration-200 text-sm font-medium"
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
                                className="flex items-center gap-2 text-slate-600 hover:text-indigo-600 transition-colors duration-200 text-sm font-medium"
                            >
                                <FaExternalLinkAlt className="w-4 h-4" />
                                <span>View App</span>
                            </a>
                        )}
                        {(!githubUrl || githubUrl === '#') && (!demoUrl || demoUrl === '#') && (
                            <span className="text-sm text-slate-500 italic">App Store Project</span>
                        )}
                    </div>

                    {/* View More Indicator */}
                    <div className="text-slate-400 group-hover:text-indigo-500 transition-colors duration-200">
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