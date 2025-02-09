/**
 * promptUtils.ts
 *
 * This file contains utility functions for generating AI prompts and handling
 * clipboard interactions. It dynamically replaces placeholders in the prompt
 * template and additional guidance with user-provided data.
 *
 * Functions:
 * - generatePrompt(promptType, formData): Generates a complete AI prompt based on user input.
 * - copyToClipboard(prompt): Copies the generated prompt to the clipboard.
 * - handleCopyAndOpen(prompt, url): Copies the prompt to the clipboard and opens it in a supported LLM platform.
 */

import { PromptUseCase } from "@/constants/promptUseCases";
import { toast } from "sonner";

export const generatePrompt = (
  promptType: PromptUseCase | undefined,
  formData: Record<string, string>
): string => {
  if (!promptType) return "";

  // Only add 'Generate' intro if the prompt type is related to code generation
  const isCodeRelated = [
    "code-generation",
    "code-refactoring",
    "automation",
  ].includes(promptType.id);

  let introSentence = "";
  if (isCodeRelated) {
    const codeType =
      formData["code_type"] || promptType.defaultCodeType || "code";
    const language = formData["programming_language"] || "";
    const framework = formData["framework_library"] || "";

    introSentence = `Generate a ${codeType}`;
    if (language) introSentence += ` using ${language}`;
    if (framework) introSentence += ` with ${framework}`;
  }

  const additionalDetails = promptType.formElements
    .filter(
      (element) =>
        !["code_type", "programming_language", "framework_library"].includes(
          element.id
        )
    )
    .map((element) => {
      const value = formData[element.id];
      return value ? element.sentence.replace(`{${element.id}}`, value) : null;
    })
    .filter(Boolean)
    .join(". ");

  const hasContent = introSentence || additionalDetails;
  let additionalGuidance = promptType.additionalGuidance || "";

  // Replace placeholders in additionalGuidance with formData values
  additionalGuidance = additionalGuidance.replace(
    /\{(.*?)\}/g,
    (_, key) => formData[key] || `{${key}}`
  );

  return hasContent
    ? `${introSentence}${
        introSentence && additionalDetails ? ". " : ""
      }${additionalDetails}\n\n${additionalGuidance}`
    : "";
};

export const copyToClipboard = async (prompt: string) => {
  if (prompt) {
    await navigator.clipboard.writeText(prompt);
    toast.success("Prompt copied to clipboard!");
  }
};

export const handleCopyAndOpen = (prompt: string, url: string) => {
  navigator.clipboard
    .writeText(prompt)
    .then(() => {
      window.open(url, "_blank");
    })
    .catch((err) => {
      console.error("Failed to copy: ", err);
    });
};
