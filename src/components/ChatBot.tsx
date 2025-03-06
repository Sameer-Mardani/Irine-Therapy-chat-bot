import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageCircle, Brain, LineChart } from "lucide-react";

interface ChatMessage {
  text: string;
  isUser: boolean;
}

const ChatBot: React.FC = () => {
  const [isChatting, setIsChatting] = useState(false);
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
  const [isGenZMode, setIsGenZMode] = useState(false);
  const [threadId, setThreadId] = useState<string | null>(null);

  const sendMessage = async () => {
    if (!message.trim()) return;
    const userMessage = { text: message, isUser: true };
    setChatHistory((prev) => [...prev, userMessage]);
    setMessage('');

    try {
      const res = await fetch('https://langgaph-mental-therapy-bot.onrender.com/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ "message": message, "thread_id": threadId }),
      });

      if (!res.body) {
        throw new Error('ReadableStream not supported in this environment.');
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder('utf-8');
      let botMessage = { text: '', isUser: false };

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        botMessage.text += decoder.decode(value, { stream: true });
        setChatHistory((prev) => [...prev.slice(0, -1), botMessage]);
      }

      botMessage.text += decoder.decode();
      setChatHistory((prev) => [...prev.slice(0, -1), botMessage]);
    } catch (error) {
      const errorMessage = { text: 'Error: ' + (error as Error).message, isUser: false };
      setChatHistory((prev) => [...prev, errorMessage]);
    }
  };

  return (
    <Card className="w-full max-w-md p-6 bg-gradient-to-br from-blue-50 to-purple-50 shadow-lg rounded-2xl">
      <div className="flex flex-col items-center gap-6">
        <div className="animate-float">
          <span className="text-6xl">🌿</span>
        </div>
        <h2 className="text-2xl font-semibold text-center text-gray-800">
          It's all gonna be alright
        </h2>
        {!isChatting ? (
          <>
            <p className="text-center text-gray-600">
              Hi, I'm Honesty-Irine. I'm here to listen and support you through whatever you're going through.
            </p>
            <div className="grid gap-4 w-full">
              <Button
                className="w-full bg-wellness-purple hover:bg-wellness-purple/90 text-black"
                onClick={() => {
                  fetch('https://langgaph-mental-therapy-bot.onrender.com/new-chat', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                  })
                    .then(response => response.json())
                    .then(data => {
                      console.log('Success:', data);
                      setThreadId(data.thread_id);
                      setIsChatting(true);
                    })
                    .catch((error) => {
                      console.error('Error:', error);
                    });
                }}
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                Start AI Therapy Chat
              </Button>
              <div className="relative w-full">
                <Button 
                  variant="outline" 
                  className="w-full text-gray-500 border-gray-300"
                  disabled
                >
                  <Brain className="mr-2 h-4 w-4" />
                  How Well Irine Knows You?
                </Button>
                <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs font-semibold px-2 py-1 rounded-full">
                  Coming Soon
                </span>
              </div>
              <div className="relative w-full">
                <Button 
                  variant="outline" 
                  className="w-full text-gray-500 border-gray-300"
                  disabled
                >
                  <LineChart className="mr-2 h-4 w-4" />
                  Track Your Mood
                </Button>
                <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs font-semibold px-2 py-1 rounded-full">
                  Coming Soon
                </span>
              </div>
            </div>
          </>
        ) : (
          <div className="w-full flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <p className="text-center text-gray-600">
                {isGenZMode ? "Yo, let’s vibe!" : "Talk to me—I’m here!"}
              </p>
              <Button
                variant="outline"
                className="text-sm"
                onClick={() => setIsGenZMode(!isGenZMode)}
              >
                {isGenZMode ? "Switch to Normal" : "Go Gen-Z"}
              </Button>
            </div>
            <div className="flex-1 max-h-64 overflow-y-auto p-2 bg-white rounded-lg shadow-inner">
              {chatHistory.map((msg, idx) => (
                <div
                  key={idx}
                  className={`mb-2 p-2 rounded-lg ${msg.isUser
                    ? "bg-blue-200 ml-auto text-right max-w-[80%]"
                    : "bg-gray-200 mr-auto text-left max-w-[80%]"
                  }`}
                >
                  {msg.text}
                </div>
              ))}
            </div>
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="border p-2 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-wellness-purple"
              placeholder="Type your message..."
              onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
            />
            <Button
              onClick={sendMessage}
              className="w-full bg-wellness-purple hover:bg-wellness-purple/90 text-white"
            >
              Send
            </Button>
            <Button
              variant="outline"
              className="w-full text-gray-700 border-gray-300"
              onClick={() => {
                setIsChatting(false);
                setChatHistory([]);
                setMessage('');
              }}
            >
              Back to Menu
            </Button>
          </div>
        )}
      </div>
    </Card>
  );
};

export default ChatBot;