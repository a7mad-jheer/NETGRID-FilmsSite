"use client";
import Image from "next/image";
import BtnCard from "../defaults/BtnCard";
import { useState } from "react";
import Link from "next/link";
import BtnShowMore from "../defaults/BtnShowMore";

export default function MoviesList({
  movies,
}: {
  movies: {
    id: number;
    title: string;
    poster_path: string;
    overview: string;
  }[];
}) {
  const [visibleCount, setVisableCount] = useState(6);
  const [showAll, setShowAll] = useState(false);

  function toggleShow() {
    if (showAll) {
      setVisableCount(6);
      setShowAll(false);
    } else {
      setVisableCount(movies.length);
      setShowAll(true);
    }
  }

  return (
    <div className=" relative flex-1 mx-10 ">
      <h1 className="text-center font-semibold m-10  w-fit mx-auto p-5 rounded-2xl text-2xl ">
        Popular Movies
      </h1>

      <div className="w-full mt-5 gap-2 grid grid-cols-12 ">
        {movies
          .slice(0, visibleCount)
          .map(
            (movie: {
              id: number;
              title: string;
              poster_path: string;
              overview: string;
            }) => {
              return (
                <div
                  className="group prespective overflow-hidden rounded-3xl relative w-full  shadow-2xl gap-5 min-h-96 xl:col-span-3 lg:col-span-4 md:col-span-6 col-span-12 "
                  key={movie.id}
                >
                  <div className=" relative  w-full h-full transition-transform duration-500 transform-style-preserve-3d group-hover:rotate-y-180 ">
                    {/*Front */}
                    <div className="cursor-pointer absolute w-full h-full backface-hidden rounded-3xl overflow-hidden shadow-2xl  ">
                      <Image
                        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                        alt="front image"
                        className="object-cover"
                        fill
                      />
                    </div>
                    {/*=== Front ===*/}

                    {/* Back */}
                    <div className="backface-hidden inset-0 rotate-y-180 flex flex-col gap-5  items-center justify-between  w-full h-full  bg-zinc-950 text-white  p-2 rounded-3xl shadow-lg z-10">
                      <div className="h-max-16">
                        <Image
                          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                          alt="cover"
                          fill
                          className="object-cover opacity-20 "
                        />
                      </div>

                      <h3 className=" text-lg font-bold uppercase tracking-widest">
                        {movie.title}
                      </h3>
                      <p className=" flex-1 overflow-y-auto hide-scrollbar mb-2 md:text-md md:line-clamp-4 line-clamp-2 text-center h-full">
                        {movie.overview}
                      </p>
                      <Link href={`/${movie.id}`} className="cursor-pointer">
                        <BtnCard>watch now</BtnCard>
                      </Link>
                    </div>
                    {/*=== Back ===*/}
                  </div>
                </div>
              );
            }
          )}
      </div>

      <div className=" w-fit py-1 px-3 bg-amber-100/30 rounded-md my-4 mx-auto ">
        <BtnShowMore
          onClick={toggleShow}
          text={showAll ? "Show Less" : "Show More"}
        />
      </div>
    </div>
  );
}
