import React, { useState, useEffect } from 'react';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-primary/80 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center text-white">
                <div className="flex items-center gap-2">
                    <img src="/images/logo.webp" alt="Medicina Universal Logo" className="h-12 w-auto rounded-full" />
                    <div className="text-xl font-serif font-bold tracking-wide">
                        Medicina Universal
                    </div>
                </div>

                <nav className="hidden md:flex items-center gap-8 font-sans text-sm tracking-wide uppercase backdrop-blur-sm bg-white/10 px-8 py-3 rounded-full border border-white/20">
                    <a href="#" className="hover:text-secondary transition-colors">Inicio</a>
                    <a href="#" className="hover:text-secondary transition-colors">Nosotros</a>
                    <a href="#" className="hover:text-secondary transition-colors">Servicios</a>
                    <a href="#" className="hover:text-secondary transition-colors">Contacto</a>
                </nav>

                <a
                    href="https://chat.whatsapp.com/KaC0NJyHtjzBAkZ94HTAZK"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden md:block bg-secondary text-primary font-bold py-2 px-6 rounded-full hover:bg-white transition-all transform hover:scale-105 cursor-pointer no-underline"
                >
                    Únete a nuestra comunidad
                </a>

                {/* Mobile Menu Button Placeholder */}
                <button className="md:hidden text-white">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </header>
    );
};

export default Header;
