/**
 * /src/constants/settingsOptions.ts
 *
 * This file defines static options for various user preferences, including
 * programming languages, frameworks, testing tools, and learning styles.
 * These options are used to populate select dropdowns in user settings and
 * form fields across the app.
 *
 * Usage:
 * - Used in /app/prompts/[slug]/page.tsx to provide predefined options for form inputs.
 * - Auto-fills form fields based on saved user settings from localStorage.
 */

export const codeTypeOptions = [
  { value: "function", label: "Function" },
  { value: "component", label: "Component" },
  { value: "class", label: "Class" },
  { value: "API endpoint", label: "API Endpoint" },
  { value: "hook", label: "Hook" },
  { value: "utility", label: "Utility Module" },
  { value: "test", label: "Test Case" },
  { value: "database_model", label: "Database Model" },
];

export const ormOptions = [
  {
    value: "Prisma",
    label: "Prisma (TypeScript)",
  },
  {
    value: "Sequelize",
    label: "Sequelize (Node.js)",
  },
  {
    value: "TypeORM",
    label: "TypeORM (Node.js)",
  },
  {
    value: "Mongoose",
    label: "Mongoose (MongoDB)",
  },
  {
    value: "Drizzle",
    label: "Drizzle ORM (TypeScript-first)",
  },
  {
    value: "Objection",
    label: "Objection.js (Knex-based)",
  },
  {
    value: "SQLAlchemy",
    label: "SQLAlchemy (Python)",
  },
  {
    value: "GORM",
    label: "GORM (Go)",
  },
  {
    value: "Entity Framework",
    label: "Entity Framework (C#)",
  },
  {
    value: "Raw SQL",
    label: "Raw SQL (no ORM)",
  },
];

export const languageOptions = [
  { value: "JavaScript", label: "JavaScript" },
  { value: "TypeScript", label: "TypeScript" },
  { value: "Python", label: "Python" },
  { value: "Java", label: "Java" },
  { value: "C#", label: "C#" },
  { value: "Ruby", label: "Ruby" },
  { value: "PHP", label: "PHP" },
  { value: "Go", label: "Go" },
  { value: "Rust", label: "Rust" },
  { value: "C++", label: "C++" },
  { value: "Kotlin", label: "Kotlin" },
  { value: "Swift", label: "Swift" },
];

export const frameworkOptions = [
  { value: "React", label: "React" },
  { value: "Next.js", label: "Next.js" },
  { value: "Vue", label: "Vue" },
  { value: "Nuxt.js", label: "Nuxt.js" },
  { value: "Angular", label: "Angular" },
  { value: "Svelte", label: "Svelte" },
  { value: "SvelteKit", label: "SvelteKit" },
  { value: "Express.js", label: "Express.js" },
  { value: "NestJS", label: "NestJS" },
  { value: "Django", label: "Django" },
  { value: "Flask", label: "Flask" },
  { value: "Ruby on Rails", label: "Ruby on Rails" },
  { value: "Laravel", label: "Laravel" },
  { value: "Spring Boot", label: "Spring Boot" },
  { value: "ASP.NET Core", label: "ASP.NET Core" },
];

export const backendLanguageOptions = [
  { value: "JavaScript", label: "JavaScript" },
  { value: "TypeScript", label: "TypeScript" },
  { value: "Python", label: "Python" },
  { value: "Java", label: "Java" },
  { value: "C#", label: "C#" },
  { value: "Ruby", label: "Ruby" },
  { value: "PHP", label: "PHP" },
  { value: "Go", label: "Go" },
  { value: "Rust", label: "Rust" },
];

export const backendFrameworkOptions = [
  { value: "Express.js", label: "Express.js" },
  { value: "NestJS", label: "NestJS" },
  { value: "FastAPI", label: "FastAPI" },
  { value: "Django", label: "Django" },
  { value: "Flask", label: "Flask" },
  { value: "Ruby on Rails", label: "Ruby on Rails" },
  { value: "Laravel", label: "Laravel" },
  { value: "Spring Boot", label: "Spring Boot" },
  { value: "ASP.NET Core", label: "ASP.NET Core" },
];

export const databaseOptions = [
  { value: "mock database", label: "Mock Database" },
  { value: "PostgreSQL (Prisma)", label: "PostgreSQL (Prisma)" },
  { value: "PostgreSQL (Sequelize)", label: "PostgreSQL (Sequelize)" },
  { value: "MongoDB (Mongoose)", label: "MongoDB (Mongoose)" },
  { value: "Django ORM", label: "Django ORM" },
  { value: "SQLAlchemy", label: "SQLAlchemy (Python)" },
  { value: "ActiveRecord", label: "ActiveRecord (Rails)" },
  { value: "Eloquent", label: "Eloquent (Laravel)" },
  { value: "Spring Data JPA", label: "Spring Data JPA (Java)" },
  { value: "Entity Framework", label: "Entity Framework (C#)" },
  { value: "No ORM", label: "No ORM (raw queries)" },
];

export const testingFrameworkOptions = [
  { value: "Jest", label: "Jest" },
  { value: "Mocha", label: "Mocha" },
  { value: "Chai", label: "Chai" },
  { value: "Cypress", label: "Cypress" },
  { value: "Enzyme", label: "Enzyme" },
  { value: "Vitest", label: "Vitest" },
  { value: "Playwright", label: "Playwright" },
  { value: "JUnit", label: "JUnit" },
  { value: "RSpec", label: "RSpec" },
];

export const learningStyleOptions = [
  {
    value: "quick-summary",
    label: "Quick Summary",
  },
  {
    value: "step-by-step-guide",
    label: "Step-by-Step Guide",
  },
  {
    value: "hands-on-tutorial",
    label: "Hands-On Tutorial",
  },
  {
    value: "comparison-based",
    label: "Compare to Similar Technologies",
  },
  {
    value: "real-world-examples",
    label: "Real-World Examples",
  },
  {
    value: "code-focused",
    label: "Code-Focused Learning",
  },
  {
    value: "theory-explained",
    label: "Concepts & Theory First",
  },
  {
    value: "video-friendly",
    label: "Recommend Video-Based Resources",
  },
  {
    value: "reading-preferred",
    label: "Recommend Reading Material",
  },
];

export const experienceLevelOptions = [
  {
    value: "beginner",
    label: "Beginner",
  },
  {
    value: "junior",
    label: "Junior Developer",
  },
  {
    value: "mid",
    label: "Mid-Level Developer",
  },
  {
    value: "senior",
    label: "Senior Developer",
  },
  {
    value: "lead",
    label: "Tech Lead / Staff Engineer",
  },
  {
    value: "architect",
    label: "Architect / Systems Designer",
  },
  {
    value: "career-switcher",
    label: "Career Switcher",
  },
];

export const errorResolutionOptions = [
  { value: "Step-by-step debugging", label: "Step-by-step debugging" },
  { value: "Rubber duck debugging", label: "Rubber duck debugging" },
  { value: "Consulting documentation", label: "Consulting documentation" },
  {
    value: "Searching online (StackOverflow)",
    label: "Searching online (StackOverflow)",
  },
  { value: "Using logging tools", label: "Using logging tools" },
];

export const optimizationOptions = [
  { value: "Reduce memory usage", label: "Reduce memory usage" },
  { value: "Improve load times", label: "Improve load times" },
  { value: "Optimize database queries", label: "Optimize database queries" },
  { value: "Reduce API response time", label: "Reduce API response time" },
  { value: "Enhance code readability", label: "Enhance code readability" },
];

export const automationToolsOptions = [
  { value: "GitHub Actions", label: "GitHub Actions" },
  { value: "Jenkins", label: "Jenkins" },
  { value: "CircleCI", label: "CircleCI" },
  { value: "Travis CI", label: "Travis CI" },
  { value: "GitLab CI", label: "GitLab CI" },
  { value: "Docker", label: "Docker" },
  { value: "Kubernetes", label: "Kubernetes" },
];
