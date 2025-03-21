"use client";
import { Hero, HeroButton } from "@/features/ui/hero";
import { Book, BookImage, NotebookPen } from "lucide-react";
import { promptStore } from "../prompt-store";

export const PromptHero = () => {
  return (
    <Hero
      title={
        <>
          <Book size={36} strokeWidth={1.5} /> Prompt Bibliotek
        </>
      }
      description={
        "Prompt-skabeloner er udsagn eller spørgsmål, der kan hjælpe brugerne med at blive kreative uden at skulle komme med ideer fra bunden.."
      }
    >
      <HeroButton
        title="Ny Prompt"
        description="Byg din egen Prompt skabelon"
        icon={<Book />}
        onClick={() => promptStore.newPrompt()}
      />
      <HeroButton
        title="Hyggelig by"
        description="Billede af miniature farverig by"
        icon={<BookImage />}
        onClick={() =>
          promptStore.updatePrompt({
            createdAt: new Date(),
            id: "",
            name: "Hyggelig by",
            description:
              "Skab en by med farverige bygninger og grønne træer med [ikonisk bygning]. Den [ikoniske bygning] er i midten af ​​billedet, omgivet af en sløret baggrund med masser af [Native tree name] træer. Billedet har en drømmende og finurlig stemning med en lav dybdeskarphed og en høj vinkel. Byen ligner et stykke legetøj eller en model, med forskellige stilarter og former for bygninger.",
            isPublished: false,
            type: "PROMPT",
            userId: "",
          })
        }
      />
      <HeroButton
        title="Problemstilling"
        description="Problemformulering for et nyt produkt"
        icon={<NotebookPen />}
        onClick={() =>
          promptStore.updatePrompt({
            createdAt: new Date(),
            id: "",
            name: "Problemstilling",
            description: `
Givet følgende problemformulering:
[PROBLEMSTILLING]

Generer et svar med følgende punkter:
1. Problemindramning
2. Løsningsoversigt og anbefalinger 
3. Liste det anbefalede MVP Scope ned
4. Hvordan man sikrer brugeradoption
5. Hvordan man måler succes 
8. Liste ned lignende produkter
9. Potentiel sponsorspørgsmål (5 spørgsmål)
              `,
            isPublished: false,
            type: "PROMPT",
            userId: "",
          })
        }
      />
    </Hero>
  );
};
