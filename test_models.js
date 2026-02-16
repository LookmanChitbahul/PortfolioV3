const { GoogleGenerativeAI } = require("@google/generative-ai");
const fs = require('fs');

// Try to read .env manually
function getEnv(key) {
    try {
        const envFile = fs.readFileSync('.env', 'utf8');
        const lines = envFile.split('\n');
        for (const line of lines) {
            if (line.startsWith(key)) {
                return line.split('=')[1].trim();
            }
        }
    } catch (e) {
        return null;
    }
}

async function listModels() {
    const apiKey = getEnv('NEXT_PUBLIC_GOOGLE_GENERATIVE_AI_API_KEY');

    if (!apiKey) {
        console.error("No API key found in .env");
        return;
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    try {
        // Actually, listModels is not directly exposed on genAI *usually* in this SDK
        // But let's check if we can simply try `gemini-2.0-flash`

        // Attempt with Gemini 2.0 Flash
        try {
            const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
            const result = await model.generateContent("Hello?");
            console.log("Success with gemini-2.0-flash");
            return;
        } catch (e) {
            console.log("Failed with gemini-2.0-flash: " + e.message);
        }

        // Attempt with Gemini 1.5 Flash
        try {
            const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
            const result = await model.generateContent("Hello?");
            console.log("Success with gemini-1.5-flash");
            return;
        } catch (e) {
            console.log("Failed with gemini-1.5-flash: " + e.message);
        }

    } catch (e) {
        console.error(e);
    }
}

listModels();
