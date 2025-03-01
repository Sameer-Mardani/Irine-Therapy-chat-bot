import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageCircle, Brain, LineChart } from "lucide-react";

const ChatBot = () => {
  return (
    <Card className="w-full max-w-md p-6 bg-white/80 backdrop-blur-sm shadow-lg rounded-2xl">
      <div className="flex flex-col items-center gap-6">
        <div className="animate-float">
          <span className="text-6xl">🌿</span>
        </div>
        <h2 className="text-2xl font-semibold text-center">
          It's all gonna be alright
        </h2>
        <p className="text-center text-gray-600">
          Hi, I'm Honesty-Irine. I'm here to listen and support you through whatever you're going through.
        </p>
        <div className="grid gap-4 w-full">
          <Button className="w-full bg-wellness-purple hover:bg-wellness-purple/90">
            <MessageCircle className="mr-2 h-4 w-4" />
            Start AI Therapy Chat
          </Button>
          <Button variant="outline" className="w-full">
            <Brain className="mr-2 h-4 w-4" />
            How Well Irine Knows You?
          </Button>
          <Button variant="outline" className="w-full">
            <LineChart className="mr-2 h-4 w-4" />
            Track Your Mood
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ChatBot;