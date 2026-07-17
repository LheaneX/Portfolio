import { motion } from 'framer-motion';
import { SectionHeader } from '../components/ui/Section';
import { skillsData } from '../data/site';

const listVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0 },
};

const Skills = () => (
    <div className="mx-auto max-w-6xl">
        <SectionHeader
            eyebrow="Skills"
            title="Technical toolkit"
            description="Languages, CS fundamentals, and tools I use for coursework, projects, and deployment."
            dark
        />

        <motion.div
            variants={listVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-6 md:grid-cols-2"
        >
            {skillsData.map((section) => (
                <motion.div
                    key={section.category}
                    variants={cardVariants}
                    className="rounded-xl border border-slate-700 bg-slate-800/60 p-6 backdrop-blur-sm transition-colors hover:border-primary/40"
                >
                    <h3 className="text-lg font-bold text-white">{section.category}</h3>
                    <p className="mt-1 text-sm text-slate-400">{section.description}</p>

                    <div className="mt-4 flex flex-wrap gap-2">
                        {section.skills.map((skill) => (
                            <span
                                key={skill}
                                className="rounded-md border border-slate-600 bg-slate-700/50 px-3 py-1.5 font-mono text-xs text-slate-200"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </motion.div>
            ))}
        </motion.div>
    </div>
);

export default Skills;
