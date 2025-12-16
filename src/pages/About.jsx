import { motion } from 'framer-motion';

const About = () => {
    return (
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

                <div className="mt-8">
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
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
            >
                {/* Placeholder for an image or specific graphic */}
                <div className="aspect-square rounded-2xl bg-gradient-to-tr from-blue-500 to-indigo-500 opacity-10 rotate-3 absolute inset-0"></div>
                <div className="aspect-square rounded-2xl bg-white border border-slate-200 shadow-xl flex items-center justify-center p-8 relative z-10">
                    <p className="text-slate-400 italic text-center">
                        "Code is like humor. When you have to explain it, it’s bad."
                    </p>
                </div>
            </motion.div>
        </div>
    );
};

export default About;
