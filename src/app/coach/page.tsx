"use client";

import { CoachChat } from "@/components/CoachChat";
import { MoodTracker } from "@/components/MoodTracker";
import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function CoachPage() {
    const [showMood, setShowMood] = useState(false);

    return (
        <div className="container mx-auto p-4 h-[calc(100vh-80px)] flex flex-col gap-4">
            {/* Compact Mood Header */}
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex-shrink-0"
            >
                <div className="flex items-center justify-between bg-card/50 border border-border/50 rounded-xl p-3 px-4 backdrop-blur-sm">
                    <div className="flex items-center gap-2">
                        <h1 className="font-bold text-lg">AI Coach</h1>
                        <span className="text-muted-foreground text-sm hidden md:inline">| Your personal guide</span>
                    </div>
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setShowMood(!showMood)}
                        className="text-xs gap-1 h-8"
                    >
                        {showMood ? "Hide Mood" : "Set Mood"}
                        {showMood ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                    </Button>
                </div>

                {showMood && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        className="overflow-hidden mt-2"
                    >
                        <MoodTracker />
                    </motion.div>
                )}
            </motion.div>

            {/* Full Screen Chat */}
            <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
                className="flex-1 min-h-0"
            >
                <CoachChat />
            </motion.div>
        </div>
    );
}
