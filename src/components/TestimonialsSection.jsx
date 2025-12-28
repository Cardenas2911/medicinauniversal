import React from 'react';

const TestimonialCard = ({ quote, author, role, image, className = "" }) => (
    <div className={`bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl flex flex-col justify-between hover:bg-white/10 transition-all duration-300 ${className}`}>
        <div>
            <div className="flex gap-1 mb-4 text-secondary">
                {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                ))}
            </div>
            <p className="text-gray-200 text-lg leading-relaxed italic mb-6">"{quote}"</p>
        </div>
        <div className="flex items-center gap-4">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold bg-gradient-to-br from-emerald-500 to-teal-600`}>
                {/* Fallback avatar if no image provided */}
                {image ? (
                    <img src={image} alt={author} className="w-full h-full object-cover rounded-full" />
                ) : (
                    <span className="text-white">{author.charAt(0)}</span>
                )}
            </div>
            <div>
                <h4 className="text-white font-bold">{author}</h4>
                <p className="text-emerald-400 text-sm">{role}</p>
            </div>
        </div>
    </div>
);

const TestimonialsSection = () => {
    return (
        <section className="py-24 px-4 md:px-10 bg-[#0e2a29] relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <div className="bg-white/5 inline-block px-4 py-1.5 rounded-full text-secondary text-sm font-semibold tracking-wider mb-6 border border-secondary/20 uppercase">
                        Testimonios
                    </div>
                    <h2 className="text-4xl md:text-6xl font-serif text-white mb-6">
                        Historias de <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-secondary">Transformación</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto font-sans font-light">
                        Hemos acompañado a cientos de personas en su camino de sanación. Estas son algunas de sus voces.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Column 1 */}
                    <div className="space-y-6">
                        <TestimonialCard
                            quote="La experiencia con el Yagé cambió mi perspectiva sobre la vida. Encontré una paz que no sabía que existía."
                            author="María González"
                            role="Participante Retiro 2023"
                        />
                        <TestimonialCard
                            quote="Un espacio seguro y profesional. Los facilitadores son ángeles terrenales."
                            author="Carlos Ruiz"
                            role="Terapia Individual"
                            className="bg-emerald-900/20"
                        />
                    </div>

                    {/* Column 2 (Center - Featured) */}
                    <div className="space-y-6">
                        <div className="bg-gradient-to-b from-emerald-800/40 to-[#0e2a29] border border-emerald-500/30 p-10 rounded-[2.5rem] text-center flex flex-col items-center justify-center min-h-[400px]">
                            <p className="text-2xl md:text-3xl font-serif text-white mb-8 leading-relaxed">
                                "Llegué buscando curación física y encontré sanación para mi alma. Medicina Universal es un refugio de luz."
                            </p>
                            <div className="flex flex-col items-center">
                                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center text-primary text-2xl font-bold mb-3">
                                    L
                                </div>
                                <h4 className="text-white font-bold text-xl">Lucía Méndez</h4>
                                <p className="text-emerald-400">Desde España</p>
                            </div>
                        </div>
                    </div>

                    {/* Column 3 */}
                    <div className="space-y-6">
                        <TestimonialCard
                            quote="Nunca había sentido una conexión tan profunda con la naturaleza. Gracias por guiarme."
                            author="Javier Torres"
                            role="Retiro de Silencio"
                            className="bg-emerald-900/20"
                        />
                        <TestimonialCard
                            quote="Recomiendo este lugar a cualquiera que esté buscando respuestas. Volveré sin dudarlo."
                            author="Ana P."
                            role="Comunidad"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
