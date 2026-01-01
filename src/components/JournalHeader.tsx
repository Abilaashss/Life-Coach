"use client";

import { useState, useRef } from "react";
import { Smile, Image as ImageIcon, X } from "lucide-react";
import EmojiPicker, { EmojiClickData, Theme } from "emoji-picker-react";
import { motion, AnimatePresence } from "framer-motion";

interface JournalHeaderProps {
    coverImage?: string;
    icon?: string;
    onUpdate: (updates: { coverImage?: string; icon?: string }) => void;
}

const GRADIENTS = [
    "linear-gradient(to right, #ff7e5f, #feb47b)",
    "linear-gradient(to right, #6a11cb, #2575fc)",
    "linear-gradient(to right, #43cea2, #185a9d)",
    "linear-gradient(to right, #ff9966, #ff5e62)",
    "linear-gradient(to right, #00c6ff, #0072ff)",
];

export default function JournalHeader({ coverImage, icon, onUpdate }: JournalHeaderProps) {
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    const [showCoverMenu, setShowCoverMenu] = useState(false);

    const handleEmojiClick = (emojiData: EmojiClickData) => {
        onUpdate({ icon: emojiData.emoji });
        setShowEmojiPicker(false);
    };

    const handleRandomCover = () => {
        const randomGradient = GRADIENTS[Math.floor(Math.random() * GRADIENTS.length)];
        onUpdate({ coverImage: randomGradient });
        setShowCoverMenu(false);
    };

    const handleRemoveCover = () => {
        onUpdate({ coverImage: undefined });
        setShowCoverMenu(false);
    };

    const handleRemoveIcon = () => {
        onUpdate({ icon: undefined });
        setShowEmojiPicker(false);
    };

    return (
        <div className="group relative mb-12">
            {/* Cover Image */}
            <div
                className={`relative w-full h-56 md:h-80 transition-all duration-500 ease-in-out ${coverImage ? "opacity-100" : "opacity-0 hover:opacity-100 h-24 md:h-32 bg-muted/10 border-b border-dashed border-border/50"
                    }`}
                style={{
                    backgroundImage: coverImage || "none",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                {coverImage && (
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500" />
                )}

                {coverImage && (
                    <button
                        onClick={() => setShowCoverMenu(!showCoverMenu)}
                        className="absolute bottom-4 right-4 bg-black/40 backdrop-blur-md text-white/90 text-xs font-medium px-3 py-1.5 rounded-full hover:bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 shadow-lg border border-white/10"
                    >
                        Change Cover
                    </button>
                )}
                {!coverImage && (
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button
                            onClick={handleRandomCover}
                            className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground bg-background/50 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm hover:shadow-md transition-all"
                        >
                            <ImageIcon className="w-4 h-4" /> Add Cover
                        </button>
                    </div>
                )}
            </div>

            {/* Cover Menu */}
            <AnimatePresence>
                {showCoverMenu && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        className="absolute right-4 top-full mt-2 z-50 bg-popover/90 backdrop-blur-xl border border-border/50 rounded-xl shadow-2xl p-1.5 flex flex-col gap-0.5 min-w-[160px]"
                    >
                        <button
                            onClick={handleRandomCover}
                            className="text-left text-sm p-2 hover:bg-muted/80 rounded-lg transition-colors"
                        >
                            Random Gradient
                        </button>
                        <button
                            onClick={handleRemoveCover}
                            className="text-left text-sm p-2 hover:bg-destructive/10 text-destructive rounded-lg transition-colors"
                        >
                            Remove Cover
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Icon */}
            <div className="relative -mt-12 ml-8 md:ml-20 z-20 w-fit">
                <div className="relative group/icon">
                    <button
                        onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                        className="text-7xl md:text-8xl hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl filter"
                    >
                        {icon || <span className="opacity-0 group-hover:opacity-50 text-5xl grayscale hover:grayscale-0 transition-all">😀</span>}
                    </button>
                    {icon && (
                        <button
                            onClick={handleRemoveIcon}
                            className="absolute -top-2 -right-2 bg-background/80 backdrop-blur-sm text-muted-foreground p-1.5 rounded-full hover:bg-destructive hover:text-destructive-foreground opacity-0 group-hover/icon:opacity-100 transition-all duration-200 shadow-sm border border-border/50"
                        >
                            <X className="w-3 h-3" />
                        </button>
                    )}
                </div>

                {/* Emoji Picker */}
                <AnimatePresence>
                    {showEmojiPicker && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 10 }}
                            className="absolute top-full left-0 mt-4 z-50"
                        >
                            <div className="fixed inset-0 z-40" onClick={() => setShowEmojiPicker(false)} />
                            <div className="relative z-50 shadow-2xl rounded-xl overflow-hidden border border-border/50">
                                <EmojiPicker onEmojiClick={handleEmojiClick} theme={Theme.AUTO} />
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Add Icon Button (if no icon) */}
            {!icon && (
                <div className="absolute top-full mt-4 ml-8 md:ml-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                        onClick={() => setShowEmojiPicker(true)}
                        className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground bg-background/50 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm hover:shadow-md transition-all"
                    >
                        <Smile className="w-4 h-4" /> Add Icon
                    </button>
                </div>
            )}
        </div>
    );
}
