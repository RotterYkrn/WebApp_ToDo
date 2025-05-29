# Progress: 1Day ToDo Application

## What Works

- Basic project directory structure is set up.
- Docker Compose configuration exists for setting up the environment (database, server, client).
- Initial Prisma schema and migrations are present, suggesting database setup has begun.
- Basic server and client entry files (`server/src/server.mjs`, `client/src/scripts/main.mjs`, `client/src/index.html`) exist.
- Code formatting/linting tools (Biome, ESLint, Prettier) are configured, though consistency needs confirmation.
- Memory Bank core files have been initialized.

## What's Left to Build

- **Core Features (based on `docs/document.md`):**
    - Daily Plan creation logic (selecting from lists, adding new).
    - Daily Plan display and reordering functionality.
    - ToDo list management (CRUD, properties).
    - Habit list management (CRUD, properties, auto-include logic).
    - Settings page implementation (general, account).
    - User authentication and authorization.
- **Backend APIs:** Implement endpoints for all frontend data needs.
- **Frontend UI:** Build the user interface components and pages.
- **Database Schema:** Refine and potentially expand the Prisma schema based on detailed requirements.
- **Error Handling:** Implement robust error handling on both client and server.
- **Testing:** Add unit, integration, and potentially end-to-end tests.
- **Documentation:** Further develop project documentation beyond the initial `docs/document.md` and Memory Bank.

## Current Status

The project is in the initial setup phase. The basic structure and core configurations are in place, but the main application logic and UI are yet to be implemented.

## Known Issues

- Consistency of code formatting/linting tools needs to be verified and enforced.
- Detailed requirements for some features (e.g., subtasks in ToDo, specific settings options, authentication flow) need to be fully defined during the planning phase.

## Evolution of Project Decisions

- Initial decision to use vanilla JS, ESM, JSDoc, tsc, Vite, Express, Prisma, MySQL is established.
- Decision to use Docker Compose for environment management is made.
- Decision to initialize Memory Bank for context management has been executed.
