import Link from "next/link";

const navItems = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Awards", href: "#achievements" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
];

export function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 border-b-2 border-[#bc13fe] backdrop-blur-md">
            <div className="max-w-screen-xl mx-auto px-6 h-18 flex items-center justify-between">
                <Link href="/" className="text-3xl font-black tracking-tighter text-[#bc13fe] glitch" data-text="LOOKMAN">
                    LOOKMAN
                </Link>
                <div className="flex items-center gap-8">
                    <div className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-[10px] font-black text-white hover:text-[#00fcfd] transition-colors uppercase tracking-[0.2em] relative group"
                            >
                                {item.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#00fcfd] transition-all group-hover:w-full" />
                            </Link>
                        ))}
                    </div>
                    {/* Retro-styled menu toggle for mobile */}
                    <div className="md:hidden flex flex-col gap-1.5 opacity-80 cursor-pointer">
                        <div className="w-6 h-[3px] bg-[#bc13fe]" />
                        <div className="w-3 h-[3px] bg-[#bc13fe]" />
                        <div className="w-6 h-[3px] bg-[#bc13fe]" />
                    </div>
                </div>
            </div>
        </nav>
    );
}
