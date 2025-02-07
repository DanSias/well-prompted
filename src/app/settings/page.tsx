"use client";

import React, { useState, useEffect } from "react";
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

export default function UserSettings() {
  const [settings, setSettings] = useState(() => {
    const savedSettings = localStorage.getItem("userSettings");
    return savedSettings ? JSON.parse(savedSettings) : defaultSettings;
  });

  useEffect(() => {
    localStorage.setItem("userSettings", JSON.stringify(settings));
  }, [settings]);

  //   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //     const { name, value } = e.target;
  //     setSettings({ ...settings, [name]: value });
  //   };

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
  };

  return (
    <div className="p-4 bg-gray-800 text-gray-200 rounded-md w-full max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4">User Settings</h2>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-300">
            Preferred Programming Language
          </label>
          <CreatableSelect
            name="preferredProgrammingLanguage"
            value={
              languageOptions.find(
                (option) =>
                  option.value === settings.preferredProgrammingLanguage
              ) || {
                value: settings.preferredProgrammingLanguage,
                label: settings.preferredProgrammingLanguage,
              }
            }
            onChange={handleSelectChange}
            options={languageOptions}
            placeholder="Select or type a language"
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
              option: (base, { isFocused }) => ({
                ...base,
                backgroundColor: isFocused ? "#1F2937" : "#374151",
                color: "#E5E7EB",
              }),
            }}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300">
            Favorite Framework/Library
          </label>
          <CreatableSelect
            name="favoriteFramework"
            value={
              frameworkOptions.find(
                (option) => option.value === settings.favoriteFramework
              ) || {
                value: settings.favoriteFramework,
                label: settings.favoriteFramework,
              }
            }
            onChange={handleSelectChange}
            options={frameworkOptions}
            placeholder="Select or type a framework"
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
              option: (base, { isFocused }) => ({
                ...base,
                backgroundColor: isFocused ? "#1F2937" : "#374151",
                color: "#E5E7EB",
              }),
            }}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300">
            Preferred Testing Framework
          </label>
          <CreatableSelect
            name="preferredTestingFramework"
            value={
              testingFrameworkOptions.find(
                (option) => option.value === settings.preferredTestingFramework
              ) || {
                value: settings.preferredTestingFramework,
                label: settings.preferredTestingFramework,
              }
            }
            onChange={handleSelectChange}
            options={testingFrameworkOptions}
            placeholder="Select or type a testing framework"
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
              option: (base, { isFocused }) => ({
                ...base,
                backgroundColor: isFocused ? "#1F2937" : "#374151",
                color: "#E5E7EB",
              }),
            }}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300">
            Preferred Learning Style
          </label>
          <CreatableSelect
            name="learningStyle"
            value={
              learningStyleOptions.find(
                (option) => option.value === settings.learningStyle
              ) || {
                value: settings.learningStyle,
                label: settings.learningStyle,
              }
            }
            onChange={handleSelectChange}
            options={learningStyleOptions}
            placeholder="Select or type a learning style"
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
              option: (base, { isFocused }) => ({
                ...base,
                backgroundColor: isFocused ? "#1F2937" : "#374151",
                color: "#E5E7EB",
              }),
            }}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300">
            Error Resolution Approach
          </label>
          <CreatableSelect
            name="errorResolutionApproach"
            value={
              errorResolutionOptions.find(
                (option) => option.value === settings.errorResolutionApproach
              ) || {
                value: settings.errorResolutionApproach,
                label: settings.errorResolutionApproach,
              }
            }
            onChange={handleSelectChange}
            options={errorResolutionOptions}
            placeholder="Select or type an error resolution approach"
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
              option: (base, { isFocused }) => ({
                ...base,
                backgroundColor: isFocused ? "#1F2937" : "#374151",
                color: "#E5E7EB",
              }),
            }}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300">
            Performance Optimization Focus
          </label>
          <CreatableSelect
            name="optimizationFocus"
            value={
              optimizationOptions.find(
                (option) => option.value === settings.optimizationFocus
              ) || {
                value: settings.optimizationFocus,
                label: settings.optimizationFocus,
              }
            }
            onChange={handleSelectChange}
            options={optimizationOptions}
            placeholder="Select or type an optimization focus"
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
              option: (base, { isFocused }) => ({
                ...base,
                backgroundColor: isFocused ? "#1F2937" : "#374151",
                color: "#E5E7EB",
              }),
            }}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300">
            Preferred Automation Tools
          </label>
          <CreatableSelect
            name="automationTools"
            value={
              automationToolsOptions.find(
                (option) => option.value === settings.automationTools
              ) || {
                value: settings.automationTools,
                label: settings.automationTools,
              }
            }
            onChange={handleSelectChange}
            options={automationToolsOptions}
            placeholder="Select or type automation tools"
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
              option: (base, { isFocused }) => ({
                ...base,
                backgroundColor: isFocused ? "#1F2937" : "#374151",
                color: "#E5E7EB",
              }),
            }}
          />
        </div>
      </div>

      <button
        onClick={handleSave}
        className="mt-6 w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
        Save Settings
      </button>
    </div>
  );
}
