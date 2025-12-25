"use client"
import Image from "next/image";
import { IoHeartSharp } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";
import { FaClipboardList } from "react-icons/fa";
import { MdRateReview } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import Favorite from "@/app/components/DashboardFolder/FavoriteUser";
import { useState } from "react";
import Watched from "@/app/components/DashboardFolder/Watched";
import Watchlist from "@/app/components/DashboardFolder/Watchlist";
import Reviews from "@/app/components/DashboardFolder/Reviews";

export default function Profile() {
  const [tab , setTab] = useState("favorite")

  return (
    <section className="w-full px-10  h-full items-center flex flex-col ">
      <div className="w-full flex justify-self-start bg-gray-900 pt-4 px-6 gap-3 shadow-[0px_0px_15px_2px_rgba(0,0,0,0.9)] ">
        <div className="w-25 h-25 relative rounded-full overflow-hidden mb-5 shadow-[0px_0px_15px_2px_rgba(0,0,0,0.9)]">
          <Image fill alt="#" src="/page2.jpg" className="" />
        </div>

        <div className="flex-1">
          <div className="w-fit flex flex-col gap-2">
            <h1 className="font-semibold text-2xl w-fit">Ahmed</h1>
            <h3 className="text-sm text-gray-400 w-fit">@ahmed123</h3>
            <p className="text-gray-400 w-fit">
              bio Movie Lover and Avid Binge Watcher
            </p>
          </div>

          <div className="mt-5 bg-gray-900 border-t w-fit">
            <div className="flex gap-2 shadow-[0px_0px_15px_2px_rgba(0,0,0,0.3)] text-sm mt-2">
              <div className="flex gap-1 border-r px-4 items-center">
                <span>180</span>
                <p>Movies Watched</p>
              </div>
              <div className="flex items-center gap-1 border-r px-4">
                <span>2</span>
                <p>Favorite</p>
              </div>
              <div className="flex gap-1  px-4 items-center">
                <span>15</span>
                <p>Reviews</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" bg-gradient-to-t from-gray-900 via-gray-850 to-gray-950 shadow-[0px_0px_15px_2px_rgba(0,0,0,0.9)] my-5 w-full py-4 px-5 gradian">
        <ul className="flex gap-2 ">
          <li className="flex gap-1 border-r px-2 cursor-pointer items-center">
            <IoHeartSharp size={25} />
            <h2 onClick={() => setTab("Favorites")}>Favorites</h2>
          </li>
          <li className="flex gap-1 border-r px-2 cursor-pointer items-center">
            <FaYoutube size={25} />
            <h2 onClick={() => setTab("Watched")}>Watched</h2>
          </li>
          <li className="flex gap-1 border-r px-2 cursor-pointer items-center">
            <FaClipboardList size={25} />
            <h2 onClick={() => setTab("Watchlist")}>Watchlist</h2>
          </li>
          <li className="flex gap-1 border-r px-2 cursor-pointer items-center">
            <MdRateReview size={25} />
            <h2 onClick={() => setTab("Reviews")}>Reviews</h2>
          </li>
        </ul>
      </div>

      <div className="flex gap-2 w-full bg-gray-800">
        <div className=" w-full">
          <div className="flex items-center gap-1 border py-2 px-3 bg-gray-900 ">
            <FaStar size={25} />
            <h3>{tab}</h3>
          </div>

          <div className=" w-full gap-3 p-3 grid grid-cols-12 ">
            {tab === "Favorites" && <Favorite  />}
            {tab === "Watched" && <Watched  />}
            {tab === "Watchlist" && <Watchlist  />}
            {tab === "Reviews" && <Reviews  />}
            
          </div>
        </div>
      </div>
    </section>
  );
}
