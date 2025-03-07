// import React from "react";
// import { useNavigate } from "react-router-dom";
// import Navigation from "@/components/Navigation";
// import CloudBackground from "@/components/CloudBackground";
// import { Card } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Music, Puzzle, Brain } from "lucide-react";

// const MiniGames = () => {
//   const navigate = useNavigate();

//   const handlePeacefulSounds = () => {
//     navigate("/mini-games/peaceful-sounds");
//   };

//   const handleMindfulPuzzles = () => {
//     navigate("/mini-games/mindful-puzzles");
//   };

//   const handleMemoryGames = () => {
//     navigate("/mini-games/memory-games");
//   };

//   return (
//     <div className="min-h-screen bg-wellness-purple/30">
//       <CloudBackground />
//       <Navigation />
//       <main className="container mx-auto px-4 pt-24 pb-12 relative">
//         <h1 className="text-3xl font-semibold text-center mb-8 text-wellness-purple">Therapeutic Mini Games</h1>
//         <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
//           Engage in calming activities designed to help you relax and find peace. Choose from our selection of mindful games and experiences.
//         </p>
        
//         <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
//           <Card className="p-6 bg-white/80 backdrop-blur-sm transform transition-all duration-300 hover:scale-105">
//             <Music className="w-12 h-12 mx-auto mb-4 text-wellness-purple" />
//             <h2 className="text-xl font-semibold text-center mb-2">Peaceful Sounds</h2>
//             <p className="text-center text-gray-600 mb-4">
//               Immerse yourself in calming nature sounds, meditation music, and peaceful melodies. Perfect for relaxation and focus.
//             </p>
//             <div className="space-y-2">
//               <p className="text-sm text-gray-500 text-center">Features:</p>
//               <ul className="text-sm text-gray-600 space-y-1 mb-4">
//                 <li className="text-center">• Curated peaceful playlists</li>
//                 <li className="text-center">• Nature soundscapes</li>
//                 <li className="text-center">• Meditation music</li>
//               </ul>
//             </div>
//             <Button 
//               onClick={handlePeacefulSounds}
//               // className="w-full bg-wellness-purple hover:bg-wellness-purple/90"
//               className="w-full text-[#76C7C0] hover:bg-black transition-colors"
//             >
//               <Music className="w-4 h-4 mr-2 " />
//               Play Now
//             </Button>
//           </Card>
          
//           <Card className="p-6 bg-white/80 backdrop-blur-sm transform transition-all duration-300 hover:scale-105">
//             <Puzzle className="w-12 h-12 mx-auto mb-4 text-wellness-peach" />
//             <h2 className="text-xl font-semibold text-center mb-2">Mindful Puzzles</h2>
//             <p className="text-center text-gray-600 mb-4">
//               Engage in relaxing puzzle games that calm your mind while gently challenging your problem-solving skills.
//             </p>
//             <div className="space-y-2">
//               <p className="text-sm text-gray-500 text-center">Available Games:</p>
//               <ul className="text-sm text-gray-600 space-y-1 mb-4">
//                 <li className="text-center">• Pattern Matching</li>
//                 <li className="text-center">• Color Flow</li>
//                 <li className="text-center">• Zen Garden</li>
//               </ul>
//             </div>
//             <Button 
//               onClick={handleMindfulPuzzles}
//               // className="w-full bg-wellness-peach hover:bg-black/90 text-black hover:text-white"
//               className="w-full text-[#76C7C0] hover:bg-black transition-colors"
//             >
//               <Puzzle className="w-4 h-4 mr-2" />
//               Start Playing
//             </Button>
//           </Card>
          
//           <Card className="p-6 bg-white/80 backdrop-blur-sm transform transition-all duration-300 hover:scale-105">
//             <Brain className="w-12 h-12 mx-auto mb-4 text-wellness-blue" />
//             <h2 className="text-xl font-semibold text-center mb-2">Memory Games</h2>
//             <p className="text-center text-gray-600 mb-4">
//               Boost your cognitive skills with gentle memory exercises designed to be both engaging and relaxing.
//             </p>
//             <div className="space-y-2">
//               <p className="text-sm text-gray-500 text-center">Game Types:</p>
//               <ul className="text-sm text-gray-600 space-y-1 mb-4">
//                 <li className="text-center">• Card Matching</li>
//                 <li className="text-center">• Picture Sequence</li>
//                 <li className="text-center">• Sound Memory</li>
//               </ul>
//             </div>
//             <Button 
//               onClick={handleMemoryGames}
//               className="w-full text-[#76C7C0] hover:bg-black transition-colors"
//             >
//               <Brain className="w-4 h-4 mr-2" />
//               Train Now
//             </Button>
//           </Card>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default MiniGames;

import React from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import CloudBackground from "@/components/CloudBackground";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Music, Puzzle, Brain } from "lucide-react";

const MiniGames = () => {
  const navigate = useNavigate();

  const handlePeacefulSounds = () => {
    navigate("/mini-games/peaceful-sounds");
  };

  const handleMindfulPuzzles = () => {
    navigate("/mini-games/mindful-puzzles");
  };

  const handleMemoryGames = () => {
    navigate("/mini-games/memory-games");
  };

  return (
    <div className="min-h-screen bg-wellness-purple/30 animated-gradient">
      <CloudBackground />
      <Navigation />
      <main className="container mx-auto px-4 pt-24 pb-12 relative">
        <h1 className="text-3xl font-semibold text-center mb-8 text-wellness-purple">Therapeutic Mini Games</h1>
        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
          Engage in calming activities designed to help you relax and find peace. Choose from our selection of mindful games and experiences.
        </p>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          <Card className="p-6 bg-white/80 backdrop-blur-sm transform transition-all duration-300 hover:scale-105">
            <Music className="w-12 h-12 mx-auto mb-4 text-wellness-purple" />
            <h2 className="text-xl font-semibold text-center mb-2">Peaceful Sounds</h2>
            <p className="text-center text-gray-600 mb-4">
              Immerse yourself in calming nature sounds, meditation music, and peaceful melodies. Perfect for relaxation and focus.
            </p>
            <div className="space-y-2">
              <p className="text-sm text-gray-500 text-center">Features:</p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li className="text-center">• Curated peaceful playlists</li>
                <li className="text-center">• Nature soundscapes</li>
                <li className="text-center">• Meditation music</li>
              </ul>
            </div>
            <Button 
              onClick={handlePeacefulSounds}
              className="w-full text-[#76C7C0] hover:bg-black transition-colors"
            >
              <Music className="w-4 h-4 mr-2" />
              Play Now
            </Button>
          </Card>
          
          <Card className="p-6 bg-white/80 backdrop-blur-sm transform transition-all duration-300 hover:scale-105">
            <Puzzle className="w-12 h-12 mx-auto mb-4 text-wellness-peach" />
            <h2 className="text-xl font-semibold text-center mb-2">Mindful Puzzles</h2>
            <p className="text-center text-gray-600 mb-4">
              Engage in relaxing puzzle games that calm your mind while gently challenging your problem-solving skills.
            </p>
            <div className="space-y-2">
              <p className="text-sm text-gray-500 text-center">Available Games:</p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li className="text-center">• Pattern Matching</li>
                <li className="text-center">• Color Flow</li>
                <li className="text-center">• Zen Garden</li>
              </ul>
            </div>
            <Button 
              onClick={handleMindfulPuzzles}
              className="w-full text-[#76C7C0] hover:bg-black transition-colors"
            >
              <Puzzle className="w-4 h-4 mr-2" />
              Start Playing
            </Button>
          </Card>
          
          <Card className="p-6 bg-white/80 backdrop-blur-sm transform transition-all duration-300 hover:scale-105">
            <Brain className="w-12 h-12 mx-auto mb-4 text-wellness-blue" />
            <h2 className="text-xl font-semibold text-center mb-2">Memory Games</h2>
            <p className="text-center text-gray-600 mb-4">
              Boost your cognitive skills with gentle memory exercises designed to be both engaging and relaxing.
            </p>
            <div className="space-y-2">
              <p className="text-sm text-gray-500 text-center">Game Types:</p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li className="text-center">• Card Matching</li>
                <li className="text-center">• Picture Sequence</li>
                <li className="text-center">• Sound Memory</li>
              </ul>
            </div>
            <Button 
              onClick={handleMemoryGames}
              className="w-full text-[#76C7C0] hover:bg-black transition-colors"
            >
              <Brain className="w-4 h-4 mr-2" />
              Train Now
            </Button>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default MiniGames;