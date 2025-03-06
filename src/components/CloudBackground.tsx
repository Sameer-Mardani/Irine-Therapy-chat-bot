// import React from "react";

// const CloudBackground = () => {
//   return (
//     <div className="fixed inset-0 pointer-events-none overflow-hidden">
//       <div className="absolute inset-0 bg-wellness-blue/30">
//         <div className="cloud animate-move-clouds opacity-80 absolute top-[10%]">
//           ☁️
//         </div>
//         <div className="cloud animate-move-clouds opacity-80 absolute top-[30%] [animation-delay:2s]">
//           ☁️
//         </div>
//         <div className="cloud animate-move-clouds opacity-80 absolute top-[50%] [animation-delay:4s]">
//           ☁️
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CloudBackground;


// import React from "react";

// const CloudBackground = () => {
//   return (
//     <div className="fixed inset-0 pointer-events-none overflow-hidden">
//       <div className="absolute inset-0 bg-wellness-blue/30">
//         <div className="cloud cloud-1 absolute top-[10%] animate-clouds [animation-delay:0s]">
//           ☁️
//         </div>
//         <div className="cloud cloud-2 absolute top-[50%] animate-clouds [animation-delay:5s]">
//           ☁️
//         </div>
//         <div className="cloud cloud-3 absolute top-[80%] animate-clouds [animation-delay:10s]">
//           ☁️
//         </div>
//         <div className="cloud cloud-4 absolute top-[60%] animate-clouds [animation-delay:15s]">
//           ☁️
//         </div>
//         <div className="cloud cloud-5 absolute top-[30%] animate-clouds [animation-delay:11s]">
//           ☁️
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CloudBackground;
import React from "react";

const CloudBackground = () => {
  return (
    <div className=" inset-0 pointer-events-none overflow-hidden">
      <div className="absolute inset-0 bg-wellness-blue/30">
        <div className="cloud cloud-1 absolute top-[10%]">
          ☁️
        </div>
        <div className="cloud cloud-2 absolute top-[50%]">
          ☁️
        </div>
        <div className="cloud cloud-3 absolute top-[80%]">
          ☁️
        </div>
        <div className="cloud cloud-4 absolute top-[60%]">
          ☁️
        </div>
        <div className="cloud cloud-5 absolute top-[30%]">
          ☁️
        </div>
      </div>
    </div>
  );
};

export default CloudBackground;