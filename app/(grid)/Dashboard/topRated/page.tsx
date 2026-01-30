import { SearchNowPlaying } from "@/components/Dashboard/global/SearchNowPlaying";
import { Suspense } from "react";

export default function TopRated() {
  return (
    <Suspense fallback={<>Loading...</>}>
      <SearchNowPlaying movieType={["top_rated"]}/>
    </Suspense>
  );
}