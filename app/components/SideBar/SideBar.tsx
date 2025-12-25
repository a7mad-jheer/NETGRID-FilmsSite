
import { FaHome } from "react-icons/fa";
import { MdLocalMovies } from "react-icons/md";
import { FaFilm } from "react-icons/fa6";
import { CiStar } from "react-icons/ci";
import { MdCategory } from "react-icons/md";
import { MdNewReleases } from "react-icons/md";
import { FaClock } from "react-icons/fa6";
import { GrFavorite } from "react-icons/gr";
import { CiSearch } from "react-icons/ci";
import Logo from "../defaults/Logo";



const NAV_LINKS = [
    { label: "Home", href: "/", icon: <FaHome /> },
    { label: "Movies", href: "/Movies", icon: <MdLocalMovies /> },
    { label: "Series", href: "/series", icon: <FaFilm /> },
    { label: "Top Rated", href: "/top-rated", icon: <CiStar /> },
    { label: "Genres", href: "/genres", icon: <MdCategory /> },
    { label: "New Releases", href: "/new-releases", icon: <MdNewReleases /> },
    { label: "Coming Soon", href: "/coming-soon", icon: <FaClock /> },
    { label: "Favorites", href: "/favorites", icon: <GrFavorite /> },
    { label: "Search", href: "/search", icon: <CiSearch /> },
]

export default function SideBar() {
    return (
        <>
            <div className="hidden lg:col-span-2  lg:block bg-black/30 h-secreen">
                <div className="py-5 px-10 flex flex-col items-start sticky top-0  ">
                    <Logo href = "#"/>
                {NAV_LINKS.map((links) => <SidebarDemo key={links.label} navLinks={links}/>)}
                </div>
            </div>
        </>
    )
}
