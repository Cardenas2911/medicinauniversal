import React from 'react';

export const AboutHero = () => (
    <section className="py-20 md:py-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
                <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block">Sobre Nosotros</span>
                <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 leading-tight">
                    Cambiando la forma en que <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-secondary">conectas contigo.</span>
                </h1>
                <p className="text-gray-300 text-lg md:text-xl font-light leading-relaxed max-w-lg">
                    Un espacio sagrado donde la medicina ancestral y la guía terapéutica se unen para desbloquear tu verdadero potencial.
                </p>
            </div>

            {/* Bento Grid Images */}
            <div className="grid grid-cols-2 gap-4 h-[500px]">
                <div className="col-span-1 row-span-2 rounded-3xl overflow-hidden relative">
                    <img src={`${import.meta.env.BASE_URL}images/about-main.jpg`} alt="Conexión" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="col-span-1 row-span-1 rounded-3xl overflow-hidden relative">
                    <img src={`${import.meta.env.BASE_URL}images/hero-bg.webp`} alt="Naturaleza" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="col-span-1 row-span-1 rounded-3xl overflow-hidden relative">
                    <img src={`${import.meta.env.BASE_URL}images/about-secondary-1.jpg`} alt="Comunidad" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
            </div>
        </div>
    </section>
);

export const AboutMission = () => (
    <section className="py-20 px-6 bg-[#0B2221]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
                <h2 className="text-4xl font-serif text-white mb-8">Nuestra Misión</h2>
                <p className="text-gray-400 text-lg leading-relaxed mb-6">
                    Creemos que cada individuo tiene la capacidad innata de sanar. Nuestra labor es facilitar ese proceso a través de herramientas ancestrales como el Yagé, integradas con soporte emocional moderno.
                </p>
                <p className="text-gray-400 text-lg leading-relaxed">
                    No solo ofrecemos ceremonias; construimos puentes entre el mundo espiritual y tu vida cotidiana, asegurando que cada experiencia se traduzca en cambios reales y duraderos.
                </p>
            </div>

            <div className="grid grid-cols-2 gap-8 content-center">
                <div>
                    <p className="text-5xl md:text-6xl font-serif text-white mb-2">10+</p>
                    <p className="text-secondary uppercase tracking-wider text-sm">Años de Servicio</p>
                </div>
                <div>
                    <p className="text-5xl md:text-6xl font-serif text-white mb-2">2k+</p>
                    <p className="text-secondary uppercase tracking-wider text-sm">Vidas Tocadas</p>
                </div>
                <div>
                    <p className="text-5xl md:text-6xl font-serif text-white mb-2">100%</p>
                    <p className="text-secondary uppercase tracking-wider text-sm">Seguridad</p>
                </div>
                <div>
                    <p className="text-5xl md:text-6xl font-serif text-white mb-2">∞</p>
                    <p className="text-secondary uppercase tracking-wider text-sm">Gratitud</p>
                </div>
            </div>
        </div>
    </section>
);

export const AboutValues = () => (
    <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-serif text-white mb-16 border-b border-white/10 pb-8">Nuestros Valores</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {[
                    { title: "Respeto Ancestral", desc: "Honramos las tradiciones y linajes de donde provienen estas medicinas, manteniéndolas puras y sagradas." },
                    { title: "Integridad", desc: "Operamos con total transparencia y ética. Tu seguridad física, emocional y espiritual es nuestra prioridad absoluta." },
                    { title: "Amor Incondicional", desc: "Creamos un contenedor libre de juicios donde puedes ser vulnerable y auténtico en tu proceso." },
                    { title: "Comunidad", desc: "La sanación se potencia en grupo. Fomentamos lazos duraderos entre nuestros participantes." },
                    { title: "Naturaleza", desc: "Reconocemos a la Tierra como nuestra madre y maestra. Todas nuestras prácticas son eco-conscientes." },
                    { title: "Integración", desc: "La ceremonia es solo el inicio. Te acompañamos a tejer las enseñanzas en tu día a día." }
                ].map((val, idx) => (
                    <div key={idx} className="group">
                        <h3 className="text-xl font-bold text-white mb-4 group-hover:text-secondary transition-colors">{val.title}</h3>
                        <p className="text-gray-400 leading-relaxed font-light">{val.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export const AboutTeam = () => (
    <section className="py-24 px-6 bg-[#0B2221]">
        <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl font-serif text-white mb-4">Nuestro Equipo</h2>
            <p className="text-gray-400 mb-16 max-w-2xl mx-auto">Guías experimentados dedicados a tu bienestar.</p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                    { name: "Carlos M.", role: "Fundador & Facilitador", initial: "C" },
                    { name: "Ana R.", role: "Psicóloga Integradora", initial: "A" },
                    { name: "Luis T.", role: "Músico Terapéutico", initial: "L" },
                    { name: "Elena G.", role: "Apoyo Ceremonial", initial: "E" },
                ].map((member, idx) => (
                    <div key={idx} className="flex flex-col items-center group">
                        <div className="w-32 h-32 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6 overflow-hidden group-hover:border-secondary/50 transition-all cursor-pointer">
                            <span className="text-4xl font-serif text-gray-500 group-hover:text-secondary transition-colors">{member.initial}</span>
                        </div>
                        <h4 className="text-white font-bold text-lg mb-1">{member.name}</h4>
                        <p className="text-emerald-500 text-sm uppercase tracking-wide">{member.role}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);
