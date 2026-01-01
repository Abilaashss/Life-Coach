"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { TextStyle } from "@tiptap/extension-text-style";
import Color from "@tiptap/extension-color";
import Highlight from "@tiptap/extension-highlight";
import Image from "@tiptap/extension-image";
import Placeholder from "@tiptap/extension-placeholder";
import CodeBlock from "@tiptap/extension-code-block";
import { useEffect } from "react";
import { EditorBubbleMenu } from "./editor/EditorBubbleMenu";
import { SlashCommand } from "./editor/SlashCommand";

interface JournalEditorProps {
    initialContent: string;
    onUpdate: (content: string) => void;
}

import BubbleMenu from "@tiptap/extension-bubble-menu";
import { Undo, Redo } from "lucide-react";

export default function JournalEditor({ initialContent, onUpdate }: JournalEditorProps) {
    const editor = useEditor({
        extensions: [
            StarterKit.configure({
                codeBlock: false, // We use the dedicated extension
            }),
            TextStyle,
            Color,
            Highlight.configure({ multicolor: true }),
            Image,
            CodeBlock,
            Placeholder.configure({
                placeholder: "Type '/' for commands...",
            }),
            SlashCommand,
            BubbleMenu.configure({
                pluginKey: "bubbleMenu",
            }),
        ],
        content: initialContent,
        editorProps: {
            attributes: {
                class: "prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto focus:outline-none min-h-[500px] p-4",
            },
        },
        onUpdate: ({ editor }) => {
            onUpdate(editor.getHTML());
        },
        immediatelyRender: false,
    });

    // Update content if initialContent changes externally (e.g. from AI append)
    useEffect(() => {
        if (editor && initialContent !== editor.getHTML()) {
            if (!editor.isFocused) {
                editor.commands.setContent(initialContent);
            }
        }
    }, [initialContent, editor]);

    if (!editor) {
        return null;
    }

    return (
        <div className="relative w-full max-w-4xl mx-auto">
            <EditorBubbleMenu editor={editor} />

            {/* Floating Undo/Redo Buttons */}
            <div className="absolute top-4 right-4 z-20 flex items-center gap-1 bg-background/80 backdrop-blur-sm border border-border/50 rounded-full p-1 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <button
                    onClick={() => editor.chain().focus().undo().run()}
                    disabled={!editor.can().chain().focus().undo().run()}
                    className="p-1.5 rounded-full hover:bg-muted text-muted-foreground hover:text-foreground disabled:opacity-30 disabled:hover:bg-transparent disabled:cursor-not-allowed transition-colors"
                    title="Undo (Ctrl+Z)"
                >
                    <Undo className="w-4 h-4" />
                </button>
                <button
                    onClick={() => editor.chain().focus().redo().run()}
                    disabled={!editor.can().chain().focus().redo().run()}
                    className="p-1.5 rounded-full hover:bg-muted text-muted-foreground hover:text-foreground disabled:opacity-30 disabled:hover:bg-transparent disabled:cursor-not-allowed transition-colors"
                    title="Redo (Ctrl+Y)"
                >
                    <Redo className="w-4 h-4" />
                </button>
            </div>

            <div className="min-h-[500px] w-full group" onClick={() => editor.chain().focus().run()}>
                <EditorContent editor={editor} />
            </div>
        </div>
    );
}
