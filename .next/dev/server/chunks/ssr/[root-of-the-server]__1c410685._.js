module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/Downloads/Desktop-1/projects/life-coach/src/context/AppContext.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AppProvider",
    ()=>AppProvider,
    "useApp",
    ()=>useApp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Desktop-1/projects/life-coach/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Desktop-1/projects/life-coach/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const AppContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function AppProvider({ children }) {
    const [mood, setMood] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("neutral");
    const [userProfile, setUserProfile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        bio: "",
        coachingStyle: "supportive",
        colorTheme: "dark"
    });
    // Timer State
    const [timeLeft, setTimeLeft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(25 * 60);
    const [isActive, setIsActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [timerMode, setTimerMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("work");
    const [cycles, setCycles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [workDuration, setWorkDuration] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(25);
    const [breakDuration, setBreakDuration] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(5);
    const [tasks, setTasks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    // Chat State
    const [chatSessions, setChatSessions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [currentSessionId, setCurrentSessionId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Journal State
    const [journalEntries, setJournalEntries] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    // Load initial state from localStorage
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    }, [
        mood
    ]);
    // Apply Color Theme
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    }, [
        userProfile
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [
        tasks
    ]);
    // Persist Chat Sessions
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (("TURBOPACK compile-time value", "undefined") !== "undefined" && chatSessions.length > 0) //TURBOPACK unreachable
        ;
    }, [
        chatSessions
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    }, [
        currentSessionId
    ]);
    // Persist Journal
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    }, [
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
        setTasks((prev)=>[
                ...prev,
                newTask
            ]);
    };
    const toggleTask = (id)=>{
        setTasks((prev)=>prev.map((t)=>t.id === id ? {
                    ...t,
                    completed: !t.completed
                } : t));
    };
    const deleteTask = (id)=>{
        setTasks((prev)=>prev.filter((t)=>t.id !== id));
    };
    const updateTask = (id, updates)=>{
        setTasks((prev)=>prev.map((t)=>t.id === id ? {
                    ...t,
                    ...updates
                } : t));
    };
    const updateUserProfile = (updates)=>{
        setUserProfile((prev)=>({
                ...prev,
                ...updates
            }));
    };
    const updateJournalEntry = (date, updates)=>{
        setJournalEntries((prev)=>{
            const current = prev[date] || {
                content: "",
                lastUpdated: Date.now()
            };
            return {
                ...prev,
                [date]: {
                    ...current,
                    ...updates,
                    lastUpdated: Date.now()
                }
            };
        });
    };
    const appendJournalEntry = (date, text)=>{
        setJournalEntries((prev)=>{
            const currentEntry = prev[date] || {
                content: "",
                lastUpdated: Date.now()
            };
            // Simple append for now, can be enhanced to add new paragraphs
            const newContent = currentEntry.content + `<p>${text}</p>`;
            return {
                ...prev,
                [date]: {
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
        setChatSessions((prev)=>[
                newSession,
                ...prev
            ]);
        setCurrentSessionId(newSession.id);
    };
    const deleteSession = (id)=>{
        setChatSessions((prev)=>{
            const newSessions = prev.filter((s)=>s.id !== id);
            if (currentSessionId === id) {
                setCurrentSessionId(newSessions.length > 0 ? newSessions[0].id : null);
            }
            return newSessions;
        });
    };
    const selectSession = (id)=>{
        setCurrentSessionId(id);
    };
    const addMessageToSession = (sessionId, message)=>{
        setChatSessions((prev)=>prev.map((session)=>{
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
    const updateSessionTitle = (sessionId, title)=>{
        setChatSessions((prev)=>prev.map((s)=>s.id === sessionId ? {
                    ...s,
                    title
                } : s));
    };
    const markActionExecuted = (sessionId, actionId)=>{
        setChatSessions((prev)=>prev.map((session)=>{
                if (session.id === sessionId) {
                    return {
                        ...session,
                        executedActions: [
                            ...session.executedActions || [],
                            actionId
                        ]
                    };
                }
                return session;
            }));
    };
    const startTimer = ()=>setIsActive(true);
    const pauseTimer = ()=>setIsActive(false);
    const resetTimer = ()=>{
        setIsActive(false);
        setTimeLeft(timerMode === "work" ? workDuration * 60 : breakDuration * 60);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let interval;
        if (isActive && timeLeft > 0) {
            interval = setInterval(()=>{
                setTimeLeft((prev)=>prev - 1);
            }, 1000);
        } else if (timeLeft === 0) {
            setIsActive(false);
            if (timerMode === "work") {
                setCycles((prev)=>prev + 1);
                setTimerMode("break");
                setTimeLeft(breakDuration * 60);
            } else {
                setTimerMode("work");
                setTimeLeft(workDuration * 60);
            }
        }
        return ()=>clearInterval(interval);
    }, [
        isActive,
        timeLeft,
        timerMode,
        workDuration,
        breakDuration
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AppContext.Provider, {
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
        lineNumber: 402,
        columnNumber: 9
    }, this);
}
function useApp() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(AppContext);
    if (context === undefined) {
        throw new Error("useApp must be used within an AppProvider");
    }
    return context;
}
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/Downloads/Desktop-1/projects/life-coach/src/lib/utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Desktop-1/projects/life-coach/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Desktop-1/projects/life-coach/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}),
"[project]/Downloads/Desktop-1/projects/life-coach/src/components/Navigation.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Navigation",
    ()=>Navigation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Desktop-1/projects/life-coach/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Desktop-1/projects/life-coach/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Desktop-1/projects/life-coach/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Desktop-1/projects/life-coach/src/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_context__.i("[project]/Downloads/Desktop-1/projects/life-coach/node_modules/lucide-react/dist/esm/icons/house.js [app-ssr] (ecmascript) <export default as Home>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckSquare$3e$__ = __turbopack_context__.i("[project]/Downloads/Desktop-1/projects/life-coach/node_modules/lucide-react/dist/esm/icons/square-check-big.js [app-ssr] (ecmascript) <export default as CheckSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__ = __turbopack_context__.i("[project]/Downloads/Desktop-1/projects/life-coach/node_modules/lucide-react/dist/esm/icons/bot.js [app-ssr] (ecmascript) <export default as Bot>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$timer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Timer$3e$__ = __turbopack_context__.i("[project]/Downloads/Desktop-1/projects/life-coach/node_modules/lucide-react/dist/esm/icons/timer.js [app-ssr] (ecmascript) <export default as Timer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/Downloads/Desktop-1/projects/life-coach/node_modules/lucide-react/dist/esm/icons/settings.js [app-ssr] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/Downloads/Desktop-1/projects/life-coach/node_modules/lucide-react/dist/esm/icons/book-open.js [app-ssr] (ecmascript) <export default as BookOpen>");
"use client";
;
;
;
;
;
function Navigation() {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const links = [
        {
            href: "/",
            label: "Home",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"]
        },
        {
            href: "/todo",
            label: "To-Do",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckSquare$3e$__["CheckSquare"]
        },
        {
            href: "/journal",
            label: "Journal",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"]
        },
        {
            href: "/coach",
            label: "AI Coach",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__["Bot"]
        },
        {
            href: "/pomodoro",
            label: "Pomodoro",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$timer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Timer$3e$__["Timer"]
        },
        {
            href: "/settings",
            label: "Settings",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"]
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "fixed bottom-0 left-0 right-0 md:top-0 md:bottom-auto z-50 bg-background/80 backdrop-blur-lg border-t md:border-t-0 md:border-b border-border",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between h-16",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden md:block font-bold text-xl text-foreground tracking-tight",
                        children: "LifeCoach"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/Navigation.tsx",
                        lineNumber: 24,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-around w-full md:w-auto md:gap-8",
                        children: links.map((link)=>{
                            const Icon = link.icon;
                            const isActive = pathname === link.href;
                            const isSettings = link.href === "/settings";
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: link.href,
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex flex-col md:flex-row items-center gap-1 md:gap-2 p-2 rounded-lg transition-all duration-200", isActive ? "text-foreground font-semibold bg-secondary/80 shadow-sm" : "text-muted-foreground hover:text-foreground hover:bg-secondary/50 hover:scale-105"),
                                title: link.label,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/Navigation.tsx",
                                        lineNumber: 46,
                                        columnNumber: 37
                                    }, this),
                                    !isSettings && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs md:text-sm font-medium",
                                        children: link.label
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/Navigation.tsx",
                                        lineNumber: 47,
                                        columnNumber: 53
                                    }, this)
                                ]
                            }, link.href, true, {
                                fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/Navigation.tsx",
                                lineNumber: 35,
                                columnNumber: 33
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/Navigation.tsx",
                        lineNumber: 28,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/Navigation.tsx",
                lineNumber: 23,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/Navigation.tsx",
            lineNumber: 22,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/Navigation.tsx",
        lineNumber: 21,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1c410685._.js.map