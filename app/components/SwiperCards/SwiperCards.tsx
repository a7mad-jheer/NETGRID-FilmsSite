"use client";

// Import Swiper styles
import "swiper/css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { useEffect, useState } from "react";
import swiperType from "swiper";

export default function SwiperCards({
  items,
  paginationImage,
  className,
}: {
  items: { cards: React.ReactNode; src: string }[];
  paginationImage?: boolean;
  className?: string;
}) {
  const [swiper, setSwiper] = useState<swiperType | null>();
  const [progress, setProgress] = useState(0);


  useEffect(() => {
    const t = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 100 : prev + 1.6));
    }, 50);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    swiper?.on("slideChange", () => {
      setProgress(0);
    });
  });

  console.log(progress);
  return (
    <div className="">
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 3000, // كل كم ميلي ثانية يتغير السلايد
          disableOnInteraction: false, // يكمل autoplay حتى بعد ما المستخدم يحركه
        }}
        loop={true}
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        className={` w-full ${className || "h-96"}`}
        onSwiper={(instance) => setSwiper(instance)}
      >
        {items.map((item, i) => (
          <SwiperSlide key={i} className="relative ">
            <div>{item.cards}</div>
          </SwiperSlide>
        ))}
      </Swiper>

      {paginationImage && (
        <div className="flex gap-2 items-center justify-center ">
          {items.map((item, i) => (
            <div
              key={i}
              className=" h-30 w-30 relative cursor-pointer animate__animated hover:animate-bounce z-10 rounded-sm overflow-hidden"
              onClick={()=> {swiper?.slideTo(i)}}
            >
              <Image
                src={item.src}
                alt="paginationImage"
                fill
                className="object-cover"
              />

              {swiper?.realIndex === i && (
                <div style={{width : `${progress}%`}} className="absolute bg-indigo-950 w-0 h-full inset-0 z-20 opacity-40"></div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
