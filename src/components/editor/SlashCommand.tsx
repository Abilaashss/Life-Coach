"use client";

import "tippy.js/dist/tippy.css";
import { Extension } from "@tiptap/core";
import Suggestion from "@tiptap/suggestion";
import { ReactRenderer } from "@tiptap/react";
import tippy from "tippy.js";
import {
    Heading1,
    Heading2,
    Heading3,
    List,
    ListOrdered,
    CheckSquare,
    Quote,
    Code,
    Minus,
    Image as ImageIcon,
} from "lucide-react";
import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CommandList = forwardRef((props: any, ref) => {
    const [selectedIndex, setSelectedIndex] = useState(0);

    const selectItem = (index: number) => {
        const item = props.items[index];
        if (item) {
            props.command(item);
        }
    };

    useEffect(() => {
        setSelectedIndex(0);
    }, [props.items]);

    useImperativeHandle(ref, () => ({
        onKeyDown: ({ event }: { event: KeyboardEvent }) => {
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
        },
    }));

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="z-50 min-w-[280px] bg-background/80 backdrop-blur-xl border border-border/50 rounded-xl shadow-2xl overflow-hidden p-2"
        >
            <div className="px-2 py-1.5 text-xs font-medium text-muted-foreground/70 uppercase tracking-wider mb-1">
                Basic Blocks
            </div>
            {props.items.length ? (
                <div className="flex flex-col gap-0.5">
                    {props.items.map((item: any, index: number) => (
                        <button
                            key={index}
                            className={`flex items-center gap-3 w-full px-3 py-2.5 text-sm rounded-lg text-left transition-all duration-200 ${index === selectedIndex
                                ? "bg-primary/10 text-primary shadow-sm"
                                : "hover:bg-muted/50 text-foreground/80 hover:text-foreground"
                                }`}
                            onClick={() => selectItem(index)}
                        >
                            <div className={`flex items-center justify-center w-8 h-8 rounded-md border shadow-sm transition-colors ${index === selectedIndex
                                ? "bg-background border-primary/20 text-primary"
                                : "bg-background border-border text-muted-foreground"
                                }`}>
                                {item.icon}
                            </div>
                            <div className="flex flex-col gap-0.5">
                                <p className="font-medium leading-none">{item.title}</p>
                                <p className="text-[11px] text-muted-foreground/80 line-clamp-1">{item.description}</p>
                            </div>
                        </button>
                    ))}
                </div>
            ) : (
                <div className="p-4 text-sm text-muted-foreground text-center">No results found</div>
            )}
        </motion.div>
    );
});

CommandList.displayName = "CommandList";

const renderItems = () => {
    let component: ReactRenderer | null = null;
    let popup: any | null = null;

    return {
        onStart: (props: any) => {
            component = new ReactRenderer(CommandList, {
                props,
                editor: props.editor,
            });

            if (!props.clientRect) {
                return;
            }

            try {
                // @ts-ignore
                popup = tippy(document.body, {
                    getReferenceClientRect: props.clientRect,
                    appendTo: () => document.body,
                    content: component.element,
                    showOnCreate: true,
                    interactive: true,
                    trigger: "manual",
                    placement: "bottom-start",
                    zIndex: 9999,
                    maxWidth: "none",
                });
            } catch (e) {
                console.warn("Failed to create SlashCommand popup", e);
            }
        },
        onUpdate: (props: any) => {
            component?.updateProps(props);

            if (!props.clientRect) {
                return;
            }

            try {
                popup?.setProps({
                    getReferenceClientRect: props.clientRect,
                });
            } catch (e) {
                console.warn("Failed to update SlashCommand popup", e);
            }
        },
        onKeyDown: (props: any) => {
            if (props.event.key === "Escape") {
                popup?.hide();
                return true;
            }
            // @ts-ignore
            return component?.ref?.onKeyDown(props);
        },
        onExit: () => {
            try {
                popup?.destroy();
                component?.destroy();
            } catch (e) {
                console.warn("Failed to destroy SlashCommand popup", e);
            }
        },
    };
};

export const getSuggestionItems = ({ query }: { query: string }) => {
    return [
        {
            title: "Heading 1",
            description: "Big section heading.",
            icon: <Heading1 className="w-4 h-4" />,
            command: ({ editor, range }: any) => {
                editor.chain().focus().deleteRange(range).setNode("heading", { level: 1 }).run();
            },
        },
        {
            title: "Heading 2",
            description: "Medium section heading.",
            icon: <Heading2 className="w-4 h-4" />,
            command: ({ editor, range }: any) => {
                editor.chain().focus().deleteRange(range).setNode("heading", { level: 2 }).run();
            },
        },
        {
            title: "Heading 3",
            description: "Small section heading.",
            icon: <Heading3 className="w-4 h-4" />,
            command: ({ editor, range }: any) => {
                editor.chain().focus().deleteRange(range).setNode("heading", { level: 3 }).run();
            },
        },
        {
            title: "Bullet List",
            description: "Create a simple bullet list.",
            icon: <List className="w-4 h-4" />,
            command: ({ editor, range }: any) => {
                editor.chain().focus().deleteRange(range).toggleBulletList().run();
            },
        },
        {
            title: "Numbered List",
            description: "Create a list with numbering.",
            icon: <ListOrdered className="w-4 h-4" />,
            command: ({ editor, range }: any) => {
                editor.chain().focus().deleteRange(range).toggleOrderedList().run();
            },
        },
        {
            title: "Quote",
            description: "Capture a quote.",
            icon: <Quote className="w-4 h-4" />,
            command: ({ editor, range }: any) => {
                editor.chain().focus().deleteRange(range).setBlockquote().run();
            },
        },
        {
            title: "Code Block",
            description: "Capture a code snippet.",
            icon: <Code className="w-4 h-4" />,
            command: ({ editor, range }: any) => {
                editor.chain().focus().deleteRange(range).setCodeBlock().run();
            },
        },
        {
            title: "Divider",
            description: "Visually divide blocks.",
            icon: <Minus className="w-4 h-4" />,
            command: ({ editor, range }: any) => {
                editor.chain().focus().deleteRange(range).setHorizontalRule().run();
            },
        },
        {
            title: "Image",
            description: "Insert an image from URL.",
            icon: <ImageIcon className="w-4 h-4" />,
            command: ({ editor, range }: any) => {
                const url = window.prompt("Enter image URL");
                if (url) {
                    editor.chain().focus().deleteRange(range).setImage({ src: url }).run();
                }
            },
        },
    ].filter((item) => item.title.toLowerCase().includes(query.toLowerCase()));
};

export const SlashCommand = Extension.create({
    name: "slashCommand",

    addOptions() {
        return {
            suggestion: {
                char: "/",
                command: ({ editor, range, props }: any) => {
                    props.command({ editor, range });
                },
                items: getSuggestionItems,
                render: renderItems,
            },
        };
    },

    addProseMirrorPlugins() {
        return [
            Suggestion({
                editor: this.editor,
                ...this.options.suggestion,
            }),
        ];
    },
});
