import { Play } from "lucide-react";
import Image from "next/image";
import { Button } from "~/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "~/components/ui/card";

export default async function Home() {
  return (
    <div className="relative z-10">
      <section className="pt-8 pb-8">
        <div className="responsiveContainer flex flex-col items-center justify-center gap-4">
          <div className="bg-gradient-to-r from-[#87c7ff] to-[#D4CAF2] bg-clip-text text-transparent">
            <p className="font-crimson-italic text-center text-2xl font-semibold sm:text-5xl">
              Composer, Music Producer & Violinist
            </p>
          </div>

          <iframe
            src="https://www.youtube.com/embed/KINzZZeWOqw?si=O5gUmwyltRrVlegA"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="h-[200px] w-full max-w-[853px] md:h-[480px]"
          />
        </div>
      </section>

      <section className="bg-gray-900/90 py-8">
        <div className="responsiveContainer flex flex-col items-center gap-4 sm:items-start lg:flex-row lg:gap-24 lg:py-12">
          <Image
            className="rounded-full border-4 border-indigo-300 transition-opacity ease-in-out"
            height={300}
            width={300}
            src="/img/headshot.png"
            alt="v1ris headshot"
          />

          <div className="flex flex-col justify-normal gap-8 lg:justify-between">
            <p className="font-telma text-2xl font-semibold text-white sm:text-5xl">
              Storytelling Through Sound
            </p>

            <p className="text-xl text-white">
              Hi, I'm{" "}
              <span className="font-telma text-shadow text-4xl font-semibold text-indigo-300">
                v1ris
              </span>
              , a composer writing interactive music for narrative-driven games.
              I use my multi-instrumental and electronic background to write a
              wide variety of memorable music.
            </p>

            <a
              className="text-shadow text-2xl font-semibold text-indigo-300 hover:underline"
              href="/contact"
            >
              Let's work together!
            </a>
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="responsiveContainer flex flex-col gap-8">
          <Card className="mx-auto overflow-hidden border-slate-500 bg-gray-900/90 backdrop-blur-sm">
            <p className="font-crimson text-shadow -mb-8 ml-8 text-4xl font-semibold text-white">
              New Releases
            </p>

            <div className="md:flex">
              <div className="md:w-1/2">
                <div className="relative aspect-square p-8">
                  <img
                    src="/img/voice-of-reason-single-cover.png"
                    alt="Voice of Reason artwork"
                    className="object-cover"
                  />

                  <div className="absolute inset-0"></div>
                </div>
              </div>

              <div className="flex flex-col justify-center px-8 md:w-1/2">
                <CardHeader className="mb-6 p-0">
                  <CardTitle className="font-telma text-beige text-4xl font-bold">
                    voice of reason
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-6 p-0">
                  <p className="text-beige">
                    a single from the forthcoming album "digital connection"
                  </p>

                  <div className="flex flex-col gap-3 sm:flex-row">
                    <Button className="bg-beige flex items-center gap-2 text-black hover:bg-orange-200">
                      <Play className="font-nippo h-4 w-4" />
                      <a href="https://links.v1ris.com/" target="_blank">
                        Listen Now
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
