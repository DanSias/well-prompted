/**
 * PromptForm.tsx
 *
 * This component renders the dynamic form fields based on the prompt type.
 * It handles user input and passes data back to the main PromptPage component.
 *
 * Features:
 * - Dynamically renders text inputs, textareas, and select dropdowns based on form configuration.
 * - Supports CreatableSelect for flexible user input with predefined options.
 * - Includes a reset button to clear all form inputs.
 *
 * Props:
 * - formElements: Array of form elements to render.
 * - formData: Current state of the form inputs.
 * - handleChange: Function to update form data in the parent component.
 * - resetForm: Function to reset the form inputs.
 */

import FormField from "./FormField";
import { FaRedo } from "react-icons/fa";

interface SelectOption {
  value: string;
  label: string;
}

interface PromptFormProps {
  formElements: {
    id: string;
    name: string;
    type: string;
    options?: SelectOption[];
  }[];
  formData: Record<string, string>;
  handleChange: (name: string, value: string) => void;
  resetForm: () => void;
}

export default function PromptForm({
  formElements,
  formData,
  handleChange,
  resetForm,
}: PromptFormProps) {
  return (
    <form className="w-full max-w-lg">
      {formElements.map((element) => (
        <FormField
          key={element.id}
          element={element}
          value={formData[element.id] || ""}
          handleChange={handleChange}
        />
      ))}
      <button
        type="button"
        onClick={resetForm}
        className="mt-4 flex items-center bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-full">
        <FaRedo className="mr-2" />
        Reset Form
      </button>
    </form>
  );
}
