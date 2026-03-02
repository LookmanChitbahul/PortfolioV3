"use client"

import { motion } from "framer-motion"
import { AlertTriangle, Hammer } from "lucide-react"

export function ConstructionNotice() {
    return (
        <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-primary-gradient text-white px-4 py-2 text-center text-[10px] md:text-xs font-bold relative z-[60] flex items-center justify-center gap-2 uppercase tracking-[0.2rem] shadow-lg"
        >
            <Hammer className="h-3 w-3 animate-bounce" />
            <span>Under Construction: Enhancing the experience. New projects coming soon!</span>
            <Hammer className="h-3 w-3 animate-bounce" />
        </motion.div>
    )
}
