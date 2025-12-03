import Image from "next/image";

export default function HeroCardInfo({title , description , image , textBtn , btnClasses} : {title : string ; description:string; image :string ; textBtn?:string; btnClasses ?: string}) {
  return (
    <div className="absolute top-5 left-5 bg-black/30 p-4 max-w-sm rounded-2xl flex flex-col items-start gap-3">
      <div className="w-full h-40 relative rounded overflow-hidden">
        <Image src={image} fill alt={title} className="object-cover" />
      </div>
      <h1 className="text-purple-300 text-2xl font-semibold">{title}</h1>
      <p className="text-base text-gray-300">
        {description}
      </p>
      <button className={`rounded-full ${btnClasses || ""}`} >{textBtn || "Find Out More !"}</button>
    </div>
  );
}
