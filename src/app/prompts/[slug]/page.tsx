"use client";

import { useParams } from "next/navigation";
import { useState } from "react";

const promptUseCases = [
  {
    id: "code-generation",
    headline: "Code Generation & Boilerplate Creation",
    description:
      "Generate structured AI prompts to quickly create reusable code snippets, components, or entire project boilerplates, reducing development time.",
    formElements: [
      "Programming Language",
      "Framework/Library",
      "Function Purpose",
      "Expected Output",
    ],
    promptTemplate:
      "Generate a {language} function using {framework} that performs {purpose}. Output should match {expected_output}.",
  },
  {
    id: "debugging",
    headline: "Debugging & Error Resolution",
    description:
      "Craft prompts that help AI analyze errors, logs, and stack traces, providing solutions, explanations, and best practices to resolve issues faster.",
    formElements: [
      "Error Message",
      "Code Snippet",
      "Stack Trace",
      "Expected Behavior",
    ],
    promptTemplate:
      "Analyze this error: {error_message} in the following code: {code_snippet}. Stack trace: {stack_trace}. The expected behavior is {expected_behavior}.",
  },
  {
    id: "refactoring",
    headline: "Code Refactoring & Optimization",
    description:
      "Improve your codebase with AI-driven refactoring suggestions, enhancing performance, readability, and maintainability while reducing technical debt.",
    formElements: [
      "Code Snippet",
      "Performance Goal",
      "Readability Preferences",
    ],
    promptTemplate:
      "Refactor the following code: {code_snippet} to improve {performance_goal}. Ensure readability and maintainability.",
  },
  {
    id: "learning",
    headline: "Learning & Staying Updated on New Technologies",
    description:
      "Use AI to summarize documentation, compare technologies, and stay informed about new frameworks, libraries, and best practices in software development.",
    formElements: ["Technology Name", "Comparison Technology", "Learning Goal"],
    promptTemplate:
      "Explain {technology_name} in comparison to {comparison_technology}. Focus on {learning_goal}.",
  },
  {
    id: "automation",
    headline: "Automating Repetitive Tasks & Writing Tests",
    description:
      "Leverage AI to generate scripts, automate deployments, and create unit or integration tests, streamlining your development workflow.",
    formElements: [
      "Task to Automate",
      "Script Language",
      "Expected Automation Outcome",
    ],
    promptTemplate:
      "Create a {script_language} script to automate {task_to_automate}. The expected outcome is {expected_automation_outcome}.",
  },
];

export default function PromptPage() {
  const params = useParams();
  const promptType = promptUseCases.find((p) => p.id === params?.slug) || null;
  const [formData, setFormData] = useState({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
        <form className="mt-6 w-full max-w-lg">
          {promptType.formElements.map((element) => (
            <div key={element} className="mb-4">
              <label className="block text-gray-300 mb-2">{element}</label>
              <input
                type="text"
                name={element.toLowerCase().replace(/ /g, "_")}
                onChange={handleChange}
                className="w-full p-2 bg-gray-800 text-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
            </div>
          ))}
          <button
            type="submit"
            className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Generate Prompt
          </button>
        </form>
      )}
    </div>
  );
}
