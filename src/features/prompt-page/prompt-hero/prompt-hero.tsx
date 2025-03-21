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
            name: "Whimsical City",
            description:
              "Create A miniature city with colourful buildings and green trees with [iconic building]. The [iconic building] is in the centre of the image, surrounded by a blurred background with lots of [Native tree name] trees. The image has a dreamy and whimsical mood, with a shallow depth of field and a high angle view. The city looks like a toy or a model, with different styles and shapes of buildings.",
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
