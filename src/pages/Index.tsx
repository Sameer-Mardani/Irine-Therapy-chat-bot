import React from "react";
import Navigation from "@/components/Navigation";
import CloudBackground from "@/components/CloudBackground";
import ChatBot from "@/components/ChatBot";
import AudioPlayer from "@/components/AudioPlayer";

const Index = () => {
  return (
    <div className="min-h-screen bg-wellness-blue">
      <CloudBackground />
      <Navigation />
      <AudioPlayer />
      <main className="container mx-auto px-4 pt-24 pb-12 relative">
        <div className="flex flex-col items-center justify-center min-h-[80vh] gap-8">
          <ChatBot />
        </div>
      </main>
    </div>
  );
};

export default Index;