const experiences = [
    {
        company: "Central Informatics Bureau (Ministry of IT, Mauritius)",
        role: "Web Developer Intern",
        period: "Feb 2026 – Apr 2026",
        description: "Developed internal project management platform using PERN stack. Integrated with PostgreSQL via Prisma ORM. Designed RESTful APIs and structured relational schemas for enterprise use.",
    },
    {
        company: "MetaBox Technology",
        role: "Backend Developer Intern",
        period: "Oct 2025 – Dec 2025",
        description: "Implemented headless CMS backend using Strapi. Integrated REST APIs and webhook automation with Zoho. Applied modular coding practices in a multi-team environment.",
    },
    {
        company: "NBZ Hardware",
        role: "Sales & Inventory Assistant",
        period: "Oct 2023 – Feb 2024",
        description: "Assisted customers with product selection and recommendations while managing inventory organization and stock presentation.",
    },
];

export function Experience() {
    return (
        <section id="experience" className="py-24 bg-transparent relative overflow-hidden">
            <div className="max-w-screen-xl mx-auto px-6 relative z-10">
                <div className="flex items-center gap-4 mb-16">
                    <div className="w-16 h-[6px] bg-[#bc13fe]"></div>
                    <h2 className="text-5xl font-black uppercase tracking-tighter text-[#bc13fe] glitch" data-text="SERVICE_HISTORY">
                        SERVICE_HISTORY
                    </h2>
                </div>

                <div className="relative space-y-12">
                    <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] bg-[#bc13fe]/20 -translate-x-1/2" />

                    {experiences.map((exp, index) => (
                        <div key={index} className="relative flex flex-col md:flex-row items-center gap-8 group">
                            {/* Tactical Timeline marker */}
                            <div className="absolute left-[20px] md:left-1/2 w-4 h-4 bg-[#bc13fe] border-2 border-black -translate-x-1/2 z-10 group-hover:scale-150 transition-transform shadow-[0_0_15px_#bc13fe]" />

                            <div className={`w-full md:w-[45%] ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto md:text-right md:flex-row-reverse'}`}>
                                <div className="cyber-card p-8 border-[#bc13fe] bg-black/40 backdrop-blur-sm group-hover:bg-[#bc13fe]/5 transition-all">
                                    <div className={`flex justify-between items-center mb-4 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                                        <span className="text-[#00fcfd] font-black text-xs uppercase tracking-[0.2em]">{exp.period}</span>
                                        <div className="w-2 h-2 bg-[#f50057]" />
                                    </div>
                                    <h3 className="text-3xl font-black text-white mb-1 uppercase tracking-tighter italic">{exp.company}</h3>
                                    <p className="text-[#bc13fe] font-bold text-[10px] mb-6 uppercase tracking-widest">{exp.role}</p>
                                    <p className="text-gray-400 text-sm leading-relaxed font-medium">
                                        {exp.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
