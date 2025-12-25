"use client";

import { APIURL, KEY } from "@/app/constants";
import { TiHeartOutline } from "react-icons/ti";


export default function MoveFavoriteIcon({movieId} : {movieId : number}) {

    const fetchDataDromServer = async () => {
    try {
        const res =await fetch(`${APIURL}movie/${movieId}?api_key=${KEY}`)
        const movieData = await res.json();
        console.log(movieData)
    }catch(err) {
        console.error("Failed to fetch movie:", err);
    }
}



  return (
    <TiHeartOutline
      size={25}
      className="cursor-pointer "
      color="black"
      onClick={() => {
        fetchDataDromServer();
      }}
    />
  );
}
