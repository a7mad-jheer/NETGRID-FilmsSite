import { SearchNowPlaying } from "@/components/Dashboard/global/SearchNowPlaying";
import { Suspense } from "react";

export default function NowPlaying() {
  return (
    <Suspense fallback={<>Loading...</>}>
      <SearchNowPlaying movieType={["now_playing"]}/>
    </Suspense>
  );
}
