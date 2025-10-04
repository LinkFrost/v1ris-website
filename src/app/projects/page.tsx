import { ProjectDialog } from "~/components/projects/ProjectDialog";
import { Card, CardContent } from "~/components/ui/card";
import {
  PROJECTS_INDEPENDENT_WORKS,
  PROJECTS_ORIGINAL_SOUNDTRACKS,
} from "~/lib/consts";

export default function Projects() {
  return (
    <section className="responsiveContainer relative z-10 flex w-full flex-col gap-12 pt-4">
      <div className="mb-4 flex flex-col gap-8">
        <Card className="border-slate-500 bg-gray-900/65 backdrop-blur-sm">
          <CardContent className="flex flex-col gap-8 px-">
            <h1 className="font-AzaretMono text-shadow font-semibold text-3xl text-white sm:text-5xl">
              Original Soundtracks
            </h1>
            <div className="3xl:grid-cols-4 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-8">
              {[...PROJECTS_ORIGINAL_SOUNDTRACKS].map((p) => (
                <ProjectDialog project={p} key={p.name} />
              ))}
            </div>{" "}
          </CardContent>
        </Card>

        <Card className="border-slate-500 bg-gray-900/65 backdrop-blur-sm">
          <CardContent className="flex flex-col gap-8 px-8">
            <h1 className="font-AzaretMono text-shadow font-semibold text-3xl text-white sm:text-5xl">
              Independent Works
            </h1>

            <div className="3xl:grid-cols-4 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-8">
              {[...PROJECTS_INDEPENDENT_WORKS].map((p) => (
                <ProjectDialog project={p} key={p.name} />
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
