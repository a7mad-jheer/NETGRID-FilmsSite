import { searchMovies } from "@/app/api/api";
import { ButtonDemo } from "@/app/components/ButtonAnimations/ButtonCard";
import { IMAGE_BASE_URL } from "@/app/constants";
import Image from "next/image";
import { TiHeartOutline } from "react-icons/ti";


const TYPE_MOVIES = ["popular", "top_rated", "upcoming", "now_playing"];

export default async function Movies() {
  const moviesType = await Promise.all(
    TYPE_MOVIES.map(async (type) => {
      const data = await searchMovies(`movie/${type}`, "", 2, 8, 0, []);
      return {
        type,
        data,
      };
    })
  );

  const AllType = [
    {type : moviesType[0].data.data.results , movies : "popular"},
    {type : moviesType[0].data.data.results , movies : "top Rated"},
    {type : moviesType[0].data.data.results , movies : "up Coming"},
    {type : moviesType[0].data.data.results , movies : "now Playing"},
  ]

  return (
    <section className="w-full max-w-[1275px] mx-auto p-5  text-center flex-1">
      {AllType.map((items, index) => {
        return (
          <div key={index}>
            <h1 className="mx-auto my-10 w-fit bg-red-900 font-bold text-2xl py-2 px-4 rounded-xl uppercase">
              {items.movies.replace("_", "")}
            </h1>
            <div className="grid grid-cols-12 gap-4">
              {items.type.map((type) => {
                return (
                  <div
                    key={type.id}
                    className="relative w-full h-[410px] bg-gray-900 rounded-xl overflow-hidden backdrop-blur-2xl xl:col-span-3 lg:col-span-4 sm:col-span-6 col-span-12 "
                  >
                    <div className="relative w-full h-[350px]">
                      <Image
                        alt="image"
                        src={`${IMAGE_BASE_URL}${type.poster_path}`}
                        className="cursor-pointer"
                        fill
                      />
                    </div>

                    <div className="flex items-center gap-5 mt-2 justify-center">
                      <ButtonDemo  title = "Show Now" icon = {false} />
                      <ButtonDemo title = "DownLoad" icon = {false} />
                      
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </section>
  );
}
