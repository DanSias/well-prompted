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

export default promptUseCases;
