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
import menuData from "./menuData";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathUrl = usePathname();

  // Prepare nav items from menuData
  const mainNavItems = menuData.map((item) => ({
    name: item.title,
    link: item.path || "#",
  }));

  return (
    <Navbar>
      {/* Desktop Navigation */}
      <NavBody>
        <Link href="/" className="flex shrink-0 items-center">
          <Image
            src="/images/logo/logo-dark.png"
            alt="Cluck Logo"
            width={140}
            height={35}
            className="hidden h-auto w-full max-w-[140px] dark:block"
          />
          <Image
            src="/images/logo/logo-light.png"
            alt="Cluck Logo"
            width={140}
            height={35}
            className="h-auto w-full max-w-[140px] dark:hidden"
          />
        </Link>

        {/* This will push the nav items to the right */}
        <div className="flex flex-1 justify-end">
          <NavItems items={mainNavItems} />
        </div>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo/logo-dark.png"
              alt="Cluck Logo"
              width={110}
              height={28}
              className="hidden dark:block"
            />
            <Image
              src="/images/logo/logo-light.png"
              alt="Cluck Logo"
              width={110}
              height={28}
              className="dark:hidden"
            />
          </Link>
          <div className="flex items-center gap-2">
            <MobileNavToggle
              isOpen={isOpen}
              onClick={() => setIsOpen(!isOpen)}
            />
          </div>
        </MobileNavHeader>

        <MobileNavMenu isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <div className="flex w-full flex-col gap-4">
            {menuData.map((item) => (
              <div key={item.id} className="flex flex-col gap-2">
                <Link
                  href={item.path || "#"}
                  className={cn(
                    "text-lg font-medium",
                    pathUrl === item.path
                      ? "text-primary"
                      : "text-black dark:text-white",
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </Link>
                {item.submenu && (
                  <div className="border-stroke dark:border-strokedark flex flex-col gap-2 border-l pl-4">
                    {item.submenu.map((sub) => (
                      <Link
                        key={sub.id}
                        href={sub.path || "#"}
                        className="text-waterloo hover:text-primary text-sm"
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
