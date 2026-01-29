"use client";

import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "@/components/ui/text-reveal-card";

export function WelcomeCard({cardTitle , cardDescription , RevealCard} : {cardTitle: string , cardDescription:string , RevealCard : {title: string , revealText : string} }) {
  return (
    <div className="flex items-center justify-center  rounded-2xl w-full">
      <TextRevealCard
        text={RevealCard.title}
        revealText={RevealCard.revealText}
      >
        <TextRevealCardTitle>
          {cardTitle}
        </TextRevealCardTitle>
        <TextRevealCardDescription>
            {cardDescription}
            </TextRevealCardDescription>
      </TextRevealCard >
    </div>
  );
}
