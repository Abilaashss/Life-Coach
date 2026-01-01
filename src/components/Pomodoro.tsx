"use client";

import { useState, useEffect, useRef } from "react";
import { useApp } from "@/context/AppContext";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Play, Pause, RotateCcw, Timer, Camera, Settings, AlertTriangle, CheckCircle2, Eye } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Webcam from "react-webcam";
import * as tf from "@tensorflow/tfjs";
import * as blazeface from "@tensorflow-models/blazeface";
import { analyzeScreenshot } from "@/lib/gemini";

export function Pomodoro() {
    const {
        timeLeft, isActive, timerMode: mode, cycles,
        workDuration, setWorkDuration, breakDuration, setBreakDuration,
        startTimer, pauseTimer, resetTimer, setIsActive
    } = useApp();

    // AI/Camera
    const [isAiEnabled, setIsAiEnabled] = useState(false);
    const webcamRef = useRef<Webcam>(null);
    const modelRef = useRef<blazeface.BlazeFaceModel | null>(null);
    const [isFaceDetected, setIsFaceDetected] = useState(true);
    const [warningTime, setWarningTime] = useState(0);

    // AI Guardian (Screen Monitoring)
    const [isGuardianEnabled, setIsGuardianEnabled] = useState(false);
    const [distractionData, setDistractionData] = useState<{ isDistracted: boolean; reason: string; advice: string } | null>(null);
    const screenStreamRef = useRef<MediaStream | null>(null);
    const screenVideoRef = useRef<HTMLVideoElement | null>(null);
    const screenCanvasRef = useRef<HTMLCanvasElement | null>(null);
    const [guardianLoading, setGuardianLoading] = useState(false);

    // Load BlazeFace Model
    useEffect(() => {
        const loadModel = async () => {
            await tf.ready();
            modelRef.current = await blazeface.load();
            console.log("BlazeFace model loaded");
        };
        loadModel();
    }, []);

    // AI Face Detection Loop
    useEffect(() => {
        let interval: NodeJS.Timeout;

        if (isActive && isAiEnabled && mode === "work") {
            interval = setInterval(async () => {
                if (webcamRef.current && webcamRef.current.video && modelRef.current) {
                    const video = webcamRef.current.video;
                    if (video.readyState === 4) {
                        const predictions = await modelRef.current.estimateFaces(video, false);
                        const detected = predictions.length > 0;
                        setIsFaceDetected(detected);

                        if (!detected) {
                            setWarningTime((prev) => prev + 1);
                        } else {
                            setWarningTime(0);
                        }
                    }
                }
            }, 1000);
        }

        return () => clearInterval(interval);
    }, [isActive, isAiEnabled, mode]);

    // AI Guardian: Screen Analysis Loop
    useEffect(() => {
        let interval: NodeJS.Timeout;

        if (isActive && isGuardianEnabled && mode === "work" && screenStreamRef.current) {
            interval = setInterval(async () => {
                if (screenVideoRef.current && screenCanvasRef.current) {
                    const video = screenVideoRef.current;
                    const canvas = screenCanvasRef.current;

                    if (video.readyState === 4) {
                        // Capture frame
                        const context = canvas.getContext('2d');
                        if (context) {
                            canvas.width = video.videoWidth;
                            canvas.height = video.videoHeight;
                            context.drawImage(video, 0, 0, canvas.width, canvas.height);

                            // Convert to base64
                            const base64Image = canvas.toDataURL('image/jpeg', 0.5); // Low quality for speed

                            // Analyze
                            console.log("Analyzing screen...");
                            // In a real app, 'Productive Work' would come from the current active task text
                            const result = await analyzeScreenshot(base64Image, "Productive Work / Learning / Coding");

                            if (result.isDistracted) {
                                setDistractionData(result);
                            } else {
                                setDistractionData(null);
                            }
                        }
                    }
                }
            }, 10000); // Check every 10 seconds
        }

        return () => clearInterval(interval);
    }, [isActive, mode, isGuardianEnabled]);

    const toggleGuardian = async () => {
        if (isGuardianEnabled) {
            // Stop sharing
            if (screenStreamRef.current) {
                screenStreamRef.current.getTracks().forEach(track => track.stop());
                screenStreamRef.current = null;
            }
            setIsGuardianEnabled(false);
            setDistractionData(null);
        } else {
            // Start sharing
            try {
                setGuardianLoading(true);
                const stream = await navigator.mediaDevices.getDisplayMedia({
                    video: { width: 1280, height: 720 },
                    audio: false
                });

                screenStreamRef.current = stream;

                // Connect to invisible video element to play it (required to grab frames)
                if (screenVideoRef.current) {
                    screenVideoRef.current.srcObject = stream;
                    screenVideoRef.current.play();
                }

                // Handle user manually stopping share via browser UI
                stream.getVideoTracks()[0].onended = () => {
                    setIsGuardianEnabled(false);
                    screenStreamRef.current = null;
                };

                setIsGuardianEnabled(true);
            } catch (err) {
                console.error("Error enable screen share:", err);
                alert("Could not enable Screen Guardian. To use this feature, please allow screen recording permission.");
            } finally {
                setGuardianLoading(false);
            }
        }
    };

    // Auto-Reset on Warning (Face)
    useEffect(() => {
        if (warningTime > 5) { // 5 seconds warning
            setIsActive(false);
            resetTimer();
            setWarningTime(0);
            alert("Timer reset! You left the workspace.");
        }
    }, [warningTime, setIsActive, resetTimer]);

    const toggleTimer = () => {
        if (isActive) pauseTimer();
        else startTimer();
    };

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
    };

    const totalTime = mode === "work" ? workDuration * 60 : breakDuration * 60;
    const progress = ((totalTime - timeLeft) / totalTime) * 100;

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Timer Card */}
            <Card className="flex flex-col items-center justify-center p-8 relative overflow-hidden min-h-[400px] md:col-span-1 border-border/40 shadow-sm hover:shadow-md transition-all duration-300 bg-card/50 backdrop-blur-sm">
                {/* Background Progress */}
                <div className="absolute bottom-0 left-0 h-1.5 bg-foreground/80 transition-all duration-1000 ease-linear" style={{ width: `${progress}%` }} />

                {/* Subtle Background Pulse when Active */}
                {isActive && (
                    <div className="absolute inset-0 bg-foreground/5 animate-pulse pointer-events-none" />
                )}

                {/* Hidden Video/Canvas for scraping */}
                <video ref={screenVideoRef} className="hidden" muted playsInline />
                <canvas ref={screenCanvasRef} className="hidden" />

                {/* Header */}
                <div className="flex items-center justify-between w-full mb-8 z-10">
                    <div className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-secondary/30 border border-border/50 backdrop-blur-md">
                        <Timer className={cn("w-5 h-5", mode === "work" ? "text-foreground" : "text-muted-foreground")} />
                        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground">{mode} Mode</h2>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground bg-secondary/20 px-3 py-1.5 rounded-full">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Cycles: <span className="text-foreground font-bold">{cycles}</span></span>
                    </div>
                </div>

                {/* Guardian Badge */}
                {isGuardianEnabled && (
                    <div className="absolute top-20 right-8 md:right-12 z-10 flex flex-col items-end gap-1">
                        <div className="flex items-center gap-1.5 text-xs font-bold px-2 py-0.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 backdrop-blur-md animate-pulse">
                            <Eye className="w-3 h-3" /> Guardian Active
                        </div>
                    </div>
                )}

                {/* Timer Display */}
                <div className="relative mb-10 z-10">
                    <div className="text-7xl md:text-8xl font-mono font-bold tabular-nums tracking-tighter text-foreground drop-shadow-sm">
                        {formatTime(timeLeft)}
                    </div>

                    {/* Warning Overlay (Face) */}
                    <AnimatePresence>
                        {warningTime > 0 && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                className="absolute inset-0 -m-4 flex items-center justify-center bg-background/95 backdrop-blur-md rounded-2xl z-20 border border-destructive/20 shadow-xl"
                            >
                                <div className="flex flex-col items-center text-destructive p-6 text-center">
                                    <AlertTriangle className="w-12 h-12 mb-3 animate-bounce" />
                                    <span className="font-bold text-lg mb-1">Face Not Detected!</span>
                                    <span className="text-sm opacity-80">Resetting in {5 - warningTime}s</span>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Distraction Overlay (AI Guardian) */}
                    <AnimatePresence>
                        {distractionData && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="absolute top-0 left-0 right-0 flex justify-center z-30 pt-8"
                            >
                                <div className="bg-red-500/90 backdrop-blur-md text-white px-6 py-4 rounded-xl shadow-2xl font-bold flex flex-col items-center gap-2 max-w-[80%] text-center border border-red-400/50">
                                    <div className="flex items-center gap-2 text-xl">
                                        <AlertTriangle className="w-6 h-6 animate-bounce" />
                                        <span>DISTRACTION DETECTED</span>
                                    </div>
                                    <p className="text-sm font-normal opacity-90">{distractionData.reason}</p>
                                    <p className="text-xs uppercase tracking-widest bg-white/20 px-2 py-1 rounded">{distractionData.advice}</p>
                                    <Button
                                        size="sm"
                                        variant="ghost"
                                        className="mt-1 h-6 text-xs hover:bg-white/20 text-white"
                                        onClick={() => setDistractionData(null)}
                                    >
                                        I'm back, dismiss
                                    </Button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Controls */}
                <div className="flex gap-6 z-10">
                    <Button
                        onClick={toggleTimer}
                        size="lg"
                        className={cn(
                            "rounded-full w-20 h-20 p-0 flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95",
                            isActive
                                ? "bg-destructive hover:bg-destructive/90 text-destructive-foreground ring-4 ring-destructive/20"
                                : "bg-foreground hover:bg-foreground/90 text-background ring-4 ring-foreground/10"
                        )}
                    >
                        {isActive ? <Pause className="w-8 h-8 fill-current" /> : <Play className="w-8 h-8 ml-1 fill-current" />}
                    </Button>
                    <Button
                        onClick={resetTimer}
                        variant="outline"
                        size="lg"
                        className="rounded-full w-20 h-20 p-0 flex items-center justify-center border-2 border-border hover:border-foreground/50 hover:bg-secondary/50 transition-all duration-300 hover:rotate-180"
                    >
                        <RotateCcw className="w-6 h-6 text-muted-foreground hover:text-foreground transition-colors" />
                    </Button>
                </div>
            </Card>

            {/* Settings & Camera Card */}
            <div className="space-y-6 md:col-span-1">
                {/* Settings */}
                <Card className="p-6 border-border/40 shadow-sm hover:shadow-md transition-all duration-300 bg-card/50 backdrop-blur-sm">
                    <h3 className="font-bold mb-5 flex items-center gap-2 text-lg">
                        <Settings className="w-5 h-5" /> Session Settings
                    </h3>
                    <div className="space-y-5">
                        <div className="group">
                            <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 block group-hover:text-foreground transition-colors">Work Duration (mins)</label>
                            <Input
                                type="number"
                                value={workDuration}
                                onChange={(e) => setWorkDuration(Number(e.target.value))}
                                className="bg-secondary/20 border-border/50 focus:bg-background transition-all h-11 font-mono text-lg"
                            />
                        </div>
                        <div className="group">
                            <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 block group-hover:text-foreground transition-colors">Break Duration (mins)</label>
                            <Input
                                type="number"
                                value={breakDuration}
                                onChange={(e) => setBreakDuration(Number(e.target.value))}
                                className="bg-secondary/20 border-border/50 focus:bg-background transition-all h-11 font-mono text-lg"
                            />
                        </div>
                    </div>
                </Card>

                {/* AI Detection */}
                <Card className="p-6 overflow-hidden border-border/40 shadow-sm hover:shadow-md transition-all duration-300 bg-card/50 backdrop-blur-sm">
                    <div className="flex items-center justify-between mb-5">
                        <h3 className="font-bold flex items-center gap-2 text-lg">
                            <Camera className="w-5 h-5" /> AI Focus Tracking
                        </h3>
                        <div className="flex items-center gap-2">
                            <span className={cn("text-xs font-medium transition-colors", isAiEnabled ? "text-foreground" : "text-muted-foreground")}>
                                {isAiEnabled ? "Enabled" : "Disabled"}
                            </span>
                            <div
                                onClick={() => setIsAiEnabled(!isAiEnabled)}
                                className={cn(
                                    "w-12 h-6 rounded-full p-1 cursor-pointer transition-colors duration-300 ease-in-out",
                                    isAiEnabled ? "bg-foreground" : "bg-secondary"
                                )}
                            >
                                <div className={cn(
                                    "w-4 h-4 rounded-full bg-background shadow-sm transition-transform duration-300 ease-in-out",
                                    isAiEnabled ? "translate-x-6" : "translate-x-0"
                                )} />
                            </div>
                        </div>
                    </div>

                    {/* Guardian Mode Toggle */}
                    <div className="flex items-center justify-between mb-5 border-t border-border/50 pt-5">
                        <div className="flex flex-col">
                            <h3 className="font-bold flex items-center gap-2 text-lg">
                                <Eye className="w-5 h-5" /> AI Guardian
                            </h3>
                            <p className="text-[10px] text-muted-foreground">Requires screen permission</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className={cn("text-xs font-medium transition-colors", isGuardianEnabled ? "text-foreground" : "text-muted-foreground")}>
                                {isGuardianEnabled ? "Active" : "Off"}
                            </span>
                            <div
                                onClick={toggleGuardian}
                                className={cn(
                                    "w-12 h-6 rounded-full p-1 cursor-pointer transition-colors duration-300 ease-in-out relative",
                                    isGuardianEnabled ? "bg-blue-600" : "bg-secondary",
                                    guardianLoading && "opacity-50 pointer-events-none"
                                )}
                            >
                                <div className={cn(
                                    "w-4 h-4 rounded-full bg-background shadow-sm transition-transform duration-300 ease-in-out",
                                    isGuardianEnabled ? "translate-x-6" : "translate-x-0"
                                )} />
                            </div>
                        </div>
                    </div>

                    <div className="px-4 py-3 bg-secondary/10 rounded-lg border border-border/50">
                        <p className="text-xs text-muted-foreground leading-relaxed">
                            <span className="font-semibold text-foreground">AI Guardian</span> visually analyzes your screen every 10s.
                            If it sees social media or distractions relative to your task, it will alert you.
                        </p>
                    </div>

                    <div className="relative aspect-video bg-secondary/20 rounded-xl overflow-hidden flex items-center justify-center border border-border/50 shadow-inner group mt-5">
                        {isAiEnabled ? (
                            <Webcam
                                ref={webcamRef}
                                audio={false}
                                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                                screenshotFormat="image/jpeg"
                                videoConstraints={{ facingMode: "user" }}
                            />
                        ) : (
                            <div className="text-muted-foreground text-sm text-center p-6 max-w-[250px] flex flex-col items-center gap-3">
                                <div className="w-12 h-12 rounded-full bg-secondary/30 flex items-center justify-center">
                                    <Camera className="w-6 h-6 opacity-50" />
                                </div>
                                <p>Enable AI to track your presence and ensure you stay focused.</p>
                            </div>
                        )}

                        {isAiEnabled && (
                            <div className={cn(
                                "absolute top-3 right-3 px-3 py-1.5 rounded-lg text-xs font-bold backdrop-blur-md border shadow-sm transition-all duration-300",
                                isFaceDetected
                                    ? "bg-green-500/10 text-green-600 border-green-500/20"
                                    : "bg-red-500/10 text-red-600 border-red-500/20 animate-pulse"
                            )}>
                                {isFaceDetected ? "Face Detected" : "No Face Detected"}
                            </div>
                        )}
                    </div>
                </Card>
            </div>
        </div>
    );
}
