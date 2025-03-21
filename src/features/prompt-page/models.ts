import { refineFromEmpty } from "@/features/common/schema-validation";
import { z } from "zod";

export const PROMPT_ATTRIBUTE = "PROMPT";
export type PromptModel = z.infer<typeof PromptModelSchema>;

export const PromptModelSchema = z.object({
  id: z.string(),
  name: z
    .string()
    .min(1, {
      message: "Titel må ikke være tom",
    })
    .refine(refineFromEmpty, "Titel må ikke være tom"),
  description: z
    .string()
    .min(1, {
      message: "Beskrivelse må ikke være tom",
    })
    .refine(refineFromEmpty, "Beskrivelse må ikke være tom"),
  createdAt: z.date(),
  isPublished: z.boolean(),
  userId: z.string(),
  type: z.literal(PROMPT_ATTRIBUTE),
});
