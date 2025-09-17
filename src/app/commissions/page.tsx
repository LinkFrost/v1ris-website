import { Card, CardContent } from "~/components/ui/card";

export default function Commissions() {
  return (
    <section className="responsiveContainer relative z-10 flex w-full flex-col gap-12 pt-4">
      <div className="flex flex-col gap-4">
        <h1 className="font-nippo text-5xl font-semibold text-gray-900 text-shadow-white">
          Music Composition
        </h1>

        <Card className="border-slate-500 bg-gray-900/80 backdrop-blur-sm">
          <CardContent className="flex flex-col gap-1 px-8">
            <p className="text-azaret text-3xl text-white">
              Original Music (Song, background music, etc.)
            </p>

            <p className="text-azaret italic text-xl text-white">
              Starting at $100 per minute of music
            </p>
  
          </CardContent>

          <CardContent className="flex flex-col gap-4 px-8">
          <iframe
            src="https://www.youtube.com/embed/KINzZZeWOqw?si=O5gUmwyltRrVlegA"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="h-[200px] w-full md:h-[480px]"
          />        
            <p className="text-xl text-white">
              When writing for games, my rate includes implementation through
              FMOD or Wwise if desired. I am available for multiple tracks or a
              full game scoring project.
            </p>

            <p className="text-xl text-white">
              My base rate is flexible, so please feel free to reach out
              directly, and we can work out the specifics!{" "}
            </p>
            <a
              className="font-azaret italic mt-8 mb-8 text-3xl font-semibold underline text-blue-200 text-shadow-black hover:text-blue-400"
              href="/contact"
            >
              Click here to contact!
            </a>
          </CardContent>
        </Card>
        <Card className="border-slate-500 bg-gray-900/80 backdrop-blur-sm">
          <CardContent className="flex flex-col gap-1 px-8">
            <p className="text-azaret text-3xl text-white">
              Remix/Arrangement
            </p>

            <p className="text-azaret italic text-xl text-white">
              Starting at $75 per minute of music
            </p>
          </CardContent>

          <CardContent className="flex flex-col gap-4 px-8">
          <iframe
            src="https://www.youtube.com/embed/nxEUiY9p5mw?si=bs7ltHFfMihkpxa-"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="h-[200px] w-full md:h-[480px]"
          />                      
            <a
              className="font-azaret italic mt-8 mb-8 text-3xl font-semibold underline text-blue-200 text-shadow-black hover:text-blue-400"
              href="/contact"
            >
              Click here to contact!
            </a>
          </CardContent>
        </Card>        
      </div>

      <div className="flex flex-col gap-4">
        <h1 className="font-nippo text-5xl font-semibold text-gray-900 text-shadow-white">
          Violin Performance
        </h1>

        <Card className="border-slate-500 bg-gray-900/80 backdrop-blur-sm">
          <CardContent className="flex flex-col gap-1 px-8">
            <p className="text-azaret text-3xl text-white">
              Studio Violin Recording
            </p>

            <p className="text-azaret italic text-xl text-white">
              Starting at $50 per minute of music
            </p>
            <ul className="ml-8 list-disc">

              <li className="text-l text-white">
                Layering: +$25 per minute for every 2 additional layers
              </li>

              <li className="text-l text-white">
                Part Writing: +$25 per minute if part is not notated, or does
                not have a midi mockup
              </li>
            </ul>  
          </CardContent>
          <iframe
            src="https://www.youtube.com/embed/videoseries?si=Tp6w_7C29wLacd5x&amp;list=PL9jHkthNBychiTvVQV97eKixjSWfCkLpp"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="h-[200px] w-full md:h-[480px]"
          />    
          <CardContent className="flex flex-col gap-4 px-8">         
            <p className="text-xl text-white">
              I’d love to play violin on your project, whatever score or song it
              may be!
            </p>
            <a
              className="font-azaret italic text-3xl font-semibold underline text-blue-200 text-shadow-black hover:text-blue-400"
              href="/contact"
            >
              Click here to contact!
            </a>
            <p className=""></p>
            <p className=""></p>
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
          </CardContent>    
        </Card>



    
      </div>
    </section>
  );
}
