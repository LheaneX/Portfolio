import { motion } from 'framer-motion';
import { Code, Database, Globe, Layers, Layout, Server, Settings, Terminal, PenTool, Cpu } from 'lucide-react';

const Skills = () => {
    const skillsData = [
        {
            category: "Frontend Development",
            icon: <Layout className="w-6 h-6" />,
            skills: ["React", "JavaScript", "TypeScript", "Tailwind CSS", "HTML5 & CSS3", "Vite"]
        },
        {
            category: "Backend & DevOps",
            icon: <Server className="w-6 h-6" />,
            skills: ["Node.js", "Express", "Docker", "RESTful APIs", "Python", "Flask", "Django", "AWS"]
        },
        {
            category: "Tools & Workflow",
            icon: <Settings className="w-6 h-6" />,
            skills: ["Git & GitHub", "VS Code", "Cursor", "Figma", "Command Line"]
        }
    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <div className="max-w-6xl mx-auto px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-16 text-center"
            >
                <span className="text-blue-400 font-semibold uppercase tracking-wider text-sm mb-2 block">Expertise</span>
                <h2 className="text-4xl font-bold text-white">Technical Skills</h2>
            </motion.div>

            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
                {skillsData.map((section, index) => (
                    <motion.div
                        key={section.category}
                        variants={item}
                        className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-primary/50 transition-colors"
                    >
                        <div className="flex items-center mb-6 text-primary">
                            <div className="p-3 bg-primary/10 rounded-xl mr-4">
                                {section.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white">{section.category}</h3>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            {section.skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="px-4 py-2 bg-slate-700/50 text-slate-200 rounded-lg text-sm font-medium hover:bg-primary/20 hover:text-white transition-all cursor-default border border-transparent hover:border-primary/30"
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
};

export default Skills;
