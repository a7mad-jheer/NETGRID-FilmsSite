import { cn } from "@/lib/utils"

export default function MaxWidthWrapper ({children , className} : {children:React.ReactNode , className? : string}) {
    return (
        <section className={cn("max-w-[1375px] w-full px-5 md:px-10 lg:px-20 " + className || "" )}>
            {children}
            </section>
    )
}