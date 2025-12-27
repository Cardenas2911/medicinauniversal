import React from 'react';

const ContactSection = () => {
    return (
        <section className="py-20 px-4 md:px-10 bg-[#0e2a29]">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row gap-12 md:gap-20">
                    {/* Información de Contacto (Izquierda) */}
                    <div className="md:w-1/2 flex flex-col justify-center">
                        <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
                            Ponte en contacto
                        </h2>
                        <p className="text-gray-300 font-sans font-light leading-relaxed mb-12 text-lg">
                            Estamos aquí para escucharte y acompañarte en tu proceso.
                            Escríbenos para reservar tu lugar en el próximo retiro o para resolver cualquier duda que tengas.
                        </p>

                        <div className="space-y-6 font-sans text-gray-300">
                            <div className="flex items-start gap-4">
                                <div className="text-secondary mt-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="font-semibold text-white">Ubicación</p>
                                    <p>Valle Sagrado, Cusco, Perú</p> {/* Placeholder location */}
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="text-secondary mt-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="font-semibold text-white">Teléfono</p>
                                    <p>+51 987 654 321</p> {/* Placeholder phone */}
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="text-secondary mt-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="font-semibold text-white">Email</p>
                                    <p>info@medicinauniversal.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Formulario (Derecha) */}
                    <div className="md:w-1/2">
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="firstName" className="block text-white font-sans text-sm font-semibold mb-2">Nombre</label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        className="w-full bg-[#153534] border border-[#2c5e5c] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-secondary transition-colors"
                                        placeholder="Tu nombre"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="lastName" className="block text-white font-sans text-sm font-semibold mb-2">Apellido</label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        className="w-full bg-[#153534] border border-[#2c5e5c] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-secondary transition-colors"
                                        placeholder="Tu apellido"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-white font-sans text-sm font-semibold mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full bg-[#153534] border border-[#2c5e5c] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-secondary transition-colors"
                                    placeholder="tucorreo@ejemplo.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-white font-sans text-sm font-semibold mb-2">Número de teléfono</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    className="w-full bg-[#153534] border border-[#2c5e5c] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-secondary transition-colors"
                                    placeholder="+51 900 000 000"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-white font-sans text-sm font-semibold mb-2">Mensaje</label>
                                <textarea
                                    id="message"
                                    rows="4"
                                    className="w-full bg-[#153534] border border-[#2c5e5c] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-secondary transition-colors resize-none"
                                    placeholder="Escribe tu mensaje aquí..."
                                ></textarea>
                            </div>

                            <div className="flex justify-end">
                                <button
                                    type="submit"
                                    className="bg-secondary hover:bg-white text-primary font-bold py-3 px-8 rounded-lg transition-all transform hover:scale-105"
                                >
                                    Enviar mensaje
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
