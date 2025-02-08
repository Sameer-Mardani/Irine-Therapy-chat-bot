
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface ColorFlowProps {
  onBack: () => void;
}

const colors = ["bg-red-400", "bg-blue-400", "bg-green-400", "bg-yellow-400", "bg-purple-400", "bg-pink-400"];

const ColorFlow: React.FC<ColorFlowProps> = ({ onBack }) => {
  const [grid, setGrid] = useState<string[][]>([]);
  const [selectedCells, setSelectedCells] = useState<[number, number][]>([]);
  const [score, setScore] = useState(0);

  useEffect(() => {
    initializeGrid();
  }, []);

  const initializeGrid = () => {
    const newGrid = Array(6).fill(null).map(() =>
      Array(6).fill(null).map(() => colors[Math.floor(Math.random() * colors.length)])
    );
    setGrid(newGrid);
    setSelectedCells([]);
  };

  const handleCellClick = (row: number, col: number) => {
    if (selectedCells.length === 0) {
      setSelectedCells([[row, col]]);
      return;
    }

    const lastCell = selectedCells[selectedCells.length - 1];
    const isAdjacent = 
      (Math.abs(row - lastCell[0]) === 1 && col === lastCell[1]) ||
      (Math.abs(col - lastCell[1]) === 1 && row === lastCell[0]);

    if (isAdjacent && grid[row][col] === grid[lastCell[0]][lastCell[1]]) {
      setSelectedCells([...selectedCells, [row, col]]);

      if (selectedCells.length >= 2) {
        setTimeout(() => {
          const newGrid = [...grid];
          selectedCells.forEach(([r, c]) => {
            newGrid[r][c] = colors[Math.floor(Math.random() * colors.length)];
          });
          setGrid(newGrid);
          setSelectedCells([]);
          setScore(score + selectedCells.length);
          toast.success(`+${selectedCells.length} points!`);
        }, 300);
      }
    } else {
      setSelectedCells([[row, col]]);
    }
  };

  const isCellSelected = (row: number, col: number) => 
    selectedCells.some(([r, c]) => r === row && c === col);

  return (
    <div className="max-w-2xl mx-auto">
      <Button onClick={onBack} variant="outline" className="mb-6">
        Back to Games
      </Button>

      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold mb-4">Color Flow</h2>
        <p className="text-gray-600 mb-4">Score: {score}</p>
        <Button 
          onClick={initializeGrid}
          className="bg-wellness-peach hover:bg-wellness-peach/90 mb-6"
        >
          Reset Game
        </Button>
      </div>

      <div className="grid gap-2 max-w-md mx-auto">
        {grid.map((row, rowIndex) => (
          <div key={rowIndex} className="grid grid-cols-6 gap-2">
            {row.map((color, colIndex) => (
              <button
                key={colIndex}
                className={`
                  w-full aspect-square rounded-lg transition-all
                  ${color}
                  ${isCellSelected(rowIndex, colIndex) ? 'scale-90' : ''}
                  hover:opacity-80
                `}
                onClick={() => handleCellClick(rowIndex, colIndex)}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorFlow;
