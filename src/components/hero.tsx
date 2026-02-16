import { Planet } from "./planet";

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            <div className="max-w-screen-xl mx-auto px-6 w-full relative z-10">
                <div className="max-w-2xl">
                    <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-4">
                        Software Engineering Undergraduate & Intern
                    </p>
                    <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
                        Lookman <br />
                        <span className="text-muted-foreground">Ashraf</span> <br />
                        Chitbahul.
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-lg mb-12 leading-relaxed">
                        Building modern web experiences and exploring the intersection of backend logic and AI-driven solutions.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <a
                            href="#projects"
                            className="inline-flex items-center justify-center px-8 py-4 bg-foreground text-background font-medium rounded-sm hover:opacity-90 transition-opacity"
                        >
                            View Projects
                        </a>
                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center px-8 py-4 border border-foreground font-medium rounded-sm hover:bg-muted transition-colors"
                        >
                            Get in Touch
                        </a>
                    </div>
                </div>
            </div>
            <Planet />
        </section>
    );
}
