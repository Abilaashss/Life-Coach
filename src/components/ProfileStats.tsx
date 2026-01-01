"use client";

import { Card } from "@/components/ui/Card";
import { useApp } from "@/context/AppContext";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { motion } from "framer-motion";

export function ProfileStats() {
    const { tasks, mood } = useApp();

    // Mock data for demonstration - in a real app, this would come from history
    const data = [
        { name: "Mon", focus: 4, tasks: 3 },
        { name: "Tue", focus: 3, tasks: 5 },
        { name: "Wed", focus: 6, tasks: 4 },
        { name: "Thu", focus: 5, tasks: 6 },
        { name: "Fri", focus: 7, tasks: 8 },
        { name: "Sat", focus: 2, tasks: 2 },
        { name: "Sun", focus: 1, tasks: 1 },
    ];

    const completedTasks = tasks.filter(t => t.completed).length;
    const totalTasks = tasks.length;
    const completionRate = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

    return (
        <Card className="p-6 h-full min-h-[400px] flex flex-col">
            <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Your Profile
            </h2>

            <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="p-4 rounded-xl bg-primary/10 border border-primary/20">
                    <div className="text-sm text-muted-foreground">Tasks Completed</div>
                    <div className="text-3xl font-bold text-primary">{completedTasks}</div>
                </div>
                <div className="p-4 rounded-xl bg-secondary/10 border border-secondary/20">
                    <div className="text-sm text-muted-foreground">Completion Rate</div>
                    <div className="text-3xl font-bold text-secondary">{completionRate}%</div>
                </div>
            </div>

            <div className="flex-1 min-h-[200px]">
                <h3 className="text-sm font-medium mb-4 text-muted-foreground">Weekly Focus Hours</h3>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data}>
                        <XAxis
                            dataKey="name"
                            stroke="#888888"
                            fontSize={12}
                            tickLine={false}
                            axisLine={false}
                        />
                        <YAxis
                            stroke="#888888"
                            fontSize={12}
                            tickLine={false}
                            axisLine={false}
                            tickFormatter={(value) => `${value}h`}
                        />
                        <Tooltip
                            contentStyle={{ backgroundColor: "#0f0c29", border: "1px solid #2e1065", borderRadius: "8px" }}
                            itemStyle={{ color: "#fafafa" }}
                            cursor={{ fill: "rgba(255,255,255,0.05)" }}
                        />
                        <Bar dataKey="focus" radius={[4, 4, 0, 0]}>
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={index === 4 ? "#db2777" : "#7c3aed"} />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </Card>
    );
}
