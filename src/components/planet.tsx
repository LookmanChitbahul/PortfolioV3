"use client"

import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function Planet() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    const isDark = theme === "dark"

    return (
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[350px] h-[350px] md:w-[700px] md:h-[700px] z-20">
            <motion.div
                drag
                dragConstraints={{ left: -1000, right: 200, top: -500, bottom: 500 }}
                whileHover={{ scale: 1.05, cursor: "grab" }}
                whileTap={{ scale: 0.95, cursor: "grabbing" }}
                onClick={() => setTheme(isDark ? "light" : "dark")}
                className="w-full h-full relative"
            >
                {/* Digital background glow */}
                <div className="absolute inset-0 bg-[#bc13fe] rounded-full blur-[120px] opacity-10 pointer-events-none" />

                <motion.div
                    animate={{
                        rotate: 360,
                    }}
                    transition={{
                        duration: 400,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="w-full h-full"
                >
                    <svg
                        viewBox="0 0 100 100"
                        className="w-full h-full transition-all duration-1000 text-[#bc13fe]"
                    >
                        <defs>
                            <radialGradient id="cyberPlanetGradient" cx="50%" cy="50%" r="50%" fx="30%" fy="30%">
                                <stop offset="0%" stopColor="#bc13fe" />
                                <stop offset="100%" stopColor="#000000" />
                            </radialGradient>
                            <radialGradient id="cyberRingGradient" cx="50%" cy="50%" r="50%">
                                <stop offset="0%" stopColor="#00fcfd" stopOpacity="0.8" />
                                <stop offset="100%" stopColor="#bc13fe" stopOpacity="0.2" />
                            </radialGradient>
                        </defs>

                        {/* Outer Field */}
                        <circle cx="50" cy="50" r="49.5" fill="none" stroke="#00fcfd" strokeWidth="0.1" strokeDasharray="1 2" />

                        {/* Main Body */}
                        <circle
                            cx="50"
                            cy="50"
                            r="45"
                            fill="url(#cyberPlanetGradient)"
                            stroke="#bc13fe"
                            strokeWidth="1"
                        />

                        {/* Latitude/Longitude Lines */}
                        <g opacity="0.4">
                            <ellipse cx="50" cy="50" rx="45" ry="10" fill="none" stroke="#00fcfd" strokeWidth="0.2" />
                            <ellipse cx="50" cy="50" rx="45" ry="25" fill="none" stroke="#00fcfd" strokeWidth="0.2" />
                            <line x1="50" y1="5" x2="50" y2="95" stroke="#00fcfd" strokeWidth="0.2" />
                        </g>

                        {/* Surface Details */}
                        <rect x="30" y="30" width="4" height="4" fill="#00fcfd" opacity="0.6" />
                        <rect x="60" y="55" width="2" height="2" fill="#00fcfd" opacity="0.4" />
                        <rect x="45" y="75" width="6" height="1" fill="#00fcfd" opacity="0.5" />

                        {/* Decorative Cyber Rings */}
                        <g transform="rotate(-25 50 50)">
                            <ellipse
                                cx="50" cy="50" rx="80" ry="8"
                                fill="none"
                                stroke="#00fcfd"
                                strokeWidth="0.8"
                                opacity="0.9"
                                strokeDasharray="20 5"
                            />
                            <ellipse
                                cx="50" cy="50" rx="65" ry="4"
                                fill="none"
                                stroke="#f50057"
                                strokeWidth="0.4"
                                opacity="0.8"
                                strokeDasharray="10 2"
                            />
                        </g>

                        {/* Binary / Data Sparkles */}
                        <text x="20" y="20" fontSize="1" fill="#bc13fe" opacity="1">1011</text>
                        <text x="75" y="80" fontSize="1" fill="#00fcfd" opacity="1">0001</text>
                    </svg>
                </motion.div>

                {/* Cyberpunk Helper UI */}
                <div className="absolute top-[80%] left-1/2 -translate-x-1/2 opacity-0 hover:opacity-100 transition-opacity bg-[#bc13fe] p-1 shadow-[4px_4px_0px_black]">
                    <span className="text-[10px] uppercase font-black text-black px-4 py-2 block border-2 border-black whitespace-nowrap">
                        NEURAL_INTERFACE_LINKED
                    </span>
                </div>
            </motion.div>
        </div>
    )
}
