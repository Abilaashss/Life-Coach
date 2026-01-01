"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useApp, Message } from "@/context/AppContext";
import { getCoachResponse } from "@/lib/gemini";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Send, Sparkles, User, Paperclip, Mic, X, FileText, Image as ImageIcon, Timer, Plus, Edit, Check, Trash2, Menu, PanelLeftClose, PanelLeftOpen, BookOpen } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { ChatSidebar } from "@/components/ChatSidebar";

export function CoachChat() {
    const {
        mood, tasks, userProfile,
        setWorkDuration, setTimerMode, setTimeLeft, setIsActive, addTask, toggleTask,
        chatSessions, currentSessionId, addMessageToSession, markActionExecuted,
        appendJournalEntry
    } = useApp();

    const router = useRouter();
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isRecording, setIsRecording] = useState(false);
    const [attachments, setAttachments] = useState<File[]>([]);
    const [showSidebar, setShowSidebar] = useState(true); // Mobile toggle if needed, or desktop collapsible

    const messagesEndRef = useRef<HTMLDivElement>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const mediaRecorderRef = useRef<MediaRecorder | null>(null);

    // Get current session messages
    const currentSession = chatSessions.find(s => s.id === currentSessionId);
    const messages = currentSession?.messages || [];
    const executedActions = new Set(currentSession?.executedActions || []);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, currentSessionId]);

    const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setAttachments((prev) => [...prev, ...Array.from(e.target.files!)]);
        }
    };

    const removeAttachment = (index: number) => {
        setAttachments((prev) => prev.filter((_, i) => i !== index));
    };

    const toggleRecording = async () => {
        if (isRecording) {
            mediaRecorderRef.current?.stop();
            setIsRecording(false);
        } else {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
                const mediaRecorder = new MediaRecorder(stream);
                mediaRecorderRef.current = mediaRecorder;

                const audioChunks: Blob[] = [];
                mediaRecorder.ondataavailable = (event) => {
                    audioChunks.push(event.data);
                };

                mediaRecorder.onstop = () => {
                    const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
                    setInput((prev) => prev + " [Voice Note: I'm feeling a bit overwhelmed today...] ");
                };

                mediaRecorder.start();
                setIsRecording(true);
            } catch (err) {
                console.error("Error accessing microphone:", err);
                alert("Could not access microphone.");
            }
        }
    };

    const handleSetTimer = (mins: number) => {
        setWorkDuration(mins);
        setTimerMode("work");
        setTimeLeft(mins * 60);
        setIsActive(true);
        router.push("/pomodoro");
    };

    const handleAppendJournal = (text: string) => {
        const today = new Date().toISOString().split('T')[0];
        appendJournalEntry(today, text);
    };

    const handleSend = async (e: React.FormEvent) => {
        e.preventDefault();
        if ((!input.trim() && attachments.length === 0) || isLoading || !currentSessionId) return;

        const userMessage: Message = {
            id: crypto.randomUUID(),
            role: "user",
            content: input,
            attachments: attachments.map(f => ({
                type: f.type.startsWith("image/") ? "image" : "file",
                name: f.name,
                url: f.type.startsWith("image/") ? URL.createObjectURL(f) : undefined
            })),
            timestamp: Date.now()
        };

        addMessageToSession(currentSessionId, userMessage);
        setInput("");
        setAttachments([]);
        setIsLoading(true);

        try {
            // Construct history for API
            // We need to pass the updated history including the new user message
            const history = [...messages, userMessage].map(m => ({
                role: m.role,
                content: m.content
            }));

            const response = await getCoachResponse(history, { mood, tasks, userProfile });

            const botMessage: Message = {
                id: crypto.randomUUID(),
                role: "assistant",
                content: response,
                timestamp: Date.now()
            };

            addMessageToSession(currentSessionId, botMessage);
        } catch (error) {
            console.error("Failed to get response", error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleAction = (actionKey: string, callback: () => void) => {
        if (currentSessionId) {
            markActionExecuted(currentSessionId, actionKey);
            callback();
        }
    };

    return (
        <div className="flex h-full w-full bg-background overflow-hidden rounded-2xl border border-border/40 shadow-xl relative">
            {/* Sidebar */}
            <div className={cn("hidden md:block transition-all duration-300 border-r border-border/40 bg-card/20", showSidebar ? "w-64" : "w-0 overflow-hidden")}>
                <ChatSidebar />
            </div>

            {/* Main Chat Area */}
            <div className="flex-1 flex flex-col h-full relative bg-background">
                {/* Header / Toggle */}
                <div className="absolute top-4 left-4 z-20">
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setShowSidebar(!showSidebar)}
                        className="text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-lg"
                        title={showSidebar ? "Close Sidebar" : "Open Sidebar"}
                    >
                        {showSidebar ? <PanelLeftClose className="w-5 h-5" /> : <PanelLeftOpen className="w-5 h-5" />}
                    </Button>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 md:p-8 space-y-8 scroll-smooth">
                    {messages.length === 0 ? (
                        <div className="h-full flex flex-col items-center justify-center text-center space-y-6 max-w-md mx-auto">
                            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center shadow-sm">
                                <Sparkles className="w-8 h-8 text-primary" />
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-2xl font-semibold tracking-tight">Where knowledge begins</h3>
                                <p className="text-muted-foreground">Ask me anything. I'm here to help you grow.</p>
                            </div>
                        </div>
                    ) : (
                        messages.map((msg) => (
                            <motion.div
                                key={msg.id}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className={cn("flex gap-4 max-w-3xl mx-auto w-full group", msg.role === "user" ? "flex-row-reverse" : "flex-row")}
                            >
                                <div className={cn(
                                    "w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1",
                                    msg.role === "user" ? "bg-secondary text-foreground" : "text-primary"
                                )}>
                                    {msg.role === "user" ? <User className="w-5 h-5" /> : <Sparkles className="w-6 h-6" />}
                                </div>

                                <div className={cn("flex flex-col gap-1 max-w-[85%] md:max-w-[90%]", msg.role === "user" ? "items-end" : "items-start")}>
                                    <div className="flex items-center gap-2 mb-1 px-1">
                                        <span className="text-xs font-bold text-foreground">
                                            {msg.role === "user" ? "You" : "LifeCoach"}
                                        </span>
                                    </div>
                                    <div
                                        className={cn(
                                            "text-base leading-relaxed",
                                            msg.role === "user"
                                                ? "bg-secondary/50 px-4 py-3 rounded-2xl rounded-tr-sm text-foreground"
                                                : "text-foreground/90 px-1" // AI text is cleaner, less "bubble"
                                        )}
                                    >
                                        {msg.content.split(/(\[(?:SET_TIMER|ADD_TASK|COMPLETE_TASK|UPDATE_TASK|JOURNAL_APPEND): [^\]]+\])/).map((part, i) => {
                                            const actionKey = `${msg.id}-${i}`;
                                            const isExecuted = executedActions.has(actionKey);

                                            if (part.match(/\[SET_TIMER: \d+\]/)) {
                                                const mins = parseInt(part.match(/\d+/)![0]);
                                                return (
                                                    <div key={i} className="my-3">
                                                        {isExecuted ? (
                                                            <div className="text-xs text-muted-foreground flex items-center gap-1 italic bg-secondary/20 p-2 rounded border border-border/30 w-fit">
                                                                <Check className="w-3 h-3" /> Timer set for {mins} mins
                                                            </div>
                                                        ) : (
                                                            <Button
                                                                onClick={() => handleAction(actionKey, () => handleSetTimer(mins))}
                                                                className="bg-primary/10 text-primary hover:bg-primary/20 border border-primary/20 shadow-sm h-8 text-xs"
                                                            >
                                                                <Timer className="w-3 h-3 mr-2" />
                                                                Set Timer ({mins}m)
                                                            </Button>
                                                        )}
                                                    </div>
                                                );
                                            } else if (part.match(/\[ADD_TASK: ([^|]+) \| ([^\]]+)\]/)) {
                                                const match = part.match(/\[ADD_TASK: ([^|]+) \| ([^\]]+)\]/);
                                                if (match) {
                                                    const title = match[1].trim();
                                                    const priority = match[2].trim() as "high" | "medium" | "low";
                                                    return (
                                                        <div key={i} className="my-3">
                                                            {isExecuted ? (
                                                                <div className="text-xs text-muted-foreground flex items-center gap-1 italic bg-green-500/5 text-green-600 p-2 rounded border border-green-500/10 w-fit">
                                                                    <Check className="w-3 h-3" /> Added: "{title}"
                                                                </div>
                                                            ) : (
                                                                <Button
                                                                    onClick={() => handleAction(actionKey, () => addTask(title, priority))}
                                                                    className="bg-green-600/10 text-green-600 hover:bg-green-600/20 border border-green-600/20 shadow-sm h-8 text-xs"
                                                                >
                                                                    <Plus className="w-3 h-3 mr-2" />
                                                                    Add Task
                                                                </Button>
                                                            )}
                                                        </div>
                                                    );
                                                }
                                            } else if (part.match(/\[JOURNAL_APPEND: ([^\]]+)\]/)) {
                                                const match = part.match(/\[JOURNAL_APPEND: ([^\]]+)\]/);
                                                if (match) {
                                                    const text = match[1].trim();
                                                    return (
                                                        <div key={i} className="my-3">
                                                            {isExecuted ? (
                                                                <div className="text-xs text-muted-foreground flex items-center gap-1 italic bg-blue-500/5 text-blue-600 p-2 rounded border border-blue-500/10 w-fit">
                                                                    <Check className="w-3 h-3" /> Added to Journal
                                                                </div>
                                                            ) : (
                                                                <Button
                                                                    onClick={() => handleAction(actionKey, () => handleAppendJournal(text))}
                                                                    className="bg-blue-600/10 text-blue-600 hover:bg-blue-600/20 border border-blue-600/20 shadow-sm h-8 text-xs"
                                                                >
                                                                    <BookOpen className="w-3 h-3 mr-2" />
                                                                    Add to Journal
                                                                </Button>
                                                            )}
                                                        </div>
                                                    );
                                                }
                                            } else if (part.match(/\[COMPLETE_TASK: ([^\]]+)\]/)) {
                                                const match = part.match(/\[COMPLETE_TASK: ([^\]]+)\]/);
                                                if (match) {
                                                    const taskId = match[1].trim();
                                                    return (
                                                        <div key={i} className="my-3">
                                                            {isExecuted ? (
                                                                <div className="text-xs text-muted-foreground flex items-center gap-1 italic bg-primary/5 text-primary p-2 rounded border border-primary/10 w-fit">
                                                                    <Check className="w-3 h-3" /> Task Completed
                                                                </div>
                                                            ) : (
                                                                <Button
                                                                    onClick={() => handleAction(actionKey, () => toggleTask(taskId))}
                                                                    className="bg-primary/10 text-primary hover:bg-primary/20 border border-primary/20 shadow-sm h-8 text-xs"
                                                                >
                                                                    <Check className="w-3 h-3 mr-2" />
                                                                    Complete Task
                                                                </Button>
                                                            )}
                                                        </div>
                                                    );
                                                }
                                            } else if (part.match(/\[UPDATE_TASK: ([^|]+) \| ([^|]+) \| ([^\]]+)\]/)) {
                                                // Format: [UPDATE_TASK: id | title | priority]
                                                // Note: This is a simplified handler. In a real app, you might want a modal or more complex UI.
                                                // For now, we'll just show a button to "Update Task" which might just toggle it or we can ignore the update logic for now if not fully supported by context.
                                                // Given the context, let's just render a generic "Update Task" button that might not do much without a specific update function, 
                                                // OR we can skip it. But the user specifically asked for COMPLETE_TASK.
                                                // Let's implement a basic version if possible, or just text if we lack the context function.
                                                // Looking at useApp, we have 'toggleTask' and 'addTask'. We don't seem to have 'updateTask' exposed directly in the destructuring in CoachChat.
                                                // Let's stick to COMPLETE_TASK as requested and just render text for UPDATE_TASK for now to avoid errors, or implement if easy.
                                                // Actually, let's just handle COMPLETE_TASK effectively.
                                            }

                                            return <span key={i}>{part}</span>;
                                        })}
                                    </div>

                                    {msg.attachments && msg.attachments.length > 0 && (
                                        <div className={cn("flex flex-wrap gap-2 mt-2", msg.role === "user" ? "justify-end" : "justify-start")}>
                                            {msg.attachments.map((att, i) => (
                                                <div key={i} className="flex items-center gap-2 text-xs bg-secondary/30 p-2 rounded-lg border border-border/50">
                                                    {att.type === "image" ? <ImageIcon className="w-3 h-3" /> : <FileText className="w-3 h-3" />}
                                                    <span className="truncate max-w-[100px]">{att.name}</span>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        ))
                    )}
                    {isLoading && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="flex gap-4 max-w-3xl mx-auto w-full"
                        >
                            <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
                                <Sparkles className="w-6 h-6 text-primary animate-pulse" />
                            </div>
                            <div className="flex items-center gap-1 pt-2">
                                <span className="w-1.5 h-1.5 bg-foreground/40 rounded-full animate-bounce" />
                                <span className="w-1.5 h-1.5 bg-foreground/40 rounded-full animate-bounce delay-75" />
                                <span className="w-1.5 h-1.5 bg-foreground/40 rounded-full animate-bounce delay-150" />
                            </div>
                        </motion.div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                {/* Input Area */}
                <div className="p-4 bg-background/80 backdrop-blur-md border-t border-border/40">
                    <div className="max-w-3xl mx-auto w-full">
                        {attachments.length > 0 && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="flex gap-2 mb-3 overflow-x-auto pb-2"
                            >
                                {attachments.map((file, i) => (
                                    <div key={i} className="relative flex items-center gap-2 bg-secondary/20 px-3 py-1.5 rounded-full text-xs border border-secondary/30 shadow-sm">
                                        <span className="truncate max-w-[150px] font-medium">{file.name}</span>
                                        <button onClick={() => removeAttachment(i)} className="hover:text-destructive transition-colors p-0.5 rounded-full hover:bg-destructive/10">
                                            <X className="w-3 h-3" />
                                        </button>
                                    </div>
                                ))}
                            </motion.div>
                        )}
                        <form onSubmit={handleSend} className="flex gap-2 items-center relative bg-secondary/30 p-2 rounded-full border border-border/50 focus-within:border-primary/30 focus-within:bg-secondary/40 transition-all shadow-sm">
                            <Button
                                type="button"
                                variant="ghost"
                                size="icon"
                                onClick={() => fileInputRef.current?.click()}
                                className="text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-full h-9 w-9 ml-1"
                            >
                                <Paperclip className="w-4 h-4" />
                            </Button>
                            <input
                                type="file"
                                multiple
                                ref={fileInputRef}
                                className="hidden"
                                onChange={handleFileSelect}
                                accept="image/*,.pdf,.doc,.docx"
                            />

                            <Input
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder={isRecording ? "Listening..." : "Ask anything..."}
                                disabled={isLoading || isRecording}
                                className="border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 px-2 h-10 text-base flex-1 placeholder:text-muted-foreground/70"
                            />

                            <div className="flex items-center gap-1 mr-1">
                                <Button
                                    type="button"
                                    variant="ghost"
                                    size="icon"
                                    onClick={toggleRecording}
                                    className={cn(
                                        "h-9 w-9 rounded-full transition-all",
                                        isRecording
                                            ? "text-destructive hover:text-destructive hover:bg-destructive/10 animate-pulse"
                                            : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                                    )}
                                >
                                    <Mic className={cn("w-4 h-4", isRecording && "fill-current")} />
                                </Button>
                                <Button
                                    type="submit"
                                    size="icon"
                                    disabled={isLoading || (!input.trim() && attachments.length === 0)}
                                    className="h-9 w-9 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm transition-all"
                                >
                                    <Send className="w-4 h-4" />
                                </Button>
                            </div>
                        </form>
                        <div className="text-center mt-2">
                            <p className="text-[10px] text-muted-foreground/50 font-medium">
                                LifeCoach can make mistakes. Check important info.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
