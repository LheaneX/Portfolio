import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const links = [
        { name: 'Home', to: 'home' },
        { name: 'About', to: 'about' },
        { name: 'Projects', to: 'projects' },
        { name: 'Skills', to: 'skills' },
        { name: 'Contact', to: 'contact' },
    ];

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsOpen(false);
        }
    };

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'}`}>
            <div className="container mx-auto px-6">
                <div className="flex justify-between items-center">
                    <a href="#" onClick={() => scrollToSection('home')} className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent font-mono tracking-tighter">
                        Portfolio
                    </a>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8">
                        {links.map((link) => (
                            <button
                                key={link.to}
                                onClick={() => scrollToSection(link.to)}
                                className="text-sm font-medium text-gray-600 hover:text-primary transition-colors uppercase tracking-wide"
                            >
                                {link.name}
                            </button>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-600 hover:text-primary focus:outline-none"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-100 absolute w-full">
                    <div className="px-4 pt-2 pb-6 space-y-2">
                        {links.map((link) => (
                            <button
                                key={link.to}
                                onClick={() => scrollToSection(link.to)}
                                className="block w-full text-left px-4 py-3 rounded-lg text-base font-medium text-gray-600 hover:text-primary hover:bg-gray-50 transition-all"
                            >
                                {link.name}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
