# Well Prompted

**Well Prompted** is a developer-friendly tool designed to help developers craft precise, structured AI prompts for coding workflows. This project streamlines prompt creation, ensuring better results for tasks like code generation, debugging, optimization, and automation.

## Features

- **Structured Prompt Forms** – Generate prompts tailored to your development needs.
- **Technology-Aware** – Customize prompts based on your tech stack (e.g., TypeScript, React, Node.js).
- **Project Organization** – Manage and store prompts across different projects.
- **Easy Copy & Use** – Quickly copy generated prompts for use in AI tools.
- **Future Integration** – Plans for direct API integration with AI models.

## Use Cases

The first iteration focuses on five key developer workflows:

1. **Code Generation & Boilerplate Creation**
2. **Debugging & Error Resolution**
3. **Code Refactoring & Optimization**
4. **Learning & Staying Updated on New Technologies**
5. **Automating Repetitive Tasks & Writing Tests**

## Tech Stack

- **Frontend:** Next.js with TypeScript
- **Backend:** Node.js with Express
- **Database:** PostgreSQL (managed via Prisma)
- **Styling:** Tailwind CSS

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v20.x or later)
- [PostgreSQL](https://www.postgresql.org/)
- [Git](https://git-scm.com/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/well-prompted.git
   cd well-prompted
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:

   - Copy `.env.example` to `.env` and configure your database connection.

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Access the app at [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` – Start the development server.
- `npm run build` – Build the project for production.
- `npm run start` – Start the production server.
- `npm run lint` – Run ESLint for code quality checks.

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Open a Pull Request.

## License

This project is licensed under the [MIT License](LICENSE).

---
