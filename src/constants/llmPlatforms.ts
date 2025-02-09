/**
 * /src/constants/llmPlatforms.ts
 *
 * This file contains the configuration for supported Large Language Model (LLM) platforms,
 * including ChatGPT, Claude, and Gemini. Each platform includes a name, URL, and icon
 * for integration with the app's prompt output functionality.
 *
 * Usage:
 * - Imported in /app/prompts/[slug]/components/PromptOutput.tsx to provide buttons for copying
 *   prompts and opening them directly in LLM platforms.
 */

import { SiOpenai, SiGoogle, SiClaude } from "react-icons/si";

const llmPlatforms = [
  {
    name: "ChatGPT",
    icon: SiOpenai,
    url: "https://chat.openai.com/",
    color: "#10A37F",
  },
  {
    name: "Claude",
    icon: SiClaude,
    url: "https://claude.ai/",
    color: "#FFB300",
  },
  {
    name: "Gemini",
    icon: SiGoogle,
    url: "https://gemini.google.com/",
    color: "#4285F4",
  },
];

export default llmPlatforms;
