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
        title="Ny Persona"
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
        title="Oversætter"
        description="Dansk til engelsk oversætter."
        icon={<Languages />}
        onClick={() =>
          personaStore.newPersonaAndOpen({
            name: "Dansk til engelsk oversætter",
            personaMessage:
              "Du er ekspert i at oversætte dansk til engelsk. Du får en sætning på dansk, og din opgave er at oversætte den til engelsk.",
            description: "Dansk til engelsk oversætter",
          })
        }
      />
    </Hero>
  );
};
