import React from "react";

const CloudBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      <div className="absolute inset-0 bg-wellness-blue/30">
        <div className="cloud animate-move-clouds opacity-20 absolute top-[10%]">
          ☁️
        </div>
        <div className="cloud animate-move-clouds opacity-20 absolute top-[30%] [animation-delay:2s]">
          ☁️
        </div>
        <div className="cloud animate-move-clouds opacity-20 absolute top-[50%] [animation-delay:4s]">
          ☁️
        </div>
      </div>
    </div>
  );
};

export default CloudBackground;