"use client";
import Image from "next/image";
import HomeIcon from "@mui/icons-material/Home";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import LocalMoviesRoundedIcon from "@mui/icons-material/LocalMoviesRounded";
import MovieRoundedIcon from "@mui/icons-material/MovieRounded";
import GradeRoundedIcon from "@mui/icons-material/GradeRounded";
import { FaClock, FaFilm, FaHome } from "react-icons/fa";
import { MdLocalMovies, MdNewReleases } from "react-icons/md";
import { CiSearch, CiStar } from "react-icons/ci";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import { GrFavorite } from "react-icons/gr";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import Link from "next/link";

export default function SideMenu() {
  const dashboardLinks = [
    {
      label: "Home",
      href: "/Dashboard",
      icon: (
        <FaHome className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Movies",
      href: "/Dashboard/movies",
      icon: (
        <MdLocalMovies className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    // {
    //   label: "Series",
    //   href: "/Dashboard/series",
    //   icon: (
    //     <FaFilm className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
    //   ),
    // },
    {
      label: "Top Rated",
      href: "/Dashboard/topRated",
      icon: (
        <CiStar className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Now Playing",
      href: "/Dashboard/nowPlaying",
      icon: (
        <MdNewReleases className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Coming Soon",
      href: "/Dashboard/commingSoon",
      icon: (
        <FaClock className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Search",
      href: "/Dashboard/search",
      icon: (
        <CiSearch className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
  ];

  const userLinks = [
    {
      label: "Profile",
      href: "/Dashboard/profile",
      icon: (
        <AccountCircleRoundedIcon className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Favorites",
      href: "/Dashboard/favorites",
      icon: (
        <GrFavorite className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Setting",
      href: "/Dashboard/setting",
      icon: (
        <SettingsRoundedIcon className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    // {
    //   label: "LogOut",
    //   href: "/Dashboard/logout",
    //   icon: (
    //     <LogoutRoundedIcon className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
    //   ),
    // },
  ];

  return (
    <section className={` group w-16 hover:w-56 transition-all duration-100 bg-gray-950 text-amber-50 h-screen sticky top-0`}>
      {/* Holder صغير + overflow-hidden */}
      <div
        className="  h-full min-w-full
            bg-gray-950 text-amber-50
            transform transition-all duration-300
            group-hover:w-56 "
      >
        {/* Logo */}
        <div className="flex items-center text-2xl text-neutral-200 gap-2 py-5">
          <div className="w-10 h-10 relative m-auto">
            <Image
              fill
              className="bg-cover"
              alt="logo"
              src="/loginBackground1.jpg"
            />
          </div>
          <h1 className="hidden group-hover:block text-2xl font-semibold mx-auto">
            Net<span className="text-amber-600">Grid</span>
          </h1>
        </div>

        <hr />

        {/* Links */}
        <div className="px-3 py-1 my-2 hover:overflow-y-auto max-h-[calc(100vh-100px)] ">
          <div className="flex items-center gap-1 ">
            <GridViewRoundedIcon color="success" />
            <h1 className="hidden group-hover:block">Dashboard</h1>
          </div>

          <hr className="my-5" />

          <ul className="flex flex-col gap-10">
            {dashboardLinks.map((links) => {
              return (
                <li
                  key={links.label}
                  className=""
                >
                  <Link className="flex items-center gap-3 cursor-pointer" href={links.href}>
                    <span>{links.icon}</span>
                    <span className="hidden group-hover:block">
                      {links.label}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>

          <hr className="my-5" />

          <div className="flex items-center gap-1">
            <PeopleAltRoundedIcon color="primary" />
            <h1 className="hidden group-hover:block">User</h1>
          </div>

          <hr className="my-5" />

          <ul className="flex flex-col gap-10">
            {userLinks.map((links) => {
              return (
                <li
                  key={links.label}
                  className="flex items-center gap-3 cursor-pointer"
                >
                  <Link className="flex items-center gap-3 cursor-pointer" href={links.href}>
                  <span>{links.icon}</span>
                  <span className="hidden group-hover:block">
                    {links.label}
                  </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

/*
const links = [
        { label: "Home", href: "/", icon: <FaHome className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200"/> },
            { label: "Movies", href: "/movies", icon: <MdLocalMovies className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200"/> },
            { label: "Series", href: "/series", icon: <FaFilm className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200"/> },
            { label: "Top Rated", href: "/top-rated", icon: <CiStar className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200"/> },
            { label: "Genres", href: "/genres", icon: <MdCategory className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200"/> },
            { label: "New Releases", href: "/new-releases", icon: <MdNewReleases className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200"/> },
            { label: "Coming Soon", href: "/coming-soon", icon: <FaClock className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200"/> },
            { label: "Favorites", href: "/favorites", icon: <GrFavorite className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200"/> },
            { label: "Search", href: "/search", icon: <CiSearch className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200"/> },
    ]
*/
