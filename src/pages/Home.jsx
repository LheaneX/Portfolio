import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';
import { Section } from '../components/ui/Section';
import { motion } from 'framer-motion';
import { ArrowDown, Download, Terminal } from 'lucide-react';
import { focusAreas, profile } from '../data/site';

const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

const Home = () => (
    <div className="relative overflow-hidden bg-surface">
        <div className="pointer-events-none fixed inset-0 z-0 grid-bg opacity-60" />
        <div className="pointer-events-none fixed inset-0 z-0">
            <div className="absolute -left-24 top-0 h-96 w-96 rounded-full bg-blue-200/30 blur-3xl" />
            <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-indigo-200/30 blur-3xl" />
        </div>

        <Navbar />

        <section id="home" className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 pt-20">
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="mx-auto max-w-4xl text-center"
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 }}
                    className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-1.5 text-sm font-medium text-slate-600 backdrop-blur-sm"
                >
                    <Terminal size={14} className="text-primary" />
                    {profile.title} · {profile.subtitle}
                </motion.div>

                <h1 className="mb-6 text-5xl font-bold tracking-tight text-slate-900 md:text-7xl">
                    Hi, I&apos;m{' '}
                    <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                        {profile.name.split(' ').slice(0, 2).join(' ')}
                    </span>
                </h1>

                <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-slate-600 md:text-xl">
                    {profile.tagline}
                </p>

                <div className="mb-10 flex flex-wrap justify-center gap-2">
                    {focusAreas.map((area) => (
                        <span
                            key={area}
                            className="rounded-md border border-slate-200 bg-white px-3 py-1.5 font-mono text-xs text-slate-600"
                        >
                            {area}
                        </span>
                    ))}
                </div>

                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <motion.button
                        type="button"
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => scrollTo('projects')}
                        className="rounded-lg bg-primary px-8 py-3.5 font-medium text-white shadow-md transition-colors hover:bg-blue-700"
                    >
                        View Projects
                    </motion.button>
                    <motion.a
                        href={profile.resume}
                        download
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        className="inline-flex items-center rounded-lg border border-slate-200 bg-white px-8 py-3.5 font-medium text-slate-900 shadow-sm transition-colors hover:border-slate-300"
                    >
                        <Download className="mr-2" size={18} />
                        Resume
                    </motion.a>
                </div>

                <motion.button
                    type="button"
                    aria-label="Scroll to about section"
                    onClick={() => scrollTo('about')}
                    className="mt-16 text-slate-400 transition-colors hover:text-primary"
                    animate={{ y: [0, 6, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
                >
                    <ArrowDown size={28} />
                </motion.button>
            </motion.div>
        </section>

        <Section id="about" className="relative z-10 bg-white/70 backdrop-blur-sm">
            <About />
        </Section>

        <Section id="projects" className="relative z-10">
            <Projects />
        </Section>

        <Section id="skills" className="relative z-10 bg-slate-900 text-white">
            <Skills />
        </Section>

        <Section id="contact" className="relative z-10 mb-12">
            <Contact />
        </Section>

        <Footer />
    </div>
);

export default Home;
