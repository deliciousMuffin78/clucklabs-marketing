"use client";
import React from "react";
import { cn } from "@/lib/utils";

export const Noise = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full transform opacity-[0.03]",
        className,
      )}
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
      }}
    ></div>
  );
};

export const CardWithNoise = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "border-stroke dark:border-strokedark dark:bg-blacksection relative overflow-hidden rounded-[24px] border bg-white p-8 shadow-sm",
        className,
      )}
    >
      <Noise />
      <div className="relative z-10">{children}</div>
    </div>
  );
};
