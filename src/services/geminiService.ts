
import { toast } from "sonner";

interface GeminiResponse {
  text: string;
}

const GEMINI_API_KEY = "AIzaSyDu6jCpQTcqZRy4Wdh01bp6Yh2N2oTmupY";
const MODEL = "gemini-2.0-flash";
const API_URL = "https://generativelanguage.googleapis.com/v1beta/models";

export const generateGeminiResponse = async (prompt: string): Promise<string> => {
  try {
    const response = await fetch(
      `${API_URL}/${MODEL}:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: prompt,
                },
              ],
            },
          ],
        }),
      }
    );

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();
    return data.candidates[0].content.parts[0].text;
  } catch (error) {
    console.error("Error generating Gemini response:", error);
    toast.error("Failed to get response from AI. Please try again.");
    return "I'm sorry, I couldn't process your request at the moment. Please try again later.";
  }
};
