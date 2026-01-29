

export default async function Favorite () {
    const res = await fetch("/api/favorite/get",{
        method : "GET",
        credentials: "include"
    });

    const favoriteMovies = await res.json();
    console.log(favoriteMovies);
return (
    <>
    hello in favorite user
    </>
)
}