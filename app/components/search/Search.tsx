import { CiSearch } from "react-icons/ci"
export default function Search () {
    return (
        <div className="group bg-black/30 w-full md:w-[40%] overflow-hidden rounded-md flex gap-2 items-center ">
            <input className="bg-transparent text-base text-gray-50 border-none outline-none active:outline-none ring-0 placeholder:text-gray-400 py-2 px-4 flex-1"/>
            <CiSearch className="mx-5 w-5 h-5 cursor-pointer group-hover:text-cyan-800 duration-150"/>
        </div>
    )
}