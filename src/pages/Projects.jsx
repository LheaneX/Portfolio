import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Loader, Star, Code, Globe } from 'lucide-react';
import { SectionHeader } from '../components/ui/Section';
import TiltCard from '../components/ui/TiltCard';
import {
    customDescriptions,
    deployedLinks,
    profile,
} from '../data/site';

const listVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0 },
};

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch(
                    `https://api.github.com/users/${profile.githubUsername}/repos?sort=updated&per_page=30`,
                );
                if (!response.ok) throw new Error('Failed to fetch projects');

                const data = await response.json();
                const enriched = data
                    .map((repo) => ({
                        ...repo,
                        homepage: repo.homepage || deployedLinks[repo.name] || null,
                        description: repo.description || customDescriptions[repo.name] || null,
                    }))
                    .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
                    .slice(0, 6);

                setProjects(enriched);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    if (loading) {
        return (
            <div className="flex h-64 items-center justify-center">
                <Loader className="animate-spin text-primary" size={40} />
            </div>
        );
    }

    if (error) {
        return (
            <div className="rounded-xl border border-red-200 bg-red-50 py-12 text-center text-red-600">
                Error loading projects: {error}
            </div>
        );
    }

    return (
        <div className="mx-auto max-w-6xl">
            <SectionHeader
                eyebrow="Projects"
                title="Software I've built"
                description="A selection of repositories and applications — coursework, experiments, and production-ready tools."
            />

            <motion.div
                variants={listVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
            >
                {projects.map((project) => (
                    <motion.article
                        key={project.id}
                        variants={cardVariants}
                        whileHover={{ y: -4 }}
                        className="group flex h-full flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:border-primary/20 hover:shadow-md"
                    >
                        <div className="mb-4 flex items-start justify-between">
                            <TiltCard intensity={12} className="inline-block">
                                <div className="rounded-lg bg-blue-50 p-2.5 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                                    <Code size={22} />
                                </div>
                            </TiltCard>
                            <div className="flex gap-3">
                                <a
                                    href={project.html_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-slate-400 transition-colors hover:text-primary"
                                    aria-label="View source code"
                                >
                                    <Github size={18} />
                                </a>
                                {project.homepage && (
                                    <a
                                        href={project.homepage}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-slate-400 transition-colors hover:text-emerald-600"
                                        aria-label="View live demo"
                                    >
                                        <Globe size={18} />
                                    </a>
                                )}
                            </div>
                        </div>

                        <h3 className="mb-2 text-lg font-bold text-slate-900 group-hover:text-primary">
                            {project.name.replace(/-/g, ' ')}
                        </h3>

                        <p className="mb-4 flex-grow text-sm leading-relaxed text-slate-600 line-clamp-3">
                            {project.description || 'No description provided.'}
                        </p>

                        {project.homepage && (
                            <a
                                href={project.homepage}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mb-4 inline-flex items-center gap-2 rounded-lg bg-primary px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
                            >
                                <Globe size={14} />
                                Live demo
                            </a>
                        )}

                        <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-3 text-xs text-slate-500">
                            <span className="flex items-center gap-2">
                                <span
                                    className={`h-2 w-2 rounded-full ${
                                        project.language ? 'bg-primary' : 'bg-slate-300'
                                    }`}
                                />
                                {project.language || 'Code'}
                            </span>
                            <span className="flex items-center gap-1 text-amber-500">
                                <Star size={13} className="fill-current" />
                                {project.stargazers_count}
                            </span>
                        </div>
                    </motion.article>
                ))}
            </motion.div>

            <div className="mt-10 text-center">
                <a
                    href={profile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-medium text-primary hover:text-blue-700"
                >
                    View all repositories
                    <ExternalLink size={16} />
                </a>
            </div>
        </div>
    );
};

export default Projects;
