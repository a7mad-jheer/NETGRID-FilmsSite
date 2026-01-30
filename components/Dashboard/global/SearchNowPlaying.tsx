"use client"
import CardMovies from "@/components/Dashboard/CardMovies/CardMovies";
import { PaginationDemo } from "@/components/Dashboard/global/Bagination";

export const SearchNowPlaying = ({
  searchParams,
  movieType,
}: {
  searchParams?: { page?: string };
  movieType :string[];
}) => {
      const page = Number(searchParams?.page) || 1;

    return (
        <>
            <>
        <CardMovies movieType={movieType} pageSize={20} page={page} />
        <PaginationDemo totalPages={20} />
      </>
        </>
    )
}



