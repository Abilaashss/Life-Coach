(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Downloads/Desktop-1/projects/life-coach/src/components/editor/EditorBubbleMenu.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EditorBubbleMenu",
    ()=>EditorBubbleMenu
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Desktop-1/projects/life-coach/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Desktop-1/projects/life-coach/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f40$tiptap$2f$react$2f$dist$2f$menus$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Desktop-1/projects/life-coach/node_modules/@tiptap/react/dist/menus/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bold$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bold$3e$__ = __turbopack_context__.i("[project]/Downloads/Desktop-1/projects/life-coach/node_modules/lucide-react/dist/esm/icons/bold.js [app-client] (ecmascript) <export default as Bold>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$italic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Italic$3e$__ = __turbopack_context__.i("[project]/Downloads/Desktop-1/projects/life-coach/node_modules/lucide-react/dist/esm/icons/italic.js [app-client] (ecmascript) <export default as Italic>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$strikethrough$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Strikethrough$3e$__ = __turbopack_context__.i("[project]/Downloads/Desktop-1/projects/life-coach/node_modules/lucide-react/dist/esm/icons/strikethrough.js [app-client] (ecmascript) <export default as Strikethrough>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$highlighter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Highlighter$3e$__ = __turbopack_context__.i("[project]/Downloads/Desktop-1/projects/life-coach/node_modules/lucide-react/dist/esm/icons/highlighter.js [app-client] (ecmascript) <export default as Highlighter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__ = __turbopack_context__.i("[project]/Downloads/Desktop-1/projects/life-coach/node_modules/lucide-react/dist/esm/icons/code.js [app-client] (ecmascript) <export default as Code>");
"use client";
;
;
;
;
function EditorBubbleMenu(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(56);
    if ($[0] !== "f3b4e3db04c526e42a849b4707df8aa5da39998c0c3e0a49f5a7f2bc5a3dd8b7") {
        for(let $i = 0; $i < 56; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "f3b4e3db04c526e42a849b4707df8aa5da39998c0c3e0a49f5a7f2bc5a3dd8b7";
    }
    let editor;
    let props;
    if ($[1] !== t0) {
        ({ editor, ...props } = t0);
        $[1] = t0;
        $[2] = editor;
        $[3] = props;
    } else {
        editor = $[2];
        props = $[3];
    }
    if (!editor) {
        return null;
    }
    let t1;
    if ($[4] !== editor) {
        t1 = ({
            "EditorBubbleMenu[<button>.onClick]": ()=>editor.chain().focus().toggleBold().run()
        })["EditorBubbleMenu[<button>.onClick]"];
        $[4] = editor;
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    const t2 = `p-1.5 rounded hover:bg-muted ${editor.isActive("bold") ? "bg-muted text-primary" : ""}`;
    let t3;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bold$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bold$3e$__["Bold"], {
            className: "w-4 h-4"
        }, void 0, false, {
            fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/editor/EditorBubbleMenu.tsx",
            lineNumber: 48,
            columnNumber: 10
        }, this);
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    let t4;
    if ($[7] !== t1 || $[8] !== t2) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t1,
            className: t2,
            title: "Bold",
            children: t3
        }, void 0, false, {
            fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/editor/EditorBubbleMenu.tsx",
            lineNumber: 55,
            columnNumber: 10
        }, this);
        $[7] = t1;
        $[8] = t2;
        $[9] = t4;
    } else {
        t4 = $[9];
    }
    let t5;
    if ($[10] !== editor) {
        t5 = ({
            "EditorBubbleMenu[<button>.onClick]": ()=>editor.chain().focus().toggleItalic().run()
        })["EditorBubbleMenu[<button>.onClick]"];
        $[10] = editor;
        $[11] = t5;
    } else {
        t5 = $[11];
    }
    const t6 = `p-1.5 rounded hover:bg-muted ${editor.isActive("italic") ? "bg-muted text-primary" : ""}`;
    let t7;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$italic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Italic$3e$__["Italic"], {
            className: "w-4 h-4"
        }, void 0, false, {
            fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/editor/EditorBubbleMenu.tsx",
            lineNumber: 75,
            columnNumber: 10
        }, this);
        $[12] = t7;
    } else {
        t7 = $[12];
    }
    let t8;
    if ($[13] !== t5 || $[14] !== t6) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t5,
            className: t6,
            title: "Italic",
            children: t7
        }, void 0, false, {
            fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/editor/EditorBubbleMenu.tsx",
            lineNumber: 82,
            columnNumber: 10
        }, this);
        $[13] = t5;
        $[14] = t6;
        $[15] = t8;
    } else {
        t8 = $[15];
    }
    let t9;
    if ($[16] !== editor) {
        t9 = ({
            "EditorBubbleMenu[<button>.onClick]": ()=>editor.chain().focus().toggleStrike().run()
        })["EditorBubbleMenu[<button>.onClick]"];
        $[16] = editor;
        $[17] = t9;
    } else {
        t9 = $[17];
    }
    const t10 = `p-1.5 rounded hover:bg-muted ${editor.isActive("strike") ? "bg-muted text-primary" : ""}`;
    let t11;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$strikethrough$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Strikethrough$3e$__["Strikethrough"], {
            className: "w-4 h-4"
        }, void 0, false, {
            fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/editor/EditorBubbleMenu.tsx",
            lineNumber: 102,
            columnNumber: 11
        }, this);
        $[18] = t11;
    } else {
        t11 = $[18];
    }
    let t12;
    if ($[19] !== t10 || $[20] !== t9) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t9,
            className: t10,
            title: "Strike",
            children: t11
        }, void 0, false, {
            fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/editor/EditorBubbleMenu.tsx",
            lineNumber: 109,
            columnNumber: 11
        }, this);
        $[19] = t10;
        $[20] = t9;
        $[21] = t12;
    } else {
        t12 = $[21];
    }
    let t13;
    if ($[22] !== editor) {
        t13 = ({
            "EditorBubbleMenu[<button>.onClick]": ()=>editor.chain().focus().toggleCode().run()
        })["EditorBubbleMenu[<button>.onClick]"];
        $[22] = editor;
        $[23] = t13;
    } else {
        t13 = $[23];
    }
    const t14 = `p-1.5 rounded hover:bg-muted ${editor.isActive("code") ? "bg-muted text-primary" : ""}`;
    let t15;
    if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__["Code"], {
            className: "w-4 h-4"
        }, void 0, false, {
            fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/editor/EditorBubbleMenu.tsx",
            lineNumber: 129,
            columnNumber: 11
        }, this);
        $[24] = t15;
    } else {
        t15 = $[24];
    }
    let t16;
    if ($[25] !== t13 || $[26] !== t14) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t13,
            className: t14,
            title: "Code",
            children: t15
        }, void 0, false, {
            fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/editor/EditorBubbleMenu.tsx",
            lineNumber: 136,
            columnNumber: 11
        }, this);
        $[25] = t13;
        $[26] = t14;
        $[27] = t16;
    } else {
        t16 = $[27];
    }
    let t17;
    if ($[28] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-px h-4 bg-border mx-1"
        }, void 0, false, {
            fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/editor/EditorBubbleMenu.tsx",
            lineNumber: 145,
            columnNumber: 11
        }, this);
        $[28] = t17;
    } else {
        t17 = $[28];
    }
    let t18;
    if ($[29] !== editor) {
        t18 = ({
            "EditorBubbleMenu[<button>.onClick]": ()=>editor.chain().focus().toggleHighlight().run()
        })["EditorBubbleMenu[<button>.onClick]"];
        $[29] = editor;
        $[30] = t18;
    } else {
        t18 = $[30];
    }
    const t19 = `p-1.5 rounded hover:bg-muted ${editor.isActive("highlight") ? "bg-muted text-primary" : ""}`;
    let t20;
    if ($[31] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$highlighter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Highlighter$3e$__["Highlighter"], {
            className: "w-4 h-4"
        }, void 0, false, {
            fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/editor/EditorBubbleMenu.tsx",
            lineNumber: 163,
            columnNumber: 11
        }, this);
        $[31] = t20;
    } else {
        t20 = $[31];
    }
    let t21;
    if ($[32] !== t18 || $[33] !== t19) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t18,
            className: t19,
            title: "Highlight",
            children: t20
        }, void 0, false, {
            fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/editor/EditorBubbleMenu.tsx",
            lineNumber: 170,
            columnNumber: 11
        }, this);
        $[32] = t18;
        $[33] = t19;
        $[34] = t21;
    } else {
        t21 = $[34];
    }
    let t22;
    if ($[35] !== editor) {
        t22 = [
            {
                color: "#000000",
                label: "Black"
            },
            {
                color: "#ef4444",
                label: "Red"
            },
            {
                color: "#3b82f6",
                label: "Blue"
            },
            {
                color: "#22c55e",
                label: "Green"
            },
            {
                color: "#a855f7",
                label: "Purple"
            }
        ].map({
            "EditorBubbleMenu[(anonymous)()]": (preset)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: {
                        "EditorBubbleMenu[(anonymous)() > <button>.onClick]": ()=>editor.chain().focus().setColor(preset.color).run()
                    }["EditorBubbleMenu[(anonymous)() > <button>.onClick]"],
                    className: `w-4 h-4 rounded-full border border-border hover:scale-110 transition-transform ${editor.isActive("textStyle", {
                        color: preset.color
                    }) ? "ring-2 ring-primary ring-offset-1" : ""}`,
                    style: {
                        backgroundColor: preset.color
                    },
                    title: preset.label
                }, preset.color, false, {
                    fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/editor/EditorBubbleMenu.tsx",
                    lineNumber: 195,
                    columnNumber: 52
                }, this)
        }["EditorBubbleMenu[(anonymous)()]"]);
        $[35] = editor;
        $[36] = t22;
    } else {
        t22 = $[36];
    }
    let t23;
    if ($[37] === Symbol.for("react.memo_cache_sentinel")) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-4 h-4 rounded-full border border-border bg-gradient-to-br from-red-500 via-green-500 to-blue-500 hover:scale-110 transition-transform cursor-pointer"
        }, void 0, false, {
            fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/editor/EditorBubbleMenu.tsx",
            lineNumber: 210,
            columnNumber: 11
        }, this);
        $[37] = t23;
    } else {
        t23 = $[37];
    }
    let t24;
    let t25;
    if ($[38] !== editor) {
        t24 = ({
            "EditorBubbleMenu[<input>.onInput]": (event)=>editor.chain().focus().setColor(event.target.value).run()
        })["EditorBubbleMenu[<input>.onInput]"];
        t25 = editor.getAttributes("textStyle").color || "#000000";
        $[38] = editor;
        $[39] = t24;
        $[40] = t25;
    } else {
        t24 = $[39];
        t25 = $[40];
    }
    let t26;
    if ($[41] !== t24 || $[42] !== t25) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative group ml-1 flex items-center justify-center",
            children: [
                t23,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "color",
                    onInput: t24,
                    value: t25,
                    className: "absolute inset-0 w-full h-full opacity-0 cursor-pointer",
                    title: "Custom Color"
                }, void 0, false, {
                    fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/editor/EditorBubbleMenu.tsx",
                    lineNumber: 231,
                    columnNumber: 86
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/editor/EditorBubbleMenu.tsx",
            lineNumber: 231,
            columnNumber: 11
        }, this);
        $[41] = t24;
        $[42] = t25;
        $[43] = t26;
    } else {
        t26 = $[43];
    }
    let t27;
    if ($[44] !== t22 || $[45] !== t26) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-1 border-l border-border pl-2 ml-1",
            children: [
                t22,
                t26
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/editor/EditorBubbleMenu.tsx",
            lineNumber: 240,
            columnNumber: 11
        }, this);
        $[44] = t22;
        $[45] = t26;
        $[46] = t27;
    } else {
        t27 = $[46];
    }
    let t28;
    if ($[47] !== editor || $[48] !== props || $[49] !== t12 || $[50] !== t16 || $[51] !== t21 || $[52] !== t27 || $[53] !== t4 || $[54] !== t8) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f40$tiptap$2f$react$2f$dist$2f$menus$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BubbleMenu"], {
            editor: editor,
            className: "flex items-center gap-1 p-1 rounded-lg border border-border bg-popover text-popover-foreground shadow-md overflow-hidden",
            ...props,
            children: [
                t4,
                t8,
                t12,
                t16,
                t17,
                t21,
                t27
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/editor/EditorBubbleMenu.tsx",
            lineNumber: 249,
            columnNumber: 11
        }, this);
        $[47] = editor;
        $[48] = props;
        $[49] = t12;
        $[50] = t16;
        $[51] = t21;
        $[52] = t27;
        $[53] = t4;
        $[54] = t8;
        $[55] = t28;
    } else {
        t28 = $[55];
    }
    return t28;
}
_c = EditorBubbleMenu;
var _c;
__turbopack_context__.k.register(_c, "EditorBubbleMenu");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/Desktop-1/projects/life-coach/src/components/editor/SlashCommand.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SlashCommand",
    ()=>SlashCommand,
    "getSuggestionItems",
    ()=>getSuggestionItems
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Desktop-1/projects/life-coach/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Desktop-1/projects/life-coach/node_modules/@tiptap/core/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f40$tiptap$2f$suggestion$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Desktop-1/projects/life-coach/node_modules/@tiptap/suggestion/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f40$tiptap$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/Desktop-1/projects/life-coach/node_modules/@tiptap/react/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$tippy$2e$js$2f$dist$2f$tippy$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Desktop-1/projects/life-coach/node_modules/tippy.js/dist/tippy.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heading$2d$1$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heading1$3e$__ = __turbopack_context__.i("[project]/Downloads/Desktop-1/projects/life-coach/node_modules/lucide-react/dist/esm/icons/heading-1.js [app-client] (ecmascript) <export default as Heading1>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heading$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heading2$3e$__ = __turbopack_context__.i("[project]/Downloads/Desktop-1/projects/life-coach/node_modules/lucide-react/dist/esm/icons/heading-2.js [app-client] (ecmascript) <export default as Heading2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heading$2d$3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heading3$3e$__ = __turbopack_context__.i("[project]/Downloads/Desktop-1/projects/life-coach/node_modules/lucide-react/dist/esm/icons/heading-3.js [app-client] (ecmascript) <export default as Heading3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__List$3e$__ = __turbopack_context__.i("[project]/Downloads/Desktop-1/projects/life-coach/node_modules/lucide-react/dist/esm/icons/list.js [app-client] (ecmascript) <export default as List>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2d$ordered$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListOrdered$3e$__ = __turbopack_context__.i("[project]/Downloads/Desktop-1/projects/life-coach/node_modules/lucide-react/dist/esm/icons/list-ordered.js [app-client] (ecmascript) <export default as ListOrdered>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$quote$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Quote$3e$__ = __turbopack_context__.i("[project]/Downloads/Desktop-1/projects/life-coach/node_modules/lucide-react/dist/esm/icons/quote.js [app-client] (ecmascript) <export default as Quote>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__ = __turbopack_context__.i("[project]/Downloads/Desktop-1/projects/life-coach/node_modules/lucide-react/dist/esm/icons/code.js [app-client] (ecmascript) <export default as Code>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__ = __turbopack_context__.i("[project]/Downloads/Desktop-1/projects/life-coach/node_modules/lucide-react/dist/esm/icons/minus.js [app-client] (ecmascript) <export default as Minus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__ = __turbopack_context__.i("[project]/Downloads/Desktop-1/projects/life-coach/node_modules/lucide-react/dist/esm/icons/image.js [app-client] (ecmascript) <export default as Image>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Desktop-1/projects/life-coach/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Desktop-1/projects/life-coach/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
const CommandList = /*#__PURE__*/ _s((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = _s((props, ref)=>{
    _s();
    const [selectedIndex, setSelectedIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const selectItem = (index)=>{
        const item = props.items[index];
        if (item) {
            props.command(item);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CommandList.useEffect": ()=>{
            setSelectedIndex(0);
        }
    }["CommandList.useEffect"], [
        props.items
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"])(ref, {
        "CommandList.useImperativeHandle": ()=>({
                onKeyDown: ({
                    "CommandList.useImperativeHandle": ({ event })=>{
                        if (event.key === "ArrowUp") {
                            setSelectedIndex((selectedIndex + props.items.length - 1) % props.items.length);
                            return true;
                        }
                        if (event.key === "ArrowDown") {
                            setSelectedIndex((selectedIndex + 1) % props.items.length);
                            return true;
                        }
                        if (event.key === "Enter") {
                            selectItem(selectedIndex);
                            return true;
                        }
                        return false;
                    }
                })["CommandList.useImperativeHandle"]
            })
    }["CommandList.useImperativeHandle"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            scale: 0.95,
            y: 10
        },
        animate: {
            opacity: 1,
            scale: 1,
            y: 0
        },
        exit: {
            opacity: 0,
            scale: 0.95,
            y: 10
        },
        transition: {
            duration: 0.15,
            ease: "easeOut"
        },
        className: "z-50 min-w-[280px] bg-background/80 backdrop-blur-xl border border-border/50 rounded-xl shadow-2xl overflow-hidden p-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-2 py-1.5 text-xs font-medium text-muted-foreground/70 uppercase tracking-wider mb-1",
                children: "Basic Blocks"
            }, void 0, false, {
                fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/editor/SlashCommand.tsx",
                lineNumber: 63,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            props.items.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-0.5",
                children: props.items.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: `flex items-center gap-3 w-full px-3 py-2.5 text-sm rounded-lg text-left transition-all duration-200 ${index === selectedIndex ? "bg-primary/10 text-primary shadow-sm" : "hover:bg-muted/50 text-foreground/80 hover:text-foreground"}`,
                        onClick: ()=>selectItem(index),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `flex items-center justify-center w-8 h-8 rounded-md border shadow-sm transition-colors ${index === selectedIndex ? "bg-background border-primary/20 text-primary" : "bg-background border-border text-muted-foreground"}`,
                                children: item.icon
                            }, void 0, false, {
                                fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/editor/SlashCommand.tsx",
                                lineNumber: 77,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-0.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-medium leading-none",
                                        children: item.title
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/editor/SlashCommand.tsx",
                                        lineNumber: 84,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[11px] text-muted-foreground/80 line-clamp-1",
                                        children: item.description
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/editor/SlashCommand.tsx",
                                        lineNumber: 85,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/editor/SlashCommand.tsx",
                                lineNumber: 83,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, index, true, {
                        fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/editor/SlashCommand.tsx",
                        lineNumber: 69,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/editor/SlashCommand.tsx",
                lineNumber: 67,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 text-sm text-muted-foreground text-center",
                children: "No results found"
            }, void 0, false, {
                fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/editor/SlashCommand.tsx",
                lineNumber: 91,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/editor/SlashCommand.tsx",
        lineNumber: 56,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
}, "3wj81Hb4M4taXoRyUvRcWiDqh5k=")), "3wj81Hb4M4taXoRyUvRcWiDqh5k=");
_c1 = CommandList;
CommandList.displayName = "CommandList";
const renderItems = ()=>{
    let component = null;
    let popup = null;
    return {
        onStart: (props)=>{
            component = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f40$tiptap$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ReactRenderer"](CommandList, {
                props,
                editor: props.editor
            });
            if (!props.clientRect) {
                return;
            }
            try {
                // @ts-ignore
                popup = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$tippy$2e$js$2f$dist$2f$tippy$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(document.body, {
                    getReferenceClientRect: props.clientRect,
                    appendTo: ()=>document.body,
                    content: component.element,
                    showOnCreate: true,
                    interactive: true,
                    trigger: "manual",
                    placement: "bottom-start",
                    zIndex: 9999,
                    maxWidth: "none"
                });
            } catch (e) {
                console.warn("Failed to create SlashCommand popup", e);
            }
        },
        onUpdate: (props)=>{
            component?.updateProps(props);
            if (!props.clientRect) {
                return;
            }
            try {
                popup?.setProps({
                    getReferenceClientRect: props.clientRect
                });
            } catch (e) {
                console.warn("Failed to update SlashCommand popup", e);
            }
        },
        onKeyDown: (props)=>{
            if (props.event.key === "Escape") {
                popup?.hide();
                return true;
            }
            // @ts-ignore
            return component?.ref?.onKeyDown(props);
        },
        onExit: ()=>{
            try {
                popup?.destroy();
                component?.destroy();
            } catch (e) {
                console.warn("Failed to destroy SlashCommand popup", e);
            }
        }
    };
};
const getSuggestionItems = ({ query })=>{
    return [
        {
            title: "Heading 1",
            description: "Big section heading.",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heading$2d$1$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heading1$3e$__["Heading1"], {
                className: "w-4 h-4"
            }, void 0, false, {
                fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/editor/SlashCommand.tsx",
                lineNumber: 170,
                columnNumber: 19
            }, ("TURBOPACK compile-time value", void 0)),
            command: ({ editor, range })=>{
                editor.chain().focus().deleteRange(range).setNode("heading", {
                    level: 1
                }).run();
            }
        },
        {
            title: "Heading 2",
            description: "Medium section heading.",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heading$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heading2$3e$__["Heading2"], {
                className: "w-4 h-4"
            }, void 0, false, {
                fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/editor/SlashCommand.tsx",
                lineNumber: 178,
                columnNumber: 19
            }, ("TURBOPACK compile-time value", void 0)),
            command: ({ editor, range })=>{
                editor.chain().focus().deleteRange(range).setNode("heading", {
                    level: 2
                }).run();
            }
        },
        {
            title: "Heading 3",
            description: "Small section heading.",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heading$2d$3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heading3$3e$__["Heading3"], {
                className: "w-4 h-4"
            }, void 0, false, {
                fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/editor/SlashCommand.tsx",
                lineNumber: 186,
                columnNumber: 19
            }, ("TURBOPACK compile-time value", void 0)),
            command: ({ editor, range })=>{
                editor.chain().focus().deleteRange(range).setNode("heading", {
                    level: 3
                }).run();
            }
        },
        {
            title: "Bullet List",
            description: "Create a simple bullet list.",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__List$3e$__["List"], {
                className: "w-4 h-4"
            }, void 0, false, {
                fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/editor/SlashCommand.tsx",
                lineNumber: 194,
                columnNumber: 19
            }, ("TURBOPACK compile-time value", void 0)),
            command: ({ editor, range })=>{
                editor.chain().focus().deleteRange(range).toggleBulletList().run();
            }
        },
        {
            title: "Numbered List",
            description: "Create a list with numbering.",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2d$ordered$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListOrdered$3e$__["ListOrdered"], {
                className: "w-4 h-4"
            }, void 0, false, {
                fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/editor/SlashCommand.tsx",
                lineNumber: 202,
                columnNumber: 19
            }, ("TURBOPACK compile-time value", void 0)),
            command: ({ editor, range })=>{
                editor.chain().focus().deleteRange(range).toggleOrderedList().run();
            }
        },
        {
            title: "Quote",
            description: "Capture a quote.",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$quote$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Quote$3e$__["Quote"], {
                className: "w-4 h-4"
            }, void 0, false, {
                fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/editor/SlashCommand.tsx",
                lineNumber: 210,
                columnNumber: 19
            }, ("TURBOPACK compile-time value", void 0)),
            command: ({ editor, range })=>{
                editor.chain().focus().deleteRange(range).setBlockquote().run();
            }
        },
        {
            title: "Code Block",
            description: "Capture a code snippet.",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__["Code"], {
                className: "w-4 h-4"
            }, void 0, false, {
                fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/editor/SlashCommand.tsx",
                lineNumber: 218,
                columnNumber: 19
            }, ("TURBOPACK compile-time value", void 0)),
            command: ({ editor, range })=>{
                editor.chain().focus().deleteRange(range).setCodeBlock().run();
            }
        },
        {
            title: "Divider",
            description: "Visually divide blocks.",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__["Minus"], {
                className: "w-4 h-4"
            }, void 0, false, {
                fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/editor/SlashCommand.tsx",
                lineNumber: 226,
                columnNumber: 19
            }, ("TURBOPACK compile-time value", void 0)),
            command: ({ editor, range })=>{
                editor.chain().focus().deleteRange(range).setHorizontalRule().run();
            }
        },
        {
            title: "Image",
            description: "Insert an image from URL.",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__["Image"], {
                className: "w-4 h-4"
            }, void 0, false, {
                fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/editor/SlashCommand.tsx",
                lineNumber: 234,
                columnNumber: 19
            }, ("TURBOPACK compile-time value", void 0)),
            command: ({ editor, range })=>{
                const url = window.prompt("Enter image URL");
                if (url) {
                    editor.chain().focus().deleteRange(range).setImage({
                        src: url
                    }).run();
                }
            }
        }
    ].filter((item)=>item.title.toLowerCase().includes(query.toLowerCase()));
};
const SlashCommand = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Extension"].create({
    name: "slashCommand",
    addOptions () {
        return {
            suggestion: {
                char: "/",
                command: ({ editor, range, props })=>{
                    props.command({
                        editor,
                        range
                    });
                },
                items: getSuggestionItems,
                render: renderItems
            }
        };
    },
    addProseMirrorPlugins () {
        return [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f40$tiptap$2f$suggestion$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
                editor: this.editor,
                ...this.options.suggestion
            })
        ];
    }
});
var _c, _c1;
__turbopack_context__.k.register(_c, "CommandList$forwardRef");
__turbopack_context__.k.register(_c1, "CommandList");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/Desktop-1/projects/life-coach/src/components/JournalEditor.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>JournalEditor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Desktop-1/projects/life-coach/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Desktop-1/projects/life-coach/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f40$tiptap$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/Desktop-1/projects/life-coach/node_modules/@tiptap/react/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f40$tiptap$2f$starter$2d$kit$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Desktop-1/projects/life-coach/node_modules/@tiptap/starter-kit/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f40$tiptap$2f$extension$2d$text$2d$style$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Desktop-1/projects/life-coach/node_modules/@tiptap/extension-text-style/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f40$tiptap$2f$extension$2d$color$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/Desktop-1/projects/life-coach/node_modules/@tiptap/extension-color/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f40$tiptap$2f$extension$2d$highlight$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Desktop-1/projects/life-coach/node_modules/@tiptap/extension-highlight/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f40$tiptap$2f$extension$2d$image$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Desktop-1/projects/life-coach/node_modules/@tiptap/extension-image/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f40$tiptap$2f$extension$2d$placeholder$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/Desktop-1/projects/life-coach/node_modules/@tiptap/extension-placeholder/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f40$tiptap$2f$extension$2d$code$2d$block$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Desktop-1/projects/life-coach/node_modules/@tiptap/extension-code-block/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Desktop-1/projects/life-coach/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$src$2f$components$2f$editor$2f$EditorBubbleMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Desktop-1/projects/life-coach/src/components/editor/EditorBubbleMenu.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$src$2f$components$2f$editor$2f$SlashCommand$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Desktop-1/projects/life-coach/src/components/editor/SlashCommand.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f40$tiptap$2f$extension$2d$bubble$2d$menu$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Desktop-1/projects/life-coach/node_modules/@tiptap/extension-bubble-menu/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$undo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Undo$3e$__ = __turbopack_context__.i("[project]/Downloads/Desktop-1/projects/life-coach/node_modules/lucide-react/dist/esm/icons/undo.js [app-client] (ecmascript) <export default as Undo>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$redo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Redo$3e$__ = __turbopack_context__.i("[project]/Downloads/Desktop-1/projects/life-coach/node_modules/lucide-react/dist/esm/icons/redo.js [app-client] (ecmascript) <export default as Redo>");
;
var _s = __turbopack_context__.k.signature();
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
;
;
;
function JournalEditor(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(40);
    if ($[0] !== "9955da18180054fe2af54f4dab49132e3cdf1d32ba5dbb93860c5f45483c13c3") {
        for(let $i = 0; $i < 40; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "9955da18180054fe2af54f4dab49132e3cdf1d32ba5dbb93860c5f45483c13c3";
    }
    const { initialContent, onUpdate } = t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f40$tiptap$2f$starter$2d$kit$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].configure({
            codeBlock: false
        });
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f40$tiptap$2f$extension$2d$highlight$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].configure({
            multicolor: true
        });
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    let t3;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f40$tiptap$2f$extension$2d$placeholder$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].configure({
            placeholder: "Type '/' for commands..."
        });
        $[3] = t3;
    } else {
        t3 = $[3];
    }
    let t4;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = [
            t1,
            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f40$tiptap$2f$extension$2d$text$2d$style$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextStyle"],
            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f40$tiptap$2f$extension$2d$color$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"],
            t2,
            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f40$tiptap$2f$extension$2d$image$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f40$tiptap$2f$extension$2d$code$2d$block$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
            t3,
            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$src$2f$components$2f$editor$2f$SlashCommand$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SlashCommand"],
            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f40$tiptap$2f$extension$2d$bubble$2d$menu$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].configure({
                pluginKey: "bubbleMenu"
            })
        ];
        $[4] = t4;
    } else {
        t4 = $[4];
    }
    let t5;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = {
            attributes: {
                class: "prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto focus:outline-none min-h-[500px] p-4"
            }
        };
        $[5] = t5;
    } else {
        t5 = $[5];
    }
    let t6;
    if ($[6] !== onUpdate) {
        t6 = (t7)=>{
            const { editor } = t7;
            onUpdate(editor.getHTML());
        };
        $[6] = onUpdate;
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    let t7;
    if ($[8] !== initialContent || $[9] !== t6) {
        t7 = {
            extensions: t4,
            content: initialContent,
            editorProps: t5,
            onUpdate: t6,
            immediatelyRender: false
        };
        $[8] = initialContent;
        $[9] = t6;
        $[10] = t7;
    } else {
        t7 = $[10];
    }
    const editor_0 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f40$tiptap$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useEditor"])(t7);
    let t8;
    let t9;
    if ($[11] !== editor_0 || $[12] !== initialContent) {
        t8 = ({
            "JournalEditor[useEffect()]": ()=>{
                if (editor_0 && initialContent !== editor_0.getHTML()) {
                    if (!editor_0.isFocused) {
                        editor_0.commands.setContent(initialContent);
                    }
                }
            }
        })["JournalEditor[useEffect()]"];
        t9 = [
            initialContent,
            editor_0
        ];
        $[11] = editor_0;
        $[12] = initialContent;
        $[13] = t8;
        $[14] = t9;
    } else {
        t8 = $[13];
        t9 = $[14];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t8, t9);
    if (!editor_0) {
        return null;
    }
    let t10;
    if ($[15] !== editor_0) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$src$2f$components$2f$editor$2f$EditorBubbleMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorBubbleMenu"], {
            editor: editor_0
        }, void 0, false, {
            fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/JournalEditor.tsx",
            lineNumber: 136,
            columnNumber: 11
        }, this);
        $[15] = editor_0;
        $[16] = t10;
    } else {
        t10 = $[16];
    }
    let t11;
    let t12;
    if ($[17] !== editor_0) {
        t11 = ({
            "JournalEditor[<button>.onClick]": ()=>editor_0.chain().focus().undo().run()
        })["JournalEditor[<button>.onClick]"];
        t12 = editor_0.can().chain().focus().undo().run();
        $[17] = editor_0;
        $[18] = t11;
        $[19] = t12;
    } else {
        t11 = $[18];
        t12 = $[19];
    }
    const t13 = !t12;
    let t14;
    if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$undo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Undo$3e$__["Undo"], {
            className: "w-4 h-4"
        }, void 0, false, {
            fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/JournalEditor.tsx",
            lineNumber: 159,
            columnNumber: 11
        }, this);
        $[20] = t14;
    } else {
        t14 = $[20];
    }
    let t15;
    if ($[21] !== t11 || $[22] !== t13) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t11,
            disabled: t13,
            className: "p-1.5 rounded-full hover:bg-muted text-muted-foreground hover:text-foreground disabled:opacity-30 disabled:hover:bg-transparent disabled:cursor-not-allowed transition-colors",
            title: "Undo (Ctrl+Z)",
            children: t14
        }, void 0, false, {
            fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/JournalEditor.tsx",
            lineNumber: 166,
            columnNumber: 11
        }, this);
        $[21] = t11;
        $[22] = t13;
        $[23] = t15;
    } else {
        t15 = $[23];
    }
    let t16;
    let t17;
    if ($[24] !== editor_0) {
        t16 = ({
            "JournalEditor[<button>.onClick]": ()=>editor_0.chain().focus().redo().run()
        })["JournalEditor[<button>.onClick]"];
        t17 = editor_0.can().chain().focus().redo().run();
        $[24] = editor_0;
        $[25] = t16;
        $[26] = t17;
    } else {
        t16 = $[25];
        t17 = $[26];
    }
    const t18 = !t17;
    let t19;
    if ($[27] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$redo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Redo$3e$__["Redo"], {
            className: "w-4 h-4"
        }, void 0, false, {
            fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/JournalEditor.tsx",
            lineNumber: 190,
            columnNumber: 11
        }, this);
        $[27] = t19;
    } else {
        t19 = $[27];
    }
    let t20;
    if ($[28] !== t16 || $[29] !== t18) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t16,
            disabled: t18,
            className: "p-1.5 rounded-full hover:bg-muted text-muted-foreground hover:text-foreground disabled:opacity-30 disabled:hover:bg-transparent disabled:cursor-not-allowed transition-colors",
            title: "Redo (Ctrl+Y)",
            children: t19
        }, void 0, false, {
            fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/JournalEditor.tsx",
            lineNumber: 197,
            columnNumber: 11
        }, this);
        $[28] = t16;
        $[29] = t18;
        $[30] = t20;
    } else {
        t20 = $[30];
    }
    let t21;
    if ($[31] !== t15 || $[32] !== t20) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute top-4 right-4 z-20 flex items-center gap-1 bg-background/80 backdrop-blur-sm border border-border/50 rounded-full p-1 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200",
            children: [
                t15,
                t20
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/JournalEditor.tsx",
            lineNumber: 206,
            columnNumber: 11
        }, this);
        $[31] = t15;
        $[32] = t20;
        $[33] = t21;
    } else {
        t21 = $[33];
    }
    let t22;
    if ($[34] !== editor_0) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-[500px] w-full group",
            onClick: {
                "JournalEditor[<div>.onClick]": ()=>editor_0.chain().focus().run()
            }["JournalEditor[<div>.onClick]"],
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f40$tiptap$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["EditorContent"], {
                editor: editor_0
            }, void 0, false, {
                fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/JournalEditor.tsx",
                lineNumber: 217,
                columnNumber: 40
            }, this)
        }, void 0, false, {
            fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/JournalEditor.tsx",
            lineNumber: 215,
            columnNumber: 11
        }, this);
        $[34] = editor_0;
        $[35] = t22;
    } else {
        t22 = $[35];
    }
    let t23;
    if ($[36] !== t10 || $[37] !== t21 || $[38] !== t22) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative w-full max-w-4xl mx-auto",
            children: [
                t10,
                t21,
                t22
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/JournalEditor.tsx",
            lineNumber: 225,
            columnNumber: 11
        }, this);
        $[36] = t10;
        $[37] = t21;
        $[38] = t22;
        $[39] = t23;
    } else {
        t23 = $[39];
    }
    return t23;
}
_s(JournalEditor, "P4LFZUu+/Q+Crq04c+9WKLe1DQU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f40$tiptap$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useEditor"]
    ];
});
_c = JournalEditor;
var _c;
__turbopack_context__.k.register(_c, "JournalEditor");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/Desktop-1/projects/life-coach/src/components/JournalHeader.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>JournalHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Desktop-1/projects/life-coach/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Desktop-1/projects/life-coach/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Desktop-1/projects/life-coach/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Smile$3e$__ = __turbopack_context__.i("[project]/Downloads/Desktop-1/projects/life-coach/node_modules/lucide-react/dist/esm/icons/smile.js [app-client] (ecmascript) <export default as Smile>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__ = __turbopack_context__.i("[project]/Downloads/Desktop-1/projects/life-coach/node_modules/lucide-react/dist/esm/icons/image.js [app-client] (ecmascript) <export default as Image>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Downloads/Desktop-1/projects/life-coach/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$emoji$2d$picker$2d$react$2f$dist$2f$emoji$2d$picker$2d$react$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Desktop-1/projects/life-coach/node_modules/emoji-picker-react/dist/emoji-picker-react.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Desktop-1/projects/life-coach/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Desktop-1/projects/life-coach/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const GRADIENTS = [
    "linear-gradient(to right, #ff7e5f, #feb47b)",
    "linear-gradient(to right, #6a11cb, #2575fc)",
    "linear-gradient(to right, #43cea2, #185a9d)",
    "linear-gradient(to right, #ff9966, #ff5e62)",
    "linear-gradient(to right, #00c6ff, #0072ff)"
];
function JournalHeader(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(59);
    if ($[0] !== "54ef85b4b99395ed5e2dc074f1b79ddb697be4fc6dc48c770e194ab8c8f0452f") {
        for(let $i = 0; $i < 59; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "54ef85b4b99395ed5e2dc074f1b79ddb697be4fc6dc48c770e194ab8c8f0452f";
    }
    const { coverImage, icon, onUpdate } = t0;
    const [showEmojiPicker, setShowEmojiPicker] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showCoverMenu, setShowCoverMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t1;
    if ($[1] !== onUpdate) {
        t1 = ({
            "JournalHeader[handleEmojiClick]": (emojiData)=>{
                onUpdate({
                    icon: emojiData.emoji
                });
                setShowEmojiPicker(false);
            }
        })["JournalHeader[handleEmojiClick]"];
        $[1] = onUpdate;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const handleEmojiClick = t1;
    let t2;
    if ($[3] !== onUpdate) {
        t2 = ({
            "JournalHeader[handleRandomCover]": ()=>{
                const randomGradient = GRADIENTS[Math.floor(Math.random() * GRADIENTS.length)];
                onUpdate({
                    coverImage: randomGradient
                });
                setShowCoverMenu(false);
            }
        })["JournalHeader[handleRandomCover]"];
        $[3] = onUpdate;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    const handleRandomCover = t2;
    let t3;
    if ($[5] !== onUpdate) {
        t3 = ({
            "JournalHeader[handleRemoveCover]": ()=>{
                onUpdate({
                    coverImage: undefined
                });
                setShowCoverMenu(false);
            }
        })["JournalHeader[handleRemoveCover]"];
        $[5] = onUpdate;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    const handleRemoveCover = t3;
    let t4;
    if ($[7] !== onUpdate) {
        t4 = ({
            "JournalHeader[handleRemoveIcon]": ()=>{
                onUpdate({
                    icon: undefined
                });
                setShowEmojiPicker(false);
            }
        })["JournalHeader[handleRemoveIcon]"];
        $[7] = onUpdate;
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    const handleRemoveIcon = t4;
    const t5 = `relative w-full h-56 md:h-80 transition-all duration-500 ease-in-out ${coverImage ? "opacity-100" : "opacity-0 hover:opacity-100 h-24 md:h-32 bg-muted/10 border-b border-dashed border-border/50"}`;
    const t6 = coverImage || "none";
    let t7;
    if ($[9] !== t6) {
        t7 = {
            backgroundImage: t6,
            backgroundSize: "cover",
            backgroundPosition: "center"
        };
        $[9] = t6;
        $[10] = t7;
    } else {
        t7 = $[10];
    }
    let t8;
    if ($[11] !== coverImage) {
        t8 = coverImage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500"
        }, void 0, false, {
            fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/JournalHeader.tsx",
            lineNumber: 113,
            columnNumber: 24
        }, this);
        $[11] = coverImage;
        $[12] = t8;
    } else {
        t8 = $[12];
    }
    let t9;
    if ($[13] !== coverImage || $[14] !== showCoverMenu) {
        t9 = coverImage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: {
                "JournalHeader[<button>.onClick]": ()=>setShowCoverMenu(!showCoverMenu)
            }["JournalHeader[<button>.onClick]"],
            className: "absolute bottom-4 right-4 bg-black/40 backdrop-blur-md text-white/90 text-xs font-medium px-3 py-1.5 rounded-full hover:bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 shadow-lg border border-white/10",
            children: "Change Cover"
        }, void 0, false, {
            fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/JournalHeader.tsx",
            lineNumber: 121,
            columnNumber: 24
        }, this);
        $[13] = coverImage;
        $[14] = showCoverMenu;
        $[15] = t9;
    } else {
        t9 = $[15];
    }
    let t10;
    if ($[16] !== coverImage || $[17] !== handleRandomCover) {
        t10 = !coverImage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: handleRandomCover,
                className: "flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground bg-background/50 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm hover:shadow-md transition-all",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__["Image"], {
                        className: "w-4 h-4"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/JournalHeader.tsx",
                        lineNumber: 132,
                        columnNumber: 393
                    }, this),
                    " Add Cover"
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/JournalHeader.tsx",
                lineNumber: 132,
                columnNumber: 159
            }, this)
        }, void 0, false, {
            fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/JournalHeader.tsx",
            lineNumber: 132,
            columnNumber: 26
        }, this);
        $[16] = coverImage;
        $[17] = handleRandomCover;
        $[18] = t10;
    } else {
        t10 = $[18];
    }
    let t11;
    if ($[19] !== t10 || $[20] !== t5 || $[21] !== t7 || $[22] !== t8 || $[23] !== t9) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t5,
            style: t7,
            children: [
                t8,
                t9,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/JournalHeader.tsx",
            lineNumber: 141,
            columnNumber: 11
        }, this);
        $[19] = t10;
        $[20] = t5;
        $[21] = t7;
        $[22] = t8;
        $[23] = t9;
        $[24] = t11;
    } else {
        t11 = $[24];
    }
    let t12;
    if ($[25] !== handleRandomCover || $[26] !== handleRemoveCover || $[27] !== showCoverMenu) {
        t12 = showCoverMenu && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 0,
                y: 10,
                scale: 0.95
            },
            animate: {
                opacity: 1,
                y: 0,
                scale: 1
            },
            exit: {
                opacity: 0,
                y: 10,
                scale: 0.95
            },
            className: "absolute right-4 top-full mt-2 z-50 bg-popover/90 backdrop-blur-xl border border-border/50 rounded-xl shadow-2xl p-1.5 flex flex-col gap-0.5 min-w-[160px]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: handleRandomCover,
                    className: "text-left text-sm p-2 hover:bg-muted/80 rounded-lg transition-colors",
                    children: "Random Gradient"
                }, void 0, false, {
                    fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/JournalHeader.tsx",
                    lineNumber: 165,
                    columnNumber: 175
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: handleRemoveCover,
                    className: "text-left text-sm p-2 hover:bg-destructive/10 text-destructive rounded-lg transition-colors",
                    children: "Remove Cover"
                }, void 0, false, {
                    fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/JournalHeader.tsx",
                    lineNumber: 165,
                    columnNumber: 316
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/JournalHeader.tsx",
            lineNumber: 153,
            columnNumber: 28
        }, this);
        $[25] = handleRandomCover;
        $[26] = handleRemoveCover;
        $[27] = showCoverMenu;
        $[28] = t12;
    } else {
        t12 = $[28];
    }
    let t13;
    if ($[29] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
            children: t12
        }, void 0, false, {
            fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/JournalHeader.tsx",
            lineNumber: 175,
            columnNumber: 11
        }, this);
        $[29] = t12;
        $[30] = t13;
    } else {
        t13 = $[30];
    }
    let t14;
    if ($[31] !== showEmojiPicker) {
        t14 = ({
            "JournalHeader[<button>.onClick]": ()=>setShowEmojiPicker(!showEmojiPicker)
        })["JournalHeader[<button>.onClick]"];
        $[31] = showEmojiPicker;
        $[32] = t14;
    } else {
        t14 = $[32];
    }
    let t15;
    if ($[33] !== icon) {
        t15 = icon || /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "opacity-0 group-hover:opacity-50 text-5xl grayscale hover:grayscale-0 transition-all",
            children: "😀"
        }, void 0, false, {
            fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/JournalHeader.tsx",
            lineNumber: 193,
            columnNumber: 19
        }, this);
        $[33] = icon;
        $[34] = t15;
    } else {
        t15 = $[34];
    }
    let t16;
    if ($[35] !== t14 || $[36] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t14,
            className: "text-7xl md:text-8xl hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl filter",
            children: t15
        }, void 0, false, {
            fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/JournalHeader.tsx",
            lineNumber: 201,
            columnNumber: 11
        }, this);
        $[35] = t14;
        $[36] = t15;
        $[37] = t16;
    } else {
        t16 = $[37];
    }
    let t17;
    if ($[38] !== handleRemoveIcon || $[39] !== icon) {
        t17 = icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: handleRemoveIcon,
            className: "absolute -top-2 -right-2 bg-background/80 backdrop-blur-sm text-muted-foreground p-1.5 rounded-full hover:bg-destructive hover:text-destructive-foreground opacity-0 group-hover/icon:opacity-100 transition-all duration-200 shadow-sm border border-border/50",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                className: "w-3 h-3"
            }, void 0, false, {
                fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/JournalHeader.tsx",
                lineNumber: 210,
                columnNumber: 322
            }, this)
        }, void 0, false, {
            fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/JournalHeader.tsx",
            lineNumber: 210,
            columnNumber: 19
        }, this);
        $[38] = handleRemoveIcon;
        $[39] = icon;
        $[40] = t17;
    } else {
        t17 = $[40];
    }
    let t18;
    if ($[41] !== t16 || $[42] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative group/icon",
            children: [
                t16,
                t17
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/JournalHeader.tsx",
            lineNumber: 219,
            columnNumber: 11
        }, this);
        $[41] = t16;
        $[42] = t17;
        $[43] = t18;
    } else {
        t18 = $[43];
    }
    let t19;
    if ($[44] !== handleEmojiClick || $[45] !== showEmojiPicker) {
        t19 = showEmojiPicker && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 0,
                scale: 0.9,
                y: 10
            },
            animate: {
                opacity: 1,
                scale: 1,
                y: 0
            },
            exit: {
                opacity: 0,
                scale: 0.9,
                y: 10
            },
            className: "absolute top-full left-0 mt-4 z-50",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "fixed inset-0 z-40",
                    onClick: {
                        "JournalHeader[<div>.onClick]": ()=>setShowEmojiPicker(false)
                    }["JournalHeader[<div>.onClick]"]
                }, void 0, false, {
                    fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/JournalHeader.tsx",
                    lineNumber: 240,
                    columnNumber: 55
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative z-50 shadow-2xl rounded-xl overflow-hidden border border-border/50",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$emoji$2d$picker$2d$react$2f$dist$2f$emoji$2d$picker$2d$react$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        onEmojiClick: handleEmojiClick,
                        theme: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$emoji$2d$picker$2d$react$2f$dist$2f$emoji$2d$picker$2d$react$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Theme"].AUTO
                    }, void 0, false, {
                        fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/JournalHeader.tsx",
                        lineNumber: 242,
                        columnNumber: 137
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/JournalHeader.tsx",
                    lineNumber: 242,
                    columnNumber: 44
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/JournalHeader.tsx",
            lineNumber: 228,
            columnNumber: 30
        }, this);
        $[44] = handleEmojiClick;
        $[45] = showEmojiPicker;
        $[46] = t19;
    } else {
        t19 = $[46];
    }
    let t20;
    if ($[47] !== t19) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
            children: t19
        }, void 0, false, {
            fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/JournalHeader.tsx",
            lineNumber: 251,
            columnNumber: 11
        }, this);
        $[47] = t19;
        $[48] = t20;
    } else {
        t20 = $[48];
    }
    let t21;
    if ($[49] !== t18 || $[50] !== t20) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative -mt-12 ml-8 md:ml-20 z-20 w-fit",
            children: [
                t18,
                t20
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/JournalHeader.tsx",
            lineNumber: 259,
            columnNumber: 11
        }, this);
        $[49] = t18;
        $[50] = t20;
        $[51] = t21;
    } else {
        t21 = $[51];
    }
    let t22;
    if ($[52] !== icon) {
        t22 = !icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute top-full mt-4 ml-8 md:ml-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: {
                    "JournalHeader[<button>.onClick]": ()=>setShowEmojiPicker(true)
                }["JournalHeader[<button>.onClick]"],
                className: "flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground bg-background/50 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm hover:shadow-md transition-all",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Smile$3e$__["Smile"], {
                        className: "w-4 h-4"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/JournalHeader.tsx",
                        lineNumber: 270,
                        columnNumber: 245
                    }, this),
                    " Add Icon"
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/JournalHeader.tsx",
                lineNumber: 268,
                columnNumber: 140
            }, this)
        }, void 0, false, {
            fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/JournalHeader.tsx",
            lineNumber: 268,
            columnNumber: 20
        }, this);
        $[52] = icon;
        $[53] = t22;
    } else {
        t22 = $[53];
    }
    let t23;
    if ($[54] !== t11 || $[55] !== t13 || $[56] !== t21 || $[57] !== t22) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "group relative mb-12",
            children: [
                t11,
                t13,
                t21,
                t22
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/components/JournalHeader.tsx",
            lineNumber: 278,
            columnNumber: 11
        }, this);
        $[54] = t11;
        $[55] = t13;
        $[56] = t21;
        $[57] = t22;
        $[58] = t23;
    } else {
        t23 = $[58];
    }
    return t23;
}
_s(JournalHeader, "ycremziMMv/sX8Ka0hC9Mz/HuXs=");
_c = JournalHeader;
var _c;
__turbopack_context__.k.register(_c, "JournalHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/Desktop-1/projects/life-coach/src/components/ui/Button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Desktop-1/projects/life-coach/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Desktop-1/projects/life-coach/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Desktop-1/projects/life-coach/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Desktop-1/projects/life-coach/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Desktop-1/projects/life-coach/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", {
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
const Button = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, variant, size, asChild = false, ...props }, ref)=>{
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
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
_c1 = Button;
Button.displayName = "Button";
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Button$React.forwardRef");
__turbopack_context__.k.register(_c1, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/Desktop-1/projects/life-coach/src/app/journal/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>JournalPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Desktop-1/projects/life-coach/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Desktop-1/projects/life-coach/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Desktop-1/projects/life-coach/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$src$2f$context$2f$AppContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Desktop-1/projects/life-coach/src/context/AppContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$src$2f$components$2f$JournalEditor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Desktop-1/projects/life-coach/src/components/JournalEditor.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$src$2f$components$2f$JournalHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Desktop-1/projects/life-coach/src/components/JournalHeader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Desktop-1/projects/life-coach/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/Downloads/Desktop-1/projects/life-coach/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/Downloads/Desktop-1/projects/life-coach/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/Downloads/Desktop-1/projects/life-coach/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/Desktop-1/projects/life-coach/src/components/ui/Button.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
function JournalPage() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(58);
    if ($[0] !== "e4b86f8c9c9a6c2e631cc609a2df60c6596924ea2a4e0bee69b828f46011625d") {
        for(let $i = 0; $i < 58; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e4b86f8c9c9a6c2e631cc609a2df60c6596924ea2a4e0bee69b828f46011625d";
    }
    const { journalEntries, updateJournalEntry } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$src$2f$context$2f$AppContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApp"])();
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = new Date();
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [currentDate, setCurrentDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    const [dateString, setDateString] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    let t1;
    let t2;
    if ($[2] !== currentDate) {
        t1 = ({
            "JournalPage[useEffect()]": ()=>{
                setDateString(currentDate.toISOString().split("T")[0]);
            }
        })["JournalPage[useEffect()]"];
        t2 = [
            currentDate
        ];
        $[2] = currentDate;
        $[3] = t1;
        $[4] = t2;
    } else {
        t1 = $[3];
        t2 = $[4];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    if ($[5] !== currentDate) {
        t3 = ({
            "JournalPage[handlePrevDay]": ()=>{
                const newDate = new Date(currentDate);
                newDate.setDate(currentDate.getDate() - 1);
                setCurrentDate(newDate);
            }
        })["JournalPage[handlePrevDay]"];
        $[5] = currentDate;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    const handlePrevDay = t3;
    let t4;
    if ($[7] !== currentDate) {
        t4 = ({
            "JournalPage[handleNextDay]": ()=>{
                const newDate_0 = new Date(currentDate);
                newDate_0.setDate(currentDate.getDate() + 1);
                setCurrentDate(newDate_0);
            }
        })["JournalPage[handleNextDay]"];
        $[7] = currentDate;
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    const handleNextDay = t4;
    let t5;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = new Date().toDateString();
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    let t6;
    if ($[10] !== currentDate) {
        t6 = currentDate.toDateString();
        $[10] = currentDate;
        $[11] = t6;
    } else {
        t6 = $[11];
    }
    const isToday = t5 === t6;
    let t7;
    if ($[12] !== dateString || $[13] !== journalEntries) {
        t7 = journalEntries[dateString] || {
            content: "",
            lastUpdated: Date.now()
        };
        $[12] = dateString;
        $[13] = journalEntries;
        $[14] = t7;
    } else {
        t7 = $[14];
    }
    const currentEntry = t7;
    let t8;
    let t9;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = {
            opacity: 0,
            y: -20
        };
        t9 = {
            opacity: 1,
            y: 0
        };
        $[15] = t8;
        $[16] = t9;
    } else {
        t8 = $[15];
        t9 = $[16];
    }
    let t10;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
            className: "w-4 h-4"
        }, void 0, false, {
            fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/app/journal/page.tsx",
            lineNumber: 127,
            columnNumber: 11
        }, this);
        $[17] = t10;
    } else {
        t10 = $[17];
    }
    let t11;
    if ($[18] !== handlePrevDay) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            variant: "ghost",
            size: "icon",
            onClick: handlePrevDay,
            className: "rounded-full w-8 h-8 hover:bg-muted/80",
            children: t10
        }, void 0, false, {
            fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/app/journal/page.tsx",
            lineNumber: 134,
            columnNumber: 11
        }, this);
        $[18] = handlePrevDay;
        $[19] = t11;
    } else {
        t11 = $[19];
    }
    let t12;
    if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
            className: "w-4 h-4 text-primary/80"
        }, void 0, false, {
            fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/app/journal/page.tsx",
            lineNumber: 142,
            columnNumber: 11
        }, this);
        $[20] = t12;
    } else {
        t12 = $[20];
    }
    let t13;
    if ($[21] !== currentDate) {
        t13 = currentDate.toLocaleDateString(undefined, {
            weekday: "short",
            year: "numeric",
            month: "long",
            day: "numeric"
        });
        $[21] = currentDate;
        $[22] = t13;
    } else {
        t13 = $[22];
    }
    let t14;
    if ($[23] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 px-4 min-w-[160px] justify-center font-medium text-sm tracking-wide",
            children: [
                t12,
                t13
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/app/journal/page.tsx",
            lineNumber: 162,
            columnNumber: 11
        }, this);
        $[23] = t13;
        $[24] = t14;
    } else {
        t14 = $[24];
    }
    let t15;
    if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
            className: "w-4 h-4"
        }, void 0, false, {
            fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/app/journal/page.tsx",
            lineNumber: 170,
            columnNumber: 11
        }, this);
        $[25] = t15;
    } else {
        t15 = $[25];
    }
    let t16;
    if ($[26] !== handleNextDay || $[27] !== isToday) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            variant: "ghost",
            size: "icon",
            onClick: handleNextDay,
            disabled: isToday,
            className: "rounded-full w-8 h-8 hover:bg-muted/80",
            children: t15
        }, void 0, false, {
            fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/app/journal/page.tsx",
            lineNumber: 177,
            columnNumber: 11
        }, this);
        $[26] = handleNextDay;
        $[27] = isToday;
        $[28] = t16;
    } else {
        t16 = $[28];
    }
    let t17;
    if ($[29] !== t11 || $[30] !== t14 || $[31] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: t8,
            animate: t9,
            className: "flex items-center justify-between py-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2 bg-background/50 backdrop-blur-md border border-border/50 rounded-full p-1.5 shadow-sm hover:shadow-md transition-shadow",
                children: [
                    t11,
                    t14,
                    t16
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/app/journal/page.tsx",
                lineNumber: 186,
                columnNumber: 100
            }, this)
        }, void 0, false, {
            fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/app/journal/page.tsx",
            lineNumber: 186,
            columnNumber: 11
        }, this);
        $[29] = t11;
        $[30] = t14;
        $[31] = t16;
        $[32] = t17;
    } else {
        t17 = $[32];
    }
    let t18;
    let t19;
    let t20;
    if ($[33] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = {
            opacity: 0,
            y: 20
        };
        t19 = {
            opacity: 1,
            y: 0
        };
        t20 = {
            duration: 0.4,
            ease: "easeOut"
        };
        $[33] = t18;
        $[34] = t19;
        $[35] = t20;
    } else {
        t18 = $[33];
        t19 = $[34];
        t20 = $[35];
    }
    let t21;
    if ($[36] === Symbol.for("react.memo_cache_sentinel")) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 bg-gradient-to-b from-background/0 to-background/40 pointer-events-none"
        }, void 0, false, {
            fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/app/journal/page.tsx",
            lineNumber: 220,
            columnNumber: 11
        }, this);
        $[36] = t21;
    } else {
        t21 = $[36];
    }
    let t22;
    if ($[37] !== dateString || $[38] !== updateJournalEntry) {
        t22 = ({
            "JournalPage[<JournalHeader>.onUpdate]": (updates)=>updateJournalEntry(dateString, updates)
        })["JournalPage[<JournalHeader>.onUpdate]"];
        $[37] = dateString;
        $[38] = updateJournalEntry;
        $[39] = t22;
    } else {
        t22 = $[39];
    }
    let t23;
    if ($[40] !== currentEntry.coverImage || $[41] !== currentEntry.icon || $[42] !== t22) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$src$2f$components$2f$JournalHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            coverImage: currentEntry.coverImage,
            icon: currentEntry.icon,
            onUpdate: t22
        }, void 0, false, {
            fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/app/journal/page.tsx",
            lineNumber: 238,
            columnNumber: 11
        }, this);
        $[40] = currentEntry.coverImage;
        $[41] = currentEntry.icon;
        $[42] = t22;
        $[43] = t23;
    } else {
        t23 = $[43];
    }
    let t24;
    if ($[44] === Symbol.for("react.memo_cache_sentinel")) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "text",
            placeholder: "Untitled",
            className: "text-5xl font-bold mb-8 w-full bg-transparent border-none outline-none placeholder:text-muted-foreground/30 text-foreground tracking-tight",
            defaultValue: "Untitled"
        }, void 0, false, {
            fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/app/journal/page.tsx",
            lineNumber: 248,
            columnNumber: 11
        }, this);
        $[44] = t24;
    } else {
        t24 = $[44];
    }
    const t25 = currentEntry.content || "<p class=\"text-muted-foreground/60\">Press '/' for commands...</p>";
    let t26;
    if ($[45] !== dateString || $[46] !== updateJournalEntry) {
        t26 = ({
            "JournalPage[<JournalEditor>.onUpdate]": (content)=>updateJournalEntry(dateString, {
                    content
                })
        })["JournalPage[<JournalEditor>.onUpdate]"];
        $[45] = dateString;
        $[46] = updateJournalEntry;
        $[47] = t26;
    } else {
        t26 = $[47];
    }
    let t27;
    if ($[48] !== t25 || $[49] !== t26) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "px-8 md:px-20 pb-20 max-w-4xl mx-auto relative z-10",
            children: [
                t24,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$src$2f$components$2f$JournalEditor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    initialContent: t25,
                    onUpdate: t26
                }, void 0, false, {
                    fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/app/journal/page.tsx",
                    lineNumber: 269,
                    columnNumber: 85
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/app/journal/page.tsx",
            lineNumber: 269,
            columnNumber: 11
        }, this);
        $[48] = t25;
        $[49] = t26;
        $[50] = t27;
    } else {
        t27 = $[50];
    }
    let t28;
    if ($[51] !== dateString || $[52] !== t23 || $[53] !== t27) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: t18,
            animate: t19,
            transition: t20,
            className: "bg-background/40 backdrop-blur-sm border border-border/40 rounded-2xl shadow-xl min-h-[85vh] overflow-hidden relative",
            children: [
                t21,
                t23,
                t27
            ]
        }, dateString, true, {
            fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/app/journal/page.tsx",
            lineNumber: 278,
            columnNumber: 11
        }, this);
        $[51] = dateString;
        $[52] = t23;
        $[53] = t27;
        $[54] = t28;
    } else {
        t28 = $[54];
    }
    let t29;
    if ($[55] !== t17 || $[56] !== t28) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-background pb-20",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto max-w-4xl px-4 md:px-8",
                children: [
                    t17,
                    t28
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/app/journal/page.tsx",
                lineNumber: 288,
                columnNumber: 61
            }, this)
        }, void 0, false, {
            fileName: "[project]/Downloads/Desktop-1/projects/life-coach/src/app/journal/page.tsx",
            lineNumber: 288,
            columnNumber: 11
        }, this);
        $[55] = t17;
        $[56] = t28;
        $[57] = t29;
    } else {
        t29 = $[57];
    }
    return t29;
}
_s(JournalPage, "/CE8I/XNL3oNHxji0Dqs12cqO3M=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$Desktop$2d$1$2f$projects$2f$life$2d$coach$2f$src$2f$context$2f$AppContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApp"]
    ];
});
_c = JournalPage;
var _c;
__turbopack_context__.k.register(_c, "JournalPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Downloads_Desktop-1_projects_life-coach_src_c9a34137._.js.map