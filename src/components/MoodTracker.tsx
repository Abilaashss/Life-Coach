"use client";

import { useApp, type Mood } from "@/context/AppContext";
import { Card } from "@/components/ui/Card";
import { motion } from "framer-motion";
import { Smile, Frown, Meh, Zap, CloudRain } from "lucide-react";
import { cn } from "@/lib/utils";

const moods: { value: Mood; label: string; icon: React.ElementType; color: string }[] = [
    { value: "happy", label: "Happy", icon: Smile, color: "text-yellow-400" },
    { value: "productive", label: "Productive", icon: Zap, color: "text-orange-400" },
    { value: "neutral", label: "Neutral", icon: Meh, color: "text-blue-400" },
    { value: "stressed", label: "Stressed", icon: CloudRain, color: "text-purple-400" },
    { value: "sad", label: "Sad", icon: Frown, color: "text-blue-600" },
];

export function MoodTracker() {
    const { mood, setMood } = useApp();

    return (
        <Card className="w-full max-w-md mx-auto border-border/50 shadow-sm">
            <h2 className="text-2xl font-bold mb-4 text-center text-foreground tracking-tight">
                How are you feeling today?
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
                {moods.map((m) => {
                    const Icon = m.icon;
                    const isSelected = mood === m.value;

                    return (
                        <motion.button
                            key={m.value}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setMood(m.value)}
                            className={cn(
                                "flex flex-col items-center gap-2 p-3 rounded-xl transition-all duration-200 min-w-[70px]",
                                isSelected
                                    ? "bg-secondary ring-1 ring-foreground shadow-sm"
                                    : "hover:bg-secondary/50"
                            )}
                        >
                            <Icon
                                className={cn(
                                    "w-6 h-6 transition-colors",
                                    isSelected ? "text-foreground" : "text-muted-foreground"
                                )}
                            />
                            <span className={cn("text-xs font-medium", isSelected ? "text-foreground" : "text-muted-foreground")}>
                                {m.label}
                            </span>
                        </motion.button>
                    );
                })}
            </div>
            {mood && (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-6 text-center text-sm text-muted-foreground"
                >
                    You are feeling <span className="font-bold text-foreground capitalize">{mood}</span> today.
                </motion.div>
            )}
        </Card>
    );
}
