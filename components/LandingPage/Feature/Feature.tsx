"use client";

import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards"; 

export function Feature() {
  return (
    <div className="h-[20rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <h2 className="mb-4 text-xl font-bold">Why You Choose Us !</h2>
      <InfiniteMovingCards
       
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}
 
const testimonials = [
  {
    quote:"Explore thousands of movies across all genres. From classics to the latest releases, there’s always something for you.",
    name: "Huge Movie Library 🎬",
  },
  {
    quote:
      "Enjoy high-quality videos without buffering. Our optimized player ensures a seamless experience on any device.",
    name: "Fast & Smooth Streaming ⚡",
    
  },
  {
    quote: "Discover movies tailored to your taste. Our smart algorithm suggests films you’ll actually love.",
    name: "Personalized Recommendations ❤️",
    
  },
  {
    quote:
      "Watch your favorite movies on phone, tablet, computer, or smart TV. Flexibility wherever you are.",
    name: "Watch Anywhere 📱",
    
  },

];