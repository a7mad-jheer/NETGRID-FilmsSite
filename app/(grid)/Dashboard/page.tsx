import { searchMovies } from "@/core/utils/api";
import Hero from "@/components/Dashboard/Hero/Hero";
import MoviesList from "@/components/Dashboard/MoviesList/MoviesList";
import { NavBar } from "@/components/Dashboard/NavBar";

export default async function Dashboard() {
  const resultPop = await searchMovies("movie/popular", "", 1, 20, 0, []);
  const popular = resultPop.data.results;
  return (
    <div className=" w-full mx-auto">
      <NavBar />
      <Hero />
      <MoviesList movies={popular} />
    </div>
  );
}
