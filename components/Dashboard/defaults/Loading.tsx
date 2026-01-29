"use client";

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="flex flex-col items-center gap-8">

        {/* Glitch Circle */}
        <div className="relative w-20 h-20">
          <div className="absolute inset-0 rounded-full border-4 border-red-900 opacity-40 animate-ping" />
          <div className="absolute inset-0 rounded-full border-4 border-red-600 border-t-transparent animate-spin" />
        </div>

        {/* Horror Text */}
        <h1 className="text-red-600 text-2xl font-bold tracking-widest animate-pulse">
          LOADING
        </h1>

        {/* Blood dots */}
        <div className="flex gap-2">
          <span className="w-3 h-3 bg-red-700 rounded-full animate-bounce" />
          <span className="w-3 h-3 bg-red-700 rounded-full animate-bounce [animation-delay:150ms]" />
          <span className="w-3 h-3 bg-red-700 rounded-full animate-bounce [animation-delay:300ms]" />
        </div>

        {/* Creepy message */}
        <p className="text-sm text-red-900 tracking-wide animate-pulse">
          Don't warry , I AM HERE ...
        </p>
      </div>
    </div>
  );
}
