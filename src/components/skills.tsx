export function Skills() {
    const skills = [
        "JavaScript (React / Next.js)", "Python", "Java / C++",
        "React Native", "Tailwind CSS", "Socket.io",
        "Supabase / Firebase", "Strapi (Headless CMS)", "REST APIs / Webhooks",
        "OpenAI / Gemini / DeepSeek", "Git / GitHub", "Docker"
    ];

    const learning = [
        "Advanced Docker", "Production-ready React", "Sevalla Hosting", "Backend Engineering"
    ];

    return (
        <section id="skills" className="py-32">
            <div className="max-w-screen-xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                    <div className="md:col-span-4">
                        <h2 className="text-sm font-medium tracking-widest uppercase text-muted-foreground sticky top-32">
                            04 / Expertise
                        </h2>
                    </div>
                    <div className="md:col-span-8">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-16">
                            <div>
                                <h3 className="text-sm font-mono uppercase tracking-widest text-muted-foreground mb-8">
                                    Technical Skills
                                </h3>
                                <ul className="space-y-4">
                                    {skills.map((skill) => (
                                        <li key={skill} className="text-xl font-bold border-b border-border pb-2 inline-block w-full">
                                            {skill}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-sm font-mono uppercase tracking-widest text-muted-foreground mb-8">
                                    Currently Learning
                                </h3>
                                <ul className="space-y-4">
                                    {learning.map((item) => (
                                        <li key={item} className="text-xl font-bold border-b border-border pb-2 inline-block w-full opacity-60">
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
