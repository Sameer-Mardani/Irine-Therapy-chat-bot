// import React, { useState, useEffect, useRef } from "react";
// import { Button } from "@/components/ui/button";
// import { Card } from "@/components/ui/card";
// import { MessageCircle, Brain, LineChart } from "lucide-react";

// interface ChatMessage {
//   text: string;
//   isUser: boolean;
// }

// const ChatBot: React.FC = () => {
//   const [isChatting, setIsChatting] = useState(false);
//   const [message, setMessage] = useState("");
//   const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
//   const [isGenZMode, setIsGenZMode] = useState(false);
//   const [threadId, setThreadId] = useState<string | null>(null);
//   const chatContainerRef = useRef<HTMLDivElement>(null);

//   const sendMessage = async () => {
//     if (!message.trim()) return;

//     const userMessage: ChatMessage = { text: message, isUser: true };
//     setChatHistory((prev) => [...prev, userMessage]);
//     setMessage(""); // Clear input immediately after sending

//     try {
//       const res = await fetch("https://langgaph-mental-therapy-bot.onrender.com/chat", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ message, thread_id: threadId }),
//       });

//       if (!res.body) {
//         throw new Error("ReadableStream not supported in this environment.");
//       }

//       const reader = res.body.getReader();
//       const decoder = new TextDecoder("utf-8");
//       let botMessage: ChatMessage = { text: "", isUser: false };

//       setChatHistory((prev) => [...prev, botMessage]);

//       while (true) {
//         const { done, value } = await reader.read();
//         if (done) break;
//         botMessage.text += decoder.decode(value, { stream: true });
//         setChatHistory((prev) => [...prev.slice(0, -1), botMessage]);
//       }

//       botMessage.text += decoder.decode();
//       setChatHistory((prev) => [...prev.slice(0, -1), botMessage]);
//     } catch (error) {
//       const errorMessage: ChatMessage = {
//         text: "Error: " + (error as Error).message,
//         isUser: false,
//       };
//       setChatHistory((prev) => [...prev, errorMessage]);
//     }
//   };

//   useEffect(() => {
//     if (chatContainerRef.current) {
//       chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
//     }
//   }, [chatHistory]);

//   return (
//     <div
//       className={`relative w-full transition-all duration-500 ease-in-out ${
//         isChatting ? "max-w-3xl h-[600px]" : "max-w-md h-[500px]"
//       } overflow-hidden`}
//     >
//       {/* Sliding Container for Menu */}
//       <div
//         className={`absolute top-0 w-full h-full transition-transform duration-500 ease-in-out ${
//           isChatting ? "-translate-x-full" : "translate-x-0"
//         }`}
//       >
//         <Card className="w-full h-full p-6 bg-gradient-to-br from-blue-50 to-purple-50 shadow-lg rounded-2xl">
//           <div className="flex flex-col items-center gap-6">
//             <div className="animate-float">
//               <span className="text-6xl">🌿</span>
//             </div>
//             <h2 className="text-2xl font-semibold text-center text-gray-800">
//               It's all gonna be alright
//             </h2>
//             <p className="text-center text-gray-600">
//               Hi, I'm Honesty-Irine. I'm here to listen and support you through whatever you're going through.
//             </p>
//             <div className="grid gap-4 w-full">
//               <Button
//                 className="w-full bg-wellness-purple hover:bg-wellness-purple/90 text-black"
//                 onClick={async () => {
//                   try {
//                     const res = await fetch(
//                       "https://langgaph-mental-therapy-bot.onrender.com/new-chat",
//                       { method: "POST", headers: { "Content-Type": "application/json" } }
//                     );
//                     const data = await res.json();
//                     setThreadId(data.thread_id);
//                     setIsChatting(true);
//                   } catch (error) {
//                     console.error("Error starting chat:", error);
//                   }
//                 }}
//               >
//                 <MessageCircle className="mr-2 h-5 w-5" />
//                 Start AI Therapy Chat
//               </Button>
//               <div className="relative w-full">
//                 <Button
//                   variant="outline"
//                   className="w-full text-gray-500 border-gray-300"
//                   disabled
//                 >
//                   <Brain className="mr-2 h-5 w-5" />
//                   How Well Irine Knows You?
//                 </Button>
//                 <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs font-semibold px-2 py-1 rounded-full">
//                   Coming Soon
//                 </span>
//               </div>
//               <div className="relative w-full">
//                 <Button
//                   variant="outline"
//                   className="w-full text-gray-500 border-gray-300"
//                   disabled
//                 >
//                   <LineChart className="mr-2 h-5 w-5" />
//                   Track Your Mood
//                 </Button>
//                 <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs font-semibold px-2 py-1 rounded-full">
//                   Coming Soon
//                 </span>
//               </div>
//             </div>
//           </div>
//         </Card>
//       </div>

//       {/* Chat Box Sliding In */}
//       <div
//         className={`absolute top-0 w-full h-full transition-transform duration-500 ease-in-out ${
//           isChatting ? "translate-x-0" : "translate-x-full"
//         }`}
//       >
//         <Card className="w-full h-full p-6 bg-gradient-to-br from-blue-50 to-purple-50 shadow-lg rounded-2xl flex flex-col">
//           <div className="flex justify-between items-center mb-4">
//             <p className="text-center text-gray-600">
//               {isGenZMode ? "Yo, let’s vibe!" : "Talk to me—I’m here!"}
//             </p>
//             <Button
//               variant="outline"
//               className="text-sm border-gray-300"
//               onClick={() => setIsGenZMode(!isGenZMode)}
//             >
//               {isGenZMode ? "Switch to Normal" : "Go Gen-Z"}
//             </Button>
//           </div>
//           {/* Chat Area - Increased Vertical Space */}
//           <div
//             ref={chatContainerRef}
//             className="flex-1 max-h-[400px] overflow-y-auto p-4 bg-white rounded-lg shadow-inner"
//           >
//             {chatHistory.map((msg, idx) => (
//               <div
//                 key={idx}
//                 className={`mb-2 p-2 rounded-lg transition-all duration-300 ease-in-out ${
//                   msg.isUser
//                     ? "bg-blue-200 ml-auto text-right max-w-[80%] animate-slide-from-left"
//                     : "bg-gray-200 mr-auto text-left max-w-[80%] animate-slide-from-right"
//                 }`}
//               >
//                 {msg.text}
//               </div>
//             ))}
//           </div>
//           {/* Input and Buttons */}
//           <div className="mt-4 flex flex-col gap-2">
//             <input
//               type="text"
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//               className="border-gray-300 p-2 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-wellness-purple"
//               placeholder="Type your message..."
//               onKeyPress={(e) => e.key === "Enter" && sendMessage()}
//             />
//             <div className="flex gap-2">
//               <Button
//                 onClick={sendMessage}
//                 className="flex-1 bg-wellness-purple hover:bg-wellness-purple/90 text-black"
//               >
//                 <MessageCircle className="mr-2 h-4 w-4" />
//                 Send
//               </Button>
//               <Button
//                 variant="outline"
//                 className="flex-1 text-gray-700 border-gray-300"
//                 onClick={() => {
//                   setIsChatting(false);
//                   setChatHistory([]);
//                   setMessage("");
//                 }}
//               >
//                 Back to Menu
//               </Button>
//             </div>
//           </div>
//         </Card>
//       </div>
//     </div>
//   );
// };

// export default ChatBot;
import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageCircle, Brain, LineChart } from "lucide-react";

interface ChatMessage {
  text: string;
  isUser: boolean;
}

const ChatBot: React.FC = () => {
  const [isChatting, setIsChatting] = useState(false);
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
  const [isGenZMode, setIsGenZMode] = useState(false);
  const [threadId, setThreadId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false); // New loading state
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const sendMessage = async () => {
    if (!message.trim()) return;

    const userMessage: ChatMessage = { text: message, isUser: true };
    setChatHistory((prev) => [...prev, userMessage]);
    setMessage("");

    try {
      const res = await fetch("https://langgaph-mental-therapy-bot.onrender.com/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message, thread_id: threadId }),
      });

      if (!res.ok) throw new Error("Failed to fetch response from server");
      if (!res.body) throw new Error("ReadableStream not supported");

      const reader = res.body.getReader();
      const decoder = new TextDecoder("utf-8");
      let botMessage: ChatMessage = { text: "", isUser: false };

      setChatHistory((prev) => [...prev, botMessage]);

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        botMessage.text += decoder.decode(value, { stream: true });
        setChatHistory((prev) => [...prev.slice(0, -1), botMessage]);
      }

      botMessage.text += decoder.decode();
      setChatHistory((prev) => [...prev.slice(0, -1), botMessage]);
    } catch (error) {
      const errorMessage: ChatMessage = {
        text: "Oops, something went wrong: " + (error as Error).message,
        isUser: false,
      };
      setChatHistory((prev) => [...prev, errorMessage]);
    }
  };

  const startNewChat = async () => {
    setIsLoading(true);
    try {
      const res = await fetch("https://langgaph-mental-therapy-bot.onrender.com/new-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        signal: AbortSignal.timeout(10000), // 10-second timeout
      });

      if (!res.ok) throw new Error("Server responded with an error");

      const data = await res.json();
      if (!data.thread_id) throw new Error("No thread ID received from server");

      setThreadId(data.thread_id);
      setChatHistory([]); // Reset chat history for a new session
      setIsChatting(true);
    } catch (error) {
      setChatHistory((prev) => [
        ...prev,
        { text: "Failed to start chat: " + (error as Error).message, isUser: false },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chatHistory]);

  return (
    <div
      className={`relative w-full transition-all duration-500 ease-in-out ${
        isChatting ? "max-w-3xl h-[600px]" : "max-w-md h-[500px]"
      } overflow-hidden`}
    >
      <div
        className={`absolute top-0 w-full h-full transition-transform duration-500 ease-in-out ${
          isChatting ? "-translate-x-full" : "translate-x-0"
        }`}
      >
        <Card className="w-full h-full p-6 bg-gradient-to-br from-blue-50 to-purple-50 shadow-lg rounded-2xl">
          <div className="flex flex-col items-center gap-6">
            <div className="animate-float">
              <span className="text-6xl">🌿</span>
            </div>
            <h2 className="text-2xl font-semibold text-center text-gray-800">
              It's all gonna be alright
            </h2>
            <p className="text-center text-gray-600">
              Hi, I'm Honesty-Irine. I'm here to listen and support you through whatever you're going through.
            </p>
            <div className="grid gap-4 w-full">
              <Button
                className="w-full bg-wellness-purple hover:bg-wellness-purple/90 text-black"
                onClick={startNewChat}
                disabled={isLoading}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                {isLoading ? "Please Wait..." : "Start AI Therapy Chat"}
              </Button>
              <div className="relative w-full">
                <Button
                  variant="outline"
                  className="w-full text-gray-500 border-gray-300"
                  disabled
                >
                  <Brain className="mr-2 h-5 w-5" />
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
                  <LineChart className="mr-2 h-5 w-5" />
                  Track Your Mood
                </Button>
                <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs font-semibold px-2 py-1 rounded-full">
                  Coming Soon
                </span>
              </div>
            </div>
          </div>
        </Card>
      </div>

      <div
        className={`absolute top-0 w-full h-full transition-transform duration-500 ease-in-out ${
          isChatting ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <Card className="w-full h-full p-6 bg-gradient-to-br from-blue-50 to-purple-50 shadow-lg rounded-2xl flex flex-col">
          <div className="flex justify-between items-center mb-4">
            <p className="text-center text-gray-600">
              {isGenZMode ? "Yo, let’s vibe!" : "Talk to me—I’m here!"}
            </p>
            <Button
              variant="outline"
              className="text-sm border-gray-300"
              onClick={() => setIsGenZMode(!isGenZMode)}
            >
              {isGenZMode ? "Switch to Normal" : "Go Gen-Z"}
            </Button>
          </div>
          <div
            ref={chatContainerRef}
            className="flex-1 max-h-[400px] overflow-y-auto p-4 bg-white rounded-lg shadow-inner"
          >
            {chatHistory.map((msg, idx) => (
              <div
                key={idx}
                className={`mb-2 p-2 rounded-lg transition-all duration-300 ease-in-out ${
                  msg.isUser
                    ? "bg-blue-200 ml-auto text-right max-w-[80%] animate-slide-from-left"
                    : "bg-gray-200 mr-auto text-left max-w-[80%] animate-slide-from-right"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div className="mt-4 flex flex-col gap-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="border-gray-300 p-2 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-wellness-purple"
              placeholder="Type your message..."
              onKeyPress={(e) => e.key === "Enter" && sendMessage()}
            />
            <div className="flex gap-2">
              <Button
                onClick={sendMessage}
                className="flex-1 bg-wellness-purple hover:bg-wellness-purple/90 text-black"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                Send
              </Button>
              <Button
                variant="outline"
                className="flex-1 text-gray-700 border-gray-300"
                onClick={() => {
                  setIsChatting(false);
                  setChatHistory([]);
                  setMessage("");
                }}
              >
                Back to Menu
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ChatBot;