"use client";

import Link from "next/link";

const promptTypes = [
  { name: "Code Generation", path: "/prompts/code-generation" },
  { name: "Debugging & Error Resolution", path: "/prompts/debugging" },
  { name: "Code Refactoring", path: "/prompts/refactoring" },
  { name: "Learning & Research", path: "/prompts/learning" },
  { name: "Automation & Testing", path: "/prompts/automation" },
  { name: "Build Custom Prompt", path: "/prompts/custom" },
];

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-slate-900 p-6">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-sky-100 mb-6">
        Welcome to Well Prompted
      </h1>
      <p className="text-lg text-gray-700 dark:text-sky-200 mb-8 text-center max-w-2xl">
        Well Prompted helps developers craft structured AI prompts for various
        coding tasks. Select a category below to get started.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl">
        {promptTypes.map((prompt) => (
          <Link key={prompt.path} href={prompt.path}>
            <div className="p-6 bg-white dark:bg-zinc-800 rounded-xl shadow-md hover:bg-gray-200 dark:hover:bg-zinc-700 transition cursor-pointer border border-zinc-700 ">
              <h2 className="text-xl font-semibold text-gray-300">
                {prompt.name}
              </h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
