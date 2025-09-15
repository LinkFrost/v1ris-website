"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import Soundcloud from "../../public/svg/soundcloud.svg";
import Spotify from "../../public/svg/spotify.svg";
import BandCamp from "../../public/svg/bandcamp.svg";
import BlueSky from "../../public/svg/bluesky.svg";
import Instagram from "../../public/svg/instagram.svg";

const NavLink = ({
  href,
  name,
  handleClick,
}: {
  href: string;
  name: string;
  handleClick?: () => void;
}) => {
  const pathname = usePathname();
  const isActive = href === pathname;

  return (
    <NavigationMenuLink
      className={navigationMenuTriggerStyle()}
      active={isActive}
      asChild
    >
      <Link href={href} passHref>
        <span
          className={`font-nippo text-sm hover:scale-110 hover:border-b-4 hover:border-indigo-300 hover:text-gray-300 sm:text-xl ${isActive ? "border-b-4 border-indigo-300 font-bold text-white" : "text-white"}`}
          onClick={handleClick}
        >
          {name}
        </span>
      </Link>
    </NavigationMenuLink>
  );
};

export const TopNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleNavigation = (href: string) => {
    setIsOpen(false);
    router.push(href);
  };

  const svgColor = "#a3b3ff";

  return (
    <header className="sticky top-0 z-50 w-full bg-black text-white">
      {/* <div className="responsiveContainer flex w-full justify-between"> */}
      <NavigationMenu>
        <div className="flex">
          <nav className="hidden items-center gap-6 md:flex">
            <NavLink href="/" name="Home" />
          </nav>

          <nav className="hidden items-center gap-6 md:flex">
            <NavLink href="/projects" name="Projects" />
          </nav>

          <nav className="hidden items-center gap-6 md:flex">
            <NavLink href="/commissions" name="Commissions" />
          </nav>

          <nav className="hidden items-center gap-6 md:flex">
            <NavLink href="/about" name="About" />
          </nav>

          <nav className="hidden items-center gap-6 md:flex">
            <NavLink href="/contact" name="Contact" />
          </nav>
        </div>

        <div className="hidden items-center justify-center gap-4 md:flex">
          <Link
            className="hover:scale-125"
            href="https://soundcloud.com/v1ris"
            target="_blank"
            aria-label="soundcloud"
          >
            <Soundcloud fill={svgColor} />
          </Link>

          <Link
            className="hover:scale-125"
            href="https://open.spotify.com/artist/3QAWVvdQIrW5GGXjhXT5tH"
            target="_blank"
            aria-label="spotify"
          >
            <Spotify fill={svgColor} />
          </Link>

          <Link
            className="hover:scale-120"
            href="https://v1ris.bandcamp.com/follow_me"
            target="_blank"
            aria-label="bandcamp"
          >
            <BandCamp fill={svgColor} width={50} height={50} />
          </Link>

          <Link
            className="hover:scale-125"
            href="https://bsky.app/profile/v1ris.com"
            target="_blank"
            aria-label="bluesky"
          >
            <BlueSky fill={svgColor} />
          </Link>

          <Link
            className="hover:scale-125"
            href="https://www.instagram.com/v1ris_music/"
            target="_blank"
            aria-label="instagram"
          >
            <Instagram fill={svgColor} />
          </Link>
        </div>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTitle className="sr-only">NavBar Menu</SheetTitle>

          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="text-white">
              <Menu className="text-accent !h-8 !w-8" />

              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>

          <SheetContent side="top" className="border-0 bg-black text-white">
            <div className="mt-8 flex w-full flex-col items-center gap-6">
              <SheetClose asChild>
                <NavLink
                  href="/"
                  name="Home"
                  handleClick={() => handleNavigation("/")}
                />
              </SheetClose>

              <SheetClose asChild>
                <NavLink
                  href="/projects"
                  name="Projects"
                  handleClick={() => handleNavigation("/projects")}
                />
              </SheetClose>

              <SheetClose asChild>
                <NavLink
                  href="/commissions"
                  name="Commissions"
                  handleClick={() => handleNavigation("/commissions")}
                />
              </SheetClose>

              <SheetClose asChild>
                <NavLink
                  href="/about"
                  name="About"
                  handleClick={() => handleNavigation("/about")}
                />
              </SheetClose>

              <SheetClose asChild>
                <NavLink
                  href="/contact"
                  name="Contact"
                  handleClick={() => handleNavigation("/contact")}
                />
              </SheetClose>
            </div>

            <div className="mt-4 flex items-center justify-center gap-4">
              <Link
                className="hover:scale-125 hover:cursor-grab"
                href="https://soundcloud.com/v1ris"
                target="_blank"
                aria-label="soundcloud"
              >
                <Soundcloud fill={svgColor} />
              </Link>

              <Link
                className="hover:scale-125 hover:cursor-grab"
                href="https://open.spotify.com/artist/3QAWVvdQIrW5GGXjhXT5tH"
                target="_blank"
                aria-label="spotify"
              >
                <Spotify fill={svgColor} />
              </Link>

              <Link
                className="hover:scale-120 hover:cursor-grab"
                href="https://v1ris.bandcamp.com/follow_me"
                target="_blank"
                aria-label="bandcamp"
              >
                <BandCamp fill={svgColor} width={50} height={50} />
              </Link>

              <Link
                className="hover:scale-125 hover:cursor-grab"
                href="https://bsky.app/profile/v1ris.com"
                target="_blank"
                aria-label="bluesky"
              >
                <BlueSky fill={svgColor} />
              </Link>

              <Link
                className="hover:scale-125 hover:cursor-grab"
                href="https://www.instagram.com/v1ris_music/"
                target="_blank"
                aria-label="instagram"
              >
                <Instagram fill={svgColor} />
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </NavigationMenu>
      {/* </div> */}
    </header>
  );
};
