"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { motion, AnimatePresence } from "framer-motion"

export function ThemeToggle() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = React.useState(false)

    React.useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return <div className="h-10 w-10" />
    }

    const isDark = theme === "dark"

    return (
        <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="relative rounded-full p-2 hover:bg-muted/50 transition-colors flex items-center justify-center h-10 w-10 overflow-hidden group"
            aria-label="Toggle theme"
        >
            <AnimatePresence mode="wait" initial={false}>
                <motion.div
                    key={theme}
                    initial={{ y: 20, opacity: 0, clipPath: "inset(100% 0% 0% 0%)" }}
                    animate={{ y: 0, opacity: 1, clipPath: "inset(0% 0% 0% 0%)" }}
                    exit={{ y: -20, opacity: 0, clipPath: "inset(0% 0% 100% 0%)" }}
                    transition={{
                        duration: 0.5,
                        ease: [0.4, 0, 0.2, 1] // Custom ease for smooth "curtain" feel
                    }}
                    className="flex items-center justify-center"
                >
                    {isDark ? (
                        <Moon className="h-5 w-5 text-foreground transition-transform duration-500 group-hover:scale-110" />
                    ) : (
                        <Sun className="h-5 w-5 text-foreground transition-transform duration-500 group-hover:rotate-45 group-hover:scale-110" />
                    )}
                </motion.div>
            </AnimatePresence>

            {/* Subtle background curtain effect on hover */}
            <motion.div
                className="absolute inset-0 bg-muted -z-10"
                initial={{ y: "100%" }}
                whileHover={{ y: 0 }}
                transition={{ duration: 0.4, ease: "circOut" }}
            />
        </button>
    )
}
