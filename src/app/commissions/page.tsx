import { Card, CardContent } from "~/components/ui/card";

export default function Commissions() {
  return (
    <section className="responsiveContainer relative z-10 mb-8 flex w-full flex-col gap-12 pt-4">
      <div className="flex flex-col gap-4">
        <Card className="border-slate-500 bg-gray-900/65 backdrop-blur-sm">
          <CardContent className="flex flex-col gap-4 px-8">
            <p className="text-azaret text-3xl text-white">
              Original Music{" "}
              <span className="text-2xl">(Song, background music, etc.)</span>
            </p>

            <p className="text-azaret text-xl text-white italic">
              Starting at $100 per minute of music
            </p>

            <ul className="mb-4 ml-8 list-disc">
              <li className="text-l text-white">
                Live Instrumentalist: +$50-100 per player (upon request only)
              </li>
            </ul>

            <div className="mb-4 flex flex-col items-center gap-8 md:flex-row">
              <iframe
                src="https://www.youtube.com/embed/t_cWwn1Rwww?si=U9JKXABAtMoj_OJI"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="aspect-video w-full max-w-[544px]"
              />

              <div className="flex flex-col gap-4">
                <p className="text-lg text-white sm:text-xl">
                  Time taken to deliver will be around 2-4 weeks. Rewrite
                  requests are accepted!
                </p>

                <p className="text-lg text-white sm:text-xl">
                  When writing for games, my rate includes implementation
                  through FMOD or Wwise if desired. I am available for multiple
                  tracks or a full game scoring project.
                </p>

                <p className="text-lg text-white sm:text-xl">
                  <span className="font-azaret font-semibold text-white italic">
                    My base rate is flexible,
                  </span>{" "}
                  so please feel free to reach out directly, and we can work out
                  the specifics!
                </p>
              </div>
            </div>

            <a
              className="font-azaret mt-4 text-lg font-semibold text-blue-200 italic underline text-shadow-black hover:text-blue-400 sm:text-3xl"
              href="/contact"
            >
              Click here to contact!
            </a>
          </CardContent>
        </Card>

        <Card className="border-slate-500 bg-gray-900/65 backdrop-blur-sm">
          <CardContent className="flex flex-col gap-4 px-8">
            <p className="text-azaret text-3xl text-white">Remix/Arrangement</p>

            <p className="text-azaret text-xl text-white italic">
              Starting at $75 per minute of music
            </p>

            <ul className="mb-4 ml-8 list-disc">
              <li className="text-l text-white">
                Live Instrumentalist: +$50-100 per player (upon request only)
              </li>
            </ul>

            <div className="mb-4 flex flex-col items-center gap-8 md:flex-row">
              <iframe
                src="https://www.youtube.com/embed/nxEUiY9p5mw?si=bs7ltHFfMihkpxa-"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="aspect-video w-full max-w-[544px]"
              />

              <div className="flex flex-col gap-4">
                <p className="text-lg text-white sm:text-xl">
                  One remix of an existing song of your choice!
                </p>

                <p className="text-lg text-white sm:text-xl">
                  One remix of an existing song of your choice!
                </p>

                <p className="text-lg text-white sm:text-xl">
                  One remix of an existing song of your choice!
                </p>
              </div>
            </div>

            <a
              className="font-azaret mt-4 text-lg font-semibold text-blue-200 italic underline text-shadow-black hover:text-blue-400 sm:text-3xl"
              href="/contact"
            >
              Click here to contact!
            </a>
          </CardContent>
        </Card>

        <Card className="border-slate-500 bg-gray-900/65 backdrop-blur-sm">
          <CardContent className="flex flex-col gap-4 px-4 sm:px-8">
            <p className="text-azaret text-2xl text-white sm:text-3xl">
              Studio Violin Recording
            </p>

            <p className="text-azaret -mb-2 text-xl text-white italic">
              Starting at $50 per minute of music
            </p>

            <ul className="mb-4 ml-8 list-disc">
              <li className="text-l text-white">
                Layering: +$25 per minute for every 2 additional layers
              </li>

              <li className="text-l text-white">
                Part Writing: +$25 per minute if part is not written at all (no
                score or midi mockup)
              </li>
            </ul>

            <div className="flex flex-col items-center gap-8 md:flex-row">
              <iframe
                src="https://www.youtube.com/embed/videoseries?si=Tp6w_7C29wLacd5x&amp;list=PL9jHkthNBychiTvVQV97eKixjSWfCkLpp"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="aspect-video w-full max-w-[544px]"
              />

              <div className="flex flex-col gap-4">
                <p className="text-xl text-white">
                  I’d love to play violin on your project, whatever score or
                  song it may be!
                </p>

                <p className="text-white">
                  Performed as a part of these orchestras:
                </p>

                <div className="flex flex-col gap-8 sm:flex-row">
                  <img
                    src="img/aot.jpg"
                    width="250px"
                    alt="Attack on Titan - Beyond The Walls World Tour"
                    className="text-shadow-black"
                  />
                  <img
                    src="img/hso.png"
                    width="250px"
                    alt="Hartford Symphony Orchestra"
                    className="text-shadow-black"
                  />
                  <p className=""></p>
                </div>
              </div>
            </div>

            <a
              className="font-azaret mt-4 text-lg font-semibold text-blue-200 italic underline text-shadow-black hover:text-blue-400 sm:text-3xl"
              href="/contact"
            >
              Click here to contact!
            </a>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
