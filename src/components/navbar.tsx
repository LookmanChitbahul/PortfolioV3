import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

const navItems = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Leadership", href: "#leadership" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
];

export function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
            <div className="max-w-screen-xl mx-auto px-6 h-16 flex items-center justify-between">
                <Link href="/" className="font-heading text-xl font-bold tracking-tight">
                    LAC.
                </Link>
                <div className="flex items-center gap-8">
                    <div className="hidden md:flex items-center gap-6">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                    <ThemeToggle />
                </div>
            </div>
        </nav>
    );
}
