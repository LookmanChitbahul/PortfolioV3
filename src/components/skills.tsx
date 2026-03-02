"use client"

import { motion, useAnimationFrame, useMotionValue } from "framer-motion";
import { useRef, useEffect, useState, useMemo } from "react";

const skillCategories = [
    {
        title: "CORE_ENGINES (Programming Languages)",
        skills: [
            { name: "Java", icon: "java", serial: "M-JV-01" },
            { name: "Python", icon: "python", serial: "M-PY-02" },
            { name: "JavaScript", icon: "javascript", serial: "M-JS-03" },
            { name: "TypeScript", icon: "typescript", serial: "M-TS-04" },
            { name: "SQL", icon: "sql", serial: "M-SQ-05" },
        ]
    },
    {
        title: "INTERFACE_RIGS (Frontend)",
        skills: [
            { name: "React", icon: "react", serial: "R-RC-01" },
            { name: "Next.js", icon: "nextjs", serial: "R-NX-02" },
            { name: "React Native", icon: "expo", serial: "R-RN-03" },
            { name: "Tailwind CSS", icon: "tailwind", serial: "R-TW-04" },
            { name: "HTML5", icon: "html5", serial: "R-H5-05" },
            { name: "CSS3", icon: "css3", serial: "R-C3-06" },
        ]
    },
    {
        title: "SYSTEM_BACKEND (Backend)",
        skills: [
            { name: "Node.js", icon: "nodejs", serial: "B-ND-01" },
            { name: "Express.js", icon: "express", serial: "B-EX-02" },
            { name: "Strapi", icon: "strapi", serial: "B-ST-03" },
            { name: "Prisma ORM", icon: "prisma", serial: "B-PR-04" },
            { name: "JDBC", icon: "java", serial: "B-JD-05" },
            { name: "Socket.io", icon: "socketio", serial: "B-SI-06" },
            { name: "REST APIs", icon: "globe", serial: "B-RA-07" },
            { name: "Webhooks", icon: "vercel", serial: "B-WH-08" },
        ]
    },
    {
        title: "DATA_VAULTS (Databases)",
        skills: [
            { name: "PostgreSQL", icon: "postgresql", serial: "D-PG-01" },
            { name: "MySQL", icon: "mysql", serial: "D-MY-02" },
            { name: "Firebase", icon: "firebase", serial: "D-FB-03" },
            { name: "Supabase", icon: "supabase", serial: "D-SB-04" },
        ]
    },
    {
        title: "DEPLOYMENT_GEAR (Tools & Tech)",
        skills: [
            { name: "Git", icon: "git", serial: "T-GT-01" },
            { name: "GitHub", icon: "github", serial: "T-GH-02" },
            { name: "Docker", icon: "docker", serial: "T-DK-03" },
            { name: "Vercel", icon: "vercel", serial: "T-VC-04" },
            { name: "Netlify", icon: "netlify", serial: "T-NL-05" },
            { name: "Postman", icon: "postman", serial: "T-PM-06" },
            { name: "BitCore CLI", icon: "bitcoin", serial: "T-BC-07" },
        ]
    }
];

function FloatingCategory({ category, baseDirection = -1 }: { category: typeof skillCategories[0], baseDirection?: number }) {
    const x = useMotionValue(0);
    const [direction, setDirection] = useState(baseDirection);

    const speed = 0.5;

    // Calculate exact width to loop seamlessly. Card width = 220, Gap = 32 (gap-8 layout)
    const singleSetWidth = category.skills.length * (220 + 32);

    useAnimationFrame((t, delta) => {
        const moveBy = direction * speed * (delta / 16);
        let currentX = x.get() + moveBy;

        // Infinite wrap logic: jump seamlessly without visual pop
        if (direction < 0 && currentX <= -singleSetWidth) {
            currentX += singleSetWidth;
        } else if (direction > 0 && currentX >= 0) {
            currentX -= singleSetWidth;
        }
        x.set(currentX);
    });

    const handleDragEnd = (_: any, info: any) => {
        if (Math.abs(info.velocity.x) > 100) {
            setDirection(info.velocity.x > 0 ? 1 : -1);
        } else {
            // Resume float after dragging
            setDirection(direction === 0 ? baseDirection : direction);
        }
    };

    // Duplicate skills to extend beyond viewable area to allow seamless loop
    const duplicatedSkills = useMemo(() => [...category.skills, ...category.skills, ...category.skills], [category.skills]);

    return (
        <div className="space-y-8">
            <h3 className="text-xl font-black text-[#00fcfd] uppercase tracking-[0.2em] flex items-center gap-4 whitespace-nowrap overflow-hidden text-ellipsis">
                <span className="w-10 h-[2px] bg-[#f50057] flex-shrink-0"></span>
                <span className="truncate">{category.title}</span>
                <div className="flex gap-2 ml-4 flex-shrink-0">
                    <div className={`w-1.5 h-1.5 rounded-full ${direction < 0 ? 'bg-[#bc13fe] animate-pulse' : 'bg-gray-800'}`} />
                    <div className={`w-1.5 h-1.5 rounded-full ${direction > 0 ? 'bg-[#bc13fe] animate-pulse' : 'bg-gray-800'}`} />
                </div>
            </h3>

            <div className="relative overflow-hidden cursor-grab active:cursor-grabbing py-8 select-none">
                {/* Track line */}
                <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-[#bc13fe]/10 -translate-y-1/2" />

                <motion.div
                    style={{ x }}
                    drag="x"
                    onDragStart={() => setDirection(0)}
                    onDragEnd={handleDragEnd}
                    className="flex gap-8 w-max"
                >
                    {duplicatedSkills.map((skill, index) => (
                        <div
                            key={`${skill.name}-${index}`}
                            className="w-[220px] flex-shrink-0"
                        >
                            <div className="cyber-card p-6 bg-black/90 border-[#bc13fe] flex flex-col gap-4 relative overflow-hidden active:scale-95 transition-transform">
                                <div className="flex justify-between items-start">
                                    <span className="text-[7px] font-mono text-[#bc13fe]/70">{skill.serial}</span>
                                    <div className="flex gap-1">
                                        <div className="w-1 h-1 bg-[#00fcfd]" />
                                        <div className="w-1 h-1 bg-[#f50057]" />
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 py-2">
                                    <div className="p-3 bg-black border border-[#00fcfd]/50 relative">
                                        <img
                                            src={`/icons/${skill.icon}.svg`}
                                            alt={skill.name}
                                            className="w-10 h-10 brightness-0 invert opacity-90"
                                            onError={(e) => {
                                                const target = e.target as HTMLImageElement;
                                                target.src = '/globe.svg';
                                            }}
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-white font-black text-xs uppercase tracking-widest leading-none">{skill.name}</span>
                                        <span className="text-[8px] text-[#00fcfd] font-bold uppercase tracking-widest opacity-60">Unit_Active</span>
                                    </div>
                                </div>

                                <div className="mt-4 pt-4 border-t border-[#bc13fe]/10 flex justify-between items-end">
                                    <div className="space-y-1">
                                        <div className="h-[2px] w-12 bg-gray-800" />
                                        <div className="h-[2px] w-8 bg-gray-800" />
                                    </div>
                                    <div className="text-[6px] text-[#bc13fe]/50 font-mono">ID_771</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}

export function Skills() {
    return (
        <section id="skills" className="py-32 relative bg-transparent overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-[20%] right-0 h-[2px] bg-gradient-to-r from-transparent via-[#bc13fe]/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-[20%] h-[2px] bg-gradient-to-r from-transparent via-[#bc13fe]/10 to-transparent" />
                <div className="absolute top-0 left-12 w-[1px] h-full bg-[#bc13fe]/5" />
                <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-[#bc13fe]/5 to-transparent skew-y-2 translate-y-20 transform-gpu" />
            </div>

            <div className="max-w-screen-xl mx-auto px-6 relative z-10">
                <div className="flex items-center gap-6 mb-32">
                    <div className="p-1 border border-[#bc13fe] bg-[#bc13fe]/5">
                        <div className="w-16 h-16 border-2 border-[#bc13fe] flex items-center justify-center relative">
                            <div className="w-10 h-10 border border-[#00fcfd] animate-spin [animation-duration:10s]" />
                            <div className="absolute inset-0 flex items-center justify-center text-[8px] font-black text-[#bc13fe]">UNIT</div>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-6xl font-black uppercase tracking-tighter text-[#bc13fe] glitch mb-2" data-text="THE_GARAGE">
                            THE_GARAGE
                        </h2>
                        <div className="flex items-center gap-3">
                            <span className="text-[10px] text-[#00fcfd] font-bold uppercase tracking-[0.5em]">SYSTEM_INVENTORY_v.5</span>
                            <div className="h-[1px] w-20 bg-[#f50057]/50" />
                        </div>
                    </div>
                </div>

                <div className="space-y-24">
                    {skillCategories.map((category, idx) => (
                        <FloatingCategory
                            key={category.title}
                            category={category}
                            baseDirection={idx % 2 === 0 ? -1 : 1}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
