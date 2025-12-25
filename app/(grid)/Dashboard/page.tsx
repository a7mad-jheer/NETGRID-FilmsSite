import { searchMovies } from "@/app/api/api";
import Hero from "@/app/components/Hero/Hero";
import MoviesList from "@/app/components/MoviesList/MoviesList";
import { NavBar } from "@/app/components/Nav/NavBar";


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
