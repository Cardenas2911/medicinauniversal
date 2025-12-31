import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-[#051111] text-white py-16 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 text-center">
                {/* Links Navigation */}
                <nav className="flex justify-center flex-wrap gap-8 md:gap-12 mb-10 font-sans text-sm tracking-widest uppercase text-gray-400">
                    <a href={`${import.meta.env.BASE_URL}about`} className="hover:text-secondary transition-colors duration-300">Nosotros</a>
                    <a href={`${import.meta.env.BASE_URL}blog`} className="hover:text-secondary transition-colors duration-300">Blog</a>
                    <a href="#" className="hover:text-secondary transition-colors duration-300">Servicios</a>
                    <a href="#" className="hover:text-secondary transition-colors duration-300">Prensa</a>
                    <a href={`${import.meta.env.BASE_URL}contact`} className="hover:text-secondary transition-colors duration-300">Contacto</a>
                </nav>

                {/* Social Icons */}
                <div className="flex justify-center gap-8 mb-10 text-gray-400">
                    {/* Facebook */}
                    <a href="#" className="hover:text-white transition-colors duration-300">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                        </svg>
                    </a>

                    {/* Instagram */}
                    <a href="#" className="hover:text-white transition-colors duration-300">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772 4.902 4.902 0 011.772-1.153c.636-.247 1.363-.416 2.427-.465C9.673 2.013 10.03 2 12.48 2h.165zm-5.37 2c-3.117 0-3.692.011-3.957.118a2.91 2.91 0 00-1.065.683 2.91 2.91 0 00-.683 1.065c-.107.265-.118.84-.118 3.957v.293c0 3.117.011 3.692.118 3.957.065.161.162.316.287.458.143.125.297.222.458.287.265.107.84.118 3.957.118h.216c3.117 0 3.692-.011 3.957-.118a2.91 2.91 0 001.065-.683 2.91 2.91 0 00.683-1.065c.107-.265.118-.84.118-3.957v-.216c0-3.117-.011-3.692-.118-3.957a2.91 2.91 0 00-.683-1.065 2.91 2.91 0 00-1.065-.683c-.265-.107-.84-.118-3.957-.118H7.111zm5.378 4.66a5.34 5.34 0 110 10.68 5.34 5.34 0 010-10.68zm0 2a3.34 3.34 0 100 6.68 3.34 3.34 0 000-6.68zm5.223-4.148a1.334 1.334 0 11-2.667 0 1.334 1.334 0 012.667 0z" clipRule="evenodd" />
                        </svg>
                    </a>

                    {/* X (Twitter) */}
                    <a href="#" className="hover:text-white transition-colors duration-300">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
                        </svg>
                    </a>

                    {/* GitHub */}
                    <a href="#" className="hover:text-white transition-colors duration-300">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                    </a>
                </div>

                {/* Copyright */}
                <p className="text-gray-500 text-sm font-sans">
                    &copy; {new Date().getFullYear()} Medicina Universal. Todos los derechos reservados.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
