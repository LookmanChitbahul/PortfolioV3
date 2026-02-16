"use client"

import { motion } from "framer-motion"
import { AlertTriangle } from "lucide-react"

export function ConstructionNotice() {
    return (
        <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-accent text-accent-foreground px-4 py-2 text-center text-xs font-medium relative z-[60] flex items-center justify-center gap-2"
        >
            <AlertTriangle className="h-3 w-3" />
            <span>UNDER CONSTRUCTION: More features and projects are being added. Stay tuned!</span>
        </motion.div>
    )
}
