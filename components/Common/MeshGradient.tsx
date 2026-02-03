"use client";

import React from "react";

const MeshGradient = () => {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden bg-[#F8F5F8] dark:bg-black">
      {/* Left blue gradient */}
      <div
        className="absolute top-[-40%] left-[-40%] h-[140%] w-[140%] opacity-100 dark:opacity-40"
        style={{
          background:
            "radial-gradient(circle at 30% 40%, #8fc7dd 0%, #a3cddd66 40%, #a3cddd33 55%, #a3cddd00 70%)",
        }}
      />

      {/* Right purple gradient */}
      <div
        className="absolute top-[-40%] right-[-40%] h-[140%] w-[140%] opacity-100 dark:opacity-40"
        style={{
          background:
            "radial-gradient(circle at 70% 40%, #e3bcf2 0%, #ebd8f266 40%, #ebd8f233 55%, #ebd8f200 70%)",
        }}
      />

      {/* Top dissolve */}
      <div className="absolute inset-x-0 top-0 h-[40%] bg-gradient-to-b from-white via-white/40 to-transparent dark:from-black dark:via-black/40" />

      {/* Bottom dissolve */}
      <div className="absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-t from-white via-white/40 to-transparent dark:from-black dark:via-black/40" />
    </div>
  );
};

export default MeshGradient;
