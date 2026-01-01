"use client";

import { Pomodoro } from "@/components/Pomodoro";
import { motion } from "framer-motion";

export default function PomodoroPage() {
    return (
        <div className="container mx-auto p-4 md:p-8 flex items-center justify-center min-h-[calc(100vh-80px)]">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full max-w-2xl"
            >
                <header className="text-center mb-8">
                    <h1 className="text-3xl md:text-4xl font-bold mb-2">Deep Focus</h1>
                    <p className="text-muted-foreground">Stay productive with AI-powered presence detection.</p>
                </header>

                <Pomodoro />
            </motion.div>
        </div>
    );
}
