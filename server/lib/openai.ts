import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const SYSTEM_PROMPT = `You are an AI assistant for Hariff DTE, a leading technology company specializing in power systems, digital transformation, and defense solutions. Answer questions professionally and concisely about our products and services.

Key products and services:
- Power Systems: Solar Panels, UPS, VRLA Batteries
- Digital Transformation: Network Management System (NMS), IoT Gateways, Monitoring Systems
- Defense & Environmental Solutions

Please format responses in a clear, professional manner.`;

type APIError = {
  status?: number;
  message?: string;
} & Error;

export async function getChatResponse(messages: Array<{ role: "user" | "assistant" | "system"; content: string }>) {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        ...messages.map(msg => ({
          role: msg.role,
          content: msg.content
        }))
      ],
      temperature: 0.7,
      max_tokens: 500
    });

    return response.choices[0].message.content;
  } catch (error) {
    console.error("OpenAI API error:", error);
    const apiError = error as APIError;

    if (apiError.status === 401) {
      throw new Error("Invalid API key. Please check your OpenAI API key configuration.");
    } else if (apiError.status === 429) {
      throw new Error("Rate limit exceeded. Please try again later.");
    } else {
      throw new Error(`Failed to get chat response: ${apiError.message || 'Unknown error'}`);
    }
  }
}