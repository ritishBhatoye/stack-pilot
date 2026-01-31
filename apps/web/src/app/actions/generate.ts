"use server";

import { generateApp } from "@repo/ai";
import { z } from "zod";

const configSchema = z.object({
  name: z.string().min(1),
  description: z.string().min(1),
  features: z.array(z.string()),
  techStack: z.object({
    frontend: z.array(z.string()),
    backend: z.array(z.string()),
    mobile: z.array(z.string()),
  }),
});

export async function generateAppAction(config: unknown) {
  const validatedConfig = configSchema.parse(config);
  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    throw new Error("OPENAI_API_KEY is not set");
  }

  try {
    const result = await generateApp(validatedConfig, apiKey);
    return result;
  } catch (error) {
    console.error("Generation error:", error);
    throw new Error(
      error instanceof Error ? error.message : "Failed to generate app"
    );
  }
}
