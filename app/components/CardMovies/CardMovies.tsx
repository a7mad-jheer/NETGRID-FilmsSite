
import { searchMovies } from "@/app/api/api";
import { APIURL, IMAGE_BASE_URL, KEY } from "@/app/constants";
import Image from "next/image";
import { TiHeartOutline } from "react-icons/ti";
import { ButtonDemo } from "../ButtonAnimations/ButtonCard";
import MoveFavoriteIcon from "../defaults/MoveFavoriteIcon";


export default async function CardMovies({
  moviesType,
  pageSize,
  page,
}: {
  moviesType: string;
  pageSize: number;
  page: number;
}) {
  const data = await searchMovies(
    `movie/${moviesType}`,
    "",
    2,
    pageSize,
    page,
    []
  );
  
  const typeData = data.data.results;
  console.log(data.data.results);

  // async function fetchDataDromServer ({movieId } : {movieId : any}) {
  //   const res =await fetch(`${APIURL}movie/${movieId}?api_key=${KEY}`);
  //   const data = await res.json();
  //   console.log(data)
  // }

  return (
    <section className="flex-1 mx-auto my-5 ">
      <div>
        <h1 className="mx-auto my-10 w-fit bg-red-900 font-bold text-2xl py-2 px-4 rounded-xl uppercase">
          {moviesType.replace("_", " ")}
        </h1>
        <div className="grid grid-cols-12 gap-4">
          {typeData.map((type : any) => {
            return (
              <div
                key={type.id}
                className="relative w-full h-[430px] bg-white/20 backdrop-blur-md rounded-xl border border-white/30 overflow-hidden xl:col-span-3 lg:col-span-4 sm:col-span-6 col-span-12"
              >
                <div className="relative w-full h-[350px]">
                  <Image
                    alt="image"
                    src={`${IMAGE_BASE_URL}${type.poster_path}`}
                    className="cursor-pointer"
                    fill
                  />
                </div>

                <div className="flex flex-wrap items-center gap-1 mt-5 justify-center">
                  <ButtonDemo title="Show Now" icon={false} />
                  <ButtonDemo title="DownLoad" icon={false} />
                  <MoveFavoriteIcon movieId = {type.id} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
