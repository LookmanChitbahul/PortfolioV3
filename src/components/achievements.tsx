import { Award, ShieldCheck, Zap } from "lucide-react";

export function Achievements() {
    const achievements = [
        {
            title: "2nd Runner-Up – Startup Weekend",
            issuer: "Startup Weekend Mauritius",
            details: "Built BridgeGen MVP within 72 hours under intense competition constraints."
        },
        {
            title: "Best Student in Computer Science",
            issuer: "Grade 12 (Mauritius)",
            details: "National recognition for academic excellence in computer science."
        },
        {
            title: "Learn Bitcoin Cohort",
            issuer: "Btrust Builders",
            details: "Selected for a live cohort to learn Bitcoin from the command line."
        },
        {
            title: "Online AI Bootcamp",
            issuer: "JCI Quatre Bornes",
            details: "Certification for completing comprehensive AI development training."
        },
        {
            title: "Interpersonal Comms & Counseling",
            issuer: "Training Certificate",
            details: "Development of soft skills and structured communication methodologies."
        }
    ];

    return (
        <section id="achievements" className="py-24 bg-transparent relative overflow-hidden">
            <div className="max-w-screen-xl mx-auto px-6 relative z-10">
                <div className="flex items-center gap-4 mb-16">
                    <div className="w-16 h-[6px] bg-[#bc13fe]"></div>
                    <h2 className="text-5xl font-black uppercase tracking-tighter text-[#bc13fe] glitch" data-text="AWARDS_REGISTRY">
                        AWARDS_REGISTRY
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {achievements.map((item, index) => (
                        <div key={index} className="cyber-card p-6 border-[#bc13fe] bg-black/40 flex items-center gap-6 group hover:bg-[#bc13fe]/5 transition-all">
                            <div className="p-4 bg-black border border-[#00fcfd] text-[#00fcfd] group-hover:scale-110 transition-transform shadow-[0_0_10px_rgba(0,252,253,0.2)]">
                                <Award className="h-6 w-6" />
                            </div>
                            <div>
                                <h3 className="text-lg font-black text-white uppercase tracking-tighter italic">{item.title}</h3>
                                <p className="text-[#bc13fe] font-bold text-[8px] uppercase tracking-widest mb-1">{item.issuer}</p>
                                <p className="text-gray-500 text-[10px] font-medium italic">{item.details}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
