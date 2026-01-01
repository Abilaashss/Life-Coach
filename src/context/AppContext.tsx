"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Mood = "happy" | "sad" | "neutral" | "stressed" | "excited" | "anxious" | "tired" | "focused";

export type Task = {
    id: string;
    title: string;
    completed: boolean;
    priority: "high" | "medium" | "low";
    dueDate?: string;
    dueTime?: string;
};

export type CoachingStyle = "supportive" | "direct" | "analytical" | "humorous" | "tough-love";

export type ColorTheme =
    | "light" | "dark" | "system"
    | "catppuccin-latte" | "catppuccin-frappe" | "catppuccin-macchiato" | "catppuccin-mocha"
    | "tokyo-night" | "dracula" | "nord"
    | "solarized-light" | "solarized-dark"
    | "github-light" | "github-dark"
    | "monokai" | "synthwave" | "cyberpunk" | "lofi"
    | "carbon-light" | "carbon-dark";

export type UserProfile = {
    name: string;
    bio: string;
    coachingStyle: CoachingStyle;
    colorTheme: ColorTheme;
};

export type Message = {
    id: string;
    role: "user" | "assistant";
    content: string;
    attachments?: { type: "image" | "file"; name: string; url?: string }[];
    timestamp: number;
};

export type ChatSession = {
    id: string;
    title: string;
    messages: Message[];
    lastModified: number;
    executedActions: string[]; // Track executed button actions (e.g., "msgId-0")
};

export type JournalEntry = {
    content: string;
    coverImage?: string;
    icon?: string; // Emoji
    lastUpdated: number;
};

interface AppContextType {
    mood: Mood;
    setMood: (mood: Mood) => void;
    tasks: Task[];
    addTask: (title: string, priority: Task["priority"], dueDate?: string, dueTime?: string) => void;
    toggleTask: (id: string) => void;
    deleteTask: (id: string) => void;
    updateTask: (id: string, updates: Partial<Omit<Task, "id">>) => void;

    // Timer State
    timeLeft: number;
    setTimeLeft: (time: number) => void;
    isActive: boolean;
    setIsActive: (active: boolean) => void;
    timerMode: "work" | "break";
    setTimerMode: (mode: "work" | "break") => void;
    cycles: number;
    setCycles: (cycles: number) => void;
    workDuration: number;
    setWorkDuration: (duration: number) => void;
    breakDuration: number;
    setBreakDuration: (duration: number) => void;
    startTimer: () => void;
    pauseTimer: () => void;
    resetTimer: () => void;

    // User Profile State
    userProfile: UserProfile;
    updateUserProfile: (updates: Partial<UserProfile>) => void;

    // Chat State
    chatSessions: ChatSession[];
    currentSessionId: string | null;
    createNewSession: () => void;
    deleteSession: (id: string) => void;
    selectSession: (id: string) => void;
    addMessageToSession: (sessionId: string, message: Message) => void;
    updateSessionTitle: (sessionId: string, title: string) => void;
    markActionExecuted: (sessionId: string, actionId: string) => void;
    // Journal State
    journalEntries: Record<string, JournalEntry>;
    updateJournalEntry: (date: string, updates: Partial<JournalEntry>) => void;
    appendJournalEntry: (date: string, text: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
    const [mood, setMood] = useState<Mood>("neutral");

    const [userProfile, setUserProfile] = useState<UserProfile>({
        name: "",
        bio: "",
        coachingStyle: "supportive",
        colorTheme: "dark"
    });

    // Timer State
    const [timeLeft, setTimeLeft] = useState(25 * 60);
    const [isActive, setIsActive] = useState(false);
    const [timerMode, setTimerMode] = useState<"work" | "break">("work");
    const [cycles, setCycles] = useState(0);
    const [workDuration, setWorkDuration] = useState(25);
    const [breakDuration, setBreakDuration] = useState(5);

    const [tasks, setTasks] = useState<Task[]>([]);

    // Chat State
    const [chatSessions, setChatSessions] = useState<ChatSession[]>([]);
    const [currentSessionId, setCurrentSessionId] = useState<string | null>(null);

    // Journal State
    const [journalEntries, setJournalEntries] = useState<Record<string, JournalEntry>>({});

    // Load initial state from localStorage
    useEffect(() => {
        if (typeof window !== "undefined") {
            const savedMood = localStorage.getItem("mood") as Mood;
            if (savedMood) setMood(savedMood);

            const savedProfile = localStorage.getItem("userProfile");
            if (savedProfile) {
                try {
                    const parsed = JSON.parse(savedProfile);
                    setUserProfile(prev => ({
                        ...prev,
                        ...parsed,
                        colorTheme: parsed.colorTheme || "dark"
                    }));
                } catch (e) {
                    console.error("Failed to parse user profile", e);
                }
            } else {
                setUserProfile(prev => ({ ...prev, colorTheme: "dark" }));
            }

            const savedTasks = localStorage.getItem("tasks");
            if (savedTasks) setTasks(JSON.parse(savedTasks));

            const savedJournal = localStorage.getItem("journalEntries");
            if (savedJournal) {
                try {
                    const parsed = JSON.parse(savedJournal);
                    // Migration logic: if values are strings, convert to objects
                    const migrated: Record<string, JournalEntry> = {};
                    Object.entries(parsed).forEach(([date, entry]) => {
                        if (typeof entry === 'string') {
                            migrated[date] = {
                                content: entry,
                                lastUpdated: Date.now()
                            };
                        } else {
                            migrated[date] = entry as JournalEntry;
                        }
                    });
                    setJournalEntries(migrated);
                } catch (e) {
                    console.error("Failed to parse journal entries", e);
                }
            }

            const savedSessions = localStorage.getItem("chatSessions");
            if (savedSessions) {
                const sessions = JSON.parse(savedSessions);
                // Ensure executedActions exists for legacy sessions
                const migratedSessions = sessions.map((s: any) => ({
                    ...s,
                    executedActions: s.executedActions || []
                }));
                setChatSessions(migratedSessions);

                if (migratedSessions.length > 0) {
                    const lastActive = localStorage.getItem("currentSessionId");
                    if (lastActive && migratedSessions.find((s: ChatSession) => s.id === lastActive)) {
                        setCurrentSessionId(lastActive);
                    } else {
                        setCurrentSessionId(migratedSessions[0].id);
                    }
                } else {
                    createNewSession();
                }
            } else {
                createNewSession();
            }
        }
    }, []);

    useEffect(() => {
        if (typeof window !== "undefined" && mood) {
            localStorage.setItem("mood", mood);
        }
    }, [mood]);

    // Apply Color Theme
    useEffect(() => {
        if (typeof window !== "undefined") {
            const root = window.document.documentElement;
            root.classList.remove("light", "dark");
            root.setAttribute("data-theme", userProfile.colorTheme);

            const lightThemes = ["light", "catppuccin-latte", "carbon-light"];
            if (lightThemes.includes(userProfile.colorTheme)) {
                root.classList.add("light");
                root.classList.remove("dark");
            } else {
                root.classList.add("dark");
                root.classList.remove("light");
            }

            localStorage.setItem("userProfile", JSON.stringify(userProfile));
        }
    }, [userProfile]);

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    // Persist Chat Sessions
    useEffect(() => {
        if (typeof window !== "undefined" && chatSessions.length > 0) {
            localStorage.setItem("chatSessions", JSON.stringify(chatSessions));
        }
    }, [chatSessions]);

    useEffect(() => {
        if (typeof window !== "undefined" && currentSessionId) {
            localStorage.setItem("currentSessionId", currentSessionId);
        }
    }, [currentSessionId]);

    // Persist Journal
    useEffect(() => {
        if (typeof window !== "undefined") {
            localStorage.setItem("journalEntries", JSON.stringify(journalEntries));
        }
    }, [journalEntries]);

    const addTask = (title: string, priority: Task["priority"] = "medium", dueDate?: string, dueTime?: string) => {
        const newTask: Task = {
            id: crypto.randomUUID(),
            title,
            completed: false,
            priority,
            dueDate,
            dueTime,
        };
        setTasks((prev) => [...prev, newTask]);
    };

    const toggleTask = (id: string) => {
        setTasks((prev) =>
            prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
        );
    };

    const deleteTask = (id: string) => {
        setTasks((prev) => prev.filter((t) => t.id !== id));
    };

    const updateTask = (id: string, updates: Partial<Omit<Task, "id">>) => {
        setTasks((prev) =>
            prev.map((t) => (t.id === id ? { ...t, ...updates } : t))
        );
    };

    const updateUserProfile = (updates: Partial<UserProfile>) => {
        setUserProfile(prev => ({ ...prev, ...updates }));
    };

    const updateJournalEntry = (date: string, updates: Partial<JournalEntry>) => {
        setJournalEntries(prev => {
            const current = prev[date] || { content: "", lastUpdated: Date.now() };
            return {
                ...prev,
                [date]: { ...current, ...updates, lastUpdated: Date.now() }
            };
        });
    };

    const appendJournalEntry = (date: string, text: string) => {
        setJournalEntries(prev => {
            const currentEntry = prev[date] || { content: "", lastUpdated: Date.now() };
            // Simple append for now, can be enhanced to add new paragraphs
            const newContent = currentEntry.content + `<p>${text}</p>`;
            return {
                ...prev,
                [date]: { ...currentEntry, content: newContent, lastUpdated: Date.now() }
            };
        });
    };

    // Chat Actions
    const createNewSession = () => {
        const newSession: ChatSession = {
            id: crypto.randomUUID(),
            title: "New Chat",
            messages: [{
                id: "welcome",
                role: "assistant",
                content: "Hello! I'm your personal AI Life Coach. How can I help you today?",
                timestamp: Date.now()
            }],
            lastModified: Date.now(),
            executedActions: []
        };
        setChatSessions(prev => [newSession, ...prev]);
        setCurrentSessionId(newSession.id);
    };

    const deleteSession = (id: string) => {
        setChatSessions(prev => {
            const newSessions = prev.filter(s => s.id !== id);
            if (currentSessionId === id) {
                setCurrentSessionId(newSessions.length > 0 ? newSessions[0].id : null);
            }
            return newSessions;
        });
    };

    const selectSession = (id: string) => {
        setCurrentSessionId(id);
    };

    const addMessageToSession = (sessionId: string, message: Message) => {
        setChatSessions(prev => prev.map(session => {
            if (session.id === sessionId) {
                return {
                    ...session,
                    messages: [...session.messages, message],
                    lastModified: Date.now(),
                    title: session.messages.length === 1 && message.role === "user"
                        ? (message.content.slice(0, 30) + (message.content.length > 30 ? "..." : ""))
                        : session.title
                };
            }
            return session;
        }));
    };

    const updateSessionTitle = (sessionId: string, title: string) => {
        setChatSessions(prev => prev.map(s => s.id === sessionId ? { ...s, title } : s));
    };

    const markActionExecuted = (sessionId: string, actionId: string) => {
        setChatSessions(prev => prev.map(session => {
            if (session.id === sessionId) {
                return {
                    ...session,
                    executedActions: [...(session.executedActions || []), actionId]
                };
            }
            return session;
        }));
    };

    const startTimer = () => setIsActive(true);
    const pauseTimer = () => setIsActive(false);
    const resetTimer = () => {
        setIsActive(false);
        setTimeLeft(timerMode === "work" ? workDuration * 60 : breakDuration * 60);
    };

    useEffect(() => {
        let interval: NodeJS.Timeout;

        if (isActive && timeLeft > 0) {
            interval = setInterval(() => {
                setTimeLeft((prev) => prev - 1);
            }, 1000);
        } else if (timeLeft === 0) {
            setIsActive(false);
            if (timerMode === "work") {
                setCycles((prev) => prev + 1);
                setTimerMode("break");
                setTimeLeft(breakDuration * 60);
            } else {
                setTimerMode("work");
                setTimeLeft(workDuration * 60);
            }
        }

        return () => clearInterval(interval);
    }, [isActive, timeLeft, timerMode, workDuration, breakDuration]);

    return (
        <AppContext.Provider value={{
            mood, setMood,
            tasks, addTask, toggleTask, deleteTask, updateTask,
            userProfile, updateUserProfile,
            timeLeft, setTimeLeft,
            isActive, setIsActive,
            timerMode, setTimerMode,
            cycles, setCycles,
            workDuration, setWorkDuration,
            breakDuration, setBreakDuration,
            startTimer, pauseTimer, resetTimer,
            chatSessions, currentSessionId, createNewSession, deleteSession, selectSession, addMessageToSession, updateSessionTitle, markActionExecuted,
            journalEntries, updateJournalEntry, appendJournalEntry
        }}>
            {children}
        </AppContext.Provider>
    );
}

export function useApp() {
    const context = useContext(AppContext);
    if (context === undefined) {
        throw new Error("useApp must be used within an AppProvider");
    }
    return context;
}
