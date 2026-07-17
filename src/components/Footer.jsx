import { Github, Mail } from 'lucide-react';
import { profile } from '../data/site';

const Footer = () => (
    <footer className="border-t border-slate-200 bg-white py-8">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row md:px-6">
            <p className="text-sm text-slate-500">
                &copy; {new Date().getFullYear()} {profile.name}. Built for computer science work.
            </p>

            <div className="flex gap-5">
                <a
                    href={profile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 transition-colors hover:text-slate-900"
                    aria-label="GitHub profile"
                >
                    <Github size={20} />
                </a>
                <a
                    href={`https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}&su=Portfolio%20Inquiry`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 transition-colors hover:text-slate-900"
                    aria-label="Send email"
                >
                    <Mail size={20} />
                </a>
            </div>
        </div>
    </footer>
);

export default Footer;
