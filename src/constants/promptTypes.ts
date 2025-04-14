/**
 * /src/constants/promptTypes.ts
 *
 * This file defines the navigation structure for different AI prompt use cases
 * (e.g., Code Generation, Debugging, Refactoring). Each prompt type includes
 * metadata such as name, path, icon, and description, which are used for
 * routing and UI rendering.
 *
 * Usage:
 * - Used in the Sidebar and Header components for app navigation.
 * - Determines which form is rendered on the `/prompts/[slug]` dynamic route.
 *
 * Structure:
 * - Each object includes:
 *    - name: Display name in the navigation.
 *    - slug: Unique identifier used in dynamic routing.
 *    - path: URL path for routing.
 *    - icon: Icon to visually represent the prompt type.
 *    - description: Brief overview of what the prompt type does.
 */

import {
  FaCode,
  FaBug,
  FaTools,
  FaGraduationCap,
  FaRobot,
  FaCogs,
  FaDatabase,
  FaBook,
} from "react-icons/fa";
import { HiOutlineSparkles } from "react-icons/hi";
import { FiServer } from "react-icons/fi";
import { IconType } from "react-icons";

export interface PromptType {
  name: string;
  slug: string;
  path: string;
  icon: IconType;
  description: string;
}

const promptTypes: PromptType[] = [
  {
    name: "Code Generation",
    slug: "code-generation",
    path: "/prompts/code-generation",
    icon: FaCode,
    description:
      "Generate reusable code snippets, templates, and boilerplate tailored to your project and tech stack.",
  },
  {
    name: "Database Models",
    slug: "database-models",
    path: "/prompts/database-models",
    icon: FaDatabase,
    description:
      "Design and generate SQL or NoSQL database schemas with field types, relations, and validations included.",
  },
  {
    name: "API Endpoints",
    slug: "api-endpoints",
    path: "/prompts/api-endpoints",
    icon: FiServer,
    description:
      "Generate complete REST API endpoints with validation, error handling, and database integration.",
  },
  {
    name: "Debugging & Errors",
    slug: "debugging",
    path: "/prompts/debugging",
    icon: FaBug,
    description:
      "Diagnose bugs and fix runtime or logical issues using smart, context-aware AI suggestions.",
  },
  {
    name: "Code Refactoring",
    slug: "refactoring",
    path: "/prompts/refactoring",
    icon: FaTools,
    description:
      "Optimize and reorganize your code for clarity, performance, and maintainability without changing functionality.",
  },
  {
    name: "Automated Testing",
    slug: "testing",
    path: "/prompts/testing",
    icon: FaRobot,
    description:
      "Generate unit, integration, and end-to-end tests based on your code and functionality requirements.",
  },
  {
    name: "CI/CD Automation",
    slug: "ci-cd-automation",
    path: "/prompts/ci-cd-automation",
    icon: FaCogs,
    description:
      "Automate build, test, and deployment workflows using modern CI/CD tools and best practices.",
  },
  {
    name: "Documentation Assistant",
    slug: "documentation-assistant",
    path: "/prompts/documentation-assistant",
    icon: FaBook,
    description:
      "Create or refine internal docs, API guides, and usage examples with natural language clarity and accuracy.",
  },
  {
    name: "Learning & Research",
    slug: "learning",
    path: "/prompts/learning",
    icon: FaGraduationCap,
    description:
      "Explore new libraries, frameworks, or languages and get tailored explanations or code examples.",
  },
  {
    name: "Prompt Enhancements",
    slug: "enhancements",
    path: "/prompts/enhancements",
    icon: HiOutlineSparkles,
    description:
      "Improve the clarity, structure, and effectiveness of your AI prompts to get better results every time.",
  },
];

export default promptTypes;
