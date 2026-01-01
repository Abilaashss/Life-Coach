"use client";

import { TaskBoard } from "@/components/TaskBoard";
import { motion } from "framer-motion";

export default function TodoPage() {
    return (
        <div className="container mx-auto p-4 md:p-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-4xl mx-auto"
            >
                <header className="mb-8">
                    <h1 className="text-3xl md:text-4xl font-bold mb-2">My Tasks</h1>
                    <p className="text-muted-foreground">Manage your priorities and stay organized.</p>
                </header>

                <TaskBoard />
            </motion.div>
        </div>
    );
}
