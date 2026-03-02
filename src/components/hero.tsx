import { Planet } from "./planet";
import { Github, Linkedin, Mail } from "lucide-react";

export function Hero() {
    return (
        <section className="relative min-h-[95vh] flex items-center pt-24 overflow-hidden bg-transparent">
            {/* Cyberpunk Scanline / Noise background should be active from globals.css */}

            <div className="max-w-screen-xl mx-auto px-6 w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="order-2 lg:order-1">
                    <h1 className="text-5xl md:text-8xl font-black mb-8 leading-[0.9] tracking-tighter">
                        <span className="text-white text-3xl md:text-5xl block mb-2 opacity-80 uppercase">Accessing_Data...</span>
                        <span className="text-[#bc13fe] block glitch" data-text="LOOKMAN CHITBAHUL">LOOKMAN CHITBAHUL</span>
                        <span className="text-[#00fcfd] text-3xl md:text-4xl block mt-4 uppercase tracking-[0.4rem] font-bold">Mercenary_Developer</span>
                    </h1>

                    <div className="flex gap-6 mb-12">
                        <a href="https://github.com/LookmanChitbahul" target="_blank" className="p-4 border-2 border-[#bc13fe] text-[#bc13fe] hover:bg-[#bc13fe] hover:text-black transition-all hover:scale-110 shadow-[0_0_10px_rgba(188,19,254,0.3)]">
                            <Github className="h-7 w-7" />
                        </a>
                        <a href="https://www.linkedin.com/in/lookman-chitbahul-14b478366/" target="_blank" className="p-4 border-2 border-[#bc13fe] text-[#bc13fe] hover:bg-[#bc13fe] hover:text-black transition-all hover:scale-110 shadow-[0_0_10px_rgba(188,19,254,0.3)]">
                            <Linkedin className="h-7 w-7" />
                        </a>
                        <a href="mailto:lookman1337cc@gmail.com" className="p-4 border-2 border-[#bc13fe] text-[#bc13fe] hover:bg-[#bc13fe] hover:text-black transition-all hover:scale-110 shadow-[0_0_10px_rgba(188,19,254,0.3)]">
                            <Mail className="h-7 w-7" />
                        </a>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-6">
                        <a
                            href="#contact"
                            className="cyber-button text-xl px-10 py-5"
                        >
                            Establish_Connection
                        </a>
                    </div>
                </div>

                <div className="order-1 lg:order-2 relative">
                    <div className="absolute -inset-4 bg-[#f50057] opacity-10 blur-2xl rounded-full" />
                    <div className="cyber-card relative z-10 overflow-hidden">
                        <div className="bg-[#111] px-6 py-4 border-b border-[#bc13fe] flex items-center justify-between">
                            <div className="flex gap-3">
                                <div className="w-3 h-3 bg-[#f50057]" />
                                <div className="w-3 h-3 bg-[#bc13fe]" />
                                <div className="w-3 h-3 bg-[#00fcfd]" />
                            </div>
                            <span className="text-[10px] font-bold text-[#bc13fe] uppercase tracking-widest animate-pulse">Root_Access_Granted</span>
                        </div>
                        <div className="p-8 font-mono text-sm md:text-base bg-black/80">
                            <div className="text-gray-500 mb-2">{/* Initializing core_systems... */}</div>
                            <div>
                                <span className="code-keyword">struct</span> <span className="code-prop">Legend</span> <span className="code-bracket">{"{"}</span>
                            </div>
                            <div className="pl-6 pt-2">
                                <span className="code-key">alias</span>: <span className="code-val">&quot;Lookman_v3.0&quot;</span>,
                            </div>
                            <div className="pl-6">
                                <span className="code-key">cyberware</span>: <span className="code-bracket">[</span>
                                <span className="code-val">&quot;React_Framework&quot;</span>, <span className="code-val">&quot;PERN_Stack&quot;</span>,
                            </div>
                            <div className="pl-12">
                                <span className="code-val">&quot;NextJS_Engine&quot;</span>, <span className="code-val">&quot;Strapi_Headless&quot;</span>,
                            </div>
                            <div className="pl-12">
                                <span className="code-val">&quot;Gemini_AI&quot;</span>, <span className="code-val">&quot;Prisma_Vortex&quot;</span>
                                <span className="code-bracket">]</span>,
                            </div>
                            <div className="pl-6">
                                <span className="code-key">location</span>: <span className="code-val">&quot;Mauritius_District_Zero&quot;</span>,
                            </div>
                            <div className="pl-6">
                                <span className="code-key">status</span>: <span className="text-[#00fcfd] font-bold tracking-widest">&apos;READY_FOR_UPGRADE&apos;</span>,
                            </div>
                            <div className="pl-6">
                                <span className="code-key">threat_level</span>: <span className="text-[#f50057] font-bold">&quot;EXTREME&quot;</span>,
                            </div>
                            <div className="pt-2"><span className="code-bracket">{"}"}</span></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute top-1/2 right-0 -translate-y-1/2 opacity-40 hover:opacity-100 transition-opacity pointer-events-none hover:pointer-events-auto scale-90 md:scale-110">
                <Planet />
            </div>
        </section>
    );
}
