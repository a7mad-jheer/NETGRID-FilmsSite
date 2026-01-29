
import CardMovies from "@/components/Dashboard/CardMovies/CardMovies";
import { PaginationDemo } from "@/components/Dashboard/defaults/Bagination";

export default function NowPlaying({
  searchParams,
}: {
  searchParams?: { page?: string };
}) {
  const page = Number(searchParams?.page) || 1;
  return (
    <>
      <>
        <CardMovies movieType={["now_playing"]} pageSize={20} page={page} />
        <PaginationDemo totalPages={20} />
      </>
    </>
  );
}
