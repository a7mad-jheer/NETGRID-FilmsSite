import { SearchNowPlaying } from "@/components/Dashboard/global/SearchNowPlaying";
import { Suspense } from "react";

export default function CommingSoon() {
  return (
    <Suspense fallback={<>Loading...</>}>
      <SearchNowPlaying movieType={["upcoming"]}/>
    </Suspense>
  );
}