"use client";

import { useApp } from "@/context/AppContext";
import { Button } from "@/components/ui/Button";
import { Plus, MessageSquare, Trash2, MoreVertical } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export function ChatSidebar() {
    const { chatSessions, currentSessionId, createNewSession, deleteSession, selectSession } = useApp();
    const [hoveredSession, setHoveredSession] = useState<string | null>(null);

    return (
        <div className="flex flex-col h-full bg-card/30 border-r border-border/40 w-64 flex-shrink-0">
            <div className="p-4">
                <Button
                    onClick={createNewSession}
                    className="w-full justify-start gap-2 bg-primary/10 text-primary hover:bg-primary/20 border border-primary/20"
                >
                    <Plus className="w-4 h-4" /> New Chat
                </Button>
            </div>

            <div className="flex-1 overflow-y-auto px-2 space-y-1 scrollbar-thin scrollbar-thumb-border/50">
                <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Recent
                </div>
                <AnimatePresence initial={false}>
                    {chatSessions.map((session) => (
                        <motion.div
                            key={session.id}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, height: 0 }}
                            className="relative group"
                            onMouseEnter={() => setHoveredSession(session.id)}
                            onMouseLeave={() => setHoveredSession(null)}
                        >
                            <button
                                onClick={() => selectSession(session.id)}
                                className={cn(
                                    "w-full text-left px-3 py-2.5 rounded-lg text-sm transition-all flex items-center gap-3",
                                    currentSessionId === session.id
                                        ? "bg-secondary text-foreground font-medium shadow-sm"
                                        : "text-muted-foreground hover:bg-secondary/50 hover:text-foreground"
                                )}
                            >
                                <MessageSquare className="w-4 h-4 flex-shrink-0" />
                                <span className="truncate flex-1">{session.title}</span>
                            </button>

                            {/* Delete Button (visible on hover or active) */}
                            {(hoveredSession === session.id || currentSessionId === session.id) && chatSessions.length > 1 && (
                                <div className="absolute right-1 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            deleteSession(session.id);
                                        }}
                                        className="h-7 w-7 text-muted-foreground hover:text-destructive hover:bg-destructive/10"
                                    >
                                        <Trash2 className="w-3.5 h-3.5" />
                                    </Button>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            <div className="p-4 border-t border-border/40">
                <div className="text-xs text-center text-muted-foreground">
                    LifeCoach
                </div>
            </div>
        </div>
    );
}
