"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageSquare, X, Send, Bot, Sparkles, Maximize2, Minimize2 } from "lucide-react"
import { chatWithGemini } from "@/app/actions/chat"

export function Chatbot() {
    const [isOpen, setIsOpen] = useState(false)
    const [isExpanded, setIsExpanded] = useState(false)
    const [messages, setMessages] = useState<{ role: "user" | "bot"; text: string }[]>([
        { role: "bot", text: "SYSTEM: UPLINK ESTABLISHED. IDENTIFY YOURSELF." },
    ])
    const [input, setInput] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const scrollRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight
        }
    }, [messages])

    const handleSend = async () => {
        if (!input.trim() || isLoading) return

        const userMsg = input.trim()
        setInput("")
        setMessages((prev) => [...prev, { role: "user", text: userMsg }])
        setIsLoading(true)

        const history = messages.slice(1).map(m => ({
            role: m.role === "user" ? "user" : "model",
            parts: [{ text: m.text }]
        }))

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const botResponse = await chatWithGemini(userMsg, history)
        setMessages((prev) => [...prev, { role: "bot", text: botResponse }])
        setIsLoading(false)
    }

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4 pointer-events-none">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 50 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 50 }}
                        transition={{ duration: 0.2 }}
                        className={`pointer-events-auto cyber-card flex flex-col overflow-hidden origin-bottom-right transition-all duration-300 ${isExpanded ? 'w-[90vw] h-[80vh] max-w-[1200px]' : 'w-[85vw] sm:w-[350px] md:w-[400px] h-[60vh] sm:h-[500px]'
                            } max-h-[calc(100vh-120px)] max-w-[calc(100vw-48px)]`}
                    >
                        {/* Header */}
                        <div className="p-4 border-b border-[#bc13fe] bg-[#111] flex justify-between items-center">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-black border border-[#00fcfd] text-[#00fcfd]">
                                    <Bot className="h-5 w-5" />
                                </div>
                                <div>
                                    <span className="font-bold text-xs block text-[#bc13fe] tracking-widest uppercase">Communication_Uplink</span>
                                    <div className="flex items-center gap-1">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#00fcfd] animate-pulse" />
                                        <span className="text-[10px] text-[#00fcfd] uppercase tracking-widest font-bold">Encrypted_Line</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={() => setIsExpanded(!isExpanded)}
                                    className="hover:bg-[#bc13fe]/20 p-2 border border-transparent hover:border-[#bc13fe] transition-colors text-white"
                                >
                                    {isExpanded ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
                                </button>
                                <button onClick={() => setIsOpen(false)} className="hover:bg-[#f50057] p-2 transition-colors text-white">
                                    <X className="h-5 w-5" />
                                </button>
                            </div>
                        </div>

                        {/* Messages */}
                        <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 scroll-smooth bg-black/90">
                            {messages.map((msg, i) => (
                                <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                                    <div
                                        className={`max-w-[85%] p-4 text-xs font-mono leading-relaxed border ${msg.role === "user"
                                            ? "border-[#bc13fe] text-[#bc13fe] bg-[#bc13fe]/10"
                                            : "border-[#00fcfd] text-[#00fcfd] bg-[#00fcfd]/10"
                                            }`}
                                        style={{ clipPath: msg.role === "user" ? "polygon(0 0, 100% 0, 100% 80%, 90% 100%, 0 100%)" : "polygon(10% 0, 100% 0, 100% 100%, 0 100%, 0 20%)" }}
                                    >
                                        <span className="block opacity-50 mb-1 text-[8px] uppercase tracking-widest">{msg.role === "user" ? "User_ID" : "LAC_v3.0"}</span>
                                        {msg.text}
                                    </div>
                                </div>
                            ))}
                            {isLoading && (
                                <div className="flex justify-start items-center gap-2">
                                    <div className="p-2 border border-[#00fcfd] bg-[#00fcfd]/10">
                                        <div className="flex gap-1">
                                            <div className="w-1.5 h-1.5 bg-[#00fcfd] animate-bounce [animation-delay:-0.3s]" />
                                            <div className="w-1.5 h-1.5 bg-[#00fcfd] animate-bounce [animation-delay:-0.15s]" />
                                            <div className="w-1.5 h-1.5 bg-[#00fcfd] animate-bounce" />
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Input */}
                        <div className="p-4 border-t border-[#bc13fe] bg-[#111] flex flex-col gap-2">
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    value={input}
                                    onKeyDown={(e) => e.key === "Enter" && handleSend()}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder="Enter_Command..."
                                    className="flex-1 bg-black border border-[#bc13fe]/30 p-3 text-xs font-mono focus:border-[#bc13fe] outline-none text-[#bc13fe] transition-colors"
                                />
                                <button
                                    disabled={isLoading}
                                    onClick={handleSend}
                                    className="p-3 bg-[#bc13fe] text-black hover:bg-[#00fcfd] transition-all"
                                >
                                    <Send className="h-5 w-5" />
                                </button>
                            </div>
                            <div className="flex justify-center items-center gap-1 pt-2 opacity-50">
                                <Sparkles className="h-3 w-3 text-[#00fcfd]" />
                                <span className="text-[8px] text-white uppercase tracking-widest font-bold">Neural_Link_Powered_By_Gemini_3_Flash</span>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Chat Trigger Button */}
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className={`pointer-events-auto p-4 bg-[#bc13fe] text-black rounded-none shadow-[4px_4px_0px_#f50057] flex items-center justify-center border-none font-bold transition-all ${isOpen ? 'opacity-0 scale-50' : 'opacity-100 scale-100'
                    }`}
            >
                <MessageSquare className="h-6 w-6" />
            </motion.button>
        </div>
    )
}
