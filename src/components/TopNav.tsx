"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
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
import { BandcampIcon } from "./svg/Bandcamp";
import { BlueSkyIcon } from "./svg/BlueSky";
import { SoundcloudIcon } from "./svg/Soundcloud";
import { SpotifyIcon } from "./svg/Spotify";
import { InstagramIcon } from "./svg/Instagram";

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
          className={`font-nippo text-xl hover:scale-110 hover:border-b-4 hover:border-indigo-300 hover:text-gray-300 ${isActive ? "border-b-4 border-indigo-300 font-bold text-white" : "text-white"}`}
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

  return (
    <header className="sticky top-0 z-50 w-full bg-black text-white">
      <NavigationMenu>
        <div className="flex items-center">
          <Link href="/" passHref>
            <div className="flex flex-col items-start">
              <span className="font-telma text-shadow mr-8 text-6xl font-semibold text-indigo-300">
                v1ris
              </span>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 lg:flex">
            <NavLink href="/projects" name="Projects" />
          </nav>

          <nav className="hidden items-center gap-6 lg:flex">
            <NavLink href="/commissions" name="Commissions" />
          </nav>

          <nav className="hidden items-center gap-6 lg:flex">
            <NavLink href="/about" name="About" />
          </nav>

          <nav className="hidden items-center gap-6 lg:flex">
            <NavLink href="/contact" name="Contact" />
          </nav>
        </div>

        <div className="hidden items-center justify-center gap-4 lg:flex">
          <Link
            className="text-[#a3b3ff] hover:scale-125"
            href="https://soundcloud.com/v1ris"
            target="_blank"
            aria-label="soundcloud"
          >
            <SoundcloudIcon />
          </Link>

          <Link
            className="text-[#a3b3ff] hover:scale-125"
            href="https://open.spotify.com/artist/3QAWVvdQIrW5GGXjhXT5tH"
            target="_blank"
            aria-label="spotify"
          >
            <SpotifyIcon />
          </Link>

          <Link
            className="text-[#a3b3ff] hover:scale-120"
            href="https://v1ris.bandcamp.com/follow_me"
            target="_blank"
            aria-label="bandcamp"
          >
            <BandcampIcon />
          </Link>

          <Link
            className="text-[#a3b3ff] hover:scale-125"
            href="https://bsky.app/profile/v1ris.com"
            target="_blank"
            aria-label="bluesky"
          >
            <BlueSkyIcon />
          </Link>

          <Link
            className="text-[#a3b3ff] hover:scale-125"
            href="https://www.instagram.com/v1ris_music/"
            target="_blank"
            aria-label="instagram"
          >
            <InstagramIcon />
          </Link>
        </div>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTitle className="sr-only">NavBar Menu</SheetTitle>

          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon" className="mt-3 text-white">
              <Menu className="text-accent !h-8 !w-8" />

              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>

          <SheetContent side="top" className="border-0 bg-black text-white">
            <div className="mt-8 mb-8 flex w-full flex-col items-center gap-6">
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
                className="text-[#a3b3ff] hover:scale-125 hover:cursor-grab"
                href="https://soundcloud.com/v1ris"
                target="_blank"
                aria-label="soundcloud"
              >
                <SoundcloudIcon />
              </Link>

              <Link
                className="text-[#a3b3ff] hover:scale-125 hover:cursor-grab"
                href="https://open.spotify.com/artist/3QAWVvdQIrW5GGXjhXT5tH"
                target="_blank"
                aria-label="spotify"
              >
                <SpotifyIcon />
              </Link>

              <Link
                className="text-[#a3b3ff] hover:scale-120 hover:cursor-grab"
                href="https://v1ris.bandcamp.com/follow_me"
                target="_blank"
                aria-label="bandcamp"
              >
                <BandcampIcon />
              </Link>

              <Link
                className="text-[#a3b3ff] hover:scale-125 hover:cursor-grab"
                href="https://bsky.app/profile/v1ris.com"
                target="_blank"
                aria-label="bluesky"
              >
                <BlueSkyIcon />
              </Link>

              <Link
                className="text-[#a3b3ff] hover:scale-125 hover:cursor-grab"
                href="https://www.instagram.com/v1ris_music/"
                target="_blank"
                aria-label="instagram"
              >
                <InstagramIcon />
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </NavigationMenu>
    </header>
  );
};
