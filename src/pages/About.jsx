import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Award, X, ExternalLink } from 'lucide-react';

const certificates = [
    {
        title: 'Certificate of Completion – OJT',
        issuer: 'Multi Axis Handlers & Tech Inc.',
        description: '200 hours On-the-Job Training in System Design & Industrial Automation',
        date: 'August 2024',
        image: '/certificates/ojt-certificate.png',
    },
];

const About = () => {
    const [selectedCert, setSelectedCert] = useState(null);

    return (
        <div className="space-y-20">
            {/* Top: About Me + Quote */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-8 text-slate-900">
                        About Me
                    </h2>
                    <div className="prose prose-lg text-slate-600">
                        <p className="mb-6">
                            I am a dedicated Computer Science Student with a strong focus on frontend development and DevOps practices.
                            My journey in tech is driven by a curiosity to understand how things work under the hood and a desire to build
                            efficient, user-centric applications.
                        </p>
                        <p>
                            With experience in modern web technologies like React and Vite, coupled with a solid understanding of
                            containerization with Docker, I strive to bridge the gap between development and operations.
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative"
                >
                    <div className="aspect-square rounded-2xl bg-gradient-to-tr from-blue-500 to-indigo-500 opacity-10 rotate-3 absolute inset-0"></div>
                    <div className="aspect-square rounded-2xl bg-white border border-slate-200 shadow-xl flex items-center justify-center p-8 relative z-10">
                        <p className="text-slate-400 italic text-center">
                            "Code is like humor. When you have to explain it, it's bad."
                        </p>
                    </div>
                </motion.div>
            </div>

            {/* Education Section */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Education</h3>
                <div className="space-y-6 border-l-2 border-slate-100 pl-6 ml-2">
                    <div className="relative">
                        <span className="absolute -left-[31px] top-2 w-4 h-4 rounded-full bg-primary border-4 border-white shadow-sm"></span>
                        <span className="text-sm font-semibold text-primary uppercase tracking-wider">2021 - Present</span>
                        <h4 className="text-lg font-bold text-slate-900 mt-1">Cavite State University - Carmona Campus</h4>
                        <p className="text-slate-500">Carmona, Cavite</p>
                    </div>
                    <div className="relative">
                        <span className="absolute -left-[31px] top-2 w-4 h-4 rounded-full bg-slate-300 border-4 border-white shadow-sm"></span>
                        <span className="text-sm font-semibold text-slate-500 uppercase tracking-wider">2018 - 2020</span>
                        <h4 className="text-lg font-bold text-slate-900 mt-1">Philippine Technological Institute of Science, Arts, and Trade</h4>
                        <p className="text-slate-500">General Mariano Alvarez Cavite</p>
                    </div>
                    <div className="relative">
                        <span className="absolute -left-[31px] top-2 w-4 h-4 rounded-full bg-slate-300 border-4 border-white shadow-sm"></span>
                        <span className="text-sm font-semibold text-slate-500 uppercase tracking-wider">2016 - 2018</span>
                        <h4 className="text-lg font-bold text-slate-900 mt-1">Bulihan National Highschool</h4>
                        <p className="text-slate-500">Bulihan Silang Cavite</p>
                    </div>
                    <div className="relative">
                        <span className="absolute -left-[31px] top-2 w-4 h-4 rounded-full bg-slate-300 border-4 border-white shadow-sm"></span>
                        <span className="text-sm font-semibold text-slate-500 uppercase tracking-wider">2014 - 2016</span>
                        <h4 className="text-lg font-bold text-slate-900 mt-1">Batangas Eastern Colleges</h4>
                        <p className="text-slate-500">San Juan Batangas</p>
                    </div>
                    <div className="relative">
                        <span className="absolute -left-[31px] top-2 w-4 h-4 rounded-full bg-slate-300 border-4 border-white shadow-sm"></span>
                        <span className="text-sm font-semibold text-slate-500 uppercase tracking-wider">2008 - 2014</span>
                        <h4 className="text-lg font-bold text-slate-900 mt-1">Kiling Elementary School</h4>
                        <p className="text-slate-500">Kiling Sariaya Quezon</p>
                    </div>
                </div>
            </motion.div>

            {/* Certificates Section */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <div className="flex items-center gap-3 mb-8">
                    <Award className="text-primary" size={28} />
                    <h3 className="text-2xl font-bold text-slate-900">Certificates</h3>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certificates.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            onClick={() => setSelectedCert(cert)}
                            className="group cursor-pointer bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-1"
                        >
                            {/* Certificate Image */}
                            <div className="relative overflow-hidden bg-slate-50">
                                <img
                                    src={cert.image}
                                    alt={cert.title}
                                    className="w-full h-48 object-cover object-top group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-3">
                                    <span className="text-white text-sm font-medium flex items-center gap-1">
                                        <ExternalLink size={14} /> Click to view
                                    </span>
                                </div>
                            </div>

                            {/* Certificate Info */}
                            <div className="p-5">
                                <span className="text-xs font-semibold text-primary uppercase tracking-wider">{cert.date}</span>
                                <h4 className="text-base font-bold text-slate-900 mt-1 leading-snug">{cert.title}</h4>
                                <p className="text-sm text-slate-500 mt-1">{cert.issuer}</p>
                                <p className="text-sm text-slate-400 mt-2 line-clamp-2">{cert.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedCert && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                        onClick={() => setSelectedCert(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                            className="relative max-w-3xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedCert(null)}
                                className="absolute top-3 right-3 z-10 p-2 bg-white/90 hover:bg-white rounded-full shadow-md transition-colors"
                            >
                                <X size={20} className="text-slate-700" />
                            </button>
                            <img
                                src={selectedCert.image}
                                alt={selectedCert.title}
                                className="w-full object-contain max-h-[70vh]"
                            />
                            <div className="p-6 border-t border-slate-100">
                                <h4 className="text-lg font-bold text-slate-900">{selectedCert.title}</h4>
                                <p className="text-sm text-primary font-semibold mt-1">{selectedCert.issuer}</p>
                                <p className="text-sm text-slate-500 mt-1">{selectedCert.description}</p>
                                <p className="text-xs text-slate-400 mt-2">{selectedCert.date}</p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default About;
