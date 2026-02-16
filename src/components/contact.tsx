export function Contact() {
    return (
        <section id="contact" className="py-32 bg-foreground text-background">
            <div className="max-w-screen-xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                    <div className="md:col-span-4">
                        <h2 className="text-sm font-medium tracking-widest uppercase text-muted/50">
                            05 / Contact
                        </h2>
                    </div>
                    <div className="md:col-span-8">
                        <h3 className="text-4xl md:text-7xl font-bold mb-12 leading-tight">
                            Looking for an intern? <br />
                            Let's connect.
                        </h3>
                        <div className="space-y-8">
                            <a
                                href="mailto:lookman1337cc@gmail.com"
                                className="text-2xl md:text-4xl font-light hover:text-muted-foreground transition-colors underline underline-offset-8 decoration-1 break-all md:break-normal"
                            >
                                lookman1337cc@gmail.com
                            </a>
                            <div className="flex flex-wrap gap-8 pt-12">
                                <a
                                    href="https://www.linkedin.com/in/lookman-chitbahul-14b478366/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm uppercase tracking-widest hover:text-muted-foreground transition-colors"
                                >
                                    LinkedIn
                                </a>
                                <a
                                    href="https://github.com/LookmanChitbahul"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm uppercase tracking-widest hover:text-muted-foreground transition-colors"
                                >
                                    GitHub
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export function Footer() {
    return (
        <footer className="py-12 border-t bg-background">
            <div className="max-w-screen-xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                <p className="text-sm text-muted-foreground italic">
                    &copy; {new Date().getFullYear()} Lookman Ashraf Chitbahul. All rights reserved.
                </p>
                <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
                    Software Engineering Undergraduate
                </p>
            </div>
        </footer>
    );
}
