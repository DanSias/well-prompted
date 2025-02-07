export interface promptType {
  name: string;
  path: string;
}

const promptTypes: promptType[] = [
  { name: "Code Generation", path: "/prompts/code-generation" },
  { name: "Debugging & Error Resolution", path: "/prompts/debugging" },
  { name: "Code Refactoring", path: "/prompts/refactoring" },
  { name: "Learning & Research", path: "/prompts/learning" },
  { name: "Automation & Testing", path: "/prompts/automation" },
  { name: "Build Custom Prompt", path: "/prompts/custom" },
];

export default promptTypes;
