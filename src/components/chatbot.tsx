"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageSquare, X, Send, Bot, User } from "lucide-react"
import { chatWithGemini } from "@/app/actions/chat"

export function Chatbot() {
    const [isOpen, setIsOpen] = useState(false)
    const [messages, setMessages] = useState<{ role: "user" | "bot"; text: string }[]>([
        { role: "bot", text: "Hi! I'm LAC-Bot. Ask me anything about Lookman's work!" },
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

        const botResponse = await chatWithGemini(userMsg, history as any)
        setMessages((prev) => [...prev, { role: "bot", text: botResponse }])
        setIsLoading(false)
    }

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className="fixed bottom-6 right-6 z-50 p-4 bg-foreground text-background rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center"
            >
                <MessageSquare className="h-6 w-6" />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 100 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 100 }}
                        className="fixed bottom-24 right-6 z-50 w-[350px] md:w-[400px] h-[500px] bg-background border border-border rounded-2xl shadow-2xl flex flex-col overflow-hidden"
                    >
                        {/* Header */}
                        <div className="p-4 border-b border-border bg-muted/50 flex justify-between items-center">
                            <div className="flex items-center gap-2">
                                <Bot className="h-5 w-5" />
                                <span className="font-bold text-sm">LAC-Bot</span>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="hover:bg-muted p-1 rounded-md transition-colors">
                                <X className="h-5 w-5" />
                            </button>
                        </div>

                        {/* Messages */}
                        <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 scroll-smooth">
                            {messages.map((msg, i) => (
                                <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                                    <div
                                        className={`max-w-[80%] p-3 rounded-2xl text-sm ${msg.role === "user"
                                            ? "bg-foreground text-background rounded-tr-none"
                                            : "bg-muted text-foreground rounded-tl-none"
                                            }`}
                                    >
                                        {msg.text}
                                    </div>
                                </div>
                            ))}
                            {isLoading && (
                                <div className="flex justify-start italic text-xs text-muted-foreground ml-2 animate-pulse">
                                    LAC-Bot is thinking...
                                </div>
                            )}
                        </div>

                        {/* Input */}
                        <div className="p-4 border-t border-border flex gap-2">
                            <input
                                type="text"
                                value={input}
                                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Ask something..."
                                className="flex-1 bg-muted border-none rounded-lg px-3 py-2 text-sm focus:ring-1 focus:ring-foreground outline-none"
                            />
                            <button
                                disabled={isLoading}
                                onClick={handleSend}
                                className="p-2 bg-foreground text-background rounded-lg hover:opacity-90 disabled:opacity-50 transition-opacity"
                            >
                                <Send className="h-4 w-4" />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
