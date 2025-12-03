import Link from "next/link"
export default function Logo () {
    return (
        <Link href = "/" className="text-lg md:text-xl flex justify-center w-full ">
            <h1 className="text-amber-500 font-semibold mb-10">NetGrid</h1>
        </Link>
    )
} 