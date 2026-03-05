import {GoogleGenAI} from "@google/genai";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;


const ai = new GoogleGenAI({apiKey: API_KEY}); 

async function getInsights(expenses) {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash-lite", 
    //  JSON.stringify convert it to a readable string for Gemini.
    //Giving Gemini the data
    //Telling it what to do with that data
    //Telling it what format to respond in
    contents: `Here are my recent expenses: ${JSON.stringify(expenses)}. Please analyze them and give me proactive saving suggestions and flag any unusual spending. Return ONLY as JSON with keys tips and anomalies, each being an array of strings.`,
  });
 const cleaned = response.text.replace(/```json|```/g, "").trim()
  return JSON.parse(cleaned);
}

export default getInsights;
