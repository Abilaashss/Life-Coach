"use client";

import { BubbleMenu, BubbleMenuProps } from "@tiptap/react/menus";
import { Bold, Italic, Strikethrough, Highlighter, Code } from "lucide-react";
import { Editor } from "@tiptap/core";

type EditorBubbleMenuProps = Omit<BubbleMenuProps, "children"> & {
    editor: Editor;
};

export function EditorBubbleMenu({ editor, ...props }: EditorBubbleMenuProps) {
    if (!editor) {
        return null;
    }

    return (
        <BubbleMenu
            editor={editor}
            className="flex items-center gap-1 p-1 rounded-lg border border-border bg-popover text-popover-foreground shadow-md overflow-hidden"
            {...props}
        >
            <button
                onClick={() => editor.chain().focus().toggleBold().run()}
                className={`p-1.5 rounded hover:bg-muted ${editor.isActive("bold") ? "bg-muted text-primary" : ""}`}
                title="Bold"
            >
                <Bold className="w-4 h-4" />
            </button>
            <button
                onClick={() => editor.chain().focus().toggleItalic().run()}
                className={`p-1.5 rounded hover:bg-muted ${editor.isActive("italic") ? "bg-muted text-primary" : ""}`}
                title="Italic"
            >
                <Italic className="w-4 h-4" />
            </button>
            <button
                onClick={() => editor.chain().focus().toggleStrike().run()}
                className={`p-1.5 rounded hover:bg-muted ${editor.isActive("strike") ? "bg-muted text-primary" : ""}`}
                title="Strike"
            >
                <Strikethrough className="w-4 h-4" />
            </button>
            <button
                onClick={() => editor.chain().focus().toggleCode().run()}
                className={`p-1.5 rounded hover:bg-muted ${editor.isActive("code") ? "bg-muted text-primary" : ""}`}
                title="Code"
            >
                <Code className="w-4 h-4" />
            </button>
            <div className="w-px h-4 bg-border mx-1" />
            <button
                onClick={() => editor.chain().focus().toggleHighlight().run()}
                className={`p-1.5 rounded hover:bg-muted ${editor.isActive("highlight") ? "bg-muted text-primary" : ""}`}
                title="Highlight"
            >
                <Highlighter className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-1 border-l border-border pl-2 ml-1">
                {[
                    { color: '#000000', label: 'Black' },
                    { color: '#ef4444', label: 'Red' },
                    { color: '#3b82f6', label: 'Blue' },
                    { color: '#22c55e', label: 'Green' },
                    { color: '#a855f7', label: 'Purple' },
                ].map((preset) => (
                    <button
                        key={preset.color}
                        onClick={() => editor.chain().focus().setColor(preset.color).run()}
                        className={`w-4 h-4 rounded-full border border-border hover:scale-110 transition-transform ${editor.isActive('textStyle', { color: preset.color }) ? 'ring-2 ring-primary ring-offset-1' : ''}`}
                        style={{ backgroundColor: preset.color }}
                        title={preset.label}
                    />
                ))}
                <div className="relative group ml-1 flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full border border-border bg-gradient-to-br from-red-500 via-green-500 to-blue-500 hover:scale-110 transition-transform cursor-pointer" />
                    <input
                        type="color"
                        onInput={(event) => editor.chain().focus().setColor((event.target as HTMLInputElement).value).run()}
                        value={editor.getAttributes("textStyle").color || "#000000"}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        title="Custom Color"
                    />
                </div>
            </div>
        </BubbleMenu>
    );
}
