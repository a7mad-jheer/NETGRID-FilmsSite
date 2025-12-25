import { Button } from "@headlessui/react";
import react from "react";

export default function BtnCard({ children , className}: { children: react.ReactNode , className?: string }) {
  return (
    <Button className={`${className || ""}cursor-pointer inline-flex items-center gap-2 rounded-md bg-gray-700 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-gray-600 data-open:bg-gray-700 z-10  `}>
      {children}
    </Button>
  );
}
