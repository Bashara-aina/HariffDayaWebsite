import Hero from "@/components/sections/hero";
import Features from "@/components/sections/features";
import Solutions from "@/components/sections/solutions";
import Chatbot from "@/components/chatbot/chatbot";
import PreQuestionsChatbot from "@/components/chatbot/pre-questions";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";

export default function Home() {
  const chatbotRef = useRef<{ handleSend: (message: string) => void }>(null);
  const [showPreQuestions, setShowPreQuestions] = useState(true);

  return (
    <div>
      <Hero />
      {showPreQuestions && (
        <PreQuestionsChatbot 
          onAskQuestion={(question) => {
            if (chatbotRef.current) {
              chatbotRef.current.handleSend(question);
            }
          }}
          onMinimize={() => setShowPreQuestions(false)}
        />
      )}
      <div className="container mx-auto px-4">
        {!showPreQuestions && (
          <Button
            variant="outline"
            className="mb-6"
            onClick={() => setShowPreQuestions(true)}
          >
            Show Pre-Questions
          </Button>
        )}
      </div>
      <Features />
      <Solutions />
      <Chatbot ref={chatbotRef} />
    </div>
  );
}