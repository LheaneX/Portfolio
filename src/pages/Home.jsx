import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';
import { motion } from 'framer-motion';
import { ArrowDown, Download } from 'lucide-react';

const Section = ({ id, children, className = "" }) => (
    <section id={id} className={`min-h-screen flex items-center py-20 ${className}`}>
        <div className="container mx-auto px-4 w-full">
            {children}
        </div>
    </section>
);

const Home = () => {
    return (
        <div className="bg-slate-50 relative overflow-hidden">
            {/* Background Decor */}
            <div className="fixed inset-0 pointer-events-none opacity-30 z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-200 blur-[100px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-200 blur-[100px]" />
            </div>

            <Navbar />

            {/* Hero Section */}
            <section
                id="home"
                className="min-h-screen flex flex-col justify-center items-center relative z-10 pt-16"
            >
                <div className="pointer-events-none absolute inset-0 z-0 opacity-90 md:opacity-100">
                    <div className="h-full min-h-[70vh] w-full max-w-5xl mx-auto px-4">
                        <div className="relative h-full w-full overflow-hidden rounded-[2rem] border border-slate-200/70 bg-white/60 shadow-[0_20px_80px_-20px_rgba(15,23,42,0.2)] backdrop-blur-xl">
                            <div className="absolute left-1/2 top-1/2 h-[24rem] w-[24rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-100/70 blur-3xl" />
                            <div className="absolute right-8 top-10 h-36 w-36 rounded-full bg-indigo-200/60 blur-3xl" />
                            <div className="absolute bottom-8 left-12 h-24 w-24 rounded-full bg-sky-200/70 blur-3xl" />
                        </div>
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center max-w-4xl px-4 relative z-10"
                >
                    <motion.span
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.15, duration: 0.5 }}
                        className="text-primary font-semibold tracking-wider uppercase mb-4 block"
                    >
                        Welcome to my portfolio
                    </motion.span>
                    <h1 className="text-6xl md:text-8xl font-bold mb-6 text-slate-900 tracking-tight drop-shadow-sm">
                        Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">John Denver Macaraig</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Crafting exceptional digital experiences with modern web technologies.
                        <br />
                        Frontend Engineer & DevOps Enthusiast.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <motion.button
                            whileHover={{ scale: 1.04, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            transition={{ type: 'spring', stiffness: 400, damping: 22 }}
                            onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                            className="px-8 py-4 bg-primary text-white rounded-full font-medium hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
                        >
                            View My Work
                        </motion.button>
                        <motion.a
                            href="/Resume – John Denver Macaraig.pdf"
                            download
                            whileHover={{ scale: 1.03, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            transition={{ type: 'spring', stiffness: 400, damping: 22 }}
                            className="px-8 py-4 bg-white/90 backdrop-blur-sm text-slate-900 border border-slate-200 rounded-full font-medium hover:bg-white transition-colors shadow-sm hover:shadow-md flex items-center"
                        >
                            <Download className="mr-2" size={20} /> Download Resume
                        </motion.a>
                    </div>

                    <motion.button
                        type="button"
                        aria-label="Scroll to next section"
                        onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
                        className="mt-20 text-slate-400 hover:text-primary transition-colors"
                        animate={{ y: [0, 8, 0] }}
                        transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
                    >
                        <ArrowDown size={32} />
                    </motion.button>
                </motion.div>
            </section>

            {/* About Section */}
            <Section id="about" className="bg-white/50 backdrop-blur-sm z-10 relative">
                <About />
            </Section>

            {/* Projects Section */}
            <Section id="projects" className="z-10 relative">
                <Projects />
            </Section>

            {/* Skills Section */}
            <Section id="skills" className="bg-slate-900 text-white z-10 relative">
                <Skills />
            </Section>

            {/* Contact Section */}
            <Section id="contact" className="z-10 relative mb-20">
                <Contact />
            </Section>

            <Footer />
        </div>
    );
};

export default Home;
