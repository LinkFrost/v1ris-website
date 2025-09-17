import { Card, CardContent } from "~/components/ui/card";

export default function Commissions() {
  return (
    <section className="responsiveContainer relative z-10 flex w-full flex-col gap-12 pt-4">
      <div className="flex flex-col gap-4">
        <h1 className="font-nippo text-4xl font-semibold text-gray-900 text-shadow-white">
          Compositions
        </h1>

        <Card className="border-slate-500 bg-gray-900/80 backdrop-blur-sm">
          <CardContent className="flex flex-col gap-4 px-8">
            <p className="text-xl text-white">
              When writing for games, my rate includes implementation through
              FMOD or Wwise if desired. I am available for multiple tracks or a
              full game scoring project.
            </p>

            <p className="text-xl text-white">
              My base rate is flexible, so please feel free to reach out
              directly, and we can work out the specifics!{" "}
            </p>

            <ul className="ml-8 list-disc">
              <li className="text-xl text-white">
                Original Song: $100 per minute of music
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-col gap-4">
        <h1 className="font-nippo text-4xl font-semibold text-gray-900 text-shadow-white">
          Violin Recording
        </h1>

        <Card className="border-slate-500 bg-gray-900/80 backdrop-blur-sm">
          <CardContent className="flex flex-col gap-4 px-8">
            <p className="text-xl text-white">
              I’d love to play violin on your project, whatever score or song it
              may be!
            </p>

            <p className="text-xl text-white">
              I’ve performed as a part of these orchestras:
            </p>

            <div className="flex flex-col gap-8 sm:flex-row">
              <img
                src="img/aot.jpg"
                width="300px"
                alt="Attack on Titan - Beyond The Walls World Tour"
                className="text-shadow-black"
              />
              <img
                src="img/hso.png"
                width="300px"
                alt="Hartford Symphony Orchestra"
                className="text-shadow-black"
              />
            </div>

            <p className="text-xl text-white">These are my average prices:</p>

            <ul className="ml-8 list-disc">
              <li className="text-xl text-white">
                Base Rate: $50 per minute of music
              </li>

              <li className="text-xl text-white">
                Layering: +$25 per minute for every 2 additional layers
              </li>

              <li className="text-xl text-white">
                Part Writing: +$25 per minute if part is not notated, or does
                not have a midi
              </li>
            </ul>
          </CardContent>
        </Card>

        <a
          className="font-nippo mt-8 mb-8 text-4xl font-semibold text-gray-900 text-shadow-white hover:text-gray-700 hover:underline"
          href="/contact"
        >
          Interested in working together? Click here!
        </a>
      </div>
    </section>
  );
}
