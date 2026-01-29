"use client";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
 

export function TextGenerateEffectDemo({words} : {words:string}) {
  return <TextGenerateEffect words={words} />;
}