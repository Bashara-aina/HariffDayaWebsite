import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Globe, Send } from "lucide-react";
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

type PreQuestionsChatbotProps = {
  onAskQuestion?: (question: string) => void;
};

export default function PreQuestionsChatbot({ onAskQuestion }: PreQuestionsChatbotProps) {
  const [isOpen, setIsOpen] = useState(true);
  const [customQuestion, setCustomQuestion] = useState("");

  if (!isOpen) return null;

  const handleAskQuestion = (question: string) => {
    if (onAskQuestion) {
      onAskQuestion(question);
    }
    setCustomQuestion("");
  };

  return (
    <div className="max-w-3xl mx-auto px-4 mb-12">
      <Card className="shadow-lg border-gray-200">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span className="text-sm font-medium">Online</span>
              </div>
              <Globe className="h-4 w-4 text-gray-500" />
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="text-gray-500"
            >
              Minimize
            </Button>
          </div>

          <h3 className="text-lg font-semibold mb-4">Ask questions about our products</h3>

          <div className="space-y-3 mb-6">
            {predefinedQuestions.map((question, index) => (
              <Button
                key={index}
                variant="secondary"
                className="w-full justify-start text-left h-auto py-3 px-4 text-sm hover:bg-gray-100"
                onClick={() => handleAskQuestion(question.text)}
              >
                {question.text}
              </Button>
            ))}
          </div>

          <div className="flex gap-2">
            <Input
              placeholder="Type your question here..."
              value={customQuestion}
              onChange={(e) => setCustomQuestion(e.target.value)}
              className="flex-grow"
              onKeyDown={(e) => {
                if (e.key === "Enter" && customQuestion.trim()) {
                  handleAskQuestion(customQuestion);
                }
              }}
            />
            <Button
              size="icon"
              onClick={() => {
                if (customQuestion.trim()) {
                  handleAskQuestion(customQuestion);
                }
              }}
              disabled={!customQuestion.trim()}
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}