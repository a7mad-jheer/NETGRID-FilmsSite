import CardMovies from "@/app/components/CardMovies/CardMovies";
import { PaginationDemo } from "@/app/components/defaults/Bagination";

export default function NowPlaying({ searchParams }: { searchParams?: { page?: string } }) {
     const page = Number(searchParams?.page) || 1;
    return (
        <>
            <>
                 <CardMovies moviesType="now_playing" pageSize={20} page={page} />
                 <PaginationDemo totalPages={20} />
               </>
        </>
    )
}