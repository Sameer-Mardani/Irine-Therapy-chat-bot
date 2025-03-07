import React, { useState } from "react";
import Navigation from "@/components/Navigation";
import CloudBackground from "@/components/CloudBackground";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain } from "lucide-react";

const memoryGames = [
  {
    id: 1,
    title: "Card Matching",
    description: "Find matching pairs of calming images",
    level: "Beginner",
    cards: 12,
  },
  {
    id: 2,
    title: "Picture Sequence",
    description: "Remember and recreate peaceful image sequences",
    level: "Intermediate",
    sequences: 5,
  },
  {
    id: 3,
    title: "Sound Memory",
    description: "Match relaxing sound patterns",
    level: "Advanced",
    patterns: 8,
  },
];

const MemoryGames = () => {
  const [selectedGame, setSelectedGame] = useState<number | null>(null);

  return (
    <div className="min-h-screen svg-inspired-gradient">
      <CloudBackground />
      <Navigation />
      <main className="container mx-auto px-4 pt-24 pb-12 relative">
        <h1 className="text-3xl font-semibold text-center mb-8 text-wellness-blue">Memory Games</h1>
        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
          Exercise your memory with these gentle and engaging games designed to enhance cognitive function while maintaining a calm state of mind.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {memoryGames.map((game) => (
            <Card key={game.id} className="p-6 bg-white/80 backdrop-blur-sm">
              <Brain className="w-12 h-12 mx-auto mb-4 text-wellness-blue" />
              <h3 className="text-xl font-semibold text-center mb-2">{game.title}</h3>
              <p className="text-center text-gray-600 mb-4">{game.description}</p>
              <div className="text-sm text-gray-500 mb-4">
                <p className="text-center">Level: {game.level}</p>
                <p className="text-center">
                  {game.cards && `${game.cards} cards`}
                  {game.sequences && `${game.sequences} sequences`}
                  {game.patterns && `${game.patterns} patterns`}
                </p>
              </div>
              <Button
                onClick={() => setSelectedGame(game.id)}
                className="w-full text-[#76C7C0] hover:bg-black transition-colors"
              >
                Start Training
              </Button>
            </Card>
          ))}
        </div>

        {selectedGame && (
          <Card className="mt-8 p-6 bg-white/80 backdrop-blur-sm max-w-2xl mx-auto">
            <p className="text-center text-gray-600">
              Game implementation coming soon! This is a placeholder for the selected memory game interface.
            </p>
            <Button
              onClick={() => setSelectedGame(null)}
              variant="outline"
              className="mt-4 mx-auto block"
            >
              Back to Games
            </Button>
          </Card>
        )}
      </main>
    </div>
  );
};

export default MemoryGames;