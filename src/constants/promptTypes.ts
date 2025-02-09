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
} from "react-icons/fa";
import { IconType } from "react-icons";
import { HiOutlineSparkles } from "react-icons/hi";

export interface promptType {
  name: string;
  path: string;
  icon: IconType;
  description?: string;
}

const promptTypes: promptType[] = [
  {
    name: "Code Generation",
    path: "/prompts/code-generation",
    icon: FaCode,
    description: "Generate reusable code snippets and boilerplate code.",
  },
  {
    name: "Debugging & Errors",
    path: "/prompts/debugging",
    icon: FaBug,
    description: "Identify and fix errors in your code.",
  },
  {
    name: "Code Refactoring",
    path: "/prompts/refactoring",
    icon: FaTools,
    description:
      "Improve the structure of existing code without changing its behavior.",
  },
  {
    name: "Learning & Research",
    path: "/prompts/learning",
    icon: FaGraduationCap,
    description: "Learn new technologies, frameworks, and concepts.",
  },
  {
    name: "Testing",
    path: "/prompts/testing",
    icon: FaRobot,
    description: "Generate comprehensive test cases for your code.",
  },
  {
    name: "CI/CD Automation",
    path: "/prompts/ci-cd-automation",
    icon: FaCogs,
    description:
      "Automate build, test, and deployment workflows using CI/CD tools.",
  },
  {
    name: "Prompt Enhancements",
    path: "/prompts/enhancements",
    icon: HiOutlineSparkles,
    description: "Improve LLM-generated prompts for better results.",
  },
];

export default promptTypes;
