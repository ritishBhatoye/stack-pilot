import OpenAI from "openai";
import type { AppConfig, GeneratedFile, GenerationResult } from "./types";

const SYSTEM_PROMPT = `You are a senior staff engineer responsible for generating a PRODUCTION-READY repository.

CRITICAL RULES (NON-NEGOTIABLE):
1. You MUST generate REAL FILES with REAL CODE — not explanations.
2. Output MUST include .tsx, .ts, .json, and configuration files.
3. DO NOT output only markdown text. Each file must have explicit contents.
4. Follow modern best practices used by top-tier teams (Vercel, Expo, Meta).
5. The output must be deployable immediately without refactoring.
6. Use TypeScript everywhere.
7. NO placeholders like "TODO" or "implementation left to user".
8. Keep the architecture minimal, clean, and scalable.

OUTPUT FORMAT:
Return a JSON object with this structure:
{
  "files": [
    {
      "path": "relative/path/to/file",
      "content": "full file content as string"
    }
  ],
  "structure": ["folder1/", "folder2/file.ts"]
}

Generate the complete repository structure based on the provided configuration.`;

export async function generateApp(
  config: AppConfig,
  apiKey: string
): Promise<GenerationResult> {
  const openai = new OpenAI({ apiKey });

  const userPrompt = `Generate a production-ready monorepo with the following configuration:

App Name: ${config.name}
Description: ${config.description}
Features: ${config.features.join(", ")}
Tech Stack:
  Frontend: ${config.techStack.frontend.join(", ")}
  Backend: ${config.techStack.backend.join(", ")}
  Mobile: ${config.techStack.mobile.join(", ")}

Generate the complete file structure with all necessary files.`;

  const completion = await openai.chat.completions.create({
    model: "gpt-4-turbo-preview",
    messages: [
      { role: "system", content: SYSTEM_PROMPT },
      { role: "user", content: userPrompt },
    ],
    response_format: { type: "json_object" },
    temperature: 0.3,
  });

  const response = completion.choices[0]?.message?.content;
  if (!response) {
    throw new Error("No response from OpenAI");
  }

  try {
    const result = JSON.parse(response) as GenerationResult;
    return result;
  } catch (error) {
    throw new Error(`Failed to parse AI response: ${error}`);
  }
}
