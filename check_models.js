
const { GoogleGenerativeAI } = require("@google/generative-ai");
require('dotenv').config({ path: '.env.local' });

async function listModels() {
    const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY);
    try {
        // Note: The Node SDK for GoogleGenerativeAI might not expose listModels directly on the main class in older versions,
        // but usually it's under a ModelManager or similar. However, for the simple SDK, it might be simpler to just try to hit the unknown endpoint or check the docs.
        // Actually, looking at common usage, it's often not exposed in the high-level generic web SDK as easily as the server-side one.
        // But let's try assuming standard Google API shape if possible, or just use fetch for the REST API which is guaranteed to work.

        const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
        const url = `https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`;

        const response = await fetch(url);
        const data = await response.json();

        if (data.models) {
            console.log("Available Models:");
            data.models.forEach(m => console.log(`- ${m.name} (${m.displayName})`));
        } else {
            console.log("No models found or error:", data);
        }

    } catch (error) {
        console.error("Error listing models:", error);
    }
}

listModels();
