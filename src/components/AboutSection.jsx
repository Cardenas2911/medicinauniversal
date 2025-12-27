import React from 'react';

const AboutSection = () => {
    return (
        <section className="py-20 px-4 md:px-10 bg-[#0e2a29]">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">

                    {/* Columna Izquierda: Texto y Misión */}
                    <div className="flex flex-col">
                        <span className="text-secondary font-sans font-bold uppercase tracking-widest text-sm mb-4">
                            Sobre Nosotros
                        </span>

                        <h2 className="text-4xl md:text-5xl font-serif text-white mb-8 leading-tight">
                            Nuestra misión es empoderar tu viaje de sanación
                        </h2>

                        <p className="text-gray-300 font-sans font-light leading-relaxed mb-8 text-lg">
                            En Medicina Universal, combinamos la sabiduría ancestral de las plantas maestras con un enfoque terapéutico integral. Creemos en el poder de la naturaleza para restaurar el equilibrio del cuerpo, la mente y el espíritu. Nuestro compromiso es crear un espacio seguro y sagrado para tu transformación.
                        </p>

                        <div className="mb-12">
                            <h3 className="text-xl font-serif text-white mb-4">
                                Nuestros Valores
                            </h3>
                            <p className="text-gray-400 font-sans leading-relaxed">
                                Respeto profundo por la tradición, integridad en el servicio y amor incondicional en cada acompañamiento. Buscamos no solo sanar, sino despertar la consciencia de nuestra conexión con todo lo que existe.
                            </p>
                        </div>

                        <div className="border-t border-white/10 pt-8">
                            <h4 className="text-gray-400 font-sans text-sm mb-6 uppercase tracking-wider">
                                Impacto en cifras
                            </h4>
                            <div className="grid grid-cols-2 gap-8">
                                <div>
                                    <p className="text-4xl md:text-5xl font-serif text-white mb-2">10+</p>
                                    <p className="text-secondary text-sm font-sans">Años de Experiencia</p>
                                </div>
                                <div>
                                    <p className="text-4xl md:text-5xl font-serif text-white mb-2">500+</p>
                                    <p className="text-secondary text-sm font-sans">Vidas Transformadas</p>
                                </div>
                                <div>
                                    <p className="text-4xl md:text-5xl font-serif text-white mb-2">50</p>
                                    <p className="text-secondary text-sm font-sans">Retiros Realizados</p>
                                </div>
                                <div>
                                    <p className="text-4xl md:text-5xl font-serif text-white mb-2">100%</p>
                                    <p className="text-secondary text-sm font-sans">Compromiso</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Columna Derecha: Collage de Imágenes */}
                    <div className="grid grid-cols-2 gap-4 auto-rows-[200px]">
                        {/* Imagen Principal (Grande) */}
                        <div className="col-span-2 row-span-2 rounded-3xl overflow-hidden relative group">
                            <img
                                src="/images/about-main.jpg"
                                alt="Ceremonia de meditación"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0e2a29]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>

                        {/* Imagen Secundaria 1 */}
                        <div className="col-span-1 row-span-1 rounded-3xl overflow-hidden relative group">
                            <img
                                src="/images/about-secondary-1.jpg"
                                alt="Naturaleza y paz"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                        </div>

                        {/* Imagen Secundaria 2 */}
                        <div className="col-span-1 row-span-1 rounded-3xl overflow-hidden relative group">
                            <img
                                src="/images/about-secondary-2.jpg"
                                alt="Grupo compartiendo"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutSection;
