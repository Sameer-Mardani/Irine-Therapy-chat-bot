import React, { useState } from "react";
import Navigation from "@/components/Navigation";
import CloudBackground from "@/components/CloudBackground";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Puzzle } from "lucide-react";
import PatternMatching from "./puzzles/PatternMatching";
import ColorFlow from "./puzzles/ColorFlow";
import ZenGarden from "./puzzles/ZenGarden";

const puzzleGames = [
  {
    id: 1,
    title: "Pattern Matching",
    description: "Match similar patterns to create harmony",
    difficulty: "Easy",
    estimatedTime: "5-10 mins",
  },
  {
    id: 2,
    title: "Color Flow",
    description: "Connect matching colors to create a peaceful flow",
    difficulty: "Medium",
    estimatedTime: "10-15 mins",
  },
  {
    id: 3,
    title: "Zen Garden",
    description: "Arrange elements to create a perfect zen garden",
    difficulty: "Relaxing",
    estimatedTime: "No time limit",
  },
];

const MindfulPuzzles = () => {
  const [selectedGame, setSelectedGame] = useState<number | null>(null);

  const renderSelectedGame = () => {
    switch (selectedGame) {
      case 1:
        return <PatternMatching onBack={() => setSelectedGame(null)} />;
      case 2:
        return <ColorFlow onBack={() => setSelectedGame(null)} />;
      case 3:
        return <ZenGarden onBack={() => setSelectedGame(null)} />;
      default:
        return null;
    }
  };

  if (selectedGame) {
    return (
      <div className="min-h-screen svg-inspired-gradient">
        <CloudBackground />
        <Navigation />
        <main className="container mx-auto px-4 pt-24 pb-12 relative">
          {renderSelectedGame()}
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen svg-inspired-gradient">
      <CloudBackground />
      <Navigation />
      <main className="container mx-auto px-4 pt-24 pb-12 relative">
        <h1 className="text-3xl font-semibold text-center mb-8 text-wellness-peach">Mindful Puzzles</h1>
        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
          Engage your mind with these calming puzzle games designed to promote mindfulness and relaxation.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {puzzleGames.map((game) => (
            <Card key={game.id} className="p-6 bg-white/80 backdrop-blur-sm">
              <Puzzle className="w-12 h-12 mx-auto mb-4 text-wellness-peach" />
              <h3 className="text-xl font-semibold text-center mb-2">{game.title}</h3>
              <p className="text-center text-gray-600 mb-4">{game.description}</p>
              <div className="flex justify-between text-sm text-gray-500 mb-4">
                <span>Difficulty: {game.difficulty}</span>
                <span>{game.estimatedTime}</span>
              </div>
              <Button
                onClick={() => setSelectedGame(game.id)}
                className="w-full text-[#76C7C0] hover:bg-black transition-colors"
              >
                Play Game
              </Button>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default MindfulPuzzles;