import Hero from "@/components/sections/hero";
import Features from "@/components/sections/features";
import Solutions from "@/components/sections/solutions";
import Chatbot from "@/components/chatbot/chatbot";
import PreQuestionsChatbot from "@/components/chatbot/pre-questions";
import { useRef } from "react";

export default function Home() {
  const chatbotRef = useRef<{ handleSend: (message: string) => void }>(null);

  return (
    <div>
      <Hero />
      <PreQuestionsChatbot onAskQuestion={(question) => {
        if (chatbotRef.current) {
          chatbotRef.current.handleSend(question);
        }
      }} />
      <Features />
      <Solutions />
      <Chatbot ref={chatbotRef} />
    </div>
  );
}