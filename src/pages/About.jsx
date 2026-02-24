import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { Award, X, ExternalLink, GraduationCap, MapPin, Calendar, Sparkles, Code, Coffee, Rocket } from 'lucide-react';

// ─── Data ───────────────────────────────────────────────────────────────────────

const certificates = [
    {
        title: 'Certificate of Completion – OJT',
        issuer: 'Multi Axis Handlers & Tech Inc.',
        description: '200 hours On-the-Job Training in System Design & Industrial Automation',
        date: 'August 2024',
        image: '/certificates/ojt-certificate.png',
    },
];

const education = [
    {
        year: '2021 - Present',
        school: 'Cavite State University - Carmona Campus',
        location: 'Carmona, Cavite',
        degree: 'Bachelor of Science in Computer Science',
        active: true,
    },
    {
        year: '2018 - 2020',
        school: 'Philippine Technological Institute of Science, Arts, and Trade',
        location: 'General Mariano Alvarez, Cavite',
        degree: 'Senior High School',
        active: false,
    },
    {
        year: '2016 - 2018',
        school: 'Bulihan National Highschool',
        location: 'Bulihan, Silang, Cavite',
        degree: 'Junior High School',
        active: false,
    },
    {
        year: '2014 - 2016',
        school: 'Batangas Eastern Colleges',
        location: 'San Juan, Batangas',
        degree: 'Elementary Education',
        active: false,
    },
    {
        year: '2008 - 2014',
        school: 'Kiling Elementary School',
        location: 'Kiling, Sariaya, Quezon',
        degree: 'Primary Education',
        active: false,
    },
];

const stats = [
    { label: 'Projects Built', value: 3, suffix: '+', icon: <Rocket size={20} /> },
    { label: 'Cups of Coffee', value: 999, suffix: '+', icon: <Coffee size={20} /> },
    { label: 'Lines of Code', value: 10, suffix: 'K+', icon: <Code size={20} /> },
    { label: 'Technologies', value: 4, suffix: '+', icon: <Sparkles size={20} /> },
];

// ─── Animated Counter Hook ──────────────────────────────────────────────────────

const useCounter = (target, duration = 2000, startCounting = false) => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        if (!startCounting) return;
        let start = 0;
        const increment = target / (duration / 16);
        const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
                setCount(target);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 16);
        return () => clearInterval(timer);
    }, [target, duration, startCounting]);
    return count;
};

// ─── 3D Tilt Card Component ─────────────────────────────────────────────────────

const TiltCard = ({ children, className = '' }) => {
    const ref = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 200, damping: 20 });
    const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 200, damping: 20 });

    const handleMouse = (e) => {
        const rect = ref.current.getBoundingClientRect();
        x.set((e.clientX - rect.left) / rect.width - 0.5);
        y.set((e.clientY - rect.top) / rect.height - 0.5);
    };

    const handleLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouse}
            onMouseLeave={handleLeave}
            style={{ rotateX, rotateY, transformPerspective: 800 }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

// ─── Typing Text Component ──────────────────────────────────────────────────────

const TypingText = ({ text, className = '' }) => {
    const [displayText, setDisplayText] = useState('');
    const [started, setStarted] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setStarted(true); },
            { threshold: 0.5 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!started) return;
        let i = 0;
        const timer = setInterval(() => {
            setDisplayText(text.slice(0, i + 1));
            i++;
            if (i >= text.length) clearInterval(timer);
        }, 30);
        return () => clearInterval(timer);
    }, [started, text]);

    return (
        <span ref={ref} className={className}>
            {displayText}
            <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ repeat: Infinity, duration: 0.7 }}
                className="inline-block w-[2px] h-[1em] bg-primary ml-1 align-text-bottom"
            />
        </span>
    );
};

// ─── Main About Component ───────────────────────────────────────────────────────

const About = () => {
    const [selectedCert, setSelectedCert] = useState(null);
    const [activeTab, setActiveTab] = useState('education');
    const [statsVisible, setStatsVisible] = useState(false);
    const statsRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setStatsVisible(true); },
            { threshold: 0.3 }
        );
        if (statsRef.current) observer.observe(statsRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div className="space-y-24 max-w-6xl mx-auto">

            {/* ─── Hero About Section ────────────────────────────────────── */}
            <div className="grid lg:grid-cols-5 gap-12 items-center">
                {/* Left: Text Content (3 cols) */}
                <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                    className="lg:col-span-3"
                >
                    <motion.span
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-6"
                    >
                        <Sparkles size={14} /> Get to know me
                    </motion.span>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-slate-900 leading-tight">
                        Passionate About{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                            Creating Something Meaningful?
                        </span>
                    </h2>

                    <div className="text-slate-600 text-lg leading-relaxed space-y-4">
                        <p>
                            <TypingText text="I am a dedicated Computer Science Student with a strong focus on frontend and slightly backend development and DevOps practices. My journey in tech is driven by curiosity and a desire to build fun, efficient, user-centric applications." />
                        </p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="mt-8 flex flex-wrap gap-3"
                    >
                        {['React', 'Docker', 'TypeScript', 'Vite', 'Node.js'].map((tech, i) => (
                            <motion.span
                                key={tech}
                                whileHover={{ scale: 1.1, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-4 py-2 bg-white border border-slate-200 rounded-full text-sm font-medium text-slate-700 shadow-sm hover:shadow-md hover:border-primary/30 hover:text-primary transition-all cursor-default"
                            >
                                {tech}
                            </motion.span>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Right: Interactive Card (2 cols) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.85, rotate: 3 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                    className="lg:col-span-2"
                >
                    <TiltCard className="relative group">
                        {/* Decorative blobs */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl opacity-20 group-hover:opacity-40 blur-lg transition-opacity duration-500" />

                        <div className="relative bg-white/80 backdrop-blur-xl rounded-2xl border border-slate-200/80 shadow-2xl p-8 overflow-hidden">
                            {/* Floating dots decoration */}
                            <div className="absolute top-4 right-4 flex gap-1.5">
                                <span className="w-3 h-3 rounded-full bg-red-400" />
                                <span className="w-3 h-3 rounded-full bg-yellow-400" />
                                <span className="w-3 h-3 rounded-full bg-green-400" />
                            </div>

                            {/* Code-like content */}
                            <div className="font-mono text-sm space-y-2 mt-4">
                                <p className="text-slate-400">{'// about-me.js'}</p>
                                <p><span className="text-purple-600">const</span> <span className="text-blue-600">developer</span> = {'{'}</p>
                                <p className="pl-4"><span className="text-green-600">name</span>: <span className="text-amber-600">"John Denver"</span>,</p>
                                <p className="pl-4"><span className="text-green-600">role</span>: <span className="text-amber-600">"Computer Science Student"</span>,</p>
                                <p className="pl-4"><span className="text-green-600">loves</span>: <span className="text-amber-600">"you?"</span>,</p>
                                <p className="pl-4"><span className="text-green-600">softdrinks</span>: <span className="text-blue-600">true</span>,</p>
                                <p>{'}'}</p>
                            </div>

                            {/* Animated bottom bar */}
                            <motion.div
                                className="mt-6 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-full"
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.8, duration: 1, ease: 'easeOut' }}
                                style={{ transformOrigin: 'left' }}
                            />
                        </div>
                    </TiltCard>
                </motion.div>
            </div>

            {/* ─── Animated Stats Section ────────────────────────────────── */}
            <motion.div
                ref={statsRef}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-4"
            >
                {stats.map((stat, index) => {
                    const count = useCounter(stat.value, 2000, statsVisible);
                    return (
                        <motion.div
                            key={stat.label}
                            whileHover={{ y: -6, scale: 1.02 }}
                            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                            className="relative group"
                        >
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-300" />
                            <div className="relative bg-white rounded-2xl border border-slate-200 p-6 text-center shadow-sm hover:shadow-lg transition-shadow duration-300">
                                <div className="inline-flex items-center justify-center w-10 h-10 bg-primary/10 text-primary rounded-xl mb-3">
                                    {stat.icon}
                                </div>
                                <div className="text-3xl md:text-4xl font-bold text-slate-900 tabular-nums">
                                    {count}{stat.suffix}
                                </div>
                                <p className="text-sm text-slate-500 mt-1 font-medium">{stat.label}</p>
                            </div>
                        </motion.div>
                    );
                })}
            </motion.div>

            {/* ─── Tabbed Education & Certificates ───────────────────────── */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                {/* Tab Buttons */}
                <div className="flex items-center gap-1 mb-10 bg-slate-100 rounded-2xl p-1.5 max-w-md">
                    {[
                        { id: 'education', label: 'Education', icon: <GraduationCap size={18} /> },
                        { id: 'certificates', label: 'Certificates', icon: <Award size={18} /> },
                    ].map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`relative flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${activeTab === tab.id
                                ? 'text-white'
                                : 'text-slate-500 hover:text-slate-700'
                                }`}
                        >
                            {activeTab === tab.id && (
                                <motion.div
                                    layoutId="activeTab"
                                    className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow-lg"
                                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                                />
                            )}
                            <span className="relative z-10 flex items-center gap-2">
                                {tab.icon} {tab.label}
                            </span>
                        </button>
                    ))}
                </div>

                {/* Tab Content */}
                <AnimatePresence mode="wait">
                    {activeTab === 'education' && (
                        <motion.div
                            key="education"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            transition={{ duration: 0.3 }}
                            className="grid md:grid-cols-2 gap-5"
                        >
                            {education.map((edu, index) => (
                                <motion.div
                                    key={edu.school}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.08 }}
                                >
                                    <TiltCard className={`relative group h-full ${edu.active ? '' : ''}`}>
                                        {edu.active && (
                                            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl opacity-20 group-hover:opacity-30 blur-sm transition-opacity" />
                                        )}
                                        <div className={`relative h-full bg-white rounded-xl p-6 border transition-all duration-300 hover:shadow-xl ${edu.active
                                            ? 'border-primary/30 shadow-lg'
                                            : 'border-slate-200 shadow-sm hover:border-slate-300'
                                            }`}>
                                            {edu.active && (
                                                <span className="absolute top-4 right-4 px-2.5 py-0.5 bg-green-100 text-green-700 text-xs font-bold rounded-full uppercase tracking-wider">
                                                    Current
                                                </span>
                                            )}
                                            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider mb-3">
                                                <Calendar size={14} className={edu.active ? 'text-primary' : 'text-slate-400'} />
                                                <span className={edu.active ? 'text-primary' : 'text-slate-400'}>{edu.year}</span>
                                            </div>
                                            <h4 className="text-lg font-bold text-slate-900 leading-snug mb-2">{edu.school}</h4>
                                            <p className="text-sm text-primary/70 font-medium mb-2">{edu.degree}</p>
                                            <div className="flex items-center gap-1.5 text-sm text-slate-400">
                                                <MapPin size={14} />
                                                <span>{edu.location}</span>
                                            </div>
                                        </div>
                                    </TiltCard>
                                </motion.div>
                            ))}
                        </motion.div>
                    )}

                    {activeTab === 'certificates' && (
                        <motion.div
                            key="certificates"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            transition={{ duration: 0.3 }}
                            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
                        >
                            {certificates.map((cert, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    onClick={() => setSelectedCert(cert)}
                                    className="group cursor-pointer"
                                >
                                    <TiltCard>
                                        <div className="relative bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden hover:border-primary/20">
                                            {/* Shimmer effect on hover */}
                                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 z-10 pointer-events-none" />

                                            {/* Certificate Image */}
                                            <div className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50">
                                                <img
                                                    src={cert.image}
                                                    alt={cert.title}
                                                    className="w-full h-52 object-cover object-top group-hover:scale-110 transition-transform duration-700"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                                                    <motion.span
                                                        initial={{ y: 10 }}
                                                        whileHover={{ y: 0 }}
                                                        className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-slate-900 text-sm font-semibold flex items-center gap-2 shadow-lg"
                                                    >
                                                        <ExternalLink size={14} /> View Certificate
                                                    </motion.span>
                                                </div>
                                            </div>

                                            {/* Certificate Info */}
                                            <div className="p-6">
                                                <div className="flex items-center gap-2 mb-3">
                                                    <Award size={16} className="text-primary" />
                                                    <span className="text-xs font-bold text-primary uppercase tracking-wider">{cert.date}</span>
                                                </div>
                                                <h4 className="text-base font-bold text-slate-900 leading-snug group-hover:text-primary transition-colors">{cert.title}</h4>
                                                <p className="text-sm text-slate-500 mt-1.5 font-medium">{cert.issuer}</p>
                                                <p className="text-sm text-slate-400 mt-2 leading-relaxed">{cert.description}</p>
                                            </div>
                                        </div>
                                    </TiltCard>
                                </motion.div>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>

            {/* ─── Lightbox Modal ─────────────────────────────────────────── */}
            <AnimatePresence>
                {selectedCert && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
                        onClick={() => setSelectedCert(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.7, opacity: 0, y: 40 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.7, opacity: 0, y: 40 }}
                            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                            className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close button */}
                            <motion.button
                                whileHover={{ scale: 1.1, rotate: 90 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => setSelectedCert(null)}
                                className="absolute top-4 right-4 z-10 p-2.5 bg-white/90 hover:bg-white rounded-full shadow-lg transition-colors"
                            >
                                <X size={20} className="text-slate-700" />
                            </motion.button>

                            <img
                                src={selectedCert.image}
                                alt={selectedCert.title}
                                className="w-full object-contain max-h-[70vh] bg-slate-50"
                            />
                            <div className="p-8 bg-gradient-to-r from-white to-slate-50 border-t border-slate-100">
                                <div className="flex items-center gap-3 mb-2">
                                    <Award className="text-primary" size={22} />
                                    <h4 className="text-xl font-bold text-slate-900">{selectedCert.title}</h4>
                                </div>
                                <p className="text-sm text-primary font-semibold">{selectedCert.issuer}</p>
                                <p className="text-sm text-slate-500 mt-2">{selectedCert.description}</p>
                                <p className="text-xs text-slate-400 mt-3 flex items-center gap-1.5">
                                    <Calendar size={12} /> {selectedCert.date}
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default About;
