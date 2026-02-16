export function About() {
    return (
        <section id="about" className="py-32 bg-muted/30">
            <div className="max-w-screen-xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                    <div className="md:col-span-4">
                        <h2 className="text-sm font-medium tracking-widest uppercase text-muted-foreground sticky top-32">
                            01 / About
                        </h2>
                    </div>
                    <div className="md:col-span-8">
                        <h3 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                            Software Engineering undergraduate based in Mauritius.
                        </h3>
                        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed max-w-2xl">
                            <p>
                                Currently in my 2nd year of Software Engineering, I am focused on building a strong foundation in computer science while gaining practical experience through internships and hackathons.
                            </p>
                            <p>
                                In my first year, I maintained a <b>CPA of 60.9</b>, and I am on track to graduate in <b>July 2027</b>. My journey so far has taken me from building Python-based management systems to contributing to scalable backend architectures.
                            </p>
                            <p>
                                I thrive in fast-paced environments like startup weekends and hackathons, where I enjoy prototyping solutions that bridge the gap between technical complexity and user needs.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
