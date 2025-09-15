import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { ExternalLink, Play } from "lucide-react";
import type { Project } from "~/lib/consts";
import { ProjectCard } from "./ProjectCard";

export const ProjectDialog = ({ project }: { project: Project }) => {
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

      <DialogContent className="max-h-[90vh] w-full max-w-4xl overflow-y-auto border-slate-600 bg-gray-900 text-white">
        <DialogHeader>
          <DialogTitle className="font-azaret text-2xl font-bold text-white">
            {name}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <div className="relative aspect-video overflow-hidden rounded-lg">
            <img
              src={thumbnail}
              alt={name}
              className="h-full w-full object-contain"
            />
          </div>

          <div className="space-y-4">
            <p className="font-azaret leading-relaxed text-slate-200">
              {description}
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              {musicLink && (
                <Button className="flex items-center gap-2 bg-indigo-500 text-white hover:bg-indigo-700">
                  <Play className="h-4 w-4" />
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
                    <ExternalLink className="h-4 w-4" />
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
};
