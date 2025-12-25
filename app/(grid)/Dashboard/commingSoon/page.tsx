import CardMovies from "@/app/components/CardMovies/CardMovies";
import { PaginationDemo } from "@/app/components/defaults/Bagination";

export default function CommingSoon({ searchParams }: { searchParams?: { page?: string } }) {
  const page = Number(searchParams?.page) || 1; 

  return (
    <>
      <CardMovies moviesType="upcoming" pageSize={20} page={page} />
      {/* <PaginationDemo totalPages={20} /> */}
    </>
  );
}