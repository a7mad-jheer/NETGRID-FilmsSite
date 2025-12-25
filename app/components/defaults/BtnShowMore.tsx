import { Button } from "@material-tailwind/react";

export default function BtnShowMore({ text , onClick ,children , className}: { text: string; onClick : () => void; children ?: React.ReactNode; className ?: string}) {
  return (
    <Button onClick={onClick} variant="text" className={`text-xs flex items-center gap-2 cursor-pointer ${className || ""}`}>
      {text}{" "}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="h-5 w-5"
        
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
        />
      </svg>

      {children}
    </Button>
  );
}
