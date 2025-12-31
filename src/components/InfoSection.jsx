import React from 'react';

const InfoSection = () => {
    return (
        <section className="py-20 px-4 md:px-10 bg-[#0e2a29]">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                    {/* Image Grid */}
                    <div className="relative">
                        <div className="rounded-[2.5rem] overflow-hidden shadow-2xl relative z-10">
                            <img
                                src={`${import.meta.env.BASE_URL}images/hero-bg.webp`}
                                alt="Terapia Grupal"
                                className="w-full h-[500px] object-cover"
                            />
                        </div>

                        {/* Experience Badge */}
                        <div className="absolute -bottom-10 -right-5 md:-right-10 z-20 bg-primary text-white p-8 rounded-[2rem] shadow-xl border-4 border-[#122b2b]">
                            <p className="text-4xl font-serif text-secondary mb-1">10+</p>
                            <p className="text-sm font-sans tracking-wide uppercase leading-tight">Años de <br />Experiencia</p>
                        </div>

                        {/* Decorative Element */}
                        <div className="absolute -top-10 -left-10 w-full h-full border-2 border-secondary/30 rounded-[2.5rem] z-0 hidden md:block"></div>
                    </div>

                    {/* Content */}
                    <div>
                        <div className="bg-white/5 inline-block px-4 py-1 rounded-full text-secondary text-sm font-semibold tracking-wider mb-6 border border-secondary/20">
                            NUESTRA MISIÓN
                        </div>

                        <h2 className="text-4xl md:text-5xl font-serif text-white mb-8 leading-tight">
                            Donde la Medicina Encuentra <br />
                            <span className="text-secondary">A Su Gente.</span>
                        </h2>

                        <p className="text-gray-300 text-lg mb-6 font-sans font-light">
                            En Medicina Universal, creemos que la sanación es un camino colectivo.
                            Nuestros espacios están creados para conectar con la naturaleza y con uno mismo.
                        </p>

                        <p className="text-gray-400 mb-10 font-sans leading-relaxed">
                            Ofrecemos un entorno seguro y profesional para explorar terapias alternativas,
                            siempre respetando las tradiciones ancestrales y la integridad de cada participante.
                        </p>

                        <button className="bg-secondary text-primary font-bold py-3 px-10 rounded-full hover:bg-white transition-all transform hover:scale-105 cursor-pointer shadow-lg shadow-secondary/20">
                            Leer Más
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default InfoSection;
