"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Home, CheckSquare, Bot, Timer, Settings, BookOpen } from "lucide-react";

export function Navigation() {
    const pathname = usePathname();

    const links = [
        { href: "/", label: "Home", icon: Home },
        { href: "/todo", label: "To-Do", icon: CheckSquare },
        { href: "/journal", label: "Journal", icon: BookOpen },
        { href: "/coach", label: "AI Coach", icon: Bot },
        { href: "/pomodoro", label: "Pomodoro", icon: Timer },
        { href: "/settings", label: "Settings", icon: Settings },
    ];

    return (
        <nav className="fixed bottom-0 left-0 right-0 md:top-0 md:bottom-auto z-50 bg-background/80 backdrop-blur-lg border-t md:border-t-0 md:border-b border-border">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <div className="hidden md:block font-bold text-xl text-foreground tracking-tight">
                        LifeCoach
                    </div>

                    <div className="flex items-center justify-around w-full md:w-auto md:gap-8">
                        {links.map((link) => {
                            const Icon = link.icon;
                            const isActive = pathname === link.href;
                            const isSettings = link.href === "/settings";

                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={cn(
                                        "flex flex-col md:flex-row items-center gap-1 md:gap-2 p-2 rounded-lg transition-all duration-200",
                                        isActive
                                            ? "text-foreground font-semibold bg-secondary/80 shadow-sm"
                                            : "text-muted-foreground hover:text-foreground hover:bg-secondary/50 hover:scale-105"
                                    )}
                                    title={link.label}
                                >
                                    <Icon className="w-5 h-5" />
                                    {!isSettings && <span className="text-xs md:text-sm font-medium">{link.label}</span>}
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>
        </nav>
    );
}
