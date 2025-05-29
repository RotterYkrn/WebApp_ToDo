# Tech Context: 1Day ToDo Application

## Technologies Used

- **Frontend:**
    - Vanilla JavaScript (ESM)
    - JSDoc for documentation and type hinting
    - TypeScript (tsc) for type checking
    - Vite for bundling and development server
    - Biome for code formatting and linting
- **Backend:**
    - Vanilla JavaScript (ESM)
    - JSDoc for documentation and type hinting
    - TypeScript (tsc) for type checking
    - Express for the web server framework
- **Database:**
    - MySQL
    - Prisma as ORM for database interaction and migrations

## Development Setup

- **Containerization:** Docker and Docker Compose are used to manage the development environment, including the database, backend, and frontend services.
- **Code Formatting/Linting:** Biome is configured for the frontend. ESLint is configured for the backend. Prettier is also present in the repository. Need to ensure consistent configuration and usage.
- **Type Checking:** TypeScript compiler (tsc) is used in both frontend and backend for static type analysis based on JSDoc annotations.

## Technical Constraints

- Adherence to vanilla JavaScript, avoiding major frontend frameworks like React, Vue, or Angular.
- Use of ESM for module system.
- Strict type checking using tsc with JSDoc.
- Use of Prisma for all database interactions.

## Dependencies

- Dependencies are managed via `package.json` and `package-lock.json` in both `client/` and `server/` directories.
- Docker Compose manages service dependencies (e.g., backend depends on database).

## Tool Usage Patterns

- **Development Server:** Vite for frontend development (`client/`).
- **Build:** Vite for frontend production build (`client/`). tsc for type checking in both (`client/src/scripts/` and `server/src/`).
- **Database Migrations:** Prisma CLI (`server/`).
- **Code Formatting:** Biome (`client/`), ESLint (`server/`), Prettier (repository root). Need to clarify the primary formatter/linter to use for consistency. `.clinerules` mentions Biome for frontend and ESLint for backend. Prettier config exists at the root.
- **Container Management:** Docker Compose (`docker-compose.yaml`).
