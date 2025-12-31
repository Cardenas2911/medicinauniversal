import React, { useState } from 'react';

const galleryImages = [
    { src: 'gallery-ceremony.webp', alt: 'Ceremonia sagrada', category: 'Ceremonias' },
    { src: 'gallery-couple.webp', alt: 'Conexión espiritual', category: 'Retiros' },
    { src: 'gallery-flyer.webp', alt: 'Evento especial', category: 'Eventos' },
    { src: 'gallery-nature-river.webp', alt: 'Río purificador', category: 'Naturaleza' },
    { src: 'gallery-nature.webp', alt: 'Entorno natural', category: 'Naturaleza' },
    { src: 'gallery-reading.webp', alt: 'Lectura y reflexión', category: 'Retiros' },
    { src: 'gallery-shaman-sun.webp', alt: 'Energía solar', category: 'Ceremonias' },
    { src: 'gallery-silhouette-leaf.webp', alt: 'Detalle natural', category: 'Naturaleza' },
    { src: 'gallery-silhouette-leaves.webp', alt: 'Sombras y luz', category: 'Naturaleza' },
    { src: 'gallery-sun-person.webp', alt: 'Amanecer', category: 'Retiros' },
    { src: 'gallery-sun-silhouette.webp', alt: 'Silueta al sol', category: 'Naturaleza' },
    { src: 'gallery-sunset-group.webp', alt: 'Grupo al atardecer', category: 'Comunidad' },
];

const DynamicGallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [filter, setFilter] = useState('Todos');

    const categories = ['Todos', ...new Set(galleryImages.map(img => img.category))];

    const filteredImages = filter === 'Todos'
        ? galleryImages
        : galleryImages.filter(img => img.category === filter);

    const getImageUrl = (src) => `${import.meta.env.BASE_URL}images/gallery/${src}`;

    return (
        <section className="py-20 px-4 md:px-10 bg-[#0e2a29] min-h-screen">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Nuestra Galería</h2>
                    <p className="text-gray-300 max-w-2xl mx-auto mb-8">
                        Momentos capturados de transformación, conexión y belleza natural en nuestros retiros.
                    </p>

                    {/* Filtros */}
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {categories.map(category => (
                            <button
                                key={category}
                                onClick={() => setFilter(category)}
                                className={`px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 ${filter === category
                                        ? 'bg-secondary text-[#0e2a29] shadow-lg scale-105'
                                        : 'bg-white/10 text-white hover:bg-white/20'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Grid Masonry (Simulado con columnas CSS) */}
                <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                    {filteredImages.map((image, index) => (
                        <div
                            key={index}
                            className="break-inside-avoid relative group rounded-2xl overflow-hidden cursor-pointer bg-black/20"
                            onClick={() => setSelectedImage(image)}
                        >
                            <img
                                src={getImageUrl(image.src)}
                                alt={image.alt}
                                className="w-full h-auto transform transition-transform duration-700 group-hover:scale-110"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                                <span className="text-white bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm text-sm font-bold border border-white/20">
                                    Ver Imagen
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-50"
                        onClick={() => setSelectedImage(null)}
                    >
                        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    <div
                        className="relative max-w-5xl max-h-[90vh] w-full flex items-center justify-center"
                        onClick={e => e.stopPropagation()}
                    >
                        <img
                            src={getImageUrl(selectedImage.src)}
                            alt={selectedImage.alt}
                            className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
                        />
                        <div className="absolute bottom-[-3rem] left-0 w-full text-center text-white/80 font-serif text-xl">
                            {selectedImage.alt}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default DynamicGallery;
