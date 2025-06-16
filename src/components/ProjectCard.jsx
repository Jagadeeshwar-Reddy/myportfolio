import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaUsers, FaStar } from 'react-icons/fa';

const ProjectCard = ({ project }) => {
    const {
        title,
        description,
        image,
        technologies,
        demoUrl,
        githubUrl,
        stats,
    } = project;

    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-lg shadow-md overflow-hidden"
        >
            {/* Project Image */}
            <div className="relative h-48 overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    onError={(e) => {
                        e.target.src = `https://via.placeholder.com/400x300?text=${encodeURIComponent(title)}`;
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Project Info */}
            <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-600 mb-4">{description}</p>

                {/* Project Stats */}
                {stats && (
                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="flex items-center gap-2 text-gray-700">
                            <FaUsers className="w-4 h-4 text-blue-600" />
                            <span className="text-sm font-medium">{stats.users} Users</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-700">
                            <FaStar className="w-4 h-4 text-yellow-500" />
                            <span className="text-sm font-medium">{stats.rating} Rating</span>
                        </div>
                    </div>
                )}

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {technologies.map((tech) => (
                        <span
                            key={tech}
                            className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Project Links */}
                <div className="flex gap-4">
                    {githubUrl && (
                        <a
                            href={githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors duration-300"
                        >
                            <FaGithub className="w-5 h-5" />
                            <span className="text-sm font-medium">Code</span>
                        </a>
                    )}
                    {demoUrl && (
                        <a
                            href={demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors duration-300"
                        >
                            <FaExternalLinkAlt className="w-5 h-5" />
                            <span className="text-sm font-medium">View App</span>
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard; 