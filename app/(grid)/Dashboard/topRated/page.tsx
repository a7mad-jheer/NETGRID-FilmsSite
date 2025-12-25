import CardMovies from "@/app/components/CardMovies/CardMovies";
import { PaginationDemo } from "@/app/components/defaults/Bagination";

export default function TopRated({ searchParams }: { searchParams?: { page?: string } }) {
  const page = Number(searchParams?.page) || 1; 

  return (
    <>
      <CardMovies moviesType="top_rated" pageSize={20} page={page} />
      <PaginationDemo totalPages={20} />
    </>
  );
}
