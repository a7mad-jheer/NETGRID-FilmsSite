"use client";
import { cn } from "@/lib/utils";
import { Spotlight } from "@/components/ui/spotlight";

export function SpotlightPreview({ children }: {children: React.ReactNode }) {
  return (
    <div className="relative flex w-secren overflow-hidden rounded-md bg-black/[0.96] antialiased ">
      <div
        className={cn(
          "pointer-events-none absolute inset-0 `[background-size:40px_40px]` select-none",
          "`[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]`"
        )}
      />

      <Spotlight
        className="relative -top-40 left-0 md:-top-20 md:left-60 "
        fill="white"
      />
      {children}
    </div>
  );
}


