import React from "react";
import Navigation from "@/components/Navigation";
import CloudBackground from "@/components/CloudBackground";
import { Card } from "@/components/ui/card";

const PeerSupport = () => {
  return (
    <div className="min-h-screen bg-wellness-gray">
      <CloudBackground />
      <Navigation />
      <main className="container mx-auto px-4 pt-24 pb-12 relative">
        <Card className="w-full max-w-3xl mx-auto p-6 bg-white/80 backdrop-blur-sm">
          <h1 className="text-2xl font-semibold text-center mb-4">Anonymous Peer Support</h1>
          <p className="text-center text-gray-600">
            Coming soon - Connect with peers anonymously in a safe, supportive environment.
            Share experiences and support each other while maintaining privacy.
          </p>
        </Card>
      </main>
    </div>
  );
};

export default PeerSupport;