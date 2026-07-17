import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navLinks, profile } from '../data/site';

const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNav = (id) => {
        scrollToSection(id);
        setIsOpen(false);
    };

    return (
        <nav
            className={`fixed z-50 w-full transition-all duration-300 ${
                scrolled ? 'border-b border-slate-200/80 bg-white/90 py-2 shadow-sm backdrop-blur-md' : 'bg-transparent py-4'
            }`}
        >
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex items-center justify-between">
                    <button
                        type="button"
                        onClick={() => handleNav('home')}
                        className="font-mono text-lg font-bold tracking-tight text-slate-900"
                    >
                        <span className="text-primary">&lt;</span>
                        {profile.handle}
                        <span className="text-primary"> /&gt;</span>
                    </button>

                    <div className="hidden items-center gap-1 md:flex">
                        {navLinks.map((link) => (
                            <motion.button
                                key={link.to}
                                type="button"
                                onClick={() => handleNav(link.to)}
                                whileHover={{ y: -1 }}
                                whileTap={{ scale: 0.97 }}
                                className="group relative px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:text-primary"
                            >
                                {link.name}
                                <span className="pointer-events-none absolute inset-x-3 bottom-1 h-0.5 origin-center scale-x-0 rounded-full bg-primary transition-transform duration-300 group-hover:scale-x-100" />
                            </motion.button>
                        ))}
                    </div>

                    <button
                        type="button"
                        onClick={() => setIsOpen((open) => !open)}
                        className="text-slate-600 hover:text-primary md:hidden"
                        aria-label={isOpen ? 'Close menu' : 'Open menu'}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        className="absolute w-full border-t border-slate-100 bg-white/95 backdrop-blur-md md:hidden"
                    >
                        <div className="space-y-1 px-4 py-3">
                            {navLinks.map((link) => (
                                <button
                                    key={link.to}
                                    type="button"
                                    onClick={() => handleNav(link.to)}
                                    className="block w-full rounded-lg px-4 py-3 text-left text-base font-medium text-slate-600 transition-colors hover:bg-slate-50 hover:text-primary"
                                >
                                    {link.name}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
