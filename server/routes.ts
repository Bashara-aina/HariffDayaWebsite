import type { Express } from "express";
import { createServer } from "http";
import { storage } from "./storage";
import { insertInquirySchema, insertChatMessageSchema } from "@shared/schema";
import { getChatResponse } from "./lib/openai";
import { ZodError } from "zod";

export function registerRoutes(app: Express) {
  const httpServer = createServer(app);

  app.post("/api/inquiries", async (req, res) => {
    try {
      const data = insertInquirySchema.parse(req.body);
      const inquiry = await storage.createInquiry(data);
      res.json(inquiry);
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({ message: "Invalid input", errors: error.errors });
      } else {
        res.status(500).json({ message: "Internal server error" });
      }
    }
  });

  app.post("/api/chat", async (req, res) => {
    try {
      const { messages, sessionId } = insertChatMessageSchema.parse(req.body);
      if (!Array.isArray(messages)) {
        throw new Error("Messages must be an array");
      }

      const typedMessages = messages.map(msg => ({
        role: msg.role as "user" | "assistant" | "system",
        content: msg.content as string
      }));

      const response = await getChatResponse(typedMessages);
      const updatedMessages = [...typedMessages, { role: "assistant" as const, content: response }];

      await storage.saveChatMessage({ sessionId, messages: updatedMessages });
      res.json({ response });
    } catch (error) {
      console.error("Chat error:", error);
      res.status(500).json({ message: "Chat error occurred" });
    }
  });

  return httpServer;
}