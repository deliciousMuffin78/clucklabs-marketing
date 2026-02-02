"use client";

import React, { useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface NavbarProps {
  children: React.ReactNode;
  className?: string;
}

interface NavBodyProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface NavItemsProps {
  items: {
    name: string;
    link: string;
  }[];
  className?: string;
  onItemClick?: () => void;
}

interface MobileNavProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface MobileNavHeaderProps {
  children: React.ReactNode;
  className?: string;
}

interface MobileNavMenuProps {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

/**
 * The main wrapper for the Navbar. 
 * Listens to scroll events and passes the 'visible' state to its children.
 */
export const Navbar = ({ children, className }: NavbarProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState<boolean>(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });

  return (
    <motion.div
      ref={ref}
      className={cn("fixed inset-x-0 top-6 z-99999 w-full", className)}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(
              child as React.ReactElement<{ visible?: boolean }>,
              { visible }
            )
          : child
      )}
    </motion.div>
  );
};

export const NavBody = ({ children, className, visible }: NavBodyProps) => {
  return (
    <motion.div
      initial={false}
      animate={{
        backdropFilter: visible ? "blur(12px)" : "blur(0px)",
        boxShadow: visible
          ? "0 0 24px rgba(0, 0, 0, 0.08), 0 1px 1px rgba(0, 0, 0, 0.05)"
          : "none",
        maxWidth: visible ? "850px" : "1390px",
      }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 26,
      }}
      style={{ transformOrigin: "center" }}
      className={cn(
        "relative mx-auto hidden lg:flex flex-row items-center justify-between rounded-full border border-transparent py-4 px-10 w-full transition-colors duration-500",
        visible 
          ? "bg-white/80 border-stroke dark:bg-[#000000]/80 dark:border-strokedark" 
          : "bg-transparent border-transparent",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export const NavItems = ({ items, className, onItemClick }: NavItemsProps) => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <motion.div
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "flex flex-row items-center justify-center gap-2 text-[17px] font-medium shrink-0",
        className
      )}
    >
      {items.map((item, idx) => (
        <Link
          onMouseEnter={() => setHovered(idx)}
          onClick={onItemClick}
          className="relative px-4 py-2 text-black dark:text-white shrink-0"
          key={`link-${idx}`}
          href={item.link}
        >
          {hovered === idx && (
            <motion.div
              layoutId="hovered"
              className="absolute inset-0 h-full w-full rounded-full bg-black/5 dark:bg-white/10"
              transition={{
                layout: {
                  duration: 0.2,
                  ease: "easeOut",
                }
              }}
            />
          )}
          <span className="relative z-20">{item.name}</span>
        </Link>
      ))}
    </motion.div>
  );
};

export const MobileNav = ({ children, className, visible }: MobileNavProps) => {
  return (
    <motion.div
      initial={false}
      animate={{
        backdropFilter: visible ? "blur(12px)" : "blur(0px)",
        boxShadow: visible
          ? "0 0 24px rgba(0, 0, 0, 0.08)"
          : "none",
        scale: visible ? 0.95 : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 26,
      }}
      style={{ transformOrigin: "center" }}
      className={cn(
        "relative mx-auto flex flex-col items-center justify-between px-4 py-3 lg:hidden transition-colors duration-500 rounded-2xl border border-transparent w-full",
        visible 
          ? "bg-white/80 border-stroke dark:bg-[#000000]/80 dark:border-strokedark" 
          : "bg-transparent border-transparent",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export const MobileNavHeader = ({ children, className }: MobileNavHeaderProps) => (
  <div className={cn("flex w-full flex-row items-center justify-between", className)}>
    {children}
  </div>
);

export const MobileNavMenu = ({ children, className, isOpen }: MobileNavMenuProps) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className={cn(
          "absolute inset-x-0 top-16 z-50 flex w-full flex-col items-start justify-start gap-4 rounded-xl bg-white p-6 shadow-xl dark:bg-black border border-stroke dark:border-strokedark",
          className
        )}
      >
        {children}
      </motion.div>
    )}
  </AnimatePresence>
);

export const MobileNavToggle = ({ isOpen, onClick }: { isOpen: boolean; onClick: () => void }) => (
  <button onClick={onClick} className="p-2 text-black dark:text-white">
    {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
  </button>
);

export const NavbarButton = ({
  href,
  as: Tag = "a",
  children,
  className,
  variant = "primary",
  ...props
}: {
  href?: string;
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "dark" | "gradient";
} & React.AnchorHTMLAttributes<HTMLAnchorElement> & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const baseStyles = "px-6 py-2 rounded-full text-sm font-medium transition duration-200 inline-block text-center";
  const variants = {
    primary: "bg-primary text-white hover:bg-primary/90",
    secondary: "bg-transparent text-black dark:text-white border border-stroke dark:border-strokedark",
    dark: "bg-black text-white dark:bg-white dark:text-black",
    gradient: "bg-gradient-to-r from-blue-600 to-indigo-600 text-white",
  };

  return (
    <Tag href={href} className={cn(baseStyles, variants[variant], className)} {...props}>
      {children}
    </Tag>
  );
};
