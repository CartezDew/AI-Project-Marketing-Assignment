import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const generateHouseRule = async (playerCount: string, vibe: string): Promise<string> => {
  if (!apiKey) return "Please configure your API Key to use the AI Generator.";
  
  try {
    const prompt = `
      Create a unique, fun, and balanced UNO house rule for a group of ${playerCount} players who enjoy a ${vibe} game style.
      Keep the rule concise (under 50 words) and exciting. Give the rule a catchy name.
      Output format: **Rule Name**: The rule description.
    `;
    
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });
    
    return response.text || "Could not generate a rule at this time.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "The deck is shuffled too tight! Try again later.";
  }
};

export const generateDisplayIdea = async (carCount: string, spaceType: string): Promise<string> => {
  if (!apiKey) return "Please configure your API Key to use the AI Generator.";
  try {
    const prompt = `
      Suggest a creative, aesthetic, and modern way to display a Hot Wheels collection of roughly ${carCount} cars in a ${spaceType}.
      The target audience is an adult collector who loves design and nostalgia.
      Keep it practical but inspiring. Max 80 words.
    `;
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });
    return response.text || "Could not generate an idea at this time.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Out of gas! Try again later.";
  }
};

