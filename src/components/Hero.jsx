
import React from 'react';

const Hero = () => {
    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src={`${import.meta.env.BASE_URL}images/hero-bg.webp`}
                    alt="Medicina Universal Background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-[#0e2a29]"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mb-16">
                <h1 className="text-5xl md:text-7xl font-serif text-white mb-8 leading-tight">
                    Medicina Universal
                </h1>

                <p className="text-gray-200 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-sans font-light">
                    Descubre el poder de la medicina natural y transforma tu bienestar con nuestros tratamientos holísticos personalizados.
                </p>

                <div className="flex flex-col md:flex-row gap-4 justify-center items-center mt-48">
                    <button className="bg-secondary text-primary font-bold py-3 px-8 rounded-full hover:bg-white transition-all transform hover:scale-105 shadow-lg cursor-pointer">
                        Ver Video
                    </button>

                    <div className="flex items-center gap-3 text-white backdrop-blur-sm bg-white/10 px-6 py-2 rounded-full border border-white/20">
                        <div className="bg-green-600 p-2 rounded-full">
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.51 1.51c-2.71-1.43-5.32-4.04-6.76-6.76l1.51-1.51c.23-.23.3-.57.24-1.01-.36-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
                            </svg>
                        </div>
                        <div className="text-left">
                            <p className="text-xs text-gray-300 uppercase tracking-wider">Llámanos</p>
                            <p className="font-bold">+123-456-7890</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
