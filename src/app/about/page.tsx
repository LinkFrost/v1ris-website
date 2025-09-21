import { Card, CardContent } from "~/components/ui/card";

export default function About() {
  return (
    <div
      className="flex min-h-screen items-center justify-center"
      style={{ minHeight: "calc(100vh - 96px)" }}
    >
      <section className="responsiveContainer relative z-10 pt-4 text-xl sm:pt-0">
        <Card className="mb-4 border-slate-500 bg-gray-900/70 backdrop-blur-sm">
          <CardContent className="p-8">
            <div className="flex flex-col items-center gap-8 lg:flex-row">
              <div className="flex-shrink-0">
                <img
                  className="rounded-full border-4 border-indigo-300 transition-opacity ease-in-out"
                  width="300px"
                  src="img/headshot.png"
                  alt="v1ris headshot"
                />
              </div>

              <div className="flex-1 space-y-6 text-center lg:text-left">
                <div className="space-y-6 text-left text-slate-200">
                  <p>
                    Hi! When I’m not going by the name v1ris, my name is Anna
                    Iris Hill. I was born in Canada, and I'm currently based in
                    Rochester, New York.
                  </p>

                  <p>
                    I wear a lot of hats, but my big ones are as a
                    composer/music producer/songwriter and violinist/vocalist. I
                    also play guitar, bass, and keyboard.
                  </p>

                  <p>
                    Besides music, I’m a writer and programmer as well; I've
                    written for and made games in Unity and Gamemaker, and I
                    have experience implementing music in them both in-engine
                    and through middleware such as FMOD and Wwise.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
