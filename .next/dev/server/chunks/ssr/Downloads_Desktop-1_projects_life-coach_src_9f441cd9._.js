module.exports = [
"[project]/Downloads/Desktop-1/projects/life-coach/src/lib/gemini.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "analyzeScreenshot",
    ()=>analyzeScreenshot,
    "getCoachResponse",
    ()=>getCoachResponse
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f40$google$2f$generative$2d$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Desktop-1/projects/life-coach/node_modules/@google/generative-ai/dist/index.mjs [app-ssr] (ecmascript)");
;
const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const genAI = apiKey ? new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f40$google$2f$generative$2d$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GoogleGenerativeAI"](apiKey) : null;
async function getCoachResponse(history, context) {
    if (!genAI) {
        return "I'm not connected to my brain yet! Please set the NEXT_PUBLIC_GEMINI_API_KEY environment variable.";
    }
    const model = genAI.getGenerativeModel({
        model: "gemini-3-pro-preview"
    });
    const systemPrompt = `
    You are a Personal AI Life Coach. Your goal is to help the user stay productive, motivated, and balanced.
    
    User Profile:
    - Name: ${context.userProfile.name || "Friend"}
    - Bio: ${context.userProfile.bio || "No bio provided."}
    - Coaching Style Preference: ${context.userProfile.coachingStyle}

    Current Context:
    - User Mood: ${context.mood || "Unknown"}
    - Active Tasks: ${context.tasks.filter((t)=>!t.completed).map((t)=>`- ${t.title} (ID: ${t.id})`).join("\n") || "None"}
    - Completed Tasks: ${context.tasks.filter((t)=>t.completed).map((t)=>`- ${t.title} (ID: ${t.id})`).join("\n") || "None"}

    Guidelines:
    1. Address the user by name if available.
    2. Adapt your tone to the requested Coaching Style:
       - Supportive: Gentle, empathetic, encouraging.
       - Tough Love: Direct, no excuses, pushes for action.
       - Analytical: Logical, data-focused, strategic.
       - Humorous: Witty, light-hearted, fun.
       - Zen: Calm, mindful, balanced.
    3. Use the user's bio to make advice relevant to their life/goals.
    4. If the user is feeling low (sad, stressed), prioritize empathy over "tough love" unless they specifically asked for it.
    5. Keep responses concise and conversational.
    6. You are aesthetic, premium, and supportive.
    7. CRITICAL: You must strictly embody the selected Coaching Style in your tone and choice of words.
    8. If the user asks to set a timer or you suggest a focus session, use the tag [SET_TIMER: <minutes>] at the end of your message.
    9. To ADD a task, use: [ADD_TASK: <title> | <priority>]. Priority can be 'high', 'medium', 'low'. Example: [ADD_TASK: Buy milk | medium]
    10. To COMPLETE a task, use: [COMPLETE_TASK: <id>]. Example: [COMPLETE_TASK: 123-abc]
    11. To UPDATE/EDIT a task, use: [UPDATE_TASK: <id>]. Example: [UPDATE_TASK: 123-abc]
    12. To UPDATE the Daily Journal, use: [JOURNAL_APPEND: <text>]. This appends text to today's journal entry. Use this when the user tells you about their day or reflects on something. Summarize their input or capture the key moment. Example: [JOURNAL_APPEND: Went for a 5km run and felt great.]
  `;
    try {
        // Convert internal message format to Gemini history format
        // Exclude the very last message as that is the 'prompt' for sendMessage
        const lastMessage = history[history.length - 1];
        const previousMessages = history.slice(0, -1);
        const chat = model.startChat({
            history: [
                {
                    role: "user",
                    parts: [
                        {
                            text: systemPrompt
                        }
                    ]
                },
                {
                    role: "model",
                    parts: [
                        {
                            text: "Understood. I am ready to be your personal life coach."
                        }
                    ]
                },
                ...previousMessages.map((msg)=>({
                        role: msg.role === "user" ? "user" : "model",
                        parts: [
                            {
                                text: msg.content
                            }
                        ]
                    }))
            ]
        });
        const result = await chat.sendMessage(lastMessage.content);
        const response = result.response;
        return response.text();
    } catch (error) {
        console.error("Gemini API Error:", error);
        return "I'm having trouble connecting right now. Please try again later.";
    }
}
async function analyzeScreenshot(base64Image, currentTask) {
    if (!genAI) return {
        isDistracted: false,
        advice: "AI not connected."
    };
    // Use Flash for speed with vision
    const model = genAI.getGenerativeModel({
        model: "gemini-2.5-flash"
    });
    const prompt = `
    You are a severe but helpful productivity guardian.
    The user is supposed to be working on: "${currentTask}".
    Attached is a screenshot of their screen.
    Analyze it:
    1. Are they working on the task? (Coding, Researching, Writing related to the task) -> NOT distracted.
    2. Are they on social media (Twitter, Reddit, YouTube unrelated to task)? -> DISTRACTED.
    3. Are they watching a movie or playing a game? -> DISTRACTED.
    
    If unsure, assume they are working.
    
    Return JSON ONLY:
    {
        "isDistracted": boolean,
        "reason": "Brief, punchy reason why.",
        "advice": "Short command to get back on track."
    }
    `;
    try {
        // base64Image comes as "data:image/jpeg;base64,..." usually, we need to strip the header if Gemini SDK needs raw base64.
        const cleanBase64 = base64Image.split(',')[1] || base64Image;
        const result = await model.generateContent([
            prompt,
            {
                inlineData: {
                    data: cleanBase64,
                    mimeType: "image/jpeg"
                }
            }
        ]);
        const text = result.response.text();
        // Robust JSON extraction
        let jsonStr = text;
        const firstOpen = text.indexOf('{');
        const lastClose = text.lastIndexOf('}');
        if (firstOpen !== -1 && lastClose !== -1) {
            jsonStr = text.substring(firstOpen, lastClose + 1);
        }
        try {
            return JSON.parse(jsonStr);
        } catch (e) {
            console.error("Failed to parse Gemini JSON:", jsonStr);
            return {
                isDistracted: false,
                reason: "Error parsing AI response"
            };
        }
    } catch (e) {
        console.error("Vision Analysis Error:", e);
        return {
            isDistracted: false,
            reason: "Error analyzing",
            advice: ""
        };
    }
}
}),
"[project]/Downloads/Desktop-1/projects/life-coach/src/components/ui/Button.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Desktop-1/projects/life-coach/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Desktop-1/projects/life-coach/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Desktop-1/projects/life-coach/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Desktop-1/projects/life-coach/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Desktop-1/projects/life-coach/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline",
            glass: "bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/10"
        },
        size: {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-11 rounded-md px-8",
            icon: "h-10 w-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
const Button = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, variant, size, asChild = false, ...props }, ref)=>{
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/ui/Button.tsx",
        lineNumber: 46,
        columnNumber: 13
    }, ("TURBOPACK compile-time value", void 0));
});
Button.displayName = "Button";
;
}),
"[project]/Downloads/Desktop-1/projects/life-coach/src/components/ui/Input.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Desktop-1/projects/life-coach/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Desktop-1/projects/life-coach/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Desktop-1/projects/life-coach/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
const Input = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, type, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex h-10 w-full rounded-xl border border-input bg-background/50 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 backdrop-blur-sm", className),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/ui/Input.tsx",
        lineNumber: 10,
        columnNumber: 13
    }, ("TURBOPACK compile-time value", void 0));
});
Input.displayName = "Input";
;
}),
"[project]/Downloads/Desktop-1/projects/life-coach/src/components/ChatSidebar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChatSidebar",
    ()=>ChatSidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Desktop-1/projects/life-coach/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$src$2f$context$2f$AppContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Desktop-1/projects/life-coach/src/context/AppContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Desktop-1/projects/life-coach/src/components/ui/Button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/Downloads/Desktop-1/projects/life-coach/node_modules/lucide-react/dist/esm/icons/plus.js [app-ssr] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__ = __turbopack_context__.i("[project]/Downloads/Desktop-1/projects/life-coach/node_modules/lucide-react/dist/esm/icons/message-square.js [app-ssr] (ecmascript) <export default as MessageSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/Downloads/Desktop-1/projects/life-coach/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-ssr] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Desktop-1/projects/life-coach/src/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Desktop-1/projects/life-coach/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Desktop-1/projects/life-coach/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Desktop-1/projects/life-coach/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function ChatSidebar() {
    const { chatSessions, currentSessionId, createNewSession, deleteSession, selectSession } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$src$2f$context$2f$AppContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useApp"])();
    const [hoveredSession, setHoveredSession] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col h-full bg-card/30 border-r border-border/40 w-64 flex-shrink-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                    onClick: createNewSession,
                    className: "w-full justify-start gap-2 bg-primary/10 text-primary hover:bg-primary/20 border border-primary/20",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                            className: "w-4 h-4"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/ChatSidebar.tsx",
                            lineNumber: 21,
                            columnNumber: 21
                        }, this),
                        " New Chat"
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/ChatSidebar.tsx",
                    lineNumber: 17,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/ChatSidebar.tsx",
                lineNumber: 16,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-y-auto px-2 space-y-1 scrollbar-thin scrollbar-thumb-border/50",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-2 py-1.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider",
                        children: "Recent"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/ChatSidebar.tsx",
                        lineNumber: 26,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                        initial: false,
                        children: chatSessions.map((session)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    x: -10
                                },
                                animate: {
                                    opacity: 1,
                                    x: 0
                                },
                                exit: {
                                    opacity: 0,
                                    height: 0
                                },
                                className: "relative group",
                                onMouseEnter: ()=>setHoveredSession(session.id),
                                onMouseLeave: ()=>setHoveredSession(null),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>selectSession(session.id),
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("w-full text-left px-3 py-2.5 rounded-lg text-sm transition-all flex items-center gap-3", currentSessionId === session.id ? "bg-secondary text-foreground font-medium shadow-sm" : "text-muted-foreground hover:bg-secondary/50 hover:text-foreground"),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"], {
                                                className: "w-4 h-4 flex-shrink-0"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/ChatSidebar.tsx",
                                                lineNumber: 49,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "truncate flex-1",
                                                children: session.title
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/ChatSidebar.tsx",
                                                lineNumber: 50,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/ChatSidebar.tsx",
                                        lineNumber: 40,
                                        columnNumber: 29
                                    }, this),
                                    (hoveredSession === session.id || currentSessionId === session.id) && chatSessions.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute right-1 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "ghost",
                                            size: "icon",
                                            onClick: (e)=>{
                                                e.stopPropagation();
                                                deleteSession(session.id);
                                            },
                                            className: "h-7 w-7 text-muted-foreground hover:text-destructive hover:bg-destructive/10",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                className: "w-3.5 h-3.5"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/ChatSidebar.tsx",
                                                lineNumber: 65,
                                                columnNumber: 41
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/ChatSidebar.tsx",
                                            lineNumber: 56,
                                            columnNumber: 37
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/ChatSidebar.tsx",
                                        lineNumber: 55,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, session.id, true, {
                                fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/ChatSidebar.tsx",
                                lineNumber: 31,
                                columnNumber: 25
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/ChatSidebar.tsx",
                        lineNumber: 29,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/ChatSidebar.tsx",
                lineNumber: 25,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 border-t border-border/40",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-xs text-center text-muted-foreground",
                    children: "LifeCoach"
                }, void 0, false, {
                    fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/ChatSidebar.tsx",
                    lineNumber: 75,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/ChatSidebar.tsx",
                lineNumber: 74,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/ChatSidebar.tsx",
        lineNumber: 15,
        columnNumber: 9
    }, this);
}
}),
"[project]/Downloads/Desktop-1/projects/life-coach/src/components/CoachChat.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CoachChat",
    ()=>CoachChat
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Desktop-1/projects/life-coach/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Desktop-1/projects/life-coach/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Desktop-1/projects/life-coach/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$src$2f$context$2f$AppContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Desktop-1/projects/life-coach/src/context/AppContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$src$2f$lib$2f$gemini$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Desktop-1/projects/life-coach/src/lib/gemini.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Desktop-1/projects/life-coach/src/components/ui/Button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$src$2f$components$2f$ui$2f$Input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Desktop-1/projects/life-coach/src/components/ui/Input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/Downloads/Desktop-1/projects/life-coach/node_modules/lucide-react/dist/esm/icons/send.js [app-ssr] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/Downloads/Desktop-1/projects/life-coach/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-ssr] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/Downloads/Desktop-1/projects/life-coach/node_modules/lucide-react/dist/esm/icons/user.js [app-ssr] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$paperclip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Paperclip$3e$__ = __turbopack_context__.i("[project]/Downloads/Desktop-1/projects/life-coach/node_modules/lucide-react/dist/esm/icons/paperclip.js [app-ssr] (ecmascript) <export default as Paperclip>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__ = __turbopack_context__.i("[project]/Downloads/Desktop-1/projects/life-coach/node_modules/lucide-react/dist/esm/icons/mic.js [app-ssr] (ecmascript) <export default as Mic>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Downloads/Desktop-1/projects/life-coach/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/Downloads/Desktop-1/projects/life-coach/node_modules/lucide-react/dist/esm/icons/file-text.js [app-ssr] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__ = __turbopack_context__.i("[project]/Downloads/Desktop-1/projects/life-coach/node_modules/lucide-react/dist/esm/icons/image.js [app-ssr] (ecmascript) <export default as Image>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$timer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Timer$3e$__ = __turbopack_context__.i("[project]/Downloads/Desktop-1/projects/life-coach/node_modules/lucide-react/dist/esm/icons/timer.js [app-ssr] (ecmascript) <export default as Timer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/Downloads/Desktop-1/projects/life-coach/node_modules/lucide-react/dist/esm/icons/plus.js [app-ssr] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/Downloads/Desktop-1/projects/life-coach/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$panel$2d$left$2d$close$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PanelLeftClose$3e$__ = __turbopack_context__.i("[project]/Downloads/Desktop-1/projects/life-coach/node_modules/lucide-react/dist/esm/icons/panel-left-close.js [app-ssr] (ecmascript) <export default as PanelLeftClose>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$panel$2d$left$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PanelLeftOpen$3e$__ = __turbopack_context__.i("[project]/Downloads/Desktop-1/projects/life-coach/node_modules/lucide-react/dist/esm/icons/panel-left-open.js [app-ssr] (ecmascript) <export default as PanelLeftOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/Downloads/Desktop-1/projects/life-coach/node_modules/lucide-react/dist/esm/icons/book-open.js [app-ssr] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Desktop-1/projects/life-coach/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Desktop-1/projects/life-coach/src/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$src$2f$components$2f$ChatSidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Desktop-1/projects/life-coach/src/components/ChatSidebar.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
;
function CoachChat() {
    const { mood, tasks, userProfile, setWorkDuration, setTimerMode, setTimeLeft, setIsActive, addTask, toggleTask, chatSessions, currentSessionId, addMessageToSession, markActionExecuted, appendJournalEntry } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$src$2f$context$2f$AppContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useApp"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [input, setInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isRecording, setIsRecording] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [attachments, setAttachments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [showSidebar, setShowSidebar] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true); // Mobile toggle if needed, or desktop collapsible
    const messagesEndRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mediaRecorderRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Get current session messages
    const currentSession = chatSessions.find((s)=>s.id === currentSessionId);
    const messages = currentSession?.messages || [];
    const executedActions = new Set(currentSession?.executedActions || []);
    const scrollToBottom = ()=>{
        messagesEndRef.current?.scrollIntoView({
            behavior: "smooth"
        });
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        scrollToBottom();
    }, [
        messages,
        currentSessionId
    ]);
    const handleFileSelect = (e)=>{
        if (e.target.files) {
            setAttachments((prev)=>[
                    ...prev,
                    ...Array.from(e.target.files)
                ]);
        }
    };
    const removeAttachment = (index)=>{
        setAttachments((prev)=>prev.filter((_, i)=>i !== index));
    };
    const toggleRecording = async ()=>{
        if (isRecording) {
            mediaRecorderRef.current?.stop();
            setIsRecording(false);
        } else {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({
                    audio: true
                });
                const mediaRecorder = new MediaRecorder(stream);
                mediaRecorderRef.current = mediaRecorder;
                const audioChunks = [];
                mediaRecorder.ondataavailable = (event)=>{
                    audioChunks.push(event.data);
                };
                mediaRecorder.onstop = ()=>{
                    const audioBlob = new Blob(audioChunks, {
                        type: 'audio/wav'
                    });
                    setInput((prev)=>prev + " [Voice Note: I'm feeling a bit overwhelmed today...] ");
                };
                mediaRecorder.start();
                setIsRecording(true);
            } catch (err) {
                console.error("Error accessing microphone:", err);
                alert("Could not access microphone.");
            }
        }
    };
    const handleSetTimer = (mins)=>{
        setWorkDuration(mins);
        setTimerMode("work");
        setTimeLeft(mins * 60);
        setIsActive(true);
        router.push("/pomodoro");
    };
    const handleAppendJournal = (text)=>{
        const today = new Date().toISOString().split('T')[0];
        appendJournalEntry(today, text);
    };
    const handleSend = async (e)=>{
        e.preventDefault();
        if (!input.trim() && attachments.length === 0 || isLoading || !currentSessionId) return;
        const userMessage = {
            id: crypto.randomUUID(),
            role: "user",
            content: input,
            attachments: attachments.map((f)=>({
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
            const history = [
                ...messages,
                userMessage
            ].map((m)=>({
                    role: m.role,
                    content: m.content
                }));
            const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$src$2f$lib$2f$gemini$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCoachResponse"])(history, {
                mood,
                tasks,
                userProfile
            });
            const botMessage = {
                id: crypto.randomUUID(),
                role: "assistant",
                content: response,
                timestamp: Date.now()
            };
            addMessageToSession(currentSessionId, botMessage);
        } catch (error) {
            console.error("Failed to get response", error);
        } finally{
            setIsLoading(false);
        }
    };
    const handleAction = (actionKey, callback)=>{
        if (currentSessionId) {
            markActionExecuted(currentSessionId, actionKey);
            callback();
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-full w-full bg-background overflow-hidden rounded-2xl border border-border/40 shadow-xl relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("hidden md:block transition-all duration-300 border-r border-border/40 bg-card/20", showSidebar ? "w-64" : "w-0 overflow-hidden"),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$src$2f$components$2f$ChatSidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ChatSidebar"], {}, void 0, false, {
                    fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/CoachChat.tsx",
                    lineNumber: 155,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/CoachChat.tsx",
                lineNumber: 154,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 flex flex-col h-full relative bg-background",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-4 left-4 z-20",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "ghost",
                            size: "icon",
                            onClick: ()=>setShowSidebar(!showSidebar),
                            className: "text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-lg",
                            title: showSidebar ? "Close Sidebar" : "Open Sidebar",
                            children: showSidebar ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$panel$2d$left$2d$close$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PanelLeftClose$3e$__["PanelLeftClose"], {
                                className: "w-5 h-5"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/CoachChat.tsx",
                                lineNumber: 169,
                                columnNumber: 40
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$panel$2d$left$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PanelLeftOpen$3e$__["PanelLeftOpen"], {
                                className: "w-5 h-5"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/CoachChat.tsx",
                                lineNumber: 169,
                                columnNumber: 81
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/CoachChat.tsx",
                            lineNumber: 162,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/CoachChat.tsx",
                        lineNumber: 161,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 overflow-y-auto p-4 md:p-8 space-y-8 scroll-smooth",
                        children: [
                            messages.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-full flex flex-col items-center justify-center text-center space-y-6 max-w-md mx-auto",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center shadow-sm",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                            className: "w-8 h-8 text-primary"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/CoachChat.tsx",
                                            lineNumber: 178,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/CoachChat.tsx",
                                        lineNumber: 177,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-2xl font-semibold tracking-tight",
                                                children: "Where knowledge begins"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/CoachChat.tsx",
                                                lineNumber: 181,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-muted-foreground",
                                                children: "Ask me anything. I'm here to help you grow."
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/CoachChat.tsx",
                                                lineNumber: 182,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/CoachChat.tsx",
                                        lineNumber: 180,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/CoachChat.tsx",
                                lineNumber: 176,
                                columnNumber: 25
                            }, this) : messages.map((msg)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0,
                                        y: 10
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex gap-4 max-w-3xl mx-auto w-full group", msg.role === "user" ? "flex-row-reverse" : "flex-row"),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1", msg.role === "user" ? "bg-secondary text-foreground" : "text-primary"),
                                            children: msg.role === "user" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                className: "w-5 h-5"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/CoachChat.tsx",
                                                lineNumber: 197,
                                                columnNumber: 60
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                                className: "w-6 h-6"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/CoachChat.tsx",
                                                lineNumber: 197,
                                                columnNumber: 91
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/CoachChat.tsx",
                                            lineNumber: 193,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex flex-col gap-1 max-w-[85%] md:max-w-[90%]", msg.role === "user" ? "items-end" : "items-start"),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2 mb-1 px-1",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs font-bold text-foreground",
                                                        children: msg.role === "user" ? "You" : "LifeCoach"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/CoachChat.tsx",
                                                        lineNumber: 202,
                                                        columnNumber: 41
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/CoachChat.tsx",
                                                    lineNumber: 201,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-base leading-relaxed", msg.role === "user" ? "bg-secondary/50 px-4 py-3 rounded-2xl rounded-tr-sm text-foreground" : "text-foreground/90 px-1" // AI text is cleaner, less "bubble"
                                                    ),
                                                    children: msg.content.split(/(\[(?:SET_TIMER|ADD_TASK|COMPLETE_TASK|UPDATE_TASK|JOURNAL_APPEND): [^\]]+\])/).map((part, i)=>{
                                                        const actionKey = `${msg.id}-${i}`;
                                                        const isExecuted = executedActions.has(actionKey);
                                                        if (part.match(/\[SET_TIMER: \d+\]/)) {
                                                            const mins = parseInt(part.match(/\d+/)[0]);
                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "my-3",
                                                                children: isExecuted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-xs text-muted-foreground flex items-center gap-1 italic bg-secondary/20 p-2 rounded border border-border/30 w-fit",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                            className: "w-3 h-3"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/CoachChat.tsx",
                                                                            lineNumber: 224,
                                                                            columnNumber: 65
                                                                        }, this),
                                                                        " Timer set for ",
                                                                        mins,
                                                                        " mins"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/CoachChat.tsx",
                                                                    lineNumber: 223,
                                                                    columnNumber: 61
                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                                    onClick: ()=>handleAction(actionKey, ()=>handleSetTimer(mins)),
                                                                    className: "bg-primary/10 text-primary hover:bg-primary/20 border border-primary/20 shadow-sm h-8 text-xs",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$timer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Timer$3e$__["Timer"], {
                                                                            className: "w-3 h-3 mr-2"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/CoachChat.tsx",
                                                                            lineNumber: 231,
                                                                            columnNumber: 65
                                                                        }, this),
                                                                        "Set Timer (",
                                                                        mins,
                                                                        "m)"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/CoachChat.tsx",
                                                                    lineNumber: 227,
                                                                    columnNumber: 61
                                                                }, this)
                                                            }, i, false, {
                                                                fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/CoachChat.tsx",
                                                                lineNumber: 221,
                                                                columnNumber: 53
                                                            }, this);
                                                        } else if (part.match(/\[ADD_TASK: ([^|]+) \| ([^\]]+)\]/)) {
                                                            const match = part.match(/\[ADD_TASK: ([^|]+) \| ([^\]]+)\]/);
                                                            if (match) {
                                                                const title = match[1].trim();
                                                                const priority = match[2].trim();
                                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "my-3",
                                                                    children: isExecuted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-xs text-muted-foreground flex items-center gap-1 italic bg-green-500/5 text-green-600 p-2 rounded border border-green-500/10 w-fit",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                                className: "w-3 h-3"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/CoachChat.tsx",
                                                                                lineNumber: 246,
                                                                                columnNumber: 69
                                                                            }, this),
                                                                            ' Added: "',
                                                                            title,
                                                                            '"'
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/CoachChat.tsx",
                                                                        lineNumber: 245,
                                                                        columnNumber: 65
                                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                                        onClick: ()=>handleAction(actionKey, ()=>addTask(title, priority)),
                                                                        className: "bg-green-600/10 text-green-600 hover:bg-green-600/20 border border-green-600/20 shadow-sm h-8 text-xs",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                                                className: "w-3 h-3 mr-2"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/CoachChat.tsx",
                                                                                lineNumber: 253,
                                                                                columnNumber: 69
                                                                            }, this),
                                                                            "Add Task"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/CoachChat.tsx",
                                                                        lineNumber: 249,
                                                                        columnNumber: 65
                                                                    }, this)
                                                                }, i, false, {
                                                                    fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/CoachChat.tsx",
                                                                    lineNumber: 243,
                                                                    columnNumber: 57
                                                                }, this);
                                                            }
                                                        } else if (part.match(/\[JOURNAL_APPEND: ([^\]]+)\]/)) {
                                                            const match = part.match(/\[JOURNAL_APPEND: ([^\]]+)\]/);
                                                            if (match) {
                                                                const text = match[1].trim();
                                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "my-3",
                                                                    children: isExecuted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-xs text-muted-foreground flex items-center gap-1 italic bg-blue-500/5 text-blue-600 p-2 rounded border border-blue-500/10 w-fit",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                                className: "w-3 h-3"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/CoachChat.tsx",
                                                                                lineNumber: 268,
                                                                                columnNumber: 69
                                                                            }, this),
                                                                            " Added to Journal"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/CoachChat.tsx",
                                                                        lineNumber: 267,
                                                                        columnNumber: 65
                                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                                        onClick: ()=>handleAction(actionKey, ()=>handleAppendJournal(text)),
                                                                        className: "bg-blue-600/10 text-blue-600 hover:bg-blue-600/20 border border-blue-600/20 shadow-sm h-8 text-xs",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                                                                                className: "w-3 h-3 mr-2"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/CoachChat.tsx",
                                                                                lineNumber: 275,
                                                                                columnNumber: 69
                                                                            }, this),
                                                                            "Add to Journal"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/CoachChat.tsx",
                                                                        lineNumber: 271,
                                                                        columnNumber: 65
                                                                    }, this)
                                                                }, i, false, {
                                                                    fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/CoachChat.tsx",
                                                                    lineNumber: 265,
                                                                    columnNumber: 57
                                                                }, this);
                                                            }
                                                        } else if (part.match(/\[COMPLETE_TASK: ([^\]]+)\]/)) {
                                                            const match = part.match(/\[COMPLETE_TASK: ([^\]]+)\]/);
                                                            if (match) {
                                                                const taskId = match[1].trim();
                                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "my-3",
                                                                    children: isExecuted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-xs text-muted-foreground flex items-center gap-1 italic bg-primary/5 text-primary p-2 rounded border border-primary/10 w-fit",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                                className: "w-3 h-3"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/CoachChat.tsx",
                                                                                lineNumber: 290,
                                                                                columnNumber: 69
                                                                            }, this),
                                                                            " Task Completed"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/CoachChat.tsx",
                                                                        lineNumber: 289,
                                                                        columnNumber: 65
                                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                                        onClick: ()=>handleAction(actionKey, ()=>toggleTask(taskId)),
                                                                        className: "bg-primary/10 text-primary hover:bg-primary/20 border border-primary/20 shadow-sm h-8 text-xs",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                                className: "w-3 h-3 mr-2"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/CoachChat.tsx",
                                                                                lineNumber: 297,
                                                                                columnNumber: 69
                                                                            }, this),
                                                                            "Complete Task"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/CoachChat.tsx",
                                                                        lineNumber: 293,
                                                                        columnNumber: 65
                                                                    }, this)
                                                                }, i, false, {
                                                                    fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/CoachChat.tsx",
                                                                    lineNumber: 287,
                                                                    columnNumber: 57
                                                                }, this);
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
                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: part
                                                        }, i, false, {
                                                            fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/CoachChat.tsx",
                                                            lineNumber: 316,
                                                            columnNumber: 52
                                                        }, this);
                                                    })
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/CoachChat.tsx",
                                                    lineNumber: 206,
                                                    columnNumber: 37
                                                }, this),
                                                msg.attachments && msg.attachments.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex flex-wrap gap-2 mt-2", msg.role === "user" ? "justify-end" : "justify-start"),
                                                    children: msg.attachments.map((att, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2 text-xs bg-secondary/30 p-2 rounded-lg border border-border/50",
                                                            children: [
                                                                att.type === "image" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__["Image"], {
                                                                    className: "w-3 h-3"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/CoachChat.tsx",
                                                                    lineNumber: 324,
                                                                    columnNumber: 77
                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                                    className: "w-3 h-3"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/CoachChat.tsx",
                                                                    lineNumber: 324,
                                                                    columnNumber: 113
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "truncate max-w-[100px]",
                                                                    children: att.name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/CoachChat.tsx",
                                                                    lineNumber: 325,
                                                                    columnNumber: 53
                                                                }, this)
                                                            ]
                                                        }, i, true, {
                                                            fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/CoachChat.tsx",
                                                            lineNumber: 323,
                                                            columnNumber: 49
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/CoachChat.tsx",
                                                    lineNumber: 321,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/CoachChat.tsx",
                                            lineNumber: 200,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, msg.id, true, {
                                    fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/CoachChat.tsx",
                                    lineNumber: 187,
                                    columnNumber: 29
                                }, this)),
                            isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0
                                },
                                animate: {
                                    opacity: 1
                                },
                                className: "flex gap-4 max-w-3xl mx-auto w-full",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-8 h-8 flex items-center justify-center flex-shrink-0",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                            className: "w-6 h-6 text-primary animate-pulse"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/CoachChat.tsx",
                                            lineNumber: 341,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/CoachChat.tsx",
                                        lineNumber: 340,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-1 pt-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-1.5 h-1.5 bg-foreground/40 rounded-full animate-bounce"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/CoachChat.tsx",
                                                lineNumber: 344,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-1.5 h-1.5 bg-foreground/40 rounded-full animate-bounce delay-75"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/CoachChat.tsx",
                                                lineNumber: 345,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-1.5 h-1.5 bg-foreground/40 rounded-full animate-bounce delay-150"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/CoachChat.tsx",
                                                lineNumber: 346,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/CoachChat.tsx",
                                        lineNumber: 343,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/CoachChat.tsx",
                                lineNumber: 335,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: messagesEndRef
                            }, void 0, false, {
                                fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/CoachChat.tsx",
                                lineNumber: 350,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/CoachChat.tsx",
                        lineNumber: 174,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 bg-background/80 backdrop-blur-md border-t border-border/40",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-3xl mx-auto w-full",
                            children: [
                                attachments.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0,
                                        y: 10
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    className: "flex gap-2 mb-3 overflow-x-auto pb-2",
                                    children: attachments.map((file, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative flex items-center gap-2 bg-secondary/20 px-3 py-1.5 rounded-full text-xs border border-secondary/30 shadow-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "truncate max-w-[150px] font-medium",
                                                    children: file.name
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/CoachChat.tsx",
                                                    lineNumber: 364,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>removeAttachment(i),
                                                    className: "hover:text-destructive transition-colors p-0.5 rounded-full hover:bg-destructive/10",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                        className: "w-3 h-3"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/CoachChat.tsx",
                                                        lineNumber: 366,
                                                        columnNumber: 45
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/CoachChat.tsx",
                                                    lineNumber: 365,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/CoachChat.tsx",
                                            lineNumber: 363,
                                            columnNumber: 37
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/CoachChat.tsx",
                                    lineNumber: 357,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                    onSubmit: handleSend,
                                    className: "flex gap-2 items-center relative bg-secondary/30 p-2 rounded-full border border-border/50 focus-within:border-primary/30 focus-within:bg-secondary/40 transition-all shadow-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                            type: "button",
                                            variant: "ghost",
                                            size: "icon",
                                            onClick: ()=>fileInputRef.current?.click(),
                                            className: "text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-full h-9 w-9 ml-1",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$paperclip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Paperclip$3e$__["Paperclip"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/CoachChat.tsx",
                                                lineNumber: 380,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/CoachChat.tsx",
                                            lineNumber: 373,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "file",
                                            multiple: true,
                                            ref: fileInputRef,
                                            className: "hidden",
                                            onChange: handleFileSelect,
                                            accept: "image/*,.pdf,.doc,.docx"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/CoachChat.tsx",
                                            lineNumber: 382,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$src$2f$components$2f$ui$2f$Input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                            value: input,
                                            onChange: (e)=>setInput(e.target.value),
                                            placeholder: isRecording ? "Listening..." : "Ask anything...",
                                            disabled: isLoading || isRecording,
                                            className: "border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 px-2 h-10 text-base flex-1 placeholder:text-muted-foreground/70"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/CoachChat.tsx",
                                            lineNumber: 391,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-1 mr-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                    type: "button",
                                                    variant: "ghost",
                                                    size: "icon",
                                                    onClick: toggleRecording,
                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("h-9 w-9 rounded-full transition-all", isRecording ? "text-destructive hover:text-destructive hover:bg-destructive/10 animate-pulse" : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"),
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__["Mic"], {
                                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("w-4 h-4", isRecording && "fill-current")
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/CoachChat.tsx",
                                                        lineNumber: 412,
                                                        columnNumber: 37
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/CoachChat.tsx",
                                                    lineNumber: 400,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                    type: "submit",
                                                    size: "icon",
                                                    disabled: isLoading || !input.trim() && attachments.length === 0,
                                                    className: "h-9 w-9 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm transition-all",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/CoachChat.tsx",
                                                        lineNumber: 420,
                                                        columnNumber: 37
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/CoachChat.tsx",
                                                    lineNumber: 414,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/CoachChat.tsx",
                                            lineNumber: 399,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/CoachChat.tsx",
                                    lineNumber: 372,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center mt-2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[10px] text-muted-foreground/50 font-medium",
                                        children: "LifeCoach can make mistakes. Check important info."
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/CoachChat.tsx",
                                        lineNumber: 425,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/CoachChat.tsx",
                                    lineNumber: 424,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/CoachChat.tsx",
                            lineNumber: 355,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/CoachChat.tsx",
                        lineNumber: 354,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/CoachChat.tsx",
                lineNumber: 159,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/CoachChat.tsx",
        lineNumber: 152,
        columnNumber: 9
    }, this);
}
}),
"[project]/Downloads/Desktop-1/projects/life-coach/src/components/ui/Card.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Desktop-1/projects/life-coach/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Desktop-1/projects/life-coach/src/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Desktop-1/projects/life-coach/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
;
const Card = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("glass-card rounded-2xl p-6 text-card-foreground shadow-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/ui/Card.tsx",
        lineNumber: 6,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0)));
Card.displayName = "Card";
;
}),
"[project]/Downloads/Desktop-1/projects/life-coach/src/components/MoodTracker.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MoodTracker",
    ()=>MoodTracker
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Desktop-1/projects/life-coach/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$src$2f$context$2f$AppContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Desktop-1/projects/life-coach/src/context/AppContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$src$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Desktop-1/projects/life-coach/src/components/ui/Card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Desktop-1/projects/life-coach/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smile$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Smile$3e$__ = __turbopack_context__.i("[project]/Downloads/Desktop-1/projects/life-coach/node_modules/lucide-react/dist/esm/icons/smile.js [app-ssr] (ecmascript) <export default as Smile>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$frown$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Frown$3e$__ = __turbopack_context__.i("[project]/Downloads/Desktop-1/projects/life-coach/node_modules/lucide-react/dist/esm/icons/frown.js [app-ssr] (ecmascript) <export default as Frown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$meh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Meh$3e$__ = __turbopack_context__.i("[project]/Downloads/Desktop-1/projects/life-coach/node_modules/lucide-react/dist/esm/icons/meh.js [app-ssr] (ecmascript) <export default as Meh>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/Downloads/Desktop-1/projects/life-coach/node_modules/lucide-react/dist/esm/icons/zap.js [app-ssr] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2d$rain$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CloudRain$3e$__ = __turbopack_context__.i("[project]/Downloads/Desktop-1/projects/life-coach/node_modules/lucide-react/dist/esm/icons/cloud-rain.js [app-ssr] (ecmascript) <export default as CloudRain>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Desktop-1/projects/life-coach/src/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
const moods = [
    {
        value: "happy",
        label: "Happy",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smile$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Smile$3e$__["Smile"],
        color: "text-yellow-400"
    },
    {
        value: "productive",
        label: "Productive",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"],
        color: "text-orange-400"
    },
    {
        value: "neutral",
        label: "Neutral",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$meh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Meh$3e$__["Meh"],
        color: "text-blue-400"
    },
    {
        value: "stressed",
        label: "Stressed",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2d$rain$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CloudRain$3e$__["CloudRain"],
        color: "text-purple-400"
    },
    {
        value: "sad",
        label: "Sad",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$frown$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Frown$3e$__["Frown"],
        color: "text-blue-600"
    }
];
function MoodTracker() {
    const { mood, setMood } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$src$2f$context$2f$AppContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useApp"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$src$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
        className: "w-full max-w-md mx-auto border-border/50 shadow-sm",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-2xl font-bold mb-4 text-center text-foreground tracking-tight",
                children: "How are you feeling today?"
            }, void 0, false, {
                fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/MoodTracker.tsx",
                lineNumber: 22,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap justify-center gap-3",
                children: moods.map((m)=>{
                    const Icon = m.icon;
                    const isSelected = mood === m.value;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                        whileHover: {
                            scale: 1.05
                        },
                        whileTap: {
                            scale: 0.95
                        },
                        onClick: ()=>setMood(m.value),
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex flex-col items-center gap-2 p-3 rounded-xl transition-all duration-200 min-w-[70px]", isSelected ? "bg-secondary ring-1 ring-foreground shadow-sm" : "hover:bg-secondary/50"),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("w-6 h-6 transition-colors", isSelected ? "text-foreground" : "text-muted-foreground")
                            }, void 0, false, {
                                fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/MoodTracker.tsx",
                                lineNumber: 43,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-xs font-medium", isSelected ? "text-foreground" : "text-muted-foreground"),
                                children: m.label
                            }, void 0, false, {
                                fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/MoodTracker.tsx",
                                lineNumber: 49,
                                columnNumber: 29
                            }, this)
                        ]
                    }, m.value, true, {
                        fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/MoodTracker.tsx",
                        lineNumber: 31,
                        columnNumber: 25
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/MoodTracker.tsx",
                lineNumber: 25,
                columnNumber: 13
            }, this),
            mood && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    y: 10
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                className: "mt-6 text-center text-sm text-muted-foreground",
                children: [
                    "You are feeling ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-bold text-foreground capitalize",
                        children: mood
                    }, void 0, false, {
                        fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/MoodTracker.tsx",
                        lineNumber: 62,
                        columnNumber: 37
                    }, this),
                    " today."
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/MoodTracker.tsx",
                lineNumber: 57,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/MoodTracker.tsx",
        lineNumber: 21,
        columnNumber: 9
    }, this);
}
}),
"[project]/Downloads/Desktop-1/projects/life-coach/src/app/coach/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CoachPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Desktop-1/projects/life-coach/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$src$2f$components$2f$CoachChat$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Desktop-1/projects/life-coach/src/components/CoachChat.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$src$2f$components$2f$MoodTracker$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Desktop-1/projects/life-coach/src/components/MoodTracker.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Desktop-1/projects/life-coach/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Desktop-1/projects/life-coach/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/Downloads/Desktop-1/projects/life-coach/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__ = __turbopack_context__.i("[project]/Downloads/Desktop-1/projects/life-coach/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-ssr] (ecmascript) <export default as ChevronUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Desktop-1/projects/life-coach/src/components/ui/Button.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function CoachPage() {
    const [showMood, setShowMood] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "container mx-auto p-4 h-[calc(100vh-80px)] flex flex-col gap-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    y: -10
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                className: "flex-shrink-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between bg-card/50 border border-border/50 rounded-xl p-3 px-4 backdrop-blur-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "font-bold text-lg",
                                        children: "AI Coach"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/app/coach/page.tsx",
                                        lineNumber: 23,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-muted-foreground text-sm hidden md:inline",
                                        children: "| Your personal guide"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/app/coach/page.tsx",
                                        lineNumber: 24,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/app/coach/page.tsx",
                                lineNumber: 22,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "ghost",
                                size: "sm",
                                onClick: ()=>setShowMood(!showMood),
                                className: "text-xs gap-1 h-8",
                                children: [
                                    showMood ? "Hide Mood" : "Set Mood",
                                    showMood ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
                                        className: "w-3 h-3"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/app/coach/page.tsx",
                                        lineNumber: 33,
                                        columnNumber: 37
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                        className: "w-3 h-3"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/app/coach/page.tsx",
                                        lineNumber: 33,
                                        columnNumber: 73
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/app/coach/page.tsx",
                                lineNumber: 26,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/app/coach/page.tsx",
                        lineNumber: 21,
                        columnNumber: 17
                    }, this),
                    showMood && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            height: 0,
                            opacity: 0
                        },
                        animate: {
                            height: "auto",
                            opacity: 1
                        },
                        className: "overflow-hidden mt-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$src$2f$components$2f$MoodTracker$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MoodTracker"], {}, void 0, false, {
                            fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/app/coach/page.tsx",
                            lineNumber: 43,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/app/coach/page.tsx",
                        lineNumber: 38,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/app/coach/page.tsx",
                lineNumber: 16,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    scale: 0.98
                },
                animate: {
                    opacity: 1,
                    scale: 1
                },
                transition: {
                    delay: 0.1
                },
                className: "flex-1 min-h-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$src$2f$components$2f$CoachChat$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CoachChat"], {}, void 0, false, {
                    fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/app/coach/page.tsx",
                    lineNumber: 55,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/app/coach/page.tsx",
                lineNumber: 49,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/app/coach/page.tsx",
        lineNumber: 14,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=Downloads_Desktop-1_projects_life-coach_src_9f441cd9._.js.map