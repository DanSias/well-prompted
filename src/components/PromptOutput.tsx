/**
 * PromptOutput.tsx
 *
 * This component displays the generated AI prompt and provides options to copy
 * it to the clipboard or open it in a supported LLM platform.
 *
 * Features:
 * - Displays the generated prompt in a read-only textarea.
 * - Provides buttons to copy the prompt to the clipboard.
 * - Integrates with multiple LLM platforms (e.g., ChatGPT, Claude, Gemini)
 *   to open the prompt directly in a new tab.
 *
 * Props:
 * - customPrompt: The generated prompt to display and copy.
 */

import { FaClipboard } from "react-icons/fa";
import llmPlatforms from "@/constants/llmPlatforms";
import { handleCopyAndOpen, copyToClipboard } from "@/utils/promptUtils";

interface PromptOutputProps {
  customPrompt: string;
}

export default function PromptOutput({ customPrompt }: PromptOutputProps) {
  return (
    <div className="p-4 text-gray-200 rounded-md w-full max-w-lg">
      <h3 className="text-lg font-semibold mb-2">Generated Prompt:</h3>
      <textarea
        value={customPrompt}
        onChange={() => {}}
        className="w-full p-2 bg-gray-700 text-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 h-80"
        readOnly
      />
      <button
        onClick={() => copyToClipboard(customPrompt)}
        className="mt-4 flex items-center bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full">
        <FaClipboard className="mr-2" />
        Copy Prompt to Clipboard
      </button>

      <h3 className="text-lg font-semibold mb-4 text-center mt-6">
        Copy & Open Your Favorite LLM
      </h3>
      {/* Grid for LLM Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {llmPlatforms.map(({ name, icon: Icon, url, color }) => (
          <button
            key={name}
            onClick={() => handleCopyAndOpen(customPrompt, url)}
            style={{ backgroundColor: color }}
            className="flex flex-col items-center justify-center bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-4 rounded transition">
            <Icon className="text-2xl mb-2" />
            <span>{name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
