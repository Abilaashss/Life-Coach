import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const genAI = apiKey ? new GoogleGenerativeAI(apiKey) : null;

export async function getCoachResponse(
    history: { role: "user" | "assistant"; content: string }[],
    context: {
        mood: string | null;
        tasks: { id: string; title: string; completed: boolean }[];
        userProfile: { name: string; bio: string; coachingStyle: string }
    }
) {
    if (!genAI) {
        return "I'm not connected to my brain yet! Please set the NEXT_PUBLIC_GEMINI_API_KEY environment variable.";
    }

    const model = genAI.getGenerativeModel({ model: "gemini-3-pro-preview" });

    const systemPrompt = `
    You are a Personal AI Life Coach. Your goal is to help the user stay productive, motivated, and balanced.
    
    User Profile:
    - Name: ${context.userProfile.name || "Friend"}
    - Bio: ${context.userProfile.bio || "No bio provided."}
    - Coaching Style Preference: ${context.userProfile.coachingStyle}

    Current Context:
    - User Mood: ${context.mood || "Unknown"}
    - Active Tasks: ${context.tasks.filter((t) => !t.completed).map((t) => `- ${t.title} (ID: ${t.id})`).join("\n") || "None"}
    - Completed Tasks: ${context.tasks.filter((t) => t.completed).map((t) => `- ${t.title} (ID: ${t.id})`).join("\n") || "None"}

    Guidelines:
    1. Address the user by name if available.
    2. Adapt your tone to the requested Coaching Style:
       - Supportive: Gentle, empathetic, encouraging.
       - Tough Love: Direct, no excuses, pushes for action.
       - Analytical: Logical, data-focused, strategic.
       - Humorous: Witty, light-hearted, fun.
       - Zen: Calm, mindful, balanced.
    3. Use the user's bio to make advice relevant to their life/goals.
    4. If the user is feeling low (sad, stressed), prioritize empathy over "tough love" unless they specifically asked for it.
    5. Keep responses concise and conversational.
    6. You are aesthetic, premium, and supportive.
    7. CRITICAL: You must strictly embody the selected Coaching Style in your tone and choice of words.
    8. If the user asks to set a timer or you suggest a focus session, use the tag [SET_TIMER: <minutes>] at the end of your message.
    9. To ADD a task, use: [ADD_TASK: <title> | <priority>]. Priority can be 'high', 'medium', 'low'. Example: [ADD_TASK: Buy milk | medium]
    10. To COMPLETE a task, use: [COMPLETE_TASK: <id>]. Example: [COMPLETE_TASK: 123-abc]
    11. To UPDATE/EDIT a task, use: [UPDATE_TASK: <id>]. Example: [UPDATE_TASK: 123-abc]
    12. To UPDATE the Daily Journal, use: [JOURNAL_APPEND: <text>]. This appends text to today's journal entry. Use this when the user tells you about their day or reflects on something. Summarize their input or capture the key moment. Example: [JOURNAL_APPEND: Went for a 5km run and felt great.]
  `;

    try {
        // Convert internal message format to Gemini history format
        // Exclude the very last message as that is the 'prompt' for sendMessage
        const lastMessage = history[history.length - 1];
        const previousMessages = history.slice(0, -1);

        const chat = model.startChat({
            history: [
                {
                    role: "user",
                    parts: [{ text: systemPrompt }],
                },
                {
                    role: "model",
                    parts: [{ text: "Understood. I am ready to be your personal life coach." }],
                },
                ...previousMessages.map(msg => ({
                    role: msg.role === "user" ? "user" : "model",
                    parts: [{ text: msg.content }]
                }))
            ],
        });

        const result = await chat.sendMessage(lastMessage.content);
        const response = result.response;
        return response.text();
    } catch (error) {
        console.error("Gemini API Error:", error);
        return "I'm having trouble connecting right now. Please try again later.";
    }
}

export async function analyzeScreenshot(base64Image: string, currentTask: string) {
    if (!genAI) return { isDistracted: false, advice: "AI not connected." };

    // Use Flash for speed with vision
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    const prompt = `
    You are a severe but helpful productivity guardian.
    The user is supposed to be working on: "${currentTask}".
    Attached is a screenshot of their screen.
    Analyze it:
    1. Are they working on the task? (Coding, Researching, Writing related to the task) -> NOT distracted.
    2. Are they on social media (Twitter, Reddit, YouTube unrelated to task)? -> DISTRACTED.
    3. Are they watching a movie or playing a game? -> DISTRACTED.
    
    If unsure, assume they are working.
    
    Return JSON ONLY:
    {
        "isDistracted": boolean,
        "reason": "Brief, punchy reason why.",
        "advice": "Short command to get back on track."
    }
    `;

    try {
        // base64Image comes as "data:image/jpeg;base64,..." usually, we need to strip the header if Gemini SDK needs raw base64.
        const cleanBase64 = base64Image.split(',')[1] || base64Image;

        const result = await model.generateContent([
            prompt,
            {
                inlineData: {
                    data: cleanBase64,
                    mimeType: "image/jpeg"
                }
            }
        ]);

        const text = result.response.text();

        // Robust JSON extraction
        let jsonStr = text;
        const firstOpen = text.indexOf('{');
        const lastClose = text.lastIndexOf('}');

        if (firstOpen !== -1 && lastClose !== -1) {
            jsonStr = text.substring(firstOpen, lastClose + 1);
        }

        try {
            return JSON.parse(jsonStr);
        } catch (e) {
            console.error("Failed to parse Gemini JSON:", jsonStr);
            return { isDistracted: false, reason: "Error parsing AI response" };
        }

    } catch (e) {
        console.error("Vision Analysis Error:", e);
        return { isDistracted: false, reason: "Error analyzing", advice: "" };
    }
}
