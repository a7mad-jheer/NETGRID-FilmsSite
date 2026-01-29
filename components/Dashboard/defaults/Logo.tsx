import Link from "next/link"
export default function Logo ({className , href} : {className ?: string , href : string}) {
    return (
        <Link href = {href} className="text-2xl md:text-xl   ">
            <h1 className={`${className || ""} text-amber-50 `}>Net<span className="text-amber-600">Grid</span></h1>
        </Link>
    )
} 