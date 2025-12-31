import React from 'react';
import { events } from '../data/events.js';

const EventsList = () => {
    const getImageUrl = (src) => `${import.meta.env.BASE_URL}images/gallery/${src}`;

    return (
        <section className="py-20 px-4 md:px-10 bg-[#0e2a29] min-h-screen">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <span className="text-secondary font-sans font-bold uppercase tracking-widest text-sm mb-4 block">
                        Próximas Actividades
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
                        Agenda Consciente
                    </h2>
                    <p className="text-gray-300 max-w-2xl mx-auto text-lg font-light">
                        Espacios creados con amor para tu crecimiento espiritual y bienestar integral.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {events.map((event) => (
                        <div key={event.id} className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 transition-all duration-300 group flex flex-col h-full hover:-translate-y-2">
                            {/* Imagen Header - Linkeable */}
                            <a href={`${import.meta.env.BASE_URL}eventos/${event.slug}`} className="block h-48 overflow-hidden relative cursor-pointer">
                                <img
                                    src={getImageUrl(event.image)}
                                    alt={event.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute top-4 right-4 bg-secondary text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                                    {event.category}
                                </div>
                            </a>

                            {/* Contenido */}
                            <div className="p-8 flex-1 flex flex-col">
                                <div className="mb-4">
                                    <p className="text-secondary font-bold mb-1 flex items-center gap-2">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                        {event.date}
                                    </p>
                                    <p className="text-gray-400 text-sm flex items-center gap-2">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                        {event.time}
                                    </p>
                                </div>

                                <h3 className="text-2xl font-serif text-white mb-4 leading-tight group-hover:text-secondary transition-colors">
                                    <a href={`${import.meta.env.BASE_URL}eventos/${event.slug}`}>
                                        {event.title}
                                    </a>
                                </h3>

                                <p className="text-gray-300 text-sm leading-relaxed mb-6 flex-1">
                                    {event.description}
                                </p>

                                <div className="mt-auto border-t border-white/10 pt-6 flex justify-between items-center">
                                    <div>
                                        <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Inversión</p>
                                        <p className="text-white font-bold text-lg">{event.price}</p>
                                    </div>
                                    <a
                                        href={`${import.meta.env.BASE_URL}eventos/${event.slug}`}
                                        className="bg-white/10 hover:bg-secondary hover:text-primary text-white p-3 rounded-full transition-all duration-300"
                                        aria-label="Ver detalles"
                                    >
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EventsList;
