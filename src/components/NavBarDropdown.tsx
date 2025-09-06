"use client";

import React from "react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "./ui/navigation-menu";
import { HeaderLinkReact } from "./HeaderLinkReact";
import { cn } from "@/lib/utils";

export const NavBarDropdown = () => {
  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList className="flex">
        <NavigationMenuItem>
          <NavigationMenuTrigger
            className="
            group inline-flex items-center gap-1
            text-sm sm:text-xl font-nippo text-white
            hover:text-gray-300 hover:scale-110
            hover:border-b-4 hover:border-indigo-300
            focus:border-b-4 focus:border-indigo-300
            transition
          "
          >
            Commissions
          </NavigationMenuTrigger>

          <NavigationMenuContent
            className={cn(
              "!absolute top-full left-0 z-[9999] mt-0 w-40 bg-black rounded-md shadow-lg flex flex-col gap-4"
            )}
          >
            <NavigationMenuLink asChild>
              <HeaderLinkReact href="/violin">Violin</HeaderLinkReact>
            </NavigationMenuLink>

            <NavigationMenuLink asChild>
              <HeaderLinkReact href="/compositions">
                Compositions
              </HeaderLinkReact>
            </NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
