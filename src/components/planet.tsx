"use client"

import { motion, useMotionValue, useSpring } from "framer-motion"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function Planet() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    // Mounted check for next-themes
    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    const isDark = theme === "dark"

    return (
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] z-20">
            <motion.div
                drag
                dragConstraints={{ left: -500, right: 100, top: -300, bottom: 300 }}
                whileHover={{ scale: 1.05, cursor: "grab" }}
                whileTap={{ scale: 0.95, cursor: "grabbing" }}
                onClick={() => setTheme(isDark ? "light" : "dark")}
                className="w-full h-full relative"
            >
                <motion.div
                    animate={{
                        rotate: 360,
                    }}
                    transition={{
                        duration: 200,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="w-full h-full"
                >
                    <svg
                        viewBox="0 0 100 100"
                        className={`w-full h-full transition-colors duration-1000 ${isDark ? "text-white/20" : "text-black/10"
                            }`}
                    >
                        <defs>
                            <radialGradient id="planetGradient" cx="50%" cy="50%" r="50%" fx="30%" fy="30%">
                                <stop offset="0%" stopColor={isDark ? "#ffffff" : "#000000"} stopOpacity={isDark ? "0.2" : "0.1"} />
                                <stop offset="100%" stopColor={isDark ? "#000000" : "#ffffff"} stopOpacity="0" />
                            </radialGradient>
                            <filter id="glow">
                                <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                                <feMerge>
                                    <feMergeNode in="coloredBlur" />
                                    <feMergeNode in="SourceGraphic" />
                                </feMerge>
                            </filter>
                        </defs>

                        {/* Atmosphere/Glow surround */}
                        <circle cx="50" cy="50" r="48" fill="url(#planetGradient)" />

                        {/* Main planet body with shading */}
                        <circle
                            cx="50"
                            cy="50"
                            r="45"
                            fill={isDark ? "#111" : "#f0f0f0"}
                            stroke="currentColor"
                            strokeWidth="0.2"
                        />

                        {/* Shading layer */}
                        <path
                            d="M 50,5 A 45,45 0 0,1 50,95 A 35,45 0 0,0 50,5"
                            fill={isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)"}
                        />

                        {/* Craters / Details */}
                        <circle cx="30" cy="35" r="4" fill="none" stroke="currentColor" strokeWidth="0.1" />
                        <circle cx="32" cy="37" r="1" fill="currentColor" opacity="0.1" />

                        <circle cx="65" cy="30" r="6" fill="none" stroke="currentColor" strokeWidth="0.1" />
                        <circle cx="67" cy="32" r="2" fill="currentColor" opacity="0.1" />

                        <circle cx="55" cy="70" r="5" fill="none" stroke="currentColor" strokeWidth="0.1" />

                        <path d="M 40,20 Q 45,22 50,20" fill="none" stroke="currentColor" strokeWidth="0.05" opacity="0.5" />
                        <path d="M 60,60 Q 65,62 70,60" fill="none" stroke="currentColor" strokeWidth="0.05" opacity="0.5" />

                        {/* Advanced Rings */}
                        <g transform="rotate(-15 50 50)">
                            <ellipse
                                cx="50" cy="50" rx="60" ry="8"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="0.05"
                                opacity={isDark ? "0.3" : "0.1"}
                            />
                            <ellipse
                                cx="50" cy="50" rx="55" ry="6"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="0.03"
                                opacity={isDark ? "0.2" : "0.05"}
                            />
                            <ellipse
                                cx="50" cy="50" rx="70" ry="10"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="0.02"
                                opacity={isDark ? "0.1" : "0.03"}
                            />
                        </g>
                    </svg>
                </motion.div>

                {/* Helper text on hover */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 flex items-center justify-center pointer-events-none"
                >
                    <span className="text-[10px] uppercase tracking-tighter text-muted-foreground bg-background/50 backdrop-blur-sm px-2 py-1 rounded">
                        Drag to move • Click to toggle theme
                    </span>
                </motion.div>
            </motion.div>
        </div>
    )
}
