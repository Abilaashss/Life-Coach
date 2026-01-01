"use client";

import { useState, useEffect } from "react";
import { useApp, Task } from "@/context/AppContext";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Check, Trash2, Calendar, Clock, AlertCircle, Edit } from "lucide-react";
import { cn } from "@/lib/utils";

export function TaskBoard() {
    const { tasks, addTask, toggleTask, deleteTask, updateTask } = useApp();
    const [newTask, setNewTask] = useState("");
    const [priority, setPriority] = useState<Task["priority"]>("medium");
    const [dueDate, setDueDate] = useState("");
    const [dueTime, setDueTime] = useState("");

    // Edit Mode
    const [editingId, setEditingId] = useState<string | null>(null);

    // Check URL for edit param on mount
    useEffect(() => {
        if (typeof window !== "undefined") {
            const params = new URLSearchParams(window.location.search);
            const editId = params.get("edit");
            if (editId) {
                const taskToEdit = tasks.find(t => t.id === editId);
                if (taskToEdit) {
                    setEditingId(editId);
                    setNewTask(taskToEdit.title);
                    setPriority(taskToEdit.priority);
                    setDueDate(taskToEdit.dueDate || "");
                    setDueTime(taskToEdit.dueTime || "");
                    // Clean URL
                    window.history.replaceState({}, "", "/todo");
                }
            }
        }
    }, [tasks]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!newTask.trim()) return;

        if (editingId) {
            updateTask(editingId, {
                title: newTask,
                priority,
                dueDate,
                dueTime
            });
            setEditingId(null);
        } else {
            addTask(newTask, priority, dueDate, dueTime);
        }

        setNewTask("");
        setPriority("medium");
        setDueDate("");
        setDueTime("");
    };

    const cancelEdit = () => {
        setEditingId(null);
        setNewTask("");
        setPriority("medium");
        setDueDate("");
        setDueTime("");
    };

    const activeTasks = tasks.filter((t) => !t.completed);
    const completedTasks = tasks.filter((t) => t.completed);

    const getPriorityColor = (p: Task["priority"]) => {
        switch (p) {
            case "high": return "text-destructive bg-destructive/10 border-destructive/20";
            case "medium": return "text-yellow-600 bg-yellow-500/10 border-yellow-500/20";
            case "low": return "text-green-600 bg-green-500/10 border-green-500/20";
            default: return "text-muted-foreground";
        }
    };

    // Helper to trigger native picker
    const showPicker = (id: string) => {
        const el = document.getElementById(id);
        if (el instanceof HTMLInputElement) {
            if ("showPicker" in el) {
                (el as any).showPicker();
            } else {
                el.focus();
            }
        }
    };

    return (
        <div className="space-y-8">
            <Card className={cn("p-6 border-border/40 shadow-sm transition-all duration-300 bg-card/50 backdrop-blur-sm", editingId && "ring-2 ring-primary/20 border-primary/50")}>
                <div className="mb-4 flex items-center justify-between">
                    <h2 className="text-lg font-semibold tracking-tight flex items-center gap-2">
                        {editingId ? <Edit className="w-5 h-5 text-primary" /> : <Plus className="w-5 h-5" />}
                        {editingId ? "Edit Task" : "Add New Task"}
                    </h2>
                    {editingId && (
                        <Button variant="ghost" size="sm" onClick={cancelEdit} className="h-8 text-muted-foreground hover:text-foreground">
                            Cancel
                        </Button>
                    )}
                </div>
                <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="flex gap-3">
                        <div className="flex-1 relative group">
                            <Input
                                value={newTask}
                                onChange={(e) => setNewTask(e.target.value)}
                                placeholder={editingId ? "Update task details..." : "What needs to be done?"}
                                className="w-full bg-background border-border/50 focus:border-foreground/20 focus:ring-1 focus:ring-foreground/20 transition-all h-12 pl-4 text-base shadow-sm group-hover:border-border/80"
                                autoFocus={!!editingId}
                            />
                        </div>
                        <Button
                            type="submit"
                            className={cn(
                                "h-12 px-6 text-background hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl",
                                editingId ? "bg-primary hover:bg-primary/90" : "bg-foreground hover:bg-foreground/90"
                            )}
                        >
                            {editingId ? <Check className="w-5 h-5 mr-2" /> : <Plus className="w-5 h-5 mr-2" />}
                            <span className="font-medium">{editingId ? "Update" : "Add Task"}</span>
                        </Button>
                    </div>

                    <div className="flex flex-wrap gap-4 items-center pt-2">
                        {/* Priority Selector */}
                        <div className="flex items-center gap-2 bg-secondary/30 p-1.5 rounded-lg border border-border/50 hover:border-border transition-colors">
                            <span className="text-xs font-medium text-muted-foreground px-2">Priority</span>
                            <select
                                value={priority}
                                onChange={(e) => setPriority(e.target.value as Task["priority"])}
                                className="bg-transparent text-sm font-medium focus:outline-none cursor-pointer hover:text-foreground transition-colors"
                            >
                                <option value="low">Low</option>
                                <option value="medium">Medium</option>
                                <option value="high">High</option>
                            </select>
                        </div>

                        <div className="h-4 w-px bg-border/50" />

                        {/* Premium Date Picker */}
                        <div
                            className="flex items-center gap-2 group cursor-pointer bg-secondary/10 hover:bg-secondary/30 px-3 py-1.5 rounded-lg border border-transparent hover:border-border/50 transition-all"
                            onClick={() => showPicker("date-input")}
                        >
                            <Calendar className={cn("w-4 h-4 transition-colors", dueDate ? "text-foreground" : "text-muted-foreground")} />
                            <span className={cn("text-sm font-medium", dueDate ? "text-foreground" : "text-muted-foreground")}>
                                {dueDate ? new Date(dueDate).toLocaleDateString(undefined, { month: 'short', day: 'numeric' }) : "Set Date"}
                            </span>
                            <input
                                id="date-input"
                                type="date"
                                value={dueDate}
                                onChange={(e) => setDueDate(e.target.value)}
                                className="sr-only" // Hide default input but keep it accessible/functional via showPicker
                            />
                        </div>

                        {/* Premium Time Picker */}
                        <div
                            className="flex items-center gap-2 group cursor-pointer bg-secondary/10 hover:bg-secondary/30 px-3 py-1.5 rounded-lg border border-transparent hover:border-border/50 transition-all"
                            onClick={() => showPicker("time-input")}
                        >
                            <Clock className={cn("w-4 h-4 transition-colors", dueTime ? "text-foreground" : "text-muted-foreground")} />
                            <span className={cn("text-sm font-medium", dueTime ? "text-foreground" : "text-muted-foreground")}>
                                {dueTime || "Set Time"}
                            </span>
                            <input
                                id="time-input"
                                type="time"
                                value={dueTime}
                                onChange={(e) => setDueTime(e.target.value)}
                                className="sr-only"
                            />
                        </div>
                    </div>
                </form>
            </Card>

            <div className="space-y-4">
                <h2 className="text-xl font-semibold tracking-tight">Active Tasks</h2>
                <div className="space-y-2">
                    <AnimatePresence mode="popLayout">
                        {activeTasks.length === 0 && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-center text-muted-foreground py-8 font-light"
                            >
                                No active tasks. You're all caught up!
                            </motion.div>
                        )}
                        {activeTasks.map((task) => (
                            <TaskItem key={task.id} task={task} onToggle={() => toggleTask(task.id)} onDelete={() => deleteTask(task.id)} getPriorityColor={getPriorityColor} />
                        ))}
                    </AnimatePresence>
                </div>
            </div>

            {completedTasks.length > 0 && (
                <div className="space-y-4 pt-8 border-t border-border/50">
                    <h2 className="text-xl font-semibold text-muted-foreground tracking-tight">Completed</h2>
                    <div className="space-y-2 opacity-60">
                        {completedTasks.map((task) => (
                            <TaskItem key={task.id} task={task} onToggle={() => toggleTask(task.id)} onDelete={() => deleteTask(task.id)} getPriorityColor={getPriorityColor} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

function TaskItem({ task, onToggle, onDelete, getPriorityColor }: { task: Task; onToggle: () => void; onDelete: () => void; getPriorityColor: (p: Task["priority"]) => string }) {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
            whileHover={{ scale: 1.02, backgroundColor: "rgba(var(--secondary), 0.5)" }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
            className="group flex items-center gap-4 p-4 rounded-xl border border-border/40 bg-card hover:border-border/80 hover:shadow-md transition-all duration-300 cursor-pointer"
        >
            <button
                onClick={(e) => { e.stopPropagation(); onToggle(); }}
                className={cn(
                    "flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300",
                    task.completed
                        ? "bg-foreground border-foreground text-background scale-110"
                        : "border-muted-foreground/30 hover:border-foreground hover:scale-110"
                )}
            >
                <motion.div
                    initial={false}
                    animate={{ scale: task.completed ? 1 : 0 }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                >
                    <Check className="w-3.5 h-3.5" />
                </motion.div>
            </button>

            <div className="flex-1 min-w-0" onClick={onToggle}>
                <div className={cn("font-medium truncate transition-all duration-300 text-base", task.completed && "line-through text-muted-foreground decoration-border/50")}>
                    {task.title}
                </div>
                <div className="flex items-center gap-3 mt-1.5 text-xs text-muted-foreground">
                    <span className={cn("px-2.5 py-0.5 rounded-full border uppercase text-[10px] font-bold tracking-wider shadow-sm", getPriorityColor(task.priority))}>
                        {task.priority}
                    </span>
                    {(task.dueDate || task.dueTime) && (
                        <span className="flex items-center gap-1.5 opacity-80">
                            <Calendar className="w-3 h-3" />
                            {task.dueDate} {task.dueTime && `• ${task.dueTime}`}
                        </span>
                    )}
                </div>
            </div>

            <button
                onClick={(e) => { e.stopPropagation(); onDelete(); }}
                className="opacity-0 group-hover:opacity-100 p-2 text-muted-foreground hover:text-destructive hover:bg-destructive/10 rounded-lg transition-all duration-200 transform hover:scale-110"
            >
                <Trash2 className="w-4 h-4" />
            </button>
        </motion.div>
    );
}
