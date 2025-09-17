import * as React from "react";
import { Card, CardTitle } from "../ui/card";

interface ProjectCardProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  name: string;
  thumbnail: string;
  projectLink?: string;
  musicLink?: string;
  description?: string;
}

export const ProjectCard = React.forwardRef<
  HTMLButtonElement,
  ProjectCardProps
>(
  (
    {
      name,
      thumbnail,
      className,
      projectLink,
      musicLink,
      description,
      ...props
    },
    ref,
  ) => {
    return (
      <button ref={ref} className="h-full w-full text-left" {...props}>
        <Card className="group flex h-full w-full flex-col overflow-hidden border-slate-500 bg-gray-900/80 p-0 pb-6 text-left backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
          <div className="relative aspect-video overflow-hidden">
            <img
              src={thumbnail}
              alt={name}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
          </div>

          <div className="mt-auto">
            <CardTitle className="font-azaret text-center text-xl text-white">
              {name}
            </CardTitle>
          </div>
        </Card>
      </button>
    );
  },
);

ProjectCard.displayName = "ProjectCard";
