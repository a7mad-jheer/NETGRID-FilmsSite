import CardMovies from "@/components/Dashboard/CardMovies/CardMovies";


export default function CommingSoon({
  searchParams,
}: {
  searchParams?: { page?: string };
}) {
  const page = Number(searchParams?.page) || 1;

  return (
    <>
      <CardMovies movieType={["upcoming"]} pageSize={20} page={page} />
      {/* <PaginationDemo totalPages={20} /> */}
    </>
  );
}
