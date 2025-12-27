import React from 'react';

const GallerySection = () => {
    // Placeholder data for the gallery
    // Using existing images for now. In a real scenario, these would be unique gallery photos.
    const galleryItems = [
        { id: 1, src: '/images/hero-bg.webp', alt: 'Ceremonia Nocturna', size: 'large' }, // Large item
        { id: 2, src: '/images/yage-plant.webp', alt: 'Preparación', size: 'small' },
        { id: 3, src: '/images/hero-bg.webp', alt: 'Espacio Sagrado', size: 'small' },
        { id: 4, src: '/images/hero-bg.webp', alt: 'Integración', size: 'medium' }, // Wide item
        { id: 5, src: '/images/yage-plant.webp', alt: 'Naturaleza', size: 'small' },
    ];

    return (
        <section className="py-20 px-4 md:px-10 bg-[#0e2a29]">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <p className="text-secondary font-sans text-sm tracking-widest uppercase mb-2">Nuestra Galería</p>
                        <h2 className="text-4xl md:text-5xl font-serif text-white leading-tight">
                            Momentos de <br />
                            <span className="text-secondary italic">Conexión Profunda.</span>
                        </h2>
                    </div>
                    <p className="text-gray-400 font-sans max-w-md leading-relaxed text-sm md:text-base">
                        Un vistazo a los espacios y momentos que hacen de nuestros retiros una experiencia transformadora.
                    </p>
                </div>

                {/* Bento Grid Gallery */}
                <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-[auto] md:h-[600px]">

                    {/* Item 1: Large Left - Couple/Connection */}
                    <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-[2rem]">
                        <img
                            src="/images/gallery/gallery-couple.webp"
                            alt="Conexión Espiritual"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all duration-300"></div>
                        <div className="absolute bottom-6 left-6">
                            <span className="bg-white/10 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs border border-white/20">
                                Familia y Amor
                            </span>
                        </div>
                    </div>

                    {/* Item 2: Top Right 1 - Ceremony/Pouring */}
                    <div className="md:col-span-1 md:row-span-1 relative group overflow-hidden rounded-[2rem]">
                        <img
                            src="/images/gallery/gallery-ceremony.webp"
                            alt="Ceremonia de Yagé"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute bottom-4 left-4">
                            <span className="bg-white/10 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs border border-white/20">
                                Ceremonia
                            </span>
                        </div>
                    </div>

                    {/* Item 3: Top Right 2 - Reading/Focus */}
                    <div className="md:col-span-1 md:row-span-1 relative group overflow-hidden rounded-[2rem]">
                        <img
                            src="/images/gallery/gallery-reading.webp"
                            alt="Lectura y Enfoque"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute bottom-4 left-4">
                            <span className="bg-white/10 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs border border-white/20">
                                Sabiduría
                            </span>
                        </div>
                    </div>

                    {/* Item 4: Bottom Right Wide - Nature/Silhouette */}
                    <div className="md:col-span-2 md:row-span-1 relative group overflow-hidden rounded-[2rem]">
                        <img
                            src="/images/gallery/gallery-sun-silhouette.webp"
                            alt="Conexión con la Naturaleza"
                            className="w-full h-full object-cover object-center transition-all duration-700 group-hover:scale-105"
                        />
                        <div className="absolute bottom-6 left-6">
                            <span className="bg-white/10 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs border border-white/20">
                                Renacer
                            </span>
                        </div>
                    </div>

                </div>

                {/* Call to Action or Footer for Gallery */}
                <div className="mt-12 text-center">
                    <button className="text-white hover:text-secondary border-b border-secondary pb-1 transition-colors font-sans tracking-wide text-sm">
                        Ver Galería Completa →
                    </button>
                </div>

            </div>
        </section>
    );
};

export default GallerySection;
