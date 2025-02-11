import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Globe } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";

const predefinedQuestions = [
  {
    text: "What are the specifications for your UPS solutions?",
    href: "#"
  },
  {
    text: "How does your Network Management System (NMS) work?",
    href: "#"
  },
  {
    text: "Tell me about your Solar Panel System efficiency",
    href: "#"
  },
  {
    text: "What security features are included in your defense solutions?",
    href: "#"
  }
];

export default function PreQuestionsChatbot() {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) return null;

  return (
    <Card className="max-w-md mx-auto mb-24 shadow-lg">
      <div className="p-4">
        <div className="flex items-center gap-2 mb-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            <span>Online</span>
          </div>
          <Globe className="h-4 w-4" />
        </div>

        <div className="space-y-2">
          <h3 className="font-medium mb-4">Ask questions about our products</h3>
          {predefinedQuestions.map((question, index) => (
            <Button
              key={index}
              variant="secondary"
              className="w-full justify-start text-left h-auto py-4 px-6 text-sm"
              onClick={() => {
                // Handle question click - will be integrated with chatbot
                const mainChatbot = document.getElementById('main-chatbot');
                if (mainChatbot) {
                  mainChatbot.click();
                }
              }}
            >
              {question.text}
            </Button>
          ))}
        </div>
      </div>
    </Card>
  );
}