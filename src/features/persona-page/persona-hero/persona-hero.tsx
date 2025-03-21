"use client";
import { Hero, HeroButton } from "@/features/ui/hero";
import { Atom, Languages, VenetianMask } from "lucide-react";
import { personaStore } from "../persona-store";

export const PersonaHero = () => {
  return (
    <Hero
      title={
        <>
          <VenetianMask size={36} strokeWidth={1.5} /> Persona
        </>
      }
      description={`  Persona er en repræsentation af en personlighed, som du kan bruge til
    tage en snak med.`}
    >
      <HeroButton
        title="New Persona"
        description="Skab en ny persona, som du kan bruge til at føre en samtale med."
        icon={<VenetianMask />}
        onClick={() =>
          personaStore.newPersonaAndOpen({
            name: "",
            personaMessage: `Personlighed:
[Beskriv personligheden f.eks. tonefaldet, måden de taler på, måden de handler på osv.]

Ekspertise:
[Beskriv personlighedens ekspertise f.eks. Kundeservice, Marketingtekstforfatter mv.]

Eksempel:
[Beskriv et eksempel på personligheden f.eks. en marketingtekstforfatter, der kan skrive fængende overskrifter.]`,
            description: "",
          })
        }
      />
      <HeroButton
        title="Translator"
        description="English to French translator."
        icon={<Languages />}
        onClick={() =>
          personaStore.newPersonaAndOpen({
            name: "English to French translator",
            personaMessage:
              "You are an expert in translating English to French. You will be provided with a sentence in English, and your task is to translate it into French.",
            description: "English to French translator.",
          })
        }
      />
      <HeroButton
        title="ReactJS Expert"
        description="ReactJs expert who can write clean functional components."
        icon={<Atom />}
        onClick={() =>
          personaStore.newPersonaAndOpen({
            name: "ReactJS Expert",
            personaMessage: `You are a ReactJS expert who can write clean functional components. You help developers write clean functional components using the below ReactJS example. 
              \nExample:
import * as React from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        className={
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        }
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };

              `,
            description: "Customer service persona.",
          })
        }
      />
    </Hero>
  );
};
