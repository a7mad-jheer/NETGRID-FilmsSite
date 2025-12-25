import Image from "next/image";
import HeroCardInfo from "../HeroCardInfo/HeroCardInfo";
import SwiperCards from "../SwiperCards/SwiperCards";

export default function HeroSection() {
  return (
    <div>
      <SwiperCards
        className="h-96 my-5 rounded-sm overflow-hidden"
        paginationImage
        items={[
          {
            cards: (
              <section className="w-full h-full ">
                <Image
                  src="/page1.jpg"
                  alt="card-image"
                  fill
                  className="object-cover  "
                />

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
              <div className=" w-full h-full">
                <Image
                  src="/page2.jpg"
                  alt="card-image"
                  fill
                  className="object-cover"
                />
              </div>
            ),
            src: "/page2.jpg",
          },
          {
            cards: (
              <Image
                src="/page.jpg"
                alt="card-image"
                fill
                className="object-cover"
              />
            ),
            src: "/page.jpg",
          },
        ]}
      />
    </div>
  );
}
