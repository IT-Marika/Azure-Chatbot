"use client";

import { AI_NAME } from "@/features/theme/theme-config";
import { Hero } from "@/features/ui/hero";
import { PocketKnife } from "lucide-react";
import { AISearch } from "./ai-search-issues";
import { BingSearch } from "./bing-search";
import { NewExtension } from "./new-extension";

export const ExtensionHero = () => {
  return (
    <Hero
      title={
        <>
          <PocketKnife size={36} strokeWidth={1.5} /> Extensions
        </>
      }
      description={`Forbind ${AI_NAME} med interne API'er eller eksterne
        ressourcer`}
    >
      <NewExtension />
      <BingSearch />
      <AISearch />
    </Hero>
  );
};
