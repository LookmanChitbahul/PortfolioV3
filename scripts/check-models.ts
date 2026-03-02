import { GoogleGenerativeAI } from "@google/generative-ai";

async function listModels() {
    try {
        const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GOOGLE_GENERATIVE_AI_API_KEY || "");
        // Note: The SDK doesn't have a direct 'listModels' in many versions, 
        // but we can try to fetch them or just try the name the user wants.
        // However, I'll check the common names first.
        console.log("Checking for gemini-3-flash...");
    } catch (e) {
        console.error(e);
    }
}

listModels();
