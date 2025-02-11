import Hero from "@/components/sections/hero";
import Features from "@/components/sections/features";
import Solutions from "@/components/sections/solutions";
import Chatbot from "@/components/chatbot/chatbot";
import PreQuestionsChatbot from "@/components/chatbot/pre-questions";

export default function Home() {
  return (
    <div>
      <Hero />
      <PreQuestionsChatbot />
      <Features />
      <Solutions />
      <Chatbot />
    </div>
  );
}