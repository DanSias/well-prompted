/**
 * /src/components/SettingsModal.tsx
 *
 * This modal component allows users to set default preferences for prompt generation,
 * including programming language, framework, testing tools, and more. The preferences
 * are saved in localStorage and auto-fill form inputs across the app.
 *
 * Features:
 * - Provides form inputs for setting default programming language, framework, and other preferences.
 * - Saves user settings to localStorage for persistent form auto-filling.
 * - Uses Headless UI's modal component for accessibility and smooth animations.
 *
 * Usage:
 * - Launched via the settings button in the Header component.
 * - Auto-fills form fields in the prompt generation pages based on user settings.
 */

"use client";

import React, { useState, useEffect, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import CreatableSelect from "react-select/creatable";
import {
  languageOptions,
  frameworkOptions,
  testingFrameworkOptions,
  learningStyleOptions,
  errorResolutionOptions,
  optimizationOptions,
  automationToolsOptions,
} from "@/constants/settingsOptions";

const defaultSettings = {
  preferredProgrammingLanguage: "",
  favoriteFramework: "",
  preferredTestingFramework: "",
  learningStyle: "",
  errorResolutionApproach: "",
  optimizationFocus: "",
  automationTools: "",
};

interface UserSettingsProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function UserSettings({ isOpen, onClose }: UserSettingsProps) {
  const [settings, setSettings] = useState(() => {
    const savedSettings = localStorage.getItem("userSettings");
    return savedSettings ? JSON.parse(savedSettings) : defaultSettings;
  });

  useEffect(() => {
    localStorage.setItem("userSettings", JSON.stringify(settings));
  }, [settings]);

  const handleSelectChange = (
    selectedOption: { value: string; label: string } | null,
    actionMeta: { name?: string }
  ) => {
    const { name } = actionMeta;
    if (name) {
      setSettings({
        ...settings,
        [name]: selectedOption ? selectedOption.value : "",
      });
    }
  };

  const handleSave = () => {
    localStorage.setItem("userSettings", JSON.stringify(settings));
    console.log("Settings saved:", settings);
    onClose();
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0">
          <div className="fixed inset-0 bg-black bg-opacity-50" />
        </Transition.Child>

        <div className="fixed inset-0 flex items-center justify-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="scale-95 opacity-0"
            enterTo="scale-100 opacity-100"
            leave="ease-in duration-200"
            leaveFrom="scale-100 opacity-100"
            leaveTo="scale-95 opacity-0">
            <Dialog.Panel className="p-4 bg-gray-800 text-gray-200 rounded-md w-full max-w-lg mx-auto shadow-lg">
              <Dialog.Title className="text-2xl font-bold mb-4 text-center">
                User Settings
              </Dialog.Title>

              <div className="space-y-4">
                {[
                  {
                    label: "Preferred Programming Language",
                    name: "programming_language",
                    options: languageOptions,
                  },
                  {
                    label: "Favorite Framework/Library",
                    name: "framework_library",
                    options: frameworkOptions,
                  },
                  {
                    label: "Preferred Testing Framework",
                    name: "testing_requirements",
                    options: testingFrameworkOptions,
                  },
                  {
                    label: "Preferred Learning Style",
                    name: "preferred_learning_style",
                    options: learningStyleOptions,
                  },
                  {
                    label: "Error Resolution Approach",
                    name: "error_message",
                    options: errorResolutionOptions,
                  },
                  {
                    label: "Performance Optimization Focus",
                    name: "performance_goal",
                    options: optimizationOptions,
                  },
                  {
                    label: "Preferred Automation Tools",
                    name: "task_to_automate",
                    options: automationToolsOptions,
                  },
                ].map(({ label, name, options }) => (
                  <div key={name}>
                    <label className="block text-sm font-medium text-gray-300">
                      {label}
                    </label>
                    <CreatableSelect
                      name={name}
                      value={
                        options.find(
                          (option) => option.value === settings[name]
                        ) || {
                          value: settings[name],
                          label: settings[name],
                        }
                      }
                      onChange={handleSelectChange}
                      options={options}
                      placeholder={`Select or type ${label.toLowerCase()}`}
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
                        menu: (base) => ({
                          ...base,
                          backgroundColor: "#374151",
                        }),
                        option: (base, { isFocused }) => ({
                          ...base,
                          backgroundColor: isFocused ? "#1F2937" : "#374151",
                          color: "#E5E7EB",
                        }),
                      }}
                    />
                  </div>
                ))}
              </div>

              <div className="flex justify-end space-x-2 mt-4">
                <button
                  onClick={onClose}
                  className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600">
                  Cancel
                </button>
                <button
                  onClick={handleSave}
                  className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
                  Save Settings
                </button>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}
