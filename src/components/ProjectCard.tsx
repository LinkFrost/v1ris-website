import * as React from "react";
import { Card, CardTitle } from "./ui/card";

interface ProjectCardProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  name: string;
  thumbnail: string;
  projectLink?: string;
  musicLink?: string;
  description?: string;
}

const ProjectCard = React.forwardRef<HTMLButtonElement, ProjectCardProps>(
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
    ref
  ) => {
    return (
      <button ref={ref} className="w-full h-full text-left" {...props}>
        <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-black/40 border-slate-500 backdrop-blur-sm p-0 pb-6 text-left w-full h-full flex flex-col">
          <div className="relative aspect-video overflow-hidden">
            <img
              src={thumbnail}
              alt={name}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          <div className="mt-auto">
            <CardTitle className="text-xl font-azaret text-center text-white">
              {name}
            </CardTitle>
          </div>
        </Card>
      </button>
    );
  }
);

ProjectCard.displayName = "ProjectCard";

export { ProjectCard };
