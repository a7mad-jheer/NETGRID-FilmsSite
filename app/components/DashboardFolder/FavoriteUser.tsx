import Image from "next/image";
import { FaStar } from "react-icons/fa";

export default function Favorite() {
    return (
        <div className="w-full  col-span-12 xl:col-span-3 md:col-span-4 sm:col-span-6 bg-gray-950 h-96 rounded-xl shadow-inner overflow-hidden ">
                      <div className="relative w-full h-[calc(100%-40px)] bg-red-300 ">
                        <Image alt="" src="/page.jpg" fill />
                      </div>
        
                      <div className="flex justify-center items-center gap-2 my-2">
                        <FaStar size={14} />
                        <h3 className="text-sm">9.0</h3>
                      </div>
                    </div>
    )
}