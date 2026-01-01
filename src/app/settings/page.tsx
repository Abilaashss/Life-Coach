"use client";

import { useApp, CoachingStyle, ColorTheme } from "@/context/AppContext";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { motion } from "framer-motion";
import { User, Palette, MessageSquare, Check, Sparkles, ChevronDown, ChevronUp } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const coachingStyles: { id: CoachingStyle; label: string; description: string; icon: string }[] = [
    { id: "supportive", label: "Supportive", description: "Gentle, encouraging, and empathetic.", icon: "🤗" },
    { id: "tough-love", label: "Tough Love", description: "Direct, no-nonsense, and pushes you hard.", icon: "💪" },
    { id: "analytical", label: "Analytical", description: "Data-driven, logical, and strategic.", icon: "📊" },
    { id: "humorous", label: "Humorous", description: "Fun, witty, and keeps things light.", icon: "😂" },
    { id: "zen", label: "Zen", description: "Calm, mindful, and focused on balance.", icon: "🧘" },
];

const basicThemes: { id: ColorTheme; label: string; colors: string[] }[] = [
    { id: "light", label: "Light", colors: ["bg-white", "bg-blue-500"] },
    { id: "dark", label: "Dark", colors: ["bg-slate-900", "bg-blue-500"] },
    { id: "batman", label: "Batman", colors: ["bg-black", "bg-yellow-500"] },
];

const premiumThemes: { id: ColorTheme; label: string; colors: string[] }[] = [
    { id: "catppuccin-mocha", label: "Catppuccin Mocha", colors: ["bg-[#1e1e2e]", "bg-[#cba6f7]"] },
    { id: "catppuccin-latte", label: "Catppuccin Latte", colors: ["bg-[#eff1f5]", "bg-[#8839ef]"] },
    { id: "github-dark", label: "GitHub Dark", colors: ["bg-[#0d1117]", "bg-[#1f6feb]"] },
    { id: "gold", label: "Gold", colors: ["bg-black", "bg-[#ffd700]"] },
    { id: "terminal", label: "Terminal", colors: ["bg-black", "bg-[#00ff00]"] },
    { id: "iron-man", label: "Iron Man", colors: ["bg-[#4a0404]", "bg-[#ffd700]"] },
    { id: "carbon-dark", label: "Carbon Dark", colors: ["bg-[#1a1a1a]", "bg-[#3b82f6]"] },
    { id: "carbon-light", label: "Carbon Light", colors: ["bg-[#f5f5f5]", "bg-[#3b82f6]"] },
    { id: "kim-dokja", label: "Kim Dokja", colors: ["bg-[#0f172a]", "bg-white"] },
    { id: "kim-dokja-mother", label: "Kim Dokja's Mother", colors: ["bg-[#1a0505]", "bg-[#8b0000]"] },
    { id: "yoo-joonghyuk", label: "Yoo Joonghyuk", colors: ["bg-black", "bg-[#3b82f6]"] },
    { id: "lee-jihye", label: "Lee Jihye", colors: ["bg-[#1e293b]", "bg-[#cbd5e1]"] },
    { id: "jung-heewon", label: "Jung Heewon", colors: ["bg-[#2b0a0a]", "bg-[#ef4444]"] },
];

export default function SettingsPage() {
    const { userProfile, updateUserProfile } = useApp();
    const [name, setName] = useState(userProfile.name);
    const [bio, setBio] = useState(userProfile.bio);
    const [showMoreThemes, setShowMoreThemes] = useState(true);
    const [isSaving, setIsSaving] = useState(false);

    // Sync local state with context when context loads
    useEffect(() => {
        setName(userProfile.name);
        setBio(userProfile.bio);
    }, [userProfile.name, userProfile.bio]);

    const handleSaveProfile = () => {
        setIsSaving(true);
        updateUserProfile({ name, bio });
        // Simulate a brief delay for visual feedback
        setTimeout(() => setIsSaving(false), 1000);
    };

    const ThemeOption = ({ theme }: { theme: { id: ColorTheme; label: string; colors: string[] } }) => (
        <button
            onClick={() => updateUserProfile({ colorTheme: theme.id })}
            className={cn(
                "flex items-center justify-between w-full p-3 rounded-xl transition-all group border",
                userProfile.colorTheme === theme.id
                    ? "bg-secondary border-primary/50 shadow-sm"
                    : "hover:bg-secondary border-transparent hover:border-border"
            )}
        >
            <div className="flex items-center gap-3">
                <div className="flex gap-1">
                    {theme.colors.map((color, i) => (
                        <div key={i} className={cn("w-4 h-4 rounded-full border border-border shadow-sm", color)} />
                    ))}
                </div>
                <span className={cn("font-medium", userProfile.colorTheme === theme.id ? "text-primary" : "text-foreground")}>
                    {theme.label}
                </span>
            </div>
            <div className={cn(
                "w-10 h-6 rounded-full transition-colors relative",
                userProfile.colorTheme === theme.id ? "bg-primary" : "bg-muted"
            )}>
                <div className={cn(
                    "absolute top-1 w-4 h-4 rounded-full bg-white shadow-sm transition-all",
                    userProfile.colorTheme === theme.id ? "left-5" : "left-1"
                )} />
            </div>
        </button>
    );

    return (
        <div className="container mx-auto p-4 pb-24 md:pb-4 max-w-2xl space-y-8">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-3 mb-8"
            >
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                    <Sparkles className="w-6 h-6" />
                </div>
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
                    <p className="text-muted-foreground">Personalize your experience.</p>
                </div>
            </motion.div>

            {/* Themes Section */}
            <section className="space-y-4">
                <div className="flex items-center gap-2 text-xl font-semibold">
                    <Palette className="w-5 h-5 text-primary" />
                    <h2>Appearance</h2>
                </div>
                <Card className="p-2 bg-card border-border overflow-hidden">
                    <div className="space-y-1">
                        {basicThemes.map((theme) => (
                            <ThemeOption key={theme.id} theme={theme} />
                        ))}
                    </div>

                    <div className="relative py-2">
                        <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t border-border" />
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-card px-2 text-muted-foreground">Premium Themes</span>
                        </div>
                    </div>

                    <div className="space-y-1">
                        {premiumThemes.map((theme) => (
                            <ThemeOption key={theme.id} theme={theme} />
                        ))}
                    </div>
                </Card>
            </section>

            {/* Profile Section */}
            <section className="space-y-4">
                <div className="flex items-center gap-2 text-xl font-semibold">
                    <User className="w-5 h-5 text-primary" />
                    <h2>Profile</h2>
                </div>
                <Card className="p-6 space-y-4 bg-card/50 backdrop-blur-sm border-border/50">
                    <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Your Name</label>
                            <Input
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="How should the coach call you?"
                                className="bg-secondary/20"
                            />
                        </div>
                        <div className="space-y-2 md:col-span-2">
                            <label className="text-sm font-medium">About You</label>
                            <textarea
                                value={bio}
                                onChange={(e) => setBio(e.target.value)}
                                placeholder="Tell the coach about your goals, job, or personality..."
                                className="flex min-h-[100px] w-full rounded-md border border-input bg-secondary/20 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            />
                        </div>
                    </div>

                    <div className="flex justify-end">
                        <Button
                            onClick={handleSaveProfile}
                            className={cn("gap-2 transition-all", isSaving ? "bg-green-600 hover:bg-green-700" : "")}
                            disabled={isSaving}
                        >
                            {isSaving ? (
                                <>
                                    <Check className="w-4 h-4" /> Saved!
                                </>
                            ) : (
                                <>
                                    <Check className="w-4 h-4" /> Save Profile
                                </>
                            )}
                        </Button>
                    </div>
                </Card>
            </section>

            {/* Coaching Style Section */}
            <section className="space-y-4">
                <div className="flex items-center gap-2 text-xl font-semibold">
                    <MessageSquare className="w-5 h-5 text-primary" />
                    <h2>Coaching Style</h2>
                </div>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {coachingStyles.map((style) => (
                        <motion.button
                            key={style.id}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => updateUserProfile({ coachingStyle: style.id })}
                            className={`relative p-4 rounded-xl border text-left transition-all ${userProfile.coachingStyle === style.id
                                ? "border-primary bg-primary/5 shadow-md ring-1 ring-primary"
                                : "border-border bg-card/50 hover:bg-secondary/50"
                                }`}
                        >
                            <div className="text-2xl mb-2">{style.icon}</div>
                            <div className="font-semibold">{style.label}</div>
                            <div className="text-xs text-muted-foreground mt-1">{style.description}</div>
                            {userProfile.coachingStyle === style.id && (
                                <div className="absolute top-3 right-3 text-primary">
                                    <Check className="w-4 h-4" />
                                </div>
                            )}
                        </motion.button>
                    ))}
                </div>
            </section>
        </div>
    );
}
