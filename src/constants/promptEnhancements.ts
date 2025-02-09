/**
 * /src/constants/promptEnhancements.ts
 *
 * This file contains categorized phrases, referred to as "Prompt Enhancements,"
 * that users can copy and append to AI prompts for improved results. These
 * enhancements guide LLMs to refine outputs, focusing on areas like performance,
 * readability, error handling, and more.
 *
 * Usage:
 * - Rendered in the Prompt Enhancements section of the app to allow users to copy
 *   specific refinements.
 * - Provides quick adjustments to enhance LLM-generated code or text.
 *
 * Structure:
 * - Categories include Error Handling, Performance Optimization, Code Readability, etc.
 * - Each category contains an array of phrases for fine-tuning prompt results.
 */

const promptEnhancements = [
  {
    category: "Error Handling & Robustness",
    phrases: [
      "Add error handling for unexpected inputs.",
      "Ensure the code gracefully handles edge cases.",
      "Improve error messages to be more descriptive.",
      "Handle null or undefined values appropriately.",
      "Add try-catch blocks where necessary.",
      "Ensure the code doesn't break on invalid data.",
      "Validate user inputs before processing.",
      "Add fallback values for critical operations.",
      "Log errors to help with debugging.",
      "Ensure timeouts are handled gracefully.",
      "Provide user-friendly error messages.",
      "Handle API failures and retry if necessary.",
    ],
  },
  {
    category: "Performance Optimization",
    phrases: [
      "Optimize the code for better performance.",
      "Reduce unnecessary computations.",
      "Improve the efficiency of loops or iterations.",
      "Use more efficient data structures.",
      "Minimize memory usage.",
      "Speed up API calls or reduce latency.",
      "Avoid redundant API requests.",
      "Implement lazy loading where applicable.",
      "Optimize database queries.",
      "Use caching to store frequently accessed data.",
      "Parallelize independent tasks.",
      "Profile the code to identify bottlenecks.",
    ],
  },
  {
    category: "Code Readability & Maintainability",
    phrases: [
      "Simplify the code for better readability.",
      "Refactor the code to make it more maintainable.",
      "Use more descriptive variable and function names.",
      "Organize the code into smaller, modular functions.",
      "Add comments to explain complex logic.",
      "Ensure consistent formatting and indentation.",
      "Avoid deeply nested structures.",
      "Use clear and concise logic.",
      "Separate concerns using well-defined functions.",
      "Avoid using magic numbers and hardcoded values.",
      "Make use of helper functions to simplify main logic.",
      "Document key components and their responsibilities.",
    ],
  },
  {
    category: "Testing & Validation",
    phrases: [
      "Add unit tests for the main functions.",
      "Include tests for edge cases.",
      "Write integration tests for component interactions.",
      "Add assertions to validate expected outputs.",
      "Ensure error handling is covered by tests.",
      "Mock external dependencies in tests.",
      "Add regression tests to prevent future bugs.",
      "Test for performance under load.",
      "Validate the correctness of asynchronous operations.",
      "Ensure cross-browser compatibility for frontend code.",
      "Include boundary value tests.",
      "Ensure code coverage meets the project standards.",
    ],
  },
  {
    category: "Best Practices & Standards",
    phrases: [
      "Ensure the code follows best practices for {programming_language}.",
      "Avoid using deprecated functions or methods.",
      "Follow consistent naming conventions.",
      "Ensure proper use of design patterns.",
      "Adhere to coding standards and guidelines.",
      "Remove hardcoded values and use constants instead.",
      "Use version control best practices.",
      "Ensure the code is modular and reusable.",
      "Avoid global variables and limit scope appropriately.",
      "Implement proper logging practices.",
      "Ensure secure coding practices are followed.",
      "Avoid side effects in functions unless necessary.",
    ],
  },
  {
    category: "Code Simplification & Refactoring",
    phrases: [
      "Refactor the code to eliminate redundancy.",
      "Simplify nested conditionals.",
      "Remove unnecessary code or variables.",
      "Combine similar functions to reduce duplication.",
      "Use built-in functions where applicable.",
      "Make the code more concise without losing clarity.",
      "Replace verbose loops with more concise alternatives.",
      "Inline trivial functions where appropriate.",
      "Eliminate unused variables and functions.",
      "Ensure consistent use of function parameters.",
      "Use higher-order functions where suitable.",
      "Break large functions into smaller, testable units.",
    ],
  },
  {
    category: "Formatting & Presentation",
    phrases: [
      "Format the code for better readability.",
      "Use consistent indentation.",
      "Align multi-line statements for clarity.",
      "Highlight key parts of the code with comments.",
      "Ensure the code is easy to copy and paste.",
      "Present the code in a clean, organized manner.",
      "Use appropriate whitespace to separate logic.",
      "Ensure consistent use of quotation marks.",
      "Align assignments and declarations where possible.",
      "Group related code logically.",
      "Remove excessive blank lines.",
      "Use descriptive comments sparingly but effectively.",
    ],
  },
  {
    category: "Alternative Solutions & Flexibility",
    phrases: [
      "Suggest an alternative approach to solving the problem.",
      "Consider a more efficient algorithm.",
      "Provide a simpler solution if possible.",
      "Explore different methods to achieve the same result.",
      "Highlight trade-offs between different approaches.",
      "Explain why one solution might be better than another.",
      "Consider using a different data structure.",
      "Propose a solution that improves scalability.",
      "Evaluate both iterative and recursive solutions.",
      "Suggest a library or framework that simplifies the task.",
      "Consider functional programming techniques.",
      "Offer a solution that enhances flexibility and reusability.",
    ],
  },
];

export default promptEnhancements;
