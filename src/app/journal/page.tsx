"use client";

import { useState, useEffect } from "react";
import { useApp, JournalEntry } from "@/context/AppContext";
import JournalEditor from "@/components/JournalEditor";
import JournalHeader from "@/components/JournalHeader";
import { motion } from "framer-motion";
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function JournalPage() {
    const { journalEntries, updateJournalEntry } = useApp();
    const [currentDate, setCurrentDate] = useState(new Date());
    const [dateString, setDateString] = useState("");

    useEffect(() => {
        setDateString(currentDate.toISOString().split('T')[0]);
    }, [currentDate]);

    const handlePrevDay = () => {
        const newDate = new Date(currentDate);
        newDate.setDate(currentDate.getDate() - 1);
        setCurrentDate(newDate);
    };

    const handleNextDay = () => {
        const newDate = new Date(currentDate);
        newDate.setDate(currentDate.getDate() + 1);
        setCurrentDate(newDate);
    };

    const isToday = new Date().toDateString() === currentDate.toDateString();

    const currentEntry: JournalEntry = journalEntries[dateString] || {
        content: "",
        lastUpdated: Date.now()
    };

    return (
        <div className="min-h-screen bg-background pb-20">
            <div className="container mx-auto max-w-4xl px-4 md:px-8">
                {/* Navigation Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center justify-between py-8"
                >
                    <div className="flex items-center gap-2 bg-background/50 backdrop-blur-md border border-border/50 rounded-full p-1.5 shadow-sm hover:shadow-md transition-shadow">
                        <Button variant="ghost" size="icon" onClick={handlePrevDay} className="rounded-full w-8 h-8 hover:bg-muted/80">
                            <ChevronLeft className="w-4 h-4" />
                        </Button>
                        <div className="flex items-center gap-2 px-4 min-w-[160px] justify-center font-medium text-sm tracking-wide">
                            <CalendarIcon className="w-4 h-4 text-primary/80" />
                            {currentDate.toLocaleDateString(undefined, { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' })}
                        </div>
                        <Button variant="ghost" size="icon" onClick={handleNextDay} disabled={isToday} className="rounded-full w-8 h-8 hover:bg-muted/80">
                            <ChevronRight className="w-4 h-4" />
                        </Button>
                    </div>
                </motion.div>

                {/* Journal Content */}
                <motion.div
                    key={dateString}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="bg-background/40 backdrop-blur-sm border border-border/40 rounded-2xl shadow-xl min-h-[85vh] overflow-hidden relative"
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-background/0 to-background/40 pointer-events-none" />

                    <JournalHeader
                        coverImage={currentEntry.coverImage}
                        icon={currentEntry.icon}
                        onUpdate={(updates) => updateJournalEntry(dateString, updates)}
                    />

                    <div className="px-8 md:px-20 pb-20 max-w-4xl mx-auto relative z-10">
                        <input
                            type="text"
                            placeholder="Untitled"
                            className="text-5xl font-bold mb-8 w-full bg-transparent border-none outline-none placeholder:text-muted-foreground/30 text-foreground tracking-tight"
                            defaultValue="Untitled" // In a real app, this would be bound to state
                        />
                        <JournalEditor
                            initialContent={currentEntry.content || `<p class="text-muted-foreground/60">Press '/' for commands...</p>`}
                            onUpdate={(content) => updateJournalEntry(dateString, { content })}
                        />
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
