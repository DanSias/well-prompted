export interface FormElement {
  id: string;
  name: string;
  type: "text" | "textarea";
  description: string;
  sentence: string;
}

export interface PromptUseCase {
  id: string;
  headline: string;
  description: string;
  formElements: FormElement[];
  promptTemplate: string;
}

const promptUseCases: PromptUseCase[] = [
  {
    id: "code-generation",
    headline: "Code Generation & Boilerplate Creation",
    description:
      "Generate structured AI prompts to quickly create reusable code snippets, components, or entire project boilerplates, reducing development time.",
    formElements: [
      {
        id: "programming_language",
        name: "Programming Language",
        type: "text",
        description:
          "Enter the programming language you want to generate code for.",
        sentence: "Generate a {programming_language} function",
      },
      {
        id: "framework_library",
        name: "Framework/Library",
        type: "text",
        description: "Specify the framework or library if applicable.",
        sentence: "using {framework_library}",
      },
      {
        id: "function_purpose",
        name: "Function Purpose",
        type: "textarea",
        description: "Describe the purpose of the function in detail.",
        sentence: "that performs {function_purpose}",
      },
      {
        id: "expected_output",
        name: "Expected Output",
        type: "textarea",
        description: "Define what the output of the function should be.",
        sentence: "Output should match {expected_output}",
      },
    ],
    promptTemplate:
      "{programming_language} {framework_library} {function_purpose} {expected_output}",
  },
  {
    id: "debugging",
    headline: "Debugging & Error Resolution",
    description:
      "Craft prompts that help AI analyze errors, logs, and stack traces, providing solutions, explanations, and best practices to resolve issues faster.",
    formElements: [
      {
        id: "error_message",
        name: "Error Message",
        type: "textarea",
        description: "Paste the error message you encountered.",
        sentence: "Analyze this error: {error_message}",
      },
      {
        id: "code_snippet",
        name: "Code Snippet",
        type: "textarea",
        description:
          "Provide the relevant code snippet where the error occurs.",
        sentence: "in the following code: {code_snippet}",
      },
      {
        id: "stack_trace",
        name: "Stack Trace",
        type: "textarea",
        description: "Include the full stack trace if available.",
        sentence: "Stack trace: {stack_trace}",
      },
      {
        id: "expected_behavior",
        name: "Expected Behavior",
        type: "text",
        description: "Describe what you expected the code to do.",
        sentence: "The expected behavior is {expected_behavior}",
      },
    ],
    promptTemplate:
      "{error_message} {code_snippet} {stack_trace} {expected_behavior}",
  },
  {
    id: "refactoring",
    headline: "Code Refactoring & Optimization",
    description:
      "Improve your codebase with AI-driven refactoring suggestions, enhancing performance, readability, and maintainability while reducing technical debt.",
    formElements: [
      {
        id: "code_snippet",
        name: "Code Snippet",
        type: "textarea",
        description: "Enter the code snippet you want to refactor.",
        sentence: "Refactor the following code: {code_snippet}",
      },
      {
        id: "performance_goal",
        name: "Performance Goal",
        type: "text",
        description: "Specify the performance improvement goal.",
        sentence: "to improve {performance_goal}",
      },
      {
        id: "readability_preferences",
        name: "Readability Preferences",
        type: "text",
        description: "Describe any readability or maintainability preferences.",
        sentence: "Ensure readability and maintainability",
      },
    ],
    promptTemplate:
      "{code_snippet} {performance_goal} {readability_preferences}",
  },
  {
    id: "learning",
    headline: "Learning & Research",
    description:
      "Develop prompts that help AI explain new technologies, frameworks, or concepts, aiding continuous learning and research in your field.",
    formElements: [
      {
        id: "topic_of_interest",
        name: "Topic of Interest",
        type: "text",
        description: "Specify the topic or technology you want to learn about.",
        sentence: "Explain {topic_of_interest}",
      },
      {
        id: "current_knowledge_level",
        name: "Current Knowledge Level",
        type: "text",
        description: "Indicate your current knowledge or experience level.",
        sentence:
          "I have {current_knowledge_level} knowledge about this topic.",
      },
      {
        id: "preferred_learning_style",
        name: "Preferred Learning Style",
        type: "text",
        description:
          "Describe how you prefer to learn (e.g., examples, theory).",
        sentence: "Prefer learning through {preferred_learning_style}",
      },
    ],
    promptTemplate:
      "{topic_of_interest} {current_knowledge_level} {preferred_learning_style}",
  },
  {
    id: "automation",
    headline: "Automation & Testing",
    description:
      "Automate repetitive tasks and generate testing scripts using AI, improving efficiency and reducing the risk of human error.",
    formElements: [
      {
        id: "task_to_automate",
        name: "Task to Automate",
        type: "textarea",
        description: "Describe the task or process you want to automate.",
        sentence: "Automate the following task: {task_to_automate}",
      },
      {
        id: "testing_requirements",
        name: "Testing Requirements",
        type: "textarea",
        description: "Specify any testing requirements or frameworks.",
        sentence: "Include tests using {testing_requirements}",
      },
      {
        id: "expected_outcome",
        name: "Expected Outcome",
        type: "textarea",
        description: "Define the expected outcome of the automation.",
        sentence: "The expected outcome is {expected_outcome}",
      },
    ],
    promptTemplate:
      "{task_to_automate} {testing_requirements} {expected_outcome}",
  },
];

export default promptUseCases;
