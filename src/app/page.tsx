"use client";

import Link from "next/link";
import promptTypes from "@/constants/promptTypes";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 p-6">
      <h1 className="text-6xl font-bold text-center text-gray-900 dark:text-sky-100 mb-6">
        Prompt Smarter. Code Better.
      </h1>
      <p className="text-lg text-gray-700 dark:text-sky-100 mb-10 text-center max-w-2xl">
        Well Prompted helps developers craft clear, effective prompts for any
        coding task. From debugging to automation, get ready-to-run results
        faster, with less frustration.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
        {promptTypes.map((prompt) => (
          <Link key={prompt.path} href={prompt.path}>
            <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md transition-all duration-200 cursor-pointer border border-zinc-700 hover:border-sky-400 dark:hover:border-sky-500 h-full flex flex-col justify-start gap-4">
              <div className="flex items-center gap-3">
                <div className="text-3xl text-sky-500 dark:text-sky-200">
                  {<prompt.icon />}
                </div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-sky-100">
                  {prompt.name}
                </h2>
              </div>
              <p className="text-sm text-gray-600 dark:text-sky-100">
                {prompt.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
