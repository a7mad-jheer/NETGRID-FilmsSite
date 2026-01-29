"use client";

import { ButtonDemo } from "@/components/LandingPage/ButtonAnimations/ButtonCard";
import Image from "next/image";
import { IMAGE_BASE_URL } from "@/core/constants";
import { searchMovies } from "@/core/utils/api";
import { TiHeartOutline } from "react-icons/ti";

export default function CardInfoMovies({
  typeId,
  posterPath,
  pageSize,
  movieType,
  page,
}: {
  typeId: number;
  posterPath: string;
  movieType: string;
  pageSize: number;
  page: number;
}) {
  try {
    const data = searchMovies(`movie/${movieType}`, "", 2, pageSize, page, []);
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
  return (
    <div className="">
      <div className="relative w-full h-[350px]">
        <Image
          alt="image"
          src={`${IMAGE_BASE_URL}${posterPath}`}
          className="cursor-pointer"
          fill
        />
      </div>

      <div className="flex flex-wrap items-center gap-1 mt-5 justify-center">
        <ButtonDemo title="Show Now" icon={false} />
        <ButtonDemo title="DownLoad" icon={false} />
        <TiHeartOutline size={25} className="cursor-pointer " color="black" />
      </div>
    </div>
  );
}
