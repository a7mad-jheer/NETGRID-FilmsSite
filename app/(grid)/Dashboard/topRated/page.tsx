import CardMovies from "@/components/Dashboard/CardMovies/CardMovies";
import { PaginationDemo } from "@/components/Dashboard/defaults/Bagination";

export default function TopRated({
  searchParams,
}: {
  searchParams?: { page?: string };
}) {
  const page = Number(searchParams?.page) || 1;

  return (
    <>
    <CardMovies  movieType ={["top_rated"]} pageSize={20} page={page}/>
      <PaginationDemo totalPages={20} />
    </>
  );
}
