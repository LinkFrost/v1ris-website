"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
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
import { usePathname, useRouter } from "next/navigation";

// SVG Components
const SoundcloudIcon = ({
  fill,
  ...props
}: {
  fill?: string;
  [key: string]: any;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="35"
    height="35"
    viewBox="0 0 50 50"
    {...props}
  >
    <path
      fill={fill}
      d="M 30 11 C 26.398438 11 23 12.789063 21 15.6875 L 21 36 L 42.5 36 C 46.601563 36 50 32.601563 50 28.5 C 50 24.398438 46.601563 21 42.5 21 C 42 21 41.5 21.085938 41 21.1875 C 40.5 15.488281 35.800781 11 30 11 Z M 17 16 C 16.300781 16 15.601563 16.085938 15 16.1875 L 15 36 L 17 36 Z M 18 16 L 18 36 L 20 36 L 20 16.5 C 19.398438 16.300781 18.699219 16.101563 18 16 Z M 14 16.5 C 13.300781 16.800781 12.601563 17.101563 12 17.5 L 12 36 L 14 36 Z M 11 18.3125 C 10.199219 19.011719 9.5 19.90625 9 20.90625 L 9 36 L 11 36 Z M 6.5 22 C 6.324219 22.011719 6.148438 22.042969 6 22.09375 L 6 35.90625 C 6.300781 36.007813 6.699219 36 7 36 L 8 36 L 8 22.09375 C 7.699219 21.992188 7.300781 22 7 22 C 6.851563 22 6.675781 21.988281 6.5 22 Z M 5 22.3125 C 4.300781 22.511719 3.601563 22.8125 3 23.3125 L 3 34.6875 C 3.601563 35.085938 4.300781 35.488281 5 35.6875 Z M 2 24.09375 C 0.800781 25.394531 0 27.101563 0 29 C 0 30.898438 0.800781 32.605469 2 33.90625 Z"
    />
  </svg>
);

const SpotifyIcon = ({
  fill,
  ...props
}: {
  fill?: string;
  [key: string]: any;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="35"
    height="35"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={fill}
      d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z"
    />
  </svg>
);

const BandCampIcon = ({
  fill,
  ...props
}: {
  fill?: string;
  [key: string]: any;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="50"
    height="50"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={fill}
      d="M0 18.75A5.25 5.25 0 0 1 5.25 13.5H9a3 3 0 0 1 3 3v2.25A5.25 5.25 0 0 1 6.75 24H0v-5.25zM5.25 10.5A5.25 5.25 0 0 1 0 5.25V0h5.25a5.25 5.25 0 0 1 5.25 5.25v5.25H5.25zM24 5.25A5.25 5.25 0 0 0 18.75 0H15a3 3 0 0 0-3 3v2.25A5.25 5.25 0 0 0 17.25 10.5H24V5.25zM18.75 13.5A5.25 5.25 0 0 1 24 18.75V24h-5.25a5.25 5.25 0 0 1-5.25-5.25v-5.25h5.25z"
    />
  </svg>
);

const BlueSkyIcon = ({
  fill,
  ...props
}: {
  fill?: string;
  [key: string]: any;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="35"
    height="35"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={fill}
      d="M12 10.8c-1.087-5.785-7.155-7.19-7.155-7.19S2.4 6.25 1.2 10.8c-1.2 4.55 1.425 7.425 1.425 7.425s3.75-1.95 9.375-1.95 9.375 1.95 9.375 1.95S13.2 15.35 12 10.8z"
    />
  </svg>
);

const InstagramIcon = ({
  fill,
  ...props
}: {
  fill?: string;
  [key: string]: any;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="35"
    height="35"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={fill}
      d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
    />
  </svg>
);

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
            <SoundcloudIcon fill={svgColor} />
          </Link>

          <Link
            className="hover:scale-125"
            href="https://open.spotify.com/artist/3QAWVvdQIrW5GGXjhXT5tH"
            target="_blank"
            aria-label="spotify"
          >
            <SpotifyIcon fill={svgColor} />
          </Link>

          <Link
            className="hover:scale-120"
            href="https://v1ris.bandcamp.com/follow_me"
            target="_blank"
            aria-label="bandcamp"
          >
            <BandCampIcon fill={svgColor} width={50} height={50} />
          </Link>

          <Link
            className="hover:scale-125"
            href="https://bsky.app/profile/v1ris.com"
            target="_blank"
            aria-label="bluesky"
          >
            <BlueSkyIcon fill={svgColor} />
          </Link>

          <Link
            className="hover:scale-125"
            href="https://www.instagram.com/v1ris_music/"
            target="_blank"
            aria-label="instagram"
          >
            <InstagramIcon fill={svgColor} />
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
                <SoundcloudIcon fill={svgColor} />
              </Link>

              <Link
                className="hover:scale-125 hover:cursor-grab"
                href="https://open.spotify.com/artist/3QAWVvdQIrW5GGXjhXT5tH"
                target="_blank"
                aria-label="spotify"
              >
                <SpotifyIcon fill={svgColor} />
              </Link>

              <Link
                className="hover:scale-120 hover:cursor-grab"
                href="https://v1ris.bandcamp.com/follow_me"
                target="_blank"
                aria-label="bandcamp"
              >
                <BandCampIcon fill={svgColor} width={50} height={50} />
              </Link>

              <Link
                className="hover:scale-125 hover:cursor-grab"
                href="https://bsky.app/profile/v1ris.com"
                target="_blank"
                aria-label="bluesky"
              >
                <BlueSkyIcon fill={svgColor} />
              </Link>

              <Link
                className="hover:scale-125 hover:cursor-grab"
                href="https://www.instagram.com/v1ris_music/"
                target="_blank"
                aria-label="instagram"
              >
                <InstagramIcon fill={svgColor} />
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </NavigationMenu>
      {/* </div> */}
    </header>
  );
};
