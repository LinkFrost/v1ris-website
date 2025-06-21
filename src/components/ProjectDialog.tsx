import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { ExternalLink, Play, Download } from "lucide-react";
import { ProjectCard } from "./ProjectCard.tsx";
import type { Project } from "@/consts.ts";

export function ProjectDialog({ project }: { project: Project }) {
  const { name, projectLink, musicLink, thumbnail, description } = project;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <ProjectCard
          name={name}
          thumbnail={thumbnail}
          projectLink={projectLink}
          musicLink={musicLink}
          description={description}
        />
      </DialogTrigger>

      <DialogContent className="max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-slate-900 border-slate-600 text-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold font-azaret text-white">
            {name}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <div className="relative aspect-video rounded-lg overflow-hidden">
            <img
              src={thumbnail}
              alt={name}
              className="object-contain w-full h-full"
            />
          </div>

          <div className="space-y-4">
            <p className="text-slate-200 font-azaret leading-relaxed">
              {description}
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              {musicLink && (
                <Button className="flex items-center gap-2 bg-indigo-500 hover:bg-indigo-700 text-white">
                  <Play className="w-4 h-4" />
                  Listen to the Soundtrack
                </Button>
              )}

              {projectLink && (
                <Button
                  variant="outline"
                  className="flex items-center gap-2 border-slate-400 text-slate-200 hover:bg-white/10"
                  asChild
                >
                  <a
                    href={projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Check out the project!
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
