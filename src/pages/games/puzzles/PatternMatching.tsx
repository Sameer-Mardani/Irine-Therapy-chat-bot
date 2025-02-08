
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const patterns = [
  ["🌸", "🌺", "🌸", "🌺"],
  ["🍀", "🌿", "🍀", "🌿"],
  ["🌙", "⭐", "🌙", "⭐"],
  ["🦋", "🐝", "🦋", "🐝"],
];

interface PatternMatchingProps {
  onBack: () => void;
}

const PatternMatching: React.FC<PatternMatchingProps> = ({ onBack }) => {
  const [currentPattern, setCurrentPattern] = useState<string[]>([]);
  const [userPattern, setUserPattern] = useState<string[]>([]);
  const [score, setScore] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);

  const startGame = () => {
    const randomPattern = patterns[Math.floor(Math.random() * patterns.length)];
    setCurrentPattern(randomPattern);
    setUserPattern([]);
    setGameStarted(true);
    
    // Show pattern for 3 seconds
    setTimeout(() => {
      setCurrentPattern([]);
    }, 3000);
  };

  const handleSymbolClick = (symbol: string) => {
    if (!gameStarted || currentPattern.length > 0) return;

    const newUserPattern = [...userPattern, symbol];
    setUserPattern(newUserPattern);

    if (newUserPattern.length === patterns[0].length) {
      checkPattern(newUserPattern);
    }
  };

  const checkPattern = (completed: string[]) => {
    const pattern = patterns.find(p => 
      p.every((symbol, index) => symbol === completed[index])
    );

    if (pattern) {
      setScore(score + 1);
      toast.success("Pattern matched correctly!");
      setTimeout(startGame, 1000);
    } else {
      toast.error("Pattern incorrect, try again!");
      setUserPattern([]);
      setTimeout(startGame, 1000);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <Button onClick={onBack} variant="outline" className="mb-6">
        Back to Games
      </Button>
      
      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold mb-4">Pattern Matching</h2>
        <p className="text-gray-600 mb-4">Score: {score}</p>
        
        {!gameStarted && (
          <Button onClick={startGame} className="bg-wellness-peach hover:bg-wellness-peach/90">
            Start Game
          </Button>
        )}
      </div>

      <div className="grid grid-cols-4 gap-4 mb-8">
        {(currentPattern.length > 0 ? currentPattern : userPattern).map((symbol, index) => (
          <div
            key={index}
            className="aspect-square flex items-center justify-center text-3xl bg-white rounded-lg shadow-md"
          >
            {symbol}
          </div>
        ))}
      </div>

      {gameStarted && currentPattern.length === 0 && (
        <div className="grid grid-cols-4 gap-4">
          {["🌸", "🌺", "🍀", "🌿", "🌙", "⭐", "🦋", "🐝"].map((symbol, index) => (
            <button
              key={index}
              onClick={() => handleSymbolClick(symbol)}
              className="aspect-square flex items-center justify-center text-3xl bg-white rounded-lg shadow-md hover:bg-gray-50"
            >
              {symbol}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default PatternMatching;
