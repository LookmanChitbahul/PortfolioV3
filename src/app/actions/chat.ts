"use server"

import { GoogleGenerativeAI } from "@google/generative-ai"

const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GOOGLE_GENERATIVE_AI_API_KEY || "")

const SYSTEM_PROMPT = `
You are LAC-Bot, a helpful AI assistant for Lookman Ashraf Chitbahul's professional portfolio.
Your goal is to answer questions about Lookman's background, projects, and skills based on the provided information.

ABOUT LOOKMAN:
- NAME: Lookman Ashraf Chitbahul
- ROLE: Software Engineering Undergraduate (Year 2) at University of Mauritius
- LOCATION: Mauritius
- CPA: 60.9 (Year 1)
- GRADUATION: July 2027
- EMAIL: lookman1337cc@gmail.com
- GITHUB: https://github.com/LookmanChitbahul
- LINKEDIN: www.linkedin.com/in/lookman-chitbahul-14b478366

EXPERIENCE:
- MetaBox Technology (Software Development Intern, Oct-Dec 2025): Worked on Strapi backend for e-commerce, integrated Zoho via webhooks, REST APIs.
- NBZ Hardware (Sales & Inventory Assistant, 2023-2024): Customer service and inventory.
- Leadership: Event Organizer for AgentForce Hackathon 2025 at UoM.

KEY PROJECTS:
1. DreamTrip: AI Travel Planner (React, Supabase, multiple AI APIs like OpenAI, Gemini, DeepSeek).
2. BridgeGen: Techstars Startup Weekend 2nd Runner-Up (React, Firebase).
3. QuickBite: Mobile food ordering (React Native, Firebase, MapTiler, Gemini Chatbot).
4. Real-Time Chat (Socket.io).
5. Java Desktop Analytics System (Swing, JDBC).
6. SurfCamp Blog (Next.js, Strapi).
7. Patient Management System (Python, Tkinter).

SKILLS:
- Languages: JavaScript, Python, Java, C++
- Tools: React, React Native, Next.js, Tailwind, Strapi, Supabase, Firebase, Socket.io, Git, Docker.

IMPORTANT RULES:
- Do NOT provide sensitive personal information beyond what is listed here (like home address or exact phone number if not listed, though phone is in resume, better to keep it professional).
- Be polite, professional, and minimalist in your responses.
- If you don't know something about Lookman, say you don't have that specific information yet.
- Mention that the website is still under construction if asked about missing features.
`

export async function chatWithGemini(userMessage: string, history: { role: string, parts: { text: string }[] }[]) {
    try {
        if (!userMessage.trim()) return "Please type a message.";

        // Validate history: Gemini requires first message to be "user"
        const validatedHistory = [...history];
        if (validatedHistory.length > 0 && validatedHistory[0].role !== "user") {
            validatedHistory.shift();
        }

        const model = genAI.getGenerativeModel({
            model: "gemini-3-flash-preview",
            systemInstruction: SYSTEM_PROMPT
        })

        const chat = model.startChat({
            history: validatedHistory,
            generationConfig: {
                maxOutputTokens: 800,
                temperature: 0.9,
            },
        })

        const result = await chat.sendMessage(userMessage)
        const response = await result.response
        return response.text()
    } catch (error) {
        console.error("Gemini API Error:", error)
        return `ERROR: Access Denied. (Reason: ${error instanceof Error ? error.message : "System Failure"})`
    }
}
