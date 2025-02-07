"use client";

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import promptUseCases, { PromptUseCase } from "@/constants/promptUseCases";

export default function PromptPage() {
  const params = useParams();
  const promptType: PromptUseCase | undefined = promptUseCases.find(
    (p) => p.id === params?.slug
  );
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [customPrompt, setCustomPrompt] = useState("");

  useEffect(() => {
    // Load user settings from localStorage and autofill formData
    const userSettings = localStorage.getItem("userSettings");
    if (userSettings) {
      const parsedSettings = JSON.parse(userSettings);
      const initialFormData: Record<string, string> = {};

      promptType?.formElements.forEach((element) => {
        if (parsedSettings[element.id]) {
          initialFormData[element.id] = parsedSettings[element.id];
        }
      });

      setFormData(initialFormData);
    }
  }, [promptType]);

  useEffect(() => {
    setCustomPrompt(generatePrompt());
  }, [formData]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCustomPromptChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setCustomPrompt(e.target.value);
  };

  const generatePrompt = () => {
    if (!promptType) return "";

    return promptType.formElements
      .map((element) => {
        const value = formData[element.id];
        return value
          ? element.sentence.replace(`{${element.id}}`, value)
          : null;
      })
      .filter(Boolean) // Remove empty values
      .join(". "); // Join sentences into a structured prompt
  };

  const copyToClipboard = async () => {
    if (customPrompt) {
      await navigator.clipboard.writeText(customPrompt);
      toast.success("Prompt copied to clipboard!");
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
      {promptType && (
        <div className="mt-6 w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column - Form Inputs */}
          <form className="w-full max-w-lg">
            {promptType.formElements.map((element) => (
              <div key={element.id} className="mb-4">
                <label className="block text-gray-300 mb-2">
                  {element.name}
                </label>
                <p className="text-sm text-gray-400">{element.description}</p>
                {element.type === "textarea" ? (
                  <textarea
                    name={element.id}
                    value={formData[element.id] || ""}
                    onChange={handleChange}
                    className="w-full p-2 bg-gray-800 text-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 h-24"
                  />
                ) : (
                  <input
                    type="text"
                    name={element.id}
                    value={formData[element.id] || ""}
                    onChange={handleChange}
                    className="w-full p-2 bg-gray-800 text-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                  />
                )}
              </div>
            ))}
          </form>
          {/* Right Column - Generated Prompt & Copy Button */}
          <div className="p-4 bg-gray-800 text-gray-200 rounded-md w-full max-w-lg">
            <h3 className="text-lg font-semibold mb-2">Generated Prompt:</h3>
            <textarea
              value={customPrompt}
              onChange={handleCustomPromptChange}
              className="w-full p-2 bg-gray-800 text-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 h-32"
            />
            <button
              onClick={copyToClipboard}
              className="mt-4 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full">
              Copy Prompt to Clipboard
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
