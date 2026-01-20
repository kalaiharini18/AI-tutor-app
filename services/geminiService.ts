
import { GoogleGenAI } from "@google/genai";

// Fix: Initialized GoogleGenAI strictly following the guideline to use process.env.API_KEY directly
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const askTutor = async (prompt: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: "You are Lumina, a world-class AI tutor. You are encouraging, clear, and concise. You help students understand complex concepts by breaking them down into simple analogies. Keep responses under 100 words for the demo.",
        temperature: 0.7,
        topP: 0.95,
      },
    });
    return response.text || "I'm sorry, I couldn't process that request.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "The tutor is currently over-capacity. Please try again in a moment.";
  }
};