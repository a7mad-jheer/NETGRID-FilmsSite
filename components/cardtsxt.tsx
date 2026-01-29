"use client";

import { searchMovies } from "@/core/utils/api";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Test({
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
            page,
            pageSize,
            0,
            []
          );
          setData((prev: any) => ({
            ...prev,
            [type]: res.data,
          }));
        }
      } catch (err) {
        console.log(`error is : ${err}`);
      } finally {
        return setLoading(false);
      }
    }

    fetching();
    if (loading)
      return (
        <div className="bg-white/20 min-w-scrren min-h-screen">
          <div className=" flex items-center justify-center w-full h-full ">
            <video
              autoPlay
              loop
              muted
              width={100}
              height={100}
              className="block "
            >
              <source src="/LoadingAnimation.mp4" type="video/mp4" />
              متصفحك لا يدعم الفيديو
            </video>
          </div>
        </div>
      );
  });
  const movies = ["popular", "movie", "upcomming", "toprated"];

  return <></>;
}
