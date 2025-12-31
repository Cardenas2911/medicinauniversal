import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Bloquear scroll cuando el menú está abierto
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [mobileMenuOpen]);

    const navLinks = [
        {
            name: 'Inicio', href: `${import.meta.env.BASE_URL}`, icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
            )
        },
        {
            name: 'Nosotros', href: `${import.meta.env.BASE_URL}about`, icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
            )
        },
        {
            name: 'Galería', href: `${import.meta.env.BASE_URL}galeria`, icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
            )
        },
        {
            name: 'Eventos', href: `${import.meta.env.BASE_URL}eventos`, icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            )
        },
        {
            name: 'Servicios', href: '#', icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
            )
        },
        {
            name: 'Blog', href: `${import.meta.env.BASE_URL}blog`, icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" /></svg>
            )
        },
        {
            name: 'Contacto', href: `${import.meta.env.BASE_URL}contact`, icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            )
        },
    ];

    return (
        <>
            <header
                className={`fixed top-0 w-full z-[999] transition-all duration-300 ${scrolled ? 'bg-primary/80 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'
                    }`}
            >
                <div className="container mx-auto px-6 flex justify-between items-center text-white">
                    <div className="flex items-center gap-2 z-50 relative">
                        <img src={`${import.meta.env.BASE_URL}images/logo.webp`} alt="Medicina Universal Logo" className="h-12 w-auto rounded-full" />
                        <div className="text-xl font-serif font-bold tracking-wide">
                            Medicina Universal
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8 font-sans text-sm tracking-wide uppercase backdrop-blur-sm bg-white/10 px-8 py-3 rounded-full border border-white/20">
                        {navLinks.map((link) => (
                            <a key={link.name} href={link.href} className="hover:text-secondary transition-colors">
                                {link.name}
                            </a>
                        ))}
                    </nav>

                    <a
                        href="https://chat.whatsapp.com/KaC0NJyHtjzBAkZ94HTAZK"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden md:block bg-secondary text-primary font-bold py-2 px-6 rounded-full hover:bg-white transition-all transform hover:scale-105 cursor-pointer no-underline"
                    >
                        Únete a nuestra comunidad
                    </a>

                    {/* Mobile Menu Button - Hamburger */}
                    <button
                        className="md:hidden text-white z-50 focus:outline-none"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </header>

            {/* Mobile Sidebar Overlay - PORTAL */}
            {mounted && createPortal(
                <div className={`fixed inset-0 z-[9999] md:hidden transition-all duration-500 ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                    {/* Backdrop Blur */}
                    <div
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        onClick={() => setMobileMenuOpen(false)}
                    ></div>

                    {/* Sidebar Panel */}
                    <div className={`absolute top-0 left-0 w-[280px] h-full bg-[#0e2a29] shadow-2xl transform transition-transform duration-500 ease-out flex flex-col ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>

                        {/* Sidebar Header */}
                        <div className="p-8 pb-4 flex justify-between items-center border-b border-white/10">
                            <div className="text-xl font-serif font-bold tracking-wide text-white">Menú</div>
                            {/* Close Button Inside Sidebar is managed by the backdrop click usually, but nice to have explicit */}
                            <button
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* Links List */}
                        <div className="flex-1 overflow-y-auto py-6 px-4 space-y-2">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="flex items-center gap-4 px-4 py-3 rounded-xl text-gray-300 hover:bg-white/10 hover:text-white transition-all group"
                                >
                                    <span className="text-secondary group-hover:text-white transition-colors">
                                        {link.icon}
                                    </span>
                                    <span className="font-sans font-medium">{link.name}</span>
                                </a>
                            ))}
                        </div>

                        {/* Community Card */}
                        <div className="p-6 mt-auto">
                            <div className="bg-gradient-to-br from-secondary/20 to-secondary/5 border border-secondary/30 rounded-2xl p-5 text-center relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-16 h-16 bg-secondary/20 rounded-full blur-2xl -mr-8 -mt-8"></div>
                                <div className="relative z-10">
                                    <h4 className="text-white font-bold mb-1">Únete a la Tribu</h4>
                                    <p className="text-gray-300 text-xs mb-4">Recibe consejos y noticias exclusivas.</p>
                                    <a
                                        href="https://chat.whatsapp.com/KaC0NJyHtjzBAkZ94HTAZK"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block w-full bg-secondary text-[#0e2a29] font-bold py-2 rounded-lg text-sm hover:bg-white transition-colors shadow-lg"
                                    >
                                        Unirme ahora
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>,
                document.body
            )}
        </>
    );
};

export default Header;
