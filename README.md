# Well Prompted

**Well Prompted** is a developer-friendly tool designed to streamline the creation, management, and organization of AI prompts for coding workflows. This project aims to simplify repetitive development tasks and boost productivity by providing structured prompt templates.

## Features

- **Organize Projects**: Manage prompts across different projects with tailored settings.
- **Prompt Templates**: Built-in templates for common tasks like code requests, reviews, optimization, and documentation.
- **Technology-Aware**: Supports customization based on language and tech stack (e.g., TypeScript, React, Node.js).
- **Copy Simplicity**: Generate prompts and copy them for use in your favorite AI tools.
- **Future Integration**: Plans to integrate directly with AI APIs for seamless results.

## Tech Stack

- **Frontend**: React.js with TypeScript
- **Backend**: Node.js with Express
- **Database**: PostgreSQL (managed via Prisma)
- **Styling**: Tailwind CSS

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
   npm run install-all
   ```

3. Set up the environment variables:
   - Copy `.env.example` to `.env` and configure your database connection.

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Access the app at [http://localhost:5173](http://localhost:5173).

## Scripts

- `npm run dev`: Start both client and server in development mode.
- `npm run client`: Start the React frontend.
- `npm run server`: Start the Express backend.
- `npm run test`: Run tests for both frontend and backend.
- `npm run install-all`: Install dependencies for client and server.

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

Feel free to reach out with feedback or ideas to improve **Well Prompted**!
