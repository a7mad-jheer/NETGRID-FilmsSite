import { ArrowUpIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
export function ButtonDemo({title , icon} : {title : string , icon ?: boolean}) {
  return (
    <div className="flex flex-wrap items-center gap-2 md:flex-row">
      <Button className="cursor-pointer" variant="outline">{title}</Button>
      <Button className={`${icon ? `block` : `hidden`}`} variant="outline" size="icon" aria-label="Submit">
        <ArrowUpIcon />
      </Button>
    </div>
  )
}