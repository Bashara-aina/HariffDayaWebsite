import { type InsertInquiry, type Inquiry, type InsertChatMessage, type ChatMessage } from "@shared/schema";

export interface IStorage {
  createInquiry(inquiry: InsertInquiry): Promise<Inquiry>;
  saveChatMessage(message: InsertChatMessage): Promise<ChatMessage>;
}

export class MemStorage implements IStorage {
  private inquiries: Map<number, Inquiry>;
  private chatMessages: Map<number, ChatMessage>;
  private currentInquiryId: number;
  private currentChatMessageId: number;

  constructor() {
    this.inquiries = new Map();
    this.chatMessages = new Map();
    this.currentInquiryId = 1;
    this.currentChatMessageId = 1;
  }

  async createInquiry(insertInquiry: InsertInquiry): Promise<Inquiry> {
    const id = this.currentInquiryId++;
    const inquiry: Inquiry = {
      ...insertInquiry,
      id,
      createdAt: new Date(),
    };
    this.inquiries.set(id, inquiry);
    return inquiry;
  }

  async saveChatMessage(insertMessage: InsertChatMessage): Promise<ChatMessage> {
    const id = this.currentChatMessageId++;
    const message: ChatMessage = {
      ...insertMessage,
      id,
      createdAt: new Date(),
    };
    this.chatMessages.set(id, message);
    return message;
  }
}

export const storage = new MemStorage();
