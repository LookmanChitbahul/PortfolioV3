import { ArrowUpRight, Github } from "lucide-react";

const projects = [
    {
        title: "DreamTrip – AI Travel Planner",
        description: "AI-powered travel planning system generating intelligent itineraries using multiple AI APIs (Gemini, OpenAI, etc) and external data services.",
        tools: ["React", "Tailwind CSS", "Supabase", "OpenAI", "Gemini", "Groq"],
        role: "Full Stack Developer",
        github: "https://github.com/LookmanChitbahul/DreamTrip"
    },
    {
        title: "SmartRetailAnalyticsSystem",
        description: "Desktop analytics platform for retail management. Features 15+ GUI interfaces and full CRUD database integration.",
        tools: ["Java", "Swing", "JDBC", "MySQL"],
        role: "Java Developer",
        github: "https://github.com/LookmanChitbahul/SmartRetailAnalyticsSystem"
    },
    {
        title: "QuickBite Mobile",
        description: "Mobile food ordering application with real-time order tracking and AI-powered customer support.",
        tools: ["React Native", "Firebase", "Gemini AI", "Expo"],
        role: "Mobile Developer",
        github: "https://github.com/LookmanChitbahul/QuickBite"
    },
    {
        title: "BridgeGen – Startup Weekend",
        description: "Developed a scalable MVP within 72 hours for a Startup Weekend competition, achieving 2nd Runner-Up position.",
        tools: ["React", "Tailwind CSS", "Firebase"],
        role: "Frontend Lead",
        github: "https://github.com/LookmanChitbahul/BridgeGen"
    },
    {
        title: "Optician Patient System",
        description: "Desktop patient management system for opticians, handling scheduling, prescriptions, and administrative workflows.",
        tools: ["Python", "Tkinter", "Authentication"],
        role: "Python Developer",
        github: "https://github.com/LookmanChitbahul/Optician-Patient-System"
    },
    {
        title: "CozerTwa – Real-Time Chat",
        description: "Real-time messaging system using WebSockets for room-based communication and event-driven interaction.",
        tools: ["JavaScript", "Node.js", "Socket.io"],
        role: "Backend Developer",
        github: "https://github.com/LookmanChitbahul/CozerTwa"
    },
    {
        title: "SurfCamp Blog Platform",
        description: "Full-stack blog platform with dynamic content rendering and headless CMS integration.",
        tools: ["Next.js", "Tailwind CSS", "Strapi"],
        role: "Full Stack Developer",
        github: "https://github.com/LookmanChitbahul/SurfCamp"
    },
];

export function Projects() {
    return (
        <section id="projects" className="py-24 bg-transparent relative overflow-hidden">
            <div className="max-w-screen-xl mx-auto px-6 relative z-10">
                <div className="flex items-center gap-4 mb-16">
                    <div className="w-16 h-[6px] bg-[#bc13fe]"></div>
                    <h2 className="text-5xl font-black uppercase tracking-tighter text-[#bc13fe] glitch" data-text="SYSTEM_PROJECTS">
                        SYSTEM_PROJECTS
                    </h2>
                </div>

                <div className="space-y-32">
                    {projects.map((project, index) => (
                        <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                            <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                                <h3 className="text-4xl font-black mb-4 text-white uppercase tracking-tighter italic">{project.title}</h3>
                                <p className="text-[#00fcfd] font-black text-xs mb-8 uppercase tracking-[0.3em] border-l-2 border-[#f50057] pl-4">{project.role}</p>
                                <p className="text-gray-400 leading-relaxed mb-10 font-medium italic">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-4 mb-10">
                                    {project.tools.map((tool) => (
                                        <span key={tool} className="px-5 py-2 cyber-card text-[10px] font-black text-white border-[#bc13fe] uppercase tracking-widest bg-[#bc13fe]/5">
                                            {tool}
                                        </span>
                                    ))}
                                </div>
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#bc13fe] text-black font-black uppercase tracking-widest text-xs hover:bg-[#00fcfd] transition-colors cyber-button"
                                >
                                    <Github className="w-4 h-4" />
                                    Access_Repository
                                    <ArrowUpRight className="w-4 h-4" />
                                </a>
                            </div>

                            <div className={`${index % 2 === 1 ? 'lg:order-1' : ''} relative group`}>
                                <div className="absolute -inset-4 bg-[#bc13fe] opacity-5 blur-2xl rounded-full group-hover:opacity-10 transition-opacity" />
                                <div className="cyber-card relative z-10 overflow-hidden border-[#bc13fe]">
                                    <div className="bg-[#111] px-6 py-4 border-b border-[#bc13fe] flex justify-between items-center">
                                        <div className="flex gap-3">
                                            <div className="w-3 h-3 bg-[#f50057]" />
                                            <div className="w-3 h-3 bg-[#bc13fe]" />
                                            <div className="w-3 h-3 bg-[#00fcfd]" />
                                        </div>
                                        <span className="text-[10px] text-[#bc13fe] font-black uppercase tracking-widest">Encrypted_Payload</span>
                                    </div>
                                    <div className="p-10 font-mono text-sm leading-relaxed overflow-x-auto bg-black/80">
                                        <div className="mb-4">
                                            <span className="code-keyword">const</span> <span className="code-prop">project_data</span> = <span className="code-bracket">{"{"}</span>
                                        </div>
                                        <div className="pl-6 border-l border-[#bc13fe]/10 mb-4">
                                            <div className="mb-2">
                                                <span className="code-key">UID</span>: <span className="code-val">&apos;PRJ_{index + 101}&apos;</span>,
                                            </div>
                                            <div className="mb-2">
                                                <span className="code-key">title</span>: <span className="code-val">&apos;{project.title}&apos;</span>,
                                            </div>
                                            <div className="mb-2">
                                                <span className="code-key">tools</span>: <span className="code-bracket">[</span>
                                                {project.tools.map((t, i) => (
                                                    <span key={t}>
                                                        <span className="code-val">&apos;{t}&apos;</span>
                                                        {i < project.tools.length - 1 ? ', ' : ''}
                                                    </span>
                                                ))}
                                                <span className="code-bracket">]</span>,
                                            </div>
                                            <div className="mb-2">
                                                <span className="code-key">payload</span>: <span className="code-val">&apos;{project.description.substring(0, 30)}...&apos;</span>
                                            </div>
                                        </div>
                                        <div><span className="code-bracket">{"}"}</span>;</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
