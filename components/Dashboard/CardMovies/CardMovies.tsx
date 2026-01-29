"use client";

import { searchMovies } from "@/core/utils/api";
import Image from "next/image";
import { useState, useEffect } from "react";
import { APIURL, IMAGE_BASE_URL, KEY } from "@/core/constants";
import { ButtonDemo } from "@/components/LandingPage/ButtonAnimations/ButtonCard";
import { TiHeartOutline } from "react-icons/ti";
import Loading from "../defaults/Loading";

export default function CardTest({
  movieType,
  pageSize,
  page,
}: {
  movieType: string[];
  pageSize: number;
  page: number;
}) {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetching() {
      try {
        for (const type of movieType) {
          const res = await searchMovies(
            `movie/${type}`,
            "",
            2,
            page,
            pageSize,
            []
          );

          setData((prev: any) => ({
            ...prev,
            [type]: res.data,
          }));
        }
      } catch (error) {
        console.log(`Error : ${error}`);
      } finally {
        setLoading(false);
      }
    }
    fetching();
  }, [movieType, pageSize, page]);

  if (loading) return <Loading />;

  if (!data) return null;

  async function fetchDataDromServer(movieID: number) {
    try {
      const movieData = {
        movieID: movieID,
      };

      const saveRes = await fetch(`/api/favorite`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(movieData),
      });

      const result = await saveRes.json();
      console.log(result);
      console.log(data);
    } catch (err) {
      console.log(`Error : ${err}`);
    }
  }

  return (
    <section className="flex-1 mx-auto my-5 ">
      <div>
        <div className="flex justify-center gap-2">
          {movieType.map((text) => (
            <h1
              key={text}
              className="  my-10 w-fit bg-red-900 font-bold text-2xl py-2 px-4 rounded-xl uppercase"
            >
              {text.replace("_", " ")}
            </h1>
          ))}
        </div>

        <div className="grid grid-cols-12 gap-4">
          {Object.keys(data).map((type) => {
            const movies = data[type].results;
            console.log(movies);
            return movies.map((movie) => {
              return (
                <div
                  key={movie.id}
                  className="relative w-full h-[430px] bg-white/20 backdrop-blur-md rounded-xl border border-white/30 overflow-hidden xl:col-span-3 lg:col-span-4 sm:col-span-6 col-span-12"
                >
                  <div className="relative w-full h-[350px]">
                    <Image
                      alt="image"
                      src={`${IMAGE_BASE_URL}${movie.poster_path}`}
                      className="cursor-pointer"
                      fill
                    />
                  </div>

                  <div className="flex flex-wrap items-center gap-1 mt-5 justify-center">
                    <ButtonDemo title="Show Now" icon={false} />
                    <ButtonDemo title="DownLoad" icon={false} />
                    <TiHeartOutline
                      size={25}
                      className="cursor-pointer "
                      color="black"
                      onClick={async () => {
                        await fetchDataDromServer(movie.id);
                      }}
                    />
                  </div>
                </div>
              );
            });
          })}
        </div>
      </div>
    </section>
  );
}
