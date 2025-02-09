/**
 * /app/prompts/[slug]/page.tsx
 *
 * This dynamic page component renders AI prompt forms based on the `slug` parameter
 * in the URL. It supports various use cases like code generation, debugging,
 * and automation by dynamically loading the corresponding form elements and
 * generating structured prompts.
 *
 * Features:
 * - Dynamically renders forms based on the prompt type identified by the `slug` in the URL.
 * - Auto-fills form fields with user preferences from localStorage.
 * - Generates structured prompts with additional guidance for optimal LLM responses.
 * - Provides functionality to copy prompts or open them in LLM platforms like ChatGPT or Claude.
 *
 * Technologies: React, Next.js App Router, TypeScript, Tailwind CSS, react-select, sonner (for toast notifications)
 */

"use client";

import { useParams, usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import promptUseCases, { PromptUseCase } from "@/constants/promptUseCases";
import { generatePrompt } from "@/utils/promptUtils";
import PromptForm from "@/components/PromptForm";
import PromptOutput from "@/components/PromptOutput";

export default function PromptPage() {
  const params = useParams();
  const pathname = usePathname();

  const [promptType, setPromptType] = useState<PromptUseCase | undefined>(
    promptUseCases.find((p) => p.id === params?.slug)
  );

  const [formData, setFormData] = useState<Record<string, string>>({});
  const [customPrompt, setCustomPrompt] = useState("");

  // Load user settings from localStorage
  useEffect(() => {
    const userSettings = localStorage.getItem("userSettings");

    if (userSettings && promptType) {
      const parsedSettings = JSON.parse(userSettings);
      const initialFormData: Record<string, string> = {};

      promptType.formElements.forEach((element) => {
        if (parsedSettings[element.id]) {
          initialFormData[element.id] = parsedSettings[element.id];
        }
      });

      setFormData(initialFormData);
    }
  }, [promptType]);

  // Detect navigation changes and update prompt type accordingly
  useEffect(() => {
    const newPromptType = promptUseCases.find((p) => p.id === params?.slug);
    if (newPromptType) {
      setFormData({}); // Clear form data on navigation change
      setCustomPrompt(""); // Clear existing prompt
      setPromptType(newPromptType); // Update prompt type
    }
  }, [pathname]);

  // Update customPrompt when formData changes
  useEffect(() => {
    setCustomPrompt(generatePrompt(promptType, formData));
  }, [formData, promptType]);

  const handleChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  const resetForm = () => {
    setFormData({});
    setCustomPrompt("");
    toast.info("Form has been reset.");
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-slate-900 text-gray-200 p-6 pt-12">
      <h1 className="text-4xl font-bold mb-6 capitalize">
        {promptType ? `${promptType.headline}` : "Loading..."}
      </h1>
      <p className="text-lg text-gray-400 max-w-2xl text-center">
        {promptType ? promptType.description : "Loading description..."}
      </p>
      {promptType && (
        <div className="mt-6 w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8">
          <PromptForm
            formElements={promptType.formElements}
            formData={formData}
            handleChange={handleChange}
            resetForm={resetForm}
          />
          <PromptOutput customPrompt={customPrompt} />
        </div>
      )}
    </div>
  );
}
