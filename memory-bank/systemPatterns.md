# System Patterns: 1Day ToDo Application

## Architecture

The application follows a client-server architecture.
- **Client:** Handles the user interface and interacts with the server via APIs.
- **Server:** Manages data persistence, business logic, and provides APIs for the client.
- **Database:** Stores application data.

## Key Technical Decisions

- **Frontend:** Vanilla JavaScript with ESM, JSDoc, and tsc for type checking. Vite is used for bundling and development server. Biome for formatting.
- **Backend:** Vanilla JavaScript with ESM, JSDoc, and tsc for type checking. Express is used as the web framework.
- **Database:** MySQL.
- **ORM:** Prisma is used for database access and management (migrations, schema definition).

## Design Patterns

- **Frontend:** Component-based structure (implied by modern web development practices, though specific framework not used).
- **Backend:** RESTful API design for client-server communication.

## Component Relationships

- The Client interacts with the Server via HTTP requests to fetch, create, update, and delete data related to ToDos, Habits, Daily Plans, and Settings.
- The Server interacts with the MySQL database via Prisma to perform CRUD operations.

## Critical Implementation Paths

- **Daily Plan Creation:** Fetching ToDos and Habits, selecting items, adding new items, saving the daily plan.
- **Daily Plan View:** Displaying the planned tasks, allowing reordering, marking tasks as complete.
- **ToDo/Habit Management:** Creating, reading, updating, and deleting tasks/habits.
- **User Authentication/Authorization:** (Implicit requirement for account settings, needs to be designed).
- **Settings Management:** Updating user preferences.

## Directory Structure

- `client/`: Frontend code.
    - `src/`: Source files.
        - `dist-tsc/`: tsc output.
        - `scripts/`: JS code (ESM, JSDoc).
        - `styles/`: CSS.
        - `index.html`: Main HTML file.
    - `dist/`: Vite build output.
- `server/`: Backend code.
    - `prisma/`: Prisma schema and migrations.
    - `generated/prisma/`: Prisma client code.
    - `src/`: JS code (ESM, JSDoc).
    - `dist/`: tsc output.
- `db/`: Database related files (e.g., configuration).
- `docker-compose.yaml`: Defines the multi-container Docker environment.
