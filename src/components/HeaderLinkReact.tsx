"use client";
import React from "react";
import type { AnchorHTMLAttributes, FC } from "react";
import { cn } from "@/lib/utils";

export interface HeaderLinkProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

export const HeaderLinkReact: FC<HeaderLinkProps> = ({
  href,
  children,
  className,
  ...props
}) => {
  // we keep a piece of state so that on initial render
  // isActive is false (avoids SSR/client mismatch),
  // then once mounted we re-compute.
  const [currentPath, setCurrentPath] = React.useState<string>("");

  React.useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  // strip trailing slash for comparison
  const clean = (p: string) => p.replace(/\/$/, "");
  const isActive =
    clean(currentPath) === clean(href) || clean(currentPath) === href;

  return (
    <a
      href={href}
      className={cn(
        "hover:text-gray-300 hover:border-b-2 hover:border-indigo-300",
        "text-sm sm:text-xl font-nippo",
        isActive
          ? "font-bold border-b-4 border-indigo-300 text-white"
          : "text-white",
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
};
