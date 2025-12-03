"use client"
import React from "react";
import Link from "next/link";

import { ReactElement } from "react";
import { usePathname } from "next/navigation";
export default function NavLinks({ navLinks }: { navLinks: { href: string, label: string, icon: ReactElement } }) {

    /* navLinks constraction*/
    const {label , icon} = navLinks;
    /*== navLinks constraction ==*/

    /* is active Link */ 
    const pathName = usePathname();
    const isActive = pathName === navLinks.href
    /*== is active Link ==*/ 

    return (
        <Link href={navLinks.href} className={`${isActive ? `text-pink-700 ` : `text-gray-50`} flex gap-3 items-center py-4 mx-4 hover:text-pink-900 duration-300`}>
            {React.cloneElement(icon , {className: "w-5 h-5"})}
            {label}
        </Link>
    )
}