
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface ZenGardenProps {
  onBack: () => void;
}

const elements = [
  { id: 1, emoji: "🪨", name: "rock" },
  { id: 2, emoji: "🌸", name: "flower" },
  { id: 3, emoji: "🌿", name: "plant" },
  { id: 4, emoji: "🍁", name: "leaf" },
  { id: 5, emoji: "🎋", name: "bamboo" },
];

const ZenGarden: React.FC<ZenGardenProps> = ({ onBack }) => {
  const [garden, setGarden] = useState<Array<{ id: number; emoji: string }>>([]);
  const [selectedElement, setSelectedElement] = useState<number | null>(null);
  const [harmony, setHarmony] = useState(0);

  const addToGarden = (position: number) => {
    if (selectedElement === null) return;

    const element = elements.find(e => e.id === selectedElement);
    if (!element) return;

    const newGarden = [...garden];
    newGarden[position] = { id: element.id, emoji: element.emoji };
    setGarden(newGarden);
    
    // Calculate harmony based on element placement
    const newHarmony = calculateHarmony(newGarden);
    setHarmony(newHarmony);

    if (newHarmony >= 80) {
      toast.success("Your garden is achieving great harmony!");
    }
  };

  const calculateHarmony = (newGarden: Array<{ id: number; emoji: string }>) => {
    let harmonyScore = 0;
    
    // Basic patterns that increase harmony
    const patterns = [
      { elements: [1, 2], bonus: 20 }, // rock + flower
      { elements: [2, 3], bonus: 15 }, // flower + plant
      { elements: [1, 5], bonus: 25 }, // rock + bamboo
      { elements: [3, 4], bonus: 10 }, // plant + leaf
    ];

    // Check for patterns
    for (let i = 0; i < newGarden.length - 1; i++) {
      if (!newGarden[i] || !newGarden[i + 1]) continue;
      
      const pair = [newGarden[i].id, newGarden[i + 1].id];
      patterns.forEach(pattern => {
        if (pair.includes(pattern.elements[0]) && pair.includes(pattern.elements[1])) {
          harmonyScore += pattern.bonus;
        }
      });
    }

    // Base points for each placed element
    harmonyScore += newGarden.filter(Boolean).length * 5;

    return Math.min(100, harmonyScore);
  };

  const resetGarden = () => {
    setGarden([]);
    setSelectedElement(null);
    setHarmony(0);
    toast("Garden cleared. Start fresh!");
  };

  return (
    <div className="max-w-2xl mx-auto">
      <Button onClick={onBack} variant="outline" className="mb-6">
        Back to Games
      </Button>

      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold mb-4">Zen Garden</h2>
        <p className="text-gray-600 mb-4">Harmony Level: {harmony}%</p>
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-6">
          <div 
            className="bg-wellness-peach h-2.5 rounded-full transition-all duration-500"
            style={{ width: `${harmony}%` }}
          />
        </div>
      </div>

      <div className="flex justify-center gap-4 mb-8">
        {elements.map((element) => (
          <button
            key={element.id}
            onClick={() => setSelectedElement(element.id)}
            className={`
              text-3xl p-4 rounded-lg bg-white shadow-md hover:bg-gray-50
              ${selectedElement === element.id ? 'ring-2 ring-wellness-peach' : ''}
            `}
          >
            {element.emoji}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-4 gap-4 mb-8">
        {Array(12).fill(null).map((_, index) => (
          <button
            key={index}
            onClick={() => addToGarden(index)}
            className="aspect-square flex items-center justify-center text-3xl bg-white rounded-lg shadow-md hover:bg-gray-50"
          >
            {garden[index]?.emoji || ""}
          </button>
        ))}
      </div>

      <div className="text-center">
        <Button
          onClick={resetGarden}
          className="bg-wellness-peach hover:bg-wellness-peach/90"
        >
          Clear Garden
        </Button>
      </div>
    </div>
  );
};

export default ZenGarden;
