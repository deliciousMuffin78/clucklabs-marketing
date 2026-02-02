"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
  NavbarButton,
} from "@/components/ui/resizable-navbar";
import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathUrl = usePathname();

  // Prepare nav items from menuData
  const mainNavItems = menuData.map(item => ({
    name: item.title,
    link: item.path || "#",
  }));

  return (
    <Navbar>
      {/* Desktop Navigation */}
      <NavBody>
        <Link href="/" className="flex items-center shrink-0 w-[100px]">
          <Image
            src="/images/logo/logo-dark.png"
            alt="Cluck Logo"
            width={100}
            height={25}
            className="hidden dark:block h-auto w-full"
          />
          <Image
            src="/images/logo/logo-light.png"
            alt="Cluck Logo"
            width={100}
            height={25}
            className="dark:hidden h-auto w-full"
          />
        </Link>
        
        <NavItems items={mainNavItems} />

        <div className="flex items-center gap-4 shrink-0 justify-end w-[100px]">
          <ThemeToggler />
        </div>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo/logo-dark.png"
              alt="Cluck Logo"
              width={90}
              height={22}
              className="hidden dark:block"
            />
            <Image
              src="/images/logo/logo-light.png"
              alt="Cluck Logo"
              width={90}
              height={22}
              className="dark:hidden"
            />
          </Link>
          <div className="flex items-center gap-2">
            <ThemeToggler />
            <MobileNavToggle isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
          </div>
        </MobileNavHeader>
        
        <MobileNavMenu isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <div className="flex flex-col gap-4 w-full">
            {menuData.map((item) => (
              <div key={item.id} className="flex flex-col gap-2">
                <Link 
                  href={item.path || "#"} 
                  className={cn(
                    "text-lg font-medium",
                    pathUrl === item.path ? "text-primary" : "text-black dark:text-white"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </Link>
                {item.submenu && (
                  <div className="flex flex-col gap-2 pl-4 border-l border-stroke dark:border-strokedark">
                    {item.submenu.map((sub) => (
                      <Link 
                        key={sub.id} 
                        href={sub.path || "#"} 
                        className="text-sm text-waterloo hover:text-primary"
                        onClick={() => setIsOpen(false)}
                      >
                        {sub.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
};

export default Header;
