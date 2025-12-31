import React, { useRef } from 'react';

const ArticleCard = ({ title, date, image, slug, author = "Medicina Universal" }) => {
    const finalImage = image.startsWith('/') ? `${import.meta.env.BASE_URL}${image.slice(1)}` : image;
    return (
        <a href={`${import.meta.env.BASE_URL}blog/${slug}`} className="block group relative h-[400px] w-[300px] md:w-[350px] flex-shrink-0 rounded-3xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300">
            {/* Background Image */}
            <img
                src={finalImage}
                alt={title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 p-6 w-full transform transition-transform duration-300 group-hover:-translate-y-2">
                <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-secondary/20 backdrop-blur-md flex items-center justify-center border border-secondary/30">
                        <span className="text-secondary font-serif font-bold text-xs">{author.charAt(0)}</span>
                    </div>
                    <div className="text-xs font-sans text-gray-300 uppercase tracking-wider">
                        {new Date(date).toLocaleDateString("es-ES", { month: 'short', day: 'numeric', year: 'numeric' })}
                    </div>
                </div>

                <h3 className="text-xl font-bold text-white leading-tight group-hover:text-secondary transition-colors">
                    {title}
                </h3>
            </div>
        </a>
    );
};

const ArticleCarousel = ({ posts }) => {
    const scrollRef = useRef(null);

    return (
        <section className="py-24 px-4 md:px-10 bg-[#0e2a29]">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-12 flex justify-between items-end">
                    <div>
                        <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-2 block">
                            Nuestro Blog
                        </span>
                        <h2 className="text-4xl md:text-5xl font-serif text-white">
                            Sabiduría Ancestral
                        </h2>
                    </div>

                    {/* View All Link (Desktop) */}
                    <a href={`${import.meta.env.BASE_URL}blog`} className="hidden md:flex items-center gap-2 text-white hover:text-secondary transition-colors group">
                        <span>Ver todos los artículos</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </div>

                {/* Carousel Container */}
                <div
                    ref={scrollRef}
                    className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scrollbar-hide no-scrollbar"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {posts.map((post) => (
                        <div key={post.slug} className="snap-center">
                            <ArticleCard
                                title={post.data.title}
                                date={post.data.pubDate}
                                image={post.data.heroImage}
                                slug={post.slug}
                            />
                        </div>
                    ))}

                    {/* Card to see more (Mobile friendly) */}
                    <a href={`${import.meta.env.BASE_URL}blog`} className="snap-center w-[300px] md:w-[350px] h-[400px] flex-shrink-0 rounded-3xl border-2 border-white/10 flex flex-col items-center justify-center gap-4 group hover:border-secondary/50 transition-colors">
                        <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white group-hover:text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </div>
                        <span className="text-white font-bold text-lg group-hover:text-secondary">Ver más artículos</span>
                    </a>
                </div>

                {/* Mobile View All Link */}
                <div className="mt-8 text-center md:hidden">
                    <a href={`${import.meta.env.BASE_URL}blog`} className="inline-flex items-center gap-2 text-secondary font-bold uppercase tracking-wide text-sm">
                        Ir al Blog
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ArticleCarousel;
