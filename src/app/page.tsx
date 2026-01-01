"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CheckSquare, Bot, Timer, ArrowRight, BookOpen } from "lucide-react";
import { Card } from "@/components/ui/Card";

export default function Home() {
  const features = [
    {
      title: "Smart To-Do List",
      description: "Organize tasks with AI prioritization and smart scheduling.",
      icon: CheckSquare,
      href: "/todo",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "AI Life Coach",
      description: "Get personalized advice, mood tracking, and motivation.",
      icon: Bot,
      href: "/coach",
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Pomodoro Timer",
      description: "Focus better with AI-powered presence detection.",
      icon: Timer,
      href: "/pomodoro",
      color: "from-orange-500 to-red-500",
    },
    {
      title: "Daily Journal",
      description: "Track your day and thoughts with smart AI updates.",
      icon: BookOpen,
      href: "/journal",
      color: "from-teal-500 to-emerald-500",
    },
  ];

  return (
    <div className="container mx-auto p-4 md:p-8 space-y-12">
      <header className="text-center py-12">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold text-foreground mb-6 tracking-tight"
        >
          Elevate Your Life
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground text-xl max-w-2xl mx-auto font-light"
        >
          Your personal AI-powered system for productivity, mental wellness, and growth.
        </motion.p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.1 }}
          >
            <Link href={feature.href}>
              <Card className="h-full p-8 hover:scale-[1.02] transition-all duration-300 cursor-pointer group relative overflow-hidden border-border/50 hover:border-foreground/20 hover:shadow-lg">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-foreground group-hover:text-background transition-colors duration-300">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground mb-6 font-light">{feature.description}</p>
                <div className="flex items-center text-sm font-medium text-foreground group-hover:translate-x-1 transition-transform">
                  Get Started <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
