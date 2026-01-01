(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Downloads/Desktop-1/projects/life-coach/src/context/AppContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AppProvider",
    ()=>AppProvider,
    "useApp",
    ()=>useApp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Desktop-1/projects/life-coach/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Desktop-1/projects/life-coach/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Desktop-1/projects/life-coach/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
const AppContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function AppProvider({ children }) {
    _s();
    const [mood, setMood] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("neutral");
    const [userProfile, setUserProfile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        bio: "",
        coachingStyle: "supportive",
        colorTheme: "dark"
    });
    // Timer State
    const [timeLeft, setTimeLeft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(25 * 60);
    const [isActive, setIsActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [timerMode, setTimerMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("work");
    const [cycles, setCycles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [workDuration, setWorkDuration] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(25);
    const [breakDuration, setBreakDuration] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(5);
    const [tasks, setTasks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // Chat State
    const [chatSessions, setChatSessions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [currentSessionId, setCurrentSessionId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Journal State
    const [journalEntries, setJournalEntries] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    // Load initial state from localStorage
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AppProvider.useEffect": ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                const savedMood = localStorage.getItem("mood");
                if (savedMood) setMood(savedMood);
                const savedProfile = localStorage.getItem("userProfile");
                if (savedProfile) {
                    try {
                        const parsed = JSON.parse(savedProfile);
                        setUserProfile({
                            "AppProvider.useEffect": (prev)=>({
                                    ...prev,
                                    ...parsed,
                                    colorTheme: parsed.colorTheme || "dark"
                                })
                        }["AppProvider.useEffect"]);
                    } catch (e) {
                        console.error("Failed to parse user profile", e);
                    }
                } else {
                    setUserProfile({
                        "AppProvider.useEffect": (prev_0)=>({
                                ...prev_0,
                                colorTheme: "dark"
                            })
                    }["AppProvider.useEffect"]);
                }
                const savedTasks = localStorage.getItem("tasks");
                if (savedTasks) setTasks(JSON.parse(savedTasks));
                const savedJournal = localStorage.getItem("journalEntries");
                if (savedJournal) {
                    try {
                        const parsed_0 = JSON.parse(savedJournal);
                        // Migration logic: if values are strings, convert to objects
                        const migrated = {};
                        Object.entries(parsed_0).forEach({
                            "AppProvider.useEffect": ([date, entry])=>{
                                if (typeof entry === 'string') {
                                    migrated[date] = {
                                        content: entry,
                                        lastUpdated: Date.now()
                                    };
                                } else {
                                    migrated[date] = entry;
                                }
                            }
                        }["AppProvider.useEffect"]);
                        setJournalEntries(migrated);
                    } catch (e_0) {
                        console.error("Failed to parse journal entries", e_0);
                    }
                }
                const savedSessions = localStorage.getItem("chatSessions");
                if (savedSessions) {
                    const sessions = JSON.parse(savedSessions);
                    // Ensure executedActions exists for legacy sessions
                    const migratedSessions = sessions.map({
                        "AppProvider.useEffect.migratedSessions": (s)=>({
                                ...s,
                                executedActions: s.executedActions || []
                            })
                    }["AppProvider.useEffect.migratedSessions"]);
                    setChatSessions(migratedSessions);
                    if (migratedSessions.length > 0) {
                        const lastActive = localStorage.getItem("currentSessionId");
                        if (lastActive && migratedSessions.find({
                            "AppProvider.useEffect": (s_0)=>s_0.id === lastActive
                        }["AppProvider.useEffect"])) {
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
        }
    }["AppProvider.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AppProvider.useEffect": ()=>{
            if (("TURBOPACK compile-time value", "object") !== "undefined" && mood) {
                localStorage.setItem("mood", mood);
            }
        }
    }["AppProvider.useEffect"], [
        mood
    ]);
    // Apply Color Theme
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AppProvider.useEffect": ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                const root = window.document.documentElement;
                root.classList.remove("light", "dark");
                root.setAttribute("data-theme", userProfile.colorTheme);
                const lightThemes = [
                    "light",
                    "catppuccin-latte",
                    "carbon-light"
                ];
                if (lightThemes.includes(userProfile.colorTheme)) {
                    root.classList.add("light");
                    root.classList.remove("dark");
                } else {
                    root.classList.add("dark");
                    root.classList.remove("light");
                }
                localStorage.setItem("userProfile", JSON.stringify(userProfile));
            }
        }
    }["AppProvider.useEffect"], [
        userProfile
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AppProvider.useEffect": ()=>{
            localStorage.setItem("tasks", JSON.stringify(tasks));
        }
    }["AppProvider.useEffect"], [
        tasks
    ]);
    // Persist Chat Sessions
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AppProvider.useEffect": ()=>{
            if (("TURBOPACK compile-time value", "object") !== "undefined" && chatSessions.length > 0) {
                localStorage.setItem("chatSessions", JSON.stringify(chatSessions));
            }
        }
    }["AppProvider.useEffect"], [
        chatSessions
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AppProvider.useEffect": ()=>{
            if (("TURBOPACK compile-time value", "object") !== "undefined" && currentSessionId) {
                localStorage.setItem("currentSessionId", currentSessionId);
            }
        }
    }["AppProvider.useEffect"], [
        currentSessionId
    ]);
    // Persist Journal
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AppProvider.useEffect": ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                localStorage.setItem("journalEntries", JSON.stringify(journalEntries));
            }
        }
    }["AppProvider.useEffect"], [
        journalEntries
    ]);
    const addTask = (title, priority = "medium", dueDate, dueTime)=>{
        const newTask = {
            id: crypto.randomUUID(),
            title,
            completed: false,
            priority,
            dueDate,
            dueTime
        };
        setTasks((prev_1)=>[
                ...prev_1,
                newTask
            ]);
    };
    const toggleTask = (id)=>{
        setTasks((prev_2)=>prev_2.map((t)=>t.id === id ? {
                    ...t,
                    completed: !t.completed
                } : t));
    };
    const deleteTask = (id_0)=>{
        setTasks((prev_3)=>prev_3.filter((t_0)=>t_0.id !== id_0));
    };
    const updateTask = (id_1, updates)=>{
        setTasks((prev_4)=>prev_4.map((t_1)=>t_1.id === id_1 ? {
                    ...t_1,
                    ...updates
                } : t_1));
    };
    const updateUserProfile = (updates_0)=>{
        setUserProfile((prev_5)=>({
                ...prev_5,
                ...updates_0
            }));
    };
    const updateJournalEntry = (date_0, updates_1)=>{
        setJournalEntries((prev_6)=>{
            const current = prev_6[date_0] || {
                content: "",
                lastUpdated: Date.now()
            };
            return {
                ...prev_6,
                [date_0]: {
                    ...current,
                    ...updates_1,
                    lastUpdated: Date.now()
                }
            };
        });
    };
    const appendJournalEntry = (date_1, text)=>{
        setJournalEntries((prev_7)=>{
            const currentEntry = prev_7[date_1] || {
                content: "",
                lastUpdated: Date.now()
            };
            // Simple append for now, can be enhanced to add new paragraphs
            const newContent = currentEntry.content + `<p>${text}</p>`;
            return {
                ...prev_7,
                [date_1]: {
                    ...currentEntry,
                    content: newContent,
                    lastUpdated: Date.now()
                }
            };
        });
    };
    // Chat Actions
    const createNewSession = ()=>{
        const newSession = {
            id: crypto.randomUUID(),
            title: "New Chat",
            messages: [
                {
                    id: "welcome",
                    role: "assistant",
                    content: "Hello! I'm your personal AI Life Coach. How can I help you today?",
                    timestamp: Date.now()
                }
            ],
            lastModified: Date.now(),
            executedActions: []
        };
        setChatSessions((prev_8)=>[
                newSession,
                ...prev_8
            ]);
        setCurrentSessionId(newSession.id);
    };
    const deleteSession = (id_2)=>{
        setChatSessions((prev_9)=>{
            const newSessions = prev_9.filter((s_1)=>s_1.id !== id_2);
            if (currentSessionId === id_2) {
                setCurrentSessionId(newSessions.length > 0 ? newSessions[0].id : null);
            }
            return newSessions;
        });
    };
    const selectSession = (id_3)=>{
        setCurrentSessionId(id_3);
    };
    const addMessageToSession = (sessionId, message)=>{
        setChatSessions((prev_10)=>prev_10.map((session)=>{
                if (session.id === sessionId) {
                    return {
                        ...session,
                        messages: [
                            ...session.messages,
                            message
                        ],
                        lastModified: Date.now(),
                        title: session.messages.length === 1 && message.role === "user" ? message.content.slice(0, 30) + (message.content.length > 30 ? "..." : "") : session.title
                    };
                }
                return session;
            }));
    };
    const updateSessionTitle = (sessionId_0, title_0)=>{
        setChatSessions((prev_11)=>prev_11.map((s_2)=>s_2.id === sessionId_0 ? {
                    ...s_2,
                    title: title_0
                } : s_2));
    };
    const markActionExecuted = (sessionId_1, actionId)=>{
        setChatSessions((prev_12)=>prev_12.map((session_0)=>{
                if (session_0.id === sessionId_1) {
                    return {
                        ...session_0,
                        executedActions: [
                            ...session_0.executedActions || [],
                            actionId
                        ]
                    };
                }
                return session_0;
            }));
    };
    const startTimer = ()=>setIsActive(true);
    const pauseTimer = ()=>setIsActive(false);
    const resetTimer = ()=>{
        setIsActive(false);
        setTimeLeft(timerMode === "work" ? workDuration * 60 : breakDuration * 60);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AppProvider.useEffect": ()=>{
            let interval;
            if (isActive && timeLeft > 0) {
                interval = setInterval({
                    "AppProvider.useEffect": ()=>{
                        setTimeLeft({
                            "AppProvider.useEffect": (prev_13)=>prev_13 - 1
                        }["AppProvider.useEffect"]);
                    }
                }["AppProvider.useEffect"], 1000);
            } else if (timeLeft === 0) {
                setIsActive(false);
                if (timerMode === "work") {
                    setCycles({
                        "AppProvider.useEffect": (prev_14)=>prev_14 + 1
                    }["AppProvider.useEffect"]);
                    setTimerMode("break");
                    setTimeLeft(breakDuration * 60);
                } else {
                    setTimerMode("work");
                    setTimeLeft(workDuration * 60);
                }
            }
            return ({
                "AppProvider.useEffect": ()=>clearInterval(interval)
            })["AppProvider.useEffect"];
        }
    }["AppProvider.useEffect"], [
        isActive,
        timeLeft,
        timerMode,
        workDuration,
        breakDuration
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AppContext.Provider, {
        value: {
            mood,
            setMood,
            tasks,
            addTask,
            toggleTask,
            deleteTask,
            updateTask,
            userProfile,
            updateUserProfile,
            timeLeft,
            setTimeLeft,
            isActive,
            setIsActive,
            timerMode,
            setTimerMode,
            cycles,
            setCycles,
            workDuration,
            setWorkDuration,
            breakDuration,
            setBreakDuration,
            startTimer,
            pauseTimer,
            resetTimer,
            chatSessions,
            currentSessionId,
            createNewSession,
            deleteSession,
            selectSession,
            addMessageToSession,
            updateSessionTitle,
            markActionExecuted,
            journalEntries,
            updateJournalEntry,
            appendJournalEntry
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/context/AppContext.tsx",
        lineNumber: 386,
        columnNumber: 10
    }, this);
}
_s(AppProvider, "J1p9GK+yUjjftECiTbxjBF2Mqag=");
_c = AppProvider;
function useApp() {
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(1);
    if ($[0] !== "ac9c7491ef41c111c8bfb42dde55540c6b384115f5583002eadff2b99be355d8") {
        for(let $i = 0; $i < 1; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "ac9c7491ef41c111c8bfb42dde55540c6b384115f5583002eadff2b99be355d8";
    }
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(AppContext);
    if (context === undefined) {
        throw new Error("useApp must be used within an AppProvider");
    }
    return context;
}
_s1(useApp, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "AppProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/Desktop-1/projects/life-coach/src/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Desktop-1/projects/life-coach/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Desktop-1/projects/life-coach/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/Desktop-1/projects/life-coach/src/components/Navigation.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Navigation",
    ()=>Navigation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Desktop-1/projects/life-coach/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Desktop-1/projects/life-coach/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Desktop-1/projects/life-coach/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Desktop-1/projects/life-coach/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Desktop-1/projects/life-coach/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_context__.i("[project]/Downloads/Desktop-1/projects/life-coach/node_modules/lucide-react/dist/esm/icons/house.js [app-client] (ecmascript) <export default as Home>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckSquare$3e$__ = __turbopack_context__.i("[project]/Downloads/Desktop-1/projects/life-coach/node_modules/lucide-react/dist/esm/icons/square-check-big.js [app-client] (ecmascript) <export default as CheckSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__ = __turbopack_context__.i("[project]/Downloads/Desktop-1/projects/life-coach/node_modules/lucide-react/dist/esm/icons/bot.js [app-client] (ecmascript) <export default as Bot>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$timer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Timer$3e$__ = __turbopack_context__.i("[project]/Downloads/Desktop-1/projects/life-coach/node_modules/lucide-react/dist/esm/icons/timer.js [app-client] (ecmascript) <export default as Timer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/Downloads/Desktop-1/projects/life-coach/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/Downloads/Desktop-1/projects/life-coach/node_modules/lucide-react/dist/esm/icons/book-open.js [app-client] (ecmascript) <export default as BookOpen>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function Navigation() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "9aad11c14fc10f2c90d10417cf3f461e7978927c74a362c886ddf355b5fb6fe1") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "9aad11c14fc10f2c90d10417cf3f461e7978927c74a362c886ddf355b5fb6fe1";
    }
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [
            {
                href: "/",
                label: "Home",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"]
            },
            {
                href: "/todo",
                label: "To-Do",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckSquare$3e$__["CheckSquare"]
            },
            {
                href: "/journal",
                label: "Journal",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"]
            },
            {
                href: "/coach",
                label: "AI Coach",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__["Bot"]
            },
            {
                href: "/pomodoro",
                label: "Pomodoro",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$timer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Timer$3e$__["Timer"]
            },
            {
                href: "/settings",
                label: "Settings",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"]
            }
        ];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const links = t0;
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "hidden md:block font-bold text-xl text-foreground tracking-tight",
            children: "LifeCoach"
        }, void 0, false, {
            fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/Navigation.tsx",
            lineNumber: 51,
            columnNumber: 10
        }, this);
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== pathname) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            className: "fixed bottom-0 left-0 right-0 md:top-0 md:bottom-auto z-50 bg-background/80 backdrop-blur-lg border-t md:border-t-0 md:border-b border-border",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between h-16",
                    children: [
                        t1,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-around w-full md:w-auto md:gap-8",
                            children: links.map({
                                "Navigation[links.map()]": (link)=>{
                                    const Icon = link.icon;
                                    const isActive = pathname === link.href;
                                    const isSettings = link.href === "/settings";
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: link.href,
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col md:flex-row items-center gap-1 md:gap-2 p-2 rounded-lg transition-all duration-200", isActive ? "text-foreground font-semibold bg-secondary/80 shadow-sm" : "text-muted-foreground hover:text-foreground hover:bg-secondary/50 hover:scale-105"),
                                        title: link.label,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                className: "w-5 h-5"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/Navigation.tsx",
                                                lineNumber: 63,
                                                columnNumber: 353
                                            }, this),
                                            !isSettings && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs md:text-sm font-medium",
                                                children: link.label
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/Navigation.tsx",
                                                lineNumber: 63,
                                                columnNumber: 397
                                            }, this)
                                        ]
                                    }, link.href, true, {
                                        fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/Navigation.tsx",
                                        lineNumber: 63,
                                        columnNumber: 24
                                    }, this);
                                }
                            }["Navigation[links.map()]"])
                        }, void 0, false, {
                            fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/Navigation.tsx",
                            lineNumber: 58,
                            columnNumber: 269
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/Navigation.tsx",
                    lineNumber: 58,
                    columnNumber: 209
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/Navigation.tsx",
                lineNumber: 58,
                columnNumber: 169
            }, this)
        }, void 0, false, {
            fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/Navigation.tsx",
            lineNumber: 58,
            columnNumber: 10
        }, this);
        $[3] = pathname;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    return t2;
}
_s(Navigation, "xbyQPtUVMO7MNj7WjJlpdWqRcTo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = Navigation;
var _c;
__turbopack_context__.k.register(_c, "Navigation");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Downloads_Desktop-1_projects_life-coach_src_2a14144f._.js.map