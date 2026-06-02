import { Card, CardContent } from "~/components/ui/card";

export default function About() {
  return (
    <div
      className="flex min-h-screen items-center justify-center"
      style={{ minHeight: "calc(100vh - 96px)" }}
    >
      <section className="responsiveContainer relative z-10 pt-4 text-xl sm:pt-0">
        <Card className="motion-preset-slide-up-md motion-duration-1000 motion-preset-fade-lg mb-4 border-slate-500 bg-gray-900/70 backdrop-blur-sm">
          <CardContent className="p-8">
            <div className="flex flex-col items-center gap-8 lg:flex-row">
              <div className="flex-shrink-0">
                <img
                  className="motion-preset-slide-right-md motion-duration-1200 rounded-full border-4 border-indigo-300 transition-opacity"
                  width="300px"
                  src="img/headshot.png"
                  alt="v1ris headshot"
                />
              </div>

              <div className="flex-1 space-y-6 text-center lg:text-left">
                <div className="space-y-6 text-left text-slate-200">
                  <p>
                    Anna Iris Hill, also known as v1ris, is a violinist and composer currently based in Rochester, New York.
                  </p>
                  <p>
                    She is writing the soundtrack for TETHERPUNK, a 2D physics-driven action-adventure game, and was an arranger for Chicory: A Musical Tale, the 
                    official arrangement album of Chicory: A Colorful Tale made in collaboration with Lena Raine, Wishes Unlimited and Resonant Union. 
                  </p>
                  <p>
                    Her violin performances have been featured in the works of peak divide (UNBEATABLE), Alohaii, DM DOKURO, vally.exe/SoundCirclet, 
                    and in arrangements part of Chicory: A Musical Tale. She is also the violinist for the band “fabula nova” and has performed live 
                    with the Attack on Titan: Beyond the Walls World Tour orchestra. 
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
