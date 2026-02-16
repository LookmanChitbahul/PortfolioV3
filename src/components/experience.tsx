const experiences = [
    {
        company: "MetaBox Technology",
        role: "Software Development Intern",
        period: "Oct 2025 – Dec 2025",
        description: "Contributed to backend development using Strapi (Headless CMS) for a capstone e-commerce platform. Implemented webhook-based integrations between Strapi and Zoho to automate data synchronization. Collaborated with web and Flutter mobile teams to integrate REST APIs and managed content modeling workflows. Applied modern frontend–backend workflows through a guided SurfCamp blog website project.",
    },
    {
        company: "NBZ Hardware",
        role: "Sales & Inventory Assistant",
        period: "Oct 2023 – Feb 2024",
        description: "Assisted customers with product selection and recommendations while managing inventory organization and stock presentation. Strengthened communication, teamwork, and customer-facing skills during daily store operations.",
    },
];

export function Experience() {
    return (
        <section id="experience" className="py-32">
            <div className="max-w-screen-xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                    <div className="md:col-span-4">
                        <h2 className="text-sm font-medium tracking-widest uppercase text-muted-foreground sticky top-32">
                            02 / Experience
                        </h2>
                    </div>
                    <div className="md:col-span-8">
                        <div className="space-y-16">
                            {experiences.map((exp, index) => (
                                <div key={index} className="group">
                                    <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4">
                                        <h3 className="text-2xl font-bold group-hover:text-muted-foreground transition-colors">
                                            {exp.company}
                                        </h3>
                                        <span className="text-sm text-muted-foreground font-medium">
                                            {exp.period}
                                        </span>
                                    </div>
                                    <h4 className="text-lg font-medium mb-4">{exp.role}</h4>
                                    <p className="text-muted-foreground leading-relaxed max-w-xl">
                                        {exp.description}
                                    </p>
                                    <div className="h-px bg-border mt-12 w-full" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
