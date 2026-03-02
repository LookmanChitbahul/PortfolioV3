export function About() {
    return (
        <section id="about" className="py-24 bg-transparent relative overflow-hidden">
            {/* Cyberpunk grid background is handled by globals.css */}

            <div className="max-w-screen-xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
                <div className="order-2 lg:order-1">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-16 h-[6px] bg-[#bc13fe]"></div>
                        <h2 className="text-5xl font-black uppercase tracking-tighter text-[#bc13fe] glitch" data-text="BIO_SCAN">
                            BIO_SCAN
                        </h2>
                    </div>

                    <div className="text-gray-300 text-lg md:text-xl leading-relaxed mb-10 space-y-6 font-medium italic">
                        <p>
                            SYSTEM IDENTIFIED: <span className="text-[#00fcfd] font-bold">LOOKMAN CHITBAHUL</span> (Year 2)
                        </p>
                        <p className="border-l-4 border-[#f50057] pl-6 bg-[#f50057]/5 py-4">
                            Backend Specialist & Full-Stack Architect. Experienced in
                            <span className="text-[#bc13fe]"> ENTERPRISE BACKEND ARCHITECTURES</span>,
                            government-scale system integration (PERN stack), and high-performance
                            AI environments. Currently scaling my technical stack at the
                            University of Mauritius.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-8">
                        <div className="cyber-card p-6 border-[#bc13fe]">
                            <span className="block text-[#00fcfd] font-black text-3xl">----</span>
                            <span className="text-[10px] text-[#bc13fe] uppercase tracking-widest font-bold">CPA_RATING_V.1</span>
                        </div>
                        <div className="cyber-card p-6 border-[#bc13fe]">
                            <span className="block text-[#00fcfd] font-black text-3xl">2027</span>
                            <span className="text-[10px] text-[#bc13fe] uppercase tracking-widest font-bold">DEPLOYMENT_COMPLETE</span>
                        </div>
                    </div>
                </div>

                <div className="order-1 lg:order-2 flex justify-center relative">
                    <div className="absolute -inset-10 bg-[#00fcfd] opacity-5 blur-[100px] rounded-full" />
                    <div className="relative group grayscale hover:grayscale-0 transition-all duration-700">
                        <div className="absolute -inset-4 border-2 border-[#bc13fe] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                        <div className="cyber-card p-2 bg-black border-[#00fcfd]">
                            <div className="relative overflow-hidden aspect-square w-full max-w-[320px]">
                                <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.4)_50%),linear-gradient(90deg,rgba(255,0,0,0.1),rgba(0,255,0,0.05),rgba(0,0,255,0.1))] bg-[length:100%_4px,4px_100%] pointer-events-none z-10 opacity-60" />
                                <img
                                    src="https://framerusercontent.com/images/8r8z6RInCqE7P1R0P3zY.jpg"
                                    alt="Subject_Lookman"
                                    className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute bottom-4 left-4 right-4 bg-black/80 border border-[#bc13fe] p-2">
                                    <div className="flex justify-between items-center text-[8px] font-mono text-[#bc13fe]">
                                        <span>FACE_ID: VERIFIED</span>
                                        <span>77% MATCH</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
