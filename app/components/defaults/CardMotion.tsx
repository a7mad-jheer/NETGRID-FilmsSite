"use cLient"
import Image from "next/image";

const FlipCardBasic = ({
  ImagePath,
  title,
  description,
  className ,
}: {
  ImagePath: string;
  title: string;
  description: string;
  className ?: string;
}) => {

    
  return (
    <>
    <div
    
    className={`${className || ""} rounded-2xl overflow-hidden `}>
      {/*Front */}
      <div className="w-full h-full relative flex items-center justify-center ">
        <Image
          src={`https://image.tmdb.org/t/p/w500/${ImagePath}`}
          alt="front image"
          className="w-full h-full absolute inset-0"
          fill
        />
      </div>
      {/*=== Front ===*/}

      {/* Back */}
      <div className="w-full h-full relative  flex-col items-center justify-center gap-3 p-4 bg-zinc-950 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-900 hidden">
        <h3 className="text-xl font-bold uppercase tracking-widest">
          {title}
        </h3>
        <p className="text-sm text-center text-zinc-500 dark:text-zinc-400">
          {description}
        </p>
        <button className="mt-2 px-4 py-1.5 text-sm font-medium bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 rounded-full hover:opacity-90 transition cursor-pointer">
          watch now
        </button>
      </div>
      {/*=== Back ===*/}
    </div>
    </>

  );
};

// const Front = () => {
//   return (
//     <div className="w-full h-full relative flex items-center justify-center">
//       <Image
//         src={`https://image.tmdb.org/t/p/w500/${ImagePath}`}
//         alt="front image"
//         className="w-full h-full absolute inset-0"
//       />
//       <h3 className="text-white text-5xl font-semibold uppercase font-mono relative">
//         BLOOM
//       </h3>
//     </div>
//   );
// };

// const Back = () => {
//   return (
//     <div className="w-full h-full relative flex flex-col items-center justify-center gap-3 p-4 bg-zinc-950 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-900">
//       <h3 className="text-xl font-bold uppercase tracking-widest">
//         Explore More
//       </h3>
//       <p className="text-sm text-center text-zinc-500 dark:text-zinc-400">
//         Dive into our exclusive collection of hand-crafted visuals.
//       </p>
//       <button className="mt-2 px-4 py-1.5 text-sm font-medium bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 rounded-full hover:opacity-90 transition cursor-pointer">
//         Browse Now
//       </button>
//     </div>
//   );
// };

export default FlipCardBasic;
