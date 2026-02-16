import { ArrowUpRight } from "lucide-react";

const projects = [
    {
        title: "MetaBox E-Commerce Backend Integration",
        category: "Internship Project",
        description: "Headless CMS backend implementation with API integrations and webhook-based automation for e-commerce workflows.",
        link: "https://github.com/LookmanChitbahul/ecomv2",
        tags: ["Strapi", "REST APIs", "Webhooks", "Zoho"],
    },
    {
        title: "SurfCamp Blog Platform",
        category: "Internship Guided Project",
        description: "Full-stack blog platform built with Next.js frontend and Strapi CMS backend.",
        link: "https://github.com/LookmanChitbahul/Surfcamp-final",
        tags: ["Next.js", "Strapi", "Tailwind CSS"],
    },
    {
        title: "DreamTrip",
        category: "Hackathon Project",
        description: "AI-powered travel planning system generating intelligent itineraries using multiple AI and external data APIs.",
        link: "https://github.com/LookmanChitbahul/DreamTrip",
        tags: ["React", "Supabase", "OpenAI", "Gemini"],
    },
    {
        title: "BridgeGen",
        category: "Hackathon Project",
        description: "Rapid MVP developed within 72 hours during Startup Weekend competition (2nd Runner-Up).",
        link: "https://github.com/LookmanChitbahul/BridgeGen",
        tags: ["React", "Firebase", "Tailwind"],
    },
    {
        title: "Real-Time Chat Application",
        category: "Personal Project",
        description: "Real-time messaging application using WebSocket-based communication with room-based architecture.",
        link: "https://github.com/LookmanChitbahul/CozerTwa",
        tags: ["React.js", "Node.js", "Socket.io"],
    },
    {
        title: "Optician Patient Management",
        category: "University Project (Year 1)",
        description: "Desktop GUI system for managing patients, appointments, and prescriptions with authentication and search.",
        link: "#",
        tags: ["Python", "Tkinter", "File-based DB"],
    },
    {
        title: "Smart Retail Analytics System",
        category: "University Project (Year 2)",
        description: "Object-oriented desktop analytics and management system with modular architecture and full CRUD database integration.",
        link: "https://github.com/LookmanChitbahul/JAVA-ASS",
        tags: ["Java", "Swing", "JDBC", "AWT"],
    },
    {
        title: "QuickBite",
        category: "University Project (Year 2)",
        description: "Mobile food ordering application featuring MapTiler integration and a Gemini-powered AI chatbot.",
        link: "https://github.com/LookmanChitbahul/QuickBite",
        tags: ["React Native", "Firebase", "MapTiler", "Gemini"],
    },
];

export function Projects() {
    return (
        <section id="projects" className="py-32 bg-muted/30">
            <div className="max-w-screen-xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                    <div className="md:col-span-4">
                        <h2 className="text-sm font-medium tracking-widest uppercase text-muted-foreground sticky top-32">
                            03 / Projects
                        </h2>
                    </div>
                    <div className="md:col-span-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {projects.map((project, index) => (
                                <a
                                    key={index}
                                    href={project.link}
                                    target={project.link !== "#" ? "_blank" : undefined}
                                    rel={project.link !== "#" ? "noopener noreferrer" : undefined}
                                    className="group block p-8 bg-background border border-border hover:border-foreground transition-all duration-300"
                                >
                                    <div className="flex justify-between items-start mb-12">
                                        <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                                            {project.category}
                                        </span>
                                        <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                                    <p className="text-muted-foreground mb-8 text-sm leading-relaxed">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="text-[10px] font-mono border border-border px-2 py-1 rounded-full uppercase"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
