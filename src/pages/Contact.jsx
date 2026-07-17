import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send } from 'lucide-react';
import { SectionHeader } from '../components/ui/Section';
import TiltCard from '../components/ui/TiltCard';
import { profile } from '../data/site';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.id]: event.target.value });
    };

    const handleSend = (event) => {
        event.preventDefault();
        const { name, message, email } = formData;
        const subject = `Portfolio contact from ${name}`;
        const body = `${message}\n\nFrom: ${name} (${email})`;
        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.open(gmailUrl, '_blank');
    };

    const inputClass =
        'w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-primary';

    return (
        <div className="mx-auto max-w-5xl">
            <SectionHeader
                eyebrow="Contact"
                title="Let's connect"
                description="Open to internships, collaborations, and conversations about software engineering."
            />

            <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-2">
                <motion.div
                    initial={{ opacity: 0, x: -24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="space-y-4"
                >
                    <a
                        href={`https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}&su=Portfolio%20Inquiry`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4 transition-all hover:border-primary/30 hover:shadow-md"
                    >
                        <TiltCard intensity={10} className="shrink-0">
                            <div className="rounded-full bg-blue-50 p-3 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                                <Mail size={22} />
                            </div>
                        </TiltCard>
                        <div>
                            <h4 className="font-semibold text-slate-900">Email</h4>
                            <p className="text-sm text-slate-500">{profile.email}</p>
                        </div>
                    </a>

                    <div className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4">
                        <TiltCard intensity={10} className="shrink-0">
                            <div className="rounded-full bg-indigo-50 p-3 text-indigo-600">
                                <MapPin size={22} />
                            </div>
                        </TiltCard>
                        <div>
                            <h4 className="font-semibold text-slate-900">Location</h4>
                            <p className="text-sm text-slate-500">{profile.location}</p>
                        </div>
                    </div>
                </motion.div>

                <motion.form
                    initial={{ opacity: 0, x: 24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    onSubmit={handleSend}
                    className="space-y-4 rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                    <div>
                        <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-slate-700">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            value={formData.name}
                            onChange={handleChange}
                            className={inputClass}
                            placeholder="Your name"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-slate-700">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={inputClass}
                            placeholder="you@example.com"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-slate-700">
                            Message
                        </label>
                        <textarea
                            id="message"
                            rows="4"
                            value={formData.message}
                            onChange={handleChange}
                            className={`${inputClass} resize-none`}
                            placeholder="Tell me about your project or opportunity..."
                            required
                        />
                    </div>
                    <motion.button
                        type="submit"
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary py-3.5 font-semibold text-white transition-colors hover:bg-blue-700"
                    >
                        <Send size={18} />
                        Send message
                    </motion.button>
                </motion.form>
            </div>
        </div>
    );
};

export default Contact;
