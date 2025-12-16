import { motion } from 'framer-motion';
import { Mail, MapPin, Send, MessageSquare } from 'lucide-react';

const Contact = () => {
    return (
        <div className="max-w-5xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center mb-16"
            >
                <span className="text-primary font-semibold uppercase tracking-wider text-sm mb-2 block">Contact</span>
                <h2 className="text-4xl font-bold text-slate-900">Get In Touch</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="bg-primary/5 rounded-2xl p-8 mb-8">
                        <h3 className="text-2xl font-bold text-slate-900 mb-4">Let's talk about your project</h3>
                        <p className="text-slate-600 mb-0 leading-relaxed">
                            I'm always interested in hearing about new projects and opportunities.
                            Whether you have a question or just want to say hi, feel free to drop me a message!
                        </p>
                    </div>

                    <div className="space-y-6">
                        <a href="mailto:contact@example.com" className="flex items-center p-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:border-primary/30 hover:shadow-md transition-all group">
                            <div className="p-3 bg-blue-50 text-primary rounded-full mr-4 group-hover:bg-primary group-hover:text-white transition-colors">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h4 className="font-semibold text-slate-900">Email Me</h4>
                                <p className="text-slate-500">johndenver9900@gmail.com</p>
                            </div>
                        </a>

                        <div className="flex items-center p-4 bg-white rounded-xl shadow-sm border border-slate-100">
                            <div className="p-3 bg-indigo-50 text-indigo-600 rounded-full mr-4">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h4 className="font-semibold text-slate-900">Location</h4>
                                <p className="text-slate-500">Block 20 Lot 2 Anahaw 1 Silang Cavite</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 relative overflow-hidden"
                >
                    {/* Decorative gradient blob */}
                    <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 rounded-full bg-primary/10 blur-2xl"></div>

                    <form className="space-y-5 relative z-10">
                        <div>
                            <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">Name</label>
                            <input
                                type="text"
                                id="name"
                                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                placeholder="John Doe"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">Email</label>
                            <input
                                type="email"
                                id="email"
                                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                placeholder="john@example.com"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
                            <textarea
                                id="message"
                                rows="4"
                                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                                placeholder="Tell me about your project..."
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-primary text-white font-bold py-4 rounded-lg hover:bg-blue-700 transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-primary/30 flex items-center justify-center"
                            onClick={(e) => e.preventDefault()}
                        >
                            <Send size={18} className="mr-2" /> Send Message
                        </button>
                    </form>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;
