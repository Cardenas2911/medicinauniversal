import React from 'react';

const FeatureSection = () => {
    return (
        <section className="py-20 px-4 md:px-10 bg-[#0e2a29]">
            <div className="max-w-7xl mx-auto">
                <div className="bg-gradient-to-r from-[#1a3c3b] to-[#2c5e5c] rounded-[3rem] p-8 md:p-16 relative overflow-visible flex flex-col md:flex-row items-center justify-between shadow-2xl">

                    {/* Content Side */}
                    <div className="md:w-1/2 z-10">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="flex text-secondary text-lg">
                                {'★★★★★'.split('').map((star, i) => (
                                    <span key={i}>{star}</span>
                                ))}
                            </div>
                            <span className="text-white font-sans text-sm font-semibold">(5/5)</span>
                        </div>

                        <h2 className="text-3xl md:text-5xl font-serif text-white mb-6 leading-tight">
                            Curación Natural para <br />
                            <span className="text-secondary italic">Cuerpo y Alma.</span>
                        </h2>

                        <p className="text-gray-300 mb-8 font-sans font-light leading-relaxed max-w-md">
                            Experimenta la sabiduría ancestral del Yagé y otras plantas maestras.
                            Nuestros retiros están diseñados para guiarte en un viaje profundo de autodescubrimiento y sanación.
                        </p>

                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-secondary">
                                {/* Placeholder for a user/testimonial avatar */}
                                <img src={`${import.meta.env.BASE_URL}images/avatar-felix.svg`} alt="Testimonial" className="w-full h-full object-cover" />
                            </div>
                            <div>
                                <p className="text-white font-serif text-lg">María González</p>
                                <p className="text-secondary text-xs uppercase tracking-wider">Paciente</p>
                            </div>
                        </div>
                    </div>

                    {/* Floating Features Points (Mockup style) */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none hidden md:block">
                        <div className="absolute top-1/3 left-[55%] bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-white text-xs border border-white/20 flex items-center gap-2">
                            <span className="w-2 h-2 bg-secondary rounded-full"></span>
                            Medicina Pura
                        </div>
                        <div className="absolute bottom-1/3 left-[45%] bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-white text-xs border border-white/20 flex items-center gap-2">
                            <span className="w-2 h-2 bg-secondary rounded-full"></span>
                            Guía Experta
                        </div>
                    </div>

                    {/* Plant Image Overlay */}
                    <div className="absolute bottom-0 right-0 z-20 flex justify-end items-end h-full pointer-events-none rounded-br-[3rem]">
                        <div className="relative h-[150%] w-auto flex items-end">
                            <img
                                src={`${import.meta.env.BASE_URL}images/yage-plant.webp`}
                                alt="Planta de Yagé (Ayahuasca)"
                                className="h-full w-auto object-contain drop-shadow-2xl translate-y-[2px]"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default FeatureSection;
