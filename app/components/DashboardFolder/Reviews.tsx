import Image from "next/image";
import { CiStar } from "react-icons/ci";
import { AiFillLike } from "react-icons/ai";

export default function Reviews () {
    return (
       <div className="col-span-12 flex  bg-gray-900 ">
        <div className="relative w-xs h-full">
            <Image 
            src="/page2.jpg"
            alt=""
            fill
            className="object-cover"
            />
        </div>

        <div className="flex flex-col p-2 gap-2"> 
            <div className="flex gap-2 items-center">
                <h1>The Batman</h1>
                <span className="text-gray-400 text-[12px]">7 months ago</span>
            </div>

            <div className="flex ">
                <CiStar size={20}/>
                <CiStar size={20}/>
                <CiStar size={20}/>
                <CiStar size={20}/>
                <CiStar size={20}/>
            </div>

            <div className="text-gray-200 text-[12px]">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores quos iure harum odio quia sed atque tempore similique minus doloremque at aliquam, optio quam necessitatibus voluptatum, nesciunt excepturi aut unde?
            </div>

            <div className="flex items-center justify-end gap-0.5">
                <AiFillLike size={15}/>
                
                <span className="text-[12px]">
                    <span>18</span>
                    Like
                    </span>
            </div>
        </div>
       </div>
    )
}