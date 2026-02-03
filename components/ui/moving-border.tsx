"use client";
import React, { useState, useEffect } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

export function MovingBorderContainer({
  borderRadius = "1.75rem",
  children,
  as: Component = "div",
  containerClassName,
  borderClassName,
  duration,
  className,
  ...otherProps
}: {
  borderRadius?: string;
  children: React.ReactNode;
  as?: any;
  containerClassName?: string;
  borderClassName?: string;
  duration?: number;
  className?: string;
  [key: string]: any;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Component
      className={cn(
        "relative h-full w-full overflow-hidden bg-transparent p-[10px]",
        containerClassName,
      )}
      style={{
        borderRadius: borderRadius,
      }}
      {...otherProps}
    >
      {mounted && (
        <div
          className="absolute inset-0"
          style={{ borderRadius: borderRadius }}
        >
          <MovingBorder duration={duration} rx="24" ry="24">
            <div
              className={cn(
                "h-64 w-64 bg-[radial-gradient(#3b82f6_60%,transparent_100%)] opacity-[1]",
                borderClassName,
              )}
            />
          </MovingBorder>
        </div>
      )}

      <div
        className={cn(
          "relative flex h-full w-full flex-col bg-white antialiased dark:bg-[#1c2136]",
          className,
        )}
        style={{
          borderRadius: `calc(${borderRadius} * 0.96)`,
        }}
      >
        {children}
      </div>
    </Component>
  );
}

export const MovingBorder = ({
  children,
  duration = 2000,
  rx,
  ry,
  ...otherProps
}: {
  children: React.ReactNode;
  duration?: number;
  rx?: string;
  ry?: string;
  [key: string]: any;
}) => {
  const pathRef = useRef<any>(null);
  const progress = useMotionValue<number>(0);

  useAnimationFrame((time) => {
    const length = pathRef.current?.getTotalLength();
    if (length) {
      const pxPerMillisecond = length / duration;
      progress.set((time * pxPerMillisecond) % length);
    }
  });

  const x = useTransform(
    progress,
    (val) => pathRef.current?.getPointAtLength(val).x,
  );
  const y = useTransform(
    progress,
    (val) => pathRef.current?.getPointAtLength(val).y,
  );

  const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      className="absolute h-full w-full"
      width="100%"
      height="100%"
      {...otherProps}
    >
      <rect
        fill="none"
        width="100%"
        height="100%"
        rx={rx}
        ry={ry}
        ref={pathRef}
        stroke="rgba(59, 130, 246, 0.1)"
        strokeWidth="1"
      />
      <motion.g style={{ transform }}>{children}</motion.g>
    </svg>
  );
};
