import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, X, ExternalLink, GraduationCap, MapPin, Calendar } from 'lucide-react';
import { SectionHeader } from '../components/ui/Section';
import TiltCard from '../components/ui/TiltCard';
import CodeSnippet from '../components/ui/CodeSnippet';
import StatCard from '../components/ui/StatCard';
import { useInView } from '../hooks/useInView';
import {
    certificates,
    education,
    stats,
    techTags,
} from '../data/site';

const About = () => {
    const [selectedCert, setSelectedCert] = useState(null);
    const [activeTab, setActiveTab] = useState('education');
    const [statsRef, statsVisible] = useInView(0.3);

    return (
        <div className="mx-auto max-w-6xl space-y-16">
            <div className="grid items-start gap-12 lg:grid-cols-5">
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="lg:col-span-3"
                >
                    <SectionHeader
                        eyebrow="About"
                        title="Computer science student building practical software"
                        description="I focus on clean architecture, readable code, and shipping projects that solve real problems — from coursework and algorithms to full-stack web applications."
                    />

                    <div className="mt-6 flex flex-wrap gap-2">
                        {techTags.map((tech) => (
                            <span
                                key={tech}
                                className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-700"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="lg:col-span-2"
                >
                    <TiltCard>
                        <div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-950 p-6 shadow-xl">
                            <div className="mb-4 flex gap-1.5">
                                <span className="h-3 w-3 rounded-full bg-red-400" />
                                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                                <span className="h-3 w-3 rounded-full bg-green-400" />
                            </div>
                            <CodeSnippet />
                        </div>
                    </TiltCard>
                </motion.div>
            </div>

            <motion.div
                ref={statsRef}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-4 md:grid-cols-4"
            >
                {stats.map((stat) => (
                    <StatCard key={stat.key} stat={stat} animate={statsVisible} />
                ))}
            </motion.div>

            <div>
                <div className="mb-8 inline-flex rounded-lg border border-slate-200 bg-slate-100 p-1">
                    {[
                        { id: 'education', label: 'Education', icon: GraduationCap },
                        { id: 'certificates', label: 'Certificates', icon: Award },
                    ].map(({ id, label, icon: Icon }) => (
                        <button
                            key={id}
                            type="button"
                            onClick={() => setActiveTab(id)}
                            className={`relative flex items-center gap-2 rounded-md px-4 py-2.5 text-sm font-semibold transition-colors ${
                                activeTab === id ? 'text-white' : 'text-slate-600 hover:text-slate-900'
                            }`}
                        >
                            {activeTab === id && (
                                <motion.div
                                    layoutId="aboutTab"
                                    className="absolute inset-0 rounded-md bg-primary"
                                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                                />
                            )}
                            <span className="relative z-10 flex items-center gap-2">
                                <Icon size={16} />
                                {label}
                            </span>
                        </button>
                    ))}
                </div>

                <AnimatePresence mode="wait">
                    {activeTab === 'education' && (
                        <motion.div
                            key="education"
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -12 }}
                            className="grid gap-4 md:grid-cols-2"
                        >
                            {education.map((entry) => (
                                <div
                                    key={entry.school}
                                    className={`rounded-xl border p-5 transition-shadow hover:shadow-md ${
                                        entry.active
                                            ? 'border-primary/30 bg-blue-50/50'
                                            : 'border-slate-200 bg-white'
                                    }`}
                                >
                                    {entry.active && (
                                        <span className="mb-3 inline-block rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-bold uppercase tracking-wide text-emerald-700">
                                            Current
                                        </span>
                                    )}
                                    <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
                                        <Calendar size={14} />
                                        {entry.year}
                                    </div>
                                    <h4 className="text-lg font-bold text-slate-900">{entry.school}</h4>
                                    <p className="mt-1 text-sm font-medium text-primary">{entry.degree}</p>
                                    <div className="mt-2 flex items-center gap-1.5 text-sm text-slate-500">
                                        <MapPin size={14} />
                                        {entry.location}
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    )}

                    {activeTab === 'certificates' && (
                        <motion.div
                            key="certificates"
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -12 }}
                            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
                        >
                            {certificates.map((cert) => (
                                <button
                                    key={cert.title}
                                    type="button"
                                    onClick={() => setSelectedCert(cert)}
                                    className="group overflow-hidden rounded-xl border border-slate-200 bg-white text-left shadow-sm transition-all hover:border-primary/30 hover:shadow-lg"
                                >
                                    <div className="overflow-hidden bg-slate-100">
                                        <img
                                            src={cert.image}
                                            alt={cert.title}
                                            className="h-48 w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                        />
                                    </div>
                                    <div className="p-5">
                                        <p className="text-xs font-bold uppercase tracking-wide text-primary">
                                            {cert.date}
                                        </p>
                                        <h4 className="mt-2 font-bold text-slate-900">{cert.title}</h4>
                                        <p className="mt-1 text-sm text-slate-500">{cert.issuer}</p>
                                        <p className="mt-2 flex items-center gap-1 text-sm text-slate-400">
                                            <ExternalLink size={14} />
                                            View certificate
                                        </p>
                                    </div>
                                </button>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <AnimatePresence>
                {selectedCert && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
                        onClick={() => setSelectedCert(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-2xl bg-white"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                type="button"
                                onClick={() => setSelectedCert(null)}
                                className="absolute right-4 top-4 z-10 rounded-full bg-white p-2 shadow-lg"
                                aria-label="Close certificate"
                            >
                                <X size={20} />
                            </button>
                            <img
                                src={selectedCert.image}
                                alt={selectedCert.title}
                                className="max-h-[70vh] w-full bg-slate-50 object-contain"
                            />
                            <div className="border-t border-slate-100 p-6">
                                <h4 className="text-xl font-bold text-slate-900">{selectedCert.title}</h4>
                                <p className="mt-1 text-sm font-medium text-primary">{selectedCert.issuer}</p>
                                <p className="mt-2 text-sm text-slate-500">{selectedCert.description}</p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default About;
