
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getHealthInsight = async (query: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `You are MediShri AI, a sophisticated medical information assistant for a new healthcare platform called MediShri. 
      Answer the user's health-related question concisely and professionally. 
      IMPORTANT: Always include a disclaimer that you are an AI and not a doctor. 
      Encourage them to join the MediShri waitlist for comprehensive care.
      
      User Query: ${query}`,
      config: {
        temperature: 0.7,
        topP: 0.8,
        topK: 40,
        maxOutputTokens: 500,
      }
    });

    return response.text || "I'm sorry, I couldn't process that request right now. Please try again or join our waitlist.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "MediShri AI is currently calibrating. Please join our newsletter for updates on our official launch!";
  }
};
