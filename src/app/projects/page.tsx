import { ProjectDialog } from "~/components/projects/ProjectDialog";
import {
  PROJECTS_INDEPENDENT_WORKS,
  PROJECTS_ORIGINAL_SOUNDTRACKS,
} from "~/lib/consts";

export default function Projects() {
  return (
    <section className="responsiveContainer relative z-10 flex w-full flex-col gap-12 pt-4">
      <div className="flex flex-col gap-4">
        <h1 className="font-nippo text-3xl font-semibold text-gray-900 text-shadow-white sm:text-5xl">
          Original Soundtracks
        </h1>

        <div className="3xl:grid-cols-4 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-8">
          {[...PROJECTS_ORIGINAL_SOUNDTRACKS].map((p) => (
            <ProjectDialog project={p} key={p.name} />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h1 className="font-nippo text-3xl font-semibold text-gray-900 text-shadow-white sm:text-5xl">
          Independent Works
        </h1>

        <div className="3xl:grid-cols-4 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-8">
          {[...PROJECTS_INDEPENDENT_WORKS].map((p) => (
            <ProjectDialog project={p} key={p.name} />
          ))}
        </div>
      </div>
    </section>
  );
}
