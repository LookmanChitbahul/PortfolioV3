export function Education() {
    const education = [
        {
            institution: "University of Mauritius",
            degree: "B.Eng. (Hons) Software Engineering",
            period: "2023 - 2027",
            details: "Focusing on core software engineering principles, algorithms, and full-stack development. Current CPA: ---- (Year 1)."
        },
        {
            institution: "Secondary Education",
            degree: "HSC Academic Excellence",
            period: "2022",
            details: "Best Student in Computer Science - Grade 12 (Mauritius)."
        }
    ];

    return (
        <section id="education" className="py-24 bg-transparent relative overflow-hidden">
            <div className="max-w-screen-xl mx-auto px-6 relative z-10">
                <div className="flex items-center gap-4 mb-16">
                    <div className="w-16 h-[6px] bg-[#bc13fe]"></div>
                    <h2 className="text-5xl font-black uppercase tracking-tighter text-[#bc13fe] glitch" data-text="ACADEMIC_SYLLABUS">
                        ACADEMIC_SYLLABUS
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {education.map((edu, index) => (
                        <div key={index} className="cyber-card p-10 border-[#bc13fe] relative group overflow-hidden bg-black/40 transition-all hover:bg-[#bc13fe]/5">
                            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-20 transition-opacity">
                                <svg className="w-32 h-32 text-[#00fcfd]" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 3L1 9L12 15L21 10.09V17H23V9M5 13.18V17.18L12 21L19 17.18V13.18L12 17L5 13.18Z" />
                                </svg>
                            </div>
                            <span className="text-[#00fcfd] font-black text-xs uppercase tracking-[0.3em] block mb-6">{edu.period}</span>
                            <h3 className="text-3xl font-black text-white mb-2 uppercase tracking-tighter italic">{edu.institution}</h3>
                            <p className="text-[#bc13fe] font-bold text-[10px] mb-6 uppercase tracking-widest">{edu.degree}</p>
                            <p className="text-gray-400 text-sm leading-relaxed font-medium italic">{edu.details}</p>

                            <div className="mt-8 pt-6 border-t border-[#bc13fe]/10 flex items-center gap-3">
                                <div className="w-2 h-2 bg-[#f50057]" />
                                <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">STATUS: ENROLLED</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
