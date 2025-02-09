/**
 * /src/constants/promptUseCases.ts
 *
 * This file defines the configuration for different AI prompt use cases
 * (e.g., code generation, debugging, learning). Each use case includes form
 * elements, templates, and additional guidance for generating structured AI prompts.
 *
 * Usage:
 * - Imported by /app/prompts/[slug]/page.tsx to dynamically render forms based on the selected prompt type.
 * - Provides structured templates and guidance for optimal LLM responses.
 */

import {
  codeTypeOptions,
  languageOptions,
  frameworkOptions,
  testingFrameworkOptions,
  learningStyleOptions,
  errorResolutionOptions,
  optimizationOptions,
  automationToolsOptions,
} from "@/constants/settingsOptions";

interface SelectOption {
  value: string;
  label: string;
}

export interface FormElement {
  id: string;
  name: string;
  type: "text" | "textarea";
  description: string;
  sentence: string;
  options?: Array<SelectOption>;
}

export interface PromptUseCase {
  id: string;
  headline: string;
  description: string;
  formElements: FormElement[];
  promptTemplate: string;
  additionalGuidance?: string;
  options?: string;
  defaultCodeType?: string;
}

const promptUseCases: PromptUseCase[] = [
  {
    id: "code-generation",
    headline: "Code Generation & Boilerplate Creation",
    description:
      "Generate structured AI prompts to quickly create reusable code snippets, components, or entire project boilerplates, reducing development time.",
    formElements: [
      {
        id: "code_type",
        name: "Code Type",
        type: "text",
        description: "Select the type of code you'd like to generate.",
        sentence: "Generate a {code_type}",
        options: codeTypeOptions,
      },
      {
        id: "programming_language",
        name: "Programming Language",
        type: "text",
        description:
          "Enter the programming language you want to generate code for.",
        sentence: "Generate a {programming_language} function",
        options: languageOptions,
      },
      {
        id: "framework_library",
        name: "Framework/Library",
        type: "text",
        description: "Specify the framework or library if applicable.",
        sentence: "using {framework_library}",
        options: frameworkOptions,
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
    additionalGuidance: `
Consider:
1. Code quality and adherence to best practices for **{programming_language}** and **{framework_library}**.
2. Handle **error scenarios** and **edge cases** gracefully.
3. Optimize for **performance** and **readability**, ensuring maintainable code.
4. Ensure the code is **modular** and follows the **principles of clean architecture** where applicable.

Instructions for the output:
- Provide the **complete code** necessary to implement the functionality.
- **Minimize unnecessary comments** and prose, but include comments where they enhance clarity.
- Avoid adding **boilerplate code** unless it is essential to understanding the implementation.
- If existing code needs to be modified, **only show the relevant parts** and use comments to indicate where the code integrates.
- Ensure the output is **easy to copy and paste** into a project.
- **Consider alternative solutions** or optimizations to achieve the same result.
    `,
    defaultCodeType: "Function",
  },
  {
    id: "debugging",
    headline: "Debugging & Error Resolution",
    description:
      "Craft prompts that help AI analyze errors, logs, and stack traces, providing solutions, explanations, and best practices to resolve issues faster.",
    formElements: [
      {
        id: "debugging_style",
        name: "Debugging Style",
        type: "text",
        description: "How would you like to debug this error.",
        sentence: "Provide error resolution in this style: {error_message}",
        options: errorResolutionOptions,
      },
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
    additionalGuidance: `
Consider:
1. Code quality and adherence to best practices for {programming_language} and {framework_library}.
2. Identify potential bugs, logical errors, and edge cases that may affect functionality.
3. Suggest performance optimizations where applicable.
4. Ensure the code is readable and maintainable, with concise comments where necessary.

Instructions for the output:
- Provide a brief explanation of the identified issue.
- Suggest specific code modifications to fix the problem.
- Only show the relevant parts of the code that need changes. Use comments to represent unmodified sections.
- Minimize unnecessary prose, comments, and empty lines to make the output easy to copy and paste.
- If multiple solutions are possible, briefly mention alternative approaches.
    `,
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
        options: optimizationOptions,
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
    additionalGuidance: `
Consider:
1. Refactor the code to improve **{performance_goal}** while maintaining functionality.
2. Ensure the refactored code adheres to best practices for **{programming_language}** and **{framework_library}**.
3. Enhance **readability** and **maintainability** according to the provided preferences.
4. Remove unnecessary complexity, optimize for performance, and reduce technical debt.

Instructions for the output:
- Only show the refactored parts of the code and use comments to indicate where changes were made.
- Minimize unnecessary comments and avoid verbose explanations unless they clarify complex refactoring steps.
- Ensure the refactored code is modular and easy to extend or modify in the future.
- Highlight any potential side effects or areas where additional testing may be needed.
    `,
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
        options: learningStyleOptions,
      },
    ],
    promptTemplate:
      "{topic_of_interest} {current_knowledge_level} {preferred_learning_style}",
    additionalGuidance: `
Consider:
1. Tailor explanations to your **{current_knowledge_level}** and **{preferred_learning_style}**.
2. Break down complex concepts into **simpler components** or analogies when possible.
3. Provide **real-world examples** or practical applications of **{topic_of_interest}**.
4. Highlight **common pitfalls** or misconceptions related to **{topic_of_interest}**.

Instructions for the output:
- Structure the explanation clearly with **headings** and **bullet points** for easy comprehension.
- Minimize unnecessary technical jargon unless explicitly required.
- Provide concise, focused explanations, and avoid overwhelming with excessive detail unless requested.
- If applicable, suggest **further resources** (e.g., documentation, tutorials) for deeper learning.
      `,
  },
  {
    id: "testing",
    headline: "Test Generation",
    description:
      "Generate comprehensive and efficient test scripts for your code, ensuring functionality, performance, and reliability.",
    formElements: [
      {
        id: "testing_framework",
        name: "Testing Framework",
        type: "text",
        description:
          "Specify the testing framework you'd like to use (e.g., Jest, Mocha, Cypress).",
        sentence: "Use {testing_framework} for testing.",
        options: testingFrameworkOptions,
      },
      {
        id: "code_to_test",
        name: "Code to Test",
        type: "textarea",
        description:
          "Provide the code snippet or function you want to create tests for.",
        sentence: "Write tests for the following code: {code_to_test}",
      },
      {
        id: "expected_behavior",
        name: "Expected Behavior",
        type: "textarea",
        description:
          "Describe the expected behavior and outcomes the tests should validate.",
        sentence: "Ensure the code behaves as expected: {expected_behavior}",
      },
      {
        id: "edge_cases",
        name: "Edge Cases",
        type: "textarea",
        description:
          "List any edge cases or unusual scenarios you want the tests to cover.",
        sentence: "Include tests for these edge cases: {edge_cases}",
      },
    ],
    promptTemplate:
      "{testing_framework} {code_to_test} {expected_behavior} {edge_cases}",
    additionalGuidance: `
Consider:
1. Write tests that cover **typical use cases** and **edge cases** for the provided code.
2. Ensure the tests are compatible with **{testing_framework}** and follow best practices for **{programming_language}** and **{framework_library}**.
3. Include tests for **error handling**, unexpected inputs, and potential failure scenarios.
4. Focus on **maintainable**, **readable**, and **efficient** test structures.

Instructions for the output:
- Provide **unit tests** that are modular and easy to expand.
- Include **clear assertions** and avoid redundant tests.
- Use **mocking** or **stubbing** where necessary to isolate functionality.
- Only include the test code. Avoid verbose explanations unless they clarify complex testing scenarios.
- Ensure the output is **easy to copy and paste** into a test suite.
      `,
  },
  {
    id: "ci-cd-automation",
    headline: "CI/CD Pipeline Automation",
    description:
      "Generate prompts to automate build, test, and deployment workflows using popular CI/CD tools like GitHub Actions, Jenkins, and Docker.",
    formElements: [
      {
        id: "automation_tool",
        name: "Automation Tool",
        type: "text",
        options: automationToolsOptions,
        description: "Select the CI/CD tool you'd like to use for automation.",
        sentence: "Set up a CI/CD pipeline using {automation_tool}",
      },
      {
        id: "project_type",
        name: "Project Type",
        type: "text",
        description:
          "Specify the type of project (e.g., Node.js, Python, Docker).",
        sentence: "for a {project_type} project",
      },
      {
        id: "testing_requirements",
        name: "Testing Requirements",
        type: "text",
        options: testingFrameworkOptions,
        description:
          "Select or specify the testing framework you want to integrate.",
        sentence: "Include tests using {testing_requirements}",
      },
      {
        id: "optimization_focus",
        name: "Optimization Focus",
        type: "text",
        options: optimizationOptions,
        description: "Define the focus for optimizing the CI/CD pipeline.",
        sentence: "Optimize the pipeline for {optimization_focus}",
      },
    ],
    promptTemplate:
      "Set up a CI/CD pipeline using {automation_tool} for a {project_type} project. Include tests using {testing_requirements}. Optimize the pipeline for {optimization_focus}.",
    additionalGuidance: `
Consider:
1. Ensure the pipeline automates the **build**, **test**, and **deployment** stages efficiently using **{automation_tool}**.
2. Integrate **{testing_requirements}** to run tests during the CI process and prevent faulty deployments.
3. Optimize the workflow for **{optimization_focus}** by minimizing build times and leveraging caching where possible.
4. Ensure the pipeline supports the **{project_type}** environment, handling dependencies and environment variables correctly.
5. Include proper **error handling** in case of build failures, and set up **notifications** for failed jobs.

Instructions for the output:
- Provide the complete **CI/CD pipeline configuration** code (e.g., YAML for GitHub Actions, Jenkinsfile for Jenkins).
- Minimize unnecessary comments but include concise explanations where the logic is complex.
- Use **best practices** for the selected automation tool, ensuring modular and maintainable workflows.
- If multiple solutions are possible, suggest the most efficient one.
- Ensure the output is **easy to copy and paste** into a pipeline configuration file.
`,
  },
];

export default promptUseCases;
