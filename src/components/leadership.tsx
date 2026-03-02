export function Leadership() {
    const activities = [
        {
            title: "AgentForce Hackathon 2025",
            role: "Event Organizer",
            org: "UoM Computer Club & Nexavenu",
            period: "Jan 2025",
            details: "Coordinated logistics, participant engagement, and event operations for university-level AI agent hackathon."
        },
        {
            title: "Google Developer Group (GDG)",
            role: "Technical Member",
            org: "GDG Mauritius",
            period: "2024 - Present",
            details: "Participate in technical workshops and collaborative development events focused on Google technologies."
        },
        {
            title: "Newbie Developers Group",
            role: "Active Member",
            org: "University of Mauritius",
            period: "2023 - Present",
            details: "Engage in peer learning and collaborative coding initiatives within the university's technical community."
        }
    ];

    return (
        <section id="leadership" className="py-24 bg-transparent relative overflow-hidden">
            <div className="max-w-screen-xl mx-auto px-6 relative z-10">
                <div className="flex items-center gap-4 mb-16">
                    <div className="w-16 h-[6px] bg-[#bc13fe]"></div>
                    <h2 className="text-5xl font-black uppercase tracking-tighter text-[#bc13fe] glitch" data-text="LEADER_LOGS">
                        LEADER_LOGS
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {activities.map((item, index) => (
                        <div key={index} className="cyber-card p-10 border-[#bc13fe] bg-black/40 hover:bg-[#bc13fe]/5 transition-all group">
                            <div className="flex justify-between items-start mb-6">
                                <span className="text-[#00fcfd] font-black text-xs uppercase tracking-widest">{item.period}</span>
                                <div className="w-2 h-2 bg-[#f50057] shadow-[0_0_8px_#f50057]" />
                            </div>
                            <h3 className="text-2xl font-black text-white mb-2 uppercase tracking-tighter italic group-hover:text-[#bc13fe] transition-colors">{item.title}</h3>
                            <p className="text-[#bc13fe] font-bold text-[10px] mb-6 uppercase tracking-widest">{item.role} @ {item.org}</p>
                            <p className="text-gray-400 text-sm leading-relaxed font-medium italic border-l border-[#bc13fe]/20 pl-4">
                                {item.details}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
