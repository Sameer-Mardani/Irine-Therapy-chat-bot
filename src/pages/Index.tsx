import React from "react";
import Navigation from "@/components/Navigation";
import CloudBackground from "@/components/CloudBackground";
import ChatBot from "@/components/ChatBot";
import AudioPlayer from "@/components/AudioPlayer";
import '../index.css';
const Index = () => {
  return (
    
    <div className="min-h-screen svg-inspired-gradient">
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


// import React from "react";
// import Navigation from "@/components/Navigation";
// import CloudBackground from "@/components/CloudBackground";

// const Index = () => {
//   return (
//     <>
//       <style>
//         {`
//           .svg-inspired-gradient {
//             background: linear-gradient(
//               45deg,
//               #D9D8F0,
//               #7D7C8A,
//               rgba(118, 199, 192, 0), /* #76C7C0 opacity 0 */
//               rgba(118, 199, 192, 0.96), /* #76C7C0 opacity 0.96 */
//               rgba(245, 232, 211, 0), /* #F5E8D3 opacity 0 */
//               rgba(245, 232, 211, 0.2) /* #F5E8D3 opacity 0.2 */
//             );
//             background-size: 300% 300%; /* Bigger size for smoother movement */
//             animation: gradientShift 20s ease infinite;
//           }

//           @keyframes gradientShift {
//             0% { background-position: 0% 0%; }
//             50% { background-position: 100% 100%; }
//             100% { background-position: 0% 0%; }
//           }
//         `}
//       </style>
//       <div className="min-h-screen svg-inspired-gradient">
//         <CloudBackground />
//         <Navigation />
//         <main className="container mx-auto px-4 pt-24 pb-12 relative">
//           <h1 className="text-4xl font-bold text-center mb-8">Welcome to Wellness</h1>
//           <p className="text-center text-gray-600">Your journey to peace starts here.</p>
//         </main>
//       </div>
//     </>
//   );
// };

// export default Index;

