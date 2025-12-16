import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Loader, Star, Code } from 'lucide-react';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch('https://api.github.com/users/LheaneX/repos');
                if (!response.ok) {
                    throw new Error('Failed to fetch projects');
                }
                const data = await response.json();
                const sortedData = data
                    .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
                    .slice(0, 6); // Limit to top 6 recently updated
                setProjects(sortedData);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center h-64">
                <Loader className="animate-spin text-primary" size={48} />
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-center text-red-500 py-12 bg-red-50 rounded-xl">
                <p>Error loading projects: {error}</p>
            </div>
        );
    }

    return (
        <div className="max-w-6xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-12 text-center"
            >
                <span className="text-primary font-semibold uppercase tracking-wider text-sm mb-2 block">My Work</span>
                <h2 className="text-4xl font-bold text-slate-900">Featured Projects</h2>
            </motion.div>

            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
                {projects.map((project) => (
                    <motion.div
                        key={project.id}
                        variants={item}
                        whileHover={{ y: -8, transition: { duration: 0.2 } }}
                        className="group bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-xl hover:border-primary/20 transition-all duration-300 flex flex-col h-full"
                    >
                        <div className="flex justify-between items-start mb-6">
                            <div className="p-3 bg-blue-50 text-blue-600 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                                <Code size={24} />
                            </div>
                            <div className="flex space-x-3">
                                <a
                                    href={project.html_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-slate-400 hover:text-primary transition-colors"
                                    title="View Source"
                                >
                                    <Github size={20} />
                                </a>
                                {project.homepage && (
                                    <a
                                        href={project.homepage}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-slate-400 hover:text-primary transition-colors"
                                        title="View Demo"
                                    >
                                        <ExternalLink size={20} />
                                    </a>
                                )}
                            </div>
                        </div>

                        <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">
                            {project.name}
                        </h3>

                        <p className="text-slate-600 mb-6 flex-grow text-sm leading-relaxed line-clamp-3">
                            {project.description || "No description provided for this project."}
                        </p>

                        <div className="pt-4 border-t border-slate-50 flex items-center justify-between text-xs font-medium text-slate-500">
                            <span className="flex items-center">
                                <span className={`w-2.5 h-2.5 rounded-full mr-2 ${project.language ? 'bg-primary' : 'bg-slate-300'}`}></span>
                                {project.language || 'Code'}
                            </span>
                            <span className="flex items-center text-amber-500">
                                <Star size={14} className="mr-1 fill-current" /> {project.stargazers_count}
                            </span>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            <div className="mt-12 text-center">
                <a
                    href="https://github.com/LheaneX"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary font-medium hover:text-blue-700 transition-colors"
                >
                    View all repositories on GitHub <ExternalLink className="ml-2" size={16} />
                </a>
            </div>
        </div>
    );
};

export default Projects;
