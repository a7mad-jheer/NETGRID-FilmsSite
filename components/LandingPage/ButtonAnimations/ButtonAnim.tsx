"use client";
import Spinner from "../../Dashboard/global/Spinner";
import Link from "next/link";

interface ButtonAnimProps {
  label: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  icon?: React.ReactNode;
  link?: string;
}

export default function ButtonAnim({
  label,
  onClick,
  className,
  disabled = false,
  icon,
  link,
}: ButtonAnimProps) {
  return (
    <>
      <style>{`
                @keyframes shine {
                    0% {
                        background-position: 0% 50%;
        }

                50% {
                    background-position: 100% 50%;
        }

                100% {
                    background-position: 0% 50%;
        }
    }

                .button-bg {
                    background: conic-gradient(from 0deg, #00F5FF, #000, #000, #00F5FF, #000, #000, #000, #00F5FF);
                background-size: 300% 300%;
                animation: shine 6s ease-out infinite;
    }
            `}</style>
      <div className="button-bg rounded-full p-0.5 hover:scale-105 transition duration-300 active:scale-100">
        <button
          className={`lg:px-8 text-sm lg:py-2.5 px-6 py-2 h-full text-white rounded-full font-medium bg-gray-800 ${
            className || ""
          }`}
          onClick={onClick}
          disabled={disabled}
        >
          {disabled ? (
            <Spinner />
          ) : link ? (
            <Link href={link}>{label}</Link>
          ) : (
            label
          )}
          {icon && icon}
        </button>
      </div>
    </>
  );
}
