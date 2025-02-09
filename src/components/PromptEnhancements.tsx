/**
 * /src/components/PromptEnhancements.tsx
 *
 * This component arranges categorized prompt enhancements into clickable buttons.
 * Each button represents a phrase that can be copied to the clipboard to enhance
 * AI prompt results.
 *
 * Features:
 * - Displays prompt enhancement categories (e.g., Error Handling, Performance Optimization).
 * - Allows users to copy individual enhancements to the clipboard with a single click.
 * - Provides a search bar to filter enhancements by keywords.
 *
 * Usage:
 * - Rendered on the `/prompts/enhancements` page to help users fine-tune LLM-generated outputs.
 */

"use client";

import React, { useState } from "react";
import promptEnhancements from "@/constants/promptEnhancements";
import { toast } from "sonner"; // Optional for feedback when copying

interface EnhancementCategory {
  category: string;
  phrases: string[];
}

export default function PromptEnhancements() {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const copyToClipboard = (text: string): void => {
    navigator.clipboard.writeText(text).then(() => {
      toast.success("Enhancement copied to clipboard!");
    });
  };

  const highlightText = (text: string, highlight: string) => {
    if (!highlight) return text;
    const parts = text.split(new RegExp(`(${highlight})`, "gi"));
    return parts.map((part, index) =>
      part.toLowerCase() === highlight.toLowerCase() ? (
        <span key={index} className="bg-yellow-500 text-gray-900">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  const filteredEnhancements: EnhancementCategory[] = promptEnhancements
    .map((category) => ({
      ...category,
      phrases: category.phrases.filter((phrase) =>
        phrase.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    }))
    .filter(
      (category) =>
        category.phrases.length > 0 ||
        category.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div className="p-4 bg-gray-900 text-gray-200 rounded-lg w-full mx-auto">
      <input
        type="text"
        placeholder="Search enhancements..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-3 mb-6 bg-gray-800 text-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {filteredEnhancements.map(
        (category: EnhancementCategory, index: number) => (
          <div key={index} className="mb-12 pb-6">
            <h3 className="text-3xl font-bold mb-4 text-center">
              {category.category}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {category.phrases
                .slice(0, 8)
                .map((phrase: string, idx: number) => (
                  <button
                    key={idx}
                    onClick={() => copyToClipboard(phrase)}
                    className="p-3 bg-gray-800 hover:bg-gray-700 rounded-md border border-gray-700 text-left focus:outline-none focus:ring-2 focus:ring-blue-500">
                    {highlightText(phrase, searchTerm)}
                  </button>
                ))}
            </div>
          </div>
        )
      )}
    </div>
  );
}
