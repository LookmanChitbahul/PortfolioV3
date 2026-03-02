"use client"

import { useState } from "react";
import { Github, Linkedin, Mail, MapPin, Phone, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { sendContactEmail } from "@/app/actions/contact";

export function Contact() {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    async function handleSubmit(formData: FormData) {
        setStatus("loading");
        const res = await sendContactEmail(formData);

        if (res?.error) {
            setErrorMessage(res.error);
            setStatus("error");
        } else {
            setStatus("success");
            // Optionally reset native form
            const form = document.getElementById('contact-form') as HTMLFormElement;
            if (form) form.reset();
        }
    }

    return (
        <section id="contact" className="py-24 bg-transparent relative overflow-hidden">
            <div className="max-w-screen-xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-start relative z-10">
                <div>
                    <div className="flex items-center gap-4 mb-16">
                        <div className="w-16 h-[6px] bg-[#bc13fe]"></div>
                        <h2 className="text-5xl font-black uppercase tracking-tighter text-[#bc13fe] glitch" data-text="COMM_DOWNLINK">
                            COMM_DOWNLINK
                        </h2>
                    </div>

                    <div className="cyber-card p-10 border-[#bc13fe] bg-black/60 backdrop-blur-md">
                        <p className="text-gray-300 mb-10 leading-relaxed font-medium italic border-b border-[#bc13fe]/20 pb-6">
                            SUBMIT_TRANSMISSION: READY_FOR_COLLAB
                        </p>

                        <form id="contact-form" action={handleSubmit} className="space-y-8">
                            <div>
                                <label className="block text-[10px] font-black text-[#bc13fe] mb-2 uppercase tracking-[0.3em]" htmlFor="name">USER_ID / NAME</label>
                                <input id="name" name="name" type="text" required className="w-full bg-[#111] border border-[#bc13fe]/30 px-6 py-4 outline-none focus:border-[#00fcfd] transition-all text-white font-mono text-sm" placeholder="UNKNOWN_ENTITY" />
                            </div>
                            <div>
                                <label className="block text-[10px] font-black text-[#bc13fe] mb-2 uppercase tracking-[0.3em]" htmlFor="email">IP_ADDRESS / EMAIL</label>
                                <input id="email" name="email" type="email" required className="w-full bg-[#111] border border-[#bc13fe]/30 px-6 py-4 outline-none focus:border-[#00fcfd] transition-all text-white font-mono text-sm" placeholder="USER@NET_ADDR" />
                            </div>
                            <div>
                                <label className="block text-[10px] font-black text-[#bc13fe] mb-2 uppercase tracking-[0.3em]" htmlFor="message">DATA_PACKET / MSG</label>
                                <textarea id="message" name="message" required rows={4} className="w-full bg-[#111] border border-[#bc13fe]/30 px-6 py-4 outline-none focus:border-[#00fcfd] transition-all text-white font-mono text-sm resize-none" placeholder="ENTER_MESSAGE_HERE..."></textarea>
                            </div>

                            {status === "success" && (
                                <div className="p-4 bg-[rgba(0,252,253,0.1)] border border-[#00fcfd] flex items-center gap-3 text-[#00fcfd] font-mono text-xs uppercase tracking-widest">
                                    <CheckCircle2 className="w-5 h-5 shrink-0" />
                                    <span>TRANSMISSION_SUCCESS: MSG_DELIVERED.</span>
                                </div>
                            )}

                            {status === "error" && (
                                <div className="p-4 bg-[rgba(245,0,87,0.1)] border border-[#f50057] flex items-center gap-3 text-[#f50057] font-mono text-xs uppercase tracking-widest">
                                    <AlertCircle className="w-5 h-5 shrink-0" />
                                    <span>{errorMessage}</span>
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={status === "loading"}
                                className={`cyber-button w-full py-5 text-xl flex items-center justify-center gap-3 ${status === "loading" ? "opacity-50 cursor-wait bg-[#111]" : ""}`}
                            >
                                {status === "loading" ? (
                                    <>
                                        <Loader2 className="w-6 h-6 animate-spin text-[#00fcfd]" />
                                        SENDING_DATA...
                                    </>
                                ) : (
                                    "INITIATE_TRANSFER"
                                )}
                            </button>
                        </form>
                    </div>
                </div>

                <div className="lg:pt-32 space-y-16">
                    <div className="flex items-center gap-8 group">
                        <div className="p-6 cyber-card border-[#00fcfd] text-[#00fcfd] group-hover:bg-[#00fcfd]/10 transition-all">
                            <Mail className="h-8 w-8" />
                        </div>
                        <div>
                            <span className="block text-[10px] text-[#bc13fe] font-black uppercase tracking-[0.3em] mb-2">NETWORK_MAIL</span>
                            <a href="mailto:lookman1337cc@gmail.com" className="text-2xl font-black text-white hover:text-[#bc13fe] transition-colors tracking-tighter italic">lookman1337cc@gmail.com</a>
                        </div>
                    </div>

                    <div className="flex items-center gap-8 group">
                        <div className="p-6 cyber-card border-[#bc13fe] text-[#bc13fe] group-hover:bg-[#bc13fe]/10 transition-all">
                            <Linkedin className="h-8 w-8" />
                        </div>
                        <div>
                            <span className="block text-[10px] text-[#bc13fe] font-black uppercase tracking-[0.3em] mb-2">NEURAL_LINKEDIN</span>
                            <a href="https://www.linkedin.com/in/lookman-chitbahul-14b478366/" target="_blank" className="text-2xl font-black text-white hover:text-[#00fcfd] transition-colors tracking-tighter italic">Lookman Chitbahul</a>
                        </div>
                    </div>

                    <div className="flex items-center gap-8 group">
                        <div className="p-6 cyber-card border-[#f50057] text-[#f50057] group-hover:bg-[#f50057]/10 transition-all">
                            <MapPin className="h-8 w-8" />
                        </div>
                        <div>
                            <span className="block text-[10px] text-[#bc13fe] font-black uppercase tracking-[0.3em] mb-2">GEO_LOC</span>
                            <span className="text-2xl font-black text-white tracking-tighter italic">MAURITIUS_DISTRICT_ZERO</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export function Footer() {
    return (
        <footer className="py-20 bg-black/80 border-t-2 border-[#bc13fe] relative z-10 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#bc13fe] to-transparent" />
            <div className="max-w-screen-xl mx-auto px-6 flex flex-col items-center">
                <div className="text-4xl font-black tracking-tighter text-[#bc13fe] mb-8 glitch" data-text="LOOKMAN_v1.0">
                    LOOKMAN_v1.0
                </div>
                <p className="text-[10px] font-black text-gray-500 uppercase tracking-[0.4em] mb-4">
                    &copy; {new Date().getFullYear()} MERCENARY_DESIGN_SYSTEMS. ALL_RIGHTS_RESERVED.
                </p>
                <div className="flex gap-8 text-[#00fcfd] font-bold text-[8px] uppercase tracking-widest">
                    <span>STATUS: ONLINE</span>
                    <span>LOC: 20.3484° S, 57.5522° E</span>
                    <span>VER: 3.0.77</span>
                </div>
            </div>
        </footer>
    );
}
