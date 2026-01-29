import SwiperCards from "../SwiperCards/SwiperCards";
import "swiper/css";
import Image from "next/image";
import HeroCardInfo from "../HeroCardInfo/HeroCardInfo";

export default function Hero() {
  return (
    <div className=" max-w-full mx-10">
      <SwiperCards
        className="h-96 my-5 rounded-sm overflow-hidden "
        paginationImage
        items={[
          {
            cards: (
              <section className="w-full ">
                <div className="relative overflow-hidden max-w-[1200px] h-96 ">
                  <Image
                    src="/page1.jpg"
                    alt="card-image"
                    fill
                    className="object-cover  "
                  />
                </div>

                <HeroCardInfo
                  title="First Films"
                  description="hrror films as kkjhjvghcnbvmnhj mhghjgmnbmj kjhkhlkjlk"
                  btnClasses="bg-red-500 hover:bg-red-400 p-2"
                  image="/page.jpg"
                />
              </section>
            ),
            src: "/page1.jpg",
          },
          {
            cards: (
              <div className="relative overflow-hidden max-w-[1200px] h-96">
                <Image
                  src="/page2.jpg"
                  alt="card-image"
                  fill
                  className="object-cover "
                />
              </div>
            ),
            src: "/page2.jpg",
          },
          {
            cards: (
              <div className="relative overflow-hidden max-w-[1200px] h-96">
                <Image
                  src="/page.jpg"
                  alt="card-image"
                  fill
                  className="object-cover"
                />
              </div>
            ),
            src: "/page.jpg",
          },
        ]}
      />
    </div>
  );
}
