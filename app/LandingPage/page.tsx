import { searchMovies } from "@/core/utils/api";
import { SpotlightPreview } from "@/components/Dashboard/defaults/SotlightBg";
import MaxWidthWrapper from "@/components/Dashboard/defaults/MaxWidthWrapper";
import Footer from "@/components/LandingPage/Footer/Footer";
import { Feature } from "@/components/LandingPage/Feature/Feature";
import { WelcomeCard } from "@/components/LandingPage/WelcomCard";
import { TextGenerateEffectDemo } from "@/components/Dashboard/defaults/TextEffect";
import LandingNav from "@/components/LandingPage/LandingNav";
import SimpleCard from "@/components/LandingPage/SimpleCard";

const categories = ["popular", "top_rated", "upcoming", "now_playing"];

export default async function LandingPage() {
  const resultsByCategory: Record<string, any[]> = {};
  for (const cat of categories) {
    const { data } = await searchMovies(`movie/${cat}`, "", 1, 5, 0, []);
    resultsByCategory[cat] = data.results;
  }

  return (
    <SpotlightPreview>
      <div className="relative min-w-screen m-auto flex flex-col items-center">
        <LandingNav />

        <MaxWidthWrapper className=" z-10 bg-black/2 backdrop-blur-[2px] m-auto">
          <div className="w-full flex flex-col gap-10 ">
            <div className="relative z-10 mx-auto w-full max-w-7xl ">
              <div className="mt-40 ">
                <h1 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-4xl font-bold text-transparent md:text-7xl">
                  Welcome to Net<span className="text-amber-700">Grid</span>{" "}
                  Site
                </h1>
                <p className="mx-auto mt-4 max-w-xl text-center text-base font-normal text-neutral-300 md:text-3xl">
                  <TextGenerateEffectDemo words="Sign up and start your movie journey today!" />
                </p>
              </div>
            </div>

            <WelcomeCard
              cardTitle="Occasionally, you come across the best."
              cardDescription="Start your cinematic adventure today and discover movies you will love."
              RevealCard={{
                title: "Magic Of Cinema Awaits",
                revealText: "Discover Hidden Gems!",
              }}
            />

            <div>
              <Feature />
            </div>
            <div>
              <p className="mx-auto my-4 max-w-lg text-center text-base font-normal text-neutral-300 md:text-3xl">
                <TextGenerateEffectDemo words="Discover your favorite movie" />
              </p>

              {categories.map((cat) => {
                return (
                  <div key={cat} className="relative min-w-full">
                    <h1 className=" text-2xl m-0 font-semibold uppercase">
                      {cat.replace("_", " ")}
                    </h1>
                    <div className="relative mt-10 z-11 gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                      {resultsByCategory[cat].slice(0, 4).map((movie: any) => (
                        <SimpleCard
                          key={movie.id}
                          title={movie.title}
                          imageSrc={movie.poster_path}
                        />
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </MaxWidthWrapper>

        <Footer />
      </div>
    </SpotlightPreview>
  );
}
