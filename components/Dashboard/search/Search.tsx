import { CiSearch } from "react-icons/ci"
export default function Search () {
    return (
        <div className="group bg-gray-800 w-full overflow-hidden rounded-md flex gap-2 items-center mx-5">
            <input  className="bg-transparent text-base text-gray-50 border-none outline-none active:outline-none ring-0 placeholder:text-gray-400 py-2 px-4 flex-1 bg-red-400"/>
            <CiSearch className="mx-5 w-5 h-5 cursor-pointer group-hover:text-cyan-800 duration-150"/>
        </div>
    )
}