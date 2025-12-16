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
                        I am a dedicated software engineer with a strong focus on frontend development and DevOps practices.
                        My journey in tech is driven by a curiosity to understand how things work under the hood and a desire to build
                        efficient, user-centric applications.
                    </p>
                    <p>
                        With experience in modern web technologies like React and Vite, coupled with a solid understanding of
                        containerization with Docker, I strive to bridge the gap between development and operations.
                    </p>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-4">
                    <div className="p-4 bg-white rounded-lg shadow-sm border border-slate-100">
                        <h4 className="font-bold text-2xl text-primary">3+</h4>
                        <p className="text-sm text-slate-500">Years Experience</p>
                    </div>
                    <div className="p-4 bg-white rounded-lg shadow-sm border border-slate-100">
                        <h4 className="font-bold text-2xl text-primary">20+</h4>
                        <p className="text-sm text-slate-500">Projects Completed</p>
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
