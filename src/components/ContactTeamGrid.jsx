import React from 'react';

const TeamMemberCard = ({ name, role, image, isAdmin }) => (
    <div className="bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 hover:border-secondary/30 transition-all duration-300 group">
        <div className="p-8 flex flex-col items-center text-center">
            {/* Avatar */}
            <div className="w-24 h-24 mb-4 rounded-full overflow-hidden border-2 border-secondary/20 group-hover:border-secondary transition-colors">
                {image ? (
                    <img src={image} alt={name} className="w-full h-full object-cover" />
                ) : (
                    <div className="w-full h-full bg-[#0e2a29] flex items-center justify-center text-3xl font-serif font-bold text-secondary">
                        {name.charAt(0)}
                    </div>
                )}
            </div>

            {/* Info */}
            <h3 className="text-white font-serif font-bold text-xl mb-1">{name}</h3>
            <p className="text-emerald-400 text-sm mb-4 font-sans tracking-wide uppercase">{role}</p>

            {/* Badge */}
            {isAdmin && (
                <span className="bg-secondary/10 text-secondary text-xs font-bold px-3 py-1 rounded-full border border-secondary/20 uppercase tracking-widest">
                    Staff
                </span>
            )}
        </div>

        {/* Actions Footer */}
        <div className="bg-[#0b2221]/50 border-t border-white/5 flex divide-x divide-white/5">
            <button className="flex-1 py-4 flex items-center justify-center gap-2 text-gray-400 hover:text-secondary hover:bg-white/5 transition-all text-sm font-bold uppercase tracking-wide">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email
            </button>
            <button className="flex-1 py-4 flex items-center justify-center gap-2 text-gray-400 hover:text-secondary hover:bg-white/5 transition-all text-sm font-bold uppercase tracking-wide">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Llamar
            </button>
        </div>
    </div>
);

const ContactTeamGrid = () => {
    const team = [
        { name: "Jane Cooper", role: "Coordinadora", image: null, isAdmin: true },
        { name: "Cody Fisher", role: "Seguridad", image: null, isAdmin: true },
        { name: "Esther Howard", role: "Atención", image: null, isAdmin: true },
        { name: "Jenny Wilson", role: "Finanzas", image: null, isAdmin: true },
        { name: "Kristin Watson", role: "Terapia", image: null, isAdmin: true },
        { name: "Cam Williamson", role: "Facilitador", image: null, isAdmin: true },
        { name: "Courtney Henry", role: "Apoyo", image: null, isAdmin: true },
        { name: "Theresa Webb", role: "Dirección", image: null, isAdmin: true },
    ];

    return (
        <section className="py-20 px-4 md:px-10">
            <div className="max-w-7xl mx-auto">
                <h3 className="text-3xl font-serif text-white mb-10 border-b border-white/10 pb-4 inline-block">
                    Nuestro Equipo <span className="text-secondary">Directo</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {team.map((member, idx) => (
                        <TeamMemberCard key={idx} {...member} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ContactTeamGrid;
