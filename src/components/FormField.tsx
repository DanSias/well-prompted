/**
 * FormField.tsx
 *
 * This component renders individual form fields (text inputs, textareas, or select dropdowns)
 * based on the provided configuration.
 *
 * Features:
 * - Renders CreatableSelect for dropdown options with the ability to add custom values.
 * - Provides consistent styling for all input types using Tailwind CSS.
 *
 * Props:
 * - element: The form element configuration (id, name, type, and options).
 * - value: The current value of the form field.
 * - handleChange: Function to handle changes and update the form state.
 */

import CreatableSelect from "react-select/creatable";

interface SelectOption {
  value: string;
  label: string;
}

interface FormFieldProps {
  element: { id: string; name: string; type: string; options?: SelectOption[] };
  value: string;
  handleChange: (name: string, value: string) => void;
}

export default function FormField({
  element,
  value,
  handleChange,
}: FormFieldProps) {
  return (
    <div className="mb-4">
      <label className="block text-gray-300 mb-1">{element.name}</label>

      {element.options ? (
        <CreatableSelect
          name={element.id}
          value={value ? { label: value, value: value } : null}
          onChange={(option) => handleChange(element.id, option?.value || "")}
          options={element.options}
          classNamePrefix="react-select"
          styles={{
            control: (base) => ({
              ...base,
              backgroundColor: "#374151",
              borderColor: "#4B5563",
              color: "#E5E7EB",
            }),
            singleValue: (base) => ({ ...base, color: "#E5E7EB" }),
            input: (base) => ({ ...base, color: "#E5E7EB" }),
            menu: (base) => ({ ...base, backgroundColor: "#374151" }),
            option: (base, state) => ({
              ...base,
              backgroundColor: state.isFocused ? "#1F2937" : "#374151",
              color: "#E5E7EB",
            }),
          }}
        />
      ) : element.type === "textarea" ? (
        <textarea
          name={element.id}
          value={value}
          onChange={(e) => handleChange(e.target.name, e.target.value)}
          className="w-full p-2 bg-gray-700 text-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 h-24"
        />
      ) : (
        <input
          type="text"
          name={element.id}
          value={value}
          onChange={(e) => handleChange(e.target.name, e.target.value)}
          className="w-full p-2 bg-gray-700 text-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
        />
      )}
    </div>
  );
}
