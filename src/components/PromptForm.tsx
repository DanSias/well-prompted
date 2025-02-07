"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import promptUseCases, { PromptUseCase } from "@/constants/promptUseCases";

export default function PromptPage() {
  const params = useParams();
  const promptType: PromptUseCase | undefined = promptUseCases.find(
    (p) => p.id === params?.slug
  );

  const [formData, setFormData] = useState<Record<string, string>>({});

  //   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  //     setFormData({ ...formData, [e.target.name]: e.target.value });
  //   };

  const generatePrompt = () => {
    return promptType?.promptTemplate.replace(
      /\{(\w+)\}/g,
      (_, key) => formData[key] || `{${key}}`
    );
  };

  const copyToClipboard = async () => {
    const prompt = generatePrompt();
    if (prompt) {
      await navigator.clipboard.writeText(prompt);
      alert("Prompt copied to clipboard!");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-900 text-gray-200 p-6">
      <h1 className="text-4xl font-bold mb-6 capitalize">
        {promptType ? `${promptType.headline}` : "Loading..."}
      </h1>
      <p className="text-lg text-gray-400 max-w-2xl text-center">
        {promptType ? promptType.description : "Loading description..."}
      </p>
      <button
        onClick={copyToClipboard}
        className="mt-4 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
        Copy Prompt to Clipboard
      </button>
    </div>
  );
}
