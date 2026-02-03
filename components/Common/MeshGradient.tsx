"use client";

import React from "react";

const MeshGradient = () => {
  return (
    <div 
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden bg-transparent"
      style={{
        maskImage: 'linear-gradient(to bottom, transparent, black 25%, black 75%, transparent)',
        WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 25%, black 75%, transparent)'
      }}
    >
      {/* Left blue gradient */}
      <div
        className="absolute top-[-30%] left-[-20%] h-[120%] w-[120%] opacity-80 dark:opacity-40"
        style={{
          background:
            "radial-gradient(circle at 30% 40%, #8fc7dd 0%, #a3cddd44 40%, #a3cddd00 70%)",
        }}
      />

      {/* Right purple gradient */}
      <div
        className="absolute top-[-30%] right-[-20%] h-[120%] w-[120%] opacity-80 dark:opacity-40"
        style={{
          background:
            "radial-gradient(circle at 70% 40%, #e3bcf2 0%, #ebd8f244 40%, #ebd8f200 70%)",
        }}
      />
    </div>
  );
};

export default MeshGradient;
