import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';
import { motion } from 'framer-motion';
import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react';

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
            <section id="home" className="min-h-screen flex flex-col justify-center items-center relative z-10 pt-16">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center max-w-4xl px-4"
                >
                    <span className="text-primary font-semibold tracking-wider uppercase mb-4 block">Welcome to my portfolio</span>
                    <h1 className="text-6xl md:text-8xl font-bold mb-6 text-slate-900 tracking-tight">
                        Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">John Denver Macaraig</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Crafting exceptional digital experiences with modern web technologies.
                        <br />
                        Frontend Engineer & DevOps Enthusiast.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <button
                            onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                            className="px-8 py-4 bg-primary text-white rounded-full font-medium hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                        >
                            View My Work
                        </button>
                        <a
                            href="/resume.pdf"
                            download
                            className="px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-full font-medium hover:bg-slate-50 transition-all shadow-sm hover:shadow-md flex items-center"
                        >
                            <Download className="mr-2" size={20} /> Download Resume
                        </a>
                    </div>

                    <div className="mt-20 animate-bounce text-slate-400">
                        <ArrowDown size={32} />
                    </div>
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
